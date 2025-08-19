"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CTAProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
}

export function TestimonialsCTA({
	backgroundImage,
	title,
	subtitle
}: CTAProps) {
	return (
		<section className="relative">
			<div
				className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-cover bg-center bg-no-repeat min-h-[400px]"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
				}}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-4xl">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 font-serif">
						{title}
					</h2>
					<p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
						{subtitle}
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-6">
						<Link
							href="/contact"
							className="px-8 py-4 bg-[#B08D57] text-white text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
							Contact Us
						</Link>
						<Link
							href="/listings/active"
							className="px-8 py-4 border border-white text-white text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
							View Properties
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
