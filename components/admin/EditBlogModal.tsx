"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "./types";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import RichTextEditor from "./RichTextEditor";
import Image from "next/image";

interface EditModalProps {
	isOpen: boolean;
	onClose: () => void;
	postToEdit: BlogPost | null;
	handleEditInputChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => void;
	saveEditChanges: () => void;
	newTag: string;
	setNewTag: (tag: string) => void;
	addTagToEdit: () => void;
	removeTagFromEdit: (index: number) => void;
	categories: string[];
	statuses: string[];
	isSaving?: boolean;
}

const EditModal: React.FC<EditModalProps> = ({
	isOpen,
	onClose,
	postToEdit,
	handleEditInputChange,
	saveEditChanges,
	newTag,
	setNewTag,
	addTagToEdit,
	removeTagFromEdit,
	categories,
	statuses,
	isSaving = false
}) => {
	const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
		null
	);

	// Set cover image preview when post changes
	useEffect(() => {
		if (postToEdit?.mainImage?.url) {
			setCoverImagePreview(postToEdit.mainImage.url);
		} else {
			setCoverImagePreview(null);
		}
	}, [postToEdit]);

	// Handle image upload
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setCoverImagePreview(imageUrl);

			// Call the parent component's handler
			handleEditInputChange(e);
		}
	};

	// Handle image alt text change
	const handleImageAltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Create a synthetic event with the correct name
		const syntheticEvent = {
			...e,
			target: { ...e.target, name: "mainImage.alt" }
		};
		handleEditInputChange(
			syntheticEvent as React.ChangeEvent<HTMLInputElement>
		);
	};

	// Handle content change from rich text editor
	const handleContentChange = (content: string) => {
		// Create a synthetic event
		const syntheticEvent = {
			target: {
				name: "content",
				value: content
			}
		} as unknown as React.ChangeEvent<HTMLTextAreaElement>;
		handleEditInputChange(syntheticEvent);
	};

	// Handle category change
	const handleCategoryChange = (value: string) => {
		// Create a synthetic event
		const syntheticEvent = {
			target: { name: "categories", value: [value] }
		} as unknown as React.ChangeEvent<HTMLSelectElement>;
		handleEditInputChange(syntheticEvent);
	};

	if (!postToEdit) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl md:max-w-5xl lg:max-w-6xl max-h-[90vh] overflow-y-auto">
				<DialogHeader className="px-6 py-4 border-b">
					<DialogTitle className="text-xl font-semibold">
						{postToEdit?._id.startsWith("draft-")
							? "Create New Blog Post"
							: "Edit Blog Post"}
					</DialogTitle>
				</DialogHeader>

				{postToEdit && (
					<div className="px-6 py-4 space-y-6">
						{/* Title field */}
						<div className="space-y-2">
							<Label
								htmlFor="title"
								className="text-sm font-medium">
								Title
							</Label>
							<Input
								id="title"
								name="title"
								value={postToEdit.title || ""}
								onChange={handleEditInputChange}
								className="w-full"
								placeholder="Enter blog post title"
							/>
						</div>

						{/* Slug field */}
						<div className="space-y-2">
							<Label
								htmlFor="slug"
								className="text-sm font-medium">
								Slug
							</Label>
							<Input
								id="slug"
								name="slug"
								value={postToEdit.slug || ""}
								onChange={handleEditInputChange}
								className="w-full"
								placeholder="enter-url-slug"
							/>
						</div>

						{/* Cover image field */}
						<div className="space-y-2">
							<Label className="text-sm font-medium">
								Cover Image
							</Label>
							<div className="flex flex-col space-y-4">
								{coverImagePreview && (
									<div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
										<Image
											src={coverImagePreview}
											alt="Cover preview"
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 800px"
										/>
									</div>
								)}
								<Input
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									className="w-full"
								/>
							</div>
						</div>

						{/* Image alt text */}
						<div className="space-y-2">
							<Label
								htmlFor="mainImage.alt"
								className="text-sm font-medium">
								Image Alt Text
							</Label>
							<Input
								id="mainImage.alt"
								name="mainImage.alt"
								value={postToEdit.mainImage?.alt || ""}
								onChange={handleImageAltChange}
								className="w-full"
								placeholder="Descriptive text for the image"
							/>
						</div>

						{/* Content field */}
						<div className="space-y-2">
							<Label
								htmlFor="content"
								className="text-sm font-medium">
								Content
							</Label>
							<div className="min-h-[300px] border rounded-md overflow-hidden">
								<RichTextEditor
									initialContent={
										typeof postToEdit.content === "string"
											? postToEdit.content === "[]"
												? "" // Initialize with empty string instead of "[]"
												: postToEdit.content
											: Array.isArray(postToEdit.content)
												? JSON.stringify(
														postToEdit.content
													)
												: ""
									}
									onChange={handleContentChange}
									className="min-h-[300px]"
								/>
							</div>
						</div>

						{/* Excerpt field */}
						<div className="space-y-2">
							<Label
								htmlFor="excerpt"
								className="text-sm font-medium">
								Excerpt
							</Label>
							<Textarea
								id="excerpt"
								name="excerpt"
								value={postToEdit.excerpt || ""}
								onChange={handleEditInputChange}
								className="w-full min-h-[100px]"
								placeholder="Brief summary of the blog post"
							/>
						</div>

						{/* Primary Category field */}
						<div className="space-y-2">
							<Label
								htmlFor="category"
								className="text-sm font-medium">
								Primary Category
							</Label>
							<Select
								value={
									Array.isArray(postToEdit.categories) &&
									postToEdit.categories.length > 0
										? postToEdit.categories[0]
										: ""
								}
								onValueChange={handleCategoryChange}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a category" />
								</SelectTrigger>
								<SelectContent>
									{categories.map((category) => (
										<SelectItem
											key={category}
											value={category}>
											{category}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Status field */}
						<div className="space-y-2">
							<Label
								htmlFor="status"
								className="text-sm font-medium">
								Status
							</Label>
							<Select
								value={postToEdit.status || "Draft"}
								onValueChange={(value) => {
									handleEditInputChange({
										target: { name: "status", value }
									} as React.ChangeEvent<HTMLSelectElement>);
								}}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a status" />
								</SelectTrigger>
								<SelectContent>
									{statuses.map((status) => (
										<SelectItem key={status} value={status}>
											{status}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Published date field */}
						<div className="space-y-2">
							<Label
								htmlFor="publishedAt"
								className="text-sm font-medium">
								Published Date
							</Label>
							<Input
								id="publishedAt"
								name="publishedAt"
								type="date"
								value={
									postToEdit.publishedAt
										? new Date(postToEdit.publishedAt)
												.toISOString()
												.split("T")[0]
										: ""
								}
								onChange={handleEditInputChange}
								className="w-full"
							/>
						</div>

						{/* Tags field */}
						<div className="space-y-2">
							<Label className="text-sm font-medium">Tags</Label>
							<div className="flex flex-wrap gap-2 mb-2">
								{postToEdit.tags &&
									postToEdit.tags.map((tag, index) => (
										<div
											key={index}
											className="flex items-center bg-gray-100 rounded-full px-3 py-1">
											<span className="text-sm">
												{tag}
											</span>
											<button
												type="button"
												onClick={() =>
													removeTagFromEdit(index)
												}
												className="ml-2 text-gray-500 hover:text-gray-700">
												&times;
											</button>
										</div>
									))}
							</div>
							<div className="flex gap-2">
								<Input
									value={newTag}
									onChange={(e) => setNewTag(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											addTagToEdit();
										}
									}}
									placeholder="Add a tag"
									className="flex-1"
								/>
								<Button
									type="button"
									onClick={addTagToEdit}
									variant="outline">
									Add
								</Button>
							</div>
						</div>
					</div>
				)}

				<DialogFooter className="px-6 py-4 border-t flex justify-end gap-2">
					<Button
						variant="outline"
						onClick={onClose}
						disabled={isSaving}
						className="px-4 py-2">
						Cancel
					</Button>
					<Button
						onClick={saveEditChanges}
						disabled={isSaving}
						className="px-4 py-2 bg-black text-white hover:bg-gray-800">
						{isSaving ? (
							<>
								<span className="mr-2">Saving...</span>
								<div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
							</>
						) : (
							"Save Changes"
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditModal;
