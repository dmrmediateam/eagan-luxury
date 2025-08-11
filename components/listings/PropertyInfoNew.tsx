"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropertyInfoNewProps {
	beds: number;
	baths: number;
	sqft: number;
	lotSize: string;
	yearBuilt: number;
	propertyType: string;
	features?: string[];
	description: string;
	parkingSpaces?: number;
	hasPool?: boolean;
	hasSpa?: boolean;
	hasView?: boolean;
	viewDescription?: string;
	hasFireplace?: boolean;
}

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

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

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const PropertyInfoNew = ({
	beds,
	baths,
	sqft,
	lotSize,
	yearBuilt,
	propertyType,
	features = [],
	description,
	parkingSpaces,
	hasPool,
	hasSpa,
	hasView,
	viewDescription,
	hasFireplace
}: PropertyInfoNewProps) => {
	return (
		<section className="py-20">
			<motion.div
				className="grid grid-cols-1 lg:grid-cols-3 gap-12"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}>
				{/* Property Quick Facts */}
				<motion.div variants={itemVariants} className="lg:col-span-1">
					<h2 className="text-2xl font-light text-zinc-800 mb-8 tracking-wide">
						Property Details
					</h2>

					<div className="grid grid-cols-2 gap-8">
						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Bedrooms
							</p>
							<p className="text-xl font-light text-zinc-800">
								{beds}
							</p>
						</div>

						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Bathrooms
							</p>
							<p className="text-xl font-light text-zinc-800">
								{baths}
							</p>
						</div>

						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Square Feet
							</p>
							<p className="text-xl font-light text-zinc-800">
								{sqft.toLocaleString()}
							</p>
						</div>

						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Lot Size
							</p>
							<p className="text-xl font-light text-zinc-800">
								{lotSize}
							</p>
						</div>

						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Year Built
							</p>
							<p className="text-xl font-light text-zinc-800">
								{yearBuilt}
							</p>
						</div>

						<div>
							<p className="text-sm font-light text-zinc-500 mb-1">
								Property Type
							</p>
							<p className="text-xl font-light text-zinc-800">
								{propertyType.charAt(0).toUpperCase() +
									propertyType.slice(1)}
							</p>
						</div>

						{/* Conditionally render new fields */}
						{parkingSpaces !== undefined &&
							parkingSpaces !== null && (
								<div>
									<p className="text-sm font-light text-zinc-500 mb-1">
										Parking Spaces
									</p>
									<p className="text-xl font-light text-zinc-800">
										{parkingSpaces}
									</p>
								</div>
							)}

						{hasPool !== undefined && hasPool !== null && (
							<div>
								<p className="text-sm font-light text-zinc-500 mb-1">
									Pool
								</p>
								<p className="text-xl font-light text-zinc-800">
									{hasPool ? "Yes" : "No"}
								</p>
							</div>
						)}

						{hasSpa !== undefined && hasSpa !== null && (
							<div>
								<p className="text-sm font-light text-zinc-500 mb-1">
									Spa/Hot Tub
								</p>
								<p className="text-xl font-light text-zinc-800">
									{hasSpa ? "Yes" : "No"}
								</p>
							</div>
						)}

						{hasView !== undefined && hasView !== null && (
							<div>
								<p className="text-sm font-light text-zinc-500 mb-1">
									View
								</p>
								<p className="text-xl font-light text-zinc-800">
									{hasView && viewDescription
										? viewDescription
										: hasView
											? "Yes"
											: "No"}
								</p>
							</div>
						)}

						{hasFireplace !== undefined &&
							hasFireplace !== null && (
								<div>
									<p className="text-sm font-light text-zinc-500 mb-1">
										Fireplace
									</p>
									<p className="text-xl font-light text-zinc-800">
										{hasFireplace ? "Yes" : "No"}
									</p>
								</div>
							)}
					</div>

					{/* Features Section */}
					{features && features.length > 0 && (
						<motion.div className="mt-12" variants={fadeInVariants}>
							<h3 className="text-xl font-light text-zinc-800 mb-6 tracking-wide">
								Features
							</h3>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
								{features.map((feature, index) => (
									<li
										key={`feature-${index}`}
										className="text-zinc-600 font-light flex items-start">
										<span className="text-emerald-600 mr-2">
											•
										</span>
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</motion.div>

				{/* Property Description */}
				<motion.div className="lg:col-span-2" variants={itemVariants}>
					<h2 className="text-2xl font-light text-zinc-800 mb-8 tracking-wide">
						Description
					</h2>
					<div className="prose prose-zinc max-w-none font-light leading-relaxed">
						{description.split("\n\n").map((paragraph, index) => (
							<p
								key={index}
								className="mb-4 text-zinc-600 font-light">
								{paragraph}
							</p>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default PropertyInfoNew;
