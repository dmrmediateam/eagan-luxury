"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutImproved = () => {
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

	const paragraphVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				delay: 0.6 + i * 0.1,
				ease: [0.16, 1, 0.3, 1]
			}
		})
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
							01
						</motion.p>
						<motion.div
							className="h-[1px] bg-zinc-400 mx-auto"
							variants={dividerVariants}></motion.div>
						<motion.p
							className="text-base md:text-lg font-light tracking-wider text-zinc-600"
							variants={headerItemVariants}>
							Philosophy
						</motion.p>
					</motion.div>
					<motion.h2
						className="text-5xl sm:text-6xl md:text-7xl mt-4 md:mt-6 font-light tracking-tight"
						variants={titleVariants}>
						Our Approach
					</motion.h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
					{/* INSIGHT Section */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-8">
						<div className="flex flex-col items-start h-32">
							<div className="mb-8 w-12 h-12"></div>
							<motion.h3
								variants={titleVariants}
								className="text-3xl md:text-4xl text-zinc-800 font-light tracking-tight">
								Insight
							</motion.h3>
						</div>

						<motion.p
							custom={0}
							variants={paragraphVariants}
							className="text-lg font-light leading-relaxed text-zinc-700">
							Legendary Real Estate has over $50 million in sales,
							trusted in Lake Geneva, Sonoma, and beyond. Lorem
							ipsum dolor sit amet, consectetuer adipiscing elit,
							sed diam nonummy nibh euismod tincidunt ut laoreet
							dolore magna aliquam erat volut. Ut wisi enim ad
							minim veniam, quis nostrud exerci tation ullamcorper
							suscipit lobortis nisl ut aliquip ex ea commodo
							consequat.
						</motion.p>
					</motion.div>

					{/* STRATEGIC Section */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-8">
						<div className="flex flex-col items-start h-32">
							<div className="mb-8 w-12 h-12"></div>
							<motion.h3
								variants={titleVariants}
								className="text-3xl md:text-4xl text-zinc-800 font-light tracking-tight">
								Strategic
							</motion.h3>
						</div>

						<motion.p
							custom={1}
							variants={paragraphVariants}
							className="text-lg font-light leading-relaxed text-zinc-700">
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet dolore magna aliquam erat volutpat. Ut wisi
							enim ad minim veniam, quis nostrud. Lorem ipsum
							dolor sit amet, consector adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore
							magna aliquam erat volutpat. Ut wisi enim ad minim
							veniam, quis nostrud exerci tation ullamcorper.
						</motion.p>
					</motion.div>
				</div>

				{/* CONTACT US Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.8,
						delay: 0.9,
						ease: [0.16, 1, 0.3, 1]
					}}
					className="mt-20 md:mt-24">
					<Link href="/contact">
						<motion.button
							className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-zinc-600 text-zinc-800 text-base tracking-wider font-light uppercase cursor-pointer transition-all duration-300 hover:bg-zinc-100"
							whileHover={{
								y: -2,
								transition: { duration: 0.3 }
							}}
							whileTap={{ scale: 0.98 }}>
							Contact Us
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutImproved;
