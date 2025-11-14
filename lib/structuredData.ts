// Structured Data / Schema.org utilities for SEO and LLM discovery

export const businessData = {
  name: 'Cheryl Towey - Real Estate Agent NJ | Weichert Realtors',
  agentName: 'Cheryl Towey',
  company: 'Weichert Realtors',
  description: 'Expert real estate services in Northwest New Jersey - Licensed Real Estate Agent specializing in residential properties in Sussex, Warren, and Morris Counties',
  url: 'https://www.realestatebycherylnj.com',
  phone: '+1-908-334-0971',
  email: 'cheryl@weichert.com',
  image: 'https://www.realestatebycherylnj.com/images/1752608667829.jpeg',
  logo: 'https://www.realestatebycherylnj.com/62f3c630f8a08a45cbeff139_Weichert-Realtors-Centered-Bar-Logo-EHO.png',
  address: {
    streetAddress: '1625 NJ-10 East',
    addressLocality: 'Morris Plains',
    addressRegion: 'New Jersey',
    postalCode: '07950',
    addressCountry: 'US',
  },
  rating: {
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1,
  },
  foundingDate: '2010',
  yearsSinceFoundation: new Date().getFullYear() - 2010,
  areaServed: [
    'Hackettstown',
    'Andover',
    'Byram',
    'Blairstown',
    'Chester',
    'Washington',
    'Sussex County',
    'Warren County',
    'Morris County',
    'New Jersey',
  ],
  knowsAbout: [
    'Residential Real Estate',
    'Home Buying',
    'Home Selling',
    'Property Valuation',
    'Market Analysis',
    'Real Estate Investment',
    'First-Time Home Buyers',
    'Luxury Homes',
    'Investment Properties',
    'Commercial Real Estate',
  ],
  sameAs: [
    'https://facebook.com/cheryltoweyreallestate',
    'https://linkedin.com/in/cheryltoweyreallestate',
    'https://instagram.com/cheryltoweyreallestate',
    'https://twitter.com/cheryltoweyrealestate',
  ],
  businessHours: {
    monday: '09:00-17:00',
    tuesday: '09:00-17:00',
    wednesday: '09:00-17:00',
    thursday: '09:00-17:00',
    friday: '09:00-17:00',
    saturday: '10:00-15:00',
    sunday: 'closed',
  },
  priceRange: '$$$',
  slogan: 'Your Trusted Guide to Northwest New Jersey Real Estate',
  missionStatement: 'Providing exceptional real estate services with local expertise and personal dedication to help you find your dream home in Northwest New Jersey.',
  certifications: [
    'Licensed New Jersey Real Estate Agent',
    'Certified Residential Specialist (CRS)',
    'Graduate Realtor Institute (GRI)',
  ],
  awards: [
    'Top Producer 2023',
    'Customer Service Excellence Award',
    'Community Choice Award',
  ],
};

export const communities = [
  {
    name: 'Hackettstown',
    slug: 'hackettstown',
    county: 'Warren',
    population: 10143,
    medianPrice: 465000,
    distanceFromNYC: '50 miles',
  },
  {
    name: 'Andover',
    slug: 'andover',
    county: 'Sussex',
    population: 7000,
    medianPrice: 485000,
    distanceFromNYC: '40 miles',
  },
  {
    name: 'Byram',
    slug: 'byram',
    county: 'Sussex',
    population: 8082,
    medianPrice: 455000,
    distanceFromNYC: '50 miles',
  },
  {
    name: 'Blairstown',
    slug: 'blairstown',
    county: 'Warren',
    population: 6000,
    medianPrice: 435000,
    distanceFromNYC: '65 miles',
  },
  {
    name: 'Chester',
    slug: 'chester',
    county: 'Morris',
    population: 9400,
    medianPrice: 525000,
    distanceFromNYC: '55 miles',
  },
  {
    name: 'Washington',
    slug: 'washington',
    county: 'Warren',
    population: 14575,
    medianPrice: 415000,
    distanceFromNYC: '45 miles',
  },
];

