"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

export function SellToo() {
	return (
		<section id="sell-too" className="bg-[#F8F8F8] py-24">
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
								src="/mr/mr2.webp"
								alt="Luxury home for sale"
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
								Need to Sell, Too?
							</h2>

							<div className="h-[2px] w-24 bg-[#B08D57]"></div>

							<p className="text-[#2B2B2B]/80 leading-relaxed mt-4">
								We understand that many of our clients are both
								buying and selling simultaneously. Our team
								specializes in coordinating these transactions
								seamlessly, ensuring a smooth transition from
								your current home to your new lakefront retreat.
							</p>

							<ul className="space-y-3 mt-2">
								<li className="flex items-start">
									<span className="text-[#B08D57] mr-2">
										•
									</span>
									<span className="text-[#2B2B2B]/80">
										Synchronized closing timelines
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#B08D57] mr-2">
										•
									</span>
									<span className="text-[#2B2B2B]/80">
										Expert negotiation on contingent offers
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#B08D57] mr-2">
										•
									</span>
									<span className="text-[#2B2B2B]/80">
										Strategic marketing of your current
										property
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-[#B08D57] mr-2">
										•
									</span>
									<span className="text-[#2B2B2B]/80">
										Assistance with temporary housing if
										needed
									</span>
								</li>
							</ul>

							<div className="pt-8">
								<Link
									href="/sellers"
									className="inline-block px-10 py-4 border border-[#B08D57] text-[#B08D57] font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-white">
									LEARN ABOUT SELLING
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default SellToo;
