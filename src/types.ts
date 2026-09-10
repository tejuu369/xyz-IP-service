export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface LifecycleStage {
  number: string;
  stageName: string;
  title: string;
  description: string;
  activities: string[];
  deliverable: string;
  iconName: string;
}

export interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: 'patents' | 'searches' | 'business-intelligence';
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  keyDeliverables: string[];
  workflowSteps: string[];
  strategicValue: string;
  applicableClients: string[];
}

export interface StakeholderGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  offerings: string[];
  benefits: string[];
  icon: string;
}

export interface TechnicalDomain {
  id: string;
  title: string;
  description: string;
  subfields: string[];
  schematicType: 'circuit' | 'network' | 'mechanical' | 'medical' | 'energy' | 'biotech';
}

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceRequired: string;
  message: string;
}

export type EnquiryStatus = 'new' | 'contacted' | 'in-progress' | 'closed';

export interface EnquiryRecord extends ConsultationFormData {
  id: string;
  createdAt: string;
  status: EnquiryStatus;
  notes?: string;
  budget?: string;
}

