"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			delay: custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

export function Arthur() {
	return (
		<section className="bg-luxury-white relative">
			<div className="container-luxury section-padding">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Image Column */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}
						variants={textVariants}
						className="w-full lg:w-1/2">
						<div className="relative aspect-[3/4] w-full max-w-xl mx-auto overflow-hidden shadow-luxury">
							<Image
								src="/people/john-allen.jpg"
								alt="John Allen, Luxury Real Estate"
								className="object-cover object-center"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								priority
							/>
						</div>
					</motion.div>

					{/* Text Column */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="w-full lg:w-1/2 space-y-8">
						<motion.h2
							custom={1}
							variants={textVariants}
							className="text-luxury-charcoal font-serif text-3xl md:text-4xl lg:text-5xl">
							John Allen
						</motion.h2>

						<motion.div
							custom={2}
							variants={textVariants}
							className="luxury-divider"></motion.div>

						<motion.p
							custom={3}
							variants={textVariants}
							className="text-luxury-charcoal/80 leading-relaxed">
							With over 15 years of experience in luxury real
							estate markets, John Allen&apos;s expert knowledge
							of New York City and The Hamptons has established
							him as a trusted advisor for discerning clients.
						</motion.p>

						<motion.p
							custom={4}
							variants={textVariants}
							className="text-luxury-charcoal/80 leading-relaxed">
							John&apos;s approach combines deep market insight
							with a genuine understanding of his clients&apos;
							aspirations. His dedication to excellence has
							facilitated over $500 million in transactions
							throughout his distinguished career.
						</motion.p>

						<motion.p
							custom={5}
							variants={textVariants}
							className="text-luxury-charcoal/80 leading-relaxed">
							The Allen Group was founded on the principle that
							exceptional properties deserve exceptional
							representation. Every client receives personalized
							attention and strategic guidance that has become
							synonymous with the Allen name.
						</motion.p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
