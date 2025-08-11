"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
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
			duration: 0.8,
			ease: [0.2, 0.65, 0.3, 0.9]
		}
	}
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.2, 0.65, 0.3, 0.9],
			delay: i * 0.15
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
			duration: 0.5
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

const resourceItems = [
	{
		title: "Buyer's Guide",
		description:
			"Essential information for purchasing property in Lake Geneva area.",
		icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
		link: "/resources/buyers-guide"
	},
	{
		title: "Seller's Guide",
		description:
			"Strategic advice for selling your property in Lake Geneva area.",
		icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
		link: "/resources/sellers-guide"
	},
	{
		title: "Financing Options",
		description:
			"Information about mortgage options and financing in California Lake Geneva area.",
		icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		link: "/resources/financing"
	},
	{
		title: "Market Reports",
		description:
			"Latest real estate market trends and data for Lake Geneva area.",
		icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
		link: "/resources/market-reports"
	}
];

export function ResourceList() {
	return (
		<div className="bg-gradient-to-b from-white to-zinc-50 relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24 relative">
				{/* Resources Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
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
							HELPFUL RESOURCES
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight mb-12">
						Access our collection of resources designed to help you
						navigate the real estate process in Lake Geneva area
						County. From comprehensive guides to useful tools,
						we&apos;ve compiled everything you need for a successful
						real estate experience.
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
						{resourceItems.map((item, index) => (
							<motion.a
								key={index}
								href={item.link}
								custom={index}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								className="p-8 bg-white rounded-none shadow-sm border border-zinc-100 hover:border-zinc-200 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-200 ease-out group backdrop-blur-sm bg-white/90 relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-zinc-100/20 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
								<div className="flex items-start relative z-10">
									<div className="w-14 h-14 mr-6 flex-shrink-0">
										<div className="w-full h-full rounded-none bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center transform transition-all duration-200 ease-out group-hover:scale-105 group-hover:shadow-sm group-hover:from-zinc-100 group-hover:to-zinc-200">
											<svg
												className="w-6 h-6 text-zinc-700 transition-colors duration-200 group-hover:text-zinc-800"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d={item.icon}
												/>
											</svg>
										</div>
									</div>
									<div>
										<h3 className="text-xl font-medium text-zinc-800 mb-3 transition-colors duration-200 group-hover:text-zinc-900">
											{item.title}
										</h3>
										<p className="text-zinc-600 font-light mb-4 leading-relaxed transition-colors duration-200 group-hover:text-zinc-700">
											{item.description}
										</p>
										<div className="inline-flex items-center text-zinc-800 font-medium transition-colors duration-200 group-hover:text-zinc-900">
											Learn More
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
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
									</div>
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>
			</section>
		</div>
	);
}
