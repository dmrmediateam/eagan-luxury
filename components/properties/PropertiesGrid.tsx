"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

interface Property {
  id: bigint;
  listingKey: string;
  addressFull: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  propertyType: string;
  listPrice: any;
  bedsTotal: number;
  bathsFull: number;
  bathsHalf: number;
  livingArea: number;
  yearBuilt: number;
  standardStatus: string;
  media: Array<{
    id: bigint;
    mediaUrl: string;
    order: number;
  }>;
  mls: {
    name: string;
  };
}

interface Filters {
  city: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  baths: string;
  status: string;
}

interface PropertiesGridProps {
  filters: Filters;
  currentPage: number;
  onPageChange: (page: number) => void;
  variant?: 'default' | 'compact' | 'featured';
}

const ITEMS_PER_PAGE = 12;

const PropertiesGrid = ({ filters, currentPage, onPageChange, variant = 'default' }: PropertiesGridProps) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Fetch properties based on filters
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams();
        
        // Add status filter (default to Active)
        queryParams.set('status', filters.status || 'Active');
        
        // Add other filters if they exist
        if (filters.city) queryParams.set('city', filters.city);
        if (filters.propertyType) queryParams.set('propertyType', filters.propertyType);
        if (filters.minPrice) queryParams.set('minPrice', filters.minPrice);
        if (filters.maxPrice) queryParams.set('maxPrice', filters.maxPrice);
        if (filters.beds) queryParams.set('beds', filters.beds);
        if (filters.baths) queryParams.set('baths', filters.baths);
        
        // Add pagination
        queryParams.set('limit', ITEMS_PER_PAGE.toString());
        queryParams.set('offset', ((currentPage - 1) * ITEMS_PER_PAGE).toString());

        const response = await fetch(`/api/listings?${queryParams.toString()}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch properties: ${response.statusText}`);
        }

        const data = await response.json();
        
        setProperties(data.listings || []);
        setTotalCount(data.totalCount || 0);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch properties');
        setProperties([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters, currentPage]);

  // Calculate pagination
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let middleStart = Math.max(2, currentPage - 1);
      let middleEnd = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage <= 2) middleEnd = 3;
      if (currentPage >= totalPages - 1) middleStart = totalPages - 2;
      if (middleStart > 2) pages.push('...');
      for (let i = middleStart; i <= middleEnd; i++) pages.push(i);
      if (middleEnd < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Scroll to top of grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Properties</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Results count */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-light text-gray-900">
            Properties Available
          </h2>
          <p className="text-gray-600 mt-1">
            {totalCount === 0 ? 'No properties found' : 
             totalCount === 1 ? '1 property found' : 
             `${totalCount.toLocaleString()} properties found`}
          </p>
        </div>
        
        {totalPages > 1 && (
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>

      {/* Properties Grid */}
      {properties.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.listingKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard property={property} index={index} variant={variant} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No Properties Found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12">
          <nav className="inline-flex items-center space-x-2" aria-label="Pagination">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 text-sm ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors`}
              aria-label="Previous page"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => {
                  if (typeof page === 'number') handlePageChange(page);
                }}
                disabled={page === '...'}
                className={`w-8 h-8 flex items-center justify-center text-sm font-light ${
                  page === currentPage
                    ? 'text-gray-800 border-b border-gray-800'
                    : page === '...'
                      ? 'text-gray-400'
                      : 'text-gray-500 hover:text-gray-700'
                } transition-all duration-300`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 text-sm ${
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors`}
              aria-label="Next page"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default PropertiesGrid;
