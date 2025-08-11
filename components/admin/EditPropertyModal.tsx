"use client";

import React, { useEffect } from "react";
import { Property } from "./AdminListings";
import ImageManager from "./ImageManager";

// Shadcn UI components
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";

interface EditPropertyModalProps {
	isOpen: boolean;
	onClose: () => void;
	property: Property | null;
	setProperty: React.Dispatch<React.SetStateAction<Property | null>>;
	onSave: () => void;
	statuses: string[];
	listingStatuses: string[];
}

const EditPropertyModal: React.FC<EditPropertyModalProps> = ({
	isOpen,
	onClose,
	property,
	setProperty,
	onSave,
	statuses,
	listingStatuses
}) => {
	// Manage z-index for sheet and dropdowns when open
	useEffect(() => {
		if (isOpen) {
			const styleTag = document.createElement("style");
			styleTag.innerHTML = `
        [data-radix-popper-content-wrapper] {
          z-index: 99999 !important;
        }
        [data-slot="sheet-overlay"] {
          z-index: 9000 !important;
        }
        [data-slot="sheet-content"] {
          z-index: 9999 !important;
        }
      `;
			document.head.appendChild(styleTag);

			return () => {
				if (document.head.contains(styleTag)) {
					document.head.removeChild(styleTag);
				}
			};
		}
	}, [isOpen]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setProperty((prev) => (prev ? { ...prev, [name]: value } : null));
	};

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProperty((prev) =>
			prev
				? {
						...prev,
						[name]: value === "" ? "" : parseFloat(value) || 0
				  }
				: null
		);
	};

	const handleSelectChange = (value: string, name: string) => {
		setProperty((prev) =>
			prev ? { ...prev, [name]: value === "none" ? "" : value } : null
		);
	};

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent
				side="right"
				className="w-full sm:max-w-2xl bg-white text-[#1a1a1a] overflow-y-auto p-0">
				{!property ? null : (
					<>
						<SheetHeader className="border-b p-6 sticky top-0 bg-white z-10">
							<div className="flex justify-between items-center">
								<div>
									<SheetTitle className="text-[#1a1a1a]">
										Edit Property
									</SheetTitle>
									<SheetDescription className="text-[#404040]">
										Update property details and images
										below.
									</SheetDescription>
								</div>
								<button
									onClick={onClose}
									className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"></path>
									</svg>
									<span className="sr-only">Close</span>
								</button>
							</div>
						</SheetHeader>

						<div className="p-8 space-y-10">
							{/* Basic Information */}
							<section className="space-y-6">
								<h3 className="text-xl font-semibold text-[#1a1a1a]">
									Basic Information
								</h3>
								<div className="space-y-6">
									<div className="space-y-2">
										<Label htmlFor="title">
											Property Title
										</Label>
										<Input
											id="title"
											name="title"
											value={property.title}
											onChange={handleInputChange}
											className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
										/>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="price">Price</Label>
											<Input
												type="number"
												id="price"
												name="price"
												value={property.price}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="location">
												Location
											</Label>
											<Input
												id="location"
												name="location"
												value={property.location}
												onChange={handleInputChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
									</div>
								</div>
							</section>

							<Separator className="bg-[#d4d4d4]" />

							{/* Property Details */}
							<section className="space-y-6">
								<h3 className="text-xl font-semibold text-[#1a1a1a]">
									Property Details
								</h3>
								<div className="space-y-6">
									<div className="grid grid-cols-3 gap-6">
										<div className="space-y-2">
											<Label htmlFor="beds">Beds</Label>
											<Input
												type="number"
												id="beds"
												name="beds"
												value={property.beds}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="baths">Baths</Label>
											<Input
												type="number"
												id="baths"
												name="baths"
												value={property.baths}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="area">
												Area (sq ft)
											</Label>
											<Input
												type="number"
												id="area"
												name="area"
												value={property.area}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="space-y-2">
											<Label htmlFor="stories">
												Stories
											</Label>
											<Input
												type="number"
												id="stories"
												name="stories"
												value={property.stories || ""}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="yearBuilt">
												Year Built
											</Label>
											<Input
												type="number"
												id="yearBuilt"
												name="yearBuilt"
												value={property.yearBuilt || ""}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="garage">
												Garage Spaces
											</Label>
											<Input
												type="number"
												id="garage"
												name="garage"
												value={property.garage || ""}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="listingType">
												Property Type
											</Label>
											<Select
												value={
													property.listingType ||
													"none"
												}
												onValueChange={(value) =>
													handleSelectChange(
														value,
														"listingType"
													)
												}>
												<SelectTrigger
													id="listingType"
													className="text-[#1a1a1a] bg-white border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out">
													<SelectValue placeholder="Select property type" />
												</SelectTrigger>
												<SelectContent className="bg-white text-[#1a1a1a] border-[#d4d4d4] shadow-lg">
													<SelectItem value="none">
														Select Type
													</SelectItem>
													<SelectItem value="house">
														House
													</SelectItem>
													<SelectItem value="condo">
														Condo
													</SelectItem>
													<SelectItem value="townhouse">
														Townhouse
													</SelectItem>
													<SelectItem value="land">
														Land
													</SelectItem>
													<SelectItem value="commercial">
														Commercial
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div className="space-y-2">
											<Label htmlFor="acres">Acres</Label>
											<Input
												type="number"
												step="0.01"
												id="acres"
												name="acres"
												value={property.acres || ""}
												onChange={handleNumberChange}
												className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
											/>
										</div>
									</div>
								</div>
							</section>

							<Separator className="bg-[#d4d4d4]" />

							{/* Status */}
							<section className="space-y-6">
								<h3 className="text-xl font-semibold text-[#1a1a1a]">
									Status
								</h3>
								<div className="grid grid-cols-2 gap-6">
									<div className="space-y-2">
										<Label htmlFor="status">Status</Label>
										<Select
											value={property.status}
											onValueChange={(value) =>
												handleSelectChange(
													value,
													"status"
												)
											}>
											<SelectTrigger
												id="status"
												className="text-[#1a1a1a] bg-white border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out">
												<SelectValue placeholder="Select status" />
											</SelectTrigger>
											<SelectContent className="bg-white text-[#1a1a1a] border-[#d4d4d4] shadow-lg">
												{statuses.map((status) => (
													<SelectItem
														key={status}
														value={status}>
														{status}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="listingStatus">
											Listing Type
										</Label>
										<Select
											value={property.listingStatus}
											onValueChange={(value) =>
												handleSelectChange(
													value,
													"listingStatus"
												)
											}>
											<SelectTrigger
												id="listingStatus"
												className="text-[#1a1a1a] bg-white border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out">
												<SelectValue placeholder="Select listing type" />
											</SelectTrigger>
											<SelectContent className="bg-white text-[#1a1a1a] border-[#d4d4d4] shadow-lg">
												{listingStatuses.map(
													(status) => (
														<SelectItem
															key={status}
															value={status}>
															{status}
														</SelectItem>
													)
												)}
											</SelectContent>
										</Select>
									</div>
								</div>
							</section>

							<Separator className="bg-[#d4d4d4]" />

							{/* Description */}
							<section className="space-y-6">
								<h3 className="text-xl font-semibold text-[#1a1a1a]">
									Description
								</h3>
								<Textarea
									id="description"
									name="description"
									rows={6}
									value={property.description || ""}
									onChange={handleInputChange}
									className="text-[#1a1a1a] border-[#d4d4d4] focus:ring-2 focus:ring-[#404040] focus:ring-opacity-50 focus:border-[#404040] transition-all duration-200 ease-in-out"
								/>
							</section>

							<Separator className="bg-[#d4d4d4]" />

							{/* Images */}
							<section className="space-y-6">
								<h3 className="text-xl font-semibold text-[#1a1a1a]">
									Images
								</h3>
								<ImageManager
									property={property}
									setProperty={setProperty}
								/>
							</section>
						</div>

						<SheetFooter className="border-t p-6 sticky bottom-0 bg-white z-10 flex justify-end gap-4">
							<Button
								variant="outline"
								onClick={onClose}
								className="text-[#1a1a1a] border-[#404040] hover:bg-gray-100">
								Cancel
							</Button>
							<Button
								onClick={onSave}
								className="bg-[#1a1a1a] text-white hover:bg-[#404040]">
								Save Changes
							</Button>
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default EditPropertyModal;
