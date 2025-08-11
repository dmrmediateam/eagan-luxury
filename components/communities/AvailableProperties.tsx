"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ListingCard from "../listings/ListingCard";
import type { ListingStatus } from "../listings/ListingCard";
import type { SanityImageWithAlt } from "@/types/sanity";

// Interface for the component props
interface AvailablePropertiesProps {
	communityName: string;
	communitySlug: string;
}

// Dummy data for available properties in the area
// This would be replaced with IDX Broker API data in production
const generateDummyProperties = (communityName: string) => [
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-1`,
		title: `${communityName} Luxury Estate`,
		price: "$1,250,000",
		location: `${communityName}, CA`,
		beds: 4,
		baths: 3,
		area: 3200,
		image: "/media/gr1.jpg",
		status: "active" as ListingStatus
	},
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-2`,
		title: `${communityName} Modern Retreat`,
		price: "$895,000",
		location: `${communityName}, CA`,
		beds: 3,
		baths: 2,
		area: 2400,
		image: "/media/gr2.jpg",
		status: "active" as ListingStatus
	},
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-3`,
		title: `${communityName} Vineyard Estate`,
		price: "$2,450,000",
		location: `${communityName}, CA`,
		beds: 5,
		baths: 4,
		area: 4800,
		image: "/media/gr3.jpg",
		status: "active" as ListingStatus
	},
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-4`,
		title: `${communityName} Hillside View`,
		price: "$1,750,000",
		location: `${communityName}, CA`,
		beds: 4,
		baths: 3,
		area: 3600,
		image: "/media/gr4.jpg",
		status: "active" as ListingStatus
	},
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-5`,
		title: `${communityName} Downtown Condo`,
		price: "$750,000",
		location: `${communityName}, CA`,
		beds: 2,
		baths: 2,
		area: 1800,
		image: "/media/gr5.jpg",
		status: "active" as ListingStatus
	},
	{
		id: `${communityName.toLowerCase().replace(/\s+/g, "-")}-property-6`,
		title: `${communityName} Ranch Estate`,
		price: "$3,250,000",
		location: `${communityName}, CA`,
		beds: 6,
		baths: 5,
		area: 5200,
		image: "/media/gr6.jpg",
		status: "active" as ListingStatus
	}
];

const ITEMS_PER_PAGE = 4;

const AvailableProperties: React.FC<AvailablePropertiesProps> = ({
	communityName
	/* communitySlug */
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const gridRef = useRef<HTMLDivElement>(null);

	// Generate dummy properties based on community name
	const allProperties = generateDummyProperties(communityName);

	// Calculate pagination
	const totalPages = Math.ceil(allProperties.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentProperties = allProperties.slice(startIndex, endIndex);

	// Animation variants for header elements
	const headerContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	};

	const headerItemVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "6rem",
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeInOut"
			}
		}
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.4,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	// Animation variants for page transitions
	const pageTransition = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1]
			}
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	// Pagination container animation
	const paginationContainerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
				staggerChildren: 0.05,
				delayChildren: 0.1
			}
		}
	};

	// Pagination button animation
	const paginationButtonVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.3,
				ease: [0.22, 1, 0.36, 1]
			}
		},
		tap: {
			scale: 0.95,
			transition: {
				duration: 0.15,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	// Handle page navigation
	const goToPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);

		// Smooth scroll to the top of the grid
		if (gridRef.current) {
			const yOffset = -300; // Scroll to 300px above the grid for better context
			const y =
				gridRef.current.getBoundingClientRect().top +
				window.pageYOffset +
				yOffset;

			window.scrollTo({
				top: y,
				behavior: "smooth"
			});
		}
	};

	// Generate page numbers
	const getPageNumbers = () => {
		const pageNumbers = [];
		const maxPageButtons = 3; // Reduced for a more minimal look

		if (totalPages <= maxPageButtons) {
			// Show all pages if total pages is less than max buttons
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			// Show a subset of pages with current page in the middle if possible
			let startPage = Math.max(
				1,
				currentPage - Math.floor(maxPageButtons / 2)
			);
			const endPage = Math.min(
				totalPages,
				startPage + maxPageButtons - 1
			);

			// Adjust if we're near the end
			if (endPage - startPage + 1 < maxPageButtons) {
				startPage = Math.max(1, endPage - maxPageButtons + 1);
			}

			for (let i = startPage; i <= endPage; i++) {
				pageNumbers.push(i);
			}

			// Add ellipsis indicators
			if (startPage > 1) {
				pageNumbers.unshift("...");
				pageNumbers.unshift(1);
			}

			if (endPage < totalPages) {
				pageNumbers.push("...");
				pageNumbers.push(totalPages);
			}
		}

		return pageNumbers;
	};

	return (
		<section className="py-20 bg-white text-gray-800">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					className="text-left mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					<motion.div
						className="flex items-center justify-between w-fit gap-4"
						variants={headerContainerVariants}>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							03
						</motion.p>
						<motion.div
							className="h-[1px] bg-gray-800 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							Properties
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl md:text-6xl mt-4"
						variants={titleVariants}>
						Available in {communityName}
					</motion.h2>
				</motion.div>

				<div ref={gridRef}>
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={currentPage}
							variants={pageTransition}
							initial="hidden"
							animate="visible"
							exit="exit">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
								{currentProperties.map((property, index) => (
									<ListingCard
										key={property.id}
										listing={{
											_id: property.id,
											title: property.title,
											price: parseFloat(
												property.price.replace(
													/[$,]/g,
													""
												)
											),
											address: {
												region: property.location.split(
													", "
												)[0],
												state: property.location.split(
													", "
												)[1]
											},
											status: property.status,
											propertyDetails: {
												beds: property.beds,
												baths: property.baths,
												sqft: property.area
											},
											heroMedia: {
												heroImage: {
													asset: {
														_ref: "image-reference",
														_type: "sanity.imageAsset",
														url: property.image
													} as unknown as SanityImageWithAlt
												}
											}
										}}
										index={index}
										isClickable={true}
									/>
								))}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{totalPages > 1 && (
					<motion.div
						variants={paginationContainerVariants}
						initial="hidden"
						animate="visible"
						className="flex justify-center items-center mt-12 mb-6">
						{/* Page numbers only - no arrows */}
						<div className="flex items-center space-x-4">
							{getPageNumbers().map((pageNumber, index) => (
								<React.Fragment key={index}>
									{pageNumber === "..." ? (
										<span className="text-gray-500 px-1 text-sm">
											•••
										</span>
									) : (
										<motion.button
											onClick={() =>
												typeof pageNumber ===
													"number" &&
												goToPage(pageNumber)
											}
											variants={paginationButtonVariants}
											initial="initial"
											whileHover="hover"
											whileTap="tap"
											className={`w-8 h-8 flex items-center justify-center text-sm font-medium cursor-pointer ${
												currentPage === pageNumber
													? "text-gray-900 border-b-2 border-gray-900"
													: "text-gray-600 hover:text-gray-900"
											} transition-all duration-300`}>
											{pageNumber}
										</motion.button>
									)}
								</React.Fragment>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default AvailableProperties;
