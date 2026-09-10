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
    <footer className="relative bg-charcoal-950 text-charcoal-300 border-t border-white/10 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      {/* Top Pre-Footer Callout in svpconstructions theme */}
      <div className="relative border-b border-white/10 bg-charcoal-900/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="font-mono text-xs text-gold-500 font-semibold tracking-widest uppercase block mb-1">
              TECHNO-LEGAL PATENT & IP EXCELLENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Ready to Protect and Commercialize Your Innovation?
            </h3>
            <p className="text-sm text-charcoal-400 mt-2 max-w-2xl font-sans">
              Discuss your patent drafting, search clearance, or portfolio intelligence requirements with our senior technical analysts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openConsultationModal()}
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold uppercase tracking-wider text-xs shadow-xl shadow-gold-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </button>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-200 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors"
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
            <p className="text-sm text-charcoal-400 leading-relaxed pr-6 font-sans">
              xyz IP is an intellectual property support firm providing end-to-end patent and IP services for innovators, startups, law firms, foreign associates, universities, research institutions, and technology-driven businesses.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={COMPANY_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 border border-white/10 hover:border-gold-500/50 text-charcoal-400 hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="xyz IP LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-charcoal-400 font-mono">
                Connect on LinkedIn
              </span>
            </div>
            <div className="pt-2 flex items-center space-x-2 text-xs text-charcoal-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span className="tracking-wider">STRICT NDA & CONFIDENTIALITY ASSURED</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about-us')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/ip-services')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>IP Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/searches')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>Searches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/business-intelligence')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>Business Intelligence</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/career')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>Career</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-600" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 border-b border-white/10 pb-2">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/patent-filing')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Filing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-drafting')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Drafting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patentability-prior-art-search')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patentability Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/freedom-to-operate')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Freedom to Operate (FTO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-invalidation')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Invalidation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-portfolio-analysis')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Portfolio Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-licensing')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Licensing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/patent-monetization')}
                  className="text-charcoal-400 hover:text-gold-400 transition-colors block text-left"
                >
                  Patent Monetization
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 border-b border-white/10 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-charcoal-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Bengaluru, Karnataka, India – 560001
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-gold-400 font-mono transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-gold-400 font-mono transition-colors"
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
                className="inline-flex items-center space-x-2 text-xs font-semibold text-gold-400 hover:text-gold-300"
              >
                <span>Chat with Senior Associate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <div>
            {COMPANY_INFO.copyright}
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 md:gap-x-6 gap-y-1">
            <span className="whitespace-nowrap">Intellectual Property & Patent Support Services</span>
            <span className="text-charcoal-600">•</span>
            <span className="whitespace-nowrap">design and developed by Tejas H N</span>
            <span className="text-charcoal-600">•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-gold-400 transition-colors whitespace-nowrap">
              Bengaluru Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
