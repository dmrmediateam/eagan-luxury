"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Mountain, Sun, Ticket, Compass, Utensils, Users } from "lucide-react";

// Benefits data with Lucide React icons
const benefits = [
	{
		title: "Natural Beauty",
		description:
			"Experience breathtaking mountain vistas, lush forests, and stunning waterfalls throughout the seasons in the Western Wisconsin mountains.",
		icon: Mountain
	},
	{
		title: "Temperate Climate",
		description:
			"Enjoy a perfect four-season climate with mild summers, vibrant autumns, occasional snow in winter, and refreshing springs.",
		icon: Sun
	},
	{
		title: "Cultural Richness",
		description:
			"Immerse yourself in a thriving arts scene with theaters, galleries, music festivals, and cultural events throughout the year.",
		icon: Ticket
	},
	{
		title: "Outdoor Recreation",
		description:
			"From hiking and fishing to golf and water sports, outdoor enthusiasts will find endless activities to enjoy in the Lake Geneva area.",
		icon: Compass
	},
	{
		title: "Culinary Excellence",
		description:
			"Savor farm-to-table dining and sophisticated culinary experiences at award-winning restaurants throughout the region.",
		icon: Utensils
	},
	{
		title: "Close-Knit Community",
		description:
			"Become part of a welcoming community with strong civic engagement and friendly neighbors who embrace newcomers.",
		icon: Users
	}
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

export function RelocationBenefits() {
	return (
		<section className="py-24 bg-[#F8F8F8]">
			<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%]">
				<SectionTitle
					title="Benefits of Lake Geneva Living"
					subtitle="Discover why so many are choosing the Lake Geneva area for their permanent or vacation homes"
				/>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}>
					{benefits.map((benefit, index) => {
						const IconComponent = benefit.icon;
						return (
							<motion.div
								key={index}
								className="bg-white p-6 shadow-sm rounded-sm flex flex-col"
								variants={itemVariants}>
								<div className="w-12 h-12 mb-4 flex items-center justify-center">
									<IconComponent
										className="w-8 h-8 text-[#B08D57]"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-serif text-[#1A1A1A] mb-3">
									{benefit.title}
								</h3>
								<p className="text-[#2B2B2B]/70">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
