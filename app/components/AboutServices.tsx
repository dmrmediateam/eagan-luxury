export default function AboutServices() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Cheryl Towey Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated real estate professional with a passion for helping
            families find their perfect home in New Jersey&apos;s most desirable
            communities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-600 mb-2">10+</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
              Years of Experience
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-600 mb-2">250+</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
              Happy Families Served
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#meet"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Learn More About Cheryl
          </a>
        </div>
      </div>
    </section>
  );
}

