"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import Link from "next/link";

interface Step {
	number: number;
	title: string;
	description: string;
	cta?: {
		text: string;
		link: string;
	};
}

const steps: Step[] = [
	{
		number: 1,
		title: "Meet For a Personalized Home Assessment",
		description:
			"What made you choose to live in your home? What makes your home special? Uncovering this will help us position your property in its finest light to showcase its true value."
	},
	{
		number: 2,
		title: "Review Market Data & Conditions",
		description:
			"We know that maximizing your investment is crucial to a successful outcome. We will research and provide all the data to ensure we are selling for the best price based on your home's condition and the local market conditions."
	},
	{
		number: 3,
		title: "Professional Home Staging & Preparation",
		description:
			"In addition to market research and overall consultation, we will walk through your home room by room with you and assist in the staging process to prep for our professional photographer. Should you request a professional stager with furniture, we have you covered there too!"
	},
	{
		number: 4,
		title: "Let's Advertise Your Home",
		description:
			"Our approach includes a targeted digital marketing strategy, social media advertising, email marketing and personalized 1 to 1 outreach to the right buyer.",
	},
	{
		number: 5,
		title: "Opening Your Doors To Buyers",
		description:
			"With every showing, we aim to create a buzz and energy that will generate a sense of urgency and potential fear of loss if buyers don't act on their interest in your home."
	},
	{
		number: 6,
		title: "Close & Celebrate!",
		description:
			"We'll handle all the details to make sure the closing of your home goes smoothly. Then we celebrate!"
	}
];

// Animation variants
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
	hidden: { opacity: 0, y: 30 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: custom * 0.1,
			ease: [0.25, 0.1, 0.25, 1.0]
		}
	})
};

export function SellerProcess() {
	return (
		<section id="seller-process" className="bg-white py-24">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<SectionTitle
					title="Our Mission Is Simple"
					subtitle="To make the selling process as stress-free as possible"
					centered={true}
					className="mb-16"
				/>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							custom={index}
							variants={itemVariants}
							className="relative flex flex-col group">
							<div className="flex items-center mb-5">
								<div className="flex-shrink-0 mr-5 relative">
									<div className="w-16 h-16 flex items-center justify-center">
										<div className="absolute inset-0 bg-[#F8F8F8] rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-500"></div>
										<span className="relative z-10 text-[#B08D57] font-serif text-3xl font-light tracking-tight">
											{String(step.number).padStart(
												2,
												"0"
											)}
										</span>
									</div>
									<div className="absolute left-8 top-8 w-[1px] h-[calc(100%+2rem)] bg-[#E5E5E5] -z-10"></div>
								</div>
								<h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-medium">
									{step.title}
								</h3>
							</div>
							<div className="text-[#2B2B2B]/80 leading-relaxed ml-[5.25rem]">
								<p>{step.description}</p>
								{step.cta && (
									<div className="mt-4">
										<Link
											href={step.cta.link}
											className="inline-block text-[#B08D57] font-medium border-b border-[#B08D57] pb-1 hover:text-[#8A6D3B] hover:border-[#8A6D3B] transition-colors duration-300">
											{step.cta.text}
										</Link>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default SellerProcess;
