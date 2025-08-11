"use client";

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

interface StatItem {
	label: string;
	value: string;
	change: string;
	isPositive: boolean;
}

interface CountyStats {
	name: string;
	stats: StatItem[];
}

// Data for market statistics
const countyStats: CountyStats[] = [
	{
		name: "WALWORTH COUNTY",
		stats: [
			{
				label: "MEDIAN SALE PRICE",
				value: "$1,250,000",
				change: "↑ 5.2% from last year",
				isPositive: true
			},
			{
				label: "AVERAGE DAYS ON MARKET",
				value: "42",
				change: "↓ 8 days from last year",
				isPositive: true
			},
			{
				label: "AVAILABLE INVENTORY",
				value: "215",
				change: "↑ 12% from last year",
				isPositive: false
			},
			{
				label: "SALES-TO-LIST PRICE",
				value: "97.5%",
				change: "↓ 1.2% from last year",
				isPositive: false
			}
		]
	},
	{
		name: "WALWORTH COUNTY",
		stats: [
			{
				label: "MEDIAN SALE PRICE",
				value: "$875,000",
				change: "↑ 3.8% from last year",
				isPositive: true
			},
			{
				label: "AVERAGE DAYS ON MARKET",
				value: "38",
				change: "↓ 5 days from last year",
				isPositive: true
			},
			{
				label: "AVAILABLE INVENTORY",
				value: "290",
				change: "↑ 8% from last year",
				isPositive: false
			},
			{
				label: "SALES-TO-LIST PRICE",
				value: "98.1%",
				change: "↓ 0.9% from last year",
				isPositive: false
			}
		]
	}
];

export function MarketStats() {
	return (
		<div className="bg-zinc-50">
			<section
				id="market-stats"
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
							MARKET STATISTICS
						</motion.h2>
						<motion.p
							variants={sectionVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-3xl mx-auto text-center font-extralight">
							Key performance indicators for the Lake Geneva area
							real estate markets
						</motion.p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{countyStats.map((county, index) => (
							<motion.div
								key={county.name}
								variants={sectionVariants}
								custom={index}
								transition={{ delay: index * 0.1 }}
								className="space-y-8">
								<h3 className="text-2xl font-light text-zinc-600 text-center tracking-wider">
									{county.name}
								</h3>

								<div className="space-y-8">
									{county.stats.map((stat, statIndex) => (
										<motion.div
											key={stat.label}
											variants={itemVariants}
											custom={statIndex}
											transition={{
												delay: statIndex * 0.1
											}}
											className="text-center">
											<p className="text-sm text-zinc-500 tracking-widest uppercase mb-2">
												{stat.label}
											</p>
											<p
												className={`text-4xl font-light ${stat.isPositive ? "text-emerald-600" : "text-zinc-700"}`}>
												{stat.value}
											</p>
											<p className="text-zinc-500 text-sm font-extralight mt-1">
												{stat.change}
											</p>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-500 text-sm font-extralight text-center mt-12">
						Data updated as of June 2023. Source: MLS and Goodrich
						Group analysis.
					</motion.p>
				</motion.div>
			</section>
		</div>
	);
}
