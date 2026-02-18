# fast_data_entry_app.py
import os
import re
import json
import base64
from io import BytesIO
from datetime import datetime

import streamlit as st
import pandas as pd
import requests

# PDF -> image conversion (PyMuPDF)
import fitz  # pip install pymupdf

# =========================
# CONFIG
# =========================
KIMI_BASE_URL = os.getenv("KIMI_BASE_URL", "https://api.moonshot.ai/v1").strip().rstrip("/")
KIMI_MODEL = os.getenv("KIMI_MODEL", "kimi-k2.5").strip()
TEMPERATURE = 1  # IMPORTANT: some Kimi models only allow temperature=1
MAX_PDF_PAGES = int(os.getenv("MAX_PDF_PAGES", "3"))
PDF_DPI = int(os.getenv("PDF_DPI", "200"))
REQUEST_TIMEOUT = int(os.getenv("KIMI_TIMEOUT", "120"))

# =========================
# HELPERS
# =========================
def get_api_key() -> str:
    # Prefer env var
    key = os.getenv("KIMI_API_KEY", "").strip()
    if key:
        return key

    # Fall back to Streamlit secrets
    try:
        key = st.secrets.get("KIMI_API_KEY", "")
        return (key or "").strip()
    except Exception:
        return ""


def image_bytes_to_data_url(image_bytes: bytes, mime: str) -> str:
    b64 = base64.b64encode(image_bytes).decode("utf-8")
    return f"data:{mime};base64,{b64}"


def pdf_to_images_bytes(pdf_bytes: bytes, max_pages: int = MAX_PDF_PAGES, dpi: int = PDF_DPI):
    """
    Convert first N PDF pages to PNG bytes using PyMuPDF.
    Great for scanned/image PDFs.
    """
    images = []
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")
    page_count = min(len(doc), max_pages)

    zoom = dpi / 72.0
    mat = fitz.Matrix(zoom, zoom)

    for i in range(page_count):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        images.append(pix.tobytes("png"))

    doc.close()
    return images


def extract_json_from_text(text: str):
    """
    Robustly pull JSON object from model output.
    Handles markdown fences and extra text.
    """
    if not text:
        return None

    t = text.strip()

    # Remove markdown fences
    t = re.sub(r"^```(?:json)?\s*", "", t, flags=re.IGNORECASE)
    t = re.sub(r"\s*```$", "", t)

    # Try direct JSON parse
    try:
        return json.loads(t)
    except Exception:
        pass

    # Try find first {...} block
    m = re.search(r"\{[\s\S]*\}", t)
    if m:
        try:
            return json.loads(m.group(0))
        except Exception:
            return None

    return None


def call_kimi_chat(messages, api_key: str, use_response_format: bool = True) -> str:
    """
    Calls Moonshot / Kimi OpenAI-compatible endpoint: /chat/completions
    Tries to force JSON output with response_format when possible.
    If API rejects response_format, it retries without it.
    """
    url = f"{KIMI_BASE_URL}/chat/completions"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": KIMI_MODEL,
        "messages": messages,
        "temperature": TEMPERATURE,
        "max_tokens": 2000,
    }

    if use_response_format:
        # Some OpenAI-compatible APIs support this. If Moonshot rejects it, we retry.
        payload["response_format"] = {"type": "json_object"}

    resp = requests.post(url, headers=headers, json=payload, timeout=REQUEST_TIMEOUT)

    if resp.status_code != 200:
        # Show readable error
        raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:800]}")

    data = resp.json()
    return data["choices"][0]["message"]["content"]


def build_extraction_messages(file_name: str, data_urls: list):
    """
    Build a prompt that strongly forces JSON ONLY.
    """
    system_msg = (
        "You are a strict document data extraction engine.\n"
        "Return ONLY valid JSON. No markdown. No explanations.\n"
        "If a field is not found, return an empty string."
    )

    user_text = f"""
Extract these fields from the provided document images:

- full_name
- passport_number
- nationality
- date_of_birth
- visa_number
- company_name

Return ONLY this JSON shape (same keys):
{{
  "full_name": "",
  "passport_number": "",
  "nationality": "",
  "date_of_birth": "",
  "visa_number": "",
  "company_name": ""
}}

File: {file_name}
""".strip()

    user_content = [{"type": "text", "text": user_text}]

    for url in data_urls:
        user_content.append({"type": "image_url", "image_url": {"url": url}})

    return [
        {"role": "system", "content": system_msg},
        {"role": "user", "content": user_content},
    ]


def build_json_repair_messages(bad_text: str):
    """
    If model returns something not-valid JSON, send it back and ask for strict JSON only.
    """
    system_msg = "You output ONLY valid JSON. No markdown. No extra text."
    user_text = f"""
Fix the following into valid JSON ONLY.
Return only one JSON object and nothing else.

TEXT:
{bad_text}
""".strip()

    return [
        {"role": "system", "content": system_msg},
        {"role": "user", "content": user_text},
    ]


