import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { TECHNICAL_DOMAINS } from '../data/companyData';
import {
  Cpu,
  Radio,
  Cog,
  Stethoscope,
  Zap,
  FlaskConical,
  ArrowRight,
  Code2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  'ai-software': Cpu,
  'telecom-electronics': Radio,
  'mechanical-engineering': Cog,
  'medical-devices': Stethoscope,
  'cleantech-energy': Zap,
  'materials-biotech': FlaskConical,
};

export const TechnicalDomains: React.FC = () => {
  const { openConsultationModal } = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  return (
    <section id="technical-domains-section" className="relative py-20 bg-charcoal-900/40 border-t border-b border-white/10 overflow-hidden">
      {/* Background Animated SVG Technical Diagram (Schematic mesh) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-schematic-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#d4af37" />
              <path d="M 0 40 L 80 40 M 40 0 L 40 80" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="40" cy="40" r="20" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-schematic-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-gold-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>CROSS-DISCIPLINARY ENGINEERING DEPTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Complex Technical Domains & High-Value Patent Matters
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300">
            xyz IP supports patent work across complex technical fields requiring deep technical understanding, claim-level analysis, and structured prior-art reasoning.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_DOMAINS.map((domain) => {
            const Icon = ICON_MAP[domain.id] || Code2;
            const isHovered = selectedDomain === domain.id;

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setSelectedDomain(domain.id)}
                onMouseLeave={() => setSelectedDomain(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-left ${
                  isHovered
                    ? 'bg-charcoal-900 border-gold-500 shadow-xl shadow-gold-500/10'
                    : 'bg-charcoal-950 border-white/10 hover:border-gold-500/40'
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-2 leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-charcoal-500 tracking-wider block mb-1">
                      Key Technical Focus Areas
                    </span>
                    {domain.subfields.map((field, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-charcoal-300">
                        <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        <span className="line-clamp-1">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10">
                  <button
                    onClick={() => openConsultationModal(`Technical inquiry in ${domain.title}`)}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center space-x-1"
                  >
                    <span>Discuss {domain.title.split(',')[0]} Matters</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
