"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SimilarListingsProps {
  listings: any[];
  currentListing: any;
}

export function SimilarListings({ listings, currentListing }: SimilarListingsProps) {
  if (!listings || listings.length === 0) {
    return null;
  }

  const formatPrice = (price?: any) => {
    if (!price) return "Price on request"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(price))
  };

  const formatAddress = (listing: any) => {
    return `${listing.addressFull}, ${listing.city}, ${listing.state} ${listing.postalCode}`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4">Similar Properties in {currentListing.city}</h2>
          <p className="text-[#222223]/70 max-w-2xl mx-auto">
            Discover other exceptional properties in {currentListing.city} that might interest you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((listing) => (
            <Link 
              key={listing.id} 
              href={`/listing/${listing.listingKey}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {listing.media && listing.media.length > 0 ? (
                  <Image
                    src={listing.media[0].url}
                    alt={formatAddress(listing)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
                  {formatPrice(listing.listPrice)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-medium text-[#222223] mb-2 line-clamp-1">
                  {formatAddress(listing)}
                </h3>
                <div className="flex items-center justify-between text-sm text-[#222223]/70">
                  <span>{listing.bedsTotal} Beds</span>
                  <span>{listing.bathsFull} Baths</span>
                  <span>{listing.livingArea?.toLocaleString()} Sq Ft</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/listings/active"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
          >
            View All Properties
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
