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
    <section id="about-section" className="relative py-20 bg-charcoal-900/40 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-gold-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span>PRACTICAL, EVIDENCE-BASED PATENT SUPPORT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              About Us
            </h2>

            <div className="space-y-4 text-charcoal-300 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-charcoal-200">
                {COMPANY_INFO.aboutOverview}
              </p>
              <p className="text-charcoal-300">
                {COMPANY_INFO.aboutDetailed1}
              </p>
              <p className="text-charcoal-300">
                {COMPANY_INFO.aboutDetailed2}
              </p>
              <p className="text-charcoal-400 text-sm">
                {COMPANY_INFO.aboutDetailed3}
              </p>
            </div>

            <div className="pt-2">
              <button
                id="about-learn-more-btn"
                onClick={() => navigate('/about-us')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold text-xs uppercase tracking-[0.15em] border border-white/10 hover:border-gold-500/50 transition-all group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Methodology Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-charcoal-950 border border-white/10 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-gold-400">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Structured Technical Analysis
                </h3>
              </div>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Deconstructing complex software architectures, circuits, and mechanical assemblies down to discrete, novel features.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-950 border border-white/10 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-gold-400">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Claim-Level Precision
                </h3>
              </div>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Drafting robust independent claims and fallback hierarchies that withstand both office examinations and litigation challenges.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-950 border border-white/10 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-gold-400">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  Commercially Relevant IP Strategy
                </h3>
              </div>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Connecting technical patent work with product launch clearance, venture investment criteria, and licensing leverage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
              <span className="text-xs text-gold-300 font-medium">
                End-to-End lifecycle support tailored for startups, law firms, and research universities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
