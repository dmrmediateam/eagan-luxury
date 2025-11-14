import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Blairstown, NJ | Cheryl Towey',
  description: 'Browse luxury homes and real estate listings in Blairstown, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function BlairstownPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$435,000' },
    { label: 'Average Days on Market', value: '50 days' },
    { label: 'Properties Available', value: '30+' },
    { label: 'Average Price/SqFt', value: '$200' },
  ];

  const communityFeatures = [
    {
      title: 'Historic Main Street',
      description: 'Central areas featuring historic landmarks like Roy\'s Hall Theatre and cozy spots like the Blairstown Diner for community gatherings.',
      icon: '🏛️'
    },
    {
      title: 'Quality Education',
      description: 'Solid education with 10:1 student-teacher ratio, from Blairstown Elementary to North Warren Regional High (Niche: B rating).',
      icon: '🎓'
    },
    {
      title: 'Appalachian Trail Access',
      description: 'New Jersey\'s first Appalachian Trail Community with Paulinskill Valley Trail hiking paths and outdoor adventures.',
      icon: '🥾'
    },
    {
      title: 'Community Events',
      description: 'Farmers Market, Harvest Festival, and holiday festivals create warm community atmosphere and lasting memories.',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Blairstown, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Historic Appalachian Charm - Buy and Sell Blairstown Homes</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Blairstown, New Jersey's first Appalachian Trail Community in Warren County, captivates with roughly 6,000 residents enjoying a rural, historic ambiance. Renowned for its rolling hills and tight-knit vibe, it's a serene retreat for families and nature enthusiasts. Allow me, Cheryl Towey, your Weichert Realtors expert, to help you navigate the process of buying or selling a home in this wonderful community. Blairstown's historic charm and strong real estate market make it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Blairstown's central areas near Main Street feature historic landmarks like Roy's Hall Theatre and cozy spots like the Blairstown Diner, perfect for community gatherings and nostalgic dining. Events like the Farmers Market and holiday festivals create a warm atmosphere. Homes near these hubs offer access to cultural sites and scenic trails, ideal for those seeking a historic, connected lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Historic Home Tour
            </Link>
            <Link href="/communities/blairstown/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Blairstown */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Blairstown - Historic and Natural Beauty Just 65 Miles from NYC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Excellence in Education
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Blairstown's schools, part of the Blairstown Elementary and North Warren Regional districts, deliver solid education with a 10:1 student-teacher ratio. Blairstown Elementary (GreatSchools: 4/10) fosters young learners, while North Warren Regional High (Niche: B) offers robust academics and athletics. The prestigious Blair Academy adds private school options. I would be happy to help you find homes in top school zones for your family's success.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Outdoor Recreation and Community Appeal
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From the Paulinskill Valley Trail's hiking paths to Sycamore Park's playgrounds, Blairstown blends nature with community spirit. The annual Harvest Festival and nearby Delaware Water Gap adventures add seasonal excitement. Homes near these trails and parks suit buyers seeking a peaceful yet active lifestyle in Northwest NJ.
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
            <Link href="/communities/blairstown/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <CommunityProperties cityId={21626} cityName="Blairstown" />

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Experience Historic Appalachian Living?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Blairstown's historic Appalachian Trail Community. From charming Main Street homes to countryside properties with trail access, I'll guide you to your ideal Northwest New Jersey historic retreat.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Historic Search
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

