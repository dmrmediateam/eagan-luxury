"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

export function HomeValuation() {
	return (
		<section id="home-valuation" className="bg-[#F8F8F8] py-24">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* Image */}
					<motion.div
						variants={itemVariants}
						className="relative aspect-[4/3] w-full overflow-hidden">
						<div className="absolute inset-0 bg-gray-200">
							<Image
								src="/mr/mr1.webp"
								alt="Luxury home valuation"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 z-10"></div>
					</motion.div>

					{/* Content */}
					<motion.div variants={itemVariants}>
						<div className="flex flex-col space-y-6">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] font-medium">
								Informed Selling Begins Here
							</h2>

							<div className="h-[2px] w-24 bg-[#B08D57]"></div>

							<p className="text-[#2B2B2B]/80 leading-relaxed mt-4">
								How much could you actually sell your home for?
								Find out what your home is worth and may sell
								for in today&apos;s market. We&apos;ll prepare a
								personalized report for you.
							</p>

							<a className="pt-8" href="/contact">
								<button className="inline-block px-10 py-4 bg-[#B08D57] text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#8A6D3B] hover:shadow-md">
									START HERE
								</button>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default HomeValuation;
