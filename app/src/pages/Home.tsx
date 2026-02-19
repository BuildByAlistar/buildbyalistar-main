import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'WhatsApp Bots',
    description:
      'Convert every inquiry instantly with smart replies, lead qualification, and automated follow-ups on WhatsApp.',
    icon: MessageCircle,
    highlight: 'Lead capture + support 24/7',
  },
  {
    title: 'Chatbots',
    description:
      'Deploy AI chatbots for your website and funnels to answer questions, qualify prospects, and book meetings.',
    icon: Sparkles,
    highlight: 'Fast onboarding for your team',
  },
  {
    title: 'AI Tools',
    description:
      'Access practical AI tools that improve productivity, automate workflows, and help your business scale faster.',
    icon: Sparkles,
    highlight: 'Ready to use in minutes',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#2D6BFF]/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FF6B35]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,107,255,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.12),transparent_40%)]" />
        </div>

        <div className="section-padding relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Build By Alistar"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Scale Your Business With AI Automation
              </h1>

              <p className="mt-4 text-white/70 text-lg">
                We build WhatsApp bots, chatbots, and AI tools that convert conversations into consistent revenue.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/#contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2"
                >
                  Get AI Automation
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://tools.buildbyalistar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 inline-flex items-center gap-2"
                >
                  Explore AI Tools
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold">Services designed for fast results</h2>
              <p className="text-[#A7B1C8] mt-3 max-w-2xl mx-auto">
                Launch proven automation systems that reduce manual work and increase conversion rates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="glass-card p-6 border border-[rgba(45,107,255,0.18)] hover:border-[rgba(45,107,255,0.45)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#A7B1C8] mb-4">{service.description}</p>
                  <p className="text-sm text-[#D5DEEF]">{service.highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto glass-card border border-[rgba(45,107,255,0.25)] p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#2D6BFF]/20 blur-3xl rounded-full" />
            <div className="relative grid lg:grid-cols-[1.6fr_auto] gap-8 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#A7B1C8] mb-3">Featured Tool</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  AI Data Entry Tool that keeps your operations moving
                </h2>
                <p className="text-[#A7B1C8] max-w-3xl">
                  Reduce repetitive admin work with our AI Data Entry Tool. Process forms, extract details,
                  and sync clean data into your workflows with speed and accuracy.
                </p>
              </div>
              <a
                href="https://tools.buildbyalistar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Open AI Data Entry Tool
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
