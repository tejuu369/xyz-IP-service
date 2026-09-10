import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO, LIFECYCLE_STAGES } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoMeta } from '../components/SeoMeta';
import { ConsultationSection } from '../components/ConsultationSection';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  TrendingUp,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openConsultationModal, navigate } = useRouter();

  return (
    <div className="w-full bg-charcoal-950 text-charcoal-100">
      <SeoMeta
        title="About Us | Neropat IP Services"
        description="Learn about Neropat IP Services, an intellectual property support firm providing end-to-end patent and IP services with structured technical analysis and claim-level precision."
        canonicalPath="/about-us"
        breadcrumbs={[{ label: 'About Us', href: '/about-us' }]}
      />

      {/* Page Hero */}
      <section className="relative pt-12 pb-16 bg-charcoal-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>THE FIRM & METHODOLOGY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            About Neropat IP Services
          </h1>

          <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl mt-4 leading-relaxed font-normal">
            Structured technical analysis, claim-level precision, and commercially relevant IP strategy for innovators, startups, law firms, and foreign associates worldwide.
          </p>
        </div>
      </section>

      {/* Corporate Narrative & Foundations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main text content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-300 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Our Vision & Practical Support
            </h2>

            <p className="text-charcoal-200 font-medium text-lg leading-relaxed">
              {COMPANY_INFO.aboutOverview}
            </p>

            <p>
              {COMPANY_INFO.aboutDetailed1}
            </p>

            <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 my-6">
              <h3 className="text-white font-serif font-bold text-lg mb-2">
                Structured Technical Analysis & Claim-Level Precision
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed">
                {COMPANY_INFO.aboutDetailed2}
              </p>
            </div>

            <p>
              {COMPANY_INFO.aboutDetailed3}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openConsultationModal('About Us Consultation')}
                className="px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-[0.15em] shadow-lg shadow-gold-500/20 transition-all"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => navigate('/ip-services')}
                className="px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-200 border border-white/10 text-xs font-semibold tracking-wide transition-colors"
              >
                Explore All Services
              </button>
            </div>
          </div>

          {/* Right Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-charcoal-900/50 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">
                Engineering-First Technical Mastery
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                Our analysts possess deep qualifications across computer science, electronics, mechanical systems, biotechnology, and chemistry, ensuring your innovations are understood without knowledge loss.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-900/50 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">
                Claim Architecture & Enforceability
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                We bridge the gap between technical inventiveness and legal claim scope. Every claim set is constructed to withstand examination scrutiny and provide solid foundation for licensing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-900/50 border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">
                Commercial Orientation
              </h3>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                We believe IP must generate measurable enterprise value. We align filing strategies with fundraising milestones, product market clearance, and future monetization potential.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-950 border border-white/10 text-xs text-charcoal-400 space-y-2">
              <div className="flex items-center space-x-2 text-charcoal-200 font-bold">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Headquarters</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />
    </div>
  );
};
