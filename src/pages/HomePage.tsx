import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { HomeHero } from '../components/HomeHero';
import { AboutSection } from '../components/AboutSection';
import { LifecycleSection } from '../components/LifecycleSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { WhoWeSupport } from '../components/WhoWeSupport';
import { TechnicalDomains } from '../components/TechnicalDomains';
import { BusinessOutcomes } from '../components/BusinessOutcomes';
import { ConsultationSection } from '../components/ConsultationSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SeoMeta
        title="End-to-End Patent & IP Support"
        description="xyz IP provides structured patent and IP support across the full innovation lifecycle – patentability, drafting, prosecution, FTO, invalidity, licensing, and portfolio intelligence."
        canonicalPath="/"
        schemaType="ProfessionalService"
      />
      <HomeHero />
      <AboutSection />
      <LifecycleSection />
      <ServicesGrid />
      <WhoWeSupport />
      <TechnicalDomains />
      <BusinessOutcomes />
      <ConsultationSection />
    </div>
  );
};
