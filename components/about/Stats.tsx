"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

// Stats data
const stats = [
	{
		value: "$1B+",
		label: "COMBINED LIFETIME SALES"
	},
	{
		value: "100+",
		label: "COMBINED YEARS OF EXPERIENCE"
	},
	{
		value: "100%",
		label: "CLIENT SATISFACTION"
	}
];

const statsContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3
		}
	}
};

const statItemVariants = {
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

export function Stats() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="py-24 lg:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionTitle
					title="Our Stats"
					subtitle="We're proud to be recognized for our excellence in the real estate industry."
				/>

				{/* Stats Section */}
				<motion.div
					variants={statsContainerVariants}
					className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 md:py-12">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							variants={statItemVariants}
							className={`text-center flex flex-col items-center justify-center p-6 md:p-8 ${
								index !== 0 && index !== stats.length - 1
									? "md:border-x md:border-zinc-200"
									: ""
							}`}>
							<p className="text-[#B08D57] font-serif text-4xl md:text-5xl mb-4 font-light">
								{stat.value}
							</p>
							<p className="text-zinc-700 text-xs tracking-[0.2em] font-medium">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
