import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Templates', path: '/templates' },
  { name: 'Services', path: '/services' },
  { name: 'WhatsApp', path: '/whatsapp' },
  { name: 'Chatbots', path: '/chatbots' },
  { name: 'Courses', path: '/courses' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[rgba(7,10,18,0.9)] backdrop-blur-xl border-b border-[rgba(45,107,255,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-black/40 border border-white/10 transition-all duration-300 group-hover:border-[#2D6BFF]/50">
              <img
                src="/logo.png"
                alt="Build By Alistar logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white">Build By</span>
              <span className="text-lg font-bold gradient-text ml-1">Alistar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-[rgba(45,107,255,0.15)]'
                    : 'text-[#A7B1C8] hover:text-white hover:bg-[rgba(45,107,255,0.1)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="https://tools.buildbyalistar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-[#A7B1C8] hover:text-white hover:bg-[rgba(45,107,255,0.1)]"
            >
              AI Tools
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-[rgba(45,107,255,0.15)] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-[rgba(45,107,255,0.15)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-[rgba(45,107,255,0.15)]'
                    : 'text-[#A7B1C8] hover:text-white hover:bg-[rgba(45,107,255,0.1)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://tools.buildbyalistar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 text-[#A7B1C8] hover:text-white hover:bg-[rgba(45,107,255,0.1)]"
            >
              AI Tools
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
