import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Walpack, NJ | Cheryl Towey',
  description: 'Explore homes and real estate listings in Walpack, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function WalpackPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$525,000' },
    { label: 'Average Days on Market', value: '38 days' },
    { label: 'Properties Available', value: '15+' },
    { label: 'Average Price/SqFt', value: '$245' },
  ];

  const communityFeatures = [
    { title: 'Delaware Water Gap Proximity', description: 'Immediate access to scenic trails, river activities, and protected parkland.', icon: '🏞️' },
    { title: 'Rural Tranquility', description: 'Peaceful, low-density living with expansive natural surroundings.', icon: '🌿' },
    { title: 'Outdoor Lifestyle', description: 'Hiking, kayaking, and wildlife viewing right outside your door.', icon: '🚣' },
    { title: 'Tight-Knit Community', description: 'Small-town charm with a close community feel.', icon: '🤝' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Walpack, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Gateway to the Delaware Water Gap</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Walpack is a uniquely tranquil Sussex County township nestled within the Delaware Water Gap National Recreation Area. With its preserved landscapes and limited development, it offers a rare opportunity for secluded, nature-forward living in Northwest New Jersey.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Whether you seek a weekend retreat or a primary residence surrounded by natural beauty, Walpack provides unparalleled access to trails, river adventures, and dark-sky star gazing. As your local expert, I can help you navigate this distinctive market.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Walpack, NJ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="scroll-animate">
                <h3 className="text-2xl font-serif font-light text-black mb-2">
                  {feature.icon} {feature.title}
                </h3>
                <p className="text-base text-gray-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Market Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm shadow-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-black font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties for Walpack */}
      <CommunityProperties cityId={22607} cityName="Walpack" />

      {/* CTA */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">Ready to Explore Walpack?</h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Reach out for private tours and expert guidance on properties in Walpack and nearby communities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Contact Cheryl
            </Link>
            <Link href="/communities" className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors">
              Explore Other Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


