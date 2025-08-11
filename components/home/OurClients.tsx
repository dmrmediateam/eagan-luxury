"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

interface Testimonial {
	id: string;
	quote: string;
	author: string;
	location: string;
	image?: string;
}

// Luxury testimonials with updated content
const testimonials: Testimonial[] = [
	{
		id: "testimonial-1",
		quote: "Legendary Real Estate exceeded all expectations. Their extensive knowledge of the Lake Geneva market and tireless dedication to finding our dream lakefront retreat made the entire process seamless. They were available whenever we needed them and negotiated skillfully on our behalf.",
		author: "Thomas & Jennifer Reynolds",
		location: "Lake Geneva Cliffs Residence, WI",
		image: "/mr/mr2.webp"
	},
	{
		id: "testimonial-2",
		quote: "Working with the Legendary Real Estate was a pleasure from start to finish. Their expertise in the Lake Geneva area communities is unparalleled. They represented us professionally as both buyers and sellers, and we couldn't be more satisfied with the results.",
		author: "Alexandra & David Peterson",
		location: "Satulah Mountain Estate, Lake Geneva, WI",
		image: "/ja/ja5.webp"
	},
	{
		id: "testimonial-3",
		quote: "The Legendary Real Estate team works tirelessly and is always responsive to calls and emails. Their market knowledge and ability to recall details about so many properties is truly impressive. We feel completely confident referring friends and family to them.",
		author: "Richard & Catherine Montgomery",
		location: "Cullasaja Club Property, Lake Geneva, WI",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Faa3jnnkxyfjqmb6te1a48em3e3i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
	},
	{
		id: "testimonial-4",
		quote: "Legendary Real Estate's deep knowledge of Wisconsin's luxury market was invaluable. Their discretion and ability to access off-market properties made all the difference in our search for the perfect lakefront residence. The entire process was handled with exceptional professionalism.",
		author: "Sarah & James Morton",
		location: "Lake Geneva, WI",
		image: "/mr/mr2.webp"
	},
	{
		id: "testimonial-5",
		quote: "Working with Legendary Real Estate exceeded our expectations at every turn. Their strategic approach to marketing our Lake Geneva property resulted in multiple offers above asking price. Their network of high-net-worth buyers and meticulous attention to detail truly set them apart.",
		author: "Robert & Elizabeth Wilson",
		location: "Sagee Woods Drive, Lake Geneva, WI",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpf4kbtymj4zmjecsfwn0jsry1i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
	},
	{
		id: "testimonial-6",
		quote: "After months of searching for our ideal lakefront retreat, Legendary Real Estate found us the perfect property within weeks. Their negotiation expertise saved us significantly, and their connections with local architects and designers proved invaluable during the renovation process.",
		author: "Michael Chen & Family",
		location: "Williams Bay, WI",
		image: "/ja/ja5.webp"
	}
];

// Sophisticated fade animation for testimonial transitions
const fadeVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
	}
};

