"use client";

import React, { useState, useCallback, useEffect } from "react";
import { BlogPost } from "./types";
import BlogFilters from "./BlogFilters";
import BlogPostsTable from "./BlogPostsTable";
import DeleteModal from "./DeleteBlogModal";
import EditModal from "./EditBlogModal";
import {
	getAllBlogPosts,
	deleteBlogPost,
	createBlogPost,
	updateBlogPost
} from "@/sanity/queries/blogPosts";
import { toast } from "sonner";

// Placeholder for loading state
const LoadingState = () => (
	<div className="flex justify-center items-center py-20">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
	</div>
);

// Error state component
const ErrorState = ({ message }: { message: string }) => (
	<div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 my-6">
		<h3 className="text-lg font-medium">Error Loading Blog Posts</h3>
		<p className="mt-2">{message}</p>
		<p className="mt-2">
			Please try refreshing the page or contact support if the problem
			persists.
		</p>
	</div>
);

const getStatusBadgeClass = (status: string): string => {
	switch (status) {
		case "Published":
			return "bg-green-100 text-green-800";
		case "Draft":
			return "bg-yellow-100 text-yellow-800";
		case "Archived":
			return "bg-gray-100 text-gray-800";
		default:
			return "bg-gray-100 text-gray-800";
	}
};

