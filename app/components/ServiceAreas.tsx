export default function ServiceAreas() {
  const locations = [
    {
      name: "Hackettstown",
      description:
        "Cheryl's primary service area - charming Warren County town with historic homes, excellent schools, and modern conveniences",
    },
    {
      name: "Andover",
      description:
        "Cheryl serves this picturesque Sussex County community with beautiful homes and scenic landscapes",
    },
    {
      name: "Byram",
      description:
        "Cheryl specializes in this desirable Sussex County township with excellent schools and family-friendly neighborhoods",
    },
    {
      name: "Blairstown",
      description:
        "Cheryl serves this historic Warren County town with stunning homes and rural charm",
    },
    {
      name: "Chester",
      description:
        "Cheryl's expertise extends to this Morris County gem with luxury homes and excellent shopping and dining",
    },
    {
      name: "Washington",
      description:
        "Cheryl serves this Warren County community with beautiful properties and convenient access to major highways",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover exceptional properties in New Jersey&apos;s most prestigious
            waterfront communities
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Cheryl&apos;s Primary Service Areas
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Cheryl specializes in these six beautiful New Jersey communities
            with personalized real estate expertise. From historic homes in
            Hackettstown to luxury properties in Chester, she provides
            exceptional service throughout Warren, Sussex, and Morris Counties.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {location.name}
              </h3>
              <p className="text-gray-700 mb-6">{location.description}</p>
              <a
                href="#properties"
                className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center group"
              >
                View Properties
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#properties"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            View Properties →
          </a>
        </div>
      </div>
    </section>
  );
}

