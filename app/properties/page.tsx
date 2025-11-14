import Link from 'next/link';

export const metadata = {
  title: 'Properties for Sale | Cheryl Towey Real Estate NJ',
  description: 'Browse all available properties for sale with Cheryl Towey in New Jersey. Find your dream home with detailed listings, photos, and expert guidance.',
};

export default function PropertiesPage() {
  const quickFilters = [
    { label: 'Under $400K', value: 'price-under-400k' },
    { label: '$400K - $600K', value: 'price-400-600k' },
    { label: '$600K - $800K', value: 'price-600-800k' },
    { label: 'Over $800K', value: 'price-over-800k' },
    { label: 'New Listings', value: 'new-listings' },
    { label: 'Open Houses', value: 'open-houses' },
  ];

  const propertyTypes = [
    { name: 'Single Family', count: '45+' },
    { name: 'Townhouse', count: '12+' },
    { name: 'Condo', count: '8+' },
    { name: 'Multi-Family', count: '5+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
              Properties for Sale
            </h1>
            <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
              Discover your perfect home with Cheryl Towey's exclusive listings throughout New Jersey. 
              From charming starter homes to luxury estates, find properties that match your lifestyle 
              and budget with expert guidance every step of the way.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex gap-4 flex-wrap mb-8">
              <Link href="/contact" className="btn-primary">
                Schedule Showing
              </Link>
              <Link href="/communities" className="btn-outline">
                Browse by Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Filters Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="py-6">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-medium text-gray-dark mr-4">Quick Filters:</span>
              {quickFilters.map((filter, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-sm hover:border-secondary hover:text-secondary transition-colors"
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Overview */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8 text-center">
            Browse by Property Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {propertyTypes.map((type, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-2xl font-serif font-light text-secondary mb-2">
                  {type.count}
                </div>
                <div className="text-sm font-medium text-black">
                  {type.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iHomeFinder Integration Container */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Available Properties
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-2xl mx-auto">
              Browse all current listings with detailed information, photos, and virtual tours. 
              Contact Cheryl directly for showings and expert advice.
            </p>
          </div>

          {/* iHomeFinder Widget Container */}
          <div className="scroll-animate">
            {/* Replace this div with your actual iHomeFinder widget code */}
            <div 
              id="ihf-main-container" 
              className="min-h-96 bg-gray-50 border-2 border-dashed border-gray-300 rounded-sm flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12V8l-4 4-4-4v8h8zm-8-8l4-4 4 4H8z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg font-medium mb-2">iHomeFinder Widget</p>
                <p className="text-gray-500 text-sm">Property listings will appear here</p>
              </div>
            </div>
          </div>

          {/* Alternative: Manual Property Grid (if iHomeFinder is not ready) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Sample Property Cards - Replace with dynamic data */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="scroll-animate bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                <div className="h-64 bg-gray-300 flex items-center justify-center relative">
                  <span className="text-gray-600 text-sm">Property Photo</span>
                  <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-1 text-xs rounded">
                    New Listing
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                    $XXX,XXX
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xl font-serif font-light text-black mb-2">
                    Beautiful Family Home
                  </div>
                  <div className="text-sm text-gray-dark mb-3">
                    4 bd | 2.5 ba | 2,400 sqft
                  </div>
                  <div className="text-sm text-gray-dark mb-4">
                    123 Main Street, Hackettstown, NJ
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary flex-1 text-xs py-2">
                      View Details
                    </button>
                    <button className="btn-outline flex-1 text-xs py-2">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Popular Search Areas
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-2xl mx-auto">
              Explore properties in these sought-after New Jersey communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/communities/hackettstown" className="scroll-animate group">
              <div className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-light text-black mb-2 group-hover:text-secondary">
                  Hackettstown
                </h3>
                <p className="text-sm text-gray-dark mb-3">
                  Charming mountain city with excellent schools and community feel
                </p>
                <div className="text-xs text-secondary font-medium">
                  View Properties →
                </div>
              </div>
            </Link>

            <Link href="/communities/warren-county" className="scroll-animate group">
              <div className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-light text-black mb-2 group-hover:text-secondary">
                  Warren County
                </h3>
                <p className="text-sm text-gray-dark mb-3">
                  Rural beauty with modern conveniences and growing communities
                </p>
                <div className="text-xs text-secondary font-medium">
                  View Properties →
                </div>
              </div>
            </Link>

            <Link href="/communities/morris-county" className="scroll-animate group">
              <div className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-light text-black mb-2 group-hover:text-secondary">
                  Morris County
                </h3>
                <p className="text-sm text-gray-dark mb-3">
                  Luxury homes and top-rated schools in prestigious locations
                </p>
                <div className="text-xs text-secondary font-medium">
                  View Properties →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you navigate the New Jersey real estate market with personalized service, 
            expert knowledge, and exclusive access to the best properties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Contact Cheryl Today
            </Link>
            <Link 
              href="/about" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Learn About My Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}