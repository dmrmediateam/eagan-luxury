"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import PropertiesHero from './PropertiesHero';
import PropertiesFilters from './PropertiesFilters';
import CityPropertiesView from './CityPropertiesView';
import { FooterNew } from '@/components/home/FooterNew';
import { ServiceArea } from '@/lib/cheryl-service-areas';

interface EnhancedPropertiesPageProps {
  serviceAreas: ServiceArea[];
  showFilters?: boolean;
  showCitySearch?: boolean;
  preselectedCity?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  variant?: 'default' | 'compact' | 'featured';
}

const EnhancedPropertiesPage = ({ 
  serviceAreas,
  showFilters = true,
  showCitySearch = false,
  preselectedCity,
  heroTitle,
  heroSubtitle,
  variant = 'default'
}: EnhancedPropertiesPageProps) => {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  
  // Initialize filters from URL parameters
  const [filters, setFilters] = useState({
    city: preselectedCity || currentSearchParams.get('city') || '',
    propertyType: currentSearchParams.get('propertyType') || '',
    minPrice: currentSearchParams.get('minPrice') || '',
    maxPrice: currentSearchParams.get('maxPrice') || '',
    beds: currentSearchParams.get('beds') || '',
    baths: currentSearchParams.get('baths') || '',
    status: currentSearchParams.get('status') || 'Active',
  });

  const [currentPage, setCurrentPage] = useState(
    parseInt(currentSearchParams.get('page') || '1', 10)
  );

  // Update URL when filters change (only if showFilters is true)
  const updateURL = (newFilters: typeof filters, page: number = 1) => {
    if (!showFilters) return;
    
    const params = new URLSearchParams();
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== '') {
        params.set(key, value);
      }
    });

    if (page > 1) {
      params.set('page', page.toString());
    }

    const newURL = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(newURL, { scroll: false });
  };

  // Handle filter changes
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
    updateURL(newFilters, 1);
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL(filters, page);
  };

  // Clear all filters
  const clearFilters = () => {
    const clearedFilters = {
      city: preselectedCity || '',
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      beds: '',
      baths: '',
      status: 'Active',
    };
    setFilters(clearedFilters);
    setCurrentPage(1);
    updateURL(clearedFilters, 1);
  };

  // Sync with URL changes (back/forward browser navigation)
  useEffect(() => {
    if (!showFilters) return;
    
    const city = preselectedCity || currentSearchParams.get('city') || '';
    const propertyType = currentSearchParams.get('propertyType') || '';
    const minPrice = currentSearchParams.get('minPrice') || '';
    const maxPrice = currentSearchParams.get('maxPrice') || '';
    const beds = currentSearchParams.get('beds') || '';
    const baths = currentSearchParams.get('baths') || '';
    const status = currentSearchParams.get('status') || 'Active';
    const page = parseInt(currentSearchParams.get('page') || '1', 10);

    setFilters({ city, propertyType, minPrice, maxPrice, beds, baths, status });
    setCurrentPage(page);
  }, [currentSearchParams, showFilters, preselectedCity]);

  // If using simple city view without filters
  if (!showFilters) {
    return (
      <>
        <PropertiesHero 
          title={heroTitle}
          subtitle={heroSubtitle}
        />
        
        <section className="py-12">
          <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
            <CityPropertiesView
              city={preselectedCity}
              showSearch={showCitySearch}
              variant={variant}
            />
          </div>
        </section>

        <FooterNew />
      </>
    );
  }

  // Full properties page with filters
  return (
    <>
      <PropertiesHero 
        title={heroTitle}
        subtitle={heroSubtitle}
      />
      
      <section className="py-12 bg-gray-50">
        <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PropertiesFilters
              filters={filters}
              serviceAreas={serviceAreas}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
          <CityPropertiesView
            city={filters.city}
            showSearch={false}
            variant={variant}
          />
        </div>
      </section>

      <FooterNew />
    </>
  );
};

export default EnhancedPropertiesPage;
