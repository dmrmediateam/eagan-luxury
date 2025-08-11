"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Home,
	Users,
	Wrench,
	DollarSign,
	ClipboardCheck,
	ShieldCheck
} from "lucide-react";

const serviceItems = [
	{
		icon: <Home className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Property Marketing",
		description:
			"Strategic marketing of your property through our extensive network, professional photography, and targeted advertising."
	},
	{
		icon: <Users className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Tenant Screening",
		description:
			"Rigorous tenant screening process including background checks, credit reports, and rental history verification."
	},
	{
		icon: <DollarSign className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Rent Collection",
		description:
			"Secure and timely rent collection with detailed financial reporting and direct deposits to your account."
	},
	{
		icon: <Wrench className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Maintenance",
		description:
			"24/7 maintenance response with a network of trusted contractors and preventative maintenance programs."
	},
	{
		icon: <ClipboardCheck className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Inspections",
		description:
			"Regular property inspections with detailed reports to ensure your property remains in excellent condition."
	},
	{
		icon: <ShieldCheck className="w-10 h-10 mb-4 text-[#B08D57]" />,
		title: "Legal Compliance",
		description:
			"We handle all legal compliance issues, keeping your property up to code and in line with regulations."
	}
];

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
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

export const PropertyManagementServices = () => {
	return (
		<section id="services" className="py-24 bg-white">
			<div className="container mx-auto px-4 md:px-8 lg:px-16">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1A1A1A]">
						Our Property Management Services
					</h2>
					<div className="h-[2px] w-24 bg-[#B08D57] mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We provide comprehensive property management services
						tailored to your specific needs, ensuring your
						investment is protected and profitable.
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}>
					{serviceItems.map((service, index) => (
						<motion.div
							key={index}
							className="bg-gray-50 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
							variants={itemVariants}>
							<div className="flex flex-col items-center text-center">
								{service.icon}
								<h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
									{service.title}
								</h3>
								<p className="text-gray-600">
									{service.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
