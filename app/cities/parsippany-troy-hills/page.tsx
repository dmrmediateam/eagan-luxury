import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';
import { CommunityStructuredData } from '@/app/components/CommunityStructuredData';

export const metadata: Metadata = {
  title: 'Homes for Sale in Parsippany Troy Hills, NJ | Cheryl Towey',
  description: 'Find your dream home in Parsippany Troy Hills, NJ. Browse current listings, explore market statistics, and discover why Parsippany Troy Hills is the perfect place to call home. Licensed real estate agent Cheryl Towey.',
  keywords: 'Parsippany Troy Hills NJ homes for sale, Morris County real estate, Parsippany realtor, Parsippany properties, homes for sale Morris County',
  openGraph: {
    title: 'Homes for Sale in Parsippany Troy Hills, NJ | Real Estate by Cheryl Towey',
    description: 'Discover beautiful homes for sale in Parsippany Troy Hills, NJ. Expert local real estate services with Cheryl Towey.',
    url: 'https://www.realestatebycherylnj.com/cities/parsippany-troy-hills',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/parsippany.jpg',
        width: 1200,
        height: 630,
        alt: 'Parsippany Troy Hills NJ - Homes for sale in this vibrant Morris County community',
      }
    ],
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Parsippany Troy Hills, Morris County, New Jersey',
    'geo.position': '40.8565;-74.4270',
    'ICBM': '40.8565, -74.4270',
  },
};

export default function ParsippanyTroyHillsPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$485,000' },
    { label: 'Average Days on Market', value: '40 days' },
    { label: 'Properties Available', value: '65+' },
    { label: 'Average Price/SqFt', value: '$235' },
  ];

  const communityFeatures = [
    {
      title: 'Vibrant Community',
      description: 'A thriving township with diverse neighborhoods, excellent schools, and strong community events year-round.',
      icon: '🎉'
    },
    {
      title: 'Business Hub',
      description: 'Home to major corporate offices and business parks, offering excellent employment opportunities and economic stability.',
      icon: '💼'
    },
    {
      title: 'Recreation & Amenities',
      description: 'State-of-the-art parks, sports facilities, and shopping centers provide families with endless activities and entertainment.',
      icon: '⚽'
    },
    {
      title: 'Excellent Schools',
      description: 'Top-rated public school system and proximity to higher education institutions make it ideal for families.',
      icon: '📚'
    }
  ];

  return (
    <>
      <CommunityStructuredData
        name="Parsippany Troy Hills"
        slug="parsippany-troy-hills"
        county="Morris"
        population={54440}
        medianPrice={485000}
        distanceFromNYC="40 miles"
        description="Parsippany Troy Hills is a vibrant Morris County township known for its diverse neighborhoods, excellent schools, and thriving business community. Home to major corporate offices and offering state-of-the-art amenities, Parsippany Troy Hills provides the perfect balance of suburban living and urban convenience."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Parsippany Troy Hills, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Vibrant Suburban Community with Urban Convenience</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Parsippany Troy Hills is a thriving Morris County township of approximately 54,440 residents, offering a dynamic blend of suburban living and urban convenience. Located just 40 miles from New York City, this vibrant community is home to major corporate offices, excellent schools, and diverse neighborhoods that cater to families and professionals alike.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              The township features state-of-the-art parks, sports facilities, and shopping centers that provide residents with endless recreational opportunities. With top-rated public schools and proximity to higher education institutions, Parsippany Troy Hills is ideal for families. The strong business community and economic stability make it attractive to professionals seeking both career opportunities and quality of life.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
            <Link href="/listings?city=parsippany-troy-hills" className="btn-outline">
              View Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Parsippany Troy Hills Market Snapshot
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
            Why Choose Parsippany Troy Hills?
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
            Ready to Find Your Home in Parsippany Troy Hills?
          </h2>
          <p className="scroll-animate text-gray-dark mb-8 max-w-2xl mx-auto text-base">
            Let me help you discover the perfect property in this vibrant Morris County community. With my local expertise and dedication to client satisfaction, I'll guide you through every step of your real estate journey.
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
            Featured Parsippany Troy Hills Listings
          </h2>
          <CommunityProperties cityId={3} cityName="Parsippany Troy Hills" />
        </div>
      </section>

      {/* Other Communities */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            Explore Other Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cities/montague" className="scroll-animate p-6 bg-white rounded-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-light mb-2">Montague, NJ</h3>
              <p className="text-gray-dark text-sm">Sussex County • $385K median</p>
            </Link>
            <Link href="/cities/high-bridge" className="scroll-animate p-6 bg-white rounded-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-light mb-2">High Bridge, NJ</h3>
              <p className="text-gray-dark text-sm">Hunterdon County • $325K median</p>
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
