import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';
import { CommunityStructuredData } from '@/app/components/CommunityStructuredData';

export const metadata: Metadata = {
  title: 'Homes for Sale in Montague, NJ | Cheryl Towey Real Estate',
  description: 'Find your dream home in Montague, NJ. Browse current listings, explore market statistics, and discover why Montague is the perfect place to call home. Licensed real estate agent Cheryl Towey.',
  keywords: 'Montague NJ homes for sale, Sussex County real estate, Montague realtor, Montague properties, homes for sale Sussex County',
  openGraph: {
    title: 'Homes for Sale in Montague, NJ | Real Estate by Cheryl Towey',
    description: 'Discover beautiful homes for sale in Montague, NJ. Expert local real estate services with Cheryl Towey.',
    url: 'https://www.realestatebycherylnj.com/cities/montague',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/montague.jpg',
        width: 1200,
        height: 630,
        alt: 'Montague NJ - Homes for sale in this beautiful Sussex County community',
      }
    ],
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Montague, Sussex County, New Jersey',
    'geo.position': '41.1761;-74.7597',
    'ICBM': '41.1761, -74.7597',
  },
};

export default function MontaguePage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$385,000' },
    { label: 'Average Days on Market', value: '42 days' },
    { label: 'Properties Available', value: '28+' },
    { label: 'Average Price/SqFt', value: '$185' },
  ];

  const communityFeatures = [
    {
      title: 'Rural Charm',
      description: 'Beautiful countryside setting with spacious properties and stunning views of the Delaware River Valley.',
      icon: '🌳'
    },
    {
      title: 'Outdoor Recreation',
      description: 'Access to hiking trails, fishing spots, and outdoor adventures in the scenic Sussex County landscape.',
      icon: '🥾'
    },
    {
      title: 'Community Spirit',
      description: 'A tight-knit community that values local traditions and outdoor activities year-round.',
      icon: '🤝'
    },
    {
      title: 'Peaceful Living',
      description: 'Escape the hustle and bustle with quiet, serene neighborhoods perfect for families seeking tranquility.',
      icon: '🏡'
    }
  ];

  return (
    <>
      <CommunityStructuredData
        name="Montague"
        slug="montague"
        county="Sussex"
        population={3400}
        medianPrice={385000}
        distanceFromNYC="65 miles"
        description="Montague is a charming Sussex County community known for its rural charm, outdoor recreation opportunities, and tight-knit community spirit. This peaceful town offers spacious properties with stunning views and direct access to hiking trails and natural attractions."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Montague, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Rural Charm & Outdoor Living</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Montague is a hidden gem in Sussex County, offering rural charm combined with outdoor recreation and community spirit. With a population of approximately 3,400 residents, this peaceful township provides an ideal setting for families seeking tranquility and space. Located 65 miles from New York City, Montague balances seclusion with convenient access to urban amenities.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              The community features spacious properties with stunning views of the Delaware River Valley, access to pristine hiking trails, and excellent fishing opportunities. Residents enjoy a strong sense of community and local traditions that create a welcoming environment. Whether you're looking for a country estate or a quiet retreat, Montague offers homes that blend comfort with natural beauty.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
            <Link href="/listings?city=montague" className="btn-outline">
              View Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Montague Market Snapshot
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {marketStats.map((stat, idx) => (
              <div key={idx} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-dark mb-3 font-semibold">
                  {stat.label}
                </p>
                <p className="text-2xl md:text-3xl font-serif text-secondary font-light">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Why Choose Montague?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, idx) => (
              <div key={idx} className="scroll-animate">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-serif font-light mb-2 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-dark leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold/10 to-secondary/10">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-6">
            Ready to Find Your Home in Montague?
          </h2>
          <p className="scroll-animate text-gray-dark mb-8 max-w-2xl mx-auto text-base">
            Let me help you discover the perfect property in this beautiful Sussex County community. With my local expertise and dedication to client satisfaction, I'll guide you through every step.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Cheryl Today
          </Link>
        </div>
      </section>

      {/* Available Properties */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Featured Montague Listings
          </h2>
          <CommunityProperties cityId={1} cityName="Montague" />
        </div>
      </section>

      {/* Other Communities */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Explore Other Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cities/high-bridge" className="scroll-animate p-6 bg-white rounded-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-light mb-2">High Bridge, NJ</h3>
              <p className="text-gray-dark text-sm">Hunt County • $325K median</p>
            </Link>
            <Link href="/cities/parsippany-troy-hills" className="scroll-animate p-6 bg-white rounded-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-light mb-2">Parsippany Troy Hills, NJ</h3>
              <p className="text-gray-dark text-sm">Morris County • $485K median</p>
            </Link>
            <Link href="/communities/hackettstown" className="scroll-animate p-6 bg-white rounded-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-light mb-2">Hackettstown, NJ</h3>
              <p className="text-gray-dark text-sm">Warren County • $465K median</p>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
