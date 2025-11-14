/**
 * Community Page Structured Data Component
 * Adds schema.org markup for individual community pages
 */

import { MultiStructuredData } from '@/app/components/StructuredData'
import {
  getCommunitySchema,
  getBreadcrumbSchema,
  getAggregateOfferSchema,
  getFAQSchema,
  getServiceAreaSchema,
  getProfessionalCredentialsSchema,
} from '@/lib/structuredData'

interface CommunityStructuredDataProps {
  name: string
  slug: string
  county: string
  population: number
  medianPrice: number
  distanceFromNYC: string
  description: string
  faqs?: Array<{ question: string; answer: string }>
}

export function CommunityStructuredData({
  name,
  slug,
  county,
  population,
  medianPrice,
  distanceFromNYC,
  description,
  faqs,
}: CommunityStructuredDataProps) {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.realestatebycherylnj.com' },
    { name: 'Communities', url: 'https://www.realestatebycherylnj.com/communities' },
    { name: name, url: `https://www.realestatebycherylnj.com/communities/${slug}` },
  ]

  const propertyStats = {
    count: 30,
    minPrice: medianPrice * 0.8,
    maxPrice: medianPrice * 1.2,
  }

  const schemas: Array<Record<string, any>> = [
    getCommunitySchema({
      name,
      slug,
      county,
      population,
      medianPrice,
      distanceFromNYC,
      description,
      url: `https://www.realestatebycherylnj.com/communities/${slug}`,
    }),
    getBreadcrumbSchema(breadcrumbs),
    getAggregateOfferSchema(propertyStats),
    getServiceAreaSchema(),
    getProfessionalCredentialsSchema(),
  ]

  if (faqs && faqs.length > 0) {
    schemas.push(getFAQSchema(faqs))
  }

  return <MultiStructuredData schemas={schemas} />
}
