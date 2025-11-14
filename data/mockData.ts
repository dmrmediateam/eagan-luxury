// Data interfaces and fallback/placeholder system
// TODO: Replace with iHomeFinder MLS data integration

export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: 'for-sale' | 'sold' | 'pending';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

// Empty arrays - will be populated by iHomeFinder integration
export const mockProperties: Property[] = [];
export const mockTestimonials: Testimonial[] = [];

// Fallback/placeholder data for when no real data is available
export const getFallbackProperty = (): Property => ({
  id: 'fallback',
  address: 'Property Address',
  city: 'City',
  state: 'NJ',
  zip: '00000',
  price: 0,
  beds: 0,
  baths: 0,
  sqft: 0,
  image: '/placeholder-property.jpg',
  status: 'for-sale',
  description: 'Property details will be available once MLS integration is complete.'
});

export const getFallbackTestimonial = (): Testimonial => ({
  id: 'fallback',
  name: 'Client Name',
  location: 'Location',
  text: 'Client testimonials will be displayed here once the system is fully integrated.',
  rating: 5
});

// Utility function to check if we have real data
export const hasRealData = (data: any[]): boolean => {
  return data.length > 0 && data[0].id !== 'fallback';
};
