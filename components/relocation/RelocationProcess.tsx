"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Step data with icons
const steps = [
	{
		number: "01",
		title: "Initial Consultation",
		description:
			"We begin with a personalized consultation to understand your needs, preferences, and timeline for relocating to the Lake Geneva area."
	},
	{
		number: "02",
		title: "Area Introduction",
		description:
			"Explore different neighborhoods and communities with our expert guidance to find the perfect location that matches your lifestyle and preferences."
	},
	{
		number: "03",
		title: "Property Search",
		description:
			"Based on your criteria, we'll curate a selection of properties that align with your vision, including exclusive off-market opportunities."
	},
	{
		number: "04",
		title: "Local Resources",
		description:
			"Connect with our network of trusted local professionals, from home inspectors to contractors, schools, healthcare providers, and more."
	},
	{
		number: "05",
		title: "Seamless Transition",
		description:
			"We provide ongoing support throughout your move and settling-in process, ensuring a smooth transition to your new mountain lifestyle."
	}
];

// Animation variants
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
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const RelocationProcess = () => {
	return (
		<section className="py-24 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="Our Relocation Process"
					subtitle="We've refined our relocation process to ensure a seamless transition to your new mountain home"
				/>

				<motion.div
					className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}>
					{steps.map((step, index) => {
						return (
							<motion.div
								key={index}
								className="flex flex-col p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
								variants={itemVariants}>
								<div className="flex items-center mb-4">
									<span className="text-4xl font-serif text-[#B08D57]/70 mr-3">
										{step.number}
									</span>
								</div>
								<h3 className="text-xl font-serif text-[#1A1A1A] mb-3">
									{step.title}
								</h3>
								<p className="text-[#2B2B2B]/70 flex-grow">
									{step.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default RelocationProcess;
