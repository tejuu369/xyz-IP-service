import React from 'react';
import { useRouter } from '../context/RouterContext';
import { AbstractPatentGraphic } from './AbstractPatentGraphic';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  Lock,
  Clock,
  CheckCircle2,
  ChevronRight,
  Phone,
} from 'lucide-react';

export const HomeHero: React.FC = () => {
  const { navigate, openConsultationModal } = useRouter();

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-[#030712] border-b border-slate-800/80">
      {/* Classical Architectural Background: Ambient Royal Navy & Antique Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(217,119,6,0.14),rgba(30,58,138,0.22),transparent_70%)] pointer-events-none" />
      
      {/* Fine Classical Guilloche & Precision Drafting Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Decorative Technical Blueprint Registration Crosshairs */}
      <div className="hidden xl:block absolute top-10 left-10 text-slate-700 font-mono text-xs select-none pointer-events-none">
        + REG-01 / JUR-GLOBAL
      </div>
      <div className="hidden xl:block absolute top-10 right-10 text-slate-700 font-mono text-xs select-none pointer-events-none">
        + LAT: 12.97°N / LON: 77.59°E // BLR
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Col (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Classic Heritage Crest Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-blue-950/40 border border-amber-500/30 shadow-sm">
              <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-amber-200 uppercase">
                TECHNO-LEGAL PATENT COUNSEL & IP STRATEGY
              </span>
            </div>

            {/* Classic Display Headline with High-Craft Serif Pairing */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.14] font-['Playfair_Display',Georgia,serif]">
                End-to-End Patent & IP Support for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-blue-200">
                  Global Innovators
                </span>
                , Startups, Law Firms, and Foreign Associates
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-amber-200/90 font-normal">
                Where technical invention meets enforceable legal precision.
              </p>
            </div>

            {/* Supporting Classic Overview */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal font-sans">
              <strong className="text-white font-semibold">xyz IP</strong> provides structured, high-caliber intellectual property counsel across the full innovation lifecycle — from exhaustive novelty searches and claim engineering to global patent prosecution, freedom-to-operate clearances, and commercial portfolio monetization.
            </p>

            {/* Classical CTAs Row */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                id="hero-book-consultation-btn"
                onClick={() => openConsultationModal()}
                className="group px-7 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:to-indigo-800 text-white shadow-xl shadow-blue-950/80 hover:shadow-blue-600/30 border border-amber-400/40 flex items-center justify-center space-x-2.5 hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={() => {
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/ip-services');
                }}
                className="px-7 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href="tel:12345678790"
                className="inline-flex items-center justify-center space-x-2 text-xs text-slate-400 hover:text-amber-300 transition-colors py-2 px-3 rounded-lg hover:bg-slate-900/60 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>12345678790</span>
              </a>
            </div>

            {/* Classic Stately Accreditation Metrics Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>35</span>
                  <span className="text-amber-400 text-base font-sans">+</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  <span>Global Jurisdictions (USPTO, EPO, IPO)</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>99.4</span>
                  <span className="text-amber-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  <span>Claim Specification Integrity</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>100</span>
                  <span className="text-amber-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>Strict Invention Non-Disclosure</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>24</span>
                  <span className="text-amber-400 text-base font-sans">h</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>Rapid Matter Triage & Scoping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <AbstractPatentGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
