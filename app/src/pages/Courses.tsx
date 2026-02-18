import { BookOpen, TrendingUp, Briefcase, Clock, Users, Star, Check, ArrowRight, Zap } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Upwork Essentials',
    description: 'Master Upwork and land high-paying clients consistently.',
    icon: Briefcase,
    duration: '4 weeks',
    students: '500+',
    rating: 4.9,
    topics: ['Profile optimization', 'Proposal writing', 'Client communication', 'Rate negotiation'],
  },
  {
    id: 2,
    title: 'Start Freelancing with AI',
    description: 'Launch your freelance career using AI tools to work smarter.',
    icon: Zap,
    duration: '6 weeks',
    students: '800+',
    rating: 4.8,
    topics: ['AI tools overview', 'Automation basics', 'Client acquisition', 'Portfolio building'],
  },
  {
    id: 3,
    title: 'Freelance Growth',
    description: 'Scale your freelance business from solo to agency.',
    icon: TrendingUp,
    duration: '8 weeks',
    students: '300+',
    rating: 4.9,
    topics: ['Scaling strategies', 'Team building', 'Systems & processes', 'Premium pricing'],
  },
  {
    id: 4,
    title: 'Facebook Ads Mastery',
    description: 'Create and manage profitable Facebook ad campaigns.',
    icon: Target,
    duration: '5 weeks',
    students: '600+',
    rating: 4.7,
    topics: ['Ad creation', 'Audience targeting', 'Budget optimization', 'Analytics & reporting'],
  },
  {
    id: 5,
    title: 'Copywriting Pro',
    description: 'Write copy that sells and converts readers into customers.',
    icon: PenTool,
    duration: '4 weeks',
    students: '450+',
    rating: 4.8,
    topics: ['Persuasion techniques', 'Headline formulas', 'Email sequences', 'Sales pages'],
  },
  {
    id: 6,
    title: 'Viral Content Creation',
    description: 'Create content that gets shared and grows your audience.',
    icon: Share2,
    duration: '3 weeks',
    students: '700+',
    rating: 4.6,
    topics: ['Viral mechanics', 'Content formats', 'Platform strategies', 'Engagement tactics'],
  },
  {
    id: 7,
    title: 'AI Content Creator',
    description: 'Use AI to create high-quality content at scale.',
    icon: Cpu,
    duration: '4 weeks',
    students: '900+',
    rating: 4.9,
    topics: ['AI writing tools', 'Content workflows', 'SEO optimization', 'Batch creation'],
  },
  {
    id: 8,
    title: 'AI Tools for Creators',
    description: 'Master the best AI tools for content creators and marketers.',
    icon: Lightbulb,
    duration: '3 weeks',
    students: '1000+',
    rating: 4.7,
    topics: ['Tool selection', 'Workflow integration', 'Automation setup', 'Best practices'],
  },
  {
    id: 9,
    title: 'Think Smarter with AI',
    description: 'Develop an AI-first mindset for problem-solving and innovation.',
    icon: BookOpen,
    duration: '5 weeks',
    students: '400+',
    rating: 4.8,
    topics: ['AI thinking', 'Prompt engineering', 'Problem decomposition', 'Innovation frameworks'],
  },
];

import { Target, PenTool, Share2, Cpu, Lightbulb } from 'lucide-react';

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-[#FF6B35]" />
                <span className="text-sm text-[#A7B1C8]">Training Programs</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Training Courses That <span className="gradient-text">Move the Needle</span>
              </h1>
              
              <p className="text-lg text-[#A7B1C8] mb-8">
                Learn to build, launch, and monetize AI automations—step by step, 
                with real projects and expert guidance.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20your%20courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Inquire About Courses</span>
                </a>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-2xl font-bold gradient-text">9+</div>
                  <div className="text-sm text-[#A7B1C8]">Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">5,000+</div>
                  <div className="text-sm text-[#A7B1C8]">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">4.8</div>
                  <div className="text-sm text-[#A7B1C8]">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] to-[#2D6BFF] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[rgba(255,107,53,0.1)] rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8F5C] rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Course Progress</p>
                      <p className="text-[#FF6B35] text-sm">75% Complete</p>
                    </div>
                  </div>
                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(255,107,53,0.15)] border border-[rgba(255,107,53,0.3)] rounded-full text-sm text-[#A7B1C8] mb-4">
              Available Courses
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="glass-card p-6 flex flex-col group hover:border-[rgba(255,107,53,0.5)] transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#FF6B35] to-[#FF8F5C] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <course.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-[#A7B1C8] text-sm mb-4 flex-grow">{course.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-[#A7B1C8]">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#A7B1C8]">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FF6B35]">
                    <Star className="w-4 h-4 fill-[#FF6B35]" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.topics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                      <span className="text-xs text-[#A7B1C8]">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[rgba(45,107,255,0.15)]">
                  <a
                    href={`https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5C] text-white text-sm font-semibold rounded-lg hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)] transition-all"
                  >
                    <span>Contact for Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
