"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	FileSearch,
	ClipboardList,
	Users,
	Home,
	Settings,
	BarChart
} from "lucide-react";

const processSteps = [
	{
		icon: <FileSearch className="w-12 h-12 text-[#B08D57]" />,
		title: "Property Evaluation",
		description:
			"We conduct a thorough evaluation of your property to assess its condition, potential rental value, and any improvements needed."
	},
	{
		icon: <ClipboardList className="w-12 h-12 text-[#B08D57]" />,
		title: "Custom Management Plan",
		description:
			"Based on the evaluation, we develop a tailored management plan that aligns with your goals and maximizes your property's potential."
	},
	{
		icon: <Home className="w-12 h-12 text-[#B08D57]" />,
		title: "Property Marketing",
		description:
			"We market your property through multiple channels to attract high-quality tenants quickly."
	},
	{
		icon: <Users className="w-12 h-12 text-[#B08D57]" />,
		title: "Tenant Selection",
		description:
			"Our rigorous screening process ensures only qualified, reliable tenants occupy your property."
	},
	{
		icon: <Settings className="w-12 h-12 text-[#B08D57]" />,
		title: "Ongoing Management",
		description:
			"We handle all day-to-day operations, from maintenance requests to tenant communications, freeing you from landlord responsibilities."
	},
	{
		icon: <BarChart className="w-12 h-12 text-[#B08D57]" />,
		title: "Regular Reporting",
		description:
			"Receive detailed financial reports and property updates to stay informed about your investment's performance."
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

export const PropertyManagementProcess = () => {
	return (
		<section className="py-24 bg-gray-50">
			<div className="container mx-auto px-4 md:px-8 lg:px-16">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1A1A]">
						Our Management Process
					</h2>
					<div className="h-[2px] w-24 bg-[#B08D57] mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						A transparent, streamlined process designed to maximize
						your investment and minimize your involvement.
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}>
					{processSteps.map((step, index) => (
						<motion.div
							key={index}
							className="relative"
							variants={itemVariants}>
							<div className="flex flex-col items-center text-center">
								<div className="mb-12 relative">
									<div className="absolute inset-0 bg-[#B08D57]/10 rounded-full transform scale-[1.8]"></div>
									<div className="p-4 bg-white rounded-full shadow-md relative z-10">
										{step.icon}
									</div>
									<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B08D57] rounded-full flex items-center justify-center text-white font-semibold">
										{index + 1}
									</div>
								</div>

								<h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
									{step.title}
								</h3>
								<p className="text-gray-600">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
