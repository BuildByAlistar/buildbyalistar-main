import { Zap, Target, Users, Check, MessageSquare, ArrowRight, Star } from 'lucide-react';

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve, constantly exploring new AI technologies and automation possibilities.',
    icon: Zap,
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the results we deliver for you.',
    icon: Target,
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprises. Clear communication and honest pricing every step of the way.',
    icon: Check,
  },
  {
    title: 'Continuous Support',
    description: 'We don\'t just build and leave. We provide ongoing support to ensure everything runs smoothly.',
    icon: Users,
  },
];

const achievements = [
  { value: '500+', label: 'Automations Built' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'AI Bots Deployed' },
  { value: '10K+', label: 'Hours Saved' },
];

const expertise = [
  'AI Chatbots & Conversational AI',
  'WhatsApp Business Automation',
  'Workflow Automation (n8n, Make, Zapier)',
  'Custom AI Agent Development',
  'Process Optimization',
  'Training & Consulting',
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full mb-6">
              <Star className="w-4 h-4 text-[#2D6BFF]" />
              <span className="text-sm text-[#A7B1C8]">About Us</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building the Future of <span className="gradient-text">Business Automation</span>
            </h1>
            
            <p className="text-lg text-[#A7B1C8]">
              Build By Alistar is a Dubai-based AI automation studio helping businesses 
              save time, reduce costs, and scale faster through intelligent automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-[#A7B1C8]">
                <p>
                  Founded with a mission to democratize AI automation, Build By Alistar 
                  has grown from a solo venture to a trusted partner for businesses across 
                  the UAE and beyond.
                </p>
                <p>
                  We believe that every business, regardless of size, should have access 
                  to powerful automation tools that were once only available to enterprise 
                  companies with massive budgets.
                </p>
                <p>
                  Our approach combines cutting-edge AI technology with practical business 
                  understanding. We don&apos;t just build bots—we build solutions that solve 
                  real problems and deliver measurable results.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Our Expertise</h3>
              <div className="space-y-4">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#A7B1C8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {achievements.map((item, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {item.value}
                  </div>
                  <p className="text-[#A7B1C8]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-[#A7B1C8]">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:border-[rgba(45,107,255,0.5)] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-[#A7B1C8] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(45,107,255,0.1)] to-[rgba(255,107,53,0.1)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-[#A7B1C8] mb-6">
                Ready to transform your business with AI automation? We&apos;re here to help.
              </p>
              <a
                href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
