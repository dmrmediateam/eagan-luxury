"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";

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

// Database listing interface
interface Listing {
	id: string;
	listingKey: string;
	addressFull: string;
	city: string;
	state: string;
	postalCode: string;
	listPrice: number;
	bedsTotal: number;
	bathsFull: number;
	livingArea: number;
	media: Array<{
		id: string;
		url: string;
		order: number;
	}>;
}

export function OurListings() {
	const [listings, setListings] = useState<Listing[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchListings() {
			try {
				const response = await fetch('/api/listings?status=Active&limit=4');
				if (response.ok) {
					const dbListings = await response.json();
					setListings(dbListings);
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

	// Format price
	const formatPrice = (price?: number) => {
		if (!price) return "";

		// Format the price with commas
		const formatted = new Intl.NumberFormat("en-US", {
			maximumFractionDigits: 0
		}).format(price);

		// For luxury properties over a million, add special formatting
		if (price >= 1000000) {
			const parts = formatted.split(",");
			if (parts.length >= 2) {
				// Return millions with elegant spacing
				return `${parts[0]}.${parts[1].substring(0, 1)} Million`;
			}
		}

		// Return the standard formatted price for properties under a million
		return formatted;
	};

	// Format address
	const formatAddress = (listing: Listing) => {
		return `${listing.addressFull}, ${listing.city}, ${listing.state} ${listing.postalCode}`;
	};

	// Render loading cards
	const renderLoadingCards = () => {
		return Array.from({ length: 4 }).map((_, index) => (
			<motion.div
				key={`loading-${index}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				custom={index + 2}
				variants={cardVariants}
				className="bg-white overflow-hidden border border-weichert-lightgray shadow-[0_5px_20px_rgba(0,0,0,0.03)] animate-pulse">
				<div className="relative h-80 md:h-96 lg:h-[28rem] xl:h-[30rem] 2xl:h-[32rem] bg-gray-200" />
				<div className="p-8 lg:p-10 border-t border-weichert-lightgray">
					<div className="h-6 bg-gray-200 rounded mb-3" />
					<div className="h-4 bg-gray-200 rounded mb-6" />
					<div className="h-4 bg-gray-200 rounded w-1/3" />
				</div>
			</motion.div>
		));
	};

	// Render listing cards
	const renderListingCards = () => {
		return listings.map((listing, index) => (
			<motion.div
				key={listing.id}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				custom={index + 2}
				variants={cardVariants}
				className="bg-white overflow-hidden border border-weichert-lightgray shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 group cursor-pointer">
				{/* Property Image - Taller on larger screens */}
				<Link href={`/listing/${listing.listingKey}`}>
					<div className="relative h-80 md:h-96 lg:h-[28rem] xl:h-[30rem] 2xl:h-[32rem] overflow-hidden">
						<Image
							src={listing.media[0]?.url || '/chery-towey.jpg'}
							alt={formatAddress(listing)}
							className="object-cover object-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
							width={800}
							height={600}
						/>
						<div className="absolute top-0 left-0 m-5 py-3 px-5 bg-white/95 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-500">
							<span className="text-secondary font-serif text-xs uppercase tracking-widest mb-1 block font-light">
								Offered at
							</span>
							<div className="flex items-baseline">
								<span className="text-secondary text-xl mr-1 font-medium">
									$
								</span>
								<p className="text-[#222223] font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
									{formatPrice(listing.listPrice)}
								</p>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
					</div>

					{/* Property Details */}
					<div className="p-8 lg:p-10 border-t border-weichert-lightgray">
						<h3 className="text-[#222223] font-serif text-xl md:text-2xl mb-3 truncate font-light">
							{formatAddress(listing)}
						</h3>

						<p className="text-[#222223]/70 mb-6 font-sans text-sm">
							{listing.bedsTotal} Beds | {listing.bathsFull} Baths | {listing.livingArea?.toLocaleString()} Sq Ft
						</p>

						<span className="inline-flex items-center text-secondary hover:text-secondary-dark transition-colors duration-300 text-sm uppercase tracking-wider font-sans gap-1">
							<span>View Details</span>
							<span className="inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
								→
							</span>
						</span>
					</div>
				</Link>
			</motion.div>
		));
	};

	// Render placeholder cards
	const renderPlaceholderCards = () => {
		return Array.from({ length: 4 }).map((_, index) => (
			<motion.div
				key={`placeholder-${index}`}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				custom={index + 2}
				variants={cardVariants}
				className="bg-white overflow-hidden rounded-sm border border-weichert-lightgray shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 group">
				{/* Placeholder Image - Taller on larger screens */}
				<div className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden bg-[#F5F5F5]">
					<div className="absolute top-0 left-0 m-5 py-3 px-5 bg-white/95 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-500">
						<span className="text-[#B08D57] font-serif text-xs uppercase tracking-widest mb-1 block font-light">
							Offered at
						</span>
						<div className="flex items-baseline">
							<span className="text-[#B08D57] text-xl mr-1 font-medium">
								$
							</span>
							<p className="text-[#1A1A1A] font-serif text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
								3.5 Million
							</p>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
				</div>

				{/* Placeholder Details */}
				<div className="p-8 lg:p-10 border-t border-[#F0F0F0]">
					<h3 className="text-[#1A1A1A] font-serif text-xl md:text-2xl mb-3 truncate font-light">
						Luxury Property, New York
					</h3>

					<p className="text-[#2B2B2B]/70 mb-6 font-sans text-sm">
						4 Beds | 3.5 Baths | 3,200 Sq Ft
					</p>

					<Link
						href="/listings/active"
						className="inline-flex items-center text-weichert-yellow hover:text-weichert-darkyellow transition-colors duration-300 text-sm uppercase tracking-wider font-sans group-hover:gap-1">
						<span>View Details</span>
						<span className="inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
							→
						</span>
					</Link>
				</div>
			</motion.div>
		));
	};

	return (
		<section className="bg-white py-24" id="our-listings">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				{/* Section Title using the new component */}
				<SectionTitle
					title="Cheryl&apos;s Featured Properties"
					subtitle="Discover exceptional properties in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington"
					className="mb-20"
				/>

				{/* Listings Grid - Changed to 2x2 grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
					{loading && renderLoadingCards()}
					{!loading && listings.length > 0 && renderListingCards()}
					{!loading && listings.length === 0 && renderPlaceholderCards()}
				</div>

				{/* View All Button */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={buttonVariant}
					className="flex justify-center mt-20">
					<Link
						href="/listings/active"
						className="inline-block px-10 py-4 bg-secondary text-[#222223] hover:bg-secondary-dark transition-colors duration-500 text-sm uppercase tracking-wider font-sans">
						View All Listings
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
