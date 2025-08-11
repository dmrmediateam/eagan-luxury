"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

interface TestimonialProps {
	testimonials: {
		_id: string;
		name: string;
		propertyName?: string;
		testimonialText: string;
		image?: string;
		clientType: string;
		featured: boolean;
		location?: string;
		isDummyData?: boolean;
	}[];
}

// Dummy testimonials data from OurClients.tsx for fallback
const dummyTestimonials = [
	{
		_id: "testimonial-1",
		name: "Thomas & Jennifer Reynolds",
		propertyName: "Lake Geneva Cliffs Residence",
		testimonialText:
			"Legendary Real Estate exceeded all expectations. Their extensive knowledge of the Lake Geneva market and tireless dedication to finding our dream lakefront retreat made the entire process seamless. They were available whenever we needed them and negotiated skillfully on our behalf.",
		image: "/mr/mr2.webp",
		clientType: "buyer",
		featured: true,
		location: "Lake Geneva, WI"
	},
	{
		_id: "testimonial-2",
		name: "Alexandra & David Peterson",
		propertyName: "Satulah Mountain Estate",
		testimonialText:
			"Working with the Legendary Real Estate was a pleasure from start to finish. Their expertise in the Lake Geneva area communities is unparalleled. They represented us professionally as both buyers and sellers, and we couldn't be more satisfied with the results.",
		image: "/ja/ja5.webp",
		clientType: "both",
		featured: true,
		location: "Lake Geneva, WI"
	},
	{
		_id: "testimonial-3",
		name: "Richard & Catherine Montgomery",
		propertyName: "Cullasaja Club Property",
		testimonialText:
			"The Legendary Real Estate team works tirelessly and is always responsive to calls and emails. Their market knowledge and ability to recall details about so many properties is truly impressive. We feel completely confident referring friends and family to them.",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Faa3jnnkxyfjqmb6te1a48em3e3i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
		clientType: "buyer",
		featured: false,
		location: "Lake Geneva, WI"
	},
	{
		_id: "testimonial-4",
		name: "Sarah & James Morton",
		propertyName: null,
		testimonialText:
			"Legendary Real Estate's deep knowledge of Wisconsin's luxury market was invaluable. Their discretion and ability to access off-market properties made all the difference in our search for the perfect lakefront residence. The entire process was handled with exceptional professionalism.",
		image: "/mr/mr2.webp",
		clientType: "buyer",
		featured: false,
		location: "Lake Geneva, WI"
	},
	{
		_id: "testimonial-5",
		name: "Robert & Elizabeth Wilson",
		propertyName: "Sagee Woods Drive",
		testimonialText:
			"Working with Legendary Real Estate exceeded our expectations at every turn. Their strategic approach to marketing our Lake Geneva property resulted in multiple offers above asking price. Their network of high-net-worth buyers and meticulous attention to detail truly set them apart.",
		image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpf4kbtymj4zmjecsfwn0jsry1i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
		clientType: "seller",
		featured: true,
		location: "Lake Geneva, WI"
	},
	{
		_id: "testimonial-6",
		name: "Michael Chen & Family",
		propertyName: null,
		testimonialText:
			"After months of searching for our ideal lakefront retreat, Legendary Real Estate found us the perfect property within weeks. Their negotiation expertise saved us significantly, and their connections with local architects and designers proved invaluable during the renovation process.",
		image: "/ja/ja5.webp",
		clientType: "buyer",
		featured: false,
		location: "Williams Bay, WI"
	}
];

