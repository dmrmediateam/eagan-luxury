"use client";

import UnifiedListingCard from '@/components/ui/UnifiedListingCard';
import type { SanityListing } from "@/types/sanity";

// Export the ListingStatus type for use in other components
export type ListingStatus = "active" | "coming-soon" | "sold";

export interface ListingCardProps {
	listing: SanityListing;
	index: number;
	isClickable?: boolean;
	variant?: 'default' | 'compact' | 'featured';
}

const ListingCard = ({
	listing,
	index,
	isClickable = true,
	variant = 'default'
}: ListingCardProps) => {
	return (
		<UnifiedListingCard
			listing={listing}
			index={index}
			variant={variant}
			isClickable={isClickable}
			showAnimation={true}
		/>
	);
};

export default ListingCard;
