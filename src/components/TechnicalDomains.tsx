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
    <section id="technical-domains-section" className="relative py-20 bg-slate-900/60 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Background Animated SVG Technical Diagram (Schematic mesh) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-schematic-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#60a5fa" />
              <path d="M 0 40 L 80 40 M 40 0 L 40 80" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="40" cy="40" r="20" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-schematic-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>CROSS-DISCIPLINARY ENGINEERING DEPTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Complex Technical Domains & High-Value Patent Matters
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
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
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/60'
                    : 'bg-slate-950 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/70">
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-1">
                      Key Technical Focus Areas
                    </span>
                    {domain.subfields.map((field, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="line-clamp-1">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/60">
                  <button
                    onClick={() => openConsultationModal(`Technical inquiry in ${domain.title}`)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center space-x-1"
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
