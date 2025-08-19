"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Heart,
	MessageCircle,
	Share2,
	ThumbsUp,
	MessageSquare,
	Award,
	Send
} from "lucide-react";
import instagram from "@/public/icons/instagram-white.svg";
import facebook from "@/public/icons/facebook-white.svg";
import { SectionTitle } from "../ui/SectionTitle";

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

interface SocialPost {
	id: string;
	platform: "facebook" | "instagram";
	username: string;
	userHandle: string;
	profileImage: string;
	postImage: string;
	caption: string;
	postedAt: string;
	likes: number;
	comments: number;
	shares: number;
	url: string;
}

interface LinkedInPost {
	id: string;
	username: string;
	title: string;
	profileImage: string;
	content: string;
	image?: string;
	postedAt: string;
	likes: number;
	comments: number;
	shares: number;
	reactions: {
		type: string;
		count: number;
	}[];
	url: string;
}

const socialPosts: SocialPost[] = [
	{
		id: "insta-1",
		platform: "instagram",
		username: "Cheryl Towey Team",
		userHandle: "@legendaryrealestateteam",
		profileImage: "",
		postImage: "/mr/mr2.webp",
		caption:
			"Exclusive preview of our newest luxury listing in New Jersey, WI. Contact us for private viewings of this lakefront retreat.",
		postedAt: "2 days ago",
		likes: 284,
		comments: 32,
		shares: 14,
		url: "#"
	},
	{
		id: "fb-1",
		platform: "facebook",
		username: "Cheryl Towey Team",
		userHandle: "@legendaryrealestateteam",
		profileImage: "",
		postImage:
			"https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Faa3jnnkxyfjqmb6te1a48em3e3i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fsothebysrealty.com%2Fassets%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
		caption:
			"Another stunning property SOLD in under 30 days in New Jersey, WI. Market expertise makes all the difference in this luxury mountain market.",
		postedAt: "1 week ago",
		likes: 412,
		comments: 48,
		shares: 23,
		url: "#"
	}
];

const linkedInPosts: LinkedInPost[] = [
	{
		id: "linkedin-1",
		username: "Cheryl Towey Team",
		title: "@legendaryrealestateteam",
		profileImage: "",
		content:
			"We're thrilled to announce our new property acquisition service for discerning clients looking to expand their luxury real estate portfolio in New Jersey area, WI. Our team provides end-to-end support with market analysis, property selection, and investment strategies tailored to your mountain living goals.",
		image: "/mr/mr1.webp",
		postedAt: "3 days ago",
		likes: 348,
		comments: 42,
		shares: 18,
		reactions: [
			{ type: "like", count: 245 },
			{ type: "celebrate", count: 67 },
			{ type: "support", count: 36 }
		],
		url: "#"
	}
];

