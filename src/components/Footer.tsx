import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openConsultationModal } = useRouter();

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Background blueprint grid subtle styling */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      {/* Top Pre-Footer Callout */}
      <div className="relative border-b border-slate-800/80 bg-slate-900/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase block mb-1">
              TECHNO-LEGAL PATENT SUPPORT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to Protect and Commercialize Your Innovation?
            </h3>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Discuss your patent drafting, search clearance, or portfolio intelligence requirements with our senior technical analysts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openConsultationModal()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </button>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => navigate('/')} className="text-left">
              <Logo size="md" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              xyz IP is an intellectual property support firm providing end-to-end patent and IP services for innovators, startups, law firms, foreign associates, universities, research institutions, and technology-driven businesses.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={COMPANY_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-900/50 border border-slate-800 hover:border-blue-600 text-slate-400 hover:text-blue-300 flex items-center justify-center transition-colors"
                aria-label="xyz IP LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 font-mono">
                Connect on LinkedIn
              </span>
            </div>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>STRICT NDA & CONFIDENTIALITY ASSURED</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about-us')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/ip-services')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>IP Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/searches')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Searches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/business-intelligence')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Business Intelligence</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/career')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Career</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/patent-filing')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Filing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-drafting')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Drafting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patentability-prior-art-search')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patentability Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/freedom-to-operate')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Freedom to Operate (FTO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-invalidation')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Invalidation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-portfolio-analysis')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Portfolio Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-licensing')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Licensing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-monetization')}
                  className="text-slate-400 hover:text-blue-400 transition-colors block text-left"
                >
                  Patent Monetization
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Bengaluru, Karnataka, India – 560001
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-blue-400 font-mono transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-blue-400 font-mono transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Chat with Senior Associate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {COMPANY_INFO.copyright}
          </div>
          <div className="flex items-center space-x-6">
            <span>Intellectual Property & Patent Support Services</span>
            <span>•</span>
            <span>ISO Compliant Data Security</span>
            <span>•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-slate-400">
              Bengaluru Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
