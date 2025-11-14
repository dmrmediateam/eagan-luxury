import type { Metadata } from 'next'
import Hero from '@/components/Hero';
import SearchProperties from '@/components/SearchProperties';
import AboutStats from '@/components/AboutStats';
import MeetAgent from '@/components/MeetAgent';
import Communities from '@/components/Communities';
import MarketInsights from '@/components/MarketInsights';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import { HomepageStructuredData } from '@/app/components/HomepageStructuredData';
import { LocalBusinessSchema } from '@/app/components/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Real Estate By Cheryl Towey | Sussex County, Warren County NJ',
  description: 'Licensed real estate agent Cheryl Towey serves Hackettstown, Andover, Byram, Blairstown, Chester, Washington & Northwest New Jersey. Expert local knowledge, proven results. Call 908-334-0971.',
  keywords: 'real estate agent Hackettstown NJ, homes for sale Sussex County, Warren County realtor, Andover NJ real estate, Byram Township homes, Blairstown realtor, Chester NJ properties, Washington NJ real estate, Weichert Realtors Morris Plains, Northwest New Jersey homes',
  openGraph: {
    title: 'Cheryl Towey - Your Northwest New Jersey Real Estate Expert',
    description: 'Find your dream home in Hackettstown, Sussex County, Warren County with experienced realtor Cheryl Towey. Local expertise since 2010.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.realestatebycherylnj.com',
    siteName: 'Real Estate by Cheryl NJ',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/cheryl-towey.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheryl Towey - Licensed Real Estate Agent in Northwest New Jersey',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheryl Towey - Northwest NJ Real Estate Agent',
    description: 'Expert real estate services in Hackettstown, Sussex & Warren Counties. Licensed realtor with Weichert Realtors.',
    images: ['https://www.realestatebycherylnj.com/images/cheryl-towey.jpg'],
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Hackettstown, New Jersey',
    'geo.position': '40.8359;-74.4815',
    'ICBM': '40.8359, -74.4815',
  },
}

export default function Home() {
  return (
    <>
      <HomepageStructuredData />
      <LocalBusinessSchema />
      <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Search Properties Section */}
      <SearchProperties />

      {/* About with Stats Section */}
      <AboutStats />

      {/* Meet Agent Section */}
      <MeetAgent />

      {/* Communities/Locations Section */}
      <Communities />

      {/* Market Insights Section */}
      <MarketInsights />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />

      {/* Call to Action Section */}
      <CallToAction />
      </div>
    </>
  );
}
