import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';
import { CommunityStructuredData } from '@/app/components/CommunityStructuredData';

export const metadata: Metadata = {
  title: 'Homes for Sale in High Bridge, NJ | Cheryl Towey Real Estate',
  description: 'Find your dream home in High Bridge, NJ. Browse current listings, explore market statistics, and discover why High Bridge is the perfect place to call home. Licensed real estate agent Cheryl Towey.',
  keywords: 'High Bridge NJ homes for sale, Hunterdon County real estate, High Bridge realtor, High Bridge properties, homes for sale Hunterdon County',
  openGraph: {
    title: 'Homes for Sale in High Bridge, NJ | Real Estate by Cheryl Towey',
    description: 'Discover beautiful homes for sale in High Bridge, NJ. Expert local real estate services with Cheryl Towey.',
    url: 'https://www.realestatebycherylnj.com/cities/high-bridge',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/high-bridge.jpg',
        width: 1200,
        height: 630,
        alt: 'High Bridge NJ - Homes for sale in this charming Hunterdon County community',
      }
    ],
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'High Bridge, Hunterdon County, New Jersey',
    'geo.position': '40.7503;-74.8876',
    'ICBM': '40.7503, -74.8876',
  },
};

export default function HighBridgePage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$325,000' },
    { label: 'Average Days on Market', value: '45 days' },
    { label: 'Properties Available', value: '18+' },
    { label: 'Average Price/SqFt', value: '$165' },
  ];

  const communityFeatures = [
    {
      title: 'Historic Charm',
      description: 'A historic river town with Victorian-era architecture and deep community roots dating back centuries.',
      icon: '🏛️'
    },
    {
      title: 'Scenic Beauty',
      description: 'Located along the Raritan River with beautiful views and direct access to outdoor recreational areas.',
      icon: '🌊'
    },
    {
      title: 'Walkable Downtown',
      description: 'A charming downtown area with local shops, restaurants, and community gathering spaces.',
      icon: '🚶'
    },
    {
      title: 'Affordability',
      description: 'Excellent value for homebuyers seeking smaller town living with modern conveniences nearby.',
      icon: '💰'
    }
  ];

  return (
    <>
      <CommunityStructuredData
        name="High Bridge"
        slug="high-bridge"
        county="Hunterdon"
        population={3465}
        medianPrice={325000}
        distanceFromNYC="60 miles"
        description="High Bridge is a historic river town in Hunterdon County known for its charming Victorian-era architecture, scenic Raritan River location, and walkable downtown area. This affordable community offers a blend of historic character and modern living."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover High Bridge, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Historic River Town with Modern Living</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              High Bridge is a charming historic river town in Hunterdon County with deep community roots and stunning Victorian-era architecture. With approximately 3,465 residents, this intimate community offers the perfect balance of historic charm and modern convenience, located just 60 miles from New York City.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Situated along the scenic Raritan River, High Bridge provides residents with beautiful waterfront views and direct access to outdoor recreational opportunities. The walkable downtown area features local shops and restaurants, fostering a strong sense of community. For homebuyers seeking exceptional value without sacrificing character or location, High Bridge is an ideal choice.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
            <Link href="/listings?city=high-bridge" className="btn-outline">
              View Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl font-serif font-light text-black mb-12 text-center">
            High Bridge Market Snapshot
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
            Why Choose High Bridge?
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
            Ready to Find Your Home in High Bridge?
          </h2>
          <p className="scroll-animate text-gray-dark mb-8 max-w-2xl mx-auto text-base">
            Let me help you discover the perfect property in this historic Hunterdon County community. With my local expertise and dedication to client satisfaction, I'll guide you through every step.
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
            Featured High Bridge Listings
          </h2>
          <CommunityProperties cityId={2} cityName="High Bridge" />
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
