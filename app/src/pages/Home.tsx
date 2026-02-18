import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, MessageCircle, Bot, Workflow, 
  TrendingUp, Users, Clock, Star, ChevronDown
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Automations Built', icon: Zap },
  { value: '150+', label: 'Happy Clients', icon: Users },
  { value: '10K+', label: 'Hours Saved', icon: Clock },
  { value: '99%', label: 'Success Rate', icon: TrendingUp },
];

const howItWorks = [
  {
    step: '01',
    title: 'Choose Your Solution',
    description: 'Browse our templates or request a custom-built AI automation tailored to your business needs.',
    icon: Zap,
  },
  {
    step: '02',
    title: 'Quick Setup',
    description: 'We handle the technical setup. Most automations are deployed within 24-48 hours.',
    icon: Workflow,
  },
  {
    step: '03',
    title: 'Scale & Grow',
    description: 'Watch your business run on autopilot while you focus on what matters most.',
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'TechFlow Dubai',
    content: 'Build By Alistar transformed our lead generation. The WhatsApp bot alone saved us 20+ hours per week.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'CEO',
    company: 'Startup Gulf',
    content: 'The AI automation templates are incredible. We deployed 5 automations in just one week.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Operations Manager',
    company: 'Global Retail Co',
    content: 'Professional, fast, and reliable. The custom booking bot exceeded our expectations.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What types of automations do you build?',
    answer: 'We build AI chatbots, WhatsApp automations, workflow integrations, lead capture systems, appointment schedulers, content generators, and custom AI agents using n8n and other tools.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Ready-made templates can be deployed within 24 hours. Custom solutions typically take 3-7 days depending on complexity.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! All our automations come with support. We also offer monthly maintenance packages for updates and optimizations.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Absolutely. We integrate with 5000+ apps including Google Workspace, Slack, Notion, CRMs, and more via n8n, Make, and Zapier.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
      heroTitle.classList.add('animate-fade-in');
    }
    if (heroSubtitle) {
      setTimeout(() => heroSubtitle.classList.add('animate-fade-in'), 200);
    }
    if (heroButtons) {
      setTimeout(() => heroButtons.classList.add('animate-fade-in'), 400);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#070A12]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-transparent to-[#070A12]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-transparent to-[#070A12]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2D6BFF] rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B35] rounded-full opacity-10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative section-padding w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full">
                  <Zap className="w-4 h-4 text-[#2D6BFF]" />
                  <span className="text-sm text-[#A7B1C8]">AI Automation Experts</span>
                </div>

                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight opacity-0 translate-y-4 transition-all duration-700">
                  Automate Your Business with{' '}
                  <span className="gradient-text">AI Agents</span> & Smart Bots
                </h1>

                <p className="hero-subtitle text-lg sm:text-xl text-[#A7B1C8] max-w-xl opacity-0 translate-y-4 transition-all duration-700">
                  Save time, close more leads, and scale faster using intelligent automation 
                  that works 24/7. Ready-made templates and custom solutions.
                </p>

                <div className="hero-buttons flex flex-wrap gap-4 opacity-0 translate-y-4 transition-all duration-700">
                  <Link to="/templates" className="btn-primary flex items-center gap-2">
                    <span>View Templates</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://tools.buildbyalistar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Bot className="w-4 h-4" />
                    <span>AI Tools</span>
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] border-2 border-[#070A12] flex items-center justify-center"
                      >
                        <span className="text-xs font-bold text-white">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                      ))}
                    </div>
                    <p className="text-sm text-[#A7B1C8]">Trusted by 150+ businesses</p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#2D6BFF] to-[#FF6B35] rounded-3xl opacity-20 blur-2xl" />
                  <div className="relative glass-card p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-[rgba(45,107,255,0.1)] rounded-xl">
                        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">WhatsApp Bot</p>
                          <p className="text-[#25D366] text-sm">Active - 24 new messages</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-[rgba(45,107,255,0.1)] rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-full flex items-center justify-center">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">AI Agent</p>
                          <p className="text-[#2D6BFF] text-sm">Processing documents...</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-[rgba(45,107,255,0.1)] rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8F5C] rounded-full flex items-center justify-center">
                          <Workflow className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Workflow</p>
                          <p className="text-[#FF6B35] text-sm">12 automations running</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#A7B1C8] uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-[#2D6BFF] animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#A7B1C8]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(45,107,255,0.03)] to-transparent" />
        <div className="section-padding relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Get Started in <span className="gradient-text">3 Simple Steps</span>
              </h2>
              <p className="text-[#A7B1C8] max-w-2xl mx-auto">
                From idea to automation in record time. We make the process simple and hassle-free.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="glass-card p-8 relative group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#2D6BFF] to-[#FF6B35] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mb-6 bg-[rgba(45,107,255,0.15)] rounded-2xl flex items-center justify-center group-hover:bg-[rgba(45,107,255,0.25)] transition-colors">
                    <step.icon className="w-8 h-8 text-[#2D6BFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#A7B1C8]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,107,53,0.03)] to-transparent" />
        <div className="section-padding relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card p-6 relative group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                    ))}
                  </div>

                  <p className="text-white mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-[#A7B1C8] text-sm">{testimonial.role}</p>
                      <p className="text-[#2D6BFF] text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="glass-card group open:border-[rgba(45,107,255,0.5)] transition-all"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#2D6BFF] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[#A7B1C8] leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(45,107,255,0.1)] to-[rgba(255,107,53,0.1)]" />
        <div className="section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-[#A7B1C8] text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI automation can save you time and help you scale. 
              Get in touch today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/templates" className="btn-primary flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Explore Templates</span>
              </Link>
              <a
                href="https://tools.buildbyalistar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                <span>Try AI Tools</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
