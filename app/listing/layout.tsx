'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ihfKestrel?: any;
  }
}

export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Ensure iHomefinder Kestrel is available for listing pages
    if (typeof window !== 'undefined' && window.ihfKestrel) {
      console.log('iHomefinder Kestrel available for listing pages');
    }
  }, []);

  return (
    <div className="listing-layout">
      {children}
    </div>
  );
}
