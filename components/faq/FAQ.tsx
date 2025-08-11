"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ as FAQType, getCategoryDisplayName } from "@/lib/data/faqs";
import { useRouter, usePathname } from "next/navigation";

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

// Default dummy FAQs to use when no Sanity data is available
const dummyFaqs: FAQType[] = [
	{
		_id: "1",
		question: "What areas do you serve in Lake Geneva area?",
		answer: "We provide real estate services throughout the Lake Geneva area, specializing in luxury lakefront properties across Lake Geneva, Williams Bay, Fontana-on-Geneva-Lake, and Delavan Lake.",
		category: "general",
		order: 1,
		isActive: true
	},
	{
		_id: "2",
		question:
			"What sets Legendary Real Estate apart from other real estate agencies?",
		answer: "Legendary Real Estate combines deep local knowledge of Lake Geneva area with exceptional personalized service. Our team brings decades of experience, exclusive market access, sophisticated marketing strategies, and a commitment to discretion and confidentiality for high-profile clients.",
		category: "general",
		order: 2,
		isActive: true
	},
	{
		_id: "3",
		question:
			"How long have you been serving the Lake Geneva area real estate market?",
		answer: "Our team has over 20 years of combined experience in the Lake Geneva area luxury real estate market. This extensive experience provides our clients with valuable insights into neighborhood dynamics, property values, and investment opportunities in Lake Geneva area.",
		category: "general",
		order: 3,
		isActive: true
	},
	{
		_id: "4",
		question: "Do you work with first-time homebuyers?",
		answer: "Absolutely. We work with clients at all stages of their real estate journey. For first-time homebuyers, we provide additional guidance throughout the process, from securing financing to navigating inspections and closing procedures, ensuring a smooth and positive experience.",
		category: "buying",
		order: 4,
		isActive: true
	},
	{
		_id: "5",
		question: "What should I know about buying vineyard property?",
		answer: "Purchasing vineyard property involves unique considerations including water rights, agricultural zoning, grape contracts, soil quality, and equipment. We have specialized experience in vineyard transactions and can guide you through the specific due diligence required, connecting you with viticulture experts when needed.",
		category: "vineyard",
		order: 5,
		isActive: true
	},
	{
		_id: "6",
		question: "How do I prepare my luxury property for sale?",
		answer: "Preparing a luxury property for market involves strategic improvements, professional staging, and sophisticated marketing. We provide a comprehensive pre-listing consultation to identify value-adding enhancements, coordinate with premium staging services, and develop a custom marketing strategy that highlights your property's unique features.",
		category: "selling",
		order: 6,
		isActive: true
	},
	{
		_id: "7",
		question: "Do you assist with relocation to the Lake Geneva area?",
		answer: "Yes, we specialize in helping clients relocate to Lake Geneva area. Our relocation services include personalized area tours, school information, lifestyle guidance, and connections to local resources. We strive to make your transition to the Lake Geneva area as seamless as possible.",
		category: "relocation",
		order: 7,
		isActive: true
	},
	{
		_id: "8",
		question:
			"How can I stay informed about new luxury listings before they hit the market?",
		answer: "Join our exclusive pre-market listing network by contacting our office. We provide our registered clients with early access to upcoming properties, particularly for exclusive off-market opportunities that may never be publicly listed.",
		category: "luxury",
		order: 8,
		isActive: true
	}
];

// Categories with their readable names and values
const categoryOptions = [
	{ label: "All Categories", value: "all" },
	{ label: "General Questions", value: "general" },
	{ label: "Buying a Property", value: "buying" },
	{ label: "Selling Your Property", value: "selling" },
	{ label: "Vineyard Properties", value: "vineyard" },
	{ label: "Luxury Real Estate", value: "luxury" },
	{ label: "Relocation Services", value: "relocation" },
	{ label: "Lake Geneva area Living", value: "wine-country" },
	{ label: "Our Services", value: "services" }
];

