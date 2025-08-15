"use client";

import React from 'react';

interface PropertyDetailsProps {
  listing: any;
}

export function PropertyDetails({ listing }: PropertyDetailsProps) {
  const formatPrice = (price?: any) => {
    if (!price) return "Price on request"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(price))
  };

  return (
    <div>
      <h3 className="text-2xl font-serif font-light mb-6">Property Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Property Type:</span>
            <span className="text-[#222223] font-medium">{listing.propertyType}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Style:</span>
            <span className="text-[#222223] font-medium">{listing.propertySubType}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Year Built:</span>
            <span className="text-[#222223] font-medium">{listing.yearBuilt}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Lot Size:</span>
            <span className="text-[#222223] font-medium">{listing.lotSizeAcres ? Number(listing.lotSizeAcres).toString() : 'N/A'} acres</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">MLS #:</span>
            <span className="text-[#222223] font-medium">{listing.listingId}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">List Date:</span>
            <span className="text-[#222223] font-medium">
              {listing.listDate ? new Date(listing.listDate).toLocaleDateString() : 'N/A'}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Bedrooms:</span>
            <span className="text-[#222223] font-medium">{listing.bedsTotal}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Bathrooms:</span>
            <span className="text-[#222223] font-medium">{listing.bathsFull} full, {listing.bathsHalf} half</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Square Feet:</span>
            <span className="text-[#222223] font-medium">{listing.livingArea?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Status:</span>
            <span className="text-[#222223] font-medium">{listing.standardStatus}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">List Price:</span>
            <span className="text-[#222223] font-medium">{formatPrice(listing.listPrice)}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-[#222223]/70">Price per Sq Ft:</span>
            <span className="text-[#222223] font-medium">
              {listing.listPrice && listing.livingArea ? `$${Math.round(Number(listing.listPrice) / listing.livingArea)}` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
