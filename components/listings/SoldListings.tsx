// Removed "use client"; This will become a Server Component
import React from "react"; // Removed useState, useRef
// Removed motion imports for now, will move to client component
import Link from "next/link";
import { groq } from "next-sanity"; // Import groq
import { client } from "@/lib/client"; // Import Sanity client
import { SanityListing } from "@/types/sanity"; // Import SanityListing type
// Import the new client component
import SoldListingsGridClient from "./SoldListingsGridClient";
import { SectionTitle } from "../ui/SectionTitle";

// Removed Dummy data

// Fetch sold listings from Sanity
async function getSoldListings(): Promise<SanityListing[]> {
	const query = groq`
    *[_type == "listing" && status == "sold" && defined(heroMedia.heroImage.asset._ref)] | order(price desc) { // Changed order to price desc
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
      // Add any other fields needed specifically for sold listings if required, e.g., a soldDate field if it exists in your schema
    }
  `;

	try {
		const listings = await client.fetch<SanityListing[]>(query);
		return listings || [];
	} catch (error) {
		console.error("Failed to fetch sold listings:", error);
		return [];
	}
}

interface SoldListingsProps {
	showAll?: boolean;
}

const ITEMS_PER_PAGE = 6;

// Removed animation variants - move to client component

// Refactored Server Component structure
const SoldListings: React.FC<SoldListingsProps> = async ({
	showAll = false
}) => {
	const allSoldListings = await getSoldListings();

	// If not showing all, limit to the first few (e.g., 4 as in the original dummy data)
	// const listingsToShow = showAll ? allSoldListings : allSoldListings.slice(0, 4); -> Logic moved to client

	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-36">
				<div className="space-y-16">
					{/* Header Section */}
					<div className="flex flex-col items-center justify-center">
						<SectionTitle
							title="Sold Properties"
							subtitle="Explore our portfolio of successfully sold properties. Each transaction represents our commitment to excellent service and achieving optimal results for our clients in New Jersey, WI."
							centered={true}
						/>
					</div>

					{/* Use the Client Component for the grid and pagination */}
					<SoldListingsGridClient
						listings={allSoldListings} // Pass all fetched listings
						showAll={showAll}
						itemsPerPage={ITEMS_PER_PAGE}
					/>

					{/* "View All" Button - Show only when NOT showing all */}
					{!showAll && (
						<div className="mt-12 text-center">
							<Link
								href="/listings/sold"
								className="inline-block px-8 py-3 border border-zinc-300 text-zinc-700 text-base tracking-wider font-light uppercase transition-all duration-300 hover:bg-zinc-50">
								View All Sold Properties
							</Link>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default SoldListings;

// Removed the rest of the old client component logic (pagination, etc.)
