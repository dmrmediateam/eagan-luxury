export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional properties in New Jersey&apos;s most prestigious
            communities
          </p>
        </div>

        {/* 
          TODO: iHomeFinder Integration - Featured Listings Widget
          
          Replace this placeholder with iHomeFinder's Featured Listings Widget
          
          Integration Steps:
          1. Add iHomeFinder Gallery widget
          2. Configure to show 6-9 featured properties
          3. Enable features: Photos, Price, Beds/Baths, Square Footage
          4. Add "View Details" button linking to iHomeFinder listing details
          5. Enable slideshow/carousel functionality
          6. Add filters for property type and location
          
          Example iHomeFinder Gallery embed:
          <div id="ihf-featured-listings" class="ihf-gallery-grid"></div>
          
          Widget Configuration:
          - Display: Grid layout (3 columns on desktop)
          - Sort by: Price (high to low) or Featured status
          - Enable hover effects showing additional property details
          - Link to full property details page
          - Add custom CSS for emerald/teal theme
        */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Property Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Property Address
                </h3>
                <p className="text-2xl font-bold text-emerald-600 mb-4">
                  $XXX,XXX
                </p>
                <div className="flex justify-between text-gray-600 text-sm mb-4">
                  <span>X Beds</span>
                  <span>X Baths</span>
                  <span>X,XXX sqft</span>
                </div>
                <button className="w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}

