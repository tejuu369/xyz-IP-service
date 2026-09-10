import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  Compass,
  TrendingUp,
  Award,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface StageNode {
  id: string;
  roman: string;
  label: string;
  title: string;
  sublabel: string;
  icon: React.ElementType;
  techCode: string;
  metric: string;
  claimExcerpt: string;
  deliverable: string;
  statLabel: string;
  statValue: string;
}

const STAGES: StageNode[] = [
  {
    id: 'novelty',
    roman: 'I',
    label: 'Novelty',
    title: 'Prior Art & Patentability Investigation',
    sublabel: 'Exhaustive global search across patent databases and scientific literature.',
    icon: Compass,
    techCode: 'DOSSIER // NOVELTY-01',
    metric: 'Novelty & Non-Obviousness Verification',
    claimExcerpt:
      '§ 102/103 Clearance: Prior art disambiguation across USPTO, EPO, IPO, and non-patent literature confirms inventive step threshold.',
    deliverable: 'Patentability Opinion & Citation Matrix',
    statLabel: 'Database Coverage',
    statValue: '120M+ Records',
  },
  {
    id: 'drafting',
    roman: 'II',
    label: 'Claims',
    title: 'Patent Claim Engineering & Drafting',
    sublabel: 'Techno-legal specification crafted to withstand rigorous examiner scrutiny.',
    icon: FileText,
    techCode: 'DOSSIER // DRAFT-02',
    metric: 'Broadest Enforceable Claim Scope',
    claimExcerpt:
      'We claim: 1. A system for multi-jurisdictional IP protection, comprising an independent claim structure configured to preempt design-arounds.',
    deliverable: 'Provisional & Non-Provisional Specifications',
    statLabel: 'Claim Robustness',
    statValue: '99.4% Defensible',
  },
  {
    id: 'prosecution',
    roman: 'III',
    label: 'Prosecution',
    title: 'Patent Examination & Office Action Defense',
    sublabel: 'Strategic rebuttal of examiner citations and procedural filings.',
    icon: ShieldCheck,
    techCode: 'DOSSIER // PROSEC-03',
    metric: 'First-Action Grant Optimization',
    claimExcerpt:
      'FER/OA Rebuttal: Technical arguments and narrow claim amendments drafted without surrendering commercially vital subject matter.',
    deliverable: 'Office Action Rebuttals & Filing Petitions',
    statLabel: 'Allowance Velocity',
    statValue: 'Sub-60d Action',
  },
  {
    id: 'clearance',
    roman: 'IV',
    label: 'Clearance',
    title: 'Freedom-to-Operate & Risk Mitigation',
    sublabel: 'Market launch clearance and competitor patent invalidation studies.',
    icon: Lock,
    techCode: 'DOSSIER // CLEAR-04',
    metric: 'Infringement Risk Elimination',
    claimExcerpt:
      'FTO Analysis: Mapping product architecture against active in-force jurisdiction claims to deliver unencumbered commercialization clearance.',
    deliverable: 'Element-by-Element FTO Matrix & Opinions',
    statLabel: 'Clearance Confidence',
    statValue: '99.8% Certified',
  },
  {
    id: 'monetization',
    roman: 'V',
    label: 'Monetization',
    title: 'Portfolio Intelligence & Valuation',
    sublabel: 'Extracting recurring licensing revenue and strategic commercial leverage.',
    icon: TrendingUp,
    techCode: 'DOSSIER // VALUE-05',
    metric: 'Commercial Asset Capitalization',
    claimExcerpt:
      'Evidence of Use (EoU): Constructing high-resolution claim charts mapping patent claims directly to target competitor products for licensing.',
    deliverable: 'Licensing Packages & Evidence-of-Use Charts',
    statLabel: 'Strategic Value',
    statValue: 'Enterprise Grade',
  },
];

