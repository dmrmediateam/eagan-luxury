"use client";

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

export function SonomaMap() {
	return (
		<section className="bg-luxury-white section-padding">
			<div className="container-luxury">
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mb-16">
					<motion.h2
						custom={0}
						variants={textVariants}
						className="text-luxury-charcoal font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
						The Hamptons
					</motion.h2>
					<motion.div
						custom={1}
						variants={textVariants}
						className="luxury-divider mx-auto"></motion.div>
					<motion.p
						custom={2}
						variants={textVariants}
						className="text-luxury-charcoal/80 max-w-3xl mx-auto mt-6">
						Discover the coastal luxury and elegance of The
						Hamptons, known for pristine beaches and exceptional
						estate properties.
					</motion.p>
				</motion.div>

				{/* Map Container */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={3}
					variants={textVariants}
					className="bg-luxury-white p-6 shadow-luxury overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48598.57341186849!2d-72.33996417060551!3d40.8838790151745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e894c3822f3951%3A0xb002c7aa6865c735!2sThe%20Hamptons%2C%20NY!5e0!3m2!1sen!2sus!4v1660599587191!5m2!1sen!2sus"
						width="100%"
						height="600"
						style={{ border: 0 }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="The Hamptons Map"
						className="w-full rounded-none"
					/>
				</motion.div>

				{/* Stats/Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={4}
						variants={textVariants}
						className="bg-luxury-offwhite p-8 shadow-luxury text-center">
						<h3 className="text-luxury-gold font-serif text-xl md:text-2xl mb-3">
							East Hampton
						</h3>
						<p className="text-luxury-charcoal/80">
							Known for its beautiful beaches, historic district,
							and picturesque Main Street lined with high-end
							boutiques and dining.
						</p>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={5}
						variants={textVariants}
						className="bg-luxury-offwhite p-8 shadow-luxury text-center">
						<h3 className="text-luxury-gold font-serif text-xl md:text-2xl mb-3">
							Southampton
						</h3>
						<p className="text-luxury-charcoal/80">
							Home to expansive estates, pristine beaches, and a
							vibrant cultural scene with world-class art
							galleries and events.
						</p>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={6}
						variants={textVariants}
						className="bg-luxury-offwhite p-8 shadow-luxury text-center">
						<h3 className="text-luxury-gold font-serif text-xl md:text-2xl mb-3">
							Bridgehampton
						</h3>
						<p className="text-luxury-charcoal/80">
							Offering a blend of luxury living, equestrian
							properties, and vineyard estates with exceptional
							ocean and bay views.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
