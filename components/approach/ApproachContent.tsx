"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function ApproachContent() {
	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32 space-y-24">
				{/* PHILOSOPHY Section */}
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
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center mb-4 uppercase">
							The Art of Our Approach
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight">
						Our philosophy, rooted in purpose and passion, shapes a
						distinct approach to navigating the Lake Geneva area real
						estate landscape. The artistry lies not just in
						understanding the market, but in the nuanced synthesis
						of insight, strategy, and connection. It is where deep
						market analytics meet an intuitive grasp of potential,
						where strategic rigor fuses with the genuine personal
						commitment required to truly champion your vision.
						<br />
						<br />
						This integrated approach allows us to move beyond
						conventional methods. We balance meticulous planning
						with the creative agility needed to seize dynamic
						opportunities, always ensuring our actions are bespoke
						to your specific aspirations. It is through this
						thoughtful orchestration, blending expertise with
						empathy, data with discernment, that we elevate the real
						estate experience, transforming the process into a
						collaborative journey towards exceptional outcomes.
					</motion.p>
				</motion.div>

				{/* CLIENT-FIRST Section */}
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
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center mb-4 uppercase">
							Dedicated to Your Vision
						</motion.h2>
					</div>

					<motion.p
						variants={sectionVariants}
						className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center font-extralight">
						Our client-first philosophy means your vision becomes
						our directive. It begins with being truly present,
						listening intently to achieve deep clarity about your
						aspirations and priorities. We then translate this
						understanding into a bespoke roadmap, leveraging astute
						market analysis and intentional, creative solutions.
						Whether curating explorations for buyers or crafting
						compelling narratives and sophisticated marketing for
						sellers, our dedication is tireless. You can expect
						clear communication, informed guidance, and steadfast
						advocacy focused solely on your best interests, ensuring
						skillful negotiation and meticulous attention throughout
						the process. We understand the significance of your
						investment, and building enduring relationships founded
						on trust and exceptional outcomes is our greatest
						measure of success.
					</motion.p>
				</motion.div>

				{/* CONTACT US Button */}
				<div className="flex justify-center">
					<Link
						href="/contact"
						className="bg-neutral-500 hover:bg-neutral-600 text-white text-sm uppercase tracking-widest py-3 px-8 transition-colors duration-200">
						CONTACT US
					</Link>
				</div>
			</section>
		</div>
	);
}
