import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Chester, NJ | Cheryl Towey',
  description: 'Browse luxury homes and real estate listings in Chester, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function ChesterPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$525,000' },
    { label: 'Average Days on Market', value: '35 days' },
    { label: 'Properties Available', value: '40+' },
    { label: 'Average Price/SqFt', value: '$245' },
  ];

  const communityFeatures = [
    {
      title: 'Historic Main Street',
      description: 'Charming 19th-century buildings housing boutique shops and eateries like The Publick House for leisurely strolls.',
      icon: '🏛️'
    },
    {
      title: 'Exceptional Education',
      description: 'Top-rated Chester School District delivers excellence with a 12:1 student-teacher ratio for family success.',
      icon: '🎓'
    },
    {
      title: 'Nature & Recreation',
      description: 'Hacklebarney State Park trails and Alstede Farms pick-your-own experiences blend nature with community spirit.',
      icon: '🌲'
    },
    {
      title: 'Community Events',
      description: 'Spring Craft Fair, Harvest Festival, Holiday Tree Lighting, and Summer Concert Series create vibrant atmosphere.',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Chester, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Upscale Historic Elegance - Buy and Sell Chester Homes</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Chester, a refined Morris County gem with approximately 9,400 residents across its borough and township, exudes historic elegance and upscale living. Renowned for its charming Main Street and serene hills, it's a haven for families and professionals. Allow me, Cheryl Towey, your Weichert Realtors expert, to help you navigate the process of buying or selling a home in this wonderful community. Chester's timeless appeal and strong real estate market make it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Chester's Main Street, lined with 19th-century buildings, boasts boutique shops and eateries like The Publick House, perfect for leisurely strolls and community connections. Annual events like the Spring Craft Fair and Harvest Festival create a vibrant atmosphere. Homes near downtown offer walkable access to these historic gems, ideal for those seeking a refined, connected lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Luxury Home Tour
            </Link>
            <Link href="/communities/chester/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Chester */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Chester - Exceptional Education for Families
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Top-Rated Education Excellence
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Chester's top-rated schools, part of the Chester School District, deliver excellence with a 12:1 student-teacher ratio. The district's commitment to academic achievement and personalized learning creates an environment where students excel. I would be happy to help you find homes in top school zones for your family's success.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Outdoor Recreation and Community Appeal
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From Hacklebarney State Park's scenic trails to Alstede Farms' pick-your-own experiences, Chester blends nature with community spirit. The Holiday Tree Lighting and Summer Concert Series add seasonal charm. Homes near these parks and farms suit buyers seeking a peaceful yet active lifestyle in Northwest NJ.
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
            <Link href="/communities/chester/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <CommunityProperties cityId={21647} cityName="Chester" />

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Experience Historic Elegance?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Chester's refined Morris County community. From historic Main Street homes to luxury estates near top-rated schools, I'll guide you to your ideal Northwest New Jersey upscale lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Luxury Search
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

