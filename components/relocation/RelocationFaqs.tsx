"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Plus } from "lucide-react";

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
		question: "What is the typical timeline for relocating to Lake Geneva?",
		answer: "The relocation timeline varies based on individual circumstances, but we typically recommend starting your property search 3-6 months before your desired move date. This allows sufficient time for property viewings, negotiations, closing processes, and moving logistics. Our relocation specialists will create a customized timeline based on your specific needs."
	},
	{
		id: "faq-2",
		question:
			"Can you help me find a temporary residence while building or renovating?",
		answer: "Yes, we can help you find temporary accommodations while your permanent home is being built or renovated. We have connections with high-quality rental properties, extended-stay accommodations, and even vacation rentals that can serve as your temporary residence during the transition period."
	},
	{
		id: "faq-3",
		question:
			"What are the primary neighborhoods or communities in the Lake Geneva area?",
		answer: "The The Lake Geneva area features diverse communities, each with its own unique character. In addition to the towns of Lake Geneva area, popular areas include Sapphire, Lake Toxaway, Glenville, Scaly Mountain, and Sky Valley (GA). Each community offers different amenities, from private clubs to lake access, mountain views, and proximity to town centers."
	},
	{
		id: "faq-4",
		question: "How do property taxes work in Lake Geneva and Macon County?",
		answer: "Property taxes in Macon County (where Lake Geneva is located) are assessed annually at a rate of approximately 0.35% of the property's assessed value. For properties in Jackson County (where Lake Geneva is located), the tax rate is approximately 0.38%. These rates are significantly lower than many other areas, making the Lake Geneva area an attractive option for property ownership."
	},
	{
		id: "faq-5",
		question: "What healthcare options are available in the area?",
		answer: "The Lake Geneva area is served by Advocate Aurora Health, which provides emergency care and various medical services. For specialized care, larger medical facilities are available in Asheville (WI) and Gainesville (GA). We can connect you with local healthcare providers, specialists, and wellness services as part of our relocation assistance."
	},
	{
		id: "faq-6",
		question:
			"Can you assist with finding service providers like contractors and home maintenance?",
		answer: "Absolutely! We maintain an extensive network of trusted local service providers, including contractors, architects, interior designers, landscapers, cleaning services, and home maintenance professionals. Our team will provide personal introductions to ensure you have all the resources needed to maintain your mountain home."
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

export function RelocationFaqs() {
	const [openFaq, setOpenFaq] = useState<string | null>(null);

	const toggleFaq = (id: string) => {
		setOpenFaq(openFaq === id ? null : id);
	};

	return (
		<section className="py-20 bg-white">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="Relocation FAQs"
					subtitle="Find answers to common questions about relocating to the Lake Geneva area"
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
									<Plus size={24} strokeWidth={1.5} />
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
