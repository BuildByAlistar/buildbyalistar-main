import { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickReplies = [
  { label: 'Templates', path: '/templates' },
  { label: 'Custom Bot', path: '/services' },
  { label: 'Courses', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 sm:w-96 glass-card overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">AI Assistant</h4>
                <p className="text-white/70 text-xs">Powered by Build By Alistar</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {/* Bot Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2D6BFF] to-[#7B4DFF] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-[rgba(45,107,255,0.1)] border border-[rgba(45,107,255,0.2)] rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="text-white text-sm">
                  Hi! How can I help you today?
                </p>
              </div>
            </div>

            {/* Quick Replies */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {quickReplies.map((reply) => (
                <Link
                  key={reply.label}
                  to={reply.path}
                  onClick={() => setIsOpen(false)}
                  className="text-center px-3 py-2 bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.25)] rounded-lg text-[#A7B1C8] hover:text-white hover:border-[rgba(45,107,255,0.5)] transition-all text-sm"
                >
                  {reply.label}
                </Link>
              ))}
            </div>

            <p className="text-[#A7B1C8] text-xs text-center pt-2">
              Or chat with us directly on{' '}
              <a
                href="https://wa.me/971558796245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[rgba(45,107,255,0.15)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[rgba(11,15,28,0.8)] border border-[rgba(45,107,255,0.2)] rounded-lg px-3 py-2 text-white text-sm placeholder:text-[#A7B1C8] focus:outline-none focus:border-[rgba(45,107,255,0.5)]"
              />
              <a
                href={`https://wa.me/971558796245?text=${encodeURIComponent(message || 'Hi Alistar')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] rounded-lg text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-[#0B0F1C] border border-[rgba(45,107,255,0.3)] text-white hover:bg-[rgba(45,107,255,0.1)]'
            : 'bg-gradient-to-r from-[#2D6BFF] to-[#7B4DFF] text-white hover:shadow-[0_8px_30px_rgba(45,107,255,0.4)] hover:scale-110'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
