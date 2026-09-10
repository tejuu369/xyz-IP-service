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
    <section id="stakeholders-section" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>SPECIALIZED CLIENT ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Patent Support for Every IP Stakeholder
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
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
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/60 ring-1 ring-blue-500/40'
                    : 'bg-slate-950/80 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block leading-snug line-clamp-2">
                    {s.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stakeholder Detailed Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase">
                  <CurrentIcon className="w-4 h-4" />
                  <span>{current.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {current.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Offerings list */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Dedicated Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.offerings.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Benefits & CTA Box (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                <Shield className="w-4 h-4" />
                <span>STRATEGIC IMPACT & ROI</span>
              </div>

              <div className="space-y-3">
                {current.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => openConsultationModal(`Services for ${current.title}`)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Connect With IP Specialists</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
