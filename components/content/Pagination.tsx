"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContentContext } from "./ContentContext";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
	const { setCurrentPage, contentType } = useContentContext();

	const goToPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		// Scroll to top of content section
		window.scrollTo({
			top:
				document.getElementById(
					contentType === "blog" ? "blog-posts" : "press-releases"
				)?.offsetTop ?? 0,
			behavior: "smooth"
		});
	};

	const getPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;

		if (totalPages <= maxVisiblePages) {
			// Show all pages if there are fewer than maxVisiblePages
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Always show first page
			pages.push(1);

			// Calculate start and end of the middle section
			let middleStart = Math.max(2, currentPage - 1);
			let middleEnd = Math.min(totalPages - 1, currentPage + 1);

			// Adjust if we're at the start
			if (currentPage <= 2) {
				middleEnd = 3;
			}

			// Adjust if we're at the end
			if (currentPage >= totalPages - 1) {
				middleStart = totalPages - 2;
			}

			// Add ellipsis after first page if needed
			if (middleStart > 2) {
				pages.push("...");
			}

			// Add middle pages
			for (let i = middleStart; i <= middleEnd; i++) {
				pages.push(i);
			}

			// Add ellipsis before last page if needed
			if (middleEnd < totalPages - 1) {
				pages.push("...");
			}

			// Always show last page
			pages.push(totalPages);
		}

		return pages;
	};

	if (totalPages <= 1) {
		return null;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.2 }}
			className="flex justify-center items-center mt-16">
			<nav
				className="inline-flex items-center space-x-2"
				aria-label="Pagination">
				<button
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
					className={`p-2 text-sm ${
						currentPage === 1
							? "text-zinc-300 cursor-not-allowed"
							: "text-zinc-500 hover:text-zinc-700"
					} transition-colors`}
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

				{getPageNumbers().map((page, index) => (
					<button
						key={index}
						onClick={() => {
							if (typeof page === "number") goToPage(page);
						}}
						disabled={page === "..."}
						className={`w-8 h-8 flex items-center justify-center text-sm font-light ${
							page === currentPage
								? "text-zinc-800 border-b border-zinc-800"
								: page === "..."
									? "text-zinc-400"
									: "text-zinc-500 hover:text-zinc-700"
						} transition-all duration-300`}
						aria-current={
							page === currentPage ? "page" : undefined
						}>
						{page}
					</button>
				))}

				<button
					onClick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className={`p-2 text-sm ${
						currentPage === totalPages
							? "text-zinc-300 cursor-not-allowed"
							: "text-zinc-500 hover:text-zinc-700"
					} transition-colors`}
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
		</motion.div>
	);
}
