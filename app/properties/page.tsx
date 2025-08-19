import { Suspense } from 'react';
import { Metadata } from 'next';
import PropertiesClient from '@/components/properties/PropertiesClient';
import { getAllServiceAreas } from '@/lib/cheryl-service-areas';

export const metadata: Metadata = {
  title: 'Properties | Cheryl Towey - New Jersey Real Estate Agent',
  description: 'Browse all available properties across New Jersey. Filter by city, property type, price, and more to find your perfect home.',
  openGraph: {
    title: 'Properties | Cheryl Towey Real Estate',
    description: 'Browse all available properties across New Jersey. Filter by city, property type, price, and more to find your perfect home.',
    images: ['/cheryl-towey.jpeg'],
  },
};

interface SearchParams {
  city?: string;
  propertyType?: string;
  minPrice?: string;
  maxPrice?: string;
  beds?: string;
  baths?: string;
  status?: string;
  page?: string;
}

interface PropertiesPageProps {
  searchParams: SearchParams;
}

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  // Get all service areas for the filter dropdown
  const serviceAreas = getAllServiceAreas();
  
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600">Loading properties...</div>
        </div>
      }>
        <PropertiesClient 
          searchParams={searchParams}
          serviceAreas={serviceAreas}
        />
      </Suspense>
    </div>
  );
}
