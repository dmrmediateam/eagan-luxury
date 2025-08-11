"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContentContext, ContentContextProvider } from "./ContentContext";
import { CategoryFilters } from "./CategoryFilters";
import { Pagination } from "./Pagination";
import { getAllBlogPosts } from "@/sanity/queries/blogPosts";
import { getAllPressReleases } from "@/sanity/queries/pressReleases";
import { urlForImage } from "@/lib/sanity-utils";

// Placeholder image for content without an image
const PLACEHOLDER_IMAGE = "/media/gr3.jpg";

// Number of items to display per page
const ITEMS_PER_PAGE = 6;

const textVariants = {
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

// Generic content item interface
interface ContentItem {
	id: string;
	title: string;
	excerpt: string;
	slug: string;
	mainImage: {
		url: string;
		alt: string;
	} | null;
	categories: string[];
	publishedAt: string;
	readTime?: string; // Only for blog posts
	source?: string; // Only for press releases
	sourceUrl?: string; // Only for press releases
}

// Raw data interfaces from Sanity
interface SanityRawBlogPost {
	_id: string;
	title: string;
	excerpt?: string;
	slug: string | { current: string } | undefined;
	mainImage?: {
		url?: string;
		alt?: string;
		asset?: {
			_ref: string;
			_type?: string;
		};
	};
	categories: string[];
	publishedAt: string;
	readTime?: string;
	content?: SanityContent[];
}

interface SanityRawPressRelease {
	_id: string;
	title: string;
	excerpt?: string;
	slug: string | { current: string } | undefined;
	mainImage?: {
		url?: string;
		alt?: string;
		asset?: {
			_ref: string;
			_type?: string;
		};
	};
	categories: string[];
	publishedAt: string;
	source?: string;
	sourceUrl?: string;
	content?: SanityContent[];
}

// Types for Sanity content
interface SanityContent {
	_type: string;
	_key?: string;
	children?: SanityContentChild[];
	[key: string]: unknown;
}

interface SanityContentChild {
	_type: string;
	_key?: string;
	text?: string;
	marks?: string[];
	[key: string]: unknown;
}

// Content Card component
function ContentCard({ item, index }: { item: ContentItem; index: number }) {
	const { contentType } = useContentContext();

	// Determine the category to display (only for blog posts)
	const displayCategory =
		contentType === "blog" && item.categories && item.categories.length > 0
			? item.categories[0]
			: "general";

	// Format category name for display
	const formattedCategory = displayCategory
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	// Format date
	const formattedDate = new Date(item.publishedAt).toLocaleDateString(
		"en-US",
		{ month: "long", day: "numeric", year: "numeric" }
	);

	// Set up meta data text based on content type
	const metaData =
		contentType === "blog"
			? `${formattedCategory} • ${formattedDate} • ${item.readTime || ""}`
			: `${formattedDate}${item.source ? ` • ${item.source}` : ""}`;

	// Link path based on content type
	const linkPath =
		contentType === "blog" ? `/blog/${item.slug}` : `/press/${item.slug}`;

	return (
		<motion.div
			custom={index}
			variants={textVariants}
			className="flex flex-col h-full">
			<Link href={linkPath} className="group h-full">
				<div className="relative w-full aspect-[4/3] mb-4 bg-zinc-100 overflow-hidden">
					<Image
						src={
							item.mainImage?.url
								? item.mainImage.url
								: PLACEHOLDER_IMAGE
						}
						alt={item.mainImage?.alt || item.title}
						fill
						className="object-cover transition-all duration-500 group-hover:scale-105"
					/>
				</div>
				<div className="space-y-3 flex-grow">
					<p className="text-xs uppercase tracking-wider text-zinc-500">
						{metaData}
					</p>
					<h3 className="text-xl font-light text-zinc-800 group-hover:text-zinc-600 transition-colors">
						{item.title}
					</h3>
					<div className="w-10 h-[1px] bg-zinc-300" />
					<p className="text-zinc-600 text-sm line-clamp-3 font-light">
						{item.excerpt}
					</p>
				</div>
			</Link>
		</motion.div>
	);
}

// Content grid component for displaying content items
function ContentGridInner() {
	const { activeCategory, currentPage, setCurrentPage, contentType } =
		useContentContext();
	const [contentItems, setContentItems] = useState<ContentItem[]>([]);
	const [filteredItems, setFilteredItems] = useState<ContentItem[]>([]);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [filterKey, setFilterKey] = useState(Date.now());

	// Fetch content items based on type
	useEffect(() => {
		async function fetchContentItems() {
			try {
				setIsLoading(true);

				if (contentType === "blog") {
					const posts = await getAllBlogPosts();
					console.log(
						`[Debug] Fetched ${posts?.length || 0} raw blog posts from Sanity.`
					);

					// Transform blog posts
					const formattedPosts = posts.map(
						(post: SanityRawBlogPost) => {
							// Handle different slug formats
							let slug = "";
							if (typeof post.slug === "string") {
								slug = post.slug;
							} else if (
								post.slug &&
								typeof post.slug === "object" &&
								"current" in post.slug
							) {
								slug = post.slug.current;
							} else {
								slug = post._id;
							}

							// Determine excerpt
							let finalExcerpt = post.excerpt?.trim() || "";
							if (!finalExcerpt && post.content) {
								// Extract excerpt from content if needed
								// This is simplified; you might want to enhance this
								const fullTextContent = extractTextFromContent(
									post.content
								);
								finalExcerpt = fullTextContent.slice(0, 150);
								if (fullTextContent.length > 150) {
									finalExcerpt += "...";
								}
							}

							// Calculate read time if needed
							let readTime = post.readTime || "";
							if (!readTime && post.content) {
								readTime = calculateReadTime(
									post.content,
									post.title,
									finalExcerpt
								);
							}

							// Handle image
							const processedMainImage = processMainImage(
								post.mainImage,
								post.title
							);

							return {
								id: post._id,
								title: post.title,
								excerpt: finalExcerpt || "No excerpt available",
								slug,
								mainImage: processedMainImage,
								categories: post.categories || [],
								publishedAt:
									post.publishedAt ||
									new Date().toISOString(),
								readTime
							};
						}
					);

					setContentItems(formattedPosts);
				} else {
					// Press releases
					const releases = await getAllPressReleases();
					console.log(
						`[Debug] Fetched ${releases?.length || 0} raw press releases from Sanity.`
					);

					// Transform press releases
					const formattedReleases = releases.map(
						(release: SanityRawPressRelease) => {
							// Handle different slug formats
							let slug = "";
							if (typeof release.slug === "string") {
								slug = release.slug;
							} else if (
								release.slug &&
								typeof release.slug === "object" &&
								"current" in release.slug
							) {
								slug = release.slug.current;
							} else {
								slug = release._id;
							}

							// Determine excerpt
							const finalExcerpt =
								release.excerpt?.trim() ||
								"No excerpt available";

							// Handle image
							const processedMainImage = processMainImage(
								release.mainImage,
								release.title
							);

							return {
								id: release._id,
								title: release.title,
								excerpt: finalExcerpt,
								slug,
								mainImage: processedMainImage,
								categories: release.categories || [],
								publishedAt:
									release.publishedAt ||
									new Date().toISOString(),
								source: release.source,
								sourceUrl: release.sourceUrl
							};
						}
					);

					setContentItems(formattedReleases);
				}
			} catch (error) {
				console.error(`Error fetching ${contentType} items:`, error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchContentItems();
	}, [contentType]);

	// Filter items when category changes or items are loaded
	useEffect(() => {
		// Force a new filter operation by updating the key
		setFilterKey(Date.now());

		let items;

		if (contentType === "press") {
			// For press releases, don't filter by category
			items = [...contentItems];
		} else {
			// For blog posts, filter by category if not "All"
			if (activeCategory === "All" || activeCategory.startsWith("All-")) {
				items = [...contentItems];
			} else {
				items = contentItems.filter((item) =>
					item.categories.includes(activeCategory)
				);
			}
		}

		console.log(
			`[Debug] Filtered to ${items?.length || 0} items for category '${activeCategory}'.`
		);

		// Update filtered items and pagination
		setTimeout(() => {
			setFilteredItems(items);
			setTotalPages(Math.ceil(items.length / ITEMS_PER_PAGE));
			setCurrentPage(1); // Reset to first page when category changes
		}, 0);
	}, [activeCategory, contentItems, setCurrentPage, contentType]);

	// Calculate current items to display
	const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
	const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
	const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

	// Helper function to extract text from content blocks
	function extractTextFromContent(content: SanityContent[]): string {
		if (!content || !Array.isArray(content)) return "";

		return content
			.filter(
				(block) =>
					block._type === "block" && Array.isArray(block.children)
			)
			.map((block) =>
				block.children
					?.map((child: SanityContentChild) => child.text || "")
					.join(" ")
			)
			.join(" ")
			.replace(/\s+/g, " ")
			.trim();
	}

	// Helper function to calculate read time
	function calculateReadTime(
		content: SanityContent[],
		title = "",
		excerpt = ""
	): string {
		const WORDS_PER_MINUTE = 200;
		let totalWords = 0;

		// Count words in title and excerpt
		totalWords += title.split(/\s+/).filter(Boolean).length;
		totalWords += excerpt.split(/\s+/).filter(Boolean).length;

		// Count words in content
		const textContent = extractTextFromContent(content);
		totalWords += textContent.split(/\s+/).filter(Boolean).length;

		// Calculate minutes
		const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE) || 1;
		return minutes <= 1 ? "1 min read" : `${minutes} min read`;
	}

	// Helper function to process main image
	function processMainImage(
		mainImage: SanityImageType | undefined,
		title: string
	) {
		if (!mainImage) return null;

		let imageUrl: string;
		const imageAlt: string = mainImage.alt || title;

		// Direct URL
		if (mainImage.url) {
			imageUrl = mainImage.url;
		}
		// Asset reference
		else if (mainImage.asset && mainImage.asset._ref) {
			try {
				imageUrl = urlForImage(mainImage).url();
			} catch (error) {
				console.error("Error processing image URL:", error);
				imageUrl = PLACEHOLDER_IMAGE;
			}
		} else {
			// Fallback
			imageUrl = PLACEHOLDER_IMAGE;
		}

		return {
			url: imageUrl,
			alt: imageAlt
		};
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="w-10 h-10 border-t-2 border-zinc-800 rounded-full animate-spin"></div>
			</div>
		);
	}

	return (
		<>
			<motion.div
				id="content-grid"
				key={`content-grid-${activeCategory}-${filterKey}`}
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.1 }
					}
				}}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
				{currentItems.map((item, index) => (
					<ContentCard
						key={`${item.id}-${filterKey}`}
						item={item}
						index={index}
					/>
				))}
			</motion.div>

			{filteredItems.length === 0 && (
				<div className="text-center py-20">
					<p className="text-zinc-500">
						No {contentType === "blog" ? "posts" : "press releases"}{" "}
						found
						{contentType === "blog" && activeCategory !== "All"
							? " in this category"
							: ""}
						.
					</p>
				</div>
			)}

			{totalPages > 1 && (
				<Pagination currentPage={currentPage} totalPages={totalPages} />
			)}
		</>
	);
}

// Main export with context provider
export function ContentGrid({
	contentType
}: {
	contentType: "blog" | "press";
}) {
	return (
		<section
			id={contentType === "blog" ? "blog-posts" : "press-releases"}
			className="w-full py-24 lg:py-32 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<ContentContextProvider contentType={contentType}>
					{contentType === "blog" ? <CategoryFilters /> : null}
					<ContentGridInner />
				</ContentContextProvider>
			</div>
		</section>
	);
}

// Define the type for Sanity image
interface SanityImageType {
	url?: string;
	alt?: string;
	asset?: {
		_ref: string;
		_type?: string;
	};
	[key: string]: unknown;
}
