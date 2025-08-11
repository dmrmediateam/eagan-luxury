"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RelocationCTAProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3
		}
	}
};

const itemVariants = {
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

export function RelocationCTA({
	backgroundImage,
	title,
	subtitle
}: RelocationCTAProps) {
	return (
		<section
			className="relative bg-cover bg-center py-32"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			{/* Semi-transparent overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			<div className="relative z-10 mx-[5%] lg:mx-[10%] xl:mx-[15%] text-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="max-w-3xl mx-auto">
					<motion.h2
						variants={itemVariants}
						className="text-3xl md:text-4xl text-white font-serif mb-4">
						{title}
					</motion.h2>

					<motion.p
						variants={itemVariants}
						className="text-lg text-white/90 mb-8">
						{subtitle}
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/contact"
							className="inline-block px-8 py-3 bg-[#B08D57] text-white uppercase tracking-wider text-sm hover:bg-[#9A7D4E] transition-colors duration-300">
							Schedule a Consultation
						</Link>

						<Link
							href="/listings/featured"
							className="inline-block px-8 py-3 bg-transparent border border-white text-white uppercase tracking-wider text-sm hover:bg-white/10 transition-colors duration-300">
							View Featured Properties
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
