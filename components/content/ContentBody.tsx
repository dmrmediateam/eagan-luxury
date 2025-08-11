"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type {
	PortableTextReactComponents,
	PortableTextMarkComponentProps
} from "@portabletext/react";
import { SanityContentBlock } from "./types";

interface ContentBodyProps {
	content?: SanityContentBlock[];
}

// Components for the PortableText renderer
const components: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }: { value: unknown }) => {
			const imageValue = value as {
				asset?: { url?: string };
				alt?: string;
				caption?: string;
			};

			if (!imageValue?.asset?.url) {
				return null;
			}

			return (
				<div className="my-8 relative w-full h-[400px] overflow-hidden rounded-lg">
					<Image
						src={imageValue.asset.url}
						alt={imageValue.alt || "Content image"}
						fill
						className="object-cover"
					/>
					{imageValue.caption && (
						<p className="text-sm text-gray-500 mt-2 text-center">
							{imageValue.caption}
						</p>
					)}
				</div>
			);
		}
	},
	block: {
		h2: ({ children }) => (
			<h2 className="font-light text-zinc-800 text-3xl md:text-4xl mb-6 tracking-wide mt-12">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="font-light text-zinc-800 text-2xl md:text-3xl mb-4 tracking-wide mt-10">
				{children}
			</h3>
		),
		normal: ({ children }) => (
			<p className="mb-6 text-zinc-700">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-l-[1px] border-zinc-300 pl-6 italic my-10 font-light p-6 bg-zinc-50">
				{children}
			</blockquote>
		)
	},
	marks: {
		link: ({ children, value }: PortableTextMarkComponentProps) => {
			const linkValue = value as { href?: string; blank?: boolean };
			const rel = linkValue.blank ? "noreferrer noopener" : undefined;
			return (
				<a
					href={linkValue.href}
					rel={rel}
					target={linkValue.blank ? "_blank" : undefined}
					className="text-blue-600 hover:underline">
					{children}
				</a>
			);
		},
		strong: ({ children }) => (
			<strong className="font-semibold text-zinc-800">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>
	},
	list: {
		bullet: ({ children }) => (
			<ul className="list-disc ml-6 mb-6 text-zinc-700">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="list-decimal ml-6 mb-6 text-zinc-700">{children}</ol>
		)
	},
	listItem: {
		bullet: ({ children }) => <li className="mb-2">{children}</li>,
		number: ({ children }) => <li className="mb-2">{children}</li>
	}
};

export default function ContentBody({ content }: ContentBodyProps) {
	const contentRef = useRef<HTMLDivElement>(null);

	// If no content is provided, show fallback content
	if (!content || content.length === 0) {
		return (
			<div className="max-w-3xl mx-auto">
				<motion.div
					ref={contentRef}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="prose prose-lg max-w-none mb-16 text-zinc-700">
					<div className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-zinc-800">
						<p>
							This content is currently being prepared. Please
							check back soon for the full content.
						</p>
					</div>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="max-w-3xl mx-auto">
			<motion.div
				ref={contentRef}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="prose prose-lg max-w-none mb-16 text-zinc-700">
				<PortableText value={content} components={components} />
			</motion.div>
		</div>
	);
}
