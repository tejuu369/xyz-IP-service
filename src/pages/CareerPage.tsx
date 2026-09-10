import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoMeta } from '../components/SeoMeta';
import { ConsultationSection } from '../components/ConsultationSection';
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
} from 'lucide-react';

const OPEN_ROLES = [
  {
    title: 'Patent Analyst — AI, Software & Digital Systems',
    domain: 'Computer Science / Artificial Intelligence / Electrical',
    experience: '1 - 4 Years / Fresh Graduates with Strong Technical Acumen',
    location: 'Bengaluru, Karnataka (Hybrid Available)',
    responsibilities: [
      'Conducting prior art novelty and patentability searches across global patent repositories.',
      'Constructing invalidity claim charts (102/103) against asserted patents.',
      'Deconstructing software algorithms, machine learning models, and network architectures.',
      'Drafting technical responses to First Examination Reports (FERs) in software domains.',
    ],
    requirements: [
      'B.Tech / M.Tech in Computer Science, Information Technology, or Electronics.',
      'Strong technical comprehension and ability to read technical papers quickly.',
      'Excellent written English and logical reasoning abilities.',
    ],
  },
  {
    title: 'Patent Analyst — Mechanical & Industrial Tech',
    domain: 'Mechanical Engineering / Automotive / Mechatronics',
    experience: '1 - 4 Years',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Analyzing mechanical assemblies, manufacturing processes, and consumer hardware.',
      'Freedom to Operate (FTO) product-to-patent mapping.',
      'Drafting complete specifications and formal illustration oversight.',
      'Reviewing competitor patent gazettes and patent landscape studies.',
    ],
    requirements: [
      'B.Tech / M.Tech in Mechanical, Automobile, or Aerospace Engineering.',
      'Proficiency in interpreting technical CAD blueprints and patent drawings.',
      'Structured analytical and prior art search mindset.',
    ],
  },
  {
    title: 'Patent Analyst — Life Sciences & Biotechnology',
    domain: 'Biotechnology / Pharmaceuticals / Biochemistry',
    experience: '1 - 3 Years / M.Sc / Ph.D',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Evaluating novelty for chemical compounds, formulations, and biological assays.',
      'Conducting chemical structure and sequence searches where relevant.',
      'Drafting patent specifications conforming to Section 3(d) and 3(e) standards.',
      'Assisting attorneys with opposition petitions and prior art invalidation.',
    ],
    requirements: [
      'M.Sc / M.Tech / Ph.D. in Biotechnology, Chemistry, or Pharmaceutical Sciences.',
      'Familiarity with scientific literature databases (PubMed, ScienceDirect, etc.).',
      'Detail-oriented drafting and research temperament.',
    ],
  },
  {
    title: 'Senior Patent Drafter & Techno-Legal Associate',
    domain: 'All Engineering Disciplines / Registered Patent Agent',
    experience: '3 - 7 Years',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Drafting high-precision provisional and complete specifications for Indian and foreign filings.',
      'Conducting inventor interviews and architecting independent and dependent claim cascades.',
      'Formulating inventive-step defenses against Indian and international Office Actions.',
      'Mentoring junior analysts on claim construction and specification drafting.',
    ],
    requirements: [
      'B.Tech / M.Tech with proven track record of drafting 40+ patent specifications.',
      'Registered Indian Patent Agent credential preferred.',
      'Fluency in US, EP, and Indian patent office drafting standards.',
    ],
  },
];

export const CareerPage: React.FC = () => {
  const { openConsultationModal } = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      <SeoMeta
        title="Careers at Neropat IP Services | Join Our Technical Team"
        description="Explore career opportunities for patent analysts, drafters, and technical specialists in computer science, mechanical, electronics, and biotech at Neropat IP Services."
        canonicalPath="/career"
        breadcrumbs={[{ label: 'Career', href: '/career' }]}
      />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Breadcrumbs items={[{ label: 'Career' }]} />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-mono uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN OUR TECHNO-LEGAL CONSULTANCY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-4xl leading-tight">
            Careers at Neropat IP Services
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed font-normal">
            Work at the intersection of cutting-edge technology and global patent law. We offer an intellectually stimulating environment for engineers, researchers, and patent specialists.
          </p>
        </div>
      </section>

      {/* Culture & Standards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              Intellectual Rigor
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every day involves dissecting state-of-the-art inventions across artificial intelligence, wireless communication, robotics, and clean technology.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              Structured Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We train technical graduates to become elite patent analysts, mastering claim interpretation, database query syntax, and international examination doctrines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              High-Value Global Clients
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Direct involvement in patent drafting and invalidation searches supporting startups, tier-1 research institutions, and international associates.
            </p>
          </div>
        </div>

        {/* Current Openings Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Current Open Positions
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Review the role specifications below. To apply, email your curriculum vitae directly to <span className="text-blue-400 font-mono">info@neropat.com</span>.
          </p>
        </div>

        {/* Open Roles Cards */}
        <div className="space-y-6">
          {OPEN_ROLES.map((role, idx) => {
            const isExpanded = selectedRole === role.title;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="font-mono text-xs text-blue-400 font-semibold block mb-1">
                      {role.domain}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                      {role.experience}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {role.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-1" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                      Candidate Qualifications
                    </h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Send Application to: <strong className="text-white">info@neropat.com</strong></span>
                  </div>

                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Application for ${encodeURIComponent(role.title)}`}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-2"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />
    </div>
  );
};
