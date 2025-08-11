"use client";

import React, { useState } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { AnimatePresence, motion } from "framer-motion";

interface SanityPropertyTab {
	_key: string;
	tabTitle: string;
	tabContent: PortableTextBlock[];
}

interface PropertyTabsProps {
	propertyTabs: SanityPropertyTab[];
}

// Portable Text components styling
const ptComponents: PortableTextComponents = {
	block: {
		h1: ({ children }) => (
			<h1 className="text-3xl font-semibold mb-4 text-center">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-2xl font-semibold mb-3 text-center">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-xl font-semibold mb-2 text-center">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="text-lg font-semibold mb-2 text-center">
				{children}
			</h4>
		),
		normal: ({ children }) => (
			<p className="mb-3 text-zinc-600 font-light leading-relaxed text-center">
				{children}
			</p>
		)
	},
	list: {
		bullet: ({ children }) => (
			<ul className="list-disc pl-6 mb-4 space-y-2 mx-auto max-w-2xl">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="list-decimal pl-6 mb-4 space-y-2 mx-auto max-w-2xl">
				{children}
			</ol>
		)
	},
	listItem: {
		bullet: ({ children }) => <li className="text-zinc-600">{children}</li>,
		number: ({ children }) => <li className="text-zinc-600">{children}</li>
	},
	marks: {
		strong: ({ children }) => (
			<strong className="font-semibold">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
		link: ({ children, value }) => (
			<a
				href={value?.href}
				className="text-blue-600 hover:underline"
				target="_blank"
				rel="noopener noreferrer">
				{children}
			</a>
		)
	}
};

// Animation variants for tab content
const tabContentVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

export default function PropertyTabs({ propertyTabs }: PropertyTabsProps) {
	// State to track the active tab
	const [activeTabKey, setActiveTabKey] = useState<string>(
		propertyTabs.length > 0 ? propertyTabs[0]._key : ""
	);

	// Handle tab change
	const handleTabChange = (tabKey: string) => {
		setActiveTabKey(tabKey);
	};

	// Find the active tab object
	const activeTab = propertyTabs.find((tab) => tab._key === activeTabKey);

	return (
		<div className="w-full">
			{/* Tab buttons matching blog category filter styling */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="flex flex-wrap justify-center mb-8 gap-3">
				{propertyTabs.map((tab) => (
					<button
						key={tab._key}
						onClick={() => handleTabChange(tab._key)}
						className={`px-5 py-2 text-sm font-light transition-all duration-300 cursor-pointer ${
							activeTabKey === tab._key
								? "bg-zinc-200 text-zinc-800"
								: "bg-white text-zinc-500 hover:bg-zinc-100"
						}`}>
						{tab.tabTitle}
					</button>
				))}
			</motion.div>

			{/* Tab content with animations but no card effect */}
			<div className="relative min-h-[300px]">
				<AnimatePresence mode="wait">
					{activeTab && (
						<motion.div
							key={activeTab._key}
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={tabContentVariants}
							className="w-full px-1 max-w-4xl mx-auto">
							<div className="property-detail-content">
								<PortableText
									value={activeTab.tabContent}
									components={ptComponents}
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
