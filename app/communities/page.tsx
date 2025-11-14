import Link from 'next/link';

export const metadata = {
  title: 'Communities in New Jersey | Real Estate by Cheryl Towey',
  description: 'Explore premier Northwest New Jersey communities including Hackettstown, Andover, Byram, Blairstown, Chester, and Washington. Find your perfect community with Cheryl Towey.',
};

export default function CommunitiesPage() {
  const communities = [
    {
      name: 'Hackettstown',
      tagline: 'Vibrant Community Downtown Living',
      description: 'A charming Warren County town of about 10,143 residents, known as the "Mountain City." Blends small-town warmth with modern vibrancy.',
      features: ['Strong Schools', 'Downtown Main Street', 'Parks & Recreation', 'Community Events'],
      medianPrice: '$465,000',
      icon: '🏘️',
      slug: 'hackettstown',
      stats: [
        { label: 'Population', value: '10,143' },
        { label: 'Distance from NYC', value: '50 miles' },
        { label: 'Active Listings', value: '45+' },
        { label: 'Avg Price/SqFt', value: '$220' }
      ]
    },
    {
      name: 'Andover',
      tagline: 'Tranquil Rural Retreat',
      description: 'A serene Sussex County gem with roughly 7,000 residents. Known for low crime rates and beautiful landscapes, a haven for families and nature lovers.',
      features: ['Historic Main Street', 'Excellent Schools', 'Outdoor Recreation', 'Tight-Knit Community'],
      medianPrice: '$485,000',
      icon: '🌄',
      slug: 'andover',
      stats: [
        { label: 'Population', value: '7,000' },
        { label: 'Distance from NYC', value: '40 miles' },
        { label: 'Active Listings', value: '35+' },
        { label: 'Avg Price/SqFt', value: '$225' }
      ]
    },
    {
      name: 'Byram',
      tagline: 'Lakeside Suburban Haven',
      description: 'The "Township of Lakes" with approximately 8,082 residents. Renowned for scenic waters and family-friendly vibe, a peaceful retreat just 50 miles from NYC.',
      features: ['Lake Mohawk', 'Quality Schools', 'Water Sports', 'Community Events'],
      medianPrice: '$455,000',
      icon: '💧',
      slug: 'byram',
      stats: [
        { label: 'Population', value: '8,082' },
        { label: 'Distance from NYC', value: '50 miles' },
        { label: 'Active Listings', value: '50+' },
        { label: 'Avg Price/SqFt', value: '$215' }
      ]
    },
    {
      name: 'Blairstown',
      tagline: 'Historic Appalachian Charm',
      description: 'New Jersey\'s first Appalachian Trail Community with roughly 6,000 residents. Captivates with rolling hills and tight-knit vibe.',
      features: ['Appalachian Trail', 'Historic Landmarks', 'Hiking Trails', 'Local Events'],
      medianPrice: '$435,000',
      icon: '🥾',
      slug: 'blairstown',
      stats: [
        { label: 'Population', value: '6,000' },
        { label: 'Distance from NYC', value: '65 miles' },
        { label: 'Active Listings', value: '30+' },
        { label: 'Avg Price/SqFt', value: '$200' }
      ]
    },
    {
      name: 'Chester',
      tagline: 'Upscale Historic Elegance',
      description: 'A refined Morris County gem with approximately 9,400 residents. Exudes historic elegance and upscale living with charming Main Street appeal.',
      features: ['Top-Rated Schools', 'Historic Main Street', 'State Parks', 'Luxury Estates'],
      medianPrice: '$525,000',
      icon: '👑',
      slug: 'chester',
      stats: [
        { label: 'Population', value: '9,400' },
        { label: 'Distance from NYC', value: '55 miles' },
        { label: 'Active Listings', value: '40+' },
        { label: 'Avg Price/SqFt', value: '$245' }
      ]
    },
    {
      name: 'Washington',
      tagline: 'Affordable Community Charm',
      description: 'A welcoming Warren County community with approximately 14,575 residents. Blends affordable living with small-town warmth.',
      features: ['Historic Downtown', 'Quality Schools', 'Recreation Areas', 'First-Time Buyer Friendly'],
      medianPrice: '$415,000',
      icon: '🏡',
      slug: 'washington',
      stats: [
        { label: 'Population', value: '14,575' },
        { label: 'Distance from NYC', value: '45 miles' },
        { label: 'Active Listings', value: '55+' },
        { label: 'Avg Price/SqFt', value: '$190' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Explore Our Communities
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Premier Northwest New Jersey Neighborhoods</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Discover the perfect community that matches your lifestyle. From vibrant downtown living to tranquil rural retreats, each Northwest New Jersey community offers unique charm, strong schools, and thriving neighborhoods. As your local Weichert Realtors expert, I'm here to guide you through every community and help you find your ideal home.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Get Community Guide
            </Link>
            <Link href="/properties" className="btn-outline">
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-light text-secondary mb-2">6</div>
              <div className="text-sm text-gray-dark">Premier Communities</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-light text-secondary mb-2">250+</div>
              <div className="text-sm text-gray-dark">Active Listings</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-light text-secondary mb-2">$415K-$525K</div>
              <div className="text-sm text-gray-dark">Median Home Prices</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-light text-secondary mb-2">40-65 mi</div>
              <div className="text-sm text-gray-dark">Distance from NYC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Featured Communities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <Link key={index} href={`/communities/${community.slug}`}>
                <div className="scroll-animate bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border h-full">
                  {/* Community Header */}
                  <div className="bg-gradient-to-r from-secondary to-blue-600 p-6 text-white">
                    <div className="text-4xl mb-4">{community.icon}</div>
                    <h3 className="text-2xl font-serif font-light mb-2">{community.name}</h3>
                    <p className="text-sm text-blue-100">{community.tagline}</p>
                  </div>
                  
                  {/* Community Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-dark leading-relaxed mb-4">
                      {community.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {community.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-light px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {community.stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-serif font-light text-secondary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Median Price */}
                    <div className="border-t border-gray-200 pt-4 text-center mb-4">
                      <div className="text-xs text-gray-600 mb-1">Median Home Price</div>
                      <div className="text-2xl font-serif font-light text-black">
                        {community.medianPrice}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-secondary hover:bg-blue-700 text-white text-xs py-2 rounded-sm font-light transition-colors">
                        Explore
                      </button>
                      <button className="flex-1 border border-secondary text-secondary hover:bg-secondary hover:text-white text-xs py-2 rounded-sm font-light transition-colors">
                        Properties
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Comparison */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Community Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-4 px-4 font-serif font-light text-black">Community</th>
                  <th className="text-center py-4 px-4 font-serif font-light text-black">Population</th>
                  <th className="text-center py-4 px-4 font-serif font-light text-black">Distance to NYC</th>
                  <th className="text-center py-4 px-4 font-serif font-light text-black">Median Price</th>
                  <th className="text-center py-4 px-4 font-serif font-light text-black">Listings</th>
                  <th className="text-center py-4 px-4 font-serif font-light text-black">Price/SqFt</th>
                </tr>
              </thead>
              <tbody>
                {communities.map((community, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <Link 
                        href={`/communities/${community.slug}`}
                        className="text-secondary hover:underline font-medium"
                      >
                        {community.name}
                      </Link>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-dark">{community.stats[0].value}</td>
                    <td className="text-center py-4 px-4 text-gray-dark">{community.stats[1].value}</td>
                    <td className="text-center py-4 px-4 font-medium text-black">{community.medianPrice}</td>
                    <td className="text-center py-4 px-4 text-gray-dark">{community.stats[2].value}</td>
                    <td className="text-center py-4 px-4 text-gray-dark">{community.stats[3].value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose These Communities */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Choose These Communities?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-animate">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">Excellent Schools</h3>
              <p className="text-gray-dark leading-relaxed">
                Each community offers quality education with strong student-teacher ratios and dedicated support for academic excellence.
              </p>
            </div>
            
            <div className="scroll-animate">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">Natural Beauty</h3>
              <p className="text-gray-dark leading-relaxed">
                From state parks to hiking trails and recreational facilities, nature is never far away in Northwest NJ.
              </p>
            </div>
            
            <div className="scroll-animate">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">Community Spirit</h3>
              <p className="text-gray-dark leading-relaxed">
                Strong neighborhoods with regular events, farmers markets, and festivals that foster genuine connections.
              </p>
            </div>

            <div className="scroll-animate">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">NYC Access</h3>
              <p className="text-gray-dark leading-relaxed">
                All communities are within 40-65 miles of NYC, perfect for professionals and families commuting to the city.
              </p>
            </div>
            
            <div className="scroll-animate">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">Strong Value</h3>
              <p className="text-gray-dark leading-relaxed">
                Competitive pricing from $415K to $525K with year-over-year appreciation and stable market conditions.
              </p>
            </div>
            
            <div className="scroll-animate">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-serif font-light text-black mb-3">Safe & Secure</h3>
              <p className="text-gray-dark leading-relaxed">
                Low crime rates and family-friendly neighborhoods where residents feel at home and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Explore Your Community?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Each community has its own unique character and charm. Let me help you find the perfect neighborhood that matches your lifestyle, family needs, and investment goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Schedule Community Tour
            </Link>
            <Link 
              href="/properties" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="scroll-animate">
              <h3 className="text-lg font-serif font-light text-black mb-3">
                Which community is best for families?
              </h3>
              <p className="text-gray-dark leading-relaxed">
                All six communities are family-friendly, but Hackettstown and Chester stand out for their top-rated schools. Washington offers excellent value for first-time buyers, while Andover and Byram appeal to families seeking a more rural setting.
              </p>
            </div>

            <div className="scroll-animate">
              <h3 className="text-lg font-serif font-light text-black mb-3">
                Which community has the best schools?
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Chester offers the highest-rated schools in the region. However, all communities feature quality education with strong student-teacher ratios and committed school districts.
              </p>
            </div>

            <div className="scroll-animate">
              <h3 className="text-lg font-serif font-light text-black mb-3">
                What's the most affordable community?
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Washington offers the most affordable options with a median price around $415,000, making it ideal for first-time buyers and those seeking great value.
              </p>
            </div>

            <div className="scroll-animate">
              <h3 className="text-lg font-serif font-light text-black mb-3">
                Which community is closest to New York City?
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Andover (40 miles) and Washington (45 miles) are the closest to NYC. Blairstown is the farthest at 65 miles, but offers the most rural charm.
              </p>
            </div>

            <div className="scroll-animate">
              <h3 className="text-lg font-serif font-light text-black mb-3">
                Can you help me choose the right community?
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Absolutely! I'd love to discuss your priorities—whether it's schools, outdoor recreation, downtown living, or budget. Contact me to schedule a personalized community consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
