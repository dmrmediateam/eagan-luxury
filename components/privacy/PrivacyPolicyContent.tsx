"use client";

import React from "react";
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

export default function PrivacyPolicyContent() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="max-w-3xl mx-auto prose prose-lg prose-zinc prose-headings:mt-12 first:prose-headings:mt-0">
			<motion.div custom={0} variants={textVariants}>
				<p className="text-zinc-600 font-light text-lg">
					Last Updated:{" "}
					{new Date().toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric"
					})}
				</p>

				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide">
					Introduction
				</h2>
				<p>
					Cheryl Towey (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
					&ldquo;us&rdquo;) is committed to protecting your privacy.
					This Privacy Policy explains how we collect, use, disclose,
					and safeguard your information when you visit our website or
					use our services related to luxury real estate in Napa and
					Walworth County.
				</p>
			</motion.div>

			<motion.div custom={1} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Information We Collect
				</h2>
				<p>
					We may collect information about you in various ways,
					including:
				</p>
				<ul>
					<li>
						<strong>Personal Information:</strong> Name, email
						address, phone number, and mailing address when you
						contact us, sign up for our newsletter, or request
						information about properties.
					</li>
					<li>
						<strong>Property Preferences:</strong> Information about
						your real estate preferences, budget, and other criteria
						relevant to your property search.
					</li>
					<li>
						<strong>Website Usage:</strong> Information about how
						you use our website, including IP address, browser type,
						referring/exit pages, and operating system.
					</li>
					<li>
						<strong>Cookies and Tracking Technologies:</strong> We
						may use cookies and similar tracking technologies to
						track activity on our website and collect certain
						information.
					</li>
				</ul>
			</motion.div>

			<motion.div custom={2} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					How We Use Your Information
				</h2>
				<p>
					We may use the information we collect for various purposes,
					including:
				</p>
				<ul>
					<li>To provide, maintain, and improve our services</li>
					<li>
						To process property inquiries and provide information
						about listings
					</li>
					<li>
						To personalize your experience with our website and
						services
					</li>
					<li>
						To send newsletters, market updates, and promotional
						materials
					</li>
					<li>
						To communicate with you about your inquiries, requests,
						or questions
					</li>
					<li>
						To analyze website usage and improve our content and
						offerings
					</li>
					<li>To comply with legal obligations</li>
				</ul>
			</motion.div>

			<motion.div custom={3} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Disclosure of Your Information
				</h2>
				<p>We may share your information with:</p>
				<ul>
					<li>
						<strong>Service Providers:</strong> We may share your
						information with third-party vendors and service
						providers that assist us in providing our services, such
						as website hosting, data analysis, and customer service.
					</li>
					<li>
						<strong>Business Partners:</strong> With your consent,
						we may share your information with our business
						partners, such as Sotheby&apos;s International Realty,
						for property-related services.
					</li>
					<li>
						<strong>Legal Requirements:</strong> We may disclose
						your information if required to do so by law or in
						response to valid requests by public authorities.
					</li>
				</ul>
				<p>
					We do not sell, rent, or trade your personal information to
					third parties for marketing purposes.
				</p>
			</motion.div>

			<motion.div custom={4} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					California Residents&apos; Rights
				</h2>
				<p>
					If you are a California resident, you have certain rights
					under the California Consumer Privacy Act (CCPA), including:
				</p>
				<ul>
					<li>
						The right to know what personal information we collect
						and how we use it
					</li>
					<li>The right to delete your personal information</li>
					<li>
						The right to opt-out of the sale of your personal
						information
					</li>
					<li>
						The right to non-discrimination for exercising your
						privacy rights
					</li>
				</ul>
				<p>
					To exercise these rights, please contact us using the
					information provided below.
				</p>
			</motion.div>

			<motion.div custom={5} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Security of Your Information
				</h2>
				<p>
					We implement appropriate security measures to protect the
					security of your personal information. However, no method of
					transmission over the Internet or electronic storage is 100%
					secure, and we cannot guarantee absolute security.
				</p>
			</motion.div>

			<motion.div custom={6} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Changes to This Privacy Policy
				</h2>
				<p>
					We may update our Privacy Policy from time to time. We will
					notify you of any changes by posting the new Privacy Policy
					on this page and updating the &ldquo;Last Updated&rdquo;
					date at the top of this policy.
				</p>
			</motion.div>

			<motion.div custom={7} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Contact Us
				</h2>
				<p>
					If you have any questions about this Privacy Policy, please
					contact us at:
				</p>
				<p className="not-prose">
					<span className="block text-zinc-700 font-light">
						Cheryl Towey
					</span>
					<span className="block text-zinc-700 font-light">
						1625 NJ-10 East
					</span>
					<span className="block text-zinc-700 font-light">
					Morris Plains, NJ 07950
					</span>
					<span className="block text-zinc-700 font-light mt-2">
						Email:{" "}
						<a
							href="mailto:cheryl.towey@weichert.com"
							className="text-zinc-700 hover:text-zinc-900 underline">
							cheryl.towey@weichert.com
						</a>
					</span>
					<span className="block text-zinc-700 font-light">
						Phone:{" "}
						<a
							href="tel:+1 (908) 334-0971"
							className="text-zinc-700 hover:text-zinc-900">
							+1 (908) 334-0971
						</a>
					</span>
				</p>
			</motion.div>
		</motion.div>
	);
}
