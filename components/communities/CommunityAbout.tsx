"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CommunityAboutProps {
	title: string;
	description: string;
	image?: {
		url: string;
		alt: string;
	};
	stats?: {
		population?: string;
		established?: string;
		medianHomePrice?: string;
	};
}

// Animation variants
const headerContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

const headerItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const dividerVariants = {
	hidden: { width: 0, opacity: 0 },
	visible: {
		width: "4rem",
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
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

// Animation variants for stats with premium luxury feel
const statDividerVariants = {
	hidden: { height: 0, opacity: 0 },
	visible: {
		height: "90%",
		opacity: 1,
		transition: {
			duration: 1.2,
			ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for elegant motion
			delay: 0.1
		}
	}
};

const statLabelVariants = {
	hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
	visible: {
		opacity: 1,
		x: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1], // Custom ease for luxury feel
			delay: 0.3
		}
	}
};

const statValueVariants = {
	hidden: { opacity: 0, y: 15, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.9,
			delay: 0.5,
			ease: [0.34, 1.56, 0.64, 1] // Slight overshoot for premium feel
		}
	}
};

// Container variant for staggered children
const statsContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
			duration: 0.5
		}
	}
};

const statItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const CommunityAbout = ({
	title,
	description,
	image,
	stats
}: CommunityAboutProps) => {
	return (
		<section className="py-20 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-left mb-16">
					<motion.div
						className="flex items-center justify-between w-fit gap-4 text-gray-800"
						variants={headerContainerVariants}>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							01
						</motion.p>
						<motion.div
							className="h-[1px] mx-auto bg-gray-800"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-xl font-light"
							variants={headerItemVariants}>
							Community
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl md:text-6xl mt-4 font-light tracking-wide text-gray-800"
						variants={titleVariants}>
						About {title}
					</motion.h2>
					<motion.p
						className="text-gray-600 mt-6 max-w-3xl"
						variants={headerItemVariants}>
						Explore the community location and discover nearby
						points of interest in the area.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: [0.6, 0.05, 0.01, 0.99],
							delay: 0.2
						}}
						viewport={{ once: true }}
						className="order-2 lg:order-1">
						<p className="text-gray-700 leading-relaxed mb-8 text-lg">
							{description}
						</p>

						{stats && (
							<motion.div
								className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={statsContainerVariants}>
								{stats.population && (
									<motion.div
										className="relative pl-6 py-2"
										variants={statItemVariants}>
										<motion.div
											className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={
												statDividerVariants
											}></motion.div>
										<motion.p
											className="text-sm text-gray-500 uppercase tracking-wider font-light"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statLabelVariants}>
											Population
										</motion.p>
										<motion.p
											className="text-3xl font-extralight mt-2 text-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statValueVariants}>
											{stats.population}
										</motion.p>
									</motion.div>
								)}
								{stats.established && (
									<motion.div
										className="relative pl-6 py-2"
										variants={statItemVariants}>
										<motion.div
											className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={
												statDividerVariants
											}></motion.div>
										<motion.p
											className="text-sm text-gray-500 uppercase tracking-wider font-light"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statLabelVariants}>
											Established
										</motion.p>
										<motion.p
											className="text-3xl font-extralight mt-2 text-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statValueVariants}>
											{stats.established}
										</motion.p>
									</motion.div>
								)}
								{stats.medianHomePrice && (
									<motion.div
										className="relative pl-6 py-2"
										variants={statItemVariants}>
										<motion.div
											className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={
												statDividerVariants
											}></motion.div>
										<motion.p
											className="text-sm text-gray-500 uppercase tracking-wider font-light"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statLabelVariants}>
											Median Price
										</motion.p>
										<motion.p
											className="text-3xl font-extralight mt-2 text-gray-800"
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											variants={statValueVariants}>
											{stats.medianHomePrice}
										</motion.p>
									</motion.div>
								)}
							</motion.div>
						)}
					</motion.div>

					{image && (
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.6, 0.05, 0.01, 0.99],
								delay: 0.4
							}}
							viewport={{ once: true }}
							className="order-1 lg:order-2 relative h-[400px] md:h-[500px] overflow-hidden">
							<div className="absolute inset-0 bg-black/5"></div>
							<Image
								src={image.url}
								alt={image.alt}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
};

export default CommunityAbout;