// ==================== SCHEMA GENERATORS ====================

/**
 * Real Estate Agent Schema
 * Used on homepage and agent profile page
 */
export function getRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${businessData.url}/#agent`,
    name: businessData.agentName,
    image: businessData.image,
    description: businessData.description,
    url: businessData.url,
    telephone: businessData.phone,
    email: businessData.email,
    slogan: businessData.slogan,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating.ratingValue,
      reviewCount: businessData.rating.reviewCount,
      bestRating: businessData.rating.bestRating,
      worstRating: businessData.rating.worstRating,
    },
    areaServed: businessData.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    knowsAbout: businessData.knowsAbout,
    sameAs: businessData.sameAs,
    priceRange: businessData.priceRange,
    hasCredential: businessData.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: cert,
    })),
    award: businessData.awards,
    worksFor: {
      '@type': 'RealEstateOffice',
      name: businessData.company,
      logo: businessData.logo,
    },
  };
}

/**
 * Organization/LocalBusiness Schema
 * Used on homepage for local business discovery
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateOffice'],
    '@id': `${businessData.url}/#business`,
    name: businessData.name,
    alternateName: businessData.agentName,
    image: businessData.image,
    logo: businessData.logo,
    description: businessData.description,
    slogan: businessData.slogan,
    url: businessData.url,
    telephone: businessData.phone,
    email: businessData.email,
    foundingDate: businessData.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.8359,
      longitude: -74.4815,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating.ratingValue,
      reviewCount: businessData.rating.reviewCount,
      bestRating: businessData.rating.bestRating,
      worstRating: businessData.rating.worstRating,
    },
    areaServed: businessData.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.8359,
        longitude: -74.4815,
      },
      geoRadius: '50000', // 50km radius
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    priceRange: businessData.priceRange,
    currenciesAccepted: 'USD',
    paymentAccepted: ['Cash', 'Check', 'Wire Transfer', 'Bank Transfer'],
    sameAs: businessData.sameAs,
    knowsAbout: businessData.knowsAbout,
    award: businessData.awards,
  };
}

/**
 * BreadcrumbList Schema
 * Used for navigation hierarchy
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage Schema
 * Used for FAQ sections
 */
export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * LocalArea / Place Schema
 * Used on community pages
 */
export function getCommunitySchema(community: {
  name: string;
  slug: string;
  county: string;
  population: number;
  medianPrice: number;
  distanceFromNYC: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    '@id': community.url,
    name: community.name,
    description: community.description,
    url: community.url,
    areaServed: community.county,
    location: {
      '@type': 'Place',
      name: `${community.name}, NJ`,
    },
    demographics: {
      '@type': 'Thing',
      population: community.population,
      medianPrice: community.medianPrice,
    },
  };
}

/**
 * RealEstateProperty Schema
 * Used on individual property pages
 */
export function getPropertySchema(property: {
  name: string;
  description: string;
  url: string;
  price: number;
  priceCurrency?: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  floorSize: number;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  image: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateProperty',
    '@id': property.url,
    name: property.name,
    description: property.description,
    url: property.url,
    image: property.image,
    price: property.price,
    priceCurrency: property.priceCurrency || 'USD',
    numberOfBedrooms: property.numberOfBedrooms,
    numberOfBathrooms: property.numberOfBathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      unitCode: 'FT2',
      value: property.floorSize,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.streetAddress,
      addressLocality: property.addressLocality,
      addressRegion: property.addressRegion,
      postalCode: property.postalCode,
      addressCountry: 'US',
    },
    ...(property.latitude &&
      property.longitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: property.latitude,
          longitude: property.longitude,
        },
      }),
    agent: {
      '@type': 'RealEstateAgent',
      name: businessData.agentName,
      url: businessData.url,
    },
  };
}

/**
 * AggregateOffer Schema
 * Used for property listings overview
 */
