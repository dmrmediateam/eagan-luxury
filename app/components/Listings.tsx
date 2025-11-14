'use client';

import { useEffect, useRef, useState } from 'react';

export default function Listings() {
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
        const originalReplaceState = history.replaceState;
        // Wrap replaceState to guard cross-origin URL writes from the embedded widget
        history.replaceState = function(state: any, title: string, url?: string | URL | null) {
          try {
            if (url) {
              const target = new URL(String(url), window.location.href);
              const currentOrigin = window.location.origin;
              if (target.origin !== currentOrigin) {
                // Ignore cross-origin replaceState attempts
                return;
              }
            }
            return originalReplaceState.apply(history, [state, title, url as any]);
          } catch (e) {
            // Ignore security errors from malformed/relative URLs
            return;
          }
        } as any;

        // Create a script element to replace
        const script = document.createElement('script');
        script.textContent = `
          try {
            if (window.ihfKestrel && window.ihfKestrel.render) {
              const widget = window.ihfKestrel.render();
              if (widget) {
                document.currentScript.parentNode.replaceChild(widget, document.currentScript);
              }
            }
          } catch (error) {
            console.error('iHomeFinder Kestrel error:', error);
            document.currentScript.parentNode.innerHTML = '<div class="text-center p-8 text-gray-600">Property listings temporarily unavailable. Please try again later.</div>';
          }
        `;
        
        containerRef.current.appendChild(script);
        console.log('iHomeFinder Kestrel widget loaded');

        // Restore original history method on cleanup
        return () => {
          history.replaceState = originalReplaceState;
        };
      } else {
        setError('iHomeFinder Kestrel not available');
      }
    } catch (err) {
      console.error('Error loading iHomeFinder widget:', err);
      setError('Failed to load property listings');
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-gray-500">Loading property listings...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* iHomeFinder Kestrel Listings Widget */}
        <div className="w-full" ref={containerRef}>
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
