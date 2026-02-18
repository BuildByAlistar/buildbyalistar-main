import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Bot, Check, X, Upload, Download, Instagram, 
  CreditCard, Calendar, Gift, Sparkles, FileText, 
  Loader2, AlertCircle, MessageCircle,
  Mail, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Document categories
const categories = [
  { value: 'auto', label: 'Auto-detect (Recommended)' },
  { value: 'accounting', label: 'Accounting / Finance' },
  { value: 'company', label: 'Company Document' },
  { value: 'contracts', label: 'Contracts / Legal' },
  { value: 'support', label: 'Customer Support' },
  { value: 'deliveries', label: 'Deliveries' },
  { value: 'emirates', label: 'Emirates ID Automation' },
  { value: 'general', label: 'General Documents' },
  { value: 'hr', label: 'HR / Employees' },
  { value: 'insurance-medical', label: 'Insurance Medical' },
  { value: 'insurance-motor', label: 'Insurance Motor' },
  { value: 'inventory', label: 'Inventory / Stock' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'passport', label: 'Passport Automation' },
  { value: 'purchase', label: 'Purchase / Suppliers' },
  { value: 'restaurants', label: 'Restaurants' },
  { value: 'salons', label: 'Salons' },
  { value: 'fleet', label: 'Vehicle Fleet' },
  { value: 'visa', label: 'Visa Page Automation' },
];

// Credit packs
const creditPacks = [
  { entries: 20, price: 20, perEntry: '1.00', popular: false },
  { entries: 55, price: 50, perEntry: '0.90', popular: false },
  { entries: 125, price: 100, perEntry: '0.80', popular: false },
  { entries: 400, price: 300, perEntry: '0.75', popular: false },
  { entries: 750, price: 500, perEntry: '0.66', popular: false },
  { entries: 3000, price: 1800, perEntry: '0.60', popular: true },
];

// Subscription tiers
const subscriptions = [
  { entries: 500, price: 300, savings: '400', popular: false },
  { entries: 1000, price: 500, savings: '800', popular: false },
  { entries: 2000, price: 1200, savings: '1600', popular: false },
  { entries: 3000, price: 1500, savings: '', popular: true },
  { entries: 5000, price: 1750, savings: '4000', popular: false },
];

