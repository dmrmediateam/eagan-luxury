import React from "react";
import Image from "next/image";
import { FooterNew } from "@/components/home/FooterNew";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

export const metadata: Metadata = {
	title: "Privacy Policy | Cheryl Towey | New Jersey, WI",
	description:
		"Learn about how Cheryl Towey collects, uses, and protects your personal information in accordance with privacy laws."
};

export default function PrivacyPolicyPage() {
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
						alt="Privacy Policy"
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
							Privacy Policy
						</h1>
						<div className="h-[1px] bg-white mb-6 w-[120px]" />
						<p className="text-xl text-gray-200 max-w-2xl font-light">
							How we collect, use, and protect your personal
							information
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="bg-white">
				<div className="mx-[5%] lg:mx-[10%] xl:mx-[15%] py-16 lg:py-24">
					<PrivacyPolicyContent />
				</div>
			</div>

			{/* Footer */}
			<FooterNew />
		</>
	);
}
