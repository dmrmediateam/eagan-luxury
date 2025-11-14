import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';

export const metadata: Metadata = {
  title: 'Homes for Sale in Byram, NJ | Real Estate by Cheryl Towey',
  description: 'Find homes for sale in Byram, NJ with Cheryl Towey. Explore this lakeside suburb featuring Lake Mohawk, quality schools, outdoor recreation, and community events in Sussex County.',
};

export default function ByramPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$455,000' },
    { label: 'Average Days on Market', value: '40 days' },
    { label: 'Properties Available', value: '50+' },
    { label: 'Average Price/SqFt', value: '$215' },
  ];

  const communityFeatures = [
    {
      title: 'Lakeside Living',
      description: 'Central areas near Lake Mohawk and Cranberry Lake feature casual dining and community spots for lakeside relaxation.',
      icon: '🏊‍♀️'
    },
    {
      title: 'Quality Education',
      description: 'Byram Township School District delivers above-average education with a favorable 14:1 student-teacher ratio.',
      icon: '🎓'
    },
    {
      title: 'Outdoor Adventure',
      description: 'C.O. Johnson Park playgrounds, Sussex Branch Trail biking paths, and abundant recreational opportunities.',
      icon: '🌲'
    },
    {
      title: 'Community Events',
      description: 'Byram Day with live music, Holiday Tree Lighting, and nearby Sussex County Fair create lasting memories.',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Byram, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Lakeside Suburban Haven - Buy and Sell Byram Homes</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Byram, the "Township of Lakes," with approximately 8,082 residents enjoying a rural yet suburban feel. Byram is renowned for its scenic waters and family-friendly vibe, it's a peaceful retreat for young professionals and families alike. Allow me to help you navigate the process of buying or selling a home in this wonderful community. Byram's natural beauty and strong real estate market make it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Byram's central areas near Lake Mohawk and Cranberry Lake feature casual dining and community spots, perfect for lakeside relaxation and neighborly gatherings. Events like Byram Day with live music and food trucks create a festive atmosphere. Homes near these hubs offer easy access to boating and local eateries, ideal for those seeking a water-centric, connected lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Lakeside Property Tour
            </Link>
            <Link href="/communities/byram/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Byram */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Byram - Lakeside and Communal Charm Just 50 Miles from NYC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Excellence in Education
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Byram's schools, part of the Byram Township School District, deliver above-average education with a 14:1 student-teacher ratio. I would be happy to help you find homes in top school zones for your family's success. The district's commitment to personalized learning creates an environment where students thrive academically and socially.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Outdoor Recreation and Community Appeal
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From C.O. Johnson Park's playgrounds and trails to the Sussex Branch Trail's biking paths, Byram blends nature with adventure. The Holiday Tree Lighting and nearby Sussex County Fair add seasonal spirit. Homes near these lakes and parks suit buyers seeking a peaceful yet active lifestyle in Northwest NJ.
              </p>
            </div>
          </div>

          {/* Community Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-serif font-light text-black mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Current Market Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm shadow-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/communities/byram/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <CommunityProperties cityId={21638} cityName="Byram" />

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Experience Lakeside Living?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Byram's "Township of Lakes." From waterfront homes to family-friendly neighborhoods near excellent schools, I'll guide you to your ideal Northwest New Jersey lakeside lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Lakeside Search
            </Link>
            <Link 
              href="/communities" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Explore Other Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

