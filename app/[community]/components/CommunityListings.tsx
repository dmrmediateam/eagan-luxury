'use client';

import { useEffect, useRef, useState } from 'react';

interface CommunityListingsProps {
  communityName: string;
}

export default function CommunityListings({ communityName }: CommunityListingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    try {
      if (typeof window !== 'undefined' && (window as any).ihfKestrel) {
        const originalReplaceState = history.replaceState;
        history.replaceState = function(state: any, title: string, url?: string | URL | null) {
          try {
            if (url) {
              const target = new URL(String(url), window.location.href);
              const currentOrigin = window.location.origin;
              if (target.origin !== currentOrigin) {
                return;
              }
            }
            return originalReplaceState.apply(history, [state, title, url as any]);
          } catch (e) {
            return;
          }
        } as any;
        
        const script = document.createElement('script');
        script.textContent = `
          try {
            if (window.ihfKestrel && window.ihfKestrel.render) {
              const widget = window.ihfKestrel.render({
                "component": "propertiesGalleryWidget",
                "status": "active",
                "sort": "pd",
                "resultsPerPage": 12
              });
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
  }, [isClient, communityName]);

  if (!isClient) {
    return (
      <div className="w-full h-64 bg-ink/5 rounded flex items-center justify-center">
        <div className="text-ink-soft">Loading property listings...</div>
      </div>
    );
  }

  return (
    <div className="w-full" ref={containerRef}>
      {error && (
        <div className="text-center p-8 text-ink-soft bg-ink/5 rounded">
          {error}
        </div>
      )}
    </div>
  );
}


