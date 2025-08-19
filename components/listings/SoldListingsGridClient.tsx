"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ListingCard from "./ListingCard";
import { SanityListing } from "@/types/sanity";

interface SoldListingsGridClientProps {
	listings: SanityListing[];
	showAll: boolean;
	itemsPerPage: number;
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const SoldListingsGridClient: React.FC<SoldListingsGridClientProps> = ({
	listings,
	showAll,
	itemsPerPage
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const gridRef = useRef<HTMLDivElement>(null);

	// Calculate pagination
	const totalPages = showAll ? Math.ceil(listings.length / itemsPerPage) : 1;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const currentListings = showAll
		? listings.slice(startIndex, endIndex)
		: listings; // Use full list if showAll=false

	const goToPage = (pageNumber: number) => {
		if (pageNumber < 1 || pageNumber > totalPages) return;

		setCurrentPage(pageNumber);

		setTimeout(() => {
			if (gridRef.current) {
				window.scrollTo({
					top: gridRef.current.offsetTop - 100,
					behavior: "smooth"
				});
			}
		}, 10);
	};

	// Generate page numbers (same logic as before)
	const getPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);
			let middleStart = Math.max(2, currentPage - 1);
			let middleEnd = Math.min(totalPages - 1, currentPage + 1);
			if (currentPage <= 2) middleEnd = 3;
			if (currentPage >= totalPages - 1) middleStart = totalPages - 2;
			if (middleStart > 2) pages.push("...");
			for (let i = middleStart; i <= middleEnd; i++) pages.push(i);
			if (middleEnd < totalPages - 1) pages.push("...");
			pages.push(totalPages);
		}
		return pages;
	};

	return (
		<div className="w-full space-y-16">
			{/* Listings Grid */}
			<div
				ref={gridRef}
				className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{currentListings.length > 0 ? (
					currentListings.map((listing, index) => (
						<motion.div
							key={listing._id} // Use Sanity _id
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							custom={index} // Stagger animation based on index within the current page
							transition={{ delay: index * 0.05 }}
							className="overflow-hidden group">
							<ListingCard
								listing={listing} // Pass the whole listing object
								index={index} // Pass index for potential internal use in ListingCard (e.g., animation stagger)
								isClickable={true} // Allow clicking sold listings
								variant="default"
							/>
						</motion.div>
					))
				) : (
					<div className="col-span-2 text-center py-12">
						<p className="text-zinc-500">No sold listings found.</p>
					</div>
				)}
			</div>

			{/* Pagination - Only show if we're on the dedicated listings page (showAll=true) and there's more than one page */}
			{showAll && totalPages > 1 && (
				<div className="flex justify-center items-center">
					<nav
						className="inline-flex items-center space-x-2"
						aria-label="Pagination">
						{/* Previous Button */}
						<button
							onClick={() => goToPage(currentPage - 1)}
							disabled={currentPage === 1}
							className={`p-2 text-sm ${currentPage === 1 ? "text-zinc-300 cursor-not-allowed" : "text-zinc-500 hover:text-zinc-700"} transition-colors`}
							aria-label="Previous page">
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>

						{/* Page Numbers */}
						{getPageNumbers().map((page, index) => (
							<button
								key={index}
								onClick={() => {
									if (typeof page === "number")
										goToPage(page);
								}}
								disabled={page === "..."}
								className={`w-8 h-8 flex items-center justify-center text-sm font-light ${page === currentPage ? "text-zinc-800 border-b border-zinc-800" : page === "..." ? "text-zinc-400" : "text-zinc-500 hover:text-zinc-700"} transition-all duration-300`}
								aria-current={
									page === currentPage ? "page" : undefined
								}>
								{page}
							</button>
						))}

						{/* Next Button */}
						<button
							onClick={() => goToPage(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={`p-2 text-sm ${currentPage === totalPages ? "text-zinc-300 cursor-not-allowed" : "text-zinc-500 hover:text-zinc-700"} transition-colors`}
							aria-label="Next page">
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</nav>
				</div>
			)}
		</div>
	);
};

export default SoldListingsGridClient;