export default function DataEntry() {
  // Access control state
  const [accessCode, setAccessCode] = useState('');
  const [accessVerified, setAccessVerified] = useState(false);
  const [accessType, setAccessType] = useState<'trial' | 'vip' | null>(null);
  const [fileLimit, setFileLimit] = useState(0);
  const [accessError, setAccessError] = useState('');
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [trialCodeInput, setTrialCodeInput] = useState('');

  // File upload state
  const [selectedCategory, setSelectedCategory] = useState('auto');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Results state
  const [extractedData, setExtractedData] = useState<any[]>([]);

  // Verify access code
  const verifyAccess = () => {
    setAccessError('');
    
    if (accessCode.trim().toUpperCase() === 'TRIAL') {
      setShowTrialModal(true);
    } else if (accessCode.trim().toUpperCase() === 'DXB2026') {
      setAccessVerified(true);
      setAccessType('vip');
      setFileLimit(3000);
    } else {
      setAccessError('Invalid Code. Please Subscribe.');
    }
  };

  // Verify trial code
  const verifyTrial = () => {
    if (trialCodeInput.trim().toUpperCase() === 'TRIAL') {
      setAccessVerified(true);
      setAccessType('trial');
      setFileLimit(3);
      setShowTrialModal(false);
    } else {
      setAccessError('Invalid trial code. Please follow @buildbyalistar and try again.');
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length > fileLimit) {
        alert(`File limit exceeded! Your plan allows ${fileLimit} files. You selected ${files.length}.`);
        return;
      }
      setUploadedFiles(files);
    }
  };

  // Handle drag and drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > fileLimit) {
      alert(`File limit exceeded! Your plan allows ${fileLimit} files. You selected ${files.length}.`);
      return;
    }
    setUploadedFiles(files);
  };

  // Process documents
  const processDocuments = async () => {
    if (uploadedFiles.length === 0) {
      alert('Please upload files first!');
      return;
    }

    setIsProcessing(true);

    // Simulate API processing
    setTimeout(() => {
      // Mock extracted data
      const mockData = [
        {
          sourceFile: uploadedFiles[0]?.name || 'document_001.pdf',
          category: categories.find(c => c.value === selectedCategory)?.label || 'Auto-detect',
          documentType: 'Invoice',
          name: 'ABC Trading LLC',
          idNumber: 'INV-2024-001',
          date: '15,750 AED',
          status: 'Extracted'
        },
        {
          sourceFile: uploadedFiles[1]?.name || 'passport_scan.jpg',
          category: 'Passport Automation',
          documentType: 'Passport',
          name: 'MOHAMMED ALI KHAN',
          idNumber: 'P78456912',
          date: 'Exp: 15/03/2028',
          status: 'Extracted'
        },
        {
          sourceFile: uploadedFiles[2]?.name || 'emirates_id.png',
          category: 'Emirates ID Automation',
          documentType: 'Emirates ID',
          name: 'FATIMA HASSAN',
          idNumber: '784-1234-5678901-2',
          date: 'Exp: 20/11/2027',
          status: 'Extracted'
        },
      ];

      setExtractedData(mockData);
      setShowResults(true);
      setIsProcessing(false);
    }, 2000);
  };

  // Download Excel
  const downloadExcel = () => {
    const csvContent = [
      ['Source File', 'Category', 'Document Type', 'Name/Company', 'ID/Reference', 'Date/Amount', 'Status'],
      ...extractedData.map(row => [
        row.sourceFile,
        row.category,
        row.documentType,
        row.name,
        row.idNumber,
        row.date,
        row.status
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Data_Extraction_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#070A12]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(7,10,18,0.95)] backdrop-blur-xl border-b border-[rgba(45,107,255,0.15)]">
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D6BFF] to-[#FF6B35] rounded-xl opacity-80" />
                <Zap className="relative w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Build By</span>
                <span className="text-lg font-bold gradient-text ml-1">Alistar</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/" className="text-[#A7B1C8] hover:text-white transition-colors text-sm">
                Back to Home
              </Link>
              <a
                href="https://wa.me/971558796245"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 lg:pt-28 pb-20">
        {/* Hero Section */}
        <section className="section-padding mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#6366f1]" />
              <span className="text-sm text-[#A7B1C8]">Intelligent Document Processing Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">AI Data Entry</span> Automation Suite
            </h1>
            
            <p className="text-xl text-[#A7B1C8] mb-4">
              Stop Manual Typing. Cut Your Data Entry Costs.
            </p>
            
            <p className="text-[#A7B1C8] max-w-2xl mx-auto">
              Transform Your Data Entry Process: Upload, Extract, and Excel with Precision and Speed
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-[#A7B1C8]">
                <Check className="w-5 h-5 text-[#22c55e]" />
                <span>Drag & Drop 100 files at once</span>
              </div>
              <div className="flex items-center gap-2 text-[#A7B1C8]">
                <Check className="w-5 h-5 text-[#22c55e]" />
                <span>Instant Excel: Get formatted sheets ready</span>
              </div>
              <div className="flex items-center gap-2 text-[#A7B1C8]">
                <Check className="w-5 h-5 text-[#22c55e]" />
                <span>From Any Document to Excel Instantly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {!accessVerified && (
          <section className="section-padding mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Choose Your Access Method</h2>
              <p className="text-[#A7B1C8]">Select the option that works best for your needs</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Free Trial */}
              <div className="glass-card p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[rgba(34,197,94,0.2)] rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Free Trial</h3>
                    <p className="text-sm text-[#A7B1C8]">Try before you buy</p>
                  </div>
                </div>

                <p className="text-[#A7B1C8] mb-4">
                  Get 3 free entries to test our AI-powered data extraction.
                </p>

                <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Instagram className="w-5 h-5 text-[#22c55e]" />
                    <span className="text-white font-medium">Requirement</span>
                  </div>
                  <p className="text-sm text-[#A7B1C8]">
                    Follow{' '}
                    <a 
                      href="https://www.instagram.com/buildbyalistar?igsh=MTRyM2Q4dHNudzh2Mg==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22c55e] hover:underline"
                    >
                      @buildbyalistar
                    </a>
                    {' '}on Instagram
                  </p>
                </div>

                <Button 
                  onClick={() => setAccessCode('TRIAL')}
                  className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:opacity-90"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Start Free Trial
                </Button>
              </div>

              {/* Buy Credits */}
              <div className="glass-card p-6 relative border-[rgba(99,102,241,0.5)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#6366f1] to-[#7B4DFF] text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[rgba(99,102,241,0.2)] rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Buy Credits</h3>
                    <p className="text-sm text-[#A7B1C8]">Pay-as-you-go flexibility</p>
                  </div>
                </div>

                <p className="text-[#A7B1C8] mb-4">
                  Purchase entry packs and use them anytime. No expiry.
                </p>

                <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                  {creditPacks.map((pack, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        pack.popular ? 'bg-[rgba(99,102,241,0.2)] border border-[#6366f1]' : 'bg-[rgba(255,255,255,0.03)]'
                      }`}
                    >
                      <div>
                        <div className="text-white font-medium">{pack.entries.toLocaleString()} Entries</div>
                        <div className="text-sm text-[#A7B1C8]">{pack.price} AED</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#22c55e] text-sm">({pack.perEntry}/entry)</div>
                        {pack.popular && <span className="text-xs text-[#6366f1] font-bold">BEST VALUE</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://pay.ziina.com/buidbyalistar/LhhIBy3-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Purchase Credits
                </a>
              </div>

              {/* Monthly Subscription */}
              <div className="glass-card p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[rgba(249,115,22,0.2)] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Monthly Subscription</h3>
                    <p className="text-sm text-[#A7B1C8]">Unlimited monthly entries</p>
                  </div>
                </div>

                <p className="text-[#A7B1C8] mb-4">
                  Recurring monthly billing. Best for regular data entry needs.
                </p>

                <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                  {subscriptions.map((sub, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        sub.popular ? 'bg-[rgba(249,115,22,0.2)] border border-[#f97316]' : 'bg-[rgba(255,255,255,0.03)]'
                      }`}
                    >
                      <div>
                        <div className="text-white font-medium">{sub.entries.toLocaleString()}/month</div>
                        <div className="text-sm text-[#A7B1C8]">{sub.price} AED/month</div>
                      </div>
                      <div className="text-right">
                        {sub.savings && <div className="text-xs text-[#6366f1]">Save {sub.savings} AED</div>}
                        {sub.popular && <span className="text-xs text-[#f97316] font-bold">POPULAR</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://pay.ziina.com/buidbyalistar/LhhIBy3-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-warning w-full text-center block"
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Subscribe Now
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Access Control */}
        <section className="section-padding mb-12">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Bot className="w-6 h-6 text-[#6366f1]" />
              Access Verification
            </h3>

            {!accessVerified ? (
              <>
                <div className="flex gap-4 mb-4">
                  <Input
                    type="password"
                    placeholder="Enter access code (TRIAL or DXB2026)"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="flex-1 bg-[#0B0F1C] border-[#334155] text-white"
                  />
                  <Button 
                    onClick={verifyAccess}
                    className="bg-gradient-to-r from-[#6366f1] to-[#7B4DFF]"
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    Verify Access
                  </Button>
                </div>

                {accessError && (
                  <Alert className="bg-[rgba(239,68,68,0.1)] border-[rgba(239,68,68,0.3)]">
                    <AlertCircle className="w-4 h-4 text-[#ef4444]" />
                    <AlertDescription className="text-[#ef4444]">
                      {accessError}{' '}
                      <a 
                        href="https://pay.ziina.com/buidbyalistar/LhhIBy3-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Subscribe here
                      </a>
                    </AlertDescription>
                  </Alert>
                )}

                <div className="bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)] rounded-lg p-4 mt-4">
                  <p className="text-[#A7B1C8] text-sm">
                    <strong className="text-white">Get Access:</strong> Use code "TRIAL" for 3 free files or{' '}
                    <a 
                      href="https://pay.ziina.com/buidbyalistar/LhhIBy3-m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6366f1] hover:underline"
                    >
                      subscribe
                    </a>
                    {' '}for unlimited access.
                  </p>
                </div>
              </>
            ) : (
              <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  <span className="text-white font-medium">
                    {accessType === 'trial' ? 'FREE Trial' : 'VIP'} Access Granted!
                  </span>
                </div>
                <p className="text-[#A7B1C8] text-sm">
                  File Limit: {fileLimit} files | Category: {categories.find(c => c.value === selectedCategory)?.label}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Document Processing Tool */}
        {accessVerified && (
          <section className="section-padding">
            {/* Category Selector */}
            <div className="glass-card p-6 max-w-2xl mx-auto mb-6">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#6366f1]" />
                Document Category
              </h4>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-[#0B0F1C] border-[#334155] text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e293b] border-[#334155]">
                  {categories.map((cat) => (
                    <SelectItem 
                      key={cat.value} 
                      value={cat.value}
                      className="text-white hover:bg-[#334155]"
                    >
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* File Upload */}
            <div className="glass-card p-6 max-w-2xl mx-auto mb-6">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#6366f1]" />
                Upload Documents
              </h4>

              <div 
                className="border-2 border-dashed border-[#334155] rounded-xl p-12 text-center cursor-pointer hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.05)] transition-all"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <Upload className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                <h5 className="text-xl text-white font-medium mb-2">
                  Drag & Drop Your Files Here
                </h5>
                <p className="text-[#A7B1C8] mb-1">or click to browse from your computer</p>
                <p className="text-[#64748b] text-sm">
                  Supported formats: PDF, JPG, PNG, JPEG (Max {fileLimit} files)
                </p>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  multiple 
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)] rounded-lg p-4">
                  <p className="text-white mb-2">
                    <Upload className="w-4 h-4 inline mr-2 text-[#6366f1]" />
                    <strong>{uploadedFiles.length} file(s) selected</strong>
                  </p>
                  <ul className="text-sm text-[#A7B1C8] space-y-1">
                    {uploadedFiles.slice(0, 5).map((file, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {file.name}
                      </li>
                    ))}
                    {uploadedFiles.length > 5 && (
                      <li className="text-[#64748b]">... and {uploadedFiles.length - 5} more</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Process Button */}
            <div className="text-center mb-8">
              <Button 
                onClick={processDocuments}
                disabled={isProcessing || uploadedFiles.length === 0}
                className="btn-primary text-lg px-12 py-6"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Processing
                  </>
                )}
              </Button>
            </div>

            {/* Results */}
            {showResults && (
              <div className="glass-card p-6 max-w-5xl mx-auto">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#6366f1]" />
                  Extracted Data
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#334155]">
                        <th className="text-left p-3 text-[#6366f1] font-medium">Source File</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">Category</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">Document Type</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">Name/Company</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">ID/Reference</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">Date/Amount</th>
                        <th className="text-left p-3 text-[#6366f1] font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {extractedData.map((row, idx) => (
                        <tr key={idx} className="border-b border-[#334155] hover:bg-[rgba(255,255,255,0.02)]">
                          <td className="p-3 text-white">{row.sourceFile}</td>
                          <td className="p-3 text-[#A7B1C8]">{row.category}</td>
                          <td className="p-3 text-[#A7B1C8]">{row.documentType}</td>
                          <td className="p-3 text-white">{row.name}</td>
                          <td className="p-3 text-[#A7B1C8]">{row.idNumber}</td>
                          <td className="p-3 text-[#A7B1C8]">{row.date}</td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-[rgba(34,197,94,0.2)] text-[#22c55e] text-xs rounded-full">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-center mt-6">
                  <Button 
                    onClick={downloadExcel}
                    className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:opacity-90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Excel File
                  </Button>
                </div>

                <div className="mt-4 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-lg p-4 text-center">
                  <Check className="w-5 h-5 text-[#22c55e] inline mr-2" />
                  <span className="text-white">
                    Successfully processed {extractedData.length} document(s) | {Object.keys(extractedData[0] || {}).length} fields extracted | Ready for download
                  </span>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Trial Modal */}
      <Dialog open={showTrialModal} onOpenChange={setShowTrialModal}>
        <DialogContent className="bg-[#1e293b] border-[#334155] text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="w-16 h-16 bg-[rgba(34,197,94,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-[#22c55e]" />
            </div>
            <DialogTitle className="text-xl">Start Your Free Trial</DialogTitle>
            <DialogDescription className="text-[#A7B1C8]">
              Follow us on Instagram to unlock 3 free entries
            </DialogDescription>
          </DialogHeader>

          <a 
            href="https://www.instagram.com/buildbyalistar?igsh=MTRyM2Q4dHNudzh2Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-success w-full text-center block mb-4"
          >
            <Instagram className="w-4 h-4 inline mr-2" />
            Follow @buildbyalistar
          </a>

          <p className="text-[#A7B1C8] text-sm text-center mb-4">
            After following, enter the trial code below:
          </p>

          <Input
            type="text"
            placeholder="Enter code: TRIAL"
            value={trialCodeInput}
            onChange={(e) => setTrialCodeInput(e.target.value)}
            className="bg-[#0B0F1C] border-[#334155] text-white mb-4"
          />

          {accessError && (
            <Alert className="bg-[rgba(239,68,68,0.1)] border-[rgba(239,68,68,0.3)] mb-4">
              <AlertDescription className="text-[#ef4444]">
                {accessError}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => setShowTrialModal(false)}
              className="flex-1 border-[#334155] text-white hover:bg-[#334155]"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={verifyTrial}
              className="flex-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a]"
            >
              <Check className="w-4 h-4 mr-2" />
              Verify & Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-[#070A12] border-t border-[rgba(45,107,255,0.15)] py-12">
        <div className="section-padding text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">AI Data Entry Automation Suite</h3>
            <p className="text-[#A7B1C8]">Professional Data Entry AI by Build By Alistar</p>
          </div>

          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="https://wa.me/971558796245" target="_blank" rel="noopener noreferrer" className="text-[#A7B1C8] hover:text-white flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +971 55 879 6245
            </a>
            <a href="mailto:buidbyalistar@gmail.com" className="text-[#A7B1C8] hover:text-white flex items-center gap-2">
              <Mail className="w-4 h-4" />
              buidbyalistar@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://www.instagram.com/buildbyalistar?igsh=MTRyM2Q4dHNudzh2Mg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-[#A7B1C8] hover:bg-[#6366f1] hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/971558796245" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-[#A7B1C8] hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="mailto:buidbyalistar@gmail.com"
              className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-[#A7B1C8] hover:bg-[#6366f1] hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[#64748b] text-sm">
            Powered by <strong className="text-white">Build By Alistar</strong> | AI Automation Solutions
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20AI%20Data%20Entry"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-10" />
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          </div>
        </div>
      </a>
    </div>
  );
}
