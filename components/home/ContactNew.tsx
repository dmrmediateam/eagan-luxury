"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: custom * 0.12,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

const formElementVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.3 + custom * 0.1,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

export function ContactNew() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		setIsError(false);

		try {
			// Simulate API call with timeout
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log("Form submitted:", data);

			// Reset form
			reset();
			setIsSuccess(true);

			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSuccess(false);
			}, 5000);
		} catch (err) {
			console.error("Error submitting form:", err);
			setIsError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="bg-white py-24 md:py-32">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-5xl mx-auto px-6 md:px-8">
					{/* Header */}
					<SectionTitle
						title="Contact Us"
						subtitle="We would be delighted to assist you with your luxury real estate needs."
						className="mb-20"
					/>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
						{/* Contact Information */}
						<motion.div
							custom={2}
							variants={textVariants}
							className="bg-luxury-black text-white p-10 md:p-12 col-span-2">
							<h3 className="font-serif text-2xl mb-8 relative inline-block">
								Get in Touch
								<span className="absolute -bottom-3 left-0 w-12 h-px bg-luxury-red"></span>
							</h3>

							<div className="space-y-8 mt-12">
								{/* Phone */}
								<div className="space-y-2">
									<p className="text-white/60 text-sm uppercase tracking-wider font-light">
										Phone
									</p>
									<p className="text-white/90 font-serif text-base">
										+1 (212) 555-1234
									</p>
								</div>

								{/* Email */}
								<div className="space-y-2">
									<p className="text-white/60 text-sm uppercase tracking-wider font-light">
										Email
									</p>
									<p className="text-white/90 font-serif text-base">
										judy@bhhsmmr.com
									</p>
								</div>

								{/* Address */}
								<div className="space-y-2">
									<p className="text-white/60 text-sm uppercase tracking-wider font-light">
										Office
									</p>
									<p className="text-white/90 font-serif text-base">
										488 Main Street
										<br />
										Lake Geneva, WI 53147
									</p>
								</div>
							</div>

							<div className="mt-12 pt-12 border-t border-white/10">
								<p className="text-white/70 text-sm leading-relaxed">
									Our dedicated team is ready to provide you
									with personalized service for all your
									luxury real estate needs in Lake Geneva and
									Asheville.
								</p>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							custom={3}
							variants={textVariants}
							className="bg-white p-10 md:p-12 col-span-3">
							<h3 className="font-serif text-2xl text-luxury-black mb-8 relative inline-block">
								Send a Message
								<span className="absolute -bottom-3 left-0 w-12 h-px bg-luxury-red"></span>
							</h3>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className="space-y-7 mt-12">
								{/* Name Field */}
								<motion.div
									custom={0}
									variants={formElementVariants}
									className="space-y-2">
									<label
										htmlFor="name"
										className="block text-luxury-black font-sans text-sm tracking-wide">
										Name
									</label>
									<input
										id="name"
										type="text"
										className={`w-full px-5 py-3.5 border bg-transparent focus:outline-none focus:ring-1 transition-all duration-200 ${
											errors.name
												? "border-red-400 focus:ring-red-400"
												: "border-luxury-lightgray focus:ring-luxury-red focus:border-luxury-red"
										}`}
										{...register("name", {
											required: "Name is required"
										})}
									/>
									{errors.name && (
										<p className="text-red-500 text-xs mt-1 font-sans">
											{errors.name.message}
										</p>
									)}
								</motion.div>

								{/* Email Field */}
								<motion.div
									custom={1}
									variants={formElementVariants}
									className="space-y-2">
									<label
										htmlFor="email"
										className="block text-luxury-black font-sans text-sm tracking-wide">
										Email
									</label>
									<input
										id="email"
										type="email"
										className={`w-full px-5 py-3.5 border bg-transparent focus:outline-none focus:ring-1 transition-all duration-200 ${
											errors.email
												? "border-red-400 focus:ring-red-400"
												: "border-luxury-lightgray focus:ring-luxury-red focus:border-luxury-red"
										}`}
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address"
											}
										})}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs mt-1 font-sans">
											{errors.email.message}
										</p>
									)}
								</motion.div>

								{/* Phone Field */}
								<motion.div
									custom={2}
									variants={formElementVariants}
									className="space-y-2">
									<label
										htmlFor="phone"
										className="block text-luxury-black font-sans text-sm tracking-wide">
										Phone
									</label>
									<input
										id="phone"
										type="tel"
										className={`w-full px-5 py-3.5 border bg-transparent focus:outline-none focus:ring-1 transition-all duration-200 ${
											errors.phone
												? "border-red-400 focus:ring-red-400"
												: "border-luxury-lightgray focus:ring-luxury-red focus:border-luxury-red"
										}`}
										{...register("phone", {
											required: "Phone number is required"
										})}
									/>
									{errors.phone && (
										<p className="text-red-500 text-xs mt-1 font-sans">
											{errors.phone.message}
										</p>
									)}
								</motion.div>

								{/* Message Field */}
								<motion.div
									custom={3}
									variants={formElementVariants}
									className="space-y-2">
									<label
										htmlFor="message"
										className="block text-luxury-black font-sans text-sm tracking-wide">
										Your Message
									</label>
									<textarea
										id="message"
										rows={5}
										className={`w-full px-5 py-3.5 border bg-transparent focus:outline-none focus:ring-1 transition-all duration-200 ${
											errors.message
												? "border-red-400 focus:ring-red-400"
												: "border-luxury-lightgray focus:ring-luxury-red focus:border-luxury-red"
										}`}
										{...register("message", {
											required: "Message is required"
										})}
									/>
									{errors.message && (
										<p className="text-red-500 text-xs mt-1 font-sans">
											{errors.message.message}
										</p>
									)}
								</motion.div>

								{/* Submit Button */}
								<motion.div
									custom={4}
									variants={formElementVariants}
									className="pt-4">
									<button
										type="submit"
										disabled={isSubmitting}
										className="px-8 py-3.5 bg-luxury-red border border-luxury-red text-white font-sans text-sm tracking-wide uppercase transition-all duration-300 hover:bg-luxury-darkred hover:border-luxury-darkred focus:outline-none focus:ring-2 focus:ring-luxury-red focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed">
										{isSubmitting
											? "Sending..."
											: "Send Message"}
									</button>
								</motion.div>

								{/* Success or Error Message */}
								{isSuccess && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4 }}
										className="p-4 border-l-4 border-l-[#B08D57] border-t border-r border-b border-[#F0F0F0] bg-[#FCFBF9] text-[#1A1A1A] mt-6 font-sans text-sm">
										Thank you for your message. We will be
										in touch shortly to discuss your luxury
										real estate needs.
									</motion.div>
								)}

								{isError && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4 }}
										className="p-4 border-l-4 border-l-red-400 border-t border-r border-b border-[#F0F0F0] bg-[#FEF9F9] text-[#1A1A1A] mt-6 font-sans text-sm">
										There was an error sending your message.
										Please try again or contact us directly.
									</motion.div>
								)}
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
