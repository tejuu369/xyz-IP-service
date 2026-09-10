import {
  LifecycleStage,
  ServiceCardData,
  StakeholderGroup,
  TechnicalDomain,
  NavItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'xyz IP Services',
  shortName: 'xyz IP',
  tagline: 'End-to-End Patent & IP Support for Innovators, Startups, Law Firms, and Foreign Associates',
  address: 'Bengaluru, Karnataka, India – 560001',
  city: 'Bengaluru',
  state: 'Karnataka',
  country: 'India',
  postalCode: '560001',
  phone: '12345678790',
  cleanPhone: '12345678790',
  email: 'info@xyz.com',
  website: 'https://www.xyz.com',
  linkedIn: 'https://www.linkedin.com/company/xyz-ip-services',
  whatsappLink: 'https://wa.me/12345678790?text=Hello%20xyz%20IP%2C%20I%20would%20like%20to%20inquire%20about%20patent%20services',
  copyright: '© 2024 xyz IP. All rights reserved.',
  aboutOverview:
    'xyz IP is an intellectual property support firm providing end-to-end patent and IP services for innovators, startups, law firms, foreign associates, universities, research institutions, and technology-driven businesses.',
  aboutDetailed1:
    'We assist clients across the patent lifecycle, including invention evaluation, patentability assessment, prior-art searching, patent drafting, filing, prosecution, FER/OA responses, freedom-to-operate analysis, patent invalidation, opposition support, claim charting, portfolio review, licensing, monetization, and commercialization-readiness.',
  aboutDetailed2:
    'Our work is built around structured technical analysis, claim-level precision, and commercially relevant IP strategy. We help clients identify protectable innovation, prepare strong patent filings, respond effectively to examination objections, assess product-launch risks, evaluate patent strength, and make informed decisions relating to protection, prosecution, clearance, enforcement, and commercialization.',
  aboutDetailed3:
    'xyz IP supports startups, innovators, law firms, foreign associates, incubators, universities, and R&D-driven organizations with practical, evidence-based patent support.',
};

