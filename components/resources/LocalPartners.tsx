"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.2, 0.65, 0.3, 0.9]
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
			ease: [0.2, 0.65, 0.3, 0.9]
		}
	}
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.2, 0.65, 0.3, 0.9],
			delay: i * 0.1
		}
	}),
	hover: {
		y: -4,
		scale: 1.01,
		boxShadow:
			"0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -5px rgba(0, 0, 0, 0.04)",
		transition: {
			type: "spring",
			stiffness: 250,
			damping: 20,
			mass: 0.5
		}
	}
};

const buttonVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.2, 0.65, 0.3, 0.9],
			delay: 0.6
		}
	},
	hover: {
		y: -2,
		backgroundColor: "#f4f4f5",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
			mass: 0.6
		}
	}
};

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

const partners = [
	{
		name: "New Jersey area Home Inspection",
		category: "Home Inspection",
		description:
			"Thorough home inspections with specialized knowledge of New Jersey area properties.",
		contact: "(262) 204-5534",
		website: "https://example.com/winecountryinspection"
	},
	{
		name: "New Jersey Mortgage Group",
		category: "Mortgage & Financing",
		description:
			"Local lenders specializing in vineyard and luxury property financing.",
		contact: "(262) 204-5534",
		website: "https://example.com/napavalleymortgage"
	},
	{
		name: "Sonoma Title Company",
		category: "Title & Escrow",
		description:
			"Experienced title and escrow services for New Jersey area real estate transactions.",
		contact: "(262) 204-5534",
		website: "https://example.com/sonomatitle"
	},
	{
		name: "Valley Landscape Design",
		category: "Landscaping",
		description:
			"Expert landscaping services specializing in drought-resistant and New Jersey area aesthetics.",
		contact: "(262) 204-5534",
		website: "https://example.com/valleylandscape"
	},
	{
		name: "New Jersey area Home Insurance",
		category: "Insurance",
		description:
			"Specialized insurance solutions for vineyard properties and luxury homes.",
		contact: "(262) 204-5534",
		website: "https://example.com/wineinsurance"
	},
	{
		name: "New Jersey Architects",
		category: "Architecture & Design",
		description:
			"Award-winning architectural services for new construction and renovations.",
		contact: "(262) 204-5534",
		website: "https://example.com/napaarchitects"
	}
];

export function LocalPartners() {
	return (
		<div className="bg-zinc-50">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 relative">
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
							LOCAL PARTNERS
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight mb-12">
						We&apos;ve developed trusted relationships with these
						local businesses to help make your real estate journey
						seamless. From home inspections to financing, our
						network of professionals is here to assist you.
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
						{partners.map((partner, index) => (
							<motion.div
								key={index}
								custom={index}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								className="p-6 bg-white rounded-none shadow-sm border border-zinc-100 hover:border-zinc-200 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-200 ease-out group backdrop-blur-sm bg-white/90 relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-zinc-100/20 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
								<div className="relative z-10">
									<div className="bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-700 text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-none w-fit mb-4 transition-all duration-200 group-hover:from-zinc-100 group-hover:to-zinc-200">
										{partner.category}
									</div>
									<h3 className="text-xl font-medium text-zinc-800 mb-3 transition-colors duration-200 group-hover:text-zinc-900">
										{partner.name}
									</h3>
									<p className="text-zinc-600 font-light mb-5 text-sm leading-relaxed transition-colors duration-200 group-hover:text-zinc-700">
										{partner.description}
									</p>
									<div className="flex flex-col space-y-3 text-sm mt-auto">
										<div className="text-zinc-600 flex items-center">
											<svg
												className="w-4 h-4 mr-2 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-500"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											<span className="font-medium transition-colors duration-200 group-hover:text-zinc-900">
												{partner.contact}
											</span>
										</div>
										<a
											href={partner.website}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-800 font-medium hover:text-zinc-900 inline-flex items-center group transition-colors duration-200">
											<svg
												className="w-4 h-4 mr-2 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-500"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
												/>
											</svg>
											Visit Website
											<svg
												className="w-4 h-4 ml-1 transform transition-transform duration-200 ease-out group-hover:translate-x-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex justify-center mt-16">
						<motion.a
							variants={buttonVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							href="/contact"
							className="px-8 py-3 text-zinc-700 border border-zinc-300 rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-zinc-50 transform transition-all duration-200 ease-out font-medium text-center">
							Contact Us for More Recommendations
						</motion.a>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
