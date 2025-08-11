"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContentItem, SanityContentBlock } from "./types";

interface ContentHeaderProps {
	item: ContentItem;
	type: "blog" | "press";
}

// Calculate reading time based on content
const calculateReadTime = (
	content: SanityContentBlock[] = [],
	title = "",
	excerpt = ""
) => {
	// Average reading speed (words per minute)
	const WORDS_PER_MINUTE = 200;

	let totalWords = 0;

	// Count words in the title and excerpt too
	totalWords += title.split(/\s+/).filter(Boolean).length;
	totalWords += excerpt.split(/\s+/).filter(Boolean).length;

	// Extract text from content blocks
	if (content && Array.isArray(content)) {
		// Look for blocks with text content
		content.forEach((block) => {
			if (
				block._type === "block" &&
				block.children &&
				Array.isArray(block.children)
			) {
				// Extract text from spans
				block.children.forEach((span) => {
					if (span._type === "span" && span.text) {
						const words = span.text
							.split(/\s+/)
							.filter(Boolean).length;
						totalWords += words;
					}
				});
			}
		});
	}

	// If still no words, use a minimum
	if (totalWords === 0) {
		return "3 min read";
	}

	// Calculate minutes
	const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
	const readTime = minutes <= 1 ? "1 min read" : `${minutes} min read`;

	return readTime;
};

// Format a category slug to a display name
const formatCategoryName = (category: string) => {
	if (!category) return "General";

	return category
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

export default function ContentHeader({ item, type }: ContentHeaderProps) {
	// Calculate read time from content (only for blog posts if not provided)
	const readTime = useMemo(() => {
		// If it's a press release or readTime is already provided, don't calculate
		if (type === "press" || item.readTime) {
			return item.readTime;
		}

		return calculateReadTime(item.content, item.title, item.excerpt);
	}, [item.content, item.title, item.excerpt, item.readTime, type]);

	// Animation variants for text elements
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.6, 0.05, 0.01, 0.99]
			}
		}
	};

	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "120px",
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeOut",
				delay: 0.5
			}
		}
	};

	const imageVariants = {
		hidden: { scale: 1.05, opacity: 0.8 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: "easeOut"
			}
		}
	};

	return (
		<div className="relative h-[70vh] overflow-hidden">
			<motion.div
				className="absolute inset-0 z-0"
				initial="hidden"
				animate="visible"
				variants={imageVariants}>
				<Image
					src={item.image}
					alt={item.title}
					fill
					priority
					style={{ objectFit: "cover" }}
					className="brightness-[0.6]"
				/>
			</motion.div>
			<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10"></div>
			<div className="max-w-3xl mx-auto h-full flex flex-col justify-end pb-16 relative z-20">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="max-w-3xl">
					<motion.div
						variants={itemVariants}
						className="flex items-center text-sm text-gray-300 mb-4 flex-wrap">
						<span>{item.date}</span>

						{/* Show different metadata based on content type */}
						{type === "blog" ? (
							<>
								<span className="mx-2">•</span>
								<span>{readTime}</span>
								<span className="mx-2">•</span>
								<span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
									{formatCategoryName(item.category)}
								</span>
							</>
						) : (
							<>
								<span className="mx-2">•</span>
								<span>{item.source}</span>
								{item.location && (
									<>
										<span className="mx-2">•</span>
										<span>{item.location}</span>
									</>
								)}
							</>
						)}
					</motion.div>

					<motion.div variants={itemVariants}>
						<h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
							{item.title}
						</h1>
					</motion.div>

					<motion.div
						variants={dividerVariants}
						className="h-[1px] bg-[#B08D57] mb-6"
					/>

					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-200 max-w-2xl font-light">
						{item.excerpt}
					</motion.p>
				</motion.div>
			</div>
		</div>
	);
}
