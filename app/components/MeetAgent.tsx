export default function MeetAgent() {
  return (
    <section id="meet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Cheryl Towey Services
          </h2>
          <p className="text-xl text-gray-600">
            Your trusted real estate professional in New Jersey
          </p>
        </div>

        {/* Agent Profile */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agent Photo */}
            <div className="relative h-96 lg:h-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center">
              {/* 
                TODO: Replace with actual agent photo
                Consider using professional headshot or branded image
              */}
              <div className="text-center p-8">
                <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-32 h-32 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-emerald-900 font-semibold text-lg">
                  Agent Photo
                </p>
              </div>
            </div>

            {/* Agent Bio */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Cheryl Towey Services
              </h3>
              <p className="text-emerald-600 font-semibold mb-6">
                Cheryl Towey Services Agent
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cheryl Towey Services is a dedicated real estate professional
                serving New Jersey&apos;s most desirable communities. With over 15
                years of experience in the real estate industry, Cheryl
                specializes in residential properties throughout Hackettstown,
                Andover, Byram, Blairstown, Chester, and Washington.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Her deep knowledge of local markets, commitment to exceptional
                client service, and personalized approach make her the trusted
                choice for buyers and sellers throughout New Jersey. Cheryl
                understands that buying or selling a home is one of life&apos;s most
                important decisions, and she is committed to guiding her clients
                through every step of the process with professionalism,
                integrity, and care.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors self-start"
              >
                Contact Cheryl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

