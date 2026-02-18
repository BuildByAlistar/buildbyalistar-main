import { Bot, MessageSquare, Globe, Mic, Workflow, Check, ArrowRight, Sparkles } from 'lucide-react';

const chatbotTypes = [
  {
    id: 1,
    title: 'Website Chatbots',
    description: 'Engage visitors, answer questions, and convert leads directly on your website.',
    icon: Globe,
    features: ['24/7 availability', 'Lead capture', 'FAQ automation', 'Custom branding'],
    price: 'From 599 AED',
  },
  {
    id: 2,
    title: 'Reception Bots',
    description: 'AI receptionist that handles inquiries, routes calls, and manages appointments.',
    icon: Users,
    features: ['Call handling', 'Message routing', 'Appointment booking', 'Multi-language'],
    price: 'From 600 AED',
  },
  {
    id: 3,
    title: 'Booking Bots',
    description: 'Automated scheduling and reservation management for any business type.',
    icon: MessageSquare,
    features: ['Calendar sync', 'Reminders', 'Rescheduling', 'Payments'],
    price: 'From 999 AED',
  },
  {
    id: 4,
    title: 'Voice Assistants',
    description: 'AI-powered voice bots for phone calls and voice-enabled interactions.',
    icon: Mic,
    features: ['Natural speech', 'Call automation', 'IVR replacement', 'Analytics'],
    price: 'From 799 AED',
  },
  {
    id: 5,
    title: 'AI Agents with n8n',
    description: 'Advanced AI agents integrated with n8n for complex workflow automation.',
    icon: Workflow,
    features: ['n8n integration', 'Custom workflows', 'API connections', 'Memory & context'],
    price: 'Custom',
  },
];

const features = [
  {
    title: 'Natural Conversations',
    description: 'AI that understands context and responds naturally, not like a robot.',
    icon: Sparkles,
  },
  {
    title: 'Instant Responses',
    description: 'No wait times. Your customers get answers immediately, 24/7.',
    icon: Zap,
  },
  {
    title: 'Easy Integration',
    description: 'Works with your existing tools: CRM, helpdesk, calendar, and more.',
    icon: Workflow,
  },
  {
    title: 'Human Handoff',
    description: 'Seamlessly transfer complex conversations to human agents when needed.',
    icon: Users,
  },
];

export default function Chatbots() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full mb-6">
                <Bot className="w-4 h-4 text-[#2D6BFF]" />
                <span className="text-sm text-[#A7B1C8]">AI Chatbot Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Chatbots That <span className="gradient-text">Convert</span> Visitors
              </h1>
              
              <p className="text-lg text-[#A7B1C8] mb-8">
                Answer questions, qualify leads, and book meetings—automatically. 
                Our AI chatbots work 24/7 to grow your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20chatbots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get a Chatbot</span>
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-[rgba(45,107,255,0.15)] rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-white text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-end">
                    <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-white text-sm">I need help with automation</p>
                    </div>
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">You</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-[rgba(45,107,255,0.15)] rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-white text-sm">Great! I can help you with that. What type of automation are you looking for?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Our Chatbots
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI Chatbot <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#A7B1C8] max-w-2xl mx-auto">
              Choose the right chatbot for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbotTypes.map((bot) => (
              <div
                key={bot.id}
                className="glass-card p-6 flex flex-col group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <bot.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{bot.title}</h3>
                <p className="text-[#A7B1C8] text-sm mb-4 flex-grow">{bot.description}</p>

                <ul className="space-y-2 mb-6">
                  {bot.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                      <span className="text-xs text-[#A7B1C8]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[rgba(45,107,255,0.15)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2D6BFF] font-semibold">{bot.price}</span>
                    <a
                      href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20${encodeURIComponent(bot.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-white hover:text-[#2D6BFF] transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Our <span className="gradient-text">Chatbots</span> Stand Out
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:border-[rgba(45,107,255,0.4)] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[rgba(45,107,255,0.15)] rounded-xl flex items-center justify-center group-hover:bg-[rgba(45,107,255,0.25)] transition-colors">
                  <feature.icon className="w-7 h-7 text-[#2D6BFF]" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-[#A7B1C8] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Zap, Users } from 'lucide-react';
