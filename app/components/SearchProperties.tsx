'use client';

import { useEffect, useRef, useState } from 'react';

export default function SearchProperties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    try {
      // Check if ihfKestrel is available
      if (typeof window !== 'undefined' && (window as any).ihfKestrel) {
        const ihfKestrel = (window as any).ihfKestrel;
        
        // Create a script element to replace
        const script = document.createElement('script');
        script.textContent = `
          try {
            if (window.ihfKestrel && window.ihfKestrel.render) {
              const widget = window.ihfKestrel.render({
                "component": "propertiesGalleryWidget",
                "cityId": 22626,
                "propertyTypes": "SFR",
                "status": "active",
                "sort": "pd",
                "resultsPerPage": 10
              });
              if (widget) {
                document.currentScript.parentNode.replaceChild(widget, document.currentScript);
              }
            }
          } catch (error) {
            console.error('iHomeFinder Kestrel error:', error);
            document.currentScript.parentNode.innerHTML = '<div class="text-center p-8 text-gray-600">Property search temporarily unavailable. Please try again later.</div>';
          }
        `;
        
        containerRef.current.appendChild(script);
        console.log('iHomeFinder Kestrel search widget loaded');
      } else {
        setError('iHomeFinder Kestrel not available');
      }
    } catch (err) {
      console.error('Error loading iHomeFinder search widget:', err);
      setError('Failed to load property search');
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your dream home with our advanced search tools.
            </p>
          </div>
          <div className="max-w-4xl mx-auto h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-gray-500">Loading property search...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Search Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your dream home with our advanced search tools.
          </p>
        </div>

        {/* iHomeFinder Kestrel Search Widget */}
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {error && (
            <div className="text-center p-8 text-gray-600 bg-gray-50 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

