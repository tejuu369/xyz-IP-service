import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'Organization' | 'ProfessionalService';
  breadcrumbs?: { label: string; href?: string }[];
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'ProfessionalService',
  breadcrumbs = [],
}) => {
  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | xyz IP Services`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://www.xyz.com${canonicalPath}`);
    }

    // Inject JSON-LD Schema
    const schemaId = 'xyz-seo-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': schemaType,
          '@id': 'https://www.xyz.com/#organization',
          name: COMPANY_INFO.name,
          url: COMPANY_INFO.website,
          logo: 'https://www.xyz.com/assets/logo.png',
          telephone: COMPANY_INFO.phone,
          email: COMPANY_INFO.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bengaluru, Karnataka',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560001',
            addressCountry: 'IN',
          },
          sameAs: [COMPANY_INFO.linkedIn],
          priceRange: '$$$',
          description: COMPANY_INFO.aboutOverview,
        },
        ...(breadcrumbs && breadcrumbs.length > 0
          ? [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.xyz.com/',
                  },
                  ...breadcrumbs.map((b, i) => ({
                    '@type': 'ListItem',
                    position: i + 2,
                    name: b.label,
                    item: b.href ? `https://www.xyz.com${b.href}` : undefined,
                  })),
                ],
              },
            ]
          : []),
      ],
    };

    script.text = JSON.stringify(schemaData);
  }, [title, description, canonicalPath, schemaType, breadcrumbs]);

  return null;
};
