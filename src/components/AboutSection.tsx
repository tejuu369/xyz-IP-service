import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/companyData';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  FileSpreadsheet,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="about-section" className="relative py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>PRACTICAL, EVIDENCE-BASED PATENT SUPPORT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              About Us
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-200">
                {COMPANY_INFO.aboutOverview}
              </p>
              <p className="text-slate-300">
                {COMPANY_INFO.aboutDetailed1}
              </p>
              <p className="text-slate-300">
                {COMPANY_INFO.aboutDetailed2}
              </p>
              <p className="text-slate-400 text-sm">
                {COMPANY_INFO.aboutDetailed3}
              </p>
            </div>

            <div className="pt-2">
              <button
                id="about-learn-more-btn"
                onClick={() => navigate('/about-us')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:border-blue-500/50 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Methodology Pillars (Strictly based on prompt's structured technical analysis & claim-level precision) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-blue-400">
                <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800/60 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Structured Technical Analysis
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deconstructing complex software architectures, circuits, and mechanical assemblies down to discrete, novel features.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-sky-400">
                <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Claim-Level Precision
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Drafting robust independent claims and fallback hierarchies that withstand both office examinations and litigation challenges.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-indigo-400">
                <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Commercially Relevant IP Strategy
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connecting technical patent work with product launch clearance, venture investment criteria, and licensing leverage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-xs text-blue-200 font-medium">
                End-to-End lifecycle support tailored for startups, law firms, and research universities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
