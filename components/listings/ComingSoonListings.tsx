// Removed "use client"; This will become a Server Component
import React from "react"; // Removed useState, useRef
// Removed motion imports for now, will move to client component
import Link from "next/link";
// Remove unused Image import
import { groq } from "next-sanity"; // Import groq
import { client } from "@/lib/client"; // Import Sanity client
import { SanityListing } from "@/types/sanity"; // Import SanityListing type
// Import the new client component
import ComingSoonListingsGridClient from "./ComingSoonListingsGridClient";
import { SectionTitle } from "../ui/SectionTitle";

// Removed Dummy data

// Fetch coming soon listings from Sanity
async function getComingSoonListings(): Promise<SanityListing[]> {
	const query = groq`
    *[_type == "listing" && status == "coming-soon" && defined(heroMedia.heroImage.asset._ref)] | order(_createdAt desc) { // Filter by status 'coming-soon' and ensure heroImage exists, order by creation time
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
          asset { _ref }
        },
        thumbnail {
          alt,
          asset { _ref }
        }
      },
      status
      // Add any other fields needed specifically for coming soon listings if required, e.g., an availableDate field
    }
  `;

	try {
		const listings = await client.fetch<SanityListing[]>(query);
		return listings || [];
	} catch (error) {
		console.error("Failed to fetch coming soon listings:", error);
		return [];
	}
}

interface ComingSoonListingsProps {
	showAll?: boolean;
}

const ITEMS_PER_PAGE = 6;

// Removed animation variants - move to client component

// Refactored Server Component structure
const ComingSoonListings: React.FC<ComingSoonListingsProps> = async ({
	showAll = false
}) => {
	const allComingSoonListings = await getComingSoonListings();

	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-36">
				<div className="space-y-16">
					{/* Header Section */}
					<div className="flex flex-col items-center justify-center">
						<SectionTitle
							title="Coming Soon"
							subtitle="Preview our upcoming exceptional properties before they hit the market. These carefully selected homes represent the finest upcoming offerings in Lake Geneva area's most desirable locations."
							centered={true}
						/>
					</div>

					{/* Use the Client Component for the grid and pagination */}
					<ComingSoonListingsGridClient
						listings={allComingSoonListings} // Pass all fetched listings
						showAll={showAll}
						itemsPerPage={ITEMS_PER_PAGE}
					/>

					{/* "View All" Button - Show only when NOT showing all */}
					{!showAll && (
						<div className="mt-12 text-center">
							<Link
								href="/listings/coming-soon"
								className="inline-block px-8 py-3 border border-zinc-300 text-zinc-700 text-base tracking-wider font-light uppercase transition-all duration-300 hover:bg-zinc-50">
								View All Coming Soon
							</Link>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default ComingSoonListings;

// Removed the rest of the old client component logic (pagination, etc.)
