import { Workflow, Zap, GitBranch, Database, Mail, Calendar, MessageSquare, FileText, Check, Settings } from 'lucide-react';

const integrations = [
  { name: 'Google Workspace', icon: Mail, category: 'Productivity' },
  { name: 'Slack', icon: MessageSquare, category: 'Communication' },
  { name: 'Notion', icon: FileText, category: 'Documentation' },
  { name: 'Airtable', icon: Database, category: 'Database' },
  { name: 'Calendar', icon: Calendar, category: 'Scheduling' },
  { name: 'CRM', icon: Settings, category: 'Sales' },
];

const features = [
  {
    title: 'Visual Builder',
    description: 'Drag-and-drop interface to create complex workflows without coding.',
    icon: GitBranch,
  },
  {
    title: '5000+ Integrations',
    description: 'Connect with virtually any app or service you use.',
    icon: Zap,
  },
  {
    title: 'Conditional Logic',
    description: 'Create smart workflows that adapt based on conditions and triggers.',
    icon: Settings,
  },
  {
    title: 'Error Handling',
    description: 'Built-in error detection and recovery to keep workflows running smoothly.',
    icon: Check,
  },
];

export default function Workflows() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full mb-6">
                <Workflow className="w-4 h-4 text-[#2D6BFF]" />
                <span className="text-sm text-[#A7B1C8]">Workflow Automation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Workflow Automation That <span className="gradient-text">Actually Works</span>
              </h1>
              
              <p className="text-lg text-[#A7B1C8] mb-8">
                Visual builders, reliable triggers, and clean handoffs between apps. 
                Connect your tools into one coherent system.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20workflow%20automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Get Started</span>
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#2D6BFF] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] rounded-full" />
                  <div className="w-12 h-12 bg-[#7B4DFF] rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-[#7B4DFF] to-[#FF6B35] rounded-full" />
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-center text-[#A7B1C8] text-sm">Connect your apps seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:border-[rgba(45,107,255,0.5)] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-[#A7B1C8] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Connect Your <span className="gradient-text">Favorite Tools</span>
            </h2>
            <p className="text-[#A7B1C8]">5000+ integrations available</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="glass-card p-4 text-center group hover:border-[rgba(45,107,255,0.4)] transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[rgba(45,107,255,0.15)] rounded-xl flex items-center justify-center group-hover:bg-[rgba(45,107,255,0.25)] transition-colors">
                  <integration.icon className="w-6 h-6 text-[#2D6BFF]" />
                </div>
                <p className="text-white text-sm font-medium">{integration.name}</p>
                <p className="text-[#A7B1C8] text-xs">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
