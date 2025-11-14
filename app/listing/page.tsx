'use client';

import { useEffect } from 'react';

export default function ListingPage() {
  useEffect(() => {
    // Add the iHomefinder script to the body as requested
    const script = document.createElement('script');
    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render());
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Property Listings
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect home with our comprehensive property listings
          </p>
        </div>
      </section>

      {/* iHomeFinder Listings Widget will be rendered here by the script */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full min-h-96">
            {/* The iHomefinder widget will be injected here */}
          </div>
        </div>
      </section>
    </div>
  );
}
