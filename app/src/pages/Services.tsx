import { Bot, Calendar, Filter, Crown, Package, CheckSquare, Mail, Clock, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Table Booking Bot',
    description: 'Automated restaurant table reservations with confirmation and reminder system.',
    setupPrice: 999,
    monthlyPrice: 199,
    icon: Calendar,
    features: ['24/7 booking', 'SMS confirmations', 'Reminder system', 'Calendar sync'],
  },
  {
    id: 2,
    name: 'Basic Receptionist',
    description: 'AI receptionist that handles calls, messages, and basic inquiries.',
    setupPrice: 600,
    monthlyPrice: 150,
    icon: Bot,
    features: ['Call handling', 'Message routing', 'FAQ responses', 'Multi-language'],
  },
  {
    id: 3,
    name: 'Filter Bot',
    description: 'Smart lead filtering and qualification bot for sales teams.',
    setupPrice: 850,
    monthlyPrice: 200,
    icon: Filter,
    features: ['Lead scoring', 'Auto-qualification', 'CRM integration', 'Reports'],
  },
  {
    id: 4,
    name: 'VIP Capture Bot',
    description: 'Premium lead capture with advanced nurturing and follow-up sequences.',
    setupPrice: 1500,
    monthlyPrice: 350,
    icon: Crown,
    features: ['Advanced nurturing', 'Email sequences', 'Priority routing', 'Analytics'],
    popular: true,
  },
  {
    id: 5,
    name: 'Inventory Automation',
    description: 'Automated inventory tracking, alerts, and reorder management.',
    setupPrice: 500,
    monthlyPrice: 100,
    icon: Package,
    features: ['Stock tracking', 'Low stock alerts', 'Auto-reorders', 'Reports'],
  },
  {
    id: 6,
    name: 'Task Manager Bot',
    description: 'AI-powered task management with reminders and team coordination.',
    setupPrice: null,
    monthlyPrice: null,
    icon: CheckSquare,
    features: ['Task creation', 'Team assignments', 'Deadline tracking', 'Reminders'],
    contact: true,
  },
  {
    id: 7,
    name: 'Gmail Manager Bot',
    description: 'Smart email management with auto-sorting, drafting, and responses.',
    setupPrice: null,
    monthlyPrice: null,
    icon: Mail,
    features: ['Auto-sorting', 'Smart drafts', 'Auto-responses', 'Priority inbox'],
    contact: true,
  },
  {
    id: 8,
    name: 'Calendar Manager Bot',
    description: 'Intelligent calendar management with scheduling and conflict resolution.',
    setupPrice: null,
    monthlyPrice: null,
    icon: Clock,
    features: ['Smart scheduling', 'Conflict resolution', 'Meeting prep', 'Reminders'],
    contact: true,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Custom Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Custom AI Bots & <span className="gradient-text">Automation</span> Services
            </h1>
            <p className="text-lg text-[#A7B1C8] max-w-2xl mx-auto">
              We design, build, and integrate AI agents that match your workflow—exactly. 
              From simple bots to complex enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card p-6 flex flex-col group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-[#A7B1C8] text-sm mb-4 flex-grow">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                      <span className="text-xs text-[#A7B1C8]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[rgba(45,107,255,0.15)]">
                  {service.contact ? (
                    <div className="text-center">
                      <span className="text-sm text-[#A7B1C8]">Custom pricing</span>
                      <a
                        href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20${encodeURIComponent(service.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] text-white text-sm font-semibold rounded-lg hover:shadow-[0_8px_30px_rgba(45,107,255,0.4)] transition-all"
                      >
                        <span>Contact for Price</span>
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#A7B1C8] text-sm">Setup:</span>
                        <span className="text-white font-semibold">{service.setupPrice} AED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#A7B1C8] text-sm">Monthly:</span>
                        <span className="text-white font-semibold">{service.monthlyPrice} AED</span>
                      </div>
                      <a
                        href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20${encodeURIComponent(service.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] text-white text-sm font-semibold rounded-lg hover:shadow-[0_8px_30px_rgba(45,107,255,0.4)] transition-all"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-[#A7B1C8]">Simple process, powerful results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your needs' },
              { step: '02', title: 'Design', desc: 'We plan your solution' },
              { step: '03', title: 'Build', desc: 'We develop and test' },
              { step: '04', title: 'Deploy', desc: 'We launch and support' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-[#A7B1C8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(45,107,255,0.1)] to-[rgba(255,107,53,0.1)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Have a Unique Requirement?
              </h2>
              <p className="text-[#A7B1C8] mb-6">
                We love challenges. Tell us what you need and we&apos;ll build it.
              </p>
              <a
                href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I%20have%20a%20custom%20requirement"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