export function getAggregateOfferSchema(properties: {
  count: number;
  minPrice: number;
  maxPrice: number;
  currency?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    '@id': `${businessData.url}/properties`,
    name: 'Available Properties',
    priceCurrency: properties.currency || 'USD',
    lowPrice: properties.minPrice,
    highPrice: properties.maxPrice,
    offerCount: properties.count,
    url: `${businessData.url}/properties`,
  };
}

/**
 * Article/BlogPost Schema
 * Used for market reports and blog posts
 */
export function getArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': article.url,
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || businessData.agentName,
    },
    publisher: {
      '@type': 'Organization',
      name: businessData.company,
      logo: businessData.image,
    },
  };
}

/**
 * Organization Schema
 * For broader organizational context
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${businessData.url}/#organization`,
    name: businessData.company,
    url: businessData.url,
    logo: businessData.image,
    description: businessData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: businessData.phone,
      email: businessData.email,
    },
    sameAs: businessData.sameAs,
  };
}

/**
 * WebSite Schema
 * For site-wide search capability
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessData.url}/#website`,
    url: businessData.url,
    name: businessData.name,
    description: businessData.description,
    inLanguage: 'en-US',
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${businessData.url}/properties?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ContactAction',
        target: `${businessData.url}/contact`,
        'query-input': 'required',
      },
    ],
  };
}

/**
 * Local Service Area Schema
 * Defines specific geographic service areas for local SEO
 */
export function getServiceAreaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${businessData.url}/#real-estate-services`,
    name: 'Real Estate Services in Northwest New Jersey',
    description: 'Comprehensive real estate services including home buying, selling, and market analysis in Northwest New Jersey',
    provider: {
      '@type': 'RealEstateAgent',
      name: businessData.agentName,
      url: businessData.url,
    },
    areaServed: businessData.areaServed.map((area) => ({
      '@type': 'State',
      name: area.includes('County') ? area : `${area}, New Jersey`,
      containsPlace: area.includes('County') ? [] : [
        {
          '@type': 'City',
          name: area,
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
      ],
    })),
    serviceType: [
      'Residential Real Estate',
      'Home Buying Assistance',
      'Home Selling Services',
      'Property Valuation',
      'Market Analysis',
      'Investment Property Consultation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description: 'Expert guidance through the home buying process in Northwest New Jersey',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description: 'Professional home selling services with local market expertise',
          },
        },
      ],
    },
  };
}

/**
 * Geographic Coverage Schema
 * Emphasizes local coverage for better local search visibility
 */
export function getGeographicCoverageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeoShape',
    '@id': `${businessData.url}/#service-area`,
    name: 'Northwest New Jersey Real Estate Service Area',
    description: 'Geographic area served for real estate services in Northwest New Jersey',
    polygon: '40.9,-74.6 40.9,-74.3 40.7,-74.3 40.7,-74.6 40.9,-74.6', // Approximate polygon for Northwest NJ
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  };
}

/**
 * Local Reviews Schema
 * Structured data for customer reviews and testimonials
 */
export function getReviewsSchema(reviews: Array<{
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${businessData.url}/#reviews`,
    name: 'Customer Reviews',
    description: 'Reviews from satisfied clients in Northwest New Jersey',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'Review',
      position: index + 1,
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: review.datePublished,
      itemReviewed: {
        '@type': 'RealEstateAgent',
        name: businessData.agentName,
        url: businessData.url,
      },
    })),
  };
}

/**
 * Professional Certification Schema
 * Highlights professional credentials and expertise
 */
export function getProfessionalCredentialsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${businessData.url}/#professional-profile`,
    name: businessData.agentName,
    jobTitle: 'Licensed Real Estate Agent',
    worksFor: {
      '@type': 'RealEstateOffice',
      name: businessData.company,
    },
    hasCredential: businessData.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'New Jersey Real Estate Commission',
      },
    })),
    knowsAbout: businessData.knowsAbout,
    award: businessData.awards,
    yearsOfExperience: businessData.yearsSinceFoundation,
  };
}
