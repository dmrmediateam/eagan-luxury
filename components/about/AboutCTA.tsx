"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
interface AboutCTAProps {
	backgroundImage?: string;
	title?: string;
	subtitle?: string;
	buttonText?: string;
	buttonLink?: string;
}

const fadeInVariants = {
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

const slideInVariants = {
	hidden: { width: 0 },
	visible: {
		width: "100%",
		transition: {
			duration: 1.2,
			ease: [0.22, 1, 0.36, 1],
			delay: 0.3
		}
	}
};

export function AboutCTA({
	title = "Ready to Find Your Lake Geneva Dream Home?",
	subtitle = "Let our experienced team guide you through the process with personalized service and local expertise.",
	buttonText = "Contact Us Today",
	buttonLink = "#contact"
}: AboutCTAProps) {
	return (
		<div className="relative py-28 md:py-36 lg:py-44 overflow-hidden">
			<Image
				src="/mr/mr2.webp"
				alt="Lake Geneva Estate"
				width={1920}
				height={1080}
				className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90"
				priority
			/>
			{/* Overlay with gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>

			<div className="relative z-10 mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="max-w-3xl mx-auto text-center text-white px-6 md:px-10 py-12 md:py-16 border border-[#B08D57]/20 backdrop-blur-sm bg-black/10">
					{/* Gold accent line */}

					<motion.h2
						variants={fadeInVariants}
						className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 font-medium">
						{title}
					</motion.h2>

					<motion.p
						variants={fadeInVariants}
						className="font-sans max-w-2xl mx-auto mb-6 text-gray-100">
						{subtitle}
					</motion.p>

					{/* Gold accent line */}
					<div className="relative mx-auto w-16 h-[1px] mb-10">
						<motion.div
							variants={slideInVariants}
							className="absolute top-0 left-0 h-full bg-[#B08D57]"
						/>
					</div>

					<motion.div variants={fadeInVariants}>
						<Link
							href={buttonLink}
							className="relative inline-block px-10 py-4 group overflow-hidden">
							<span className="absolute inset-0 w-full h-full bg-[#B08D57] transition-all duration-500 ease-in-out group-hover:bg-transparent border border-[#B08D57]"></span>
							<span className="relative z-10 text-white text-sm uppercase tracking-[0.2em] font-light group-hover:text-[#B08D57] transition-colors duration-500">
								{buttonText}
							</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
