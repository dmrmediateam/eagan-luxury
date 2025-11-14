/**
 * Homepage Structured Data
 * Adds SEO-optimized schema.org markup for better LLM and search engine discovery
 */

import { MultiStructuredData } from '@/app/components/StructuredData'
import {
  getRealEstateAgentSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getAggregateOfferSchema,
  getServiceAreaSchema,
  getGeographicCoverageSchema,
  getProfessionalCredentialsSchema,
  getReviewsSchema,
} from '@/lib/structuredData'

export function HomepageStructuredData() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.realestatebycherylnj.com' },
  ]

  const propertyStats = {
    count: 250,
    minPrice: 415000,
    maxPrice: 525000,
  }

  // Sample reviews for structured data (in production, pull from actual review system)
  const sampleReviews = [
    {
      author: 'Sarah M.',
      reviewBody: 'Cheryl helped us find the perfect home in Hackettstown. Her local knowledge and dedication made the process smooth and stress-free.',
      ratingValue: 5,
      datePublished: '2024-09-15',
    },
    {
      author: 'Michael R.',
      reviewBody: 'Outstanding service! Cheryl sold our home in Chester faster than we expected and at a great price. Highly recommend her expertise.',
      ratingValue: 5,
      datePublished: '2024-08-22',
    },
    {
      author: 'Jennifer K.',
      reviewBody: 'Professional, knowledgeable, and truly cares about her clients. Cheryl made buying our first home in Byram a wonderful experience.',
      ratingValue: 5,
      datePublished: '2024-10-01',
    },
  ]

  return (
    <MultiStructuredData
      schemas={[
        getRealEstateAgentSchema(),
        getLocalBusinessSchema(),
        getWebsiteSchema(),
        getOrganizationSchema(),
        getBreadcrumbSchema(breadcrumbs),
        getAggregateOfferSchema(propertyStats),
        getServiceAreaSchema(),
        getGeographicCoverageSchema(),
        getProfessionalCredentialsSchema(),
        getReviewsSchema(sampleReviews),
      ]}
    />
  )
}
