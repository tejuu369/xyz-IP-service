import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Optional contextual bubble */}
      {tooltipOpen && (
        <div className="mr-3 bg-slate-900 border border-slate-700/80 text-white text-xs py-2 px-3 rounded-xl shadow-xl flex items-center space-x-2 animate-in fade-in slide-in-from-right-2">
          <span>Chat directly with our IP team</span>
          <button
            onClick={() => setTooltipOpen(false)}
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipOpen(true)}
        aria-label="Let's Chat on WhatsApp with xyz IP"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />

        {/* Accessible tooltip for screen readers / hover */}
        <span className="sr-only">Let's Chat on WhatsApp</span>
      </a>
    </div>
  );
};
