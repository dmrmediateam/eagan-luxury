"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import UnifiedListingCard from "@/components/ui/UnifiedListingCard";

// More subtle and sophisticated animation for cards
const cardVariants = {
	hidden: { opacity: 0 },
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			duration: 1.3,
			delay: custom * 0.15,
			ease: [0.22, 1, 0.36, 1] // Smoother ease curve for more elegant motion
		}
	})
};

// Button animation variant
const buttonVariant = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: 0.8,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

// Database listing interface - matching UnifiedListingCard expected structure
interface Listing {
	id: string | bigint;
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
		id: string | bigint;
		mediaUrl: string;
		order: number;
	}>;
	mls: {
		name: string;
	};
}

export function OurListings() {
	const [listings, setListings] = useState<Listing[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchListings() {
			try {
				// First try to fetch by highest price
				let response = await fetch('/api/listings?status=Active&limit=6&sort=price_desc');
				if (response.ok) {
					const data = await response.json();
					// Handle both array and object responses
					const dbListings = Array.isArray(data) ? data : data.listings || [];
					
					// Check if any listings have prices, if not fall back to date sorting
					const hasValidPrices = dbListings.some((listing: Listing) => listing.listPrice && listing.listPrice > 0);
					
					if (!hasValidPrices && dbListings.length > 0) {
						// Fall back to newest listings if no prices are available
						response = await fetch('/api/listings?status=Active&limit=6&sort=date_desc');
						if (response.ok) {
							const fallbackData = await response.json();
							const fallbackListings = Array.isArray(fallbackData) ? fallbackData : fallbackData.listings || [];
							setListings(fallbackListings);
						} else {
							setListings(dbListings); // Use original response if fallback fails
						}
					} else {
						setListings(dbListings);
					}
				} else {
					console.error('Failed to fetch listings');
				}
			} catch (error) {
				console.error('Error fetching listings:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchListings();
	}, []);

	// Render loading cards using UnifiedListingCard style
	const renderLoadingCards = () => {
		return Array.from({ length: 6 }).map((_, index) => (
			<motion.div
				key={`loading-${index}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				custom={index}
				variants={cardVariants}
				className="group relative overflow-hidden bg-white shadow-sm transition-all duration-500 flex flex-col h-full animate-pulse"
			>
				<div className="relative h-64 lg:h-80 w-full overflow-hidden bg-gray-200" />
				<div className="p-4 md:p-6 flex flex-col flex-grow">
					<div className="h-6 bg-gray-200 rounded mb-3" />
					<div className="h-4 bg-gray-200 rounded mb-3" />
					<div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
					<div className="flex justify-between text-sm text-gray-400 mt-auto">
						<div className="h-4 bg-gray-200 rounded w-1/4" />
						<div className="h-4 bg-gray-200 rounded w-1/4" />
						<div className="h-4 bg-gray-200 rounded w-1/4" />
					</div>
				</div>
			</motion.div>
		));
	};

	// Render listing cards using UnifiedListingCard
	const renderListingCards = () => {
		return listings.map((listing, index) => (
			<motion.div
				key={listing.id}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				custom={index}
				variants={cardVariants}
				className="h-full"
			>
				<UnifiedListingCard
					listing={listing}
					index={index}
					variant="default"
					isClickable={true}
					showAnimation={false}
				/>
			</motion.div>
		));
	};

	return (
		<section className="bg-white py-24" id="our-listings">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				{/* Section Title using the new component */}
				<SectionTitle
					title="New Jersey Properties"
					subtitle="Discover our most exclusive and high-value properties in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington"
					className="mb-20"
				/>

				{/* Listings Grid - 3x2 grid (3 columns, 2 rows, 6 properties) */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{loading && renderLoadingCards()}
					{!loading && listings.length > 0 && renderListingCards()}
					{!loading && listings.length === 0 && renderLoadingCards()}
				</div>

				{/* View All Button */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={buttonVariant}
					className="flex justify-center mt-20">
					<Link
						href="/properties"
						className="inline-block px-10 py-4 bg-secondary text-[#222223] hover:bg-secondary-dark transition-colors duration-500 text-sm uppercase tracking-wider font-sans">
						View All Properties
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
