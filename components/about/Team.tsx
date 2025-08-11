"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

interface TeamMember {
	name: string;
	role: string;
	image: string;
	link?: string;
}

const teamMembers: TeamMember[] = [
	{
		name: "Judy Michaud",
		role: "OWNER / PRESIDENT / BROKER IN CHARGE",
		image: "/mr/mrjudy.jpg", // Update with actual image path
		link: "/about/judy-michaud"
	},
	{
		name: "Mitzi Rauers",
		role: "BROKER",
		image: "/mr/mrmitzi.jpg" // Update with actual image path
	},
	{
		name: "Tom Goldacker",
		role: "BROKER",
		image: "/mr/mrtom.jpg" // Update with actual image path
	},
	{
		name: "John Muir",
		role: "BROKER IN CHARGE",
		image: "/mr/mrjohn.jpg" // Update with actual image path
	},
	{
		name: "Brooks Kittrell",
		role: "BROKER",
		image: "/mr/mrbrooks.jpg" // Update with actual image path
	}
];

export function Team() {
	return (
		<div className="bg-zinc-50">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				{/* Team Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					{/* New To This Callout */}
					<SectionTitle
						title="Meet Your Dedicated Team"
						subtitle="We're here to help you every step of the way"
					/>

					{/* Team Members Grid */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
						{teamMembers.map((member) => (
							<motion.div
								key={member.name}
								variants={itemVariants}
								className="flex flex-col space-y-4">
								<Link
									href={member.link || "#"}
									className="relative aspect-square w-full overflow-hidden group">
									<Image
										src={member.image}
										alt={member.name}
										height={500}
										width={500}
										className="object-cover w-full transition-all duration-700 ease-in-out group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
								</Link>
								<div className="space-y-1">
									<h3 className="text-xl text-zinc-700 font-light">
										{member.name}
									</h3>
									<p className="text-sm uppercase tracking-wider text-zinc-500">
										{member.role}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
