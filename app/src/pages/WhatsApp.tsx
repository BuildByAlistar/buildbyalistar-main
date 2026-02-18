import { MessageSquare, Users, Send, Headphones, TrendingUp, Check, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'WhatsApp Lead Capture Bot',
    description: 'Automatically capture and qualify leads through WhatsApp. Respond instantly to inquiries 24/7.',
    icon: Users,
    features: [
      'Instant auto-replies',
      'Lead qualification',
      'CRM integration',
      'Multi-language support',
      'Analytics dashboard',
    ],
  },
  {
    id: 2,
    title: 'WhatsApp Broadcast Bot',
    description: 'Send personalized messages to thousands of contacts with high open rates.',
    icon: Send,
    features: [
      'Bulk messaging',
      'Personalization tags',
      'Scheduled broadcasts',
      'Delivery tracking',
      'Template management',
    ],
  },
  {
    id: 3,
    title: 'WhatsApp Customer Support Bot',
    description: 'Provide instant customer support with AI-powered responses and human handoff.',
    icon: Headphones,
    features: [
      '24/7 auto-responses',
      'FAQ automation',
      'Human handoff',
      'Ticket creation',
      'Support analytics',
    ],
  },
];

const benefits = [
  {
    title: '98% Open Rate',
    description: 'WhatsApp messages have the highest engagement compared to email or SMS.',
    icon: TrendingUp,
  },
  {
    title: 'Instant Delivery',
    description: 'Messages delivered in seconds, not hours or days.',
    icon: Send,
  },
  {
    title: 'Global Reach',
    description: 'Connect with customers worldwide on their preferred platform.',
    icon: Users,
  },
  {
    title: 'Cost Effective',
    description: 'Lower cost per interaction compared to traditional channels.',
    icon: TrendingUp,
  },
];

export default function WhatsApp() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] rounded-full mb-6">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm text-[#A7B1C8]">WhatsApp Business API</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                WhatsApp <span className="gradient-text">Solutions</span> for Modern Teams
              </h1>
              
              <p className="text-lg text-[#A7B1C8] mb-8">
                Broadcasts, auto-replies, and lead capture—running inside the app your 
                customers already use. Reach your audience where they are.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20WhatsApp%20solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[rgba(37,211,102,0.1)] rounded-xl">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">WhatsApp Business</p>
                      <p className="text-[#25D366] text-sm">Connected & Active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[rgba(37,211,102,0.1)] rounded-xl">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Active Conversations</p>
                      <p className="text-[#25D366] text-sm">1,247 active chats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful WhatsApp <span className="gradient-text">Automation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="glass-card p-8 group hover:border-[rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-[#A7B1C8] mb-6">{solution.description}</p>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                      <span className="text-sm text-[#A7B1C8]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20${encodeURIComponent(solution.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] rounded-lg text-white hover:bg-[rgba(37,211,102,0.25)] transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why WhatsApp <span className="gradient-text">Works</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:border-[rgba(37,211,102,0.4)] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[rgba(37,211,102,0.15)] rounded-xl flex items-center justify-center group-hover:bg-[rgba(37,211,102,0.25)] transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#25D366]" />
                </div>
                <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                <p className="text-[#A7B1C8] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
                <p className="text-[#A7B1C8]">Message Open Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">45%</div>
                <p className="text-[#A7B1C8]">Response Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2B+</div>
                <p className="text-[#A7B1C8]">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
