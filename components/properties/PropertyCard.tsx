"use client";

import UnifiedListingCard from '@/components/ui/UnifiedListingCard';

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

interface PropertyCardProps {
  property: Property;
  index?: number;
  variant?: 'default' | 'compact' | 'featured';
}

const PropertyCard = ({ property, index = 0, variant = 'compact' }: PropertyCardProps) => {
  return (
    <UnifiedListingCard
      listing={property}
      index={index}
      variant={variant}
      isClickable={true}
      showAnimation={true}
    />
  );
};

export default PropertyCard;