export const AbstractPatentGraphic: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const current = STAGES[activeStage];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative Classical Framing & Outer Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold-500/20 via-gold-600/10 to-transparent blur-xl opacity-60 pointer-events-none" />
      
      <div className="relative rounded-2xl bg-charcoal-950 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Subtle architectural gold guilloche watermark */}
        <div className="absolute -right-20 -bottom-20 w-72 h-72 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-gold-400">
            <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="60" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="100" cy="100" r="45" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="30" strokeWidth="1.5" />
            <path d="M100 10v180M10 100h180M36 36l128 128M36 164L164 36" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Top Classical Patent Header / Certified Docket Band */}
        <div className="relative px-5 py-3.5 bg-charcoal-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold flex items-center gap-1.5">
                <span>CERTIFIED PATENT SPECIFICATION</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              </div>
              <div className="text-[10px] font-mono text-charcoal-400">
                OFFICIAL DOSSIER • SEC. 3 // PCT // USPTO
              </div>
            </div>
          </div>

          <div className="text-right font-mono">
            <span className="text-[9px] uppercase tracking-wider text-charcoal-400 block">JURISDICTION</span>
            <span className="text-xs font-semibold text-charcoal-200">GLOBAL & IPO</span>
          </div>
        </div>

        {/* 5-Stage Classic Roman Stepper */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-charcoal-950/80">
          <div className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 mb-2.5 flex items-center justify-between">
            <span>PATENT LIFECYCLE PHASES</span>
            <span className="text-gold-400 font-bold">PHASE 0{activeStage + 1} OF 05</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`group flex flex-col items-center py-2.5 px-1 rounded-xl transition-all duration-200 border text-center ${
                    isActive
                      ? 'bg-charcoal-900 border-gold-500/60 shadow-md shadow-black/60'
                      : 'bg-charcoal-900/40 border-white/5 hover:bg-charcoal-900/80 hover:border-white/10'
                  }`}
                >
                  <span
                    className={`font-serif text-xs font-bold mb-1 transition-colors ${
                      isActive ? 'text-gold-400' : 'text-charcoal-400 group-hover:text-charcoal-200'
                    }`}
                  >
                    {stage.roman}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center mb-1 transition-colors ${
                      isActive ? 'bg-gold-500 text-charcoal-950 font-bold' : 'bg-charcoal-800 text-charcoal-400 group-hover:text-charcoal-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-[10px] font-medium tracking-tight truncate max-w-full px-0.5 ${
                      isActive ? 'text-white font-semibold' : 'text-charcoal-400'
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certified Specification Body Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="p-4 sm:p-5 space-y-4"
          >
            {/* Title & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 text-[10px] font-mono text-gold-400 mb-1">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>{current.techCode}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-white tracking-tight">
                  {current.title}
                </h4>
                <p className="text-xs text-charcoal-300 mt-1 leading-relaxed">
                  {current.sublabel}
                </p>
              </div>

              <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-charcoal-900 border border-gold-500/20 text-right">
                <span className="text-[9px] font-mono uppercase text-gold-400 block">
                  {current.statLabel}
                </span>
                <span className="text-xs font-bold text-white font-mono">
                  {current.statValue}
                </span>
              </div>
            </div>

            {/* Classical Claim Excerpt Card */}
            <div className="p-3.5 rounded-xl bg-charcoal-900/90 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-400 mb-1.5">
                <span className="text-gold-400 font-semibold flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  CLAIM & SPECIFICATION CLAUSE
                </span>
                <span className="text-charcoal-500">AUTHENTICATED DRAFT</span>
              </div>
              <p className="text-xs font-mono text-charcoal-200 leading-relaxed italic bg-charcoal-950 p-2.5 rounded border border-white/5">
                "{current.claimExcerpt}"
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px]">
                <span className="text-charcoal-400">Formal Deliverable:</span>
                <span className="font-semibold text-gold-400">{current.deliverable}</span>
              </div>
            </div>

            {/* Quality & Security Safeguard Stamp */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-charcoal-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                <span className="text-charcoal-300 font-medium">Strict Non-Disclosure Protocol</span>
              </div>
              <div className="font-mono text-[10px] text-charcoal-400">
                IPO • USPTO • EPO • WIPO
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
