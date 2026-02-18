import { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, Send, Clock, Globe, Check } from 'lucide-react';

const contactMethods = [
  {
    title: 'WhatsApp',
    description: 'Fastest response time',
    value: '+971 55 879 6245',
    link: 'https://wa.me/971558796245?text=Hi%20Alistar%2C%20I\'m%20interested%20in%20your%20services',
    icon: MessageSquare,
    color: '#25D366',
  },
  {
    title: 'Email',
    description: 'For detailed inquiries',
    value: 'buidbyalistar@gmail.com',
    link: 'mailto:buidbyalistar@gmail.com',
    icon: Mail,
    color: '#2D6BFF',
  },
  {
    title: 'Phone',
    description: 'Available during business hours',
    value: '+971 55 879 6245',
    link: 'tel:+971558796245',
    icon: Phone,
    color: '#FF6B35',
  },
];

const businessHours = [
  { day: 'Sunday - Thursday', hours: '9:00 AM - 6:00 PM GST' },
  { day: 'Friday - Saturday', hours: 'Limited availability' },
];

const services = [
  'AI Chatbots',
  'WhatsApp Automation',
  'Workflow Automation',
  'Custom AI Agents',
  'Training & Courses',
  'Consulting',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      const whatsappMessage = `Hi Alistar, I'm ${formData.name}. I'm interested in ${formData.service}. ${formData.message}`;
      window.open(`https://wa.me/971558796245?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#070A12] pt-24 pb-20">
      {/* Hero */}
      <section className="section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(45,107,255,0.15)] border border-[rgba(45,107,255,0.3)] rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-[#2D6BFF]" />
              <span className="text-sm text-[#A7B1C8]">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            
            <p className="text-lg text-[#A7B1C8]">
              Tell us what you&apos;re building. We&apos;ll reply with next steps and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 group hover:border-[rgba(45,107,255,0.5)] transition-all"
              >
                <div
                  className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${method.color}20` }}
                >
                  <method.icon className="w-7 h-7" style={{ color: method.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                <p className="text-[#A7B1C8] text-sm mb-3">{method.description}</p>
                <p className="text-white font-medium">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#A7B1C8]">Redirecting you to WhatsApp...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-[#A7B1C8] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.2)] rounded-lg px-4 py-3 text-white placeholder:text-[#A7B1C8] focus:outline-none focus:border-[rgba(45,107,255,0.5)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A7B1C8] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.2)] rounded-lg px-4 py-3 text-white placeholder:text-[#A7B1C8] focus:outline-none focus:border-[rgba(45,107,255,0.5)] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A7B1C8] mb-2">Service Interest</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.2)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[rgba(45,107,255,0.5)] transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#A7B1C8] mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.2)] rounded-lg px-4 py-3 text-white placeholder:text-[#A7B1C8] focus:outline-none focus:border-[rgba(45,107,255,0.5)] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#2D6BFF]" />
                      <div>
                        <p className="text-white text-sm">{item.day}</p>
                        <p className="text-[#A7B1C8] text-xs">{item.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2D6BFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white">Dubai, United Arab Emirates</p>
                    <p className="text-[#A7B1C8] text-sm mt-1">
                      Serving clients globally with remote-first operations
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#2D6BFF]" />
                  <p className="text-[#A7B1C8]">
                    We typically respond within <span className="text-white font-semibold">2-4 hours</span> during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
