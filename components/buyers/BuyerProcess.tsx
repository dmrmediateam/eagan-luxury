"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

interface Step {
	number: number;
	title: string;
	description: string;
}

const steps: Step[] = [
	{
		number: 1,
		title: "Personalized Home Consultation",
		description:
			"During our initial consultation, we'll discuss your vision, priorities, and specific needs for your dream home in the mountains. Together, we'll craft a detailed wish list, outlining your desired features, amenities, and preferences, ensuring a clear and comprehensive guide to finding your ideal property."
	},
	{
		number: 2,
		title: "Explore Potential Properties",
		description:
			"Walk through handpicked properties, envisioning your life in each space. Consider the layout, neighborhood, and overall feel of the space, envision how you could make it your own. Pay attention to details like lighting, storage, and any potential for future improvements, all while considering how the property fits into your long-term goals."
	},
	{
		number: 3,
		title: "Negotiating the Offer",
		description:
			"Using in-depth market knowledge and expertise, we'll negotiate on your behalf to secure terms that are most favorable to you. This will include not only the purchase price but also other key aspects such as due diligence period, closing timeline, and any personal property. Our goal is to ensure you get the best possible deal while protecting your interests throughout the process."
	},
	{
		number: 4,
		title: "Due Diligence and Inspections",
		description:
			"After your offer is accepted, we will schedule home, pest and radon inspections to assess the property for defects. Additional inspections such as septic, chimney, or mold testing may be needed for a thorough evaluation. We will guide you through this process, reviewing the reports carefully and, if necessary, requesting repairs or negotiating credits with the seller to address any concerns. This is also the time to get financing in place if needed."
	},
	{
		number: 5,
		title: "Review and Finalize Legal Documents",
		description:
			"In Wisconsin, we close with attorneys rather than title companies. After the Due Diligence period, your attorney will conduct a title examination and prepare the necessary closing documents. Just before the closing date, we&apos;ll review these documents together and conduct a final walk-through of the property to ensure any required repairs have been completed and the home is in the same condition as agreed."
	},
	{
		number: 6,
		title: "Home Sweet Home",
		description:
			"On closing day, we proudly hand you the keys to your new home. This is the moment when all the hard work comes together, and you can begin creating memories in a space that&apos;s truly yours. Welcome home!"
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

export function BuyerProcess() {
	return (
		<section className="bg-white py-24" id="buyer-process">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<SectionTitle
					title="From Dream to Reality"
					subtitle="Let's find it together. From our first meeting to the keys in your hand, we're with you every step of the way."
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
							<p className="text-[#2B2B2B]/80 leading-relaxed ml-[5.25rem]">
								{step.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default BuyerProcess;
