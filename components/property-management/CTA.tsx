"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PropertyManagementCTAProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
}

export const PropertyManagementCTA: React.FC<PropertyManagementCTAProps> = ({
	backgroundImage,
	title,
	subtitle
}) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
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

	const handleContactClick = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			window.scrollTo({
				top: contactSection.offsetTop,
				behavior: "smooth"
			});
		}
	};

	return (
		<section className="relative py-24 overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${backgroundImage})` }}>
				<div className="absolute inset-0 bg-black/60"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
				<motion.div
					className="max-w-3xl mx-auto text-center text-white"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					<motion.h2
						className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6"
						variants={itemVariants}>
						{title}
					</motion.h2>

					<motion.p
						className="text-lg md:text-xl text-white/90 mb-10"
						variants={itemVariants}>
						{subtitle}
					</motion.p>

					<motion.div variants={itemVariants}>
						<div className="flex flex-col sm:flex-row justify-center gap-6">
							<button
								onClick={handleContactClick}
								className="px-10 py-4 bg-[#B08D57] text-white text-base tracking-wide uppercase transition-all duration-300 hover:bg-[#C9A872] flex items-center justify-center gap-2 group">
								Get Started
								<ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
							</button>

							<button
								onClick={handleContactClick}
								className="px-10 py-4 border border-white text-white text-base tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-[#1A1A1A]">
								Learn More
							</button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
