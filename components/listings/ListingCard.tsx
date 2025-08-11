"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { SanityListing, SanityImageWithAlt } from "@/types/sanity";
import { urlForImage } from "@/lib/sanity-utils";

// Export the ListingStatus type for use in other components
export type ListingStatus = "active" | "coming-soon" | "sold";

export interface ListingCardProps {
	listing: SanityListing;
	index: number;
	isClickable?: boolean;
}

const fadeIn = {
	hidden: { opacity: 0 },
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			duration: 1.2,
			ease: [0.25, 0.1, 0.25, 1],
			delay: custom * 0.1
		}
	})
};

const ListingCard = ({
	listing,
	index,
	isClickable = true
}: ListingCardProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const {
		title = "Untitled Property",
		slug,
		price = 0,
		address,
		propertyDetails,
		heroMedia,
		status = "active"
	} = listing;

	const location = address
		? `${address.region || ""}${address.region && address.state ? ", " : ""}${
				address.state || ""
			}`
		: "Location Unknown";

	// Determine the primary image object to use (hero or thumbnail)
	const imageObject = heroMedia?.heroImage?.asset?._ref
		? heroMedia.heroImage // Use the whole heroImage object
		: heroMedia?.thumbnail?.asset?._ref
			? heroMedia.thumbnail // Fallback to the whole thumbnail object
			: null;

	// Build URL from the selected image object
	const imageUrl = imageObject
		? urlForImage(imageObject as SanityImageWithAlt) // Pass the image object
				.width(800)
				.height(600)
				.url()
		: "/placeholder.png"; // Fallback placeholder

	// Get alt text from the selected image object, or generate a default
	const imageAlt =
		(imageObject as SanityImageWithAlt)?.alt || `Photo of ${title}`;

	const beds = propertyDetails?.beds ?? 0;
	const baths = propertyDetails?.baths ?? 0;
	const area = propertyDetails?.sqft ?? 0;

	const getImageClasses = () => {
		const baseClasses =
			"object-cover w-full h-full transition-all duration-700 ease-in-out";
		return status === "sold"
			? `${baseClasses} saturate-0 group-hover:saturate-100`
			: baseClasses;
	};

	const getOverlayClasses = () => {
		switch (status) {
			case "active":
				return "bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-black/20";
			case "coming-soon":
				return "bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/30";
			case "sold":
				return "bg-black/50 transition-all duration-500 ease-in-out group-hover:bg-black/35";
			default:
				return "bg-black/30 transition-all duration-500 ease-in-out group-hover:bg-black/20";
		}
	};

	const CardContent = () => (
		<>
			<div className="relative h-96 lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
				<div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-1000 ease-out">
					<Image
						src={imageUrl}
						alt={imageAlt}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className={getImageClasses()}
						loading="lazy"
					/>
				</div>
				<div
					className={`absolute inset-0 ${getOverlayClasses()}`}></div>
			</div>
			<div className="p-6 flex flex-col flex-grow">
				<div className="flex items-start justify-between mb-3">
					<h3 className="text-xl font-light text-zinc-800 line-clamp-1">
						{title}
					</h3>
					<p className="font-light text-black text-xl lg:text-2xl ml-3 shrink-0">
						{price.toLocaleString("en-US", {
							style: "currency",
							currency: "USD",
							minimumFractionDigits: 0
						})}
					</p>
				</div>
				<p className="mb-3 text-sm text-zinc-600">{location}</p>

				<div className="flex items-center justify-between text-sm text-zinc-600 mt-auto border-t border-zinc-100 pt-4">
					<div className="flex items-center space-x-6">
						<div className="flex items-center space-x-1.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							<span>{beds} beds</span>
						</div>
						<div className="flex items-center space-x-1.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span>{baths} baths</span>
						</div>
					</div>
					<div className="flex items-center space-x-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
							/>
						</svg>
						<span>
							{area > 0
								? `${area.toLocaleString()} sq ft`
								: "N/A"}
						</span>
					</div>
				</div>
			</div>
		</>
	);

	const linkUrl = slug?.current ? `/listings/${slug.current}` : "#";

	return (
		<motion.div
			ref={ref}
			custom={index}
			variants={fadeIn}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			className="group relative overflow-hidden bg-white shadow-lg transition-all duration-500 flex flex-col h-full hover:shadow-xl">
			{isClickable ? (
				<Link href={linkUrl} className="block h-full cursor-pointer">
					<CardContent />
				</Link>
			) : (
				<div className="h-full flex flex-col">
					<CardContent />
				</div>
			)}
		</motion.div>
	);
};

export default ListingCard;
