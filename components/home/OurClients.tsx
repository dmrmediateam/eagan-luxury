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
		quote: "We absolutely LOVED working with Cheryl. She is extremely professional, personable, and very knowledgeable. She works with you every step of the way to ensure you get exactly what you’re looking for which is how we landed our dream home. We have referred her to a few family members looking to either sell or buy because she is just THAT great.",
		author: "Diana Milian",
		location: "Sparta, NJ",
		image: "/mr/mr2.webp"
	},
	{
		id: "testimonial-2",
		quote: "Cheryl was great to work with. Her years of experience as an appraiser came in handy. She answered all of my phone calls and text messages promptly. I would recommend her to anyone.",
		author: "Anthony Annecchiarico",
		location: "Hampton twp., NJ",
		image: "/ja/ja5.webp"
	},
	{
		id: "testimonial-3",
		quote: "Cheryl is the only realtor I will ever consider for myself, or reccommend to anyone else. She really knows her business and is always available when needed. Her knowledge and enthusiasm to get things done was very helpful in finding the right house for us. My husband and I are first time home buyers, Cheryl guided us the whole way through the home buying process with such care and professionalism. She always responded to our texts and questions in a couple of seconds and we would recommend her to anyone looking to purchase or sell.",
		author: "Smitha R",
		location: "New Jersey",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Faa3jnnkxyfjqmb6te1a48em3e3i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
	},
	{
		id: "testimonial-4",
		quote: "Highly recommend Cheryl Towey as a realtor. Cheryl helped us sell our home in New Providence within 3 months. Cheryl went above and beyond to keep us informed and make good decisions better than any other real estate professional with whom we had worked with previously. She is honest, strategic, unbelievably patient, and utterly professional. She also understands the real estate market exceedingly well. I will definitely contact her in the future when I'm ready to purchase new home.",
		author: "Wendy Azevedo",
		location: "New providence boro, NJ",
		image: "/mr/mr2.webp"
	},
	{
		id: "testimonial-5",
		quote: "Cheryl is the most caring, professional, and hard working realtor there is! She will always go above and beyond for her clients and makes you feel like family. I had the pleasure of working with her through the buying process and selling process and could not imagine doing it without her. Highly recommend her!!",
		author: "Alyssa Michelle",
		location: "New Jersey",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpf4kbtymj4zmjecsfwn0jsry1i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
	},
	{
		id: "testimonial-6",
		quote: "I’ve worked with Cheryl on several real estate deals over the last decade. I’ve referred her to my family and friends for years. No one will work harder for you. Cheryl will always put her clients needs above her own and will work with meticulous care and integrity. She will always go above and beyond for you. Cheryl will provide you with the peace of mind that comes from her expertise and dedication to her clients. I cannot recommend Cheryl enough.",
		author: "Staci Garibaldi",
		location: "New Jersey",
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
									alt={`${currentTestimonial.author} - Cheryl Towey Client`}
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
							<span className="text-secondary font-serif text-2xl md:text-3xl">
								{String(currentIndex + 1).padStart(2, "0")}
							</span>
							<div className="w-12 h-px bg-secondary"></div>
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
									<p className="text-[#222223] leading-relaxed font-serif text-lg md:text-xl">
										{currentTestimonial.quote}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation Controls */}
						<div className="flex justify-between items-center mt-12 pt-8 border-t border-[#F0F0F0]">
							<div className="text-secondary text-sm uppercase tracking-widest font-sans">
								Cheryl&apos;s Client Experience
							</div>

							<div className="flex space-x-5">
								<button
									onClick={goToPrevious}
									disabled={isAnimating}
									className={`w-12 h-12 flex items-center justify-center border border-[#E5E5E5] text-[#222223] hover:border-secondary hover:text-secondary transition-all duration-300 ${
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
									className={`w-12 h-12 flex items-center justify-center border border-[#E5E5E5] text-[#222223] hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 ${
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
