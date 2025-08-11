// Removed "use client"; This is now a Server Component
import React from "react";
// Removed unused imports
// import Image from "next/image";
import { client } from "@/lib/client"; // Import Sanity client
import { SanityListing } from "@/types/sanity"; // Import the Sanity type
import ListingsGridClient from "./ListingsGridClient"; // Import the new client component
import { SectionTitle } from "@/components/ui/SectionTitle"; // Import SectionTitle component
import { groq } from "next-sanity";

// Removed dummy data

interface FeaturedListingsProps {
	showAll?: boolean; // Determines if this is the main listings page or a featured section
	limit?: number; // Optional limit for featured section
}

const ITEMS_PER_PAGE = 6; // Keep this for the client component default

// Fetch data from Sanity
async function getActiveListings(limit?: number): Promise<SanityListing[]> {
	const query = groq`
    *[_type == "listing" && status == "active" && defined(heroMedia.heroImage.asset._ref)] | order(price desc) {
      _id,
      title,
      slug,
      price,
      address {
        street,
        region,
        state,
        zipCode
      },
      propertyDetails {
        beds,
        baths,
        sqft
      },
      heroMedia {
        heroImage {
          alt,
          asset {
            _ref
          }
        },
        thumbnail {
          alt,
          asset {
            _ref
          }
        }
      },
      status
    }${limit ? `[0...${limit}]` : ""}
  `;

	try {
		const listings = await client.fetch<SanityListing[]>(query);
		return listings || []; // Ensure returning an array
	} catch (error) {
		console.error("Failed to fetch listings:", error);
		return []; // Return empty array on error
	}
}

// Refactored Server Component
const FeaturedListings: React.FC<FeaturedListingsProps> = async ({
	showAll = false,
	limit
}) => {
	const listings = await getActiveListings(showAll ? undefined : limit);

	// Determine the number of items per page for the client component
	const itemsPerPage = showAll ? ITEMS_PER_PAGE : listings.length;

	return (
		<div className="bg-white">
			<section
				id="featured-listings"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-36">
				{/* No motion.div wrapper here, just the content container */}
				<div className="space-y-16">
					{/* Use the SectionTitle component instead of FeaturedListingsHeader */}
					<SectionTitle
						title="Featured Properties"
						subtitle="Immerse yourself in our curated selection of exceptional properties. Each listing represents the finest in Lake Geneva area living, showcasing the natural beauty and sophisticated lifestyle of the Blue Ridge Mountains."
						centered={true}
					/>

					{/* Pass fetched listings to the Client Component */}
					<ListingsGridClient
						listings={listings}
						showAll={showAll}
						itemsPerPage={itemsPerPage}
					/>

					{/* Pagination is now handled inside ListingsGridClient */}
				</div>
			</section>
		</div>
	);
};

export default FeaturedListings;
