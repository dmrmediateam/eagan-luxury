'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ihfKestrel?: {
      render: (config: {
        component: string;
        style: string;
        propertyType: boolean;
      }) => HTMLElement;
    };
  }
}

export default function SearchWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined' && window.ihfKestrel) {
      try {
        // Clear any existing content to ensure only one widget
        containerRef.current.innerHTML = '';
        
        // Render the widget directly
        const widget = window.ihfKestrel.render({
          component: 'quickSearchWidget',
          style: 'universal',
          propertyType: false,
        });
        
        if (widget) {
          containerRef.current.appendChild(widget);
        }
      } catch (error) {
        console.error('Error rendering search widget:', error);
      }
    }
  }, []);

  return <div ref={containerRef} id="search-widget-container" />;
}

