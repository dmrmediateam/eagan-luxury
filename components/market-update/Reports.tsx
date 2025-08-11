"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

// Sample report data - in a real application, this would likely come from a CMS or API
const reports = [
	{
		id: 1,
		title: "Lake Geneva Market Report Q2 2023",
		description:
			"Comprehensive analysis of Walworth County real estate trends for Q2 2023.",
		thumbnail: "/mr/mr1.webp",
		downloadUrl: "/reports/napa-q2-2023.pdf",
		date: "July 15, 2023"
	},
	{
		id: 2,
		title: "Walworth County Market Insights Q2 2023",
		description:
			"Detailed breakdown of Walworth County real estate performance in Q2 2023.",
		thumbnail: "/mr/mr1.webp",
		downloadUrl: "/reports/sonoma-q2-2023.pdf",
		date: "July 10, 2023"
	},
	{
		id: 3,
		title: "Lake Geneva area Luxury Market Trends 2023",
		description:
			"Analysis of the luxury segment ($2M+) across Lake Geneva area.",
		thumbnail: "/mr/mr1.webp",
		downloadUrl: "/reports/luxury-trends-2023.pdf",
		date: "June 30, 2023"
	},
	{
		id: 4,
		title: "First-Time Buyer Opportunities in Lake Geneva area",
		description:
			"Special report on entry-level market segments and buying opportunities.",
		thumbnail: "/mr/mr1.webp",
		downloadUrl: "/reports/first-time-buyers-2023.pdf",
		date: "May 22, 2023"
	}
];

export function Reports() {
	return (
		<div className="bg-white">
			<section
				id="reports"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.h2
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							MARKET REPORTS
						</motion.h2>
						<motion.p
							variants={sectionVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-3xl mx-auto text-center font-extralight">
							Download our detailed quarterly reports and special
							market analysis
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{reports.map((report, index) => (
							<motion.div
								key={report.id}
								custom={index}
								variants={cardVariants}
								className="group relative overflow-hidden rounded-sm">
								<div className="relative h-60 md:h-80 lg:h-96 xl:h-100 w-full overflow-hidden">
									<Image
										src={report.thumbnail}
										alt={report.title}
										fill
										className="object-cover transition duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50"></div>
								</div>

								<div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
									<h3 className="text-xl font-light mb-2">
										{report.title}
									</h3>
									<p className="text-white/80 text-sm mb-1">
										Published: {report.date}
									</p>
									<p className="text-white/90 text-sm mb-4 font-extralight">
										{report.description}
									</p>

									<Link
										href={report.downloadUrl}
										className="inline-flex items-center justify-center px-4 py-2 border border-white/70 rounded-sm text-sm text-white hover:bg-white/10 transition-colors duration-200 ease-in-out w-fit">
										Download Report
									</Link>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						variants={sectionVariants}
						className="mt-16 text-center">
						<p className="text-zinc-600 text-base font-extralight mb-8">
							Need more specific market data for your area?
							Contact our team for a customized analysis.
						</p>
						<Link
							href="#contact"
							className="inline-flex items-center justify-center px-5 py-3 border border-zinc-600 text-zinc-600 rounded-sm text-sm hover:bg-zinc-600 hover:text-white transition-colors duration-200 ease-in-out">
							CONTACT US
						</Link>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
