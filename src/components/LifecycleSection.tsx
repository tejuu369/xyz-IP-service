import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { LIFECYCLE_STAGES } from '../data/companyData';
import {
  Search,
  FileText,
  ShieldCheck,
  Compass,
  TrendingUp,
  Scale,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  FileText,
  ShieldCheck,
  Compass,
  TrendingUp,
  Scale,
};

export const LifecycleSection: React.FC = () => {
  const { navigate, openConsultationModal } = useRouter();
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = LIFECYCLE_STAGES[activeStageIndex];
  const ActiveIcon = ICON_MAP[activeStage.iconName] || FileText;

  return (
    <section id="lifecycle-section" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>SIX-STAGE END-TO-END TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            How We Support the Patent Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From the initial invention disclosure through to commercial monetization or court defense, we provide rigorous technical support at every milestone.
          </p>
        </div>

        {/* 6-Stage Interactive Horizontal Stepper / Connected Timeline */}
        <div className="relative mb-12">
          {/* Subtle connecting track */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const IconComp = ICON_MAP[stage.iconName] || FileText;
              const isSelected = activeStageIndex === idx;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`group p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/60 ring-1 ring-blue-500/40'
                      : 'bg-slate-950/80 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      {stage.stageName}
                    </div>
                    <div
                      className={`text-xs font-bold leading-tight line-clamp-2 transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {stage.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          {/* Subtle blueprint grid accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Stage summary */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-950 border border-blue-800/60 text-blue-300 font-bold">
                  STAGE {activeStage.number} // {activeStage.stageName.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400">
                  Full Innovation Lifecycle
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {activeStage.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Analytical Activities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activeStage.activities.map((act, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Deliverable Box & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                  PRIMARY STAGE DELIVERABLE
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {activeStage.deliverable}
                </h4>
                <p className="text-xs text-slate-400 mt-2">
                  Prepared with claim-level precision, cross-checked against international patent office examination standards.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openConsultationModal(activeStage.title)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request {activeStage.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    const slugMap = [
                      '/patentability-prior-art-search',
                      '/patent-drafting',
                      '/patent-prosecution',
                      '/freedom-to-operate',
                      '/patent-monetization',
                      '/patent-invalidation',
                    ];
                    navigate(slugMap[activeStageIndex]);
                  }}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                >
                  View Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
