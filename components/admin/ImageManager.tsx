import React, { useState, useRef } from "react";
import { Property } from "./AdminListings";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // shadcn button
import { Card } from "@/components/ui/card"; // shadcn card
import { cn } from "@/lib/utils"; // shadcn utility for classnames

interface ImageManagerProps {
	property: Property;
	setProperty: React.Dispatch<React.SetStateAction<Property | null>>;
}

const ImageManager: React.FC<ImageManagerProps> = ({
	property,
	setProperty
}) => {
	const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(
		null
	);
	const [isDraggingOver, setIsDraggingOver] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Handle image reordering
	const handleReorder = (fromIndex: number, toIndex: number) => {
		if (property?.images) {
			const newImages = [...property.images];
			const [movedImage] = newImages.splice(fromIndex, 1);
			newImages.splice(toIndex, 0, movedImage);
			setProperty({ ...property, images: newImages });
		}
	};

	// Drag handlers for reordering
	const handleDragStart = (index: number) => setDraggedImageIndex(index);

	const handleDragOver = (
		e: React.DragEvent<HTMLDivElement>,
		index: number
	) => {
		e.preventDefault();
		if (draggedImageIndex !== null && draggedImageIndex !== index) {
			handleReorder(draggedImageIndex, index);
			setDraggedImageIndex(index);
		}
	};

	const handleDragEnd = () => setDraggedImageIndex(null);

	// Handle image deletion
	const handleDelete = (index: number) => {
		if (property?.images) {
			const newImages = property.images.filter((_, i) => i !== index);
			setProperty({ ...property, images: newImages });
		}
	};

	// Handle file uploads
	const processFiles = (files: File[]) => {
		const validFiles = files.filter(
			(file) =>
				file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 // 5MB limit
		);

		validFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				if (event.target?.result && property) {
					const newImages = property.images
						? [...property.images, event.target.result.toString()]
						: [event.target.result.toString()];
					setProperty({ ...property, images: newImages });
				}
			};
			reader.readAsDataURL(file);
		});
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDraggingOver(false);
		if (e.dataTransfer.files?.length) {
			processFiles(Array.from(e.dataTransfer.files));
		}
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			processFiles(Array.from(e.target.files));
		}
	};

	return (
		<Card className="p-6">
			<h4 className="mb-4 text-lg font-semibold">Property Images</h4>

			{/* Current Images */}
			<div className="mb-6">
				<p className="mb-2 text-sm text-muted-foreground">
					Current Images (drag to reorder)
				</p>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
					{property.images?.length ? (
						property.images.map((image, index) => (
							<div
								key={index}
								className={cn(
									"relative group rounded-lg overflow-hidden border",
									draggedImageIndex === index && "opacity-50"
								)}
								draggable
								onDragStart={() => handleDragStart(index)}
								onDragOver={(e) => handleDragOver(e, index)}
								onDragEnd={handleDragEnd}>
								<Image
									src={image}
									alt={`Property image ${index + 1}`}
									width={150}
									height={150}
									className="object-cover w-full h-32"
								/>
								<div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black/50 opacity-0 group-hover:opacity-100">
									<Button
										variant="destructive"
										size="sm"
										onClick={() => handleDelete(index)}
										className="rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</Button>
								</div>
								{index === 0 && (
									<span className="absolute px-2 py-1 text-xs text-white bg-black rounded top-2 left-2">
										Cover
									</span>
								)}
							</div>
						))
					) : (
						<p className="col-span-full text-sm text-muted-foreground">
							No images uploaded yet
						</p>
					)}
				</div>
			</div>

			{/* Drop Zone */}
			<div
				className={cn(
					"relative border-2 border-dashed rounded-lg p-6 text-center transition-colors",
					isDraggingOver
						? "border-primary bg-primary/10"
						: "border-muted-foreground/50"
				)}
				onDragOver={(e) => e.preventDefault()}
				onDragEnter={() => setIsDraggingOver(true)}
				onDragLeave={() => setIsDraggingOver(false)}
				onDrop={handleDrop}>
				<input
					type="file"
					ref={fileInputRef}
					className="hidden"
					accept="image/*"
					multiple
					onChange={handleFileInputChange}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-12 h-12 mx-auto text-muted-foreground"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<p className="mt-2 text-sm text-muted-foreground">
					Drag and drop images here, or{" "}
					<Button
						variant="link"
						className="p-0 h-auto font-medium"
						onClick={() => fileInputRef.current?.click()}>
						browse
					</Button>
				</p>
				<p className="mt-1 text-xs text-muted-foreground">
					Supports JPG, PNG, GIF (max 5MB each)
				</p>
			</div>
		</Card>
	);
};

export default ImageManager;