// Custom hook for managing blog post state and filtering
const useBlogPosts = (initialPosts: BlogPost[] = []) => {
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [categoryFilter, setCategoryFilter] = useState<string>("All");
	const [statusFilter, setStatusFilter] = useState<string>("All");
	const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">(
		"newest"
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch blog posts from Sanity
	useEffect(() => {
		const fetchBlogPosts = async () => {
			try {
				setIsLoading(true);
				const posts = await getAllBlogPosts();
				setBlogPosts(posts);
				setError(null);
			} catch (err) {
				console.error("Error fetching blog posts:", err);
				setError("Failed to load blog posts. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchBlogPosts();
	}, []);

	// Extract unique categories from blog posts
	const categories = React.useMemo(() => {
		const allCategories = new Set<string>();
		blogPosts.forEach((post) => {
			if (post.categories && Array.isArray(post.categories)) {
				post.categories.forEach((category) => {
					if (typeof category === "string") {
						allCategories.add(category);
					}
				});
			}
		});
		return ["All", ...Array.from(allCategories)];
	}, [blogPosts]);

	// Extract unique statuses from blog posts
	const statuses = ["All", "Published", "Draft", "Archived"];

	// Filter and sort blog posts
	const filteredPosts = React.useMemo(() => {
		return blogPosts
			.filter((post) => {
				// Check if title or excerpt matches search term
				const titleMatches =
					post.title
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()) || false;
				const excerptMatches =
					post.excerpt
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()) || false;

				// Check if any category matches search term
				let categoryMatches = false;
				if (post.categories && Array.isArray(post.categories)) {
					for (const category of post.categories) {
						if (
							typeof category === "string" &&
							category
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
						) {
							categoryMatches = true;
							break;
						}
					}
				}

				// Check if any tag matches search term
				let tagMatches = false;
				if (post.tags && Array.isArray(post.tags)) {
					for (const tag of post.tags) {
						if (
							typeof tag === "string" &&
							tag.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							tagMatches = true;
							break;
						}
					}
				}

				const matchesSearch =
					titleMatches ||
					excerptMatches ||
					categoryMatches ||
					tagMatches;

				// Check if post matches category filter
				let matchesCategory = categoryFilter === "All";
				if (
					!matchesCategory &&
					post.categories &&
					Array.isArray(post.categories)
				) {
					matchesCategory = post.categories.includes(categoryFilter);
				}

				// Check if post matches status filter
				const matchesStatus =
					statusFilter === "All" || post.status === statusFilter;

				return matchesSearch && matchesCategory && matchesStatus;
			})
			.sort((a, b) => {
				if (sortBy === "newest")
					return (
						new Date(b.publishedAt || "").getTime() -
						new Date(a.publishedAt || "").getTime()
					);
				if (sortBy === "oldest")
					return (
						new Date(a.publishedAt || "").getTime() -
						new Date(b.publishedAt || "").getTime()
					);
				if (sortBy === "title")
					return (a.title || "").localeCompare(b.title || "");
				return 0;
			});
	}, [blogPosts, searchTerm, categoryFilter, statusFilter, sortBy]);

	return {
		blogPosts,
		setBlogPosts,
		searchTerm,
		setSearchTerm,
		categoryFilter,
		setCategoryFilter,
		statusFilter,
		setStatusFilter,
		sortBy,
		setSortBy,
		categories,
		statuses,
		filteredPosts,
		isLoading,
		error
	};
};

// Main component
const AdminBlogPosts: React.FC = () => {
	const {
		blogPosts,
		setBlogPosts,
		searchTerm,
		setSearchTerm,
		categoryFilter,
		setCategoryFilter,
		statusFilter,
		setStatusFilter,
		sortBy,
		setSortBy,
		categories,
		statuses,
		filteredPosts,
		isLoading,
		error
	} = useBlogPosts();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [postToDelete, setPostToDelete] = useState<string | null>(null);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
	const [newTag, setNewTag] = useState("");
	const [isSaving, setIsSaving] = useState(false);

	const handleDeleteClick = useCallback((_id: string) => {
		setPostToDelete(_id);
		setIsDeleteModalOpen(true);
	}, []);

	const confirmDelete = useCallback(async () => {
		if (postToDelete) {
			try {
				// Call Sanity mutation to delete the post
				await deleteBlogPost(postToDelete);
				setBlogPosts(
					blogPosts.filter((post) => post._id !== postToDelete)
				);
				toast.success("Blog post deleted successfully");
			} catch (error) {
				console.error("Error deleting blog post:", error);
				toast.error("Failed to delete blog post");
			} finally {
				setIsDeleteModalOpen(false);
				setPostToDelete(null);
			}
		}
	}, [postToDelete, blogPosts, setBlogPosts]);

	const handleEditClick = useCallback((post: BlogPost) => {
		setPostToEdit({ ...post });
		setIsEditModalOpen(true);
	}, []);

	const handleEditInputChange = useCallback(
		(
			e: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>
		) => {
			const { name } = e.target;

			// Handle file inputs separately
			if (
				e.target instanceof HTMLInputElement &&
				e.target.type === "file"
			) {
				const file = e.target.files?.[0];
				if (file && postToEdit) {
					// In a real implementation, this would upload the file to Sanity
					// For now, we'll just create a local URL
					const imageUrl = URL.createObjectURL(file);

					// Create a new post object with the updated mainImage
					const updatedPost = { ...postToEdit };

					// Update the mainImage property
					if (updatedPost.mainImage) {
						updatedPost.mainImage = {
							...updatedPost.mainImage,
							url: imageUrl
						};
					} else {
						updatedPost.mainImage = {
							url: imageUrl,
							alt: ""
						};
					}

					setPostToEdit(updatedPost);
				}
				return;
			}

			// Handle all other inputs
			const { value } = e.target;
			if (postToEdit) {
				// Handle nested properties
				if (name.includes(".")) {
					const [parent, child] = name.split(".");

					// Create a new post object
					const updatedPost = { ...postToEdit };

					// Update the nested property
					if (parent === "mainImage" && updatedPost.mainImage) {
						updatedPost.mainImage = {
							...updatedPost.mainImage,
							[child]: value
						};
					}

					setPostToEdit(updatedPost);
				} else {
					setPostToEdit({ ...postToEdit, [name]: value });
				}
			}
		},
		[postToEdit]
	);

	const addTagToEdit = useCallback(() => {
		if (newTag.trim() && postToEdit) {
			// Create a new array with all existing tags plus the new one
			const newTags: string[] = [];

			// Add existing tags if they exist
			if (postToEdit.tags && Array.isArray(postToEdit.tags)) {
				postToEdit.tags.forEach((tag) => newTags.push(tag));
			}

			// Add the new tag
			newTags.push(newTag.trim());

			setPostToEdit({
				...postToEdit,
				tags: newTags
			});
			setNewTag("");
		}
	}, [newTag, postToEdit]);

	const removeTagFromEdit = useCallback(
		(indexToRemove: number) => {
			if (postToEdit && postToEdit.tags) {
				setPostToEdit({
					...postToEdit,
					tags: postToEdit.tags.filter(
						(_, index) => index !== indexToRemove
					)
				});
			}
		},
		[postToEdit]
	);

	const saveEditChanges = useCallback(async () => {
		if (postToEdit) {
			setIsSaving(true);
			try {
				// Determine if this is a new post or an update
				if (postToEdit._id.startsWith("draft-")) {
					// Create new post
					const newPost = await createBlogPost(postToEdit);
					setBlogPosts([newPost, ...blogPosts]);
					toast.success("Blog post created successfully");
				} else {
					// Update existing post
					const updatedPost = await updateBlogPost(postToEdit);
					setBlogPosts(
						blogPosts.map((post) =>
							post._id === updatedPost._id ? updatedPost : post
						)
					);
					toast.success("Blog post updated successfully");
				}
				setIsEditModalOpen(false);
				setPostToEdit(null);
			} catch (error) {
				console.error("Error saving blog post:", error);
				toast.error("Failed to save blog post");
			} finally {
				setIsSaving(false);
			}
		}
	}, [postToEdit, blogPosts, setBlogPosts]);

	const handleNewPost = useCallback(() => {
		// Create a new empty blog post
		const emptyPost: BlogPost = {
			_id: `draft-${Date.now()}`,
			title: "",
			slug: "",
			excerpt: "",
			publishedAt: new Date().toISOString(),
			mainImage: {
				url: "",
				alt: ""
			},
			categories: [],
			tags: [],
			status: "Draft",
			readTime: "5 min read",
			content: [] // Empty Portable Text content as an empty array
		};
		setPostToEdit(emptyPost);
		setIsEditModalOpen(true);
	}, []);

	// Render loading state
	if (isLoading) {
		return <LoadingState />;
	}

	// Render error state
	if (error) {
		return <ErrorState message={error} />;
	}

	return (
		<div className="space-y-6">
			<header className="flex items-center justify-between">
				<h2 className="text-xl font-semibold text-gray-900">
					Blog Posts
				</h2>
				<button
					onClick={handleNewPost}
					className="whitespace-nowrap px-3 py-2 text-sm lg:text-base font-medium text-white bg-black rounded-md hover:bg-gray-800">
					Add New Blog Post
				</button>
			</header>

			<BlogFilters
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				categoryFilter={categoryFilter}
				setCategoryFilter={setCategoryFilter}
				statusFilter={statusFilter}
				setStatusFilter={setStatusFilter}
				sortBy={sortBy}
				setSortBy={setSortBy}
				categories={categories}
				statuses={statuses}
			/>

			{filteredPosts.length === 0 ? (
				<div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
					<h3 className="text-lg font-medium text-gray-900">
						No blog posts found
					</h3>
					<p className="mt-2 text-gray-600">
						{searchTerm ||
						categoryFilter !== "All" ||
						statusFilter !== "All"
							? "Try adjusting your filters or search term."
							: "Get started by adding your first blog post."}
					</p>
					{searchTerm ||
					categoryFilter !== "All" ||
					statusFilter !== "All" ? (
						<button
							onClick={() => {
								setSearchTerm("");
								setCategoryFilter("All");
								setStatusFilter("All");
							}}
							className="mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
							Clear Filters
						</button>
					) : (
						<button
							onClick={handleNewPost}
							className="mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
							Add New Blog Post
						</button>
					)}
				</div>
			) : (
				<BlogPostsTable
					filteredPosts={filteredPosts}
					getStatusBadgeClass={getStatusBadgeClass}
					handleEditClick={handleEditClick}
					handleDeleteClick={handleDeleteClick}
				/>
			)}

			<DeleteModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={confirmDelete}
				blogTitle={
					postToDelete
						? blogPosts.find((p) => p._id === postToDelete)?.title
						: undefined
				}
			/>

			<EditModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				postToEdit={postToEdit}
				handleEditInputChange={handleEditInputChange}
				saveEditChanges={saveEditChanges}
				newTag={newTag}
				setNewTag={setNewTag}
				addTagToEdit={addTagToEdit}
				removeTagFromEdit={removeTagFromEdit}
				categories={categories.filter((cat) => cat !== "All")}
				statuses={statuses.filter((status) => status !== "All")}
				isSaving={isSaving}
			/>
		</div>
	);
};

export default AdminBlogPosts;