export function OurClients() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const goToPrevious = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
		setTimeout(() => setIsAnimating(false), 900);
	};

	const goToNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
		setTimeout(() => setIsAnimating(false), 900);
	};

	const currentTestimonial = testimonials[currentIndex];

	return (
		<section className="bg-white py-24 md:py-32" id="testimonials">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				{/* Header */}
				<SectionTitle
					title="Client Testimonials"
					subtitle="Trusted voices from our distinguished clientele who experienced our exceptional service firsthand."
					className="mb-20"
				/>

				{/* Testimonial Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
					{/* Image Section - Left */}
					<div className="relative h-[450px] md:h-[650px] w-full bg-[#FAFAFA]">
						<AnimatePresence mode="wait">
							<motion.div
								key={`image-${currentIndex}`}
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={fadeVariants}
								className="absolute inset-0">
								<Image
									src={
										currentTestimonial.image ||
										"/mr/mrg.jpg"
									}
									alt={`${currentTestimonial.author} - Legendary Real Estate Client`}
									fill
									priority
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover object-center"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/20 to-[#1A1A1A]/60"></div>

								{/* Client name overlay */}
								<div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
									<p className="text-white font-serif text-xl md:text-2xl mb-1">
										{currentTestimonial.author}
									</p>
									<p className="text-white/80 font-sans text-sm tracking-wide">
										{currentTestimonial.location}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Testimonial Content - Right */}
					<div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-white">
						{/* Index indicator */}
						<div className="mb-10 flex items-center space-x-3">
							<span className="text-[#890300] font-serif text-2xl md:text-3xl">
								{String(currentIndex + 1).padStart(2, "0")}
							</span>
							<div className="w-12 h-px bg-[#890300]"></div>
							<span className="text-[#2B2B2B]/50 font-serif text-base">
								0{testimonials.length}
							</span>
						</div>

						<div className="min-h-[200px] md:min-h-[250px] flex flex-col justify-center relative">
							{/* Quote mark */}
							<div className="absolute -top-8 -left-4 opacity-10">
								<svg
									width="60"
									height="48"
									viewBox="0 0 60 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 48V27.6C0 23.4 0.8 19.5 2.4 15.9C4 12.3 6.2 9.15 9 6.45C11.8 3.75 15 1.65 18.6 0.15L21.6 5.7C17.4 7.5 14.3 9.75 12.3 12.45C10.3 15.15 9.2 18.3 9 21.9H15C18 21.9 20.45 22.8 22.35 24.6C24.25 26.4 25.2 28.85 25.2 31.95C25.2 35.15 24.25 37.7 22.35 39.6C20.45 41.5 18 42.45 15 42.45C11.2 42.45 8.15 41.05 5.85 38.25C3.55 35.45 2.1 31.85 1.5 27.45C1.3 26.05 1.15 24.75 1.05 23.55C0.95 22.35 0.9 21.3 0.9 20.4H0V48ZM34.8 48V27.6C34.8 23.4 35.6 19.5 37.2 15.9C38.8 12.3 41 9.15 43.8 6.45C46.6 3.75 49.8 1.65 53.4 0.15L56.4 5.7C52.2 7.5 49.1 9.75 47.1 12.45C45.1 15.15 44 18.3 43.8 21.9H49.8C52.8 21.9 55.25 22.8 57.15 24.6C59.05 26.4 60 28.85 60 31.95C60 35.15 59.05 37.7 57.15 39.6C55.25 41.5 52.8 42.45 49.8 42.45C46 42.45 42.95 41.05 40.65 38.25C38.35 35.45 36.9 31.85 36.3 27.45C36.1 26.05 35.95 24.75 35.85 23.55C35.75 22.35 35.7 21.3 35.7 20.4H34.8V48Z"
										fill="#1A1A1A"
									/>
								</svg>
							</div>

							<AnimatePresence mode="wait">
								<motion.div
									key={`testimonial-${currentIndex}`}
									initial="hidden"
									animate="visible"
									exit="exit"
									variants={fadeVariants}
									className="space-y-8 z-10">
									<p className="text-[#1A1A1A] leading-relaxed font-serif text-lg md:text-xl">
										{currentTestimonial.quote}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation Controls */}
						<div className="flex justify-between items-center mt-12 pt-8 border-t border-[#F0F0F0]">
							<div className="text-[#890300] text-sm uppercase tracking-widest font-sans">
								Client Experience
							</div>

							<div className="flex space-x-5">
								<button
									onClick={goToPrevious}
									disabled={isAnimating}
									className={`w-12 h-12 flex items-center justify-center border border-[#E5E5E5] text-[#1A1A1A] hover:border-[#890300] hover:text-[#890300] transition-all duration-300 ${
										isAnimating
											? "opacity-50 cursor-not-allowed"
											: ""
									}`}
									aria-label="Previous testimonial">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round">
										<path d="M15 18l-6-6 6-6" />
									</svg>
								</button>
								<button
									onClick={goToNext}
									disabled={isAnimating}
									className={`w-12 h-12 flex items-center justify-center border border-[#E5E5E5] text-[#1A1A1A] hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 ${
										isAnimating
											? "opacity-50 cursor-not-allowed"
											: ""
									}`}
									aria-label="Next testimonial">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round">
										<path d="M9 18l6-6-6-6" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
