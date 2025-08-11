"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function NapaValley() {
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

	const sectionVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				delay: 0.6 + i * 0.2,
				ease: [0.16, 1, 0.3, 1]
			}
		})
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

	// Wine region statistics
	const statistics = [
		{ label: "Wineries", value: "400+" },
		{ label: "Vineyards", value: "700+" },
		{ label: "Wine Varieties", value: "50+" },
		{ label: "Annual Visitors", value: "3.85M" }
	];

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
							05
						</motion.p>
						<motion.div
							className="h-[1px] bg-zinc-400 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							Destination
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl sm:text-6xl md:text-7xl mt-4 md:mt-6 font-light tracking-tight"
						variants={titleVariants}>
						Lake Geneva
					</motion.h2>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					{/* Left Column - Text Content */}
					<motion.div
						variants={contentVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}>
						{/* About Lake Geneva Section */}
						<motion.div
							custom={0}
							variants={sectionVariants}
							className="mb-16 md:mb-20">
							<h3 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800 mb-8">
								About Lake Geneva
							</h3>
							<p className="text-lg font-light leading-relaxed text-zinc-700">
								Legendary Real Estate has over $50 million in
								sales, trusted in Lake Geneva, Sonoma, and
								beyond. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat.
							</p>
						</motion.div>

						{/* Amenities Section */}
						<motion.div
							custom={1}
							variants={sectionVariants}
							className="mb-16 md:mb-20">
							<h3 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800 mb-8">
								Amenities
							</h3>
							<p className="text-lg font-light leading-relaxed text-zinc-700">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat.
							</p>
						</motion.div>

						{/* Community Section */}
						<motion.div
							custom={2}
							variants={sectionVariants}
							className="mb-16 md:mb-20">
							<h3 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800 mb-8">
								The Community
							</h3>
							<p className="text-lg font-light leading-relaxed text-zinc-700">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat.
							</p>
						</motion.div>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.8,
								delay: 0.9,
								ease: [0.16, 1, 0.3, 1]
							}}
							className="mt-10">
							<Link href="/listings/napa-valley">
								<motion.button
									className="px-12 py-5 bg-transparent border border-zinc-600 text-zinc-800 text-base tracking-widest font-light uppercase cursor-pointer transition-all duration-300"
									whileHover={{
										backgroundColor: "rgba(0, 0, 0, 0.03)",
										y: -2,
										transition: { duration: 0.4 }
									}}
									whileTap={{ scale: 0.98 }}>
									View Lake Geneva Listings
								</motion.button>
							</Link>
						</motion.div>
					</motion.div>

					{/* Right Column - Visual Elements */}
					<motion.div
						className="lg:sticky lg:top-32 h-fit"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}>
						{/* Featured Image */}
						<motion.div
							variants={imageVariants}
							className="relative h-[500px] mb-16 overflow-hidden">
							<Image
								src="/media/gr3.jpg"
								alt="Lake Geneva Vineyards"
								fill
								className="object-cover"
								style={{ objectPosition: "center" }}
								onError={(e) => {
									// Fallback styling if image doesn't exist
									const target = e.target as HTMLElement;
									target.style.backgroundColor = "#e5e5e5";
								}}
							/>
							<div className="absolute inset-0 bg-black/10"></div>
						</motion.div>

						{/* Quote */}
						<motion.div
							variants={sectionVariants}
							custom={0}
							className="mb-16 pl-8 border-l border-zinc-400">
							<blockquote className="text-2xl md:text-3xl font-light italic text-zinc-700 leading-relaxed">
								&ldquo;Lake Geneva isn&apos;t just about wine;
								it&apos;s a symphony of natural beauty, culinary
								excellence, and architectural elegance.&rdquo;
							</blockquote>
							<p className="mt-6 text-sm uppercase tracking-wider text-zinc-500 font-light">
								Wine Enthusiast Magazine
							</p>
						</motion.div>

						{/* Statistics */}
						<motion.div
							variants={sectionVariants}
							custom={1}
							className="grid grid-cols-2 gap-8">
							{statistics.map((stat, index) => (
								<div key={index} className="text-center">
									<p className="text-4xl md:text-5xl font-light text-zinc-800 mb-2">
										{stat.value}
									</p>
									<p className="text-sm uppercase tracking-wider text-zinc-500 font-light">
										{stat.label}
									</p>
								</div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
