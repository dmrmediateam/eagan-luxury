"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const leftLocations = [
	"Calistoga",
	"Howell Mountain",
	"Diamond Mountain District",
	"Chiles Valley District",
	"Spring Mountain District",
	"St. Helena",
	"Rutherford",
	"Oakville",
	"Atlas Peak"
];

const rightLocations = [
	"Mt. Veeder",
	"Yountville",
	"2 Stags Leap",
	"Oak Knoll District",
	"Coombsville",
	"Wild Horse Valley",
	"Los Carneros",
	"Angwin"
];

export function NapaMap() {
	const [activeLocation, setActiveLocation] = useState<string | null>(null);

	// Animation variants for header elements
	const headerContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2
			}
		}
	};

	const headerItemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const dividerVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: "8rem",
			opacity: 0.8,
			transition: {
				duration: 1,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				delay: 0.4,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.6,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1.2,
				delay: 0.3,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	const handleLocationClick = (location: string) => {
		setActiveLocation(activeLocation === location ? null : location);
	};

	return (
		<section className="py-28 md:py-32 bg-zinc-50 text-zinc-800">
			<div className="mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<motion.div
					className="text-left mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					<motion.div
						className="flex items-center w-fit gap-4 md:gap-5"
						variants={headerContainerVariants}>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							06
						</motion.p>
						<motion.div
							className="h-[1px] bg-zinc-400 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							Regions
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl sm:text-6xl md:text-7xl mt-4 md:mt-6 font-light tracking-tight"
						variants={titleVariants}>
						New Jersey
					</motion.h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
					variants={contentVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}>
					{/* Map Image */}
					<motion.div
						variants={imageVariants}
						className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
						<div className="h-full w-full relative">
							<Image
								src="/media/map.png"
								alt="New Jersey Map"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-zinc-50/80 via-transparent to-zinc-50/80 pointer-events-none"></div>
						</div>
					</motion.div>

					{/* Locations List */}
					<div className="flex flex-col justify-center">
						<h3 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800 mb-10">
							Cities & Appellations
						</h3>
						<div className="grid grid-cols-2 gap-x-6 gap-y-4">
							{/* Left Column */}
							<div>
								{leftLocations.map((location) => (
									<div
										key={location}
										className="mb-5 cursor-pointer">
										<motion.span
											onClick={() =>
												handleLocationClick(location)
											}
											className="inline-block text-lg font-light"
											initial={false}
											animate={{
												x:
													activeLocation === location
														? 10
														: 0,
												fontWeight:
													activeLocation === location
														? 400
														: 300,
												color:
													activeLocation === location
														? "#18181b"
														: "#71717a"
											}}
											whileHover={{
												x:
													activeLocation === location
														? 10
														: 4,
												transition: {
													type: "tween",
													duration: 0.2
												}
											}}
											transition={{
												duration: 0.3,
												ease: [0.16, 1, 0.3, 1],
												fontWeight: {
													duration: 0.1
												}
											}}>
											{location}
										</motion.span>
									</div>
								))}
							</div>

							{/* Right Column */}
							<div className="text-right">
								{rightLocations.map((location) => (
									<div
										key={location}
										className="mb-5 cursor-pointer">
										<motion.span
											onClick={() =>
												handleLocationClick(location)
											}
											className="inline-block text-lg font-light"
											initial={false}
											animate={{
												x:
													activeLocation === location
														? -10
														: 0,
												fontWeight:
													activeLocation === location
														? 400
														: 300,
												color:
													activeLocation === location
														? "#18181b"
														: "#71717a"
											}}
											whileHover={{
												x:
													activeLocation === location
														? -10
														: -4,
												transition: {
													type: "tween",
													duration: 0.2
												}
											}}
											transition={{
												duration: 0.3,
												ease: [0.16, 1, 0.3, 1],
												fontWeight: {
													duration: 0.1
												}
											}}>
											{location}
										</motion.span>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
