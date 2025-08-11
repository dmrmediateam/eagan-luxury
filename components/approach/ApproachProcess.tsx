"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
	{
		number: "01",
		title: "INSIGHTFUL DISCOVERY & CLARITY",
		description:
			"We begin by truly being present, engaging in in-depth dialogue to gain a profound understanding of your unique vision, priorities, and objectives, whether buying or selling within the distinct landscapes of Napa or Sonoma. Clarity is our starting point."
	},
	{
		number: "02",
		title: "CRAFTING YOUR BESPOKE STRATEGY",
		description:
			"Leveraging our intimate knowledge of the Lake Geneva area market and its nuances, we meticulously craft a personalized strategy, a bespoke roadmap designed to position you for optimal success amidst the region's dynamic real estate environment."
	},
	{
		number: "03",
		title: "METICULOUS IMPLEMENTATION",
		description:
			"With your tailored plan defined, we orchestrate its execution with unwavering attention to detail. Our extensive network and curated resources are purposefully deployed to ensure sophisticated presentation, targeted exposure, and the realization of superior results."
	},
	{
		number: "04",
		title: "ASTUTE ADVOCACY & NEGOTIATION",
		description:
			"As your dedicated advocates, we navigate negotiations with strategic acumen and skill. Our focus remains steadfastly on your best interests, ensuring the most favorable terms are achieved, whether securing your ideal property or maximizing the value of your sale."
	},
	{
		number: "05",
		title: "SEAMLESS TRANSITION & ENDURING PARTNERSHIP",
		description:
			"We provide expert guidance through the intricacies of closing, ensuring a smooth and transparent transition. Beyond the final signature, our commitment endures; we remain your trusted advisors and a dedicated resource within the Lake Geneva area community for years to come, fostering the enduring relationships we value most."
	}
];

const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

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

const stepVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const headingVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export default function ApproachProcess() {
	return (
		<div className="bg-zinc-100">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				{/* Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="mb-16 text-center">
					<motion.div
						variants={logoVariants}
						className="mb-8 w-16 h-16 mx-auto">
						<Image
							src="/logos/keylogo.png"
							alt="Key Icon"
							width={64}
							height={64}
							className="w-full h-full object-contain"
						/>
					</motion.div>
					<motion.h2
						variants={headingVariants}
						className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center mb-4">
						OUR GUIDED APPROACH
					</motion.h2>
					<motion.p
						variants={headingVariants}
						className="text-zinc-600 text-lg max-w-3xl mx-auto font-extralight">
						Navigating Your Lake Geneva Real Estate Journey with
						Insight and Purpose
					</motion.p>
				</motion.div>

				{/* Process Steps */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}>
					{processSteps.map((step) => (
						<motion.div
							key={step.number}
							variants={stepVariants}
							className="bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out p-10 md:p-12 flex flex-col h-full">
							<div className="h-full flex flex-col">
								<div className="flex flex-col mb-6">
									<span className="text-4xl font-extralight text-zinc-400 tracking-tight">
										{step.number}
									</span>
									<div className="h-[1px] w-16 bg-zinc-200 rounded-full mt-2"></div>
								</div>
								<h3 className="text-lg md:text-xl text-zinc-700 font-light tracking-wide mb-3 text-left">
									{step.title}
								</h3>
								<p className="text-zinc-600 font-extralight leading-relaxed text-left text-base md:text-lg">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</section>
		</div>
	);
}
