'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ihfKestrel?: {
      render: (config: {
        component: string;
        propertyType: string;
        status: string;
        sort: string;
        resultsPerPage: number;
      }) => HTMLElement;
    };
  }
}

export default function FeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined' && window.ihfKestrel) {
      try {
        // Clear any existing content to ensure only one widget
        containerRef.current.innerHTML = '';
        
        // Render the widget directly
        const widget = window.ihfKestrel.render({
          component: 'featuredListingSearchWidget',
          propertyType: 'SFR',
          status: 'active',
          sort: 'pd',
          resultsPerPage: 8,
        });
        
        if (widget) {
          containerRef.current.appendChild(widget);
        }
      } catch (error) {
        console.error('Error rendering featured properties widget:', error);
      }
    }
  }, []);

  return <div ref={containerRef} id="featured-properties-container" />;
}






