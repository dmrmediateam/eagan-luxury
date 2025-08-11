"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const sectionVariants = {
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

const answerVariants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	},
	visible: {
		opacity: 1,
		height: "auto",
		transition: {
			duration: 0.4,
			ease: [0.4, 0, 0.2, 1]
		}
	}
};

const faqItems = [
	{
		question: "What makes Lake Geneva area real estate unique?",
		answer: "Lake Geneva area real estate is distinguished by its diverse offerings, from luxury estates and vineyard properties to charming historic homes. The region&apos;s Mediterranean climate, world-class vineyards, and scenic landscapes create a unique market with specific considerations like water rights, agricultural zoning, and vineyard management."
	},
	{
		question:
			"How long does it typically take to buy a property in Lake Geneva area?",
		answer: "The timeline for purchasing property in Lake Geneva area can vary based on property type and market conditions. For standard residential properties, the process typically takes 30-45 days from accepted offer to closing. Vineyard properties or estates may take longer, often 60-90 days, due to additional inspections, water testing, and specialized financing requirements."
	},
	{
		question: "What should I look for when buying a vineyard property?",
		answer: "When purchasing a vineyard property, important considerations include water rights and sources, soil quality, vineyard age and health, grape variety and contracts, zoning and permits, equipment included, production facilities, and potential for tourism. A specialized vineyard inspection is strongly recommended."
	},
	{
		question:
			"Are there any special considerations for purchasing historic homes in the area?",
		answer: "Historic homes in Lake Geneva area often come with specific considerations including potential historic preservation requirements, limitations on renovations, older systems that may need updating, and sometimes higher insurance costs. We recommend thorough inspections and understanding any historical designations before purchasing."
	},
	{
		question:
			"How do seasonal changes affect the real estate market in Lake Geneva area?",
		answer: "The Lake Geneva area real estate market typically sees increased activity during spring and fall, coinciding with pleasant weather and the region&apos;s natural beauty. Summer can be busy with tourism-driven interest, while winter tends to be quieter but can offer opportunities for motivated buyers. Harvest season (August-October) can be especially competitive for vineyard properties."
	},
	{
		question:
			"What financing options are available for luxury properties and vineyards?",
		answer: "Financing for luxury and vineyard properties often involves specialized lenders familiar with Lake Geneva area real estate. Options include conventional jumbo loans, portfolio loans, agricultural loans for working vineyards, SBA loans for winery businesses, and private banking solutions. Down payment requirements are typically higher for these specialized properties."
	}
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="bg-white" id="faq">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-8">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
							className="mb-8 w-16 h-16">
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
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							FREQUENTLY ASKED QUESTIONS
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight mb-12">
						Find answers to common questions about real estate in
						Lake Geneva area. If you don&apos;t see your
						question here, please don&apos;t hesitate to contact us
						directly.
					</motion.p>

					<div className="mt-12 space-y-6">
						{faqItems.map((item, index) => (
							<motion.div
								key={index}
								variants={sectionVariants}
								className="border border-zinc-100 rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
								<button
									onClick={() => toggleFAQ(index)}
									className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-zinc-50 transition-all duration-300">
									<h3 className="text-lg md:text-xl font-medium text-zinc-800">
										{item.question}
									</h3>
									<motion.div
										className="ml-4 flex-shrink-0 w-8 h-8 rounded-none bg-zinc-50 flex items-center justify-center"
										animate={{
											backgroundColor:
												openIndex === index
													? "#f4f4f5"
													: "#fafafa",
											rotate:
												openIndex === index ? 180 : 0
										}}
										transition={{ duration: 0.3 }}>
										<svg
											className="w-5 h-5 text-zinc-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</motion.div>
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial="hidden"
											animate="visible"
											exit="hidden"
											variants={answerVariants}
											className="overflow-hidden">
											<div className="p-6 pt-0 bg-white">
												<motion.div
													initial={{
														opacity: 0,
														y: 10
													}}
													animate={{
														opacity: 1,
														y: 0
													}}
													transition={{
														duration: 0.3,
														delay: 0.1
													}}>
													<div className="h-px w-full bg-zinc-100 mb-6"></div>
													<p className="text-zinc-600 font-light leading-relaxed">
														{item.answer}
													</p>
												</motion.div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>

					<div className="flex justify-center mt-12">
						<motion.a
							variants={sectionVariants}
							href="/contact"
							className="px-8 py-3 text-zinc-700 border border-zinc-300 rounded-none hover:bg-zinc-100 transition-colors duration-300 font-medium text-center">
							Have More Questions? Contact Us
						</motion.a>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
