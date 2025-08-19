"use client";

import EnhancedPropertiesPage from './EnhancedPropertiesPage';
import { ServiceArea } from '@/lib/cheryl-service-areas';

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

interface PropertiesClientProps {
  searchParams: SearchParams;
  serviceAreas: ServiceArea[];
}

const PropertiesClient = ({ searchParams, serviceAreas }: PropertiesClientProps) => {
  return (
    <EnhancedPropertiesPage
      serviceAreas={serviceAreas}
      showFilters={true}
      showCitySearch={false}
      variant="default"
    />
  );
};

export default PropertiesClient;
