export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-emerald-100 uppercase tracking-wide text-sm font-semibold mb-4">
            Luxury Real Estate
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto mb-8">
            Let Cheryl Towey guide you through New Jersey&apos;s premier real estate
            market with expertise, dedication, and personalized service
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-emerald-100">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5.0</div>
              <div className="text-emerald-100">Client Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#properties"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Cheryl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

