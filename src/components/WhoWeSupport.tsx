import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { STAKEHOLDERS } from '../data/companyData';
import {
  Rocket,
  Briefcase,
  Globe,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Shield,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Briefcase,
  Globe,
  GraduationCap,
};

export const WhoWeSupport: React.FC = () => {
  const { openConsultationModal } = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const current = STAKEHOLDERS[activeTab];
  const CurrentIcon = ICON_MAP[current.icon] || Briefcase;

  return (
    <section id="stakeholders-section" className="relative py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-gold-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>SPECIALIZED CLIENT ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Patent Support for Every IP Stakeholder
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300">
            Tailored techno-legal workflows configured for the specific legal, operational, and commercial objectives of your organization.
          </p>
        </div>

        {/* 4 Tabs Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {STAKEHOLDERS.map((s, idx) => {
            const Icon = ICON_MAP[s.icon] || Briefcase;
            const isSelected = activeTab === idx;

            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-32 ${
                  isSelected
                    ? 'bg-charcoal-900 border-gold-500 shadow-xl shadow-gold-500/10 ring-1 ring-gold-500/40'
                    : 'bg-charcoal-950 border-white/10 hover:bg-charcoal-900/60 hover:border-white/20'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? 'bg-gold-500 text-charcoal-950 font-bold'
                      : 'bg-charcoal-900 text-charcoal-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-serif font-bold text-white block leading-snug line-clamp-2">
                    {s.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stakeholder Detailed Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-charcoal-900/80 border border-white/10 shadow-2xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-mono font-semibold uppercase">
                  <CurrentIcon className="w-4 h-4" />
                  <span>{current.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-sm text-charcoal-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Offerings list */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-400 mb-3">
                  Scope of Dedicated Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.offerings.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 p-2 rounded-lg bg-charcoal-950 border border-white/5 text-xs text-charcoal-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Benefits & CTA Box (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-charcoal-950 border border-white/10 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-gold-400 uppercase font-bold">
                <Shield className="w-4 h-4" />
                <span>STRATEGIC IMPACT & ROI</span>
              </div>

              <div className="space-y-3">
                {current.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-charcoal-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => openConsultationModal(`Services for ${current.title}`)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold text-xs tracking-[0.15em] uppercase transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-gold-500/20"
                >
                  <span>Connect With IP Specialists</span>
                  <ArrowRight className="w-4 h-4 text-charcoal-950" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
