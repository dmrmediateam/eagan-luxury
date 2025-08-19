"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

// Enhanced animation variants for a more premium, luxury experience
const textVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			delay: custom * 0.15,
			ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for a more elegant motion
		}
	})
};

// Stats data
const stats = [
	{
		value: "10+",
		label: "YEARS OF EXPERIENCE"
	},
	{
		value: "250+",
		label: "HAPPY FAMILIES SERVED"
	},
	{
		value: "100%",
		label: "CLIENT SATISFACTION"
	}
];

export function About() {
	return (
		<section className="bg-white py-28" id="about">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-5xl mx-auto">
					{/* Header */}
					<SectionTitle
						title="About Cheryl Towey Services"
						subtitle="Dedicated real estate professional with a passion for helping families find their perfect home in New Jersey's most desirable communities."
						className="mb-20"
					/>

					{/* Stats Section */}
					<motion.div
						custom={5}
						variants={textVariants}
						className="mb-24 px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10">
							{stats.map((stat, index) => (
								<div
									key={index}
									className={`text-center flex flex-col items-center justify-center ${
										index !== 0 &&
										index !== stats.length - 1
											? "md:border-x md:border-weichert-lightgray md:px-12"
											: ""
									}`}>
									<p className="text-secondary font-serif text-4xl md:text-5xl mb-4 font-light">
										{stat.value}
									</p>
									<p className="text-[#222223]/70 text-xs tracking-[0.2em] font-sans">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</motion.div>

					{/* CTA Button */}
					<motion.div
						custom={7}
						variants={textVariants}
						className="flex justify-center">
						<Link
							href="#contact"
															className="inline-block px-8 py-3 bg-secondary text-[#222223] font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-secondary-dark">
							Learn More About Cheryl
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
