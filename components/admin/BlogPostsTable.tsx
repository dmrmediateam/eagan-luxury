"use client";

import React from "react";
import Image from "next/image";
import { BlogPost } from "./types";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";

interface BlogPostsTableProps {
	filteredPosts: BlogPost[];
	getStatusBadgeClass: (status: string) => string;
	handleEditClick: (post: BlogPost) => void;
	handleDeleteClick: (id: string) => void;
	isLoading?: boolean;
}

const BlogPostsTable: React.FC<BlogPostsTableProps> = ({
	filteredPosts,
	getStatusBadgeClass,
	handleEditClick,
	handleDeleteClick,
	isLoading = false
}) => {
	if (isLoading) {
		return (
			<div className="p-6 text-center text-gray-500">
				Loading blog posts...
			</div>
		);
	}

	return (
		<div className="bg-white xl:shadow-md xl:rounded-lg">
			{/* Table Layout for Desktop (hidden below xl) */}
			<div className="hidden xl:block overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Post
							</TableHead>
							<TableHead className="text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Categories
							</TableHead>
							<TableHead className="text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Status
							</TableHead>
							<TableHead className="text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Date
							</TableHead>
							<TableHead className="text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
								Actions
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredPosts.length > 0 ? (
							filteredPosts.map((post) => (
								<TableRow key={post._id}>
									<TableCell>
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<Image
													src={
														post.mainImage?.url ||
														"/media/placeholder.jpg"
													}
													alt={
														post.mainImage?.alt ||
														post.title
													}
													width={40}
													height={40}
													className="object-cover w-10 h-10 rounded-md"
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-900">
													{post.title}
												</div>
												<div className="text-sm text-gray-500 truncate max-w-xs">
													{post.excerpt}
												</div>
											</div>
										</div>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-900">
											{post.categories &&
											post.categories.length > 0
												? post.categories.join(", ")
												: "Uncategorized"}
										</div>
										<div className="text-sm text-gray-500">
											{post.readTime}
										</div>
									</TableCell>
									<TableCell>
										<span
											className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${getStatusBadgeClass(
												post.status
											)}`}>
											{post.status}
										</span>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-500">
											{new Date(
												post.publishedAt
											).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric"
											})}
										</div>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end space-x-4">
											<button
												onClick={() =>
													handleEditClick(post)
												}
												className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
												aria-label={`Edit ${post.title}`}>
												<svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
													/>
												</svg>
											</button>
											<button
												onClick={() =>
													handleDeleteClick(post._id)
												}
												className="text-red-600 hover:text-red-900 focus:outline-none"
												aria-label={`Delete ${post.title}`}>
												<svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</button>
										</div>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={5}
									className="text-sm text-center text-gray-500">
									No blog posts found matching your criteria.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Card Layout for Mobile (hidden on desktop) */}
			<div className="xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-4">
				{filteredPosts.length > 0 ? (
					filteredPosts.map((post) => (
						<div
							key={post._id}
							className="border rounded-lg p-4 shadow-sm bg-white">
							<div className="flex items-center">
								<Image
									src={
										post.mainImage?.url ||
										"/media/placeholder.jpg"
									}
									alt={post.mainImage?.alt || post.title}
									width={64}
									height={64}
									className="object-cover w-16 h-16 rounded-md"
								/>
								<div className="ml-4 flex-1">
									<h3 className="text-sm font-medium text-gray-900">
										{post.title}
									</h3>
									<p className="text-sm text-gray-500">
										{post.excerpt}
									</p>
								</div>
							</div>
							<div className="mt-2 text-sm text-gray-900">
								<p>
									{post.categories &&
									post.categories.length > 0
										? post.categories.join(", ")
										: "Uncategorized"}{" "}
									• {post.readTime}
								</p>
							</div>
							<div className="mt-2 flex space-x-2">
								<span
									className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(
										post.status
									)}`}>
									{post.status}
								</span>
							</div>
							<div className="mt-2 text-sm text-gray-500">
								{new Date(post.publishedAt).toLocaleDateString(
									"en-US",
									{
										month: "short",
										day: "numeric",
										year: "numeric"
									}
								)}
							</div>
							<div className="mt-4 flex justify-end space-x-4">
								<button
									onClick={() => handleEditClick(post)}
									className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
									aria-label={`Edit ${post.title}`}>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										/>
									</svg>
								</button>
								<button
									onClick={() => handleDeleteClick(post._id)}
									className="text-red-600 hover:text-red-900 focus:outline-none"
									aria-label={`Delete ${post.title}`}>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					))
				) : (
					<div className="col-span-full text-center p-6 bg-gray-50 rounded-lg">
						<p className="text-gray-500">
							No blog posts found matching your criteria.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogPostsTable;
