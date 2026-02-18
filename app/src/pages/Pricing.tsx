import { Check, Zap, MessageSquare, ArrowRight, Bot, Crown } from 'lucide-react';

const templatePricing = [
  {
    name: 'Starter',
    description: 'Perfect for trying out automation',
    price: 299,
    period: 'one-time',
    icon: Zap,
    features: [
      '1 ready-made template',
      'Basic setup guide',
      'Email support',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: 799,
    period: 'one-time',
    icon: Bot,
    features: [
      '3 templates of choice',
      'Priority setup',
      'WhatsApp support',
      '1 month maintenance',
      'Customization guide',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For teams needing everything',
    price: 1999,
    period: 'one-time',
    icon: Crown,
    features: [
      'All 8+ templates',
      'White-glove setup',
      'Priority support',
      '3 months maintenance',
      'Custom integrations',
      'Training session',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

const customServices = [
  { name: 'Table Booking Bot', setup: 999, monthly: 199 },
  { name: 'Basic Receptionist', setup: 600, monthly: 150 },
  { name: 'Filter Bot', setup: 850, monthly: 200 },
  { name: 'VIP Capture Bot', setup: 1500, monthly: 350 },
  { name: 'Inventory Automation', setup: 500, monthly: 100 },
  { name: 'Task Manager Bot', setup: null, monthly: null, contact: true },
  { name: 'Gmail Manager Bot', setup: null, monthly: null, contact: true },
  { name: 'Calendar Manager Bot', setup: null, monthly: null, contact: true },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-[#A7B1C8] max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include setup support 
            and documentation.
          </p>
        </div>
      </section>

      {/* Template Pricing */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Template <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-[#A7B1C8]">Ready-made automation templates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {templatePricing.map((plan, idx) => (
              <div
                key={idx}
                className={`glass-card p-8 flex flex-col relative ${
                  plan.popular ? 'border-[rgba(255,107,53,0.5)]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center">
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#A7B1C8] text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-[#A7B1C8]"> AED</span>
                  <span className="text-[#A7B1C8] text-sm block">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                      <span className="text-sm text-[#A7B1C8]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] text-white hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)]'
                      : 'bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.3)] text-white hover:border-[rgba(45,107,255,0.6)]'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services Pricing */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Custom Bot <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#A7B1C8]">Setup fee + monthly maintenance</p>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(45,107,255,0.2)]">
                    <th className="text-left p-4 text-white font-semibold">Service</th>
                    <th className="text-right p-4 text-white font-semibold">Setup (AED)</th>
                    <th className="text-right p-4 text-white font-semibold">Monthly (AED)</th>
                    <th className="text-right p-4 text-white font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customServices.map((service, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[rgba(45,107,255,0.1)] hover:bg-[rgba(45,107,255,0.05)] transition-colors"
                    >
                      <td className="p-4 text-[#A7B1C8]">{service.name}</td>
                      <td className="p-4 text-right text-white">
                        {service.contact ? '—' : service.setup}
                      </td>
                      <td className="p-4 text-right text-white">
                        {service.contact ? '—' : service.monthly}
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20${encodeURIComponent(service.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#2D6BFF] hover:text-white transition-colors"
                        >
                          <span>{service.contact ? 'Contact' : 'Order'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(45,107,255,0.1)] to-[rgba(255,107,53,0.1)]" />
            <div className="relative">
              <MessageSquare className="w-12 h-12 text-[#2D6BFF] mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Have Questions?
              </h2>
              <p className="text-[#A7B1C8] mb-6">
                Chat with us on WhatsApp for custom quotes or any questions.
              </p>
              <a
                href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I%20have%20questions%20about%20pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
