"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropertiesGrid from './PropertiesGrid';
import { ServiceArea, getAllServiceAreas } from '@/lib/cheryl-service-areas';

interface CityPropertiesViewProps {
  city?: string;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'featured';
  propertyType?: string;
}

const CityPropertiesView = ({ 
  city, 
  showSearch = false, 
  title,
  subtitle,
  variant = 'default',
  propertyType
}: CityPropertiesViewProps) => {
  const [selectedCity, setSelectedCity] = useState(city || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Get all service areas for autocomplete
  const serviceAreas = getAllServiceAreas();
  
  // Filter cities based on search term
  const filteredCities = serviceAreas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 10); // Limit to 10 results

  // Reset page when city changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCity]);

  // Filter configuration for the properties grid
  const filters = {
    city: selectedCity,
    propertyType: propertyType || '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
    status: 'Active',
  };

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    setSearchTerm(cityName);
    setShowDropdown(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setShowDropdown(true);
    
    // If the value exactly matches a city, select it
    const exactMatch = serviceAreas.find(area => 
      area.name.toLowerCase() === value.toLowerCase()
    );
    if (exactMatch) {
      setSelectedCity(exactMatch.name);
    } else if (value === '') {
      setSelectedCity('');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCity('');
    setShowDropdown(false);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-900"
          >
            {title}
          </motion.h1>
        )}
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* City Search */}
      {showSearch && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto relative"
        >
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search by city..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent pr-10"
            />
            
            {/* Search Icon */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {searchTerm ? (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </div>

          {/* Dropdown */}
          {showDropdown && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {filteredCities.map((area) => (
                <button
                  key={area.slug}
                  onClick={() => handleCitySelect(area.name)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-yellow-50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {area.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      {area.isPrimary && (
                        <span className="text-yellow-500 text-sm">⭐</span>
                      )}
                      <span className="text-sm text-gray-500">
                        {area.county} County
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Current City Display */}
      {selectedCity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">
              Showing properties in {selectedCity}
            </span>
            <button
              onClick={clearSearch}
              className="ml-2 text-yellow-600 hover:text-yellow-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* Properties Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <PropertiesGrid
          filters={filters}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          variant={variant}
        />
      </motion.div>
    </div>
  );
};

export default CityPropertiesView;
