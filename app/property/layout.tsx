'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ihfKestrel?: any;
  }
}

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Ensure iHomefinder Kestrel is available for property pages
    if (typeof window !== 'undefined' && window.ihfKestrel) {
      console.log('iHomefinder Kestrel available for property pages');
    }
  }, []);

  return (
    <div className="property-layout">
      {children}
    </div>
  );
}