interface FAQComponentProps {
	faqs?: FAQType[];
	initialCategory?: string;
}

export function FAQ({ faqs = [], initialCategory = "all" }: FAQComponentProps) {
	const router = useRouter();
	const pathname = usePathname();
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [selectedCategory, setSelectedCategory] =
		useState<string>(initialCategory);

	// Use provided FAQs or dummy data if none provided
	const allFaqItems = faqs.length > 0 ? faqs : dummyFaqs;

	// Filter FAQs by selected category
	const filteredFaqItems =
		selectedCategory === "all"
			? allFaqItems
			: allFaqItems.filter((item) => item.category === selectedCategory);

  // Get unique categories from FAQs (memoized to avoid changing ref each render)
  const uniqueCategories = useMemo(
    () => [...new Set(allFaqItems.map((item) => item.category))],
    [allFaqItems]
  );

	// Make sure we only show category options that have FAQs
	const availableCategoryOptions = [
		categoryOptions[0], // Always include "All Categories"
		...categoryOptions.filter(
			(cat) => cat.value !== "all" && uniqueCategories.includes(cat.value)
		)
	];

	// Handle category change
	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setOpenIndex(null); // Close any open FAQ when changing categories

		// Update URL with the selected category
		if (category === "all") {
			router.push(pathname);
		} else {
			router.push(`${pathname}?category=${category}`);
		}
	};

	// Initialize category from URL param on first render
	useEffect(() => {
		if (
			initialCategory &&
			initialCategory !== "all" &&
			uniqueCategories.includes(initialCategory)
		) {
			setSelectedCategory(initialCategory);
		}
	}, [initialCategory, uniqueCategories]);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="bg-white text-zinc-800" id="faq-content">
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={sectionVariants}
					className="space-y-8">
					<p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight mb-10">
						Browse our frequently asked questions below. If you
						don&apos;t see your question here, please don&apos;t
						hesitate to contact us directly.
					</p>

					{/* Category Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
						className="flex flex-wrap justify-center mb-12 gap-3">
						{availableCategoryOptions.map((category) => (
							<button
								key={category.value}
								onClick={() =>
									handleCategoryChange(category.value)
								}
								className={`px-5 py-2 text-sm font-light transition-all duration-300 cursor-pointer ${
									selectedCategory === category.value
										? "bg-zinc-200 text-zinc-800"
										: "bg-white text-zinc-500 hover:bg-zinc-100"
								}`}>
								{category.label}
							</button>
						))}
					</motion.div>
				</motion.div>

				<div className="mt-2 space-y-6">
					{filteredFaqItems.length > 0 ? (
						filteredFaqItems.map((item, index) => (
							<motion.div
								key={item._id}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={sectionVariants}
								className="border border-zinc-200 rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
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
													<div className="flex flex-col gap-4">
														<p className="text-zinc-600 font-light leading-relaxed">
															{item.answer}
														</p>
														<div className="text-sm text-zinc-500 mt-2">
															<span className="bg-zinc-100 px-2 py-1">
																{getCategoryDisplayName(
																	item.category
																)}
															</span>
														</div>
													</div>
												</motion.div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))
					) : (
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={sectionVariants}
							className="text-center py-8 text-zinc-600">
							<p>No FAQs found in this category.</p>
							<button
								onClick={() => handleCategoryChange("all")}
								className="mt-4 text-zinc-700 underline hover:text-zinc-900">
								View all categories
							</button>
						</motion.div>
					)}
				</div>

				<div className="flex justify-center mt-12">
					<motion.a
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={sectionVariants}
						href="/contact"
						className="px-8 py-3 text-zinc-700 border border-zinc-300 rounded-none hover:bg-zinc-100 transition-colors duration-300 font-medium text-center">
						Have More Questions? Contact Us
					</motion.a>
				</div>
			</section>
		</div>
	);
}
