import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Washington, NJ | Cheryl Towey',
  description: 'Browse luxury homes and real estate listings in Washington, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function WashingtonPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$415,000' },
    { label: 'Average Days on Market', value: '44 days' },
    { label: 'Properties Available', value: '55+' },
    { label: 'Average Price/SqFt', value: '$190' },
  ];

  const communityFeatures = [
    {
      title: 'Historic Downtown',
      description: 'West Washington Avenue features historic Victorians and local gems like Muheisen\'s Bagel & Deli for community gatherings.',
      icon: '🏛️'
    },
    {
      title: 'Quality Education',
      description: 'Washington Borough and Township districts deliver quality education with 11:1 student-teacher ratio and Niche B-rated schools.',
      icon: '🎓'
    },
    {
      title: 'Nature & Recreation',
      description: 'Roaring Rock Park hiking trails and Pohatcong Native Arboretum scenic paths blend nature with community spirit.',
      icon: '🌲'
    },
    {
      title: 'Community Events',
      description: 'Warren County Farmers\' Fair with balloon rides, Holiday Tree Lighting, and Fairway Valley Golf Club add local excitement.',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Washington, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Affordable Community Charm - Buy and Sell Washington Homes</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Washington, a welcoming Warren County community with approximately 14,575 residents across its borough and township, blends affordable living with small-town warmth. Renowned for its historic charm and family-friendly vibe, it's a haven for first-time buyers and families. Allow me, Cheryl Towey, your Weichert Realtors expert, to help you navigate the process of buying or selling a home in this wonderful community. Washington's inviting appeal and strong real estate market make it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Washington's downtown along West Washington Avenue features historic Victorians and local gems like Muheisen's Bagel & Deli, perfect for community gatherings and cozy dining. Events like the Warren County Farmers' Fair and Holiday Tree Lighting create a festive atmosphere. Homes near these hubs offer walkable access to local charm, ideal for those seeking an affordable, connected lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Affordable Home Tour
            </Link>
            <Link href="/communities/washington/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Washington */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Washington
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Quality Education for Families
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Washington's schools, spanning the Washington Borough and Township districts, deliver quality education with an 11:1 student-teacher ratio. Taylor Street School and Brass Castle (Niche: B) support young learners, while Warren Hills Regional High School offers robust academics and athletics. I would be happy to help you find homes in top school zones for your family's success.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Outdoor Recreation and Community Appeal
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From Roaring Rock Park's hiking trails to the Pohatcong Native Arboretum's scenic paths, Washington blends nature with community spirit. The annual Farmers' Fair with balloon rides and nearby Fairway Valley Golf Club add local excitement. Homes near these parks and events suit buyers seeking an affordable yet active lifestyle in Northwest NJ.
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
            <Link href="/communities/washington/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <CommunityProperties cityId={22653} cityName="Washington" />

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Find Your Affordable Dream Home?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Washington's welcoming Warren County community. From historic Victorian homes to modern family residences near excellent schools, I'll guide you to your ideal affordable Northwest New Jersey lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Affordable Search
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

