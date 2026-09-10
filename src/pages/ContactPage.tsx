import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoMeta } from '../components/SeoMeta';
import { ConsultationForm } from '../components/ConsultationForm';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  Building2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const CONTACT_FAQS = [
  {
    q: 'How does xyz IP ensure client invention confidentiality?',
    a: 'We execute a bilateral Non-Disclosure Agreement (NDA) prior to reviewing any technical invention disclosures. All file exchanges occur through encrypted storage environments and are handled strictly by dedicated technical analysts bound by confidentiality covenants.',
  },
  {
    q: 'What is the standard turnaround time for a patentability search?',
    a: 'Standard novelty and patentability search reports are typically delivered within 3 to 5 business days. Expedited timelines (48 hours) can be accommodated for impending conference presentations or filing deadlines.',
  },
  {
    q: 'Do you support international patent filings under the PCT and Paris Convention?',
    a: 'Yes. We assist domestic and international clients with PCT International Applications, Convention filings in foreign jurisdictions via our trusted global network of patent attorneys, and National Phase entry into India.',
  },
  {
    q: 'Can we schedule a technical scoping call before commissioning work?',
    a: 'Certainly. You can book an initial 20-minute scoping discussion with one of our senior patent analysts via telephone or secure video link to review your objectives and confirm project scope.',
  },
];

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-charcoal-950 text-charcoal-100">
      <SeoMeta
        title="Contact Us | xyz IP Services | Bengaluru Office"
        description="Contact xyz IP Services in Bengaluru, Karnataka, India. Connect with patent analysts for drafting, filing, searches, and portfolio intelligence. Call 12345678790."
        canonicalPath="/contact"
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-charcoal-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>GLOBAL PATENT SUPPORT HQ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            Contact xyz IP Services
          </h1>

          <p className="text-base sm:text-lg text-charcoal-300 max-w-3xl mt-4 leading-relaxed font-normal">
            Discuss your patent drafting, prior-art search, FTO clearance, or IP portfolio intelligence requirements with our senior technical analysts.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Consultation Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Coordinates & Corporate Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 border border-white/10 space-y-6">
              <h2 className="text-xl font-serif font-bold text-white">
                Corporate Office
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-300">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Office Address:</span>
                    <span className="leading-relaxed text-charcoal-300">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 pt-3 border-t border-white/10">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Direct Line:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-charcoal-200 hover:text-gold-400 font-mono">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 pt-3 border-t border-white/10">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Electronic Mail:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-charcoal-200 hover:text-gold-400 font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Consulting Hours:</span>
                    <span className="text-charcoal-300">Monday to Friday: 9:30 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-gold-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-charcoal-950" />
                  <span>Let's Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Confidentiality card */}
            <div className="p-6 rounded-2xl bg-charcoal-900/60 border border-white/10 text-xs text-charcoal-400 space-y-2.5">
              <div className="flex items-center space-x-2 text-gold-400 font-bold">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>NDA & Client Protection</span>
              </div>
              <p className="leading-relaxed">
                We strictly adhere to ethical non-disclosure protocols. If your organization requires an executed mutual Non-Disclosure Agreement prior to disclosure, please indicate this in your message.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-charcoal-900 border border-white/10 shadow-2xl">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold text-gold-400 uppercase tracking-wider block mb-1">
                  SECURE INQUIRY SUBMISSION
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Let's Discuss Your IP Requirements
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-400 mt-2">
                  Complete the form below to receive a scoping analysis and estimated project roadmap.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-charcoal-900/40 border-t border-white/10 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-gold-400 uppercase font-bold tracking-wider block mb-1">
              FREQUENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={i}
                  className="rounded-2xl bg-charcoal-900 border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-bold text-white hover:text-gold-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-charcoal-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-gold-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-charcoal-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
