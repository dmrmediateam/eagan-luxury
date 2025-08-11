"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

// FAQ interface
interface Faq {
	id: string;
	question: string;
	answer: string;
}

// List of frequently asked questions
const faqs: Faq[] = [
	{
		id: "faq-1",
		question: "What areas do you serve in Wisconsin?",
		answer: "Legendary Real Estate proudly serves Lake Geneva, Lake Geneva, Sapphire, Glenville, Lake Toxaway, and Franklin in Wisconsin, as well as Sky Valley in Georgia. We specialize in luxury properties throughout the Western Wisconsin mountain region."
	},
	{
		id: "faq-2",
		question: "How do I schedule a property viewing?",
		answer: "You can schedule a property viewing by contacting us directly at (828) 743-0072, sending an email to info@michaudrauersgroupnc.com, or using the contact form on this page. Our team will promptly respond to arrange a convenient time for your viewing."
	},
	{
		id: "faq-3",
		question: "What should I expect during the home buying process?",
		answer: "The home buying process typically involves several steps: getting pre-approved for a mortgage, searching for properties, making an offer, conducting inspections, securing financing, and closing the deal. Our experienced agents will guide you through each step, ensuring a smooth and informed journey to finding your dream mountain home."
	},
	{
		id: "faq-4",
		question:
			"How do you determine the right listing price for my property?",
		answer: "We conduct a comprehensive comparative market analysis (CMA) that evaluates similar properties in your area, recent sales, current market conditions, and your home's unique features and condition. This data-driven approach, combined with our extensive knowledge of the local luxury market, helps us determine the optimal listing price for your property."
	},
	{
		id: "faq-5",
		question: "What makes the Lake Geneva area special?",
		answer: "The Lake Geneva area offers an unparalleled mountain living experience with breathtaking views, mild four-season climate, vibrant cultural scenes, world-class dining, boutique shopping, and outdoor recreational activities. The area's close-knit communities, combined with its natural beauty and luxury amenities, make it one of the most sought-after regions in the Southeast."
	},
	{
		id: "faq-6",
		question: "Do you assist with relocation to the area?",
		answer: "Absolutely! We provide comprehensive relocation assistance to help you seamlessly transition to the Western Wisconsin mountains. From introducing you to different communities and lifestyles to connecting you with local services and resources, we're dedicated to making your move as smooth as possible."
	}
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const contentVariants = {
	hidden: { opacity: 0, height: 0 },
	visible: {
		opacity: 1,
		height: "auto",
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export function ContactFaqs() {
	const [openFaq, setOpenFaq] = useState<string | null>(null);

	const toggleFaq = (id: string) => {
		setOpenFaq(openFaq === id ? null : id);
	};

	return (
		<section className="py-20 bg-[#F8F8F8]">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="Frequently Asked Questions"
					subtitle="Find answers to common questions about buying and selling property in the Lake Geneva area"
				/>

				<motion.div
					className="max-w-4xl mx-auto"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}>
					{faqs.map((faq) => (
						<motion.div
							key={faq.id}
							className="mb-6 border-b border-[#E5E5E5] pb-4"
							variants={itemVariants}>
							<button
								onClick={() => toggleFaq(faq.id)}
								className="flex justify-between items-center w-full text-left py-4 focus:outline-none group">
								<h3 className="text-xl font-serif text-[#1A1A1A] pr-8">
									{faq.question}
								</h3>
								<span
									className={`text-[#B08D57] transition-transform duration-300 ${openFaq === faq.id ? "transform rotate-45" : ""}`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round">
										<line
											x1="12"
											y1="5"
											x2="12"
											y2="19"></line>
										<line
											x1="5"
											y1="12"
											x2="19"
											y2="12"></line>
									</svg>
								</span>
							</button>
							<AnimatePresence>
								{openFaq === faq.id && (
									<motion.div
										initial="hidden"
										animate="visible"
										exit="hidden"
										variants={contentVariants}
										className="overflow-hidden">
										<p className="text-[#2B2B2B]/70 pb-6 leading-relaxed">
											{faq.answer}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