export const NAVIGATION_LINKS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about-us' },
  {
    title: 'IP Services',
    href: '/ip-services',
    children: [
      {
        title: 'Patents',
        href: '/patents',
        description: 'Comprehensive patent drafting, filing, drawings, and prosecution support.',
        children: [
          { title: 'Patent Filing', href: '/patent-filing', description: 'Indian provisional, complete & PCT national phase applications.' },
          { title: 'Patent Drafting', href: '/patent-drafting', description: 'Techno-legal drafting with claim-level precision.' },
          { title: 'Patent Illustrations', href: '/patent-illustrations', description: 'USPTO, EPO & Indian Patent Office compliant technical drawings.' },
          { title: 'Design Patent', href: '/design-patent', description: 'Industrial design filings and aesthetic protection.' },
          { title: 'Patent Prosecution', href: '/patent-prosecution', description: 'End-to-end examination, office actions & hearing management.' },
          { title: 'Office Action Response', href: '/office-action-response', description: 'Technical & legal rebuttals for FERs and foreign Office Actions.' },
        ],
      },
      {
        title: 'Trademarks',
        href: '/trademarks',
        description: 'Brand protection, search clearance, trademark registration, and opposition management.',
      },
      {
        title: 'Copyrights',
        href: '/copyrights',
        description: 'Protection for software code, database structures, documentation, and creative works.',
      },
    ],
  },
  {
    title: 'Searches',
    href: '/searches',
    children: [
      {
        title: 'Patentability / Prior Art Search',
        href: '/patentability-prior-art-search',
        description: 'Comprehensive novelty assessment across global patent and non-patent literature.',
      },
      {
        title: 'Patent Invalidation',
        href: '/patent-invalidation',
        description: 'Prior art hunting and claim charting to challenge patent validity.',
      },
      {
        title: 'Freedom to Operate (FTO)',
        href: '/freedom-to-operate',
        description: 'Product-to-patent clearance and infringement risk assessment before market launch.',
      },
    ],
  },
  {
    title: 'Business Intelligence',
    href: '/business-intelligence',
    children: [
      {
        title: 'Landscape Study & White Space Analysis',
        href: '/landscape-white-space-analysis',
        description: 'Technology mapping, competitive clusters, and unexploited innovation white spaces.',
      },
      {
        title: 'Infringement / Claim Chart Analysis',
        href: '/infringement-claim-chart-analysis',
        description: 'Element-by-element product mapping and evidence-backed claim chart construction.',
      },
      {
        title: 'Patent Portfolio Analysis',
        href: '/patent-portfolio-analysis',
        description: 'Categorization, strength scoring, pruning, and strategic asset alignment.',
      },
      {
        title: 'Patent Licensing',
        href: '/patent-licensing',
        description: 'Target identification, licensing packages, and technical negotiation support.',
      },
      {
        title: 'Patent Monetization',
        href: '/patent-monetization',
        description: 'Valuation review, brokering support, and commercial readiness assessment.',
      },
      {
        title: 'Patent Watch',
        href: '/patent-watch',
        description: 'Continuous monitoring of competitor filings, legal status, and emerging technologies.',
      },
    ],
  },
  { title: 'Career', href: '/career' },
  { title: 'Contact', href: '/contact' },
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    number: '01',
    stageName: 'Invention Stage',
    title: 'Patentability Assessment',
    description:
      'Invention screening, novelty review, prior-art searching, and identification of protectable technical features.',
    activities: [
      'Invention Disclosure Screening',
      'Global Prior-Art Database Retrieval',
      'Non-Patent Technical Literature Review',
      'Feature-Level Novelty & Inventive Step Grading',
    ],
    deliverable: 'Structured Patentability Opinion & Feature Matrix',
    iconName: 'Search',
  },
  {
    number: '02',
    stageName: 'Protection Stage',
    title: 'Drafting & Filing',
    description:
      'Patent drafting, complete specifications, provisional filings, Indian patent filings, and national phase support.',
    activities: [
      'Provisional & Complete Specification Drafting',
      'Independent & Dependent Claim Hierarchy Construction',
      'Formal Patent Illustrations (USPTO / EPO / IPO Standards)',
      'Direct Indian Patent Filing & PCT National Phase Lodging',
    ],
    deliverable: 'Filing-Ready Techno-Legal Patent Specification',
    iconName: 'FileText',
  },
  {
    number: '03',
    stageName: 'Examination Stage',
    title: 'Prosecution Support',
    description:
      'FER/OA responses, claim amendments, inventive-step arguments, hearing preparation, and post-hearing submissions.',
    activities: [
      'First Examination Report (FER) / Office Action (OA) Deconstruction',
      'Inventive-Step & Non-Obviousness Technical Arguments',
      'Claim Narrowing & Strategic Claim Amendments',
      'Controller Hearing Representation Preparation',
    ],
    deliverable: 'Comprehensive Rebuttal Brief & Claim Amendment Chart',
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    stageName: 'Product Launch Stage',
    title: 'FTO & Clearance',
    description:
      'Freedom-to-operate review, product-to-patent mapping, infringement risk assessment, and design-around support.',
    activities: [
      'Active In-Force Patent Landscape Screening by Jurisdiction',
      'Product Feature-to-Patent Claim Element Mapping',
      'Infringement Risk Grading (Literal & Doctrine of Equivalents)',
      'Actionable Engineering Design-Around Recommendations',
    ],
    deliverable: 'Market Clearance Opinion & Claim Element Matrix',
    iconName: 'Compass',
  },
  {
    number: '05',
    stageName: 'Commercial Value Stage',
    title: 'Commercialization & Monetization',
    description:
      'Licensing support, patent strength evaluation, licensing-readiness review, monetization review, commercial value assessment, technology transfer, and due diligence.',
    activities: [
      'Licensing Support & Prospect Mapping',
      'Patent Strength Evaluation & Claim Enforceability Scoring',
      'Licensing-Readiness Review & Commercialization Assessment',
      'Technology Transfer & IP Due Diligence Dossiers',
    ],
    deliverable: 'Monetization Dossier & Target Licensing Brief',
    iconName: 'TrendingUp',
  },
  {
    number: '06',
    stageName: 'Contentious Stage',
    title: 'Invalidation & Litigation Support',
    description:
      'Invalidity searches, opposition support, claim charts, infringement analysis, and evidence-led patent risk review.',
    activities: [
      'Deep Prior-Art Retrieval across Historical & Non-Patent Literature',
      'Detailed Element-by-Element Invalidity Claim Charts (102/103 & Section 3/64)',
      'Pre-Grant & Post-Grant Opposition Drafting',
      'Infringement Evidence Mapping & Litigation Technical Briefs',
    ],
    deliverable: 'Invalidity Claim Chart & Evidentiary Support Package',
    iconName: 'Scale',
  },
];

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: 'patentability',
    number: '01',
    title: 'Patentability & Invention Evaluation',
    slug: 'patentability-prior-art-search',
    category: 'searches',
    shortDescription:
      'Prior-art searching, invention screening, novelty assessment, and feature-level patentability analysis.',
    fullDescription:
      'Our Patentability & Invention Evaluation service provides a rigorous, objective techno-legal assessment before you commit financial and legal resources to filing. We examine both worldwide patent databases and deep non-patent technical literature to pinpoint patentable nuances and pre-empt examiner rejections.',
    tags: ['Prior Art', 'Novelty', 'Patentability'],
    keyDeliverables: [
      'Exhaustive Global Prior Art Search Report',
      'Feature-by-Feature Novelty Assessment Matrix',
      'Inventive Step (Non-Obviousness) Evaluation',
      'Drafting Recommendations & Scope Advisory',
    ],
    workflowSteps: [
      'Invention Disclosure Technical Deconstruction',
      'Multi-Syntax Search Query Formulation (IPC/CPC + Keywords)',
      'Global Patent & Academic Literature Filtering',
      'Categorized Prior Art Matrix & Novelty Opinion Generation',
    ],
    strategicValue: 'Prevents wasteful filing fees on non-patentable concepts and defines the exact boundaries for bulletproof independent claims.',
    applicableClients: ['Startups', 'Innovators', 'R&D Labs', 'Law Firms'],
  },
  {
    id: 'drafting-prosecution',
    number: '02',
    title: 'Patent Drafting, Filing & Prosecution',
    slug: 'patent-drafting',
    category: 'patents',
    shortDescription:
      'Patent drafting, Indian patent filing, national phase support, FER/OA responses, claim amendments, hearings, and prosecution strategy.',
    fullDescription:
      'We prepare high-precision techno-legal specifications designed to withstand scrutiny in Indian, US, European, and global patent offices. Our prosecution team crafts persuasive technical arguments and claim amendments that overcome complex objections without sacrificing commercial claim breadth.',
    tags: ['Drafting', 'Filing', 'FER/OA'],
    keyDeliverables: [
      'Complete Techno-Legal Specifications with Claim Hierarchies',
      'Formal Patent Drawings (USPTO, EPO & IPO Compliant)',
      'Indian Patent Office (IPO) Filings & PCT National Phase Lodging',
      'FER / OA Rebuttal Arguments & Strategic Claim Amendments',
    ],
    workflowSteps: [
      'Inventor Interviews & Technical Architecture Review',
      'Claim Strategy Construction (Independent & Dependent Cascades)',
      'Specification Drafting with Thorough Working Examples',
      'Prosecution Tracking, FER Analysis & Controller Hearing Prep',
    ],
    strategicValue: 'Secures robust, enforceable patent claims with broad commercial coverage that hold up in litigation and licensing negotiations.',
    applicableClients: ['Corporate Innovators', 'Law Firms', 'Foreign Associates', 'Tech Startups'],
  },
  {
    id: 'fto-clearance',
    number: '03',
    title: 'Freedom to Operate & Clearance',
    slug: 'freedom-to-operate',
    category: 'searches',
    shortDescription:
      'FTO searches, product-to-patent mapping, infringement risk review, competitor patent screening, and design-around support.',
    fullDescription:
      'Entering a new commercial market requires verifying that your product or process does not infringe active third-party patents. Our FTO studies map every functional feature of your product against active patent claims in target jurisdictions, identifying high-risk patents and engineering design-around paths.',
    tags: ['FTO', 'Clearance', 'Risk Review'],
    keyDeliverables: [
      'Jurisdiction-Specific In-Force Patent Landscape',
      'Product Feature-to-Claim Mapping Matrix',
      'Infringement Risk Categorization (High / Medium / Low / Clear)',
      'Technical Design-Around & Invalidation Guidance',
    ],
    workflowSteps: [
      'Product Feature Breakdown & Jurisdiction Scoping',
      'Exhaustive In-Force Patent Search in Target Markets',
      'Claim Limitation-by-Limitation Mapping',
      'Risk Synthesis & Clear-to-Launch Strategic Roadmap',
    ],
    strategicValue: 'Minimizes multi-million-dollar patent litigation risks before product launch, reassuring investors, partners, and corporate boards.',
    applicableClients: ['Product Companies', 'Startups Pre-Launch', 'Law Firms', 'Investors'],
  },
  {
    id: 'intelligence-portfolio',
    number: '04',
    title: 'Patent Intelligence & Portfolio Strategy',
    slug: 'landscape-white-space-analysis',
    category: 'business-intelligence',
    shortDescription:
      'Landscape studies, white-space analysis, portfolio review, competitor monitoring, patent watch, and IP due diligence.',
    fullDescription:
      'Transform complex patent data into strategic commercial insight. Our patent intelligence services identify emerging competitive clusters, uncover unpatented technical white spaces for R&D investment, and audit existing portfolios to identify core assets versus prunable costs.',
    tags: ['Landscape', 'Portfolio', 'Due Diligence'],
    keyDeliverables: [
      'Comprehensive Patent Landscape & Trend Reports',
      'Interactive White-Space & Opportunity Maps',
      'Competitor IP Filing & Assignee Trajectory Analysis',
      'Portfolio Pruning & Strategic Alignment Audits',
    ],
    workflowSteps: [
      'Domain Definition & Technology Classification Scheme',
      'Big-Data Patent Collection & Normalization',
      'Deep Technical Categorization & Assignee Profiling',
      'Commercial Opportunity Synthesis & Strategic Briefing',
    ],
    strategicValue: 'Directs R&D budgets into defensible technological niches and gives leadership actionable intelligence on competitor roadmaps.',
    applicableClients: ['R&D Executives', 'Technology Companies', 'Incubators', 'Universities'],
  },
  {
    id: 'monetization-commercialization',
    number: '05',
    title: 'Patent Monetization & Commercialization Support',
    slug: 'patent-monetization',
    category: 'business-intelligence',
    shortDescription:
      'Licensing support, monetization-readiness review, technology-transfer support, patent strength evaluation, and commercialization-focused IP assessment.',
    fullDescription:
      'Patents must create real business value. We bridge the gap between technical IP assets and commercial revenue streams through licensing target identification, claim strength scoring, technology-transfer preparation, and monetization feasibility evaluations.',
    tags: ['Licensing', 'Monetization', 'Commercial Value'],
    keyDeliverables: [
      'Patent Strength Scoring & Claim Enforceability Audit',
      'Evidence-of-Use (EoU) Summaries & Target Prospect Lists',
      'Licensing Tear Sheets & Technology Packages',
      'Commercialization & Valuation Readiness Briefs',
    ],
    workflowSteps: [
      'Patent Asset Quality & Claim Enforceability Screening',
      'Industry & Market Overlap Evaluation',
      'Target Licensee / Acquirer Identification',
      'Commercial Pitch & Techno-Legal Collateral Generation',
    ],
    strategicValue: 'Extracts tangible ROI from patents by converting passive intellectual property into active licensing revenue or acquisition leverage.',
    applicableClients: ['Innovators', 'Universities', 'Technology Licensors', 'Startups'],
  },
  {
    id: 'invalidation-litigation',
    number: '06',
    title: 'Invalidation, Opposition & Litigation Support',
    slug: 'patent-invalidation',
    category: 'searches',
    shortDescription:
      'Invalidity searches, opposition support, claim charts, evidence mapping, infringement analysis, and litigation/PTAB-oriented technical support.',
    fullDescription:
      'When defending against patent assertions or clearing competitive hurdles, finding bulletproof invalidating prior art is critical. We conduct deep-dive invalidity investigations and construct element-by-element claim charts demonstrating anticipation (Section 102/novelty) or obviousness (Section 103/inventive step).',
    tags: ['Invalidity', 'Claim Charts', 'Litigation Support'],
    keyDeliverables: [
      'High-Relevance Prior Art Documents (Patent & NPL)',
      'Element-by-Element Invalidity Claim Charts',
      'Pre-Grant & Post-Grant Opposition Technical Petitions',
      'Infringement & Evidence-of-Use Mapping',
    ],
    workflowSteps: [
      'Asserted Patent Claims & File History Deconstruction',
      'Global Multi-Language Prior Art Retrieval (Pre-Priority Date)',
      'Detailed Limitation-by-Limitation Evidence Matching',
      'Final Oppositional Brief & Evidentiary Claim Chart Delivery',
    ],
    strategicValue: 'Provides trial-ready evidence to neutralize aggressive patent assertions, reduce settlement amounts, and protect market share.',
    applicableClients: ['Litigation Attorneys', 'Law Firms', 'Defendant Enterprises', 'IP Counsels'],
  },
];

