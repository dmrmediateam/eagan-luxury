"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type FAQType = {
	_id: string;
	question: string;
	answer: string;
	category?: string;
};

interface FAQProps {
	faqs: FAQType[];
	title?: string;
	subtitle?: string;
	showCategory?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
	faqs,
	title = "Frequently Asked Questions",
	subtitle = "Find answers to common questions about our services and the real estate market.",
	showCategory = false
}) => {
	const [openItems, setOpenItems] = useState<Set<string>>(new Set());

	const toggleItem = (id: string) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id);
		} else {
			newOpenItems.add(id);
		}
		setOpenItems(newOpenItems);
	};

	// Group FAQs by category if showCategory is true
	const groupedFaqs = showCategory
		? faqs.reduce((acc, faq) => {
				const category = faq.category || "General";
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(faq);
				return acc;
		  }, {} as Record<string, FAQType[]>)
		: { "All Questions": faqs };

	if (!faqs || faqs.length === 0) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
						<p className="text-gray-600 mb-8">{subtitle}</p>
						<div className="text-gray-500">
							No FAQ items available at this time.
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
						<div key={category} className="mb-8">
							{showCategory && (
								<h3 className="text-xl font-medium text-gray-900 mb-4">{category}</h3>
							)}
							<div className="space-y-4">
								{categoryFaqs.map((faq) => (
									<motion.div
										key={faq._id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										className="bg-white rounded-lg shadow-sm border border-gray-200"
									>
										<button
											onClick={() => toggleItem(faq._id)}
											className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
										>
											<span className="font-medium text-gray-900 pr-4">
												{faq.question}
											</span>
											<motion.div
												animate={{
													rotate: openItems.has(faq._id) ? 180 : 0
												}}
												transition={{ duration: 0.2 }}
											>
												<ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
											</motion.div>
										</button>
										<AnimatePresence>
											{openItems.has(faq._id) && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
													className="overflow-hidden"
												>
													<div className="px-6 pb-4 text-gray-600 leading-relaxed">
														{faq.answer}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</motion.div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
