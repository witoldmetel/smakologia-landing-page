import type { Graph } from 'schema-dts';
import { siteConfig } from '../config/site';

export function buildSiteJsonLd(): Graph {
  const businessId = `${siteConfig.siteUrl}/#dietitian`;
  const personId = `${siteConfig.siteUrl}/#specialist`;
  const websiteId = `${siteConfig.siteUrl}/#website`;
  const webpageId = `${siteConfig.siteUrl}/#webpage`;
  const faqId = `${siteConfig.siteUrl}/#faqpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.siteUrl,
        name: siteConfig.brandName,
        description: siteConfig.seo.description,
        inLanguage: 'pl-PL',
        publisher: {
          '@id': businessId,
        },
      },
      {
        '@type': 'MedicalBusiness',
        '@id': businessId,
        additionalType: [
          'https://schema.org/DietNutrition',
          'https://schema.org/HealthAndBeautyBusiness',
          'https://schema.org/LocalBusiness',
        ],
        name: siteConfig.legalName,
        alternateName: 'Smakologia Dietetyk Będzin',
        description: siteConfig.seo.description,
        url: siteConfig.siteUrl,
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        image: `${siteConfig.siteUrl}/logo-smakologia.png`,
        logo: `${siteConfig.siteUrl}/logo-smakologia.png`,
        sameAs: [siteConfig.socials.facebook, siteConfig.socials.instagram],
        priceRange: '140 PLN - 350 PLN',
        currenciesAccepted: 'PLN',
        paymentAccepted: 'Gotówka, Przelew, BLIK',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.streetAddress,
          postalCode: siteConfig.contact.address.postalCode,
          addressLocality: siteConfig.contact.address.addressLocality,
          addressRegion: siteConfig.contact.address.addressRegion,
          addressCountry: siteConfig.contact.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.contact.geo.latitude,
          longitude: siteConfig.contact.geo.longitude,
        },
        hasMap: siteConfig.contact.googleMapsDirectionsUrl,
        areaServed: [
          { '@type': 'City', name: 'Będzin' },
          { '@type': 'City', name: 'Katowice' },
          { '@type': 'City', name: 'Sosnowiec' },
          { '@type': 'City', name: 'Chorzów' },
          { '@type': 'City', name: 'Dąbrowa Górnicza' },
          { '@type': 'City', name: 'Siewierz' },
          { '@type': 'Country', name: 'Polska' },
        ],
        openingHoursSpecification: siteConfig.contact.openingHoursSpecification.map((spec) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [...spec.dayOfWeek],
          opens: spec.opens,
          closes: spec.closes,
        })),
        founder: {
          '@id': personId,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usługi dietetyczne i psychodietetyczne Smakologia',
          itemListElement: siteConfig.pricing.map((item) => ({
            '@type': 'Offer',
            name: item.name,
            description: item.subtitle,
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: item.price.replace(/[^0-9]/g, ''),
              priceCurrency: 'PLN',
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.specialist.namePlaceholder,
        jobTitle: siteConfig.specialist.roleTitle,
        description: siteConfig.specialist.shortBio,
        sameAs: [siteConfig.socials.facebook, siteConfig.socials.instagram],
        worksFor: {
          '@id': businessId,
        },
        knowsAbout: [
          'Dietetyka kliniczna',
          'Psychodietetyka',
          'Leczenie otyłości i redukcja masy ciała',
          'Dietoterapia w chorobach metabolicznych i autoimmunologicznych',
          'Zaburzenia odżywiania',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: siteConfig.siteUrl,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        inLanguage: 'pl-PL',
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': businessId,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: siteConfig.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
