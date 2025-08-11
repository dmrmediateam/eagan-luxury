"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PropertyInfoProps {
	beds: number;
	baths: number;
	sqft: number;
	lotSize: string;
	yearBuilt: number;
	propertyType: string;
	features?: string[];
	description: string;
}

// Animation variants
const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const headingVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
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

const PropertyInfo = ({
	beds,
	baths,
	sqft,
	lotSize,
	yearBuilt,
	propertyType,
	features = [],
	description
}: PropertyInfoProps) => {
	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
							className="mb-8 w-16 h-16">
							<Image
								src="/logos/keylogo.png"
								alt="Key Icon"
								width={64}
								height={64}
								className="w-full h-full object-contain"
							/>
						</motion.div>
						<motion.h2
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							PROPERTY DETAILS
						</motion.h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
						{/* Property Stats */}
						<motion.div
							className="lg:col-span-1"
							variants={containerVariants}>
							{/* Stats grid */}
							<motion.div
								className="grid grid-cols-2 gap-8 mb-12"
								variants={containerVariants}>
								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Bedrooms
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{beds}
										</span>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Bathrooms
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{baths}
										</span>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Square Feet
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{sqft.toLocaleString()}
										</span>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Lot Size
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{lotSize}
										</span>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Year Built
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{yearBuilt}
										</span>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex flex-col">
									<span className="text-sm text-zinc-500 mb-1 font-light">
										Property Type
									</span>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-zinc-600 mr-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
										<span className="text-xl font-light text-zinc-700">
											{propertyType}
										</span>
									</div>
								</motion.div>
							</motion.div>

							{/* Features Section */}
							{features && features.length > 0 && (
								<motion.div
									variants={sectionVariants}
									className="mb-8">
									<motion.h3
										variants={headingVariants}
										className="text-2xl text-zinc-600 font-light tracking-wider mb-6">
										FEATURES
									</motion.h3>
									<motion.ul
										className="grid grid-cols-1 sm:grid-cols-2 gap-4"
										variants={containerVariants}>
										{features.map((feature, index) => (
											<motion.li
												key={index}
												className="flex items-center text-zinc-600 font-light"
												variants={itemVariants}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-zinc-500 mr-2"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{feature}
											</motion.li>
										))}
									</motion.ul>
								</motion.div>
							)}
						</motion.div>

						{/* Property Description */}
						<motion.div
							className="lg:col-span-2"
							variants={sectionVariants}>
							<motion.h3
								variants={headingVariants}
								className="text-2xl text-zinc-600 font-light tracking-wider mb-6">
								ABOUT THIS PROPERTY
							</motion.h3>
							<motion.div
								className="text-zinc-600 font-extralight leading-relaxed space-y-6"
								variants={containerVariants}>
								{description
									.split("\n\n")
									.map((paragraph, index) => (
										<motion.p
											key={index}
											variants={itemVariants}>
											{paragraph}
										</motion.p>
									))}
							</motion.div>

							<motion.div
								className="mt-10 flex flex-col sm:flex-row gap-4"
								variants={itemVariants}>
								<motion.button
									className="px-8 py-3 border border-zinc-700 bg-zinc-700 text-white text-base tracking-wider font-light uppercase transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-800"
									whileHover={{
										y: -3,
										boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
									}}
									whileTap={{ scale: 0.98 }}>
									SCHEDULE VIEWING
								</motion.button>
								<motion.button
									className="px-8 py-3 border border-zinc-300 text-zinc-700 text-base tracking-wider font-light uppercase transition-all duration-300 hover:bg-zinc-50"
									whileHover={{
										y: -3,
										boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
									}}
									whileTap={{ scale: 0.98 }}>
									DOWNLOAD BROCHURE
								</motion.button>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default PropertyInfo;