export function Socials() {
	return (
		<section className="relative w-full py-20 md:py-32 bg-[#FAFAFA]">
			<div className="max-w-5xl mx-auto px-6 md:px-8">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-10%" }}
					className="flex flex-col items-center space-y-16">
					{/* Section Header */}
					<SectionTitle
						title="Follow Us"
						subtitle="Join our community of luxury real estate enthusiasts"
						className="mb-20"
					/>

					{/* Social Media Feed */}
					<motion.div
						custom={3}
						variants={textVariants}
						className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
						{socialPosts.map((post, index) => (
							<motion.div
								key={post.id}
								custom={index + 4}
								variants={textVariants}
								className="flex flex-col h-full">
								<div className="bg-white overflow-hidden border border-[#E5E5E5] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer h-full flex flex-col group">
									{/* Post Header */}
									<div className="p-5 flex items-center space-x-3 border-b border-[#F0F0F0]">
										<div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#1A1A1A] flex items-center justify-center">
											<span className="font-serif text-white text-lg tracking-tight">
												MR
											</span>
										</div>
										<div className="flex-1">
											<p className="text-[#1A1A1A] font-medium text-sm">
												{post.username}
											</p>
											<p className="text-[#2B2B2B]/70 text-xs">
												{post.userHandle}
											</p>
										</div>
										<div>
											{post.platform === "instagram" ? (
												<Image
													src={instagram}
													alt="Instagram"
													width={20}
													height={20}
													className="opacity-80"
												/>
											) : (
												<Image
													src={facebook}
													alt="Facebook"
													width={20}
													height={20}
													className="opacity-80"
												/>
											)}
										</div>
									</div>

									{/* Post Image */}
									<Link
										href={post.url}
										target="_blank"
										rel="noopener noreferrer"
										className="block relative w-full aspect-square overflow-hidden">
										<Image
											src={post.postImage}
											alt="Post image"
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											priority={index === 0}
											className="object-cover"
										/>

										{/* Overlay with gradient */}
										<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</Link>

									{/* Engagement Stats */}
									<div className="p-5 flex items-center justify-between border-b border-[#F0F0F0]">
										<div className="flex items-center space-x-4">
											<div className="flex items-center space-x-1 cursor-pointer">
												<Heart
													size={18}
													className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
												/>
												<span className="text-sm text-[#2B2B2B]">
													{post.likes}
												</span>
											</div>

											<div className="flex items-center space-x-1 cursor-pointer">
												<MessageCircle
													size={18}
													className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
												/>
												<span className="text-sm text-[#2B2B2B]">
													{post.comments}
												</span>
											</div>

											<div className="flex items-center space-x-1 cursor-pointer">
												<Share2
													size={18}
													className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
												/>
												<span className="text-sm text-[#2B2B2B]">
													{post.shares}
												</span>
											</div>
										</div>
										<div>
											<span className="text-xs text-[#2B2B2B]/70">
												{post.postedAt}
											</span>
										</div>
									</div>

									{/* Caption */}
									<div className="p-5 flex-1">
										<p className="text-sm text-[#2B2B2B]/90 leading-relaxed">
											{post.caption}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* LinkedIn Feed */}
					<motion.div
						custom={7}
						variants={textVariants}
						className="w-full">
						{linkedInPosts.map((post, index) => (
							<motion.div
								key={post.id}
								custom={index + 8}
								variants={textVariants}
								className="flex flex-col">
								<div className="bg-white overflow-hidden border border-[#E5E5E5] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
									{/* LinkedIn Post Header */}
									<div className="p-6 flex items-start space-x-3">
										<div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#1A1A1A] flex-shrink-0 flex items-center justify-center">
											<span className="font-serif text-white text-base tracking-tight">
												MR
											</span>
										</div>
										<div className="flex-1">
											<div className="flex flex-col">
												<p className="text-[#1A1A1A] font-medium text-base">
													{post.username}
												</p>
												<p className="text-[#2B2B2B]/70 text-xs">
													{post.title}
												</p>
												<p className="text-[#2B2B2B]/60 text-xs mt-1">
													{post.postedAt}
												</p>
											</div>
										</div>
									</div>

									{/* LinkedIn Post Content */}
									<div className="px-6 pb-5">
										<p className="text-sm text-[#2B2B2B]/90 leading-relaxed mb-4">
											{post.content}
										</p>

										{/* Post Image (if present) */}
										{post.image && (
											<div className="relative w-full aspect-[16/9] overflow-hidden mt-3 mb-2">
												<Image
													src={post.image}
													alt="LinkedIn post"
													fill
													sizes="(max-width: 768px) 100vw, 800px"
													className="object-cover"
												/>
												<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											</div>
										)}
									</div>

									{/* LinkedIn Engagement Stats */}
									<div className="px-6 py-3 flex items-center justify-between border-t border-b border-[#F0F0F0]">
										<div className="flex items-center space-x-1">
											<div className="flex -space-x-1">
												<span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
													<ThumbsUp
														size={12}
														className="text-white"
													/>
												</span>
												<span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
													<Award
														size={12}
														className="text-white"
													/>
												</span>
											</div>
											<span className="text-xs text-[#2B2B2B]/70 ml-1">
												{post.likes}
											</span>
										</div>
										<div className="flex items-center space-x-3 text-xs text-[#2B2B2B]/70">
											<span>
												{post.comments} comments
											</span>
											<span>{post.shares} shares</span>
										</div>
									</div>

									{/* LinkedIn Actions */}
									<div className="px-2 py-2 flex items-center justify-between">
										<div className="flex-1 flex items-center justify-center py-2 space-x-2 cursor-pointer rounded-sm hover:bg-[#00000005]">
											<ThumbsUp
												size={18}
												className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
											/>
											<span className="text-sm text-[#2B2B2B]/80 hover:text-[#2B2B2B]">
												Like
											</span>
										</div>

										<div className="flex-1 flex items-center justify-center py-2 space-x-2 cursor-pointer rounded-sm hover:bg-[#00000005]">
											<MessageSquare
												size={18}
												className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
											/>
											<span className="text-sm text-[#2B2B2B]/80 hover:text-[#2B2B2B]">
												Comment
											</span>
										</div>

										<div className="flex-1 flex items-center justify-center py-2 space-x-2 cursor-pointer rounded-sm hover:bg-[#00000005]">
											<Share2
												size={18}
												className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
											/>
											<span className="text-sm text-[#2B2B2B]/80 hover:text-[#2B2B2B]">
												Share
											</span>
										</div>

										<div className="flex-1 flex items-center justify-center py-2 space-x-2 cursor-pointer rounded-sm hover:bg-[#00000005]">
											<Send
												size={18}
												className="text-[#2B2B2B]/70 hover:text-[#B08D57] hover:scale-110 transition-all duration-200"
											/>
											<span className="text-sm text-[#2B2B2B]/80 hover:text-[#2B2B2B]">
												Send
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Call to Action */}
					<motion.div
						custom={10}
						variants={textVariants}
						className="flex flex-col items-center space-y-5 mt-8">
						<motion.p className="text-center text-[#2B2B2B] text-sm max-w-md">
							Stay up to date with our latest luxury mountain
							listings and real estate insights.
						</motion.p>
						<Link
							href="https://instagram.com/michaudrauersgroup"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block px-6 py-2.5 border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-white transition-colors duration-300 text-sm tracking-wide">
							FOLLOW OUR ACCOUNTS
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
