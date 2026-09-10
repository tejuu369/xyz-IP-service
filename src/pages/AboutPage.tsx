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
    <div className="w-full bg-slate-950 text-slate-100">
      <SeoMeta
        title="About Us | Neropat IP Services"
        description="Learn about Neropat IP Services, an intellectual property support firm providing end-to-end patent and IP services with structured technical analysis and claim-level precision."
        canonicalPath="/about-us"
        breadcrumbs={[{ label: 'About Us', href: '/about-us' }]}
      />

      {/* Page Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-mono uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE FIRM & METHODOLOGY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-4xl leading-tight">
            About Neropat IP Services
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed font-normal">
            Structured technical analysis, claim-level precision, and commercially relevant IP strategy for innovators, startups, law firms, and foreign associates worldwide.
          </p>
        </div>
      </section>

      {/* Corporate Narrative & Foundations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main text content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our Vision & Practical Support
            </h2>

            <p className="text-slate-200 font-medium text-lg leading-relaxed">
              {COMPANY_INFO.aboutOverview}
            </p>

            <p>
              {COMPANY_INFO.aboutDetailed1}
            </p>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 my-6">
              <h3 className="text-white font-bold text-lg mb-2 font-heading">
                Structured Technical Analysis & Claim-Level Precision
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.aboutDetailed2}
              </p>
            </div>

            <p>
              {COMPANY_INFO.aboutDetailed3}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openConsultationModal('About Us Consultation')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/30 transition-all"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => navigate('/ip-services')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold tracking-wide transition-colors"
              >
                Explore All Services
              </button>
            </div>
          </div>

          {/* Right Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/70 flex items-center justify-center text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">
                Engineering-First Technical Mastery
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our analysts possess deep qualifications across computer science, electronics, mechanical systems, biotechnology, and chemistry, ensuring your innovations are understood without knowledge loss.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800/70 flex items-center justify-center text-sky-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">
                Claim Architecture & Enforceability
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We bridge the gap between technical inventiveness and legal claim scope. Every claim set is constructed to withstand examination scrutiny and provide solid foundation for licensing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/70 flex items-center justify-center text-indigo-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">
                Commercial Orientation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe IP must generate measurable enterprise value. We align filing strategies with fundraising milestones, product market clearance, and future monetization potential.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-slate-200 font-bold">
                <MapPin className="w-4 h-4 text-blue-400" />
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
