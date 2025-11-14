import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Background overlay - could be replaced with video tag */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* 
        TODO: iHomeFinder Integration Note
        Replace background with video or image slider from iHomeFinder
        Consider using iHomeFinder's featured listings as background images
      */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          Cheryl Towey
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-emerald-200 mb-8 font-light">
          Weichert Realtors
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto font-light">
          New Jersey • Hackettstown • Andover • Byram • Blairstown • Chester •
          Washington
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#properties"
            className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View Listings
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