export const STAKEHOLDERS: StakeholderGroup[] = [
  {
    id: 'startups-innovators',
    title: 'Startups, Innovators & Product Companies',
    subtitle: 'From Idea to Protected, Investor-Ready Asset',
    description:
      'Support teams moving from idea to protected asset, product launch, investor readiness, licensing, or commercialization.',
    offerings: [
      'Invention screening & novelty evaluations',
      'Patentability assessment before capital expenditure',
      'Patent drafting tailored for venture due diligence',
      'Strategic filing (Provisional, Complete & PCT routes)',
      'Prosecution & FER/OA response management',
      'Freedom to Operate (FTO) review before commercial rollout',
      'Commercialization & monetization readiness assessments',
    ],
    benefits: [
      'Build a defensible moat against well-funded incumbents',
      'Satisfy institutional investor patent due diligence criteria',
      'Eliminate infringement exposure prior to market entry',
    ],
    icon: 'Rocket',
  },
  {
    id: 'law-firms-attorneys',
    title: 'Law Firms & Patent Attorneys',
    subtitle: 'High-Volume, High-Precision Analytical Backing',
    description:
      'Technical and analytical support that extends law firm capacity without increasing overhead.',
    offerings: [
      'Prior-art searches (Patentability, Invalidation, FTO)',
      'Element-by-element claim charts for litigation & licensing',
      'FER/OA technical responses & inventive step argumentation',
      'Invalidity analysis for PTAB / court proceedings',
      'Opposition support (pre-grant and post-grant)',
      'Evidence mapping and technical brief preparation',
    ],
    benefits: [
      'Scale your firm’s output with dependable techno-legal analysts',
      'Turn around complex claim charts and prior art on tight deadlines',
      'Maintain rigorous quality standards across deep technical domains',
    ],
    icon: 'Briefcase',
  },
  {
    id: 'foreign-associates',
    title: 'Foreign Associates',
    subtitle: 'Your Trusted On-the-Ground India Patent Partner',
    description:
      'India-focused patent filing and prosecution support providing seamless local coordination.',
    offerings: [
      'PCT National Phase entry into India',
      'Paris Convention patent filings with the Indian Patent Office',
      'FER responses conforming to Indian Patents Act nuances',
      'Controller hearing preparation & attending representations',
      'Local coordination, annuities, and docketing compliance',
    ],
    benefits: [
      'Clear, transparent communication and strict deadline adherence',
      'Deep familiarity with Indian Controllers and Section 3 exclusions',
      'Cost-effective prosecution support for your global client roster',
    ],
    icon: 'Globe',
  },
  {
    id: 'incubators-universities',
    title: 'Incubators, Universities & R&D Teams',
    subtitle: 'Academic & Institutional Innovation Management',
    description:
      'Structured IP evaluation and technology transfer mechanisms for research institutions and incubation hubs.',
    offerings: [
      'Invention disclosure review and triage',
      'Institutional portfolio assessment and asset clustering',
      'Technology-transfer readiness evaluations',
      'Licensing opportunity evaluation and target scouting',
      'Commercialization strategy and IP policy advisory',
    ],
    benefits: [
      'Streamline the funnel from academic publication to patent filing',
      'Identify commercial licensees in relevant global industries',
      'Maximize research grant ROI through structured asset protection',
    ],
    icon: 'GraduationCap',
  },
];

export const TECHNICAL_DOMAINS: TechnicalDomain[] = [
  {
    id: 'ai-software',
    title: 'AI, Software & Digital Systems',
    description:
      'Computer-implemented inventions, platforms, analytics, workflows, and automation.',
    subfields: [
      'Machine Learning Models & Neural Networks',
      'Cloud Architecture & Microservices',
      'Natural Language Processing (NLP)',
      'Distributed Ledgers & Cryptographic Systems',
      'Data Analytics Pipelines & Algorithmic Workflows',
    ],
    schematicType: 'network',
  },
  {
    id: 'telecom-electronics',
    title: 'Telecom, Networks & Electronics',
    description:
      'Wireless systems, communication protocols, electronics, circuits, and signal processing.',
    subfields: [
      '5G/6G Cellular Standards & Protocols',
      'RF Circuits & Antenna Designs',
      'IoT Sensor Networks & Embedded Systems',
      'Optical Communications & Photonics',
      'Digital Signal Processing & Modulation Architectures',
    ],
    schematicType: 'circuit',
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical & Product Engineering',
    description:
      'Devices, mechanisms, assemblies, industrial products, and functional product features.',
    subfields: [
      'Automotive Systems & Electric Vehicle Powertrains',
      'Robotics, Actuators & Industrial Automation',
      'Fluid Dynamics & Thermodynamic Equipment',
      'Consumer Hardware & Precision Mechanisms',
      'Heavy Machinery & Manufacturing Equipment',
    ],
    schematicType: 'mechanical',
  },
  {
    id: 'medical-devices',
    title: 'Medical, HealthTech & Devices',
    description:
      'Diagnostic systems, monitoring devices, therapeutic tools, and healthcare platforms.',
    subfields: [
      'Non-Invasive Diagnostic Sensors',
      'Surgical Tools & Orthopedic Implants',
      'Wearable Physiological Monitors',
      'Drug Delivery Devices & Inhalers',
      'Telemedicine & Clinical Data Infrastructure',
    ],
    schematicType: 'medical',
  },
  {
    id: 'cleantech-energy',
    title: 'CleanTech, Energy & Industrial Tech',
    description:
      'Energy systems, sustainability technologies, manufacturing systems, and processes.',
    subfields: [
      'Solar Photovoltaics & Inverter Topologies',
      'Battery Management Systems (BMS) & Storage',
      'Carbon Capture & Emission Reduction Technologies',
      'Water Purification & Waste Valorization Systems',
      'Smart Grid & Power Distribution Systems',
    ],
    schematicType: 'energy',
  },
  {
    id: 'materials-biotech',
    title: 'Materials, Chemistry & Biotechnology',
    description:
      'Compositions, formulations, biomaterials, chemical processes, and applied biotechnology systems.',
    subfields: [
      'Polymer Composites & Nanomaterials',
      'Pharmaceutical Formulations & Solid Forms',
      'Assays, Reagents & Bioprocessing Methods',
      'Agricultural Chemical Formulations',
      'Advanced Coatings & Surface Functionalization',
    ],
    schematicType: 'biotech',
  },
];

export const BUSINESS_OUTCOMES = [
  {
    id: 'protect',
    title: 'Protect the Right Invention',
    description:
      'Identify patentable features, define claim scope, and convert technical ideas into protectable assets.',
    details:
      'Not every feature is worth patenting, but core technical differentiators must be shielded with uncompromised claim precision. We separate novelty from background art, ensuring specifications capture the commercial embodiments competitors will try to replicate.',
    icon: 'Shield',
    metricLabel: 'Claim Precision',
  },
  {
    id: 'reduce-risk',
    title: 'Reduce Product Launch Risk',
    description:
      'Assess FTO, clearance, infringement exposure, and design-around options before market entry.',
    details:
      'Surprise patent infringement suits destroy product margins and delay shipments. Our pre-launch FTO clearing de-risks capital deployments, giving legal teams and executive boards clear, documented visibility into target patent landscapes.',
    icon: 'Compass',
    metricLabel: 'Market Clearance',
  },
  {
    id: 'commercialization',
    title: 'Improve Commercialization Readiness',
    description:
      'Evaluate patent strength, licensing potential, portfolio value, and technology-transfer readiness.',
    details:
      'Patents should generate enterprise value. We audit claim breadth, target active infringers for licensing discussions, and build clear technical dossiers that support tech-transfer negotiations and venture valuations.',
    icon: 'TrendingUp',
    metricLabel: 'Asset Value',
  },
  {
    id: 'enforcement',
    title: 'Support Enforcement or Defense',
    description:
      'Build claim charts, invalidity positions, opposition support, and evidence-led patent risk analysis.',
    details:
      'Whether asserting your rights against a copycat or defending your market freedom against an overbroad competitor patent, our forensic claim charts and deep prior-art searches provide the factual bedrock for legal dominance.',
    icon: 'Scale',
    metricLabel: 'Evidentiary Strength',
  },
];

export const OUTCOME_FLOW_KEYWORDS = [
  'Protection',
  'Clearance',
  'Valuation',
  'Licensing',
  'Strategic Growth',
];

