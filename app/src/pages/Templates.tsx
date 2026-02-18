import { ShoppingCart, TrendingUp, MessageSquare, Briefcase, Mic, FileText, Share2, ArrowRight, Check } from 'lucide-react';

const templates = [
  {
    id: 1,
    title: 'AI Trend Watcher',
    description: 'Automatically monitor trends across social media and news sources. Get daily summaries of what\'s trending in your industry.',
    price: 499,
    icon: TrendingUp,
    features: ['Daily trend reports', 'Multi-source monitoring', 'AI summaries', 'Slack/Email delivery'],
    popular: true,
  },
  {
    id: 2,
    title: 'LinkedIn Scheduler',
    description: 'Schedule and automate your LinkedIn posts with AI-powered content suggestions and optimal timing.',
    price: 399,
    icon: Share2,
    features: ['Auto-scheduling', 'Content suggestions', 'Analytics dashboard', 'Team collaboration'],
    popular: false,
  },
  {
    id: 3,
    title: 'AI Personal Assistant',
    description: 'Your 24/7 AI assistant that manages emails, schedules meetings, and handles routine tasks.',
    price: 599,
    icon: MessageSquare,
    features: ['Email management', 'Calendar scheduling', 'Task prioritization', 'Smart reminders'],
    popular: true,
  },
  {
    id: 4,
    title: 'Viral Content Generator',
    description: 'Generate engaging content ideas and drafts optimized for virality across platforms.',
    price: 449,
    icon: FileText,
    features: ['AI content generation', 'Viral score analysis', 'Multi-platform support', 'Hashtag suggestions'],
    popular: false,
  },
  {
    id: 5,
    title: 'Upwork Job Scraper',
    description: 'Automatically find and apply to relevant Upwork jobs based on your skills and preferences.',
    price: 549,
    icon: Briefcase,
    features: ['Smart job matching', 'Auto-applications', 'Proposal templates', 'Rate tracking'],
    popular: false,
  },
  {
    id: 6,
    title: 'Voice Appointment Bot',
    description: 'AI voice assistant that handles appointment bookings, reminders, and rescheduling calls.',
    price: 799,
    icon: Mic,
    features: ['Voice AI calls', 'Calendar integration', 'SMS reminders', 'Multi-language support'],
    popular: true,
  },
  {
    id: 7,
    title: 'RAG Document Chat',
    description: 'Upload documents and chat with them using AI. Perfect for research and knowledge management.',
    price: 699,
    icon: FileText,
    features: ['Document upload', 'AI chat interface', 'Source citations', 'Team sharing'],
    popular: false,
  },
  {
    id: 8,
    title: 'Social Media Auto-Poster',
    description: 'Cross-post content to multiple social platforms with AI-optimized captions and hashtags.',
    price: 349,
    icon: Share2,
    features: ['Multi-platform posting', 'AI captions', 'Best time scheduling', 'Performance analytics'],
    popular: false,
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Templates Marketplace
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready-Made <span className="gradient-text">Automation</span> Templates
            </h1>
            <p className="text-lg text-[#A7B1C8] max-w-2xl mx-auto">
              Plug-and-play automation systems for content, outreach, scheduling, and lead capture. 
              Deploy in minutes, scale in hours.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="glass-card p-6 flex flex-col group hover:border-[rgba(45,107,255,0.5)] transition-all duration-300"
              >
                {template.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] text-white text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <template.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{template.title}</h3>
                <p className="text-[#A7B1C8] text-sm mb-4 flex-grow">{template.description}</p>

                <div className="space-y-2 mb-6">
                  {template.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                      <span className="text-xs text-[#A7B1C8]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(45,107,255,0.15)]">
                  <div>
                    <span className="text-2xl font-bold gradient-text">{template.price}</span>
                    <span className="text-[#A7B1C8] text-sm"> AED</span>
                  </div>
                  <a
                    href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(template.title)}%20template`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] text-white text-sm font-semibold rounded-lg hover:shadow-[0_8px_30px_rgba(45,107,255,0.4)] transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy</span>
                  </a>
                </div>
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
                Need a Custom Solution?
              </h2>
              <p className="text-[#A7B1C8] mb-6">
                We can build a tailored automation specifically for your business workflow.
              </p>
              <a
                href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I%20need%20a%20custom%20automation%20solution"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Request Custom Build</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
