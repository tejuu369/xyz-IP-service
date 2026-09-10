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
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-charcoal-950 border-b border-white/10">
      {/* Classical Architectural Background: Ambient Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(212,175,55,0.12),rgba(15,15,16,0.8),transparent_70%)] pointer-events-none" />
      
      {/* Fine Classical Guilloche & Precision Drafting Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative Technical Blueprint Registration Crosshairs */}
      <div className="hidden xl:block absolute top-10 left-10 text-charcoal-700 font-mono text-xs select-none pointer-events-none">
        + REG-01 / JUR-GLOBAL
      </div>
      <div className="hidden xl:block absolute top-10 right-10 text-charcoal-700 font-mono text-xs select-none pointer-events-none">
        + LAT: 12.97°N / LON: 77.59°E // BLR
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Col (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Classic Heritage Crest Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-charcoal-900 border border-gold-500/30 shadow-sm">
              <Award className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-gold-400 uppercase">
                TECHNO-LEGAL PATENT COUNSEL & IP STRATEGY
              </span>
            </div>

            {/* Classic Display Headline with High-Craft Serif Pairing */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.14] font-serif">
                End-to-End Patent & IP Support for{' '}
                <span className="text-gold-400">
                  Global Innovators
                </span>
                , Startups, Law Firms, and Foreign Associates
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-gold-200/90 font-normal">
                Where technical invention meets enforceable legal precision.
              </p>
            </div>

            {/* Supporting Classic Overview */}
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed max-w-2xl font-normal font-sans">
              <strong className="text-white font-semibold">xyz IP</strong> provides structured, high-caliber intellectual property counsel across the full innovation lifecycle — from exhaustive novelty searches and claim engineering to global patent prosecution, freedom-to-operate clearances, and commercial portfolio monetization.
            </p>

            {/* Classical CTAs Row */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                id="hero-book-consultation-btn"
                onClick={() => openConsultationModal()}
                className="group px-7 py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 bg-gold-500 hover:bg-gold-600 text-charcoal-950 shadow-xl shadow-gold-500/20 flex items-center justify-center space-x-2.5 hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={() => {
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/ip-services');
                }}
                className="px-7 py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-200 hover:text-white border border-white/10 hover:border-gold-500/40 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4 text-charcoal-400" />
              </button>

              <a
                href="tel:12345678790"
                className="inline-flex items-center justify-center space-x-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors py-2 px-3 rounded-lg hover:bg-charcoal-900/60 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>12345678790</span>
              </a>
            </div>

            {/* Classic Stately Accreditation Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>35</span>
                  <span className="text-gold-400 text-base font-sans">+</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Global Jurisdictions (USPTO, EPO, IPO)</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>99.4</span>
                  <span className="text-gold-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Claim Specification Integrity</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>100</span>
                  <span className="text-gold-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Strict Invention Non-Disclosure</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>24</span>
                  <span className="text-gold-400 text-base font-sans">h</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gold-500 flex-shrink-0" />
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