// Detail metadata for all 24 dedicated pages
export interface PageDetailData {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  overview: string;
  keyAspects: string[];
  workflow: { step: string; title: string; desc: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export const DEDICATED_PAGES_DATA: Record<string, PageDetailData> = {
  'about-us': {
    slug: 'about-us',
    title: 'About xyz IP Services',
    category: 'Company',
    subtitle: 'Structured technical analysis, claim-level precision, and commercially relevant IP strategy.',
    overview:
      'xyz IP is an intellectual property support firm providing end-to-end patent and IP services for innovators, startups, law firms, foreign associates, universities, research institutions, and technology-driven businesses.\n\nWe assist clients across the patent lifecycle, including invention evaluation, patentability assessment, prior-art searching, patent drafting, filing, prosecution, FER/OA responses, freedom-to-operate analysis, patent invalidation, opposition support, claim charting, portfolio review, licensing, monetization, and commercialization-readiness.\n\nOur work is built around structured technical analysis, claim-level precision, and commercially relevant IP strategy. We help clients identify protectable innovation, prepare strong patent filings, respond effectively to examination objections, assess product-launch risks, evaluate patent strength, and make informed decisions relating to protection, prosecution, clearance, enforcement, and commercialization.\n\nxyz IP supports startups, innovators, law firms, foreign associates, incubators, universities, and R&D-driven organizations with practical, evidence-based patent support.',
    keyAspects: [
      'Multi-disciplinary technical analysts across software, telecom, mechanical, medical, clean tech, and biotech.',
      'Techno-legal methodology that bridges engineering precision with patent law requirements.',
      'Strict adherence to international patent office guidelines (USPTO, EPO, IPO, WIPO).',
      'Transparent communication, fixed turnaround timelines, and rigorous quality verification protocols.',
    ],
    workflow: [
      { step: '01', title: 'Technical Understanding', desc: 'In-depth engagement with technical disclosures and inventors to capture the exact inventive principles.' },
      { step: '02', title: 'Global Prior-Art Analysis', desc: 'Systematic screening across patent repositories and scientific publications.' },
      { step: '03', title: 'Claim-Level Precision', desc: 'Formulating robust claim hierarchies and airtight techno-legal argumentation.' },
      { step: '04', title: 'Commercial Execution', desc: 'Delivering strategic documentation ready for filing, prosecution, clearance, or monetization.' },
    ],
    deliverables: [
      'Comprehensive IP lifecycle support documentation',
      'Confidentiality and strict data integrity agreements',
      'Dedicated subject-matter technical points of contact',
      'Actionable executive summaries and claim-level charts',
    ],
    faqs: [
      { question: 'What sets xyz IP apart from traditional service providers?', answer: 'We emphasize deep technical comprehension combined with claim-level precision. Our team speaks both engineering and patent law fluently, ensuring that your claims match your true commercial embodiments.' },
      { question: 'Where is xyz IP located?', answer: 'Our corporate office is located in Bengaluru, Karnataka, India – 560001.' },
      { question: 'Do you support foreign law firms and associates?', answer: 'Yes. A substantial portion of our practice is dedicated to supporting US, European, Asian, and global law firms with Indian national phase filings, FER responses, and global analytical search support.' },
    ],
  },
  'ip-services': {
    slug: 'ip-services',
    title: 'Intellectual Property Services',
    category: 'Overview',
    subtitle: 'Comprehensive IP lifecycle solutions spanning Patents, Trademarks, and Copyrights.',
    overview:
      'xyz IP provides structured IP services spanning the entire lifecycle of intangible assets. From early-stage invention evaluation and worldwide patent prosecution to brand trademark registration and software copyright protection, we assist innovators in turning intangible assets into defensible commercial advantages.',
    keyAspects: [
      'Full lifecycle patent drafting, filing, drawings, and office action prosecution.',
      'Comprehensive trademark clearance, filing, registration, and opposition monitoring.',
      'Copyright protection for software source code, digital assets, and industrial literary works.',
      'Seamless multi-jurisdiction coordination for domestic and international applicants.',
    ],
    workflow: [
      { step: '01', title: 'Asset Identification', desc: 'Screening inventions, brand marks, and codebases to identify protectable subject matter.' },
      { step: '02', title: 'Clearance & Search', desc: 'Verifying availability and freedom to register without infringing prior rights.' },
      { step: '03', title: 'Preparation & Filing', desc: 'Drafting compliant legal documents and filing with relevant IP authorities.' },
      { step: '04', title: 'Prosecution & Grant', desc: 'Overcoming examiner objections and securing official registration certificates.' },
    ],
    deliverables: [
      'End-to-end filing dossiers for patents, trademarks, and copyrights',
      'Examination response briefs and amendment schedules',
      'Official correspondence tracking and docketing updates',
      'Post-grant maintenance and annuity tracking advisory',
    ],
    faqs: [
      { question: 'How do patents, trademarks, and copyrights interact?', answer: 'Patents protect technical inventions and functional designs; trademarks protect brand names, logos, and identity; copyrights protect original expressions such as software code and documentation. We coordinate all three.' },
      { question: 'Can you handle filings outside of India?', answer: 'Yes, we prepare specifications and search reports formatted for the USPTO, EPO, and WIPO PCT, and collaborate with foreign counsel worldwide.' },
    ],
  },
  'patents': {
    slug: 'patents',
    title: 'Patent Services',
    category: 'IP Services',
    subtitle: 'End-to-end patent drafting, filing, prosecution, illustrations, and office action responses.',
    overview:
      'Our Patent practice represents the core of xyz IP. We provide end-to-end support for provisional and complete patent applications, compliant formal illustrations, industrial design filings, rigorous patent prosecution, and persuasive First Examination Report (FER) / Office Action (OA) responses.',
    keyAspects: [
      'Technical depth across AI, telecommunications, mechanics, life sciences, and chemistry.',
      'Claim structures engineered for breadth, defensibility, and licensing leverage.',
      'Compliance with Indian Patent Office, USPTO, EPO, and PCT filing standards.',
      'Strategic prosecution to accelerate allowance while preserving critical claim limitations.',
    ],
    workflow: [
      { step: '01', title: 'Invention Triage', desc: 'Analyzing technical disclosures, diagrams, and inventor inputs.' },
      { step: '02', title: 'Claim Engineering', desc: 'Crafting independent and dependent claims that anticipate design-arounds.' },
      { step: '03', title: 'Full Specification Drafting', desc: 'Drafting background, summary, detailed description, and working embodiments.' },
      { step: '04', title: 'Filing & Prosecution', desc: 'Submitting filings and steering applications through official examinations to grant.' },
    ],
    deliverables: [
      'Ready-to-file patent specifications with full claim sets',
      'IPO/USPTO/EPO formatted vector patent drawings',
      'Formal filing receipts, docketing schedules, and status logs',
      'Office action response briefs with legal and technical arguments',
    ],
    faqs: [
      { question: 'What is the difference between a provisional and a complete specification?', answer: 'A provisional specification establishes an early priority date when an invention is still evolving. A complete specification must be filed within 12 months with full claims and detailed technical embodiments.' },
      { question: 'How do you handle section 3 objections in India?', answer: 'Our prosecution specialists have deep experience overcoming Indian Patent Act Section 3 exclusions (such as 3(k) for software and 3(d) for pharma/chemicals) using structured inventive-step and technical-effect arguments.' },
    ],
  },
  'patent-filing': {
    slug: 'patent-filing',
    title: 'Patent Filing Services',
    category: 'Patents',
    subtitle: 'Provisional, complete, PCT international, and Indian national phase filings.',
    overview:
      'Filing a patent application is a time-critical legal milestone. xyz IP manages procedural compliance and formal filings across the Indian Patent Office (IPO) and global registries. We handle provisional filings to lock in priority dates, complete specifications, PCT international phase applications, and conventional Paris Convention filings.',
    keyAspects: [
      'Rapid provisional filing execution to secure early priority dates.',
      'Indian Patent Office e-filing management with all statutory forms (Form 1, 2, 3, 5, 18).',
      'PCT National Phase entry into India for foreign associates and multinational companies.',
      'Convention priority filings within statutory 12-month deadlines.',
    ],
    workflow: [
      { step: '01', title: 'Disclosure Verification', desc: 'Reviewing inventors, applicants, priority claims, and assignment chains.' },
      { step: '02', title: 'Statutory Form Preparation', desc: 'Drafting all required statutory documentation and declarations.' },
      { step: '03', title: 'Portal Submission', desc: 'Secure electronic filing through official patent office portals.' },
      { step: '04', title: 'Docketing & Receipt Issuance', desc: 'Providing official filing receipts, application numbers, and priority records.' },
    ],
    deliverables: [
      'Official filing receipt with allocated patent application number',
      'Stamped copies of all filed forms and specifications',
      'Statutory deadline calendar (Request for Examination, Form 3 updates)',
      'Proof of official fee payment reconciliation',
    ],
    faqs: [
      { question: 'What is the statutory deadline for entering India National Phase from a PCT application?', answer: 'The deadline is 31 months from the earliest priority date.' },
      { question: 'Do you assist foreign associates with local agent representation in India?', answer: 'Yes, we provide full local coordination, execution of Form 26 (Power of Attorney), and continuous docketing support.' },
    ],
  },
  'patent-drafting': {
    slug: 'patent-drafting',
    title: 'Patent Drafting Services',
    category: 'Patents',
    subtitle: 'Techno-legal patent drafting with claim-level precision and commercial robustness.',
    overview:
      'A patent is only as strong as its claims and specification. At xyz IP, patent drafting is treated as a high-precision techno-legal craft. Our drafters hold advanced degrees in engineering and science, allowing us to deeply understand your technology and draft specifications that withstand intense scrutiny from patent examiners and competitors alike.',
    keyAspects: [
      'Independent claim drafting focusing on essential technical novelties.',
      'Dependent claim cascades designed to offer strategic fallback positions.',
      'Comprehensive detailed descriptions with extensive working examples and variations.',
      'Drafting engineered to prevent Section 112 / Section 10 enablement and clarity rejections.',
    ],
    workflow: [
      { step: '01', title: 'Inventor Technical Interview', desc: 'Exploring technical principles, working parameters, and edge cases.' },
      { step: '02', title: 'Claim Strategy Session', desc: 'Defining the core inventive concept and drafting broad independent claims.' },
      { step: '03', title: 'Detailed Description Drafting', desc: 'Writing comprehensive disclosures with step-by-step embodiment descriptions.' },
      { step: '04', title: 'Review & Polish', desc: 'Thorough peer review, consistency check with drawings, and final client sign-off.' },
    ],
    deliverables: [
      'Complete patent specification document ready for official submission',
      'Comprehensive claim hierarchy (independent, dependent, method, system, apparatus)',
      'Abstract and summary of the invention aligned with patent rules',
      'Detailed figure descriptions synchronized with patent illustrations',
    ],
    faqs: [
      { question: 'Why is claim-level precision so critical?', answer: 'Claims define the legal boundary of your property. If drafted too narrowly, competitors will easily design around; if drafted too broadly, examiners will cite prior art or courts will invalidate them. Precision balances both.' },
      { question: 'Can you draft specifications for foreign patent jurisdictions like USPTO and EPO?', answer: 'Yes, we routinely draft applications conforming to 35 U.S.C. (US) and EPC (Europe) guidelines for law firms and innovators.' },
    ],
  },
  'patent-illustrations': {
    slug: 'patent-illustrations',
    title: 'Patent Illustrations & Drawings',
    category: 'Patents',
    subtitle: 'USPTO, EPO, and Indian Patent Office compliant technical drawings.',
    overview:
      'Clear, accurate drawings are indispensable for patent prosecution. Our technical illustrators translate complex engineering blueprints, schematics, flowcharts, and 3D CAD models into clear, black-and-white line drawings conforming strictly to the formatting rules of global patent authorities.',
    keyAspects: [
      'Strict adherence to sheet margins, line weights, font sizes, and reference numerals.',
      'Mechanical assembly, exploded views, isometric projections, and cross-sections.',
      'Software flowcharts, architectural diagrams, state machines, and data pipelines.',
      'Electronic circuit schematics, timing diagrams, and block representations.',
    ],
    workflow: [
      { step: '01', title: 'Input Ingestion', desc: 'Reviewing CAD models, hand sketches, photos, or architectural diagrams.' },
      { step: '02', title: 'Line Art Vectorization', desc: 'Creating clean vector line drawings with standardized line weights and shading.' },
      { step: '03', title: 'Reference Numbering', desc: 'Applying sequential reference numerals consistent with the drafted specification.' },
      { step: '04', title: 'Formal Quality Check', desc: 'Verifying margin compliance, sheet orientation, and legibility on standard A4 / US Letter.' },
    ],
    deliverables: [
      'High-resolution print-ready PDF sheets for official filing',
      'Editable vector source files (SVG / AI / DWG)',
      'Reference numeral index matching the specification text',
    ],
    faqs: [
      { question: 'What formatting standards do you adhere to?', answer: 'We strictly follow USPTO 37 CFR 1.84, EPO Rule 46, and Indian Patent Rules (Rule 15) specifications.' },
      { question: 'Can you work from rough sketches or physical product photos?', answer: 'Yes, our illustrators can create formal patent drawings from rough hand sketches, prototypes, photos, or engineering CAD drawings.' },
    ],
  },
  'design-patent': {
    slug: 'design-patent',
    title: 'Design Patent Services',
    category: 'Patents',
    subtitle: 'Protection for industrial designs, visual aesthetics, and ornamental features.',
    overview:
      'While utility patents protect how an invention works, design patents (registered industrial designs) protect how a product looks—its shape, surface ornamentation, configuration, and visual appeal. xyz IP assists creators in securing design rights to stop competitors from copying consumer product aesthetics.',
    keyAspects: [
      'Design novelty search to identify conflicting registered designs.',
      'Multi-view formal drawing preparation (Front, Back, Top, Bottom, Left, Right, Isometric).',
      'Classification according to the Locarno Classification system.',
      'Filing and prosecution with the Design Wing of the Patent Office.',
    ],
    workflow: [
      { step: '01', title: 'Aesthetic Novelty Review', desc: 'Evaluating visual features against existing registered designs.' },
      { step: '02', title: 'Multi-View Drawing Generation', desc: 'Preparing standard 7-view representations with accurate surface shading.' },
      { step: '03', title: 'Application Submission', desc: 'Filing design applications with correct statement of novelty.' },
      { step: '04', title: 'Examination & Registration', desc: 'Addressing examiner queries and obtaining the Registration Certificate.' },
    ],
    deliverables: [
      'Design application filing docket with statement of novelty',
      'Certified 7-view formal drawing portfolio',
      'Design registration tracking and certificate delivery',
    ],
    faqs: [
      { question: 'What is the term of a registered design in India?', answer: 'An industrial design registration in India is valid initially for 10 years, extendable by an additional 5 years for a total of 15 years.' },
      { question: 'Can functional features be protected under a design patent?', answer: 'No, purely functional features must be protected via utility patents. Designs protect only novel ornamental and aesthetic aspects.' },
    ],
  },
  'patent-prosecution': {
    slug: 'patent-prosecution',
    title: 'Patent Prosecution Support',
    category: 'Patents',
    subtitle: 'Strategic navigation through official examinations, citations, and hearings.',
    overview:
      'Patent prosecution is the legal dialogue between applicant and patent examiner from filing to grant. xyz IP provides structured prosecution management, analyzing examiner citations, formulating inventive-step defenses, and drafting claim amendments that secure allowance without unnecessary narrowing.',
    keyAspects: [
      'Detailed deconstruction of examiner citation documents and rejection rationale.',
      'Formulation of technical distinctions overcoming novelty (Section 102) and inventive step (Section 103) rejections.',
      'Claim amendments crafted to dodge cited prior art while retaining broad infringement scope.',
      'Preparation for and attendance at Controller Hearings under the Indian Patents Act.',
    ],
    workflow: [
      { step: '01', title: 'Office Action Review', desc: 'Thorough legal and technical analysis of all examiner objections.' },
      { step: '02', title: 'Cited Art Comparison', desc: 'Technical differentiation matrix comparing cited references with claimed features.' },
      { step: '03', title: 'Rebuttal Drafting', desc: 'Preparing persuasive written submissions and claim amendment schedules.' },
      { step: '04', title: 'Hearing Representation', desc: 'Filing written submissions following oral hearings to achieve final grant.' },
    ],
    deliverables: [
      'Comprehensive examination response briefs',
      'Marked-up and clean claim amendment schedules',
      'Technical distinction charts against cited prior art references',
      'Hearing briefs and post-hearing written submissions',
    ],
    faqs: [
      { question: 'What happens if a response to an office action is rejected?', answer: 'In India, the Controller issues a hearing notice. We prepare extensive technical arguments, attend the hearing, and submit a post-hearing brief to satisfy all outstanding requirements.' },
      { question: 'How do you handle patent prosecution for foreign associates?', answer: 'We act as your reliable technical backend, delivering ready-to-file response drafts that align with your firm’s standards and local procedural rules.' },
    ],
  },
  'office-action-response': {
    slug: 'office-action-response',
    title: 'Office Action & FER Response',
    category: 'Patents',
    subtitle: 'Persuasive techno-legal rebuttals for Indian FERs and international Office Actions.',
    overview:
      'Receiving a First Examination Report (FER) or Office Action (OA) is a standard part of the patent journey. Overcoming these objections requires precise technical reasoning and legal acumen. xyz IP crafts robust rebuttal arguments and strategic claim amendments to turn objections into grants.',
    keyAspects: [
      'Specialized handling of Indian Patent Office FERs within statutory 6-month deadlines.',
      'Expert handling of Section 3(k) (software/business methods) and Section 3(d) objections.',
      'Technical claim mapping proving non-obviousness over cited D1, D2, D3 references.',
      'US Office Action (Non-Final / Final) and EPO Communication response drafting.',
    ],
    workflow: [
      { step: '01', title: 'FER Deconstruction', desc: 'Cataloging formal, clarity, novelty, and inventive step objections.' },
      { step: '02', title: 'Prior Art Deep-Dive', desc: 'Forensic review of cited prior art to isolate missing technical features.' },
      { step: '03', title: 'Argumentation & Amendments', desc: 'Drafting structured arguments showing technical advancement and unexpected results.' },
      { step: '04', title: 'Submission Filing', desc: 'Final review with the applicant/attorney and timely filing on the patent portal.' },
    ],
    deliverables: [
      'Complete FER / OA Response Brief',
      'Claim Amendment Chart with supporting basis references from the specification',
      'Prior Art Contrast Matrix showing key differentiators',
    ],
    faqs: [
      { question: 'What is the deadline to respond to an Indian FER?', answer: 'The statutory deadline is 6 months from the date of issuance of the FER, extendable by up to 3 months upon filing Form 4.' },
      { question: 'Can new technical features be added during an office action response?', answer: 'No, claim amendments must have explicit basis in the original specification. Our drafters locate and utilize existing implicit disclosures effectively.' },
    ],
  },
  'trademarks': {
    slug: 'trademarks',
    title: 'Trademark Services',
    category: 'IP Services',
    subtitle: 'Brand identity protection, comprehensive clearance searches, and trademark prosecution.',
    overview:
      'Your brand is one of your most valuable commercial assets. xyz IP provides end-to-end trademark management to help companies establish, protect, and enforce distinctive brand names, logos, slogans, and trade dress in domestic and international markets.',
    keyAspects: [
      'Comprehensive trademark clearance searches across phonetic, visual, and conceptual similarities.',
      'Class determination according to the Nice Classification system (Goods & Services).',
      'Trademark filing, examination management, and reply to examination reports.',
      'Trademark opposition filing, defense, and watch services for potential infringers.',
    ],
    workflow: [
      { step: '01', title: 'Clearance Search', desc: 'Analyzing trademark registries for conflicting identical or deceptively similar marks.' },
      { step: '02', title: 'Filing Strategy', desc: 'Selecting appropriate classes and submitting TM-A filings.' },
      { step: '03', title: 'Prosecution & Examination', desc: 'Responding to Section 9 (distinctiveness) and Section 11 (similarity) objections.' },
      { step: '04', title: 'Registration & Watch', desc: 'Securing the registration certificate and monitoring future journal publications.' },
    ],
    deliverables: [
      'Comprehensive Trademark Availability and Risk Opinion',
      'Official Trademark Application Filing Receipt',
      'Examination Reply Briefs for Examiner Objections',
      'Trademark Registration Certificate and Renewal Tracker',
    ],
    faqs: [
      { question: 'How long does trademark registration remain valid?', answer: 'A trademark registration is valid for 10 years from the date of application and can be renewed indefinitely every 10 years.' },
      { question: 'When can I use the ® symbol versus the ™ symbol?', answer: 'The ™ symbol can be used immediately upon filing an application, whereas the ® symbol can only be legally used once the registration certificate has been granted.' },
    ],
  },
  'copyrights': {
    slug: 'copyrights',
    title: 'Copyright Services',
    category: 'IP Services',
    subtitle: 'Protection for software source code, database architectures, manuals, and creative works.',
    overview:
      'In the digital economy, software source code, database architectures, APIs, technical documentation, and creative content represent substantial investments. xyz IP assists technology firms and creators in registering and defending copyrights against unauthorized copying, distribution, and piracy.',
    keyAspects: [
      'Software source code and object code copyright filings.',
      'Protection for database schemas, UX documentation, and system architectures.',
      'Copyright registration for literary, artistic, and multimedia works.',
      'Assignment agreements, licensing contracts, and work-for-hire declarations.',
    ],
    workflow: [
      { step: '01', title: 'Work Review', desc: 'Evaluating the originality and categorizing the work under relevant statutory classes.' },
      { step: '02', title: 'Documentation Preparation', desc: 'Preparing source code excerpts, statements of particulars, and NOCs.' },
      { step: '03', title: 'Filing & Scrutiny', desc: 'Filing with the Copyright Office and managing the 30-day mandatory discrepancy period.' },
      { step: '04', title: 'Registration Issuance', desc: 'Securing the official Extracts of Register of Copyrights (ROC).' },
    ],
    deliverables: [
      'Copyright Application Filing Receipt (Dairy Number)',
      'Statutory Declaration and No Objection Certificate formats',
      'Official Extracts of Register of Copyrights (ROC)',
    ],
    faqs: [
      { question: 'Is software source code protectable under copyright in India?', answer: 'Yes, computer software programs and source code are protected as "literary works" under the Indian Copyright Act, 1957.' },
      { question: 'What is the duration of copyright protection?', answer: 'For corporate works and software, protection lasts 60 years from the year of publication.' },
    ],
  },
  'searches': {
    slug: 'searches',
    title: 'Patent Search & Intelligence Services',
    category: 'Searches',
    subtitle: 'Rigorous empirical prior art retrieval, invalidity investigations, and freedom to operate clearance.',
    overview:
      'High-stakes IP decisions require unimpeachable data. xyz IP conducts rigorous global searches using enterprise patent databases, non-patent scientific literature, and foreign-language repositories to uncover prior art, evaluate validity, and confirm freedom to operate.',
    keyAspects: [
      'Multi-database retrieval across USPTO, EPO, WIPO, JPO, KIPO, CNIPA, and Indian Patent databases.',
      'Comprehensive non-patent literature (NPL) searching in IEEE, ScienceDirect, arXiv, and Google Scholar.',
      'Semantic, citation, classification (IPC/CPC), and Boolean query architectures.',
      'Actionable reporting with feature-by-feature mapping and objective risk scores.',
    ],
    workflow: [
      { step: '01', title: 'Scope Definition', desc: 'Deconstructing technical disclosures into clear search concepts and features.' },
      { step: '02', title: 'Query Formulation', desc: 'Building nested Boolean and classification search matrices.' },
      { step: '03', title: 'Iterative Screening', desc: 'Reviewing thousands of hits to filter down to prime relevant documents.' },
      { step: '04', title: 'Detailed Analysis & Reporting', desc: 'Generating feature-by-feature mapping and strategic guidance.' },
    ],
    deliverables: [
      'Detailed Prior Art Search Reports with PDF copies of key citations',
      'Feature-by-Feature Claim Comparison Matrices',
      'Electronic search query records and database coverage logs',
    ],
    faqs: [
      { question: 'Which databases do your analysts use?', answer: 'We utilize global commercial patent search platforms, patent office databases (USPTO, Espacenet, Patentscope, IPO), and academic scientific repositories.' },
      { question: 'Can you search non-English patents?', answer: 'Yes, our search strategies include Chinese, Japanese, Korean, and German patent filings with machine-translated and human-verified claims.' },
    ],
  },
  'patentability-prior-art-search': {
    slug: 'patentability-prior-art-search',
    title: 'Patentability / Prior Art Search',
    category: 'Searches',
    subtitle: 'Determine novelty and non-obviousness before investing in patent filing.',
    overview:
      'Before committing significant financial resources to drafting and filing a patent, an exhaustive Patentability (Novelty) Search is critical. xyz IP investigates worldwide patent databases and scientific literature to determine whether your invention meets the legal criteria of novelty and inventive step.',
    keyAspects: [
      'Identification of closely related patents, pending applications, and academic papers.',
      'Evaluation of novelty and non-obviousness at the individual feature level.',
      'Strategic recommendations on how to draft claims to bypass identified prior art.',
      'Prevention of unnecessary filing expenditure on already-disclosed inventions.',
    ],
    workflow: [
      { step: '01', title: 'Invention Extraction', desc: 'Isolating the core inventive concepts and distinguishing functional elements.' },
      { step: '02', title: 'Search Strategy Execution', desc: 'Executing deep searches using IPC/CPC classifications, keywords, and citations.' },
      { step: '03', title: 'Document Relevance Grading', desc: 'Classifying references into Categories X (novelty-destroying), Y (obvious combination), and A (technological background).' },
      { step: '04', title: 'Synthesis & Opinion', desc: 'Preparing the final report with claim drafting recommendations.' },
    ],
    deliverables: [
      'Comprehensive Patentability Search Report with hyperlinked citations',
      'Feature-by-Feature Novelty Matrix',
      'Inventive Step / Obviousness Assessment',
      'Strategic Scope Recommendations for Patent Drafting',
    ],
    faqs: [
      { question: 'Does a positive patentability search guarantee a granted patent?', answer: 'No search can guarantee a grant because patent offices apply their own discretion, and unpublished pending applications exist. However, a thorough search drastically improves grant probability and informs superior claim drafting.' },
      { question: 'What is the typical turnaround time?', answer: 'Our standard turnaround is 5 to 7 business days, with expedited 48-hour delivery available for urgent filing deadlines.' },
    ],
  },
  'patent-invalidation': {
    slug: 'patent-invalidation',
    title: 'Patent Invalidation Search',
    category: 'Searches',
    subtitle: 'Forensic prior art retrieval and element-by-element claim charts to challenge patent validity.',
    overview:
      'When defending against patent infringement allegations, navigating freedom to operate hurdles, or pursuing an acquisition, demonstrating that an asserted patent is invalid is the most decisive weapon. xyz IP conducts deep-dive invalidity investigations to find prior art published prior to the target patent’s critical priority date.',
    keyAspects: [
      'File history (file wrapper) analysis to uncover examiner oversights and applicant disclaimers.',
      'Exhaustive search across obscure technical papers, product manuals, conferences, and foreign patents.',
      'Element-by-element invalidity claim charts demonstrating 35 U.S.C. 102 (anticipation) or 103 (obviousness).',
      'Support for Indian Patent Act Section 25 (Opposition) and Section 64 (Revocation) proceedings.',
    ],
    workflow: [
      { step: '01', title: 'Target Claim Deconstruction', desc: 'Breaking down every asserted claim into discrete limitations.' },
      { step: '02', title: 'Priority Date & Wrapper Review', desc: 'Establishing the strict cutoff date and examining all prior office actions.' },
      { step: '03', title: 'Forensic Prior Art Retrieval', desc: 'Deep-dive searching across global patents, dissertations, manuals, and journals.' },
      { step: '04', title: 'Claim Chart Construction', desc: 'Drafting precise element-by-element evidentiary charts matching each limitation.' },
    ],
    deliverables: [
      'Detailed Invalidity Search Report',
      'Element-by-Element Invalidity Claim Charts',
      'High-resolution PDF copies of all cited prior art with annotated passages',
      'Prosecution history analysis summary',
    ],
    faqs: [
      { question: 'How is an invalidity search different from a patentability search?', answer: 'A patentability search seeks to confirm novelty for an unfiled idea, whereas an invalidity search specifically targets an existing, granted patent with forensic rigor to prove that its claims should never have been granted.' },
      { question: 'Can non-patent literature invalidate a patent?', answer: 'Yes, any public disclosure anywhere in the world before the priority date—including university theses, trade brochures, YouTube videos, and conference proceedings—can serve as invalidating prior art.' },
    ],
  },
  'freedom-to-operate': {
    slug: 'freedom-to-operate',
    title: 'Freedom to Operate (FTO) & Clearance',
    category: 'Searches',
    subtitle: 'Product-to-patent clearance and infringement risk assessment before market launch.',
    overview:
      'Launching a new product or entering a new geographical market without conducting a Freedom to Operate (FTO) clearance search creates catastrophic patent litigation risk. xyz IP evaluates your product features against active, in-force patents in your target jurisdictions to confirm clearance and identify design-around options.',
    keyAspects: [
      'Jurisdiction-specific analysis of active, in-force utility patents and pending applications.',
      'Product feature-to-claim element mapping (both literal infringement and Doctrine of Equivalents).',
      'Evaluation of legal status, expiration dates, maintenance fee payments, and reissue files.',
      'Actionable engineering recommendations for design-arounds to bypass identified blocking patents.',
    ],
    workflow: [
      { step: '01', title: 'Product Architecture Deconstruction', desc: 'Documenting every functional component and manufacturing method of the product.' },
      { step: '02', title: 'In-Force Patent Filtering', desc: 'Retrieving all active patents in target jurisdictions (US, Europe, India, etc.).' },
      { step: '03', title: 'Claim Limitation Mapping', desc: 'Comparing product specifications against the independent claims of target patents.' },
      { step: '04', title: 'Risk Categorization & Strategy', desc: 'Delivering clear traffic-light risk ratings (Clear, Caution, High Risk) with mitigation plans.' },
    ],
    deliverables: [
      'Comprehensive Freedom to Operate (FTO) Search Report',
      'Product-to-Patent Infringement Risk Matrix',
      'Detailed Claim Charts for any potentially problematic patents',
      'Actionable Design-Around Engineering Recommendations',
    ],
    faqs: [
      { question: 'Does having our own patent grant us Freedom to Operate?', answer: 'No. This is the single most common misconception in IP. A patent gives you the right to exclude others, NOT the right to practice your invention if it incorporates features patented by someone else.' },
      { question: 'When is the best time to conduct an FTO search?', answer: 'During late-stage R&D before finalizing tooling, manufacturing, and marketing investments. Conducting FTO early allows cost-effective design-arounds.' },
    ],
  },
  'business-intelligence': {
    slug: 'business-intelligence',
    title: 'IP Business Intelligence',
    category: 'Business Intelligence',
    subtitle: 'Strategic analytics, landscape studies, portfolio evaluation, and competitive monitoring.',
    overview:
      'Intellectual property data contains invaluable strategic signals about competitor roadmaps, technology disruptions, and commercial investment opportunities. xyz IP transforms raw patent registries into actionable business intelligence for executives, investors, and R&D leaders.',
    keyAspects: [
      'Patent landscape studies and whitespace identification to guide R&D investments.',
      'Competitor monitoring and patent watch to track new filings and status changes.',
      'Portfolio scoring, pruning, and alignment with corporate revenue centers.',
      'Evidence-backed claim charts for licensing campaigns and monetization programs.',
    ],
    workflow: [
      { step: '01', title: 'Business Objective Alignment', desc: 'Defining the commercial questions: R&D direction, competitor tracking, or asset monetization.' },
      { step: '02', title: 'Big-Data Retrieval & Cleansing', desc: 'Extracting and normalizing patent data across global authorities.' },
      { step: '03', title: 'Taxonomy & Technical Categorization', desc: 'Classifying patents by technical sub-domains, assignees, and geographic scope.' },
      { step: '04', title: 'Strategic Synthesis', desc: 'Delivering executive dashboards, competitive trends, and commercial recommendations.' },
    ],
    deliverables: [
      'Interactive Patent Landscape & White Space Reports',
      'Competitor Technology Trajectory Dossiers',
      'Portfolio Health and Scoring Audit Reports',
      'Licensing & Monetization Strategy Blueprints',
    ],
    faqs: [
      { question: 'Who benefits most from IP Business Intelligence?', answer: 'Chief Technology Officers, Heads of R&D, Corporate Strategy teams, Venture Capitalists, and IP Counsel who need data-driven insights before committing capital.' },
      { question: 'Can these studies guide product development?', answer: 'Yes. Whitespace analysis uncovers high-potential technology zones where competitor patent activity is minimal, allowing you to patent uncrowded areas.' },
    ],
  },
  'landscape-white-space-analysis': {
    slug: 'landscape-white-space-analysis',
    title: 'Landscape Study & White Space Analysis',
    category: 'Business Intelligence',
    subtitle: 'Technology mapping, competitive clusters, and unexploited innovation white spaces.',
    overview:
      'Understand the entire technological terrain before investing in development. Our Landscape and White Space Analysis provides a 360-degree view of patenting activity within a specific technology domain, revealing key players, filing velocities, core technology clusters, and unexplored white spaces ripe for novel patenting.',
    keyAspects: [
      'Visual mapping of technological sub-domains and patent filing trajectories over time.',
      'Competitor portfolio benchmarking and identification of emerging technology leaders.',
      'Identification of uncrowded "white spaces" where novel patents can be carved out.',
      'Geographical patent density analysis to understand key target markets.',
    ],
    workflow: [
      { step: '01', title: 'Technology Taxonomy Creation', desc: 'Structuring a detailed multi-level classification hierarchy for the domain.' },
      { step: '02', title: 'Corpus Assembly & Deduplication', desc: 'Gathering and cleaning relevant patent families across global registries.' },
      { step: '03', title: 'Cluster & Whitespace Detection', desc: 'Mapping patent density against technology subfields to isolate vacant zones.' },
      { step: '04', title: 'Executive Presentation', desc: 'Delivering visual charts, key findings, and actionable R&D directives.' },
    ],
    deliverables: [
      'Comprehensive Patent Landscape Report (PDF & Executive Deck)',
      'Customized White Space Matrix with opportunity grading',
      'Interactive dataset of classified patent families',
      'Top Assignee Benchmarking & Patent Velocity Curves',
    ],
    faqs: [
      { question: 'What is a patent white space?', answer: 'A white space is a gap or unexplored intersection within a technology domain where consumer or technical demand exists, but few or no patents have been filed.' },
      { question: 'How large of a dataset do you analyze in a landscape study?', answer: 'Depending on the domain breadth, studies typically analyze between 1,000 and 20,000+ patent families.' },
    ],
  },
  'infringement-claim-chart-analysis': {
    slug: 'infringement-claim-chart-analysis',
    title: 'Infringement & Claim Chart Analysis',
    category: 'Business Intelligence',
    subtitle: 'Element-by-element product mapping and evidence-backed claim chart construction.',
    overview:
      'Whether preparing to assert a patent, negotiating a licensing agreement, or evaluating an assertion by a third party, clear evidence of use (EoU) is mandatory. xyz IP constructs rigorous element-by-element claim charts mapping patent claim limitations directly to commercial products, teardowns, documentation, and technical standards.',
    keyAspects: [
      'Deep teardown and documentation analysis of target commercial products.',
      'Detailed limitation-by-limitation claim charts connecting claim elements with evidence.',
      'Analysis of both literal infringement and infringement under the Doctrine of Equivalents.',
      'Standard Essential Patent (SEP) mapping against telecommunications or networking standards (3GPP, IEEE).',
    ],
    workflow: [
      { step: '01', title: 'Claim Construction', desc: 'Interpreting claim terms in light of the specification and prosecution history.' },
      { step: '02', title: 'Target Evidence Gathering', desc: 'Procuring product manuals, datasheets, teardowns, firmware, and test logs.' },
      { step: '03', title: 'Limitation Mapping', desc: 'Constructing dual-column charts aligning each claim limitation with visual and textual proof.' },
      { step: '04', title: 'Legal Strength Review', desc: 'Validating evidentiary integrity for licensing discussions or courtroom presentation.' },
    ],
    deliverables: [
      'Formal Evidence-of-Use (EoU) Claim Charts with annotated screenshots',
      'Product Architecture Comparison Brief',
      'Infringement Risk and Licensing Leverage Assessment',
    ],
    faqs: [
      { question: 'What is an Evidence-of-Use (EoU) chart?', answer: 'An EoU chart is an element-by-element proof document demonstrating that every single limitation of a patent claim is embodied in a target commercial product.' },
      { question: 'Can claim charts be used directly in licensing negotiations?', answer: 'Yes, our claim charts are prepared to the highest standard specifically to serve as the technical backbone in licensing discussions and pre-suit communications.' },
    ],
  },
  'patent-portfolio-analysis': {
    slug: 'patent-portfolio-analysis',
    title: 'Patent Portfolio Analysis',
    category: 'Business Intelligence',
    subtitle: 'Categorization, strength scoring, pruning, and strategic asset alignment.',
    overview:
      'Maintaining a large patent portfolio without clear strategic alignment leads to massive annuity waste and missed commercial opportunities. xyz IP audits corporate patent portfolios, evaluating each asset for claim strength, market applicability, competitive relevance, and pruning suitability.',
    keyAspects: [
      'Portfolio categorization by business units, technology clusters, and geographic markets.',
      'Strength and enforceability scoring based on claim scope, citations, and remaining term.',
      'Identification of non-core or redundant patents to prune, saving tens of thousands in annuity fees.',
      'Highlighting "crown jewel" patents suitable for monetization, licensing, or collateralization.',
    ],
    workflow: [
      { step: '01', title: 'Portfolio Inventory & Docket Audit', desc: 'Consolidating all active patents, pending applications, and family members.' },
      { step: '02', title: 'Multi-Factor Scoring Model', desc: 'Applying objective metrics: citations, claim breadth, market size, and competitor overlap.' },
      { step: '03', title: 'Classification & Tiering', desc: 'Tiering assets into Core (Tier 1), Strategic (Tier 2), and Pruning/Monetization (Tier 3).' },
      { step: '04', title: 'Strategic Action Plan', desc: 'Delivering recommendations on maintenance, divestment, and licensing.' },
    ],
    deliverables: [
      'Comprehensive Portfolio Audit Report with asset tiering',
      'Annuity Optimization and Pruning Schedule',
      'Core Asset Highlight Dossiers for Investor Presentation',
    ],
    faqs: [
      { question: 'How much can a portfolio pruning audit save?', answer: 'Companies routinely reduce their annual patent maintenance and annuity costs by 20% to 40% by abandoning obsolete or non-core patents.' },
      { question: 'How do you determine which patents are "crown jewels"?', answer: 'We evaluate forward citation velocity, independent claim breadth, direct mapping to high-revenue commercial products, and absence of strong prior art.' },
    ],
  },
  'patent-licensing': {
    slug: 'patent-licensing',
    title: 'Patent Licensing Support',
    category: 'Business Intelligence',
    subtitle: 'Target identification, licensing packages, and technical negotiation support.',
    overview:
      'Monetizing patented inventions through licensing requires identifying viable commercial licensees and presenting compelling evidence of value. xyz IP provides end-to-end technical and analytical support for licensing programs, helping patent owners turn intellectual property into recurring royalty streams.',
    keyAspects: [
      'Target licensee identification across relevant industry sectors.',
      'Development of high-impact licensing packages and non-confidential technical summaries.',
      'Preparation of Evidence-of-Use (EoU) claim charts establishing infringement.',
      'Technical support during licensing discussions and counter-argument handling.',
    ],
    workflow: [
      { step: '01', title: 'Patent Asset Assessment', desc: 'Screening patents for enforceable claims and broad commercial applicability.' },
      { step: '02', title: 'Market Mapping', desc: 'Identifying companies manufacturing, selling, or importing infringing products.' },
      { step: '03', title: 'Licensing Deck Construction', desc: 'Preparing techno-legal presentations demonstrating claim coverage.' },
      { step: '04', title: 'Negotiation Technical Backing', desc: 'Supporting counsel with rebuttals against licensee non-infringement arguments.' },
    ],
    deliverables: [
      'Target Licensee Matrix with revenue and product correlation',
      'Executive Licensing Tear Sheets and Pitch Decks',
      'Ready-to-Present Evidence of Use (EoU) Charts',
    ],
    faqs: [
      { question: 'Do you negotiate licensing deals directly?', answer: 'We provide the essential technical and analytical foundation—claim charts, licensee targeting, and rebuttal support—working alongside your legal counsel or commercial brokers.' },
      { question: 'What types of patents are easiest to license?', answer: 'Patents with clear, easy-to-detect infringement in consumer products or industry standards (such as telecommunications or electronics) yield the highest licensing success.' },
    ],
  },
  'patent-monetization': {
    slug: 'patent-monetization',
    title: 'Patent Monetization & Commercialization',
    category: 'Business Intelligence',
    subtitle: 'Valuation review, brokering support, and commercial readiness assessment.',
    overview:
      'Patents should not sit idle in filing cabinets. xyz IP evaluates the commercialization readiness of intellectual property assets and packages them for sale, licensing, spinoffs, or corporate partnerships, helping innovators capture real financial return from their R&D investments.',
    keyAspects: [
      'Monetization feasibility assessments evaluating market size, claim strength, and competitor exposure.',
      'Preparation of comprehensive patent brokerage dossiers for prospective buyers.',
      'Technology transfer packages for university and incubator research assets.',
      'Commercial valuation readiness reviews to support IP-backed financing and M&A.',
    ],
    workflow: [
      { step: '01', title: 'Commercial Quality Audit', desc: 'Evaluating claim scope, validity risk, remaining lifespan, and market demand.' },
      { step: '02', title: 'Valuation Modeling', desc: 'Estimating economic value based on market comparables and royalty potential.' },
      { step: '03', title: 'Marketing Dossier Generation', desc: 'Drafting executive summaries, technical teardowns, and claim summaries.' },
      { step: '04', title: 'Transaction Support', desc: 'Assisting buyers, sellers, or investors during IP due diligence.' },
    ],
    deliverables: [
      'Comprehensive Patent Monetization Assessment Report',
      'Commercial Technology Transfer & Offering Memorandum',
      'IP Due Diligence Audit Dossier for Acquirers or Investors',
    ],
    faqs: [
      { question: 'What is the difference between patent licensing and patent sale?', answer: 'Licensing grants permission to use the patented technology in exchange for ongoing royalties or a lump sum, while retaining ownership. A sale (assignment) permanently transfers all ownership rights for an upfront purchase price.' },
      { question: 'Can single patents be monetized, or is a portfolio required?', answer: 'While large portfolios offer broader coverage, a single high-quality patent with broad, unavoidable claims covering a multi-billion dollar product line can command significant commercial value.' },
    ],
  },
  'patent-watch': {
    slug: 'patent-watch',
    title: 'Patent Watch & Competitor Monitoring',
    category: 'Business Intelligence',
    subtitle: 'Continuous monitoring of competitor filings, legal status, and emerging technologies.',
    overview:
      'Surprise patents can disrupt your product roadmap and market exclusivity. xyz IP provides continuous, automated-plus-analyst-reviewed Patent Watch services, alerting you to new patent filings, granted claims, legal status changes, and abandoned applications from competitors in real-time.',
    keyAspects: [
      'Competitor Watch: Tracking all new published applications and grants by specific corporate assignees.',
      'Technology Watch: Monitoring newly emerging patents within specific CPC/IPC classification codes.',
      'Legal Status Watch: Tracking examination progress, fee payments, and lapses of high-interest patents.',
      'Opposition Watch: Identifying newly published applications before grant to allow timely pre-grant oppositions.',
    ],
    workflow: [
      { step: '01', title: 'Profile Configuration', desc: 'Defining competitor assignee names, IPC classes, keywords, and jurisdictions.' },
      { step: '02', title: 'Automated Ingestion', desc: 'Scheduled extraction from weekly patent gazettes and registry publications.' },
      { step: '03', title: 'Analyst Triage', desc: 'Filtering out noise and categorizing high-impact applications.' },
      { step: '04', title: 'Monthly Intelligence Briefing', desc: 'Delivering curated executive summaries with actionable alerts.' },
    ],
    deliverables: [
      'Monthly / Quarterly Patent Watch Intelligence Reports',
      'Immediate High-Risk Alert Notifications for direct competitor filings',
      'Structured Excel / CSV tracking database with searchable abstracts and claims',
    ],
    faqs: [
      { question: 'How frequently are watch reports delivered?', answer: 'We provide monthly or quarterly curated reports, with instant priority alerts triggered whenever a critical competitor filing is detected.' },
      { question: 'Can watch services help us oppose competitor patents?', answer: 'Yes! In jurisdictions like India and Europe, tracking applications early allows you to file third-party observations or pre-grant oppositions before an infringing or invalid patent is granted.' },
    ],
  },
  'career': {
    slug: 'career',
    title: 'Careers at xyz IP Services',
    category: 'Careers',
    subtitle: 'Join a premier techno-legal patent intelligence and analytics consultancy.',
    overview:
      'At xyz IP Services, our greatest asset is our intellectual caliber. We are constantly looking for talented patent analysts, patent agents, patent illustrators, and technical domain specialists with backgrounds in computer science, telecommunications, mechanical engineering, biotechnology, and electronics.\n\nWe provide a rigorous, intellectually stimulating environment where you will work on cutting-edge patents for world-leading innovators, prestigious law firms, and research institutions.',
    keyAspects: [
      'Work on global patent portfolios spanning USPTO, EPO, and Indian patent jurisdictions.',
      'Direct mentorship from seasoned patent practitioners and technical specialists.',
      'Culture of precision, structured technical analysis, and continuous learning.',
      'Modern corporate office in Bengaluru, Karnataka, India, with hybrid options.',
    ],
    workflow: [
      { step: '01', title: 'Application Submission', desc: 'Submit your resume and cover letter detailing technical background and IP experience.' },
      { step: '02', title: 'Technical Assessment', desc: 'Demonstrate analytical ability through a short techno-legal case study or prior-art search test.' },
      { step: '03', title: 'Technical Interview', desc: 'Discuss your engineering specialty, claim comprehension, and problem-solving methodology.' },
      { step: '04', title: 'Onboarding', desc: 'Structured training on proprietary search methodologies and international patent standards.' },
    ],
    deliverables: [
      'Open positions in Patent Research, Drafting, Invalidation Analysis, and Illustrations',
      'Comprehensive professional development in patent law and advanced analytics',
      'Direct exposure to international clients and high-value patent litigation matters',
    ],
    faqs: [
      { question: 'Do I need a law degree to work as a Patent Analyst at xyz IP?', answer: 'No. A strong technical degree (B.Tech, M.Tech, M.Sc, or Ph.D.) in Engineering, Computer Science, Electronics, or Biotechnology is our primary requirement. We train you in patent law and claim analysis.' },
      { question: 'Where is the job location?', answer: 'Positions are based at our corporate headquarters in Bengaluru, Karnataka, India.' },
      { question: 'How can I apply?', answer: 'You can email your updated resume directly to info@xyz.com with the subject line "Career Application - [Your Domain/Specialty]".' },
    ],
  },
  'contact': {
    slug: 'contact',
    title: 'Contact xyz IP Services',
    category: 'Contact',
    subtitle: 'Connect with our patent and IP consulting team to discuss your requirements.',
    overview:
      'Whether you are an individual innovator seeking patentability assessment, a startup planning a product launch, a law firm requiring high-precision analytical backing, or a foreign associate seeking reliable Indian patent prosecution support, our team is ready to assist.\n\nReach out directly through our consultation form, email us at info@xyz.com, or call our direct consulting line at 12345678790.',
    keyAspects: [
      'Prompt response within 1 business day for all consultation inquiries.',
      'Strict confidentiality and non-disclosure protection guaranteed from initial contact.',
      'Corporate office located in Bengaluru’s premier technology and innovation district.',
      'Direct WhatsApp chat available for real-time inquiries.',
    ],
    workflow: [
      { step: '01', title: 'Initial Inquiry', desc: 'Submit your requirements via our consultation form or reach out via phone/email.' },
      { step: '02', title: 'Confidentiality (NDA)', desc: 'We execute a mutual Non-Disclosure Agreement before receiving confidential technical details.' },
      { step: '03', title: 'Scoping & Proposal', desc: 'Our technical leads evaluate scope and provide a transparent, fixed-fee timeline proposal.' },
      { step: '04', title: 'Project Execution', desc: 'Dedicated analysts initiate work with structured milestone updates.' },
    ],
    deliverables: [
      'Confidential Non-Disclosure Agreement (NDA)',
      'Customized Scope of Work and Fixed-Price Proposal',
      'Dedicated Technical Project Lead and Milestone Calendar',
    ],
    faqs: [
      { question: 'Is our initial consultation confidential?', answer: 'Yes, absolutely. We treat all client communications and technical disclosures with the strictest professional confidentiality and can execute an NDA prior to disclosure.' },
      { question: 'How quickly can project work begin?', answer: 'Once scope and confidentiality are confirmed, our analysts can commence work immediately, with expedited options available.' },
    ],
  },
};

export const ALL_SERVICES_PAGES = DEDICATED_PAGES_DATA;
