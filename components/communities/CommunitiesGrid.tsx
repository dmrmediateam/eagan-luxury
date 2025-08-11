"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Community {
	_id: string;
	slug: string;
	title: string;
	county: string;
	description: string;
	amenities: string[];
	mainImage: {
		url: string;
		alt: string;
	};
}

interface CommunityCardProps {
	community: Community;
	index: number;
}

const CommunityCard = ({ community, index }: CommunityCardProps) => {
	const CardContent = () => (
		<div className="relative h-full w-full">
			<Image
				src={community.mainImage.url}
				alt={community.mainImage.alt || community.title}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
				loading="lazy"
			/>

			{/* Overlay that becomes more transparent on hover */}
			<div className="absolute inset-0 bg-zinc-900/40 transition-all duration-700 ease-in-out group-hover:bg-zinc-900/20" />

			{/* Content overlay */}
			<div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
				<div className="transform transition-all duration-700 ease-out group-hover:translate-y-[-8px]">
					<h3 className="text-2xl font-light mb-2">
						{community.title}
					</h3>
					<div className="flex items-center justify-between">
						<p className="text-sm font-light flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 mr-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{community.county} County
						</p>
					</div>

					{community.amenities && community.amenities.length > 0 && (
						<div className="mt-3 flex flex-wrap gap-2">
							{community.amenities
								.slice(0, 2)
								.map((amenity, i) => (
									<span
										key={i}
										className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-sm">
										{amenity}
									</span>
								))}
							{community.amenities.length > 2 && (
								<span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-sm">
									+{community.amenities.length - 2} more
								</span>
							)}
						</div>
					)}

					<div className="overflow-hidden">
						<p className="mt-4 text-sm font-light tracking-wider uppercase view-details">
							View Community
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.97 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: index * 0.2,
				ease: [0.22, 1, 0.36, 1]
			}}
			viewport={{ once: true, margin: "-50px" }}
			className="relative group overflow-hidden h-full property-card">
			<Link
				href={`/communities/${community.slug}`}
				className="block h-full">
				<CardContent />
			</Link>
		</motion.div>
	);
};

interface CommunitiesGridProps {
	communities: Community[];
}

const CommunitiesGrid = ({ communities }: CommunitiesGridProps) => {
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

	// Determine grid layout based on number of communities
	const getGridClasses = (index: number, total: number) => {
		if (total === 1) {
			return "md:col-span-12 h-[600px]";
		}

		if (total === 2) {
			return "md:col-span-6 h-[500px]";
		}

		if (total === 3) {
			if (index === 0) {
				return "md:col-span-8 md:row-span-2 h-[600px] md:h-full";
			}
			return "md:col-span-4 h-[400px]";
		}

		// 4 or more communities
		if (index === 0) {
			return "md:col-span-8 md:row-span-2 h-[600px] md:h-full";
		}
		if (index === 1) {
			return "md:col-span-4 md:col-start-9 md:row-start-1 h-[400px]";
		}
		if (index === 2) {
			return "md:col-span-4 md:col-start-9 md:row-start-2 h-[400px]";
		}
		if (index === 3) {
			return "md:col-span-12 h-[500px]";
		}

		// Additional communities
		return "md:col-span-6 h-[400px]";
	};

	return (
		<section className="py-24 lg:py-32 bg-white text-zinc-800">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					className="text-left mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					<motion.div
						className="flex items-center justify-between w-fit gap-4"
						variants={headerContainerVariants}>
						<motion.p
							className="text-xl font-light text-zinc-600"
							variants={headerItemVariants}>
							01
						</motion.p>
						<motion.div
							className="h-[1px] bg-zinc-400 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-xl font-light text-zinc-600"
							variants={headerItemVariants}>
							Explore
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-4xl md:text-5xl mt-4 font-light text-zinc-800 tracking-wider uppercase"
						variants={titleVariants}>
						Communities
					</motion.h2>
				</motion.div>

				{communities.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
						{communities.map((community, index) => (
							<div
								key={community._id}
								className={getGridClasses(
									index,
									communities.length
								)}>
								<CommunityCard
									community={community}
									index={index}
								/>
							</div>
						))}
					</div>
				) : (
					<div className="bg-zinc-50 p-12 text-center border border-zinc-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16 mx-auto text-zinc-400 mb-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
						<p className="text-zinc-600 text-lg mb-2 font-light">
							No communities found
						</p>
						<p className="text-zinc-500 font-light">
							Check back soon for new community listings!
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default CommunitiesGrid;
