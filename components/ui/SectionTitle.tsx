"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
	title: string;
	subtitle?: string;
	centered?: boolean;
	className?: string;
	textColor?: "default" | "white";
}

const titleVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

const subtitleVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: 0.2,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	}
};

const decoratorVariants = {
	hidden: { width: 0 },
	visible: {
		width: "6rem",
		transition: {
			duration: 0.8,
			delay: 0.4,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export function SectionTitle({
	title,
	subtitle,
	centered = true,
	className = "",
	textColor = "default"
}: SectionTitleProps) {
	const titleColorClass =
		textColor === "white" ? "text-white" : "text-[#1A1A1A]";
	const subtitleColorClass =
		textColor === "white" ? "text-white/70" : "text-[#2B2B2B]/70";

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className={`${centered ? "text-center" : ""} mb-16 ${className}`}>
			<motion.h2
				variants={titleVariants}
				className={`${titleColorClass} font-serif text-3xl md:text-4xl lg:text-5xl mb-4 font-medium`}>
				{title}
			</motion.h2>

			{subtitle && (
				<motion.p
					variants={subtitleVariants}
					className={`${subtitleColorClass} font-sans max-w-2xl mx-auto mb-6`}>
					{subtitle}
				</motion.p>
			)}

			<motion.div
				variants={decoratorVariants}
				className={`h-px bg-[#B08D57] ${centered ? "mx-auto" : ""} mt-4`}></motion.div>
		</motion.div>
	);
}
