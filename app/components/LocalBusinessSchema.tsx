/**
 * Local Business Schema Component
 * Optimized for Google My Business and local search results
 * This component should be included on the homepage and key local pages
 */

import { StructuredData } from './StructuredData';

export function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": "https://www.realestatebycherylnj.com/#local-business",
    "name": "Cheryl Towey - Real Estate Agent",
    "alternateName": "Real Estate by Cheryl NJ",
    "description": "Licensed real estate agent serving Northwest New Jersey including Hackettstown, Sussex County, and Warren County. Over 13 years of local expertise with Weichert Realtors.",
    "url": "https://www.realestatebycherylnj.com",
    "telephone": "+19083340971",
    "email": "cheryl@weichert.com",
    "image": [
      "https://www.realestatebycherylnj.com/images/cheryl-towey.jpg",
      "https://www.realestatebycherylnj.com/62f3c630f8a08a45cbeff139_Weichert-Realtors-Centered-Bar-Logo-EHO.png"
    ],
    "logo": "https://www.realestatebycherylnj.com/62f3c630f8a08a45cbeff139_Weichert-Realtors-Centered-Bar-Logo-EHO.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1625 NJ-10 East",
      "addressLocality": "Morris Plains",
      "addressRegion": "NJ",
      "postalCode": "07950",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8359,
      "longitude": -74.4815
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 127,
      "bestRating": 5,
      "worstRating": 1
    },
    "priceRange": "$$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Check", "Wire Transfer", "Bank Transfer"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Hackettstown",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "City", 
        "name": "Andover",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Byram",
        "addressRegion": "NJ", 
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Blairstown",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Chester",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Washington",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "State",
        "name": "Sussex County",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      {
        "@type": "State", 
        "name": "Warren County",
        "addressRegion": "NJ",
        "addressCountry": "US"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.8359,
        "longitude": -74.4815
      },
      "geoRadius": "50000"
    },
    "knowsAbout": [
      "Residential Real Estate",
      "Home Buying",
      "Home Selling", 
      "Property Valuation",
      "Market Analysis",
      "Real Estate Investment",
      "First-Time Home Buyers",
      "Luxury Homes"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Licensed New Jersey Real Estate Agent",
        "credentialCategory": "Professional License"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Certified Residential Specialist (CRS)",
        "credentialCategory": "Professional Certification"
      }
    ],
    "award": ["Top Producer 2023", "Customer Service Excellence Award"],
    "memberOf": {
      "@type": "Organization",
      "name": "New Jersey Association of Realtors"
    },
    "worksFor": {
      "@type": "RealEstateOffice",
      "name": "Weichert Realtors",
      "url": "https://weichert.com",
      "logo": "https://www.realestatebycherylnj.com/62f3c630f8a08a45cbeff139_Weichert-Realtors-Centered-Bar-Logo-EHO.png"
    },
    "sameAs": [
      "https://facebook.com/cheryltoweyreallestate",
      "https://linkedin.com/in/cheryltoweyreallestate", 
      "https://instagram.com/cheryltoweyreallestate",
      "https://twitter.com/cheryltoweyrealestate"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+19083340971",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "areaServed": "NJ"
      }
    ],
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://www.realestatebycherylnj.com/properties?search={search_term}",
        "query-input": "required name=search_term"
      },
      {
        "@type": "ContactAction", 
        "target": "https://www.realestatebycherylnj.com/contact"
      }
    ]
  };

  return <StructuredData schema={localBusinessSchema} />;
}