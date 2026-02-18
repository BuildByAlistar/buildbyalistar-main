import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971558796245?text=Hi%20Alistar%2C%20I'm%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse animation rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-10" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
          <div className="bg-[#0B0F1C] border border-[rgba(37,211,102,0.3)] text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat on WhatsApp
          </div>
        </div>
      </div>
    </a>
  );
}
