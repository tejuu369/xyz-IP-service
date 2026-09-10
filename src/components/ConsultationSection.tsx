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
    <section id="consultation-section" className="relative py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & Corporate Headquarters info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>DIRECT CLIENT CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Let's Discuss Your IP Requirements
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect with our patent analysts and techno-legal specialists. Whether evaluating novelty, preparing Indian and international patent filings, or mitigating infringement risk, we provide structured, evidence-based guidance.
            </p>

            {/* Corporate Location Details Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-start space-x-3 text-xs text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Corporate Headquarters:</span>
                  <span className="leading-relaxed text-slate-300">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-slate-300 pt-2 border-t border-slate-900">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white block">Direct Consulting Line:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-400 font-mono text-slate-200">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-slate-300 pt-2 border-t border-slate-900">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white block">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 font-mono text-slate-200">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-slate-300 pt-2 border-t border-slate-900">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white block">Operating Hours:</span>
                  <span className="text-slate-300">Mon – Fri: 9:30 AM – 6:30 PM IST (Global Support via Scheduled Briefs)</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-950 border border-emerald-800/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 block font-bold">IMMEDIATE MESSAGING</span>
                  <span className="text-sm font-semibold text-white">Let's Chat on WhatsApp</span>
                </div>
              </div>

              <a
                id="section-whatsapp-link"
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-500/20"
              >
                Chat Now
              </a>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>STRICT CONFIDENTIALITY // MUTUAL NDA EXECUTED UPON REQUEST</span>
            </div>
          </div>

          {/* Right Column: Premium Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-heading mb-1 text-left">
                Submit Consultation Enquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6 text-left">
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
