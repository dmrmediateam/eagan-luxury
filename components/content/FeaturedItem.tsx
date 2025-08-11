"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getBlogPostBySlug } from "@/sanity/queries/blogPosts";
import {
	getFeaturedPressRelease,
	getPressReleaseBySlug
} from "@/sanity/queries/pressReleases";
import { urlForImage } from "@/lib/sanity-utils";

// Placeholder image for items without an image
const PLACEHOLDER_IMAGE = "/media/gr3.jpg";

interface FeaturedItemProps {
	contentType: "blog" | "press";
	slug?: string; // Used for both blog posts and press releases
}

// Generic interface for both blog posts and press releases
interface ContentItem {
	id: string;
	title: string;
	excerpt: string;
	slug: string;
	publishedAt: string;
	mainImage: {
		url: string;
		alt: string;
	} | null;
	categories: string[];
	source?: string;
	sourceUrl?: string;
	readTime?: string;
}

// Content block interfaces for calculating read time
interface ContentBlock {
	_type: string;
	_key?: string;
	children?: ContentSpan[];
	[key: string]: unknown;
}

interface ContentSpan {
	_type: string;
	_key?: string;
	text?: string;
	marks?: string[];
	[key: string]: unknown;
}

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

export function FeaturedItem({
	contentType,
	slug = "featured-post"
}: FeaturedItemProps) {
	const [item, setItem] = useState<ContentItem | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchItem() {
			try {
				setIsLoading(true);

				if (contentType === "blog") {
					const fetchedPost = await getBlogPostBySlug(slug);

					if (fetchedPost) {
						// Calculate read time
						let readTime = fetchedPost.readTime || "";

						if (!readTime && fetchedPost.content) {
							// Get text content from blocks
							let totalWords = 0;
							const WORDS_PER_MINUTE = 200;

							// Count words in title and excerpt
							totalWords += fetchedPost.title
								.split(/\s+/)
								.filter(Boolean).length;
							if (fetchedPost.excerpt) {
								totalWords += fetchedPost.excerpt
									.split(/\s+/)
									.filter(Boolean).length;
							}

							// Count words in content blocks
							if (Array.isArray(fetchedPost.content)) {
								fetchedPost.content.forEach(
									(block: ContentBlock) => {
										if (
											block._type === "block" &&
											block.children &&
											Array.isArray(block.children)
										) {
											block.children.forEach(
												(span: ContentSpan) => {
													if (
														span._type === "span" &&
														span.text
													) {
														const words = span.text
															.split(/\s+/)
															.filter(
																Boolean
															).length;
														totalWords += words;
													}
												}
											);
										}
									}
								);
							}

							// Calculate minutes based on words
							const minutes =
								Math.ceil(totalWords / WORDS_PER_MINUTE) || 1;
							readTime =
								minutes <= 1
									? "1 min read"
									: `${minutes} min read`;
						}

						// Format the blog post
						setItem({
							id: fetchedPost._id,
							title: fetchedPost.title,
							excerpt: fetchedPost.excerpt || "",
							slug: fetchedPost.slug,
							mainImage: fetchedPost.mainImage || null,
							categories: fetchedPost.category
								? [fetchedPost.category]
								: [],
							publishedAt:
								fetchedPost.publishedAt ||
								new Date().toISOString(),
							readTime: readTime || "5 min read"
						});
					}
				} else if (contentType === "press") {
					// Use getPressReleaseBySlug when a specific slug is provided
					const data =
						slug === "featured-post"
							? await getFeaturedPressRelease()
							: await getPressReleaseBySlug(slug);

					if (data) {
						// Process main image
						let imageUrl = PLACEHOLDER_IMAGE;
						let imageAlt = data.title;

						if (data.mainImage) {
							if (data.mainImage.url) {
								imageUrl = data.mainImage.url;
							} else if (data.mainImage.asset?._ref) {
								try {
									imageUrl = urlForImage(
										data.mainImage
									).url();
								} catch (error) {
									console.error(
										"Error processing image URL:",
										error
									);
								}
							}

							if (data.mainImage.alt) {
								imageAlt = data.mainImage.alt;
							}
						}

						// Create formatted press data
						const formattedPress: ContentItem = {
							id: data._id,
							title: data.title,
							excerpt:
								data.excerpt || "Read our latest press release",
							slug:
								typeof data.slug === "string"
									? data.slug
									: data.slug?.current || data._id,
							publishedAt: data.publishedAt,
							source: data.source,
							sourceUrl: data.sourceUrl,
							mainImage: {
								url: imageUrl,
								alt: imageAlt
							},
							categories: data.categories || []
						};

						setItem(formattedPress);
					}
				}
			} catch (error) {
				console.error(`Error fetching featured ${contentType}:`, error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchItem();
	}, [contentType, slug]);

	if (isLoading) {
		return (
			<section className="w-full py-24 lg:py-32 bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] group">
					<div className="flex justify-center">
						<div className="w-10 h-10 border-t-2 border-zinc-800 rounded-full animate-spin"></div>
					</div>
				</div>
			</section>
		);
	}

	if (!item) {
		return null;
	}

	// Format the date
	const publishDate = new Date(item.publishedAt).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});

	// Format category if available
	const category = item.categories[0] || "General";
	const formattedCategory = category
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	// Content-specific configurations
	const config = {
		blog: {
			title: "Featured Article",
			buttonText: "Read Article",
			linkPath: `/blog/${item.slug}`,
			metaData: `${formattedCategory} • ${publishDate} • ${item.readTime || ""}`
		},
		press: {
			title: "Featured Release",
			buttonText: "Read Full Release",
			linkPath: `/press/${item.slug}`,
			metaData: `${publishDate}${item.source ? ` • ${item.source}` : ""}`
		}
	};

	const currentConfig = config[contentType];

	return (
		<section className="w-full py-24 lg:py-32 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] group">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="flex flex-col items-center space-y-10">
					{/* Section Heading */}
					<motion.h2
						custom={1}
						variants={textVariants}
						className="text-3xl md:text-4xl font-light text-zinc-600 tracking-wider uppercase">
						{currentConfig.title}
					</motion.h2>

					{/* Featured Item */}
					<motion.div
						custom={2}
						variants={textVariants}
						className="w-full grid grid-cols-1 lg:grid-cols-5">
						{/* Image - 3 columns on large screens */}
						<div className="lg:col-span-3 relative h-80 md:h-[500px] lg:h-[600px] bg-zinc-100 overflow-hidden">
							<Link
								href={currentConfig.linkPath}
								className="group">
								<div className="relative w-full h-full">
									<Image
										src={
											item.mainImage?.url ||
											PLACEHOLDER_IMAGE
										}
										alt={item.mainImage?.alt || item.title}
										fill
										className="object-cover transition-all duration-500 group-hover:scale-105 brightness-[0.9] group-hover:brightness-100"
									/>
								</div>
							</Link>
						</div>

						{/* Content - 2 columns on large screens */}
						<div className="lg:col-span-2 flex flex-col justify-center px-4 lg:px-8 py-8 space-y-6 bg-zinc-50">
							<div className="space-y-4">
								<p className="text-sm uppercase tracking-wider text-zinc-500">
									{currentConfig.metaData}
								</p>
								<h3 className="text-2xl md:text-3xl font-light text-zinc-800">
									{item.title}
								</h3>
								<div className="w-12 h-[1px] bg-zinc-300" />
								<p className="text-zinc-600 font-light leading-relaxed">
									{item.excerpt}
								</p>
							</div>

							<Link
								href={currentConfig.linkPath}
								className="inline-block self-start px-8 py-3 bg-zinc-200 text-zinc-800 uppercase tracking-widest text-sm hover:bg-zinc-300 transition-colors">
								{currentConfig.buttonText}
							</Link>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
