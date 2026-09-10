import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_OUTCOMES, OUTCOME_FLOW_KEYWORDS } from '../data/companyData';
import {
  Shield,
  Compass,
  TrendingUp,
  Scale,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Compass,
  TrendingUp,
  Scale,
};

export const BusinessOutcomes: React.FC = () => {
  const { openConsultationModal } = useRouter();

  return (
    <section id="outcomes-section" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>COMMERCIAL IMPACT & VALUE EXTRACTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            From Patent Work to Business Decisions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Patent support should not end with a filing, search report, or office action response. xyz IP connects technical patent work with protection strategy, product launch risk, investment readiness, licensing potential, and commercialization decisions.
          </p>
        </div>

        {/* 4 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BUSINESS_OUTCOMES.map((item) => {
            const Icon = ICON_MAP[item.icon] || Shield;

            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between text-left hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/70 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {item.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-blue-300/90 mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    EVIDENCE-BASED DECISION MAKING
                  </span>
                  <button
                    onClick={() => openConsultationModal(item.title)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                  >
                    <span>Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Statement & Animated Keyword Flow */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 border border-blue-800/40 shadow-2xl text-center space-y-6">
          <h3 className="text-lg sm:text-2xl font-bold text-white max-w-3xl mx-auto leading-snug font-heading">
            “The objective is not only to obtain patents, but to make those patents useful for protection, clearance, valuation, licensing, and strategic growth.”
          </h3>

          {/* Animated/Subtle Flow Keywords Chain */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2">
            {OUTCOME_FLOW_KEYWORDS.map((kw, i) => (
              <React.Fragment key={kw}>
                <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-blue-500/30 text-xs sm:text-sm font-bold text-slate-200 font-mono tracking-wider shadow-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>{kw}</span>
                </div>
                {i < OUTCOME_FLOW_KEYWORDS.length - 1 && (
                  <span className="text-blue-400 font-bold text-sm hidden sm:inline">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => openConsultationModal('Strategic IP Growth Consultation')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
            >
              Discuss Your Strategic IP Goals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
