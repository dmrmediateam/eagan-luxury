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

export default function TermsOfServiceContent() {
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
					Acceptance of Terms
				</h2>
				<p>
					Welcome to Cheryl Towey website. By accessing and
					using this website, you accept and agree to be bound by the
					terms and provisions of this agreement. These Terms of
					Service apply to all visitors, users, and others who access
					or use our real estate services in New Jersey area.
				</p>
			</motion.div>

			<motion.div custom={1} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Use License
				</h2>
				<p>
					Permission is granted to temporarily view the materials
					(information or software) on Cheryl Towey&apos;s
					website for personal, non-commercial transitory viewing
					only. This is the grant of a license, not a transfer of
					title, and under this license you may not:
				</p>
				<ul>
					<li>Modify or copy the materials</li>
					<li>
						Use the materials for any commercial purpose or for any
						public display (commercial or non-commercial)
					</li>
					<li>
						Attempt to decompile or reverse engineer any software
						contained on Cheryl Towey&apos;s website
					</li>
					<li>
						Remove any copyright or other proprietary notations from
						the materials
					</li>
					<li>
						Transfer the materials to another person or
						&ldquo;mirror&rdquo; the materials on any other server
					</li>
				</ul>
				<p>
					This license shall automatically terminate if you violate
					any of these restrictions and may be terminated by The
					Goodrich Group at any time.
				</p>
			</motion.div>

			<motion.div custom={2} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Real Estate Information
				</h2>
				<p>
					Cheryl Towey provides real estate services in the New Jersey area and
					Walworth County. The information provided on our website
					regarding properties, market trends, and real estate advice
					is for general informational purposes only. While we strive
					to keep the information up to date and correct, we make no
					representations or warranties of any kind, express or
					implied, about the completeness, accuracy, reliability,
					suitability, or availability of the information, products,
					services, or related graphics contained on the website for
					any purpose.
				</p>
				<p>
					Any reliance you place on such information is therefore
					strictly at your own risk. We recommend that you verify all
					information with appropriate professionals before making any
					real estate decisions.
				</p>
			</motion.div>

			<motion.div custom={3} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					User Accounts and Communication
				</h2>
				<p>
					If you choose to register for an account or provide your
					contact information on our website, you agree to:
				</p>
				<ul>
					<li>Provide accurate, current, and complete information</li>
					<li>
						Maintain and promptly update your information as
						necessary
					</li>
					<li>
						Be responsible for maintaining the confidentiality of
						your account and password
					</li>
					<li>
						Accept responsibility for all activities that occur
						under your account
					</li>
				</ul>
				<p>
					By providing your contact information, you agree that we may
					send you emails, newsletters, property alerts, and other
					communications related to our services. You can opt out of
					marketing communications at any time by following the
					unsubscribe instructions in the emails or contacting us
					directly.
				</p>
			</motion.div>

			<motion.div custom={4} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Disclaimer
				</h2>
				<p>
					The materials on Cheryl Towey&apos;s website are
					provided on an &lsquo;as is&rsquo; basis. Cheryl Towey
					makes no warranties, expressed or implied, and hereby
					disclaims and negates all other warranties including,
					without limitation, implied warranties or conditions of
					merchantability, fitness for a particular purpose, or
					non-infringement of intellectual property or other violation
					of rights.
				</p>
				<p>
					Further, Cheryl Towey does not warrant or make any
					representations concerning the accuracy, likely results, or
					reliability of the use of the materials on its website or
					otherwise relating to such materials or on any sites linked
					to this site.
				</p>
			</motion.div>

			<motion.div custom={5} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Limitations
				</h2>
				<p>
					In no event shall Cheryl Towey or its suppliers be
					liable for any damages (including, without limitation,
					damages for loss of data or profit, or due to business
					interruption) arising out of the use or inability to use the
					materials on Cheryl Towey&apos;s website, even if The
					Goodrich Group or a Cheryl Towey authorized
					representative has been notified orally or in writing of the
					possibility of such damage.
				</p>
				<p>
					Because some jurisdictions do not allow limitations on
					implied warranties, or limitations of liability for
					consequential or incidental damages, these limitations may
					not apply to you.
				</p>
			</motion.div>

			<motion.div custom={6} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Links to Third-Party Websites
				</h2>
				<p>
					Our website may contain links to third-party websites or
					services that are not owned or controlled by The Goodrich
					Group. We have no control over, and assume no responsibility
					for, the content, privacy policies, or practices of any
					third-party websites or services. You further acknowledge
					and agree that Cheryl Towey shall not be responsible
					or liable, directly or indirectly, for any damage or loss
					caused or alleged to be caused by or in connection with the
					use of or reliance on any such content, goods, or services
					available on or through any such websites or services.
				</p>
				<p>
					We strongly advise you to read the terms and conditions and
					privacy policies of any third-party websites or services
					that you visit.
				</p>
			</motion.div>

			<motion.div custom={7} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Revisions and Errata
				</h2>
				<p>
					The materials appearing on Cheryl Towey&apos;s website
					could include technical, typographical, or photographic
					errors. Cheryl Towey does not warrant that any of the
					materials on its website are accurate, complete, or current.
					Cheryl Towey may make changes to the materials
					contained on its website at any time without notice. The
					Goodrich Group does not, however, make any commitment to
					update the materials.
				</p>
			</motion.div>

			<motion.div custom={8} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Governing Law
				</h2>
				<p>
					These terms and conditions are governed by and construed in
					accordance with the laws of California and you irrevocably
					submit to the exclusive jurisdiction of the courts in that
					State.
				</p>
			</motion.div>

			<motion.div custom={9} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Changes to Terms of Service
				</h2>
				<p>
					We reserve the right, at our sole discretion, to modify or
					replace these Terms at any time. If a revision is material,
					we will try to provide at least 30 days&apos; notice prior
					to any new terms taking effect. What constitutes a material
					change will be determined at our sole discretion.
				</p>
				<p>
					By continuing to access or use our website after those
					revisions become effective, you agree to be bound by the
					revised terms. If you do not agree to the new terms, please
					stop using the website and services.
				</p>
			</motion.div>

			<motion.div custom={10} variants={textVariants}>
				<h2 className="font-light text-zinc-800 text-2xl md:text-3xl mb-6 tracking-wide mt-12">
					Contact Us
				</h2>
				<p>
					If you have any questions about these Terms of Service,
					please contact us at:
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
