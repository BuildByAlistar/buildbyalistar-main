import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'AI Chatbots', path: '/chatbots' },
    { name: 'WhatsApp Solutions', path: '/whatsapp' },
    { name: 'Workflow Automation', path: '/workflows' },
    { name: 'Custom Bots', path: '/services' },
  ],
  products: [
    { name: 'Templates', path: '/templates' },
    { name: 'Courses', path: '/courses' },
    { name: 'Pricing', path: '/pricing' },
  ],
  company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#070A12] border-t border-[rgba(45,107,255,0.15)]">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D6BFF] to-[#FF6B35] rounded-xl" />
                <Zap className="relative w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Build By</span>
                <span className="text-xl font-bold gradient-text ml-1">Alistar</span>
              </div>
            </Link>
            <p className="text-[#A7B1C8] text-sm leading-relaxed mb-6 max-w-sm">
              Digital Skills & AI Automation. We build intelligent bots, automate workflows, 
              and help businesses scale with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:buidbyalistar@gmail.com"
                className="flex items-center gap-3 text-[#A7B1C8] hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-[#2D6BFF]" />
                buidbyalistar@gmail.com
              </a>
              <a
                href="https://wa.me/971558796245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#A7B1C8] hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#2D6BFF]" />
                +971 55 879 6245
              </a>
              <div className="flex items-center gap-3 text-[#A7B1C8] text-sm">
                <MapPin className="w-4 h-4 text-[#2D6BFF]" />
                Dubai, UAE
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A7B1C8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A7B1C8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A7B1C8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(45,107,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A7B1C8] text-sm">
            © 2026 Build By Alistar. All rights reserved.
          </p>
          <a
            href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors text-sm font-medium"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
