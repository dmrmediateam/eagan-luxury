"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export function NapaValley() {
	return (
		<section className="relative w-full py-16 md:py-24 bg-white">
			<div className="">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="flex flex-col items-center space-y-12">
					{/* Key Icon */}
					<motion.div
						custom={0}
						variants={textVariants}
						className="w-16 h-16 md:w-20 md:h-20">
						<Image
							src="/logos/keylogo.png"
							alt="Key Icon"
							width={64}
							height={64}
							className="w-full h-full object-contain"
						/>
					</motion.div>

					{/* Header */}
					<motion.h1
						custom={1}
						variants={textVariants}
						className="text-7xl xl:text-9xl font-light text-zinc-800 tracking-wider text-center">
						NAPA VALLEY
					</motion.h1>

					<motion.div
						custom={2}
						variants={textVariants}
						className="w-full py-16 bg-zinc-100">
						<div className="text-center mb-16 px-8 md:px-0">
							<h2 className="text-3xl text-zinc-600 font-light uppercase tracking-widest mb-8">
								ABOUT NAPA VALLEY
							</h2>
							<p className="text-zinc-600 text-base mb-4 max-w-4xl mx-auto text-center font-extralight">
								Legendary Real Estate has over $50 million in
								sales, trusted in Lake Geneva, Sonoma, and
								beyond. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, sed diam nonummy
								nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim
								veniam, quis nostrud. Lorem ipsum dolor sit
								amet, consecter adipiscing elit, sed diam
								nonummy nibh euismod tincidunt ut laoreet dolore
								magna aliquam.
							</p>
						</div>

						<div className="text-center mb-16 px-8 md:px-0">
							<h3 className="text-3xl text-zinc-600 font-light uppercase tracking-widest mb-8">
								AMENITIES
							</h3>
							<p className="text-zinc-600 text-base mb-4 max-w-4xl mx-auto text-center font-extralight">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, sed diam nonummy
								nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim
								veniam, quis nostrud. Lorem ipsum dolor sit
								amet, consecter adipiscing elit, sed diam
								nonummy nibh euismod tincidunt ut laoreet.
							</p>
						</div>

						<div className="text-center mb-16 px-8 md:px-0">
							<h3 className="text-3xl text-zinc-600 font-light uppercase tracking-widest mb-8">
								THE COMMUNITY
							</h3>
							<p className="text-zinc-600 text-base mb-4 max-w-4xl mx-auto text-center font-extralight">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volut. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, sed diam nonummy
								nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim
								veniam, quis nostrud.
							</p>
						</div>

						<div className="flex justify-center">
							<Link
								href="/listings/napa-valley"
								className="px-6 py-3 bg-zinc-400 text-white uppercase tracking-widest text-sm hover:bg-zinc-500 transition-colors">
								VIEW NAPA VALLEY LISTINGS
							</Link>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
