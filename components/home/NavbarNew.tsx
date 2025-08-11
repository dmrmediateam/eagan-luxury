"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Animation variants for initial page load
const fadeInVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.1,
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1]
		}
	})
};

// Main navigation links with dropdown structure
const menuLinks = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{
		title: "Properties",
		href: "/properties",
		subLinks: [
			{ title: "Featured Listings", href: "/listings/active" },
			{ title: "Select Solds", href: "/listings/sold" },
			{ title: "Coming Soon", href: "/listings/coming-soon" },
			{ title: "Home Search", href: "/listings" }
		]
	},
	{
		title: "Concierge",
		href: "/concierge",
		subLinks: [
			{ title: "Buyer Services", href: "/buyers" },
			{ title: "Seller Services", href: "/sellers" },
			{ title: "Relocation Services", href: "/concierge/relocation" },
			{ title: "Property Management", href: "/concierge/management" }
		]
	},
	{ title: "Testimonials", href: "/testimonials" },
	{ title: "Blog", href: "/blog" },
	{ title: "Contact", href: "/contact" }
];

// Top navigation links (centered in navbar)
const mainNavLinks = [
	{ title: "Buyers", href: "/buyers" },
	{ title: "Sellers", href: "/sellers" },
	{ title: "About", href: "/about" },
	{ title: "Contact", href: "/contact" }
];