// Add a field to identify dummy testimonials before combining
const dummyTestimonialsWithSource = dummyTestimonials.map((testimonial) => ({
	...testimonial,
	isDummyData: true
}));

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export function TestimonialsGrid({ testimonials }: TestimonialProps) {
	// Combine Sanity testimonials and dummy data for showcase purposes
	const combinedTestimonials = [
		...(testimonials?.map((t) => ({ ...t, isDummyData: false })) || []),
		...dummyTestimonialsWithSource
	];

	// Remove any potential duplicates by _id
	const uniqueTestimonials = Array.from(
		new Map(combinedTestimonials.map((item) => [item._id, item])).values()
	);

	const [filter, setFilter] = useState<string>("all");

	// Filter testimonials based on selected client type
	const filteredTestimonials =
		filter === "all"
			? uniqueTestimonials
			: uniqueTestimonials.filter(
					(testimonial) => testimonial.clientType === filter
				);

	const clientTypeMap: Record<string, string> = {
		buyer: "Buyer",
		seller: "Seller",
		both: "Buyer & Seller"
	};

	// Helper function to get first letter or first two letters of name
	const getInitials = (name: string) => {
		const parts = name.trim().split(/\s+/);
		if (parts.length === 1) {
			return parts[0].charAt(0).toUpperCase();
		} else if (parts.length >= 2) {
			// For names with "& Family", just use the first name's initial
			if (parts.includes("&")) {
				return parts[0].charAt(0).toUpperCase();
			}
			return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
		}
		return "?";
	};

	// Generate background for the avatar circle
	const getAvatarBackground = () => {
		// Use light gray background for all initials
		return "bg-zinc-200";
	};

	return (
		<div className="bg-zinc-50">
			<section
				id="testimonials"
				className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-24 lg:py-32">
				<div className="flex flex-col items-center justify-center mb-16">
					<SectionTitle
						title="All Testimonials"
						subtitle="Read what our clients have to say about working with Legendary Real Estate."
					/>

					{/* Filter buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.3
						}}
						className="flex flex-wrap justify-center gap-4 mt-10">
						<button
							onClick={() => setFilter("all")}
							className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
								filter === "all"
									? "border-b-2 border-[#B08D57] text-[#B08D57]"
									: "text-zinc-600 hover:text-[#B08D57] border-b-2 border-transparent hover:border-[#B08D57]/30"
							}`}>
							All Testimonials
						</button>
						<button
							onClick={() => setFilter("buyer")}
							className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
								filter === "buyer"
									? "border-b-2 border-[#B08D57] text-[#B08D57]"
									: "text-zinc-600 hover:text-[#B08D57] border-b-2 border-transparent hover:border-[#B08D57]/30"
							}`}>
							Buyers
						</button>
						<button
							onClick={() => setFilter("seller")}
							className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
								filter === "seller"
									? "border-b-2 border-[#B08D57] text-[#B08D57]"
									: "text-zinc-600 hover:text-[#B08D57] border-b-2 border-transparent hover:border-[#B08D57]/30"
							}`}>
							Sellers
						</button>
						<button
							onClick={() => setFilter("both")}
							className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
								filter === "both"
									? "border-b-2 border-[#B08D57] text-[#B08D57]"
									: "text-zinc-600 hover:text-[#B08D57] border-b-2 border-transparent hover:border-[#B08D57]/30"
							}`}>
							Buyers & Sellers
						</button>
					</motion.div>
				</div>

				<motion.div
					key={filter}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredTestimonials.length > 0 ? (
						filteredTestimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial._id}
								variants={itemVariants}
								custom={index}
								className="relative bg-white border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out p-8 md:p-10 flex flex-col h-full group">
								<div className="text-4xl text-zinc-400 font-serif mb-3 group-hover:text-[#B08D57] transition-colors duration-300">
									&ldquo;
								</div>
								<div className="h-px w-16 bg-zinc-200 mb-6 group-hover:bg-[#B08D57] transition-colors duration-300"></div>
								<p className="text-zinc-600 font-extralight leading-relaxed mb-8">
									{testimonial.testimonialText}
								</p>
								<div className="mt-auto pt-6 border-t border-zinc-100">
									<div className="flex items-center gap-4">
										<div
											className={`flex-shrink-0 w-12 h-12 rounded-full text-zinc-600 flex items-center justify-center font-serif font-medium ${getAvatarBackground()}`}>
											{getInitials(testimonial.name)}
										</div>
										<div className="flex-grow">
											<p className="text-zinc-700 font-medium">
												{testimonial.name}
											</p>
											{testimonial.location && (
												<p className="text-zinc-500 text-sm mt-1">
													{testimonial.location}
												</p>
											)}
											{testimonial.propertyName && (
												<p className="text-zinc-500 text-sm mt-1 italic">
													{testimonial.propertyName}
												</p>
											)}
											<p className="text-[#B08D57] text-xs mt-1 uppercase tracking-wider">
												{
													clientTypeMap[
														testimonial.clientType
													]
												}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))
					) : (
						<div className="col-span-full text-center py-16">
							<p className="text-zinc-500">
								No testimonials found for this filter. Please
								try another category.
							</p>
						</div>
					)}
				</motion.div>
			</section>
		</div>
	);
}
