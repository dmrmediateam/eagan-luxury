import React from "react";
import Image from "next/image";
import { FooterNew } from "@/components/home/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import TermsOfServiceContent from "@/components/terms/TermsOfServiceContent";

export const metadata: Metadata = {
	title: "Terms of Service | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Learn about Legendary Real Estate's Terms of Service, including website usage rules, content licensing, and liability limitations."
};

export default function TermsOfServicePage() {
	return (
		<>
			{/* Header Section */}
			<div className="relative h-[50vh] overflow-hidden">
				{/* Back button */}
				<div className="absolute top-8 left-8 z-50">
					<Link
						href="/"
						className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-md transition-all text-white">
						<ArrowLeft size={16} />
						<span>Back to Home</span>
					</Link>
				</div>

				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/media/clientsimage.jpg"
						alt="Terms of Service"
						fill
						priority
						style={{ objectFit: "cover" }}
						className="brightness-[0.6]"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10"></div>
				</div>

				{/* Header Content */}
				<div className="max-w-3xl mx-auto h-full flex flex-col justify-end pb-16 relative z-20 px-4">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 text-white">
							Terms of Service
						</h1>
						<div className="h-[1px] bg-white mb-6 w-[120px]" />
						<p className="text-xl text-gray-200 max-w-2xl font-light">
							The rules and guidelines for using our website and
							services
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-16 lg:py-24">
					<TermsOfServiceContent />
				</div>
			</div>

			{/* Footer */}
			<FooterNew />
		</>
	);
}
