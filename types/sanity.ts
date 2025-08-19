import type { ImageAsset, Slug } from "@sanity/types";

// Extends the basic Sanity ImageAsset type to potentially include an alt field
// This depends on how you've structured your 'image' type in Sanity
export interface SanityImageWithAlt extends ImageAsset {
	alt?: string;
}

// Defines the expected structure of a Listing document fetched from Sanity
export interface SanityListing {
	_id: string; // Unique identifier for the document
	title?: string; // Property name
	slug?: Slug; // URL-friendly identifier
	price?: number; // Listing price
	address?: {
		// Address object
		street?: string;
		region?: string; // e.g., Calistoga, New Jersey
		state?: string;
		zipCode?: string;
	};
	propertyDetails?: {
		// Basic property specifications
		beds?: number; // Bedrooms
		baths?: number; // Bathrooms
		sqft?: number; // Square footage
	};
	heroMedia?: {
		// Featured media object
		// Expecting image fields to be objects containing an asset reference
		heroImage?: { asset?: SanityImageWithAlt };
		thumbnail?: { asset?: SanityImageWithAlt };
	};
	status?: "active" | "coming-soon" | "sold"; // Listing status
}
