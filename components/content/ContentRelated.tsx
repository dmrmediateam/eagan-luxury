"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContentItem } from "./types";

interface ContentRelatedProps {
	items: ContentItem[];
	type: "blog" | "press";
}

// Placeholder image for items without an image
const PLACEHOLDER_IMAGE = "/media/gr3.jpg";

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

function ContentCard({
	item,
	index,
	type
}: {
	item: ContentItem;
	index: number;
	type: "blog" | "press";
}) {
	// Format category name for display if available (only for blog posts)
	const displayCategory = item.category || "general";
	const formattedCategory = displayCategory
		.split("-")
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	// Determine the link path based on content type
	const linkPath =
		type === "blog" ? `/blog/${item.slug}` : `/press/${item.slug}`;

	return (
		<motion.div
			custom={index}
			variants={textVariants}
			className="flex flex-col h-full">
			<Link href={linkPath} className="group h-full">
				<div className="relative w-full aspect-[4/3] mb-4 bg-zinc-100 overflow-hidden">
					<Image
						src={item.image || PLACEHOLDER_IMAGE}
						alt={item.title}
						fill
						className="object-cover transition-all duration-500 group-hover:scale-105"
					/>
				</div>
				<div className="space-y-3 flex-grow">
					<p className="text-xs uppercase tracking-wider text-zinc-500">
						{type === "blog" && (
							<>
								{formattedCategory}
								{" • "}
							</>
						)}
						{item.date}
						{type === "blog" && item.readTime && (
							<>
								{" • "}
								{item.readTime}
							</>
						)}
						{type === "press" && item.source && (
							<>
								{" • "}
								{item.source}
							</>
						)}
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

export default function ContentRelated({ items, type }: ContentRelatedProps) {
	if (items.length === 0) {
		return null;
	}

	const headingText =
		type === "blog" ? "You May Also Enjoy" : "Related Articles";

	return (
		<div className="py-24 border-t border-zinc-100">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.1, delayChildren: 0.2 }
					}
				}}>
				<h2 className="text-2xl font-light mb-8 text-center text-zinc-700 tracking-wide uppercase">
					{headingText}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{items.map((item, index) => (
						<ContentCard
							key={item.id || index}
							item={item}
							index={index}
							type={type}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
}
