import Link from 'next/link';

export const metadata = {
  title: 'Homes for Sale in Sussex County, NJ | Cheryl Towey',
  description: 'Browse luxury homes and real estate listings in Sussex County, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function SussexCountyPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$450,000' },
    { label: 'Average Days on Market', value: '45 days' },
    { label: 'Properties Available', value: '120+' },
    { label: 'Average Price/SqFt', value: '$210' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Homes for Sale in Sussex County
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl">
            Discover your perfect home in Sussex County, New Jersey. Known for its scenic beauty, excellent schools, and tight-knit communities, Sussex County offers a perfect blend of rural charm and modern convenience. From historic homes in charming downtown areas to luxurious lakefront properties, Sussex County provides an exceptional quality of life for families and professionals alike.
          </p>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Market Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Listing Placeholder */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12">
            Available Properties
          </h2>
          
          {/* Placeholder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="scroll-animate bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-dark text-sm">Property Image</span>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-serif font-light text-black mb-2">
                    $XXX,XXX
                  </div>
                  <div className="text-sm text-gray-dark mb-4">
                    X bd | X ba | X,XXX sqft
                  </div>
                  <div className="text-sm text-gray-dark mb-4">
                    123 Main Street, Sussex County, NJ
                  </div>
                  <button className="btn-primary w-full text-xs">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Contact Cheryl for More Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

