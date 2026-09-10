import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { ALL_SERVICES_PAGES, PageDetailData } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoMeta } from '../components/SeoMeta';
import { ConsultationSection } from '../components/ConsultationSection';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  FileCheck,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { navigate, openConsultationModal } = useRouter();
  const pageData: PageDetailData | undefined = ALL_SERVICES_PAGES[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!pageData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-slate-950 text-white">
        <h1 className="text-3xl font-bold font-heading mb-4">Service Page Not Found</h1>
        <p className="text-slate-400 mb-6">The requested service route could not be found.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const categoryPathMap: Record<string, string> = {
    'IP Services': '/ip-services',
    Searches: '/searches',
    'Business Intelligence': '/business-intelligence',
  };

  const categoryHref = categoryPathMap[pageData.category] || '/ip-services';

  // Compute related services from the same category or general services
  const relatedServices = Object.values(ALL_SERVICES_PAGES)
    .filter((p) => p.slug !== slug && p.category === pageData.category)
    .slice(0, 4);

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      <SeoMeta
        title={pageData.title}
        description={pageData.subtitle}
        canonicalPath={`/${slug}`}
        breadcrumbs={[
          { label: pageData.category, href: categoryHref },
          { label: pageData.title },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs
            items={[
              { label: pageData.category, href: categoryHref },
              { label: pageData.title },
            ]}
          />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-mono uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{pageData.category.toUpperCase()} PRACTICE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-4xl leading-tight">
            {pageData.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed font-normal">
            {pageData.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openConsultationModal(pageData.title)}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/30 transition-all flex items-center space-x-2"
            >
              <span>Consult On {pageData.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#service-deliverables"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold tracking-wide transition-colors"
            >
              View Deliverables
            </a>
          </div>
        </div>
      </section>

      {/* Core Overview & Key Aspects */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Description & Technical Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider block mb-2">
                TECHNICAL RIGOR & METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Practice Overview
              </h2>
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 whitespace-pre-line space-y-4">
                {pageData.overview}
              </div>
            </div>

            {/* Key Aspects & Scope */}
            {pageData.keyAspects && pageData.keyAspects.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-4">
                  Key Scope & Technical Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pageData.keyAspects.map((aspect, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start space-x-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step-by-Step Workflow */}
            {pageData.workflow && pageData.workflow.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-4">
                  Structured Execution Workflow
                </h3>
                <div className="space-y-4">
                  {pageData.workflow.map((w, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center gap-4"
                    >
                      <div className="font-mono text-sm font-bold text-blue-400 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 w-fit flex-shrink-0">
                        {w.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          {w.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {w.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Deliverables, Standards & Related Services (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Deliverables Card */}
            {pageData.deliverables && pageData.deliverables.length > 0 && (
              <div id="service-deliverables" className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 font-bold uppercase">
                  <FileCheck className="w-4 h-4" />
                  <span>FORMAL DELIVERABLES</span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Outputs & Work Products
                </h3>
                <p className="text-xs text-slate-400">
                  Compiled in standardized, audit-ready formats suitable for patent examiners, attorneys, investors, or corporate boards.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {pageData.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <button
                    onClick={() => openConsultationModal(pageData.title)}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/30"
                  >
                    Request Deliverable Scoping
                  </button>
                </div>
              </div>
            )}

            {/* Standards & Confidentiality */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality & Compliance</span>
              </div>
              <p className="leading-relaxed">
                Work is carried out under strict confidentiality covenants with secure cloud infrastructure and encrypted file transmission.
              </p>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Related Practice Areas
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel, i) => (
                    <button
                      key={i}
                      onClick={() => navigate(`/${rel.slug}`)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                    >
                      <span className="truncate">{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="py-16 bg-slate-900/30 border-t border-slate-800 text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="font-mono text-xs text-blue-400 uppercase font-bold tracking-wider block mb-1">
                PRACTICE ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Frequently Asked Questions About {pageData.title}
              </h2>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, i) => {
                const isOpen = openFaq === i;

                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-blue-300 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-blue-400' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Embedded Consultation Section */}
      <ConsultationSection />
    </div>
  );
};
