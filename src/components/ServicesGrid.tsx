import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICE_CARDS } from '../data/companyData';
import {
  ArrowRight,
  Search,
  FileText,
  Compass,
  BarChart3,
  TrendingUp,
  Scale,
  Check,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  patentability: Search,
  'drafting-prosecution': FileText,
  'fto-clearance': Compass,
  'intelligence-portfolio': BarChart3,
  'monetization-commercialization': TrendingUp,
  'invalidation-litigation': Scale,
};

export const ServicesGrid: React.FC = () => {
  const { navigate, openConsultationModal } = useRouter();

  return (
    <section id="services-section" className="relative py-20 bg-charcoal-900/30 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-gold-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>CORE PRACTICE AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Patent Services Across the Full Innovation Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300">
            Structured techno-legal analysis, rigorous prior-art methodologies, and commercial alignment across every patent endeavor.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((service) => {
            const Icon = ICON_MAP[service.id] || FileText;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-charcoal-950 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5 text-left"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-charcoal-500 group-hover:text-gold-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-charcoal-900 group-hover:bg-gold-500/10 border border-white/5 group-hover:border-gold-500/40 flex items-center justify-center text-charcoal-400 group-hover:text-gold-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Required Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md bg-charcoal-900 border border-white/5 text-charcoal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5 mb-5">
                    {service.keyDeliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-[11px] text-charcoal-300">
                        <Check className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/${service.slug}`)}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center space-x-1 group-hover:underline"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openConsultationModal(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-charcoal-900 hover:bg-gold-500 hover:text-charcoal-950 text-charcoal-300 border border-white/10 hover:border-gold-500 text-xs font-medium transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/ip-services')}
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-charcoal-300 hover:text-gold-400 uppercase py-2 px-4 rounded-xl border border-white/10 hover:border-gold-500/40 bg-charcoal-950 transition-colors"
          >
            <span>View Full Directory of IP & Patent Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
