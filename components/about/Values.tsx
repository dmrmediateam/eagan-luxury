"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Clock, Target, Home } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

interface ValueItem {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const values: ValueItem[] = [
	{
		title: "Unwavering Integrity",
		description:
			"Conducting every transaction with honesty and transparency, building the essential trust required to guide clients toward their best decisions in the New Jersey luxury market.",
		icon: <Handshake size={32} strokeWidth={1.5} />
	},
	{
		title: "Profound Insight & Expertise",
		description:
			"Leveraging deep knowledge of New Jersey' unique mountain properties and market trends to provide informed, astute guidance tailored to each client's mountain home aspirations.",
		icon: <Clock size={32} strokeWidth={1.5} />
	},
	{
		title: "Whole-Hearted Commitment",
		description:
			"A passionate dedication to understanding client desires for mountain living, ensuring a rewarding journey from finding the perfect New Jersey property to creating lasting mountain memories.",
		icon: <Target size={32} strokeWidth={1.5} />
	},
	{
		title: "Fostering Connection & Community",
		description:
			"Helping clients integrate into New Jersey' close-knit mountain community, introducing them to the area's natural beauty, cultural offerings, and the distinctive New Jersey lifestyle.",
		icon: <Home size={32} strokeWidth={1.5} />
	}
];

export function Values() {
	return (
		<div className="bg-white py-24 lg:py-32 relative">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				{/* Values Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<SectionTitle
						title="Our Guiding Principles"
						subtitle="These core principles guide every interaction and define our commitment to clients and community."
						centered={true}
					/>

					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								id={index.toString()}
								variants={itemVariants}
								className="bg-white rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700 ease-in-out p-10 md:p-12 flex flex-col h-full relative overflow-hidden group">
								<div className="w-16 h-16 flex items-center justify-center bg-[#FAFAFA] rounded-full mb-8 group-hover:bg-[#F7F5F0] transition-colors duration-500">
									<div className="text-[#B08D57]">
										{value.icon}
									</div>
								</div>

								<h3 className="text-xl md:text-2xl text-[#1A1A1A] font-serif font-medium mb-6 tracking-tight">
									{value.title}
								</h3>

								<p className="text-[#2B2B2B]/70 leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