def to_excel_bytes(df: pd.DataFrame) -> bytes:
    output = BytesIO()
    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="Results")
    return output.getvalue()


# =========================
# STREAMLIT UI
# =========================
st.set_page_config(page_title="UAE Universal Data Entry Tool", layout="wide")
st.title("UAE Universal Data Entry Tool")
st.caption("Upload documents (PDF/JPG/PNG) and extract structured fields using Kimi K2.5.")

with st.expander("Debug (optional)"):
    st.write("Base URL:", KIMI_BASE_URL)
    st.write("Model:", KIMI_MODEL)
    st.write("Temperature:", TEMPERATURE)
    st.write("MAX_PDF_PAGES:", MAX_PDF_PAGES)
    st.write("API key loaded:", bool(get_api_key()))
    if get_api_key():
        st.write("API key length:", len(get_api_key()))

api_key = get_api_key()
if not api_key:
    st.error("❌ KIMI_API_KEY not found.")
    st.info('PowerShell (same terminal):  $env:KIMI_API_KEY="your-key-here"  then run: streamlit run fast_data_entry_app.py')
    st.stop()

uploaded = st.file_uploader(
    "Upload documents (PDF/JPG/PNG)",
    type=["pdf", "png", "jpg", "jpeg"],
    accept_multiple_files=True,
)

process_btn = st.button("🚀 Process Documents", type="primary", disabled=(not uploaded))

if "results" not in st.session_state:
    st.session_state["results"] = []

if process_btn and uploaded:
    st.session_state["results"] = []
    progress = st.progress(0)
    status = st.empty()

    for idx, f in enumerate(uploaded):
        try:
            status.info(f"Processing: {f.name} ({idx+1}/{len(uploaded)})")
            file_bytes = f.read()
            lower_name = f.name.lower()

            # Prepare images
            data_urls = []
            if lower_name.endswith(".pdf"):
                status.info(f"Converting PDF → images (first {MAX_PDF_PAGES} pages): {f.name}")
                images = pdf_to_images_bytes(file_bytes)
                if not images:
                    raise ValueError("Could not convert PDF to images.")
                for img in images:
                    data_urls.append(image_bytes_to_data_url(img, "image/png"))
            else:
                mime = "image/jpeg" if lower_name.endswith((".jpg", ".jpeg")) else "image/png"
                data_urls.append(image_bytes_to_data_url(file_bytes, mime))

            # Call API (try with response_format, then without)
            messages = build_extraction_messages(f.name, data_urls)

            raw = None
            try:
                raw = call_kimi_chat(messages, api_key=api_key, use_response_format=True)
            except Exception as e:
                # Retry without response_format if API doesn't support it
                raw = call_kimi_chat(messages, api_key=api_key, use_response_format=False)

            parsed = extract_json_from_text(raw)

            # If still not JSON, do one repair pass
            if not isinstance(parsed, dict):
                repair_msgs = build_json_repair_messages(raw[:2000])
                try:
                    raw2 = call_kimi_chat(repair_msgs, api_key=api_key, use_response_format=True)
                except Exception:
                    raw2 = call_kimi_chat(repair_msgs, api_key=api_key, use_response_format=False)
                parsed = extract_json_from_text(raw2)

            if not isinstance(parsed, dict):
                raise ValueError(f"Model did not return valid JSON. Raw response (first 800 chars): {raw[:800]}")

            row = {
                "full_name": (parsed.get("full_name") or "").strip(),
                "passport_number": (parsed.get("passport_number") or "").strip(),
                "nationality": (parsed.get("nationality") or "").strip(),
                "date_of_birth": (parsed.get("date_of_birth") or "").strip(),
                "visa_number": (parsed.get("visa_number") or "").strip(),
                "company_name": (parsed.get("company_name") or "").strip(),
                "file_name": f.name,
                "error": "",
            }

            st.session_state["results"].append(row)
            status.success(f"✅ Done: {f.name}")

        except Exception as e:
            st.session_state["results"].append(
                {
                    "full_name": "",
                    "passport_number": "",
                    "nationality": "",
                    "date_of_birth": "",
                    "visa_number": "",
                    "company_name": "",
                    "file_name": f.name,
                    "error": str(e),
                }
            )
            status.error(f"❌ Failed: {f.name} — {e}")

        progress.progress((idx + 1) / len(uploaded))

    status.success("✅ All files processed!")


# =========================
# RESULTS
# =========================
st.subheader("Results")

if st.session_state["results"]:
    df = pd.DataFrame(st.session_state["results"])

    errors = df[df["error"] != ""]
    if not errors.empty:
        st.warning("Some files had errors. See below.")
        st.dataframe(errors[["file_name", "error"]], use_container_width=True)

    st.dataframe(df, use_container_width=True)

    excel_bytes = to_excel_bytes(df)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    st.download_button(
        "⬇️ Download Excel",
        data=excel_bytes,
        file_name=f"uae_data_entry_{ts}.xlsx",
        mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )
else:
    st.info("Upload files and click **Process Documents**.")