const NavbarNew = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [expandedItems, setExpandedItems] = useState<number[]>([]);
	const [navHeight, setNavHeight] = useState(76);
	const navRef = useRef<HTMLDivElement>(null);
	const [burgerVisible, setBurgerVisible] = useState(true);

	// Get navbar height on mount and window resize
	useEffect(() => {
		const updateNavHeight = () => {
			if (navRef.current) {
				setNavHeight(navRef.current.offsetHeight);
			}
		};

		// Initial measurement
		updateNavHeight();

		// Listen for window resize
		window.addEventListener("resize", updateNavHeight);

		return () => {
			window.removeEventListener("resize", updateNavHeight);
		};
	}, []);

	// Prevent background scrolling when drawer is open
	useEffect(() => {
		if (drawerOpen) {
			document.body.style.overflow = "hidden";
			setBurgerVisible(false);
		} else {
			document.body.style.overflow = "unset";
			// Delay burger reappearance until drawer fully closes
			const timer = setTimeout(() => {
				setBurgerVisible(true);
			}, 400); // Match the drawer close animation duration

			return () => clearTimeout(timer);
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [drawerOpen]);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
		// Reset expanded items when closing drawer
		if (drawerOpen) {
			setExpandedItems([]);
		}
	};

	const toggleSubMenu = (index: number) => {
		setExpandedItems((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	// Drawer animation variants
	const drawerVariants = {
		closed: {
			x: "100%",
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.22, 1, 0.36, 1],
				when: "afterChildren",
				staggerChildren: 0.05,
				staggerDirection: -1
			}
		},
		open: {
			x: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0.4,
				ease: [0.22, 1, 0.36, 1],
				when: "beforeChildren",
				staggerChildren: 0.05,
				delayChildren: 0.1
			}
		}
	};

	// Menu item animation variants
	const menuItemVariants = {
		closed: { opacity: 0, x: 20 },
		open: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	// Submenu animation variants (improved to prevent jumping)
	const submenuVariants = {
		closed: {
			height: 0,
			opacity: 0,
			transition: {
				duration: 0.25,
				ease: [0.32, 0.72, 0, 1],
				opacity: { duration: 0.15 }
			}
		},
		open: {
			height: "auto",
			opacity: 1,
			transition: {
				duration: 0.25,
				ease: [0.32, 0.72, 0, 1],
				opacity: { duration: 0.15, delay: 0.05 }
			}
		}
	};

	// Submenu item animation variants
	const submenuItemVariants = {
		closed: { opacity: 0, y: -5 },
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	return (
		<header
			ref={navRef}
			className="absolute top-0 left-0 right-0 z-[100] w-full bg-white">
			<div className="flex items-center justify-between  px-[5%] md:px-[10%] lg:px-[15%] relative">
				<motion.div
					className="flex items-center"
					initial="hidden"
					animate="visible"
					custom={0}
					variants={fadeInVariants}>
					<Link href="/" className="text-xl font-bold">
						<motion.div
							whileHover={{ scale: 1.03 }}
							transition={{
								duration: 0.5,
								ease: [0.22, 1, 0.36, 1]
							}}
							className="relative">
							<Image
								src="/lre/lre1.JPG"
								alt="Logo"
								height={100}
								width={100}
								className=""
								priority
							/>
						</motion.div>
					</Link>
				</motion.div>

				{/* Center Navigation Links - Desktop Only */}
				<nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-luxury-black">
					<ul className="flex items-center space-x-10">
						{mainNavLinks.map((link, index) => (
							<motion.li
								key={index}
								initial="hidden"
								animate="visible"
								custom={index + 1}
								variants={fadeInVariants}
								className="relative group">
								<Link
									href={link.href}
									className="text-luxury-black text-base tracking-[0.2em] font-extralight uppercase block py-1 hover:text-luxury-red transition-colors duration-300">
									{link.title}
								</Link>
								<span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-luxury-black group-hover:w-full transition-all duration-300 ease-out" />
							</motion.li>
						))}
					</ul>
				</nav>

				{/* Burger Menu Button */}
				<AnimatePresence>
					{burgerVisible && (
						<motion.button
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 0.4 }
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="flex flex-col items-center justify-center w-10 h-10 focus:outline-none z-[101]"
							onClick={toggleDrawer}
							aria-label="Menu">
							<span className="w-6 h-px bg-luxury-black block mb-1.5" />
							<span className="w-6 h-px bg-luxury-black block mb-1.5" />
							<span className="w-6 h-px bg-luxury-black block" />
						</motion.button>
					)}
				</AnimatePresence>
			</div>

			{/* Drawer Overlay */}
			<AnimatePresence>
				{drawerOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99]"
						onClick={toggleDrawer}
					/>
				)}
			</AnimatePresence>

			{/* Drawer Menu */}
			<AnimatePresence>
				{drawerOpen && (
					<motion.div
						initial="closed"
						animate="open"
						exit="closed"
						variants={drawerVariants}
						className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-[100] overflow-y-auto"
						style={{
							boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)",
							paddingTop: `${navHeight + 20}px`
						}}>
						{/* Close Button (X) */}
						<motion.button
							onClick={toggleDrawer}
							className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-luxury-lightgray transition-colors duration-300 focus:outline-none z-[102]"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.2 }}
							aria-label="Close menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#890300"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</motion.button>

						<div className="px-8 pb-20">
							{menuLinks.map((link, index) => (
								<motion.div
									key={index}
									variants={menuItemVariants}
									className="mb-4 border-b border-luxury-lightgray">
									{link.subLinks ? (
										<>
											<button
												onClick={() =>
													toggleSubMenu(index)
												}
												className="flex justify-between items-center w-full text-luxury-black py-4 text-xl font-extralight tracking-wide transition-all hover:text-luxury-red">
												<span>{link.title}</span>
												<motion.span
													animate={{
														rotate: expandedItems.includes(
															index
														)
															? 45
															: 0
													}}
													transition={{
														duration: 0.3,
														ease: [0.22, 1, 0.36, 1]
													}}
													className="w-5 h-5 flex items-center justify-center text-luxury-black">
													{expandedItems.includes(
														index
													)
														? "×"
														: "+"}
												</motion.span>
											</button>

											<AnimatePresence initial={false}>
												{expandedItems.includes(
													index
												) && (
													<motion.div
														initial="closed"
														animate="open"
														exit="closed"
														variants={
															submenuVariants
														}
														className="overflow-hidden pl-4">
														<div className="py-2">
															{link.subLinks.map(
																(
																	subLink,
																	subIndex
																) => (
																	<motion.div
																		key={
																			subIndex
																		}
																		variants={
																			submenuItemVariants
																		}
																		className="py-2">
																		<Link
																			href={
																				subLink.href
																			}
																			className="block text-luxury-darkgray text-base font-extralight tracking-wide hover:text-luxury-red transition-colors"
																			onClick={
																				toggleDrawer
																			}>
																			{
																				subLink.title
																			}
																		</Link>
																	</motion.div>
																)
															)}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
										<Link
											href={link.href}
											className="block w-full text-luxury-black py-4 text-xl font-extralight tracking-wide transition-all hover:text-luxury-red"
											onClick={toggleDrawer}>
											{link.title}
										</Link>
									)}
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default NavbarNew;
