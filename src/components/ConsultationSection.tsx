import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ConsultationForm } from './ConsultationForm';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const ConsultationSection: React.FC = () => {
  return (
    <section id="consultation-section" className="relative py-20 bg-charcoal-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & Corporate Headquarters info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-gold-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span>DIRECT CLIENT CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Let's Discuss Your IP Requirements
            </h2>

            <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
              Connect with our patent analysts and techno-legal specialists. Whether evaluating novelty, preparing Indian and international patent filings, or mitigating infringement risk, we provide structured, evidence-based guidance.
            </p>

            {/* Corporate Location Details Card */}
            <div className="p-6 rounded-2xl bg-charcoal-950 border border-white/10 space-y-4">
              <div className="flex items-start space-x-3 text-xs text-charcoal-300">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold text-white block mb-0.5">Corporate Headquarters:</span>
                  <span className="leading-relaxed text-charcoal-300">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-charcoal-300 pt-2 border-t border-white/5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <span className="font-serif font-bold text-white block">Direct Consulting Line:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gold-400 font-mono text-charcoal-200">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-charcoal-300 pt-2 border-t border-white/5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <span className="font-serif font-bold text-white block">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-400 font-mono text-charcoal-200">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-charcoal-300 pt-2 border-t border-white/5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <span className="font-serif font-bold text-white block">Operating Hours:</span>
                  <span className="text-charcoal-300">Mon – Fri: 9:30 AM – 6:30 PM IST (Global Support via Scheduled Briefs)</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="p-5 rounded-2xl bg-charcoal-950 border border-gold-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <MessageCircle className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gold-400 block font-bold">IMMEDIATE MESSAGING</span>
                  <span className="text-sm font-semibold text-white">Let's Chat on WhatsApp</span>
                </div>
              </div>

              <a
                id="section-whatsapp-link"
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-gold-500/20"
              >
                Chat Now
              </a>
            </div>

            <div className="flex items-center space-x-2 text-xs text-charcoal-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>STRICT CONFIDENTIALITY // MUTUAL NDA EXECUTED UPON REQUEST</span>
            </div>
          </div>

          {/* Right Column: Premium Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-950 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-white mb-1 text-left">
                Submit Consultation Enquiry
              </h3>
              <p className="text-xs text-charcoal-400 mb-6 text-left">
                Provide basic details of your requirements. A senior technical analyst will contact you directly within 1 business day.
              </p>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
