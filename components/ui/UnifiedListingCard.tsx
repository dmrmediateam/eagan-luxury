"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { SanityListing } from "@/types/sanity";
import { urlForImage } from "@/lib/sanity-utils";

// Database listing type
interface DatabaseListing {
  id: bigint | string;
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
    id: bigint | string;
    mediaUrl: string;
    order: number;
  }>;
  mls: {
    name: string;
  };
}

// Union type for both listing sources
type UnifiedListing = SanityListing | DatabaseListing;

export interface UnifiedListingCardProps {
  listing: UnifiedListing;
  index: number;
  isClickable?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  showAnimation?: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: custom * 0.1
    }
  })
};

// Type guard to check if listing is from Sanity
const isSanityListing = (listing: UnifiedListing): listing is SanityListing => {
  return 'slug' in listing && 'title' in listing;
};

// Type guard to check if listing is from Database
const isDatabaseListing = (listing: UnifiedListing): listing is DatabaseListing => {
  return 'listingKey' in listing && 'standardStatus' in listing;
};

const UnifiedListingCard = ({
  listing,
  index,
  isClickable = true,
  variant = 'default',
  showAnimation = true
}: UnifiedListingCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Extract unified data based on listing type
  const getUnifiedData = () => {
    if (isSanityListing(listing)) {
      // Sanity data structure
      const location = listing.address
        ? `${listing.address.region || ""}${listing.address.region && listing.address.state ? ", " : ""}${listing.address.state || ""}`
        : "Location Unknown";
      
      const imageObject = listing.heroMedia?.heroImage?.asset?._ref
        ? listing.heroMedia.heroImage
        : listing.heroMedia?.thumbnail?.asset?._ref
          ? listing.heroMedia.thumbnail
          : null;
      
      const imageUrl = imageObject
        ? urlForImage(imageObject as any).width(800).height(600).url()
        : null;
      
      const imageAlt = (imageObject as any)?.alt || `Photo of ${listing.title}`;

      return {
        title: listing.title || "Untitled Property",
        price: listing.price || 0,
        location,
        beds: listing.propertyDetails?.beds ?? 0,
        baths: listing.propertyDetails?.baths ?? 0,
        area: listing.propertyDetails?.sqft ?? 0,
        status: listing.status || "active",
        imageUrl,
        imageAlt,
        propertyType: listing.propertyDetails?.propertyType || "Residential",
        yearBuilt: listing.propertyDetails?.yearBuilt || null,
        linkUrl: listing.slug?.current ? `/listings/${listing.slug.current}` : "#",
        mls: "Sanity CMS"
      };
    } else if (isDatabaseListing(listing)) {
      // Database data structure
      const formatPrice = (price: any) => {
        if (!price || price === 0) return 0;
        return typeof price === 'string' ? parseFloat(price) : Number(price);
      };

      const totalBaths = listing.bathsFull + (listing.bathsHalf * 0.5);
      const primaryImage = listing.media?.[0]?.mediaUrl;

      return {
        title: listing.addressFull,
        price: formatPrice(listing.listPrice),
        location: `${listing.city}, ${listing.state} ${listing.postalCode}`,
        beds: listing.bedsTotal,
        baths: totalBaths,
        area: listing.livingArea || 0,
        status: listing.standardStatus.toLowerCase(),
        imageUrl: primaryImage,
        imageAlt: listing.addressFull,
        propertyType: listing.propertyType,
        yearBuilt: listing.yearBuilt,
        linkUrl: `/listing/${encodeURIComponent(listing.listingKey)}`,
        mls: listing.mls?.name || 'MLS'
      };
    }

    // Fallback
    return {
      title: "Property",
      price: 0,
      location: "Unknown",
      beds: 0,
      baths: 0,
      area: 0,
      status: "active",
      imageUrl: null,
      imageAlt: "Property image",
      propertyType: "Residential",
      yearBuilt: null,
      linkUrl: "#",
      mls: "Unknown"
    };
  };

  const data = getUnifiedData();

  // Format price for display
  const formatPriceDisplay = (price: number) => {
    if (!price || price === 0) return "Price on request";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get status badge styling
  const getStatusBadgeClass = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      case 'coming-soon':
      case 'coming soon':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get image overlay classes based on status
  const getImageClasses = (status: string) => {
    const baseClasses = "object-cover w-full h-full transition-all duration-700 ease-in-out";
    const normalizedStatus = status.toLowerCase();
    return normalizedStatus === "sold"
      ? `${baseClasses} saturate-0 group-hover:saturate-100`
      : baseClasses;
  };

  const getOverlayClasses = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case "active":
        return "bg-black/20 transition-all duration-500 ease-in-out group-hover:bg-black/10";
      case "coming-soon":
      case "coming soon":
        return "bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-black/20";
      case "sold":
        return "bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/30";
      default:
        return "bg-black/20 transition-all duration-500 ease-in-out group-hover:bg-black/10";
    }
  };

  // Variant-specific styling
  const getCardClasses = () => {
    const baseClasses = "group relative overflow-hidden bg-white shadow-sm transition-all duration-500 flex flex-col h-full hover:shadow-lg";
    
    switch (variant) {
      case 'compact':
        return `${baseClasses} rounded-lg hover:scale-[1.02]`;
      case 'featured':
        return `${baseClasses} rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02]`;
      case 'default':
      default:
        return `${baseClasses} hover:shadow-xl`;
    }
  };

  const getImageHeight = () => {
    switch (variant) {
      case 'compact':
        return 'h-48 md:h-64';
      case 'featured':
        return 'h-64 md:h-80 lg:h-96';
      case 'default':
      default:
        return 'h-64 lg:h-80';
    }
  };

  const CardContent = () => (
    <>
      <div className={`relative ${getImageHeight()} w-full overflow-hidden`}>
        <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-1000 ease-out">
          <Image
            src={data.imageUrl || '/house-906644.jpg'}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={getImageClasses(data.status)}
            loading="lazy"
            onError={(e) => {
              // Fallback to house image if the original image fails to load
              const target = e.target as HTMLImageElement;
              if (target.src !== '/house-906644.jpg') {
                target.src = '/house-906644.jpg';
              }
            }}
          />
        </div>
        <div className={`absolute inset-0 ${getOverlayClasses(data.status)}`}></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded text-sm font-medium ${getStatusBadgeClass(data.status)}`}>
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </span>
        </div>

        {/* Price Badge */}
        {variant !== 'compact' && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">
            {formatPriceDisplay(data.price)}
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-medium text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors ${
            variant === 'featured' ? 'text-xl' : 'text-lg'
          }`}>
            {data.title}
          </h3>
          {variant === 'compact' && (
            <p className="font-medium text-gray-900 text-lg ml-3 shrink-0">
              {formatPriceDisplay(data.price)}
            </p>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-3">{data.location}</p>
        
        {variant !== 'compact' && (
          <p className="text-sm text-gray-500 mb-3">{data.propertyType}</p>
        )}

        {/* Property Details */}
        <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
          {data.beds > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{data.beds} bed{data.beds !== 1 ? 's' : ''}</span>
            </div>
          )}
          {data.baths > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{data.baths} bath{data.baths !== 1 ? 's' : ''}</span>
            </div>
          )}
          {data.area > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{data.area.toLocaleString()} sq ft</span>
            </div>
          )}
        </div>

        {/* Additional Info */}
        {variant !== 'compact' && (
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto border-t border-gray-100 pt-3">
            <span>
              {data.yearBuilt ? `Built ${data.yearBuilt}` : 'Year Built N/A'}
            </span>
            <span className="truncate ml-2">
              {data.mls}
            </span>
          </div>
        )}
      </div>
    </>
  );

  const cardElement = (
    <div className={getCardClasses()}>
      {isClickable ? (
        <Link href={data.linkUrl} className="block h-full cursor-pointer">
          <CardContent />
        </Link>
      ) : (
        <div className="h-full flex flex-col">
          <CardContent />
        </div>
      )}
    </div>
  );

  if (!showAnimation) {
    return <div ref={ref}>{cardElement}</div>;
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cardElement}
    </motion.div>
  );
};

export default UnifiedListingCard;
