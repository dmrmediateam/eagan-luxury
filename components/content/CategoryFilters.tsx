"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContentContext } from "./ContentContext";
import { getBlogCategories } from "@/sanity/queries/blogPosts";
import { getPressCategories } from "@/sanity/queries/pressReleases";

export function CategoryFilters() {
	const { activeCategory, setActiveCategory, setCurrentPage, contentType } =
		useContentContext();
	const [categories, setCategories] = useState<string[]>(["All"]);
	const [isLoading, setIsLoading] = useState(true);
	const [displayNames, setDisplayNames] = useState<Record<string, string>>({
		All: "All"
	});

	// Format a category slug to a display name
	const formatCategoryName = (category: string) => {
		if (category === "All") return "All";

		return category
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	// Fetch categories based on content type
	useEffect(() => {
		async function fetchCategories() {
			try {
				setIsLoading(true);

				const getCategories =
					contentType === "blog"
						? getBlogCategories
						: getPressCategories;

				const fetchedCategories = await getCategories();

				// Process categories
				let processedCategories: string[] = [];

				if (Array.isArray(fetchedCategories)) {
					// Filter out any non-string or empty values
					processedCategories = fetchedCategories.filter(
						(category): category is string =>
							typeof category === "string" &&
							category.trim() !== ""
					);
				}

				// Fallback to common categories if none found
				if (processedCategories.length === 0) {
					processedCategories =
						contentType === "blog"
							? [
									"market-trends",
									"selling-tips",
									"investment",
									"interior-design",
									"technology",
									"sustainability"
								]
							: [
									"announcement",
									"market-update",
									"partnership",
									"event",
									"recognition"
								];
				}

				// Add "All" category and ensure unique values
				const uniqueCategories = [
					"All",
					...new Set(processedCategories)
				].filter(Boolean);

				// Create mapping of original categories to display names
				const displayNameMap: Record<string, string> = { All: "All" };
				uniqueCategories.forEach((category) => {
					if (category !== "All") {
						displayNameMap[category] = formatCategoryName(category);
					}
				});

				setDisplayNames(displayNameMap);
				setCategories(uniqueCategories);
			} catch (error) {
				console.error(
					`Error fetching ${contentType} categories:`,
					error
				);
				// Fallback to some default categories
				setCategories(["All"]);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCategories();
	}, [contentType]);

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
		setCurrentPage(1); // Reset to first page when category changes
	};

	if (isLoading) {
		return <div className="h-12 flex justify-center"></div>;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6 }}
			className="flex flex-wrap justify-center mb-12 gap-3">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => handleCategoryChange(category)}
					className={`px-5 py-2 text-sm font-light transition-all duration-300 cursor-pointer ${
						activeCategory === category
							? "bg-zinc-200 text-zinc-800"
							: "bg-white text-zinc-500 hover:bg-zinc-100"
					}`}>
					{displayNames[category] || formatCategoryName(category)}
				</button>
			))}
		</motion.div>
	);
}
