"use client";

import React, { useState, useEffect, useRef } from "react";
import {
	ChevronDownIcon,
	X,
	SlidersHorizontal,
	Search as SearchIcon
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomDropdown } from "@/components/ui/custom-dropdown";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Animation variants for consistent styling with other components
const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const headingVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const formVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1],
			delay: 0.2
		}
	}
};

interface PriceRangeProps {
	min: number;
	max: number;
	onChange: (min: number, max: number) => void;
}

// Prevents browser scroll jumps when interacting with focused elements
const preventScrollJump = (e: React.MouseEvent<HTMLElement>) => {
	e.preventDefault();
	e.currentTarget.focus({ preventScroll: true });
};

const PriceRange = ({ min, max, onChange }: PriceRangeProps) => {
	return (
		<div className="space-y-4">
			<div className="flex items-center space-x-2">
				<div className="flex-1">
					<CustomDropdown
						options={minPriceOptions}
						value={min.toString()}
						onValueChange={(value) => {
							const newValue = Number(value);
							if (newValue <= max) {
								onChange(newValue, max);
							}
						}}
						placeholder="No Min"
						triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
						contentClassName="bg-white z-[100]"
					/>
				</div>
				<div className="text-zinc-400">-</div>
				<div className="flex-1">
					<CustomDropdown
						options={maxPriceOptions}
						value={max.toString()}
						onValueChange={(value) => {
							const newValue = Number(value);
							if (newValue >= min) {
								onChange(min, newValue);
							}
						}}
						placeholder="No Max"
						triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
						contentClassName="bg-white z-[100]"
					/>
				</div>
			</div>
			<div className="text-xs text-zinc-500 text-center font-light">
				${min.toLocaleString()} - ${max.toLocaleString()}
			</div>
		</div>
	);
};

const propertyTypes = [
	{ value: "house", label: "House" },
	{ value: "condo", label: "Condo" },
	{ value: "townhouse", label: "Townhouse" },
	{ value: "multi-family", label: "Multi-Family" },
	{ value: "land", label: "Land" },
	{ value: "farm", label: "Farm/Ranch" },
	{ value: "luxury", label: "Luxury Estate" },
	{ value: "vineyard", label: "Vineyard" }
];

const featuresList = [
	{ id: "pool", label: "Pool" },
	{ id: "view", label: "View" },
	{ id: "waterfront", label: "Waterfront" },
	{ id: "fireplace", label: "Fireplace" },
	{ id: "garage", label: "Garage" },
	{ id: "air-conditioning", label: "Air Conditioning" },
	{ id: "solar", label: "Solar Panels" },
	{ id: "wine-cellar", label: "Wine Cellar" },
	{ id: "guesthouse", label: "Guest House" },
	{ id: "patio", label: "Patio/Deck" },
	{ id: "garden", label: "Garden" },
	{ id: "bbq", label: "BBQ/Outdoor Kitchen" }
];

const locations = [
	{ value: "napa", label: " New Jersey" },
	{ value: "sonoma", label: " New Jersey" },
	{ value: "st-helena", label: "St. Helena" },
	{ value: "yountville", label: "Yountville" },
	{ value: "calistoga", label: "Calistoga" },
	{ value: "healdsburg", label: "Healdsburg" },
	{ value: "santa-rosa", label: "Santa Rosa" },
	{ value: "glen-ellen", label: "Glen Ellen" },
	{ value: "kenwood", label: "Kenwood" },
	{ value: "rutherford", label: "Rutherford" },
	{ value: "oakville", label: "Oakville" }
];

// Format options for CustomDropdown component
const locationOptions = [{ value: "any", label: "Any Location" }, ...locations];
const propertyTypeOptions = [
	{ value: "any", label: "Any Type" },
	...propertyTypes
];
const bedOptions = [1, 2, 3, 4, 5, 6, 7].map((num) => ({
	value: num.toString(),
	label: `${num}+ Beds`
}));
const bathOptions = [1, 2, 3, 4, 5, 6].map((num) => ({
	value: num.toString(),
	label: `${num}+ Baths`
}));
const sortOptions = [
	{ value: "newest", label: "Newest" },
	{ value: "price-high", label: "Price (High to Low)" },
	{ value: "price-low", label: "Price (Low to High)" },
	{ value: "beds", label: "Beds (Most)" },
	{ value: "baths", label: "Baths (Most)" },
	{ value: "sqft", label: "Sq Ft (Largest)" }
];

const priceOptions = [
	{ value: "0", label: "$0" },
	{ value: "100000", label: "$100k" },
	{ value: "200000", label: "$200k" },
	{ value: "300000", label: "$300k" },
	{ value: "400000", label: "$400k" },
	{ value: "500000", label: "$500k" },
	{ value: "600000", label: "$600k" },
	{ value: "700000", label: "$700k" },
	{ value: "800000", label: "$800k" },
	{ value: "900000", label: "$900k" },
	{ value: "1000000", label: "$1M" },
	{ value: "1500000", label: "$1.5M" },
	{ value: "2000000", label: "$2M" },
	{ value: "2500000", label: "$2.5M" },
	{ value: "3000000", label: "$3M" },
	{ value: "3500000", label: "$3.5M" },
	{ value: "4000000", label: "$4M" },
	{ value: "4500000", label: "$4.5M" },
	{ value: "5000000", label: "$5M" },
	{ value: "6000000", label: "$6M" },
	{ value: "7000000", label: "$7M" },
	{ value: "8000000", label: "$8M" },
	{ value: "9000000", label: "$9M" },
	{ value: "10000000", label: "$10M+" }
];

const minPriceOptions = [{ value: "0", label: "No Min" }, ...priceOptions];
const maxPriceOptions = [
	{ value: "10000000", label: "No Max" },
	...priceOptions
];

const Search = () => {
	// State for search parameters - will be easy to connect to MLS API later
	const [searchParams, setSearchParams] = useState({
		query: "",
		propertyType: "any",
		location: "any",
		minPrice: 500000,
		maxPrice: 5000000,
		minBeds: 1,
		minBaths: 1,
		features: [] as string[],
		sortBy: "newest",
		status: "for-sale"
	});

	const [isFeaturesDialogOpen, setIsFeaturesDialogOpen] = useState(false);
	const featuresRef = useRef<HTMLDivElement>(null);

	// Effect to handle clicks outside the features dialog
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				featuresRef.current &&
				!featuresRef.current.contains(event.target as Node)
			) {
				setIsFeaturesDialogOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Update a specific search parameter
	const updateSearchParam = <K extends keyof typeof searchParams>(
		key: K,
		value: (typeof searchParams)[K]
	) => {
		setSearchParams((prev) => ({
			...prev,
			[key]: value
		}));
	};

	// Toggle a feature in the features list
	const toggleFeature = (feature: string) => {
		setSearchParams((prev) => ({
			...prev,
			features: prev.features.includes(feature)
				? prev.features.filter((f) => f !== feature)
				: [...prev.features, feature]
		}));
	};

	// Handle price range changes
	const handlePriceRangeChange = (min: number, max: number) => {
		setSearchParams((prev) => ({
			...prev,
			minPrice: min,
			maxPrice: max
		}));
	};

	// Handle form submission
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Search parameters:", searchParams);

		// Here you would call your MLS API with the search parameters
		// For example:
		// searchMLS(searchParams).then(results => setListings(results));

		// Keep scroll position consistent
		setTimeout(() => {
			window.scrollTo({
				top: window.scrollY,
				behavior: "auto"
			});
		}, 0);
	};

	// Reset all filters to default values
	const resetFilters = () => {
		setSearchParams({
			query: "",
			propertyType: "any",
			location: "any",
			minPrice: 500000,
			maxPrice: 5000000,
			minBeds: 1,
			minBaths: 1,
			features: [],
			sortBy: "newest",
			status: "for-sale"
		});
	};

	return (
		<div className="bg-white">
			<section className="mx-[5%] lg:mx-[10%] xl:mx-[15%] 2xl:mx-[20%] py-24 lg:py-36">
				{/* Heading Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="space-y-16">
					<div className="flex flex-col items-center justify-center">
						<motion.div
							variants={logoVariants}
							className="mb-8 w-16 h-16">
							<Image
								src="/logos/keylogo.png"
								alt="Key Icon"
								width={64}
								height={64}
								className="w-full h-full object-contain"
							/>
						</motion.div>
						<motion.h2
							variants={headingVariants}
							className="text-4xl sm:text-5xl text-zinc-600 font-light tracking-wider text-center">
							SEARCH PROPERTIES
						</motion.h2>
						<motion.p
							variants={sectionVariants}
							className="text-zinc-600 text-base md:text-lg mt-8 max-w-2xl mx-auto text-center font-extralight leading-relaxed">
							Find your perfect New Jersey area property. Use our
							advanced search tools to discover exceptional homes,
							vineyards, and estates in New Jersey area.
						</motion.p>
					</div>

					{/* Search Form Section */}
					<motion.div
						variants={formVariants}
						className="w-full relative shadow-md rounded-lg border border-zinc-200 bg-white">
						{/* Mobile Filter Drawer */}
						<div className="block md:hidden p-6">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-xl font-light text-zinc-700">
									Property Search
								</h2>
								<Drawer>
									<DrawerTrigger asChild>
										<Button
											variant="outline"
											size="sm"
											onClick={preventScrollJump}
											className="text-zinc-700 border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900">
											<SlidersHorizontal className="w-4 h-4 mr-2" />
											Filters
										</Button>
									</DrawerTrigger>
									<DrawerContent className="p-4">
										<div className="flex items-center justify-between mb-4">
											<h2 className="text-lg font-light text-zinc-700">
												Filters
											</h2>
											<Button
												variant="ghost"
												size="sm"
												onClick={resetFilters}
												className="text-zinc-600">
												<X className="w-4 h-4 mr-1" />
												Reset
											</Button>
										</div>
										<div className="space-y-4">
											<div className="space-y-2">
												<label className="text-sm font-medium text-gray-700">
													Status
												</label>
												<Tabs
													value={searchParams.status}
													onValueChange={(value) =>
														updateSearchParam(
															"status",
															value
														)
													}
													className="w-full">
													<TabsList className="grid w-full grid-cols-3 bg-zinc-100">
														<TabsTrigger
															value="for-sale"
															onClick={
																preventScrollJump
															}
															className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
															For Sale
														</TabsTrigger>
														<TabsTrigger
															value="pending"
															onClick={
																preventScrollJump
															}
															className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
															Pending
														</TabsTrigger>
														<TabsTrigger
															value="sold"
															onClick={
																preventScrollJump
															}
															className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
															Sold
														</TabsTrigger>
													</TabsList>
												</Tabs>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Location
												</label>
												<CustomDropdown
													options={locationOptions}
													value={
														searchParams.location
													}
													onValueChange={(value) =>
														updateSearchParam(
															"location",
															value
														)
													}
													placeholder="Any Location"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Property Type
												</label>
												<CustomDropdown
													options={
														propertyTypeOptions
													}
													value={
														searchParams.propertyType
													}
													onValueChange={(value) =>
														updateSearchParam(
															"propertyType",
															value
														)
													}
													placeholder="Any Type"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Price Range
												</label>
												<PriceRange
													min={searchParams.minPrice}
													max={searchParams.maxPrice}
													onChange={
														handlePriceRangeChange
													}
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Bedrooms
												</label>
												<CustomDropdown
													options={bedOptions}
													value={searchParams.minBeds.toString()}
													onValueChange={(value) =>
														updateSearchParam(
															"minBeds",
															parseInt(value)
														)
													}
													placeholder="Min Bedrooms"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Bathrooms
												</label>
												<CustomDropdown
													options={bathOptions}
													value={searchParams.minBaths.toString()}
													onValueChange={(value) =>
														updateSearchParam(
															"minBaths",
															parseInt(value)
														)
													}
													placeholder="Min Bathrooms"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-light text-gray-700">
													Features
												</label>
												<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
													{featuresList.map(
														(feature) => (
															<div
																key={feature.id}
																className="flex items-center space-x-3 px-2 py-1.5 rounded-md hover:bg-zinc-50">
																<Checkbox
																	id={`mobile-${feature.id}`}
																	checked={searchParams.features.includes(
																		feature.id
																	)}
																	onCheckedChange={() =>
																		toggleFeature(
																			feature.id
																		)
																	}
																	className="data-[state=checked]:bg-zinc-800 border-zinc-300"
																/>
																<label
																	htmlFor={`mobile-${feature.id}`}
																	className="text-sm text-zinc-700 font-light cursor-pointer flex-1 truncate">
																	{
																		feature.label
																	}
																</label>
															</div>
														)
													)}
												</div>
											</div>
											<Button
												className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
												onClick={(e) =>
													handleSearch(e)
												}>
												Apply Filters
											</Button>
										</div>
									</DrawerContent>
								</Drawer>
							</div>
							<div className="relative mb-4">
								<Input
									value={searchParams.query}
									onChange={(e) =>
										updateSearchParam(
											"query",
											e.target.value
										)
									}
									onClick={preventScrollJump}
									placeholder="Search by address, MLS#, or keywords"
									className="w-full pl-10 border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400 bg-white"
								/>
								<SearchIcon className="absolute w-4 h-4 text-zinc-500 transform -translate-y-1/2 left-3 top-1/2" />
							</div>
							<div className="flex items-center justify-between">
								<CustomDropdown
									options={sortOptions}
									value={searchParams.sortBy}
									onValueChange={(value) =>
										updateSearchParam("sortBy", value)
									}
									placeholder="Sort By"
									className="w-full"
									triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
									contentClassName="bg-white z-[100]"
								/>
							</div>
						</div>

						{/* Desktop View */}
						<div className="hidden md:block p-8">
							<form onSubmit={handleSearch}>
								<div className="flex items-center justify-between mb-6">
									<h2 className="text-2xl font-light text-zinc-700">
										Find Your Perfect New Jersey area Property
									</h2>
									<Button
										type="button"
										variant="ghost"
										size="sm"
										onClick={resetFilters}
										className="text-zinc-600 hover:text-zinc-800">
										<X className="w-4 h-4 mr-1" />
										Reset Filters
									</Button>
								</div>
								<div className="p-6 bg-zinc-50 rounded-lg border border-zinc-100">
									<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
										<div className="lg:col-span-12">
											<div className="relative">
												<Input
													value={searchParams.query}
													onChange={(e) =>
														updateSearchParam(
															"query",
															e.target.value
														)
													}
													onClick={preventScrollJump}
													placeholder="Search by address, MLS#, or keywords"
													className="w-full h-12 pl-12 text-base border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400 bg-white"
												/>
												<SearchIcon className="absolute w-5 h-5 text-zinc-500 transform -translate-y-1/2 left-4 top-1/2" />
											</div>
										</div>
										<div className="lg:col-span-12">
											<Tabs
												value={searchParams.status}
												onValueChange={(value) =>
													updateSearchParam(
														"status",
														value
													)
												}
												className="w-full">
												<TabsList className="grid w-full grid-cols-3 max-w-md bg-zinc-100">
													<TabsTrigger
														value="for-sale"
														className="text-sm data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
														onClick={
															preventScrollJump
														}>
														For Sale
													</TabsTrigger>
													<TabsTrigger
														value="pending"
														className="text-sm data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
														onClick={
															preventScrollJump
														}>
														Pending
													</TabsTrigger>
													<TabsTrigger
														value="sold"
														className="text-sm data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
														onClick={
															preventScrollJump
														}>
														Sold
													</TabsTrigger>
												</TabsList>
											</Tabs>
										</div>
										<div className="lg:col-span-3">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Location
												</label>
												<CustomDropdown
													options={locationOptions}
													value={
														searchParams.location
													}
													onValueChange={(value) =>
														updateSearchParam(
															"location",
															value
														)
													}
													placeholder="Any Location"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
										</div>
										<div className="lg:col-span-3">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Property Type
												</label>
												<CustomDropdown
													options={
														propertyTypeOptions
													}
													value={
														searchParams.propertyType
													}
													onValueChange={(value) =>
														updateSearchParam(
															"propertyType",
															value
														)
													}
													placeholder="Any Type"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
										</div>
										<div className="lg:col-span-2">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Bedrooms
												</label>
												<CustomDropdown
													options={bedOptions}
													value={searchParams.minBeds.toString()}
													onValueChange={(value) =>
														updateSearchParam(
															"minBeds",
															parseInt(value)
														)
													}
													placeholder="Min Beds"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
										</div>
										<div className="lg:col-span-2">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Bathrooms
												</label>
												<CustomDropdown
													options={bathOptions}
													value={searchParams.minBaths.toString()}
													onValueChange={(value) =>
														updateSearchParam(
															"minBaths",
															parseInt(value)
														)
													}
													placeholder="Min Baths"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
										</div>
										<div className="lg:col-span-4">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Price Range
												</label>
												<PriceRange
													min={searchParams.minPrice}
													max={searchParams.maxPrice}
													onChange={
														handlePriceRangeChange
													}
												/>
											</div>
										</div>
										<div className="lg:col-span-3">
											<div
												className="space-y-1"
												ref={featuresRef}>
												<label className="text-xs font-medium text-zinc-600">
													Features
												</label>
												<Button
													type="button"
													variant="outline"
													className="w-full justify-between border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300 font-light bg-white"
													onClick={(e) => {
														e.preventDefault();
														setIsFeaturesDialogOpen(
															!isFeaturesDialogOpen
														);
													}}>
													{searchParams.features
														.length > 0
														? `${searchParams.features.length} Selected`
														: "Select Features"}
													<ChevronDownIcon
														className={`h-4 w-4 opacity-50 transition-transform ${isFeaturesDialogOpen ? "rotate-180" : ""}`}
													/>
												</Button>
												{isFeaturesDialogOpen && (
													<div className="absolute z-[100] w-[400px] p-4 mt-1 bg-white border rounded-md shadow-lg">
														<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
															{featuresList.map(
																(feature) => (
																	<div
																		key={
																			feature.id
																		}
																		className="flex items-center space-x-3 px-2 py-1.5 rounded-md hover:bg-zinc-50">
																		<Checkbox
																			id={
																				feature.id
																			}
																			checked={searchParams.features.includes(
																				feature.id
																			)}
																			onCheckedChange={() =>
																				toggleFeature(
																					feature.id
																				)
																			}
																			className="data-[state=checked]:bg-zinc-800 border-zinc-300"
																		/>
																		<label
																			htmlFor={
																				feature.id
																			}
																			className="text-sm text-zinc-700 cursor-pointer flex-1 truncate font-light"
																			onClick={(
																				e
																			) => {
																				e.preventDefault();
																				toggleFeature(
																					feature.id
																				);
																			}}>
																			{
																				feature.label
																			}
																		</label>
																	</div>
																)
															)}
														</div>
													</div>
												)}
											</div>
										</div>
										<div className="lg:col-span-3">
											<div className="space-y-1">
												<label className="text-xs font-medium text-zinc-600">
													Sort By
												</label>
												<CustomDropdown
													options={sortOptions}
													value={searchParams.sortBy}
													onValueChange={(value) =>
														updateSearchParam(
															"sortBy",
															value
														)
													}
													placeholder="Sort Results"
													className="w-full"
													triggerClassName="border-zinc-200 focus:border-zinc-400 hover:border-zinc-300 bg-white"
													contentClassName="bg-white z-[100]"
												/>
											</div>
										</div>
										<div className="lg:col-span-3">
											<div className="pt-6">
												<Button
													type="submit"
													className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
													Search Properties
												</Button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>

						{/* Selected Filters Display */}
						<div className="flex flex-wrap items-center gap-2 p-4 border-t border-zinc-100">
							{searchParams.location !== "any" && (
								<div className="flex items-center px-3 py-1 text-sm bg-zinc-100 rounded-full">
									{locations.find(
										(l) => l.value === searchParams.location
									)?.label || searchParams.location}
									<button
										type="button"
										onClick={() =>
											updateSearchParam("location", "any")
										}
										className="ml-2 text-zinc-500 hover:text-zinc-700">
										<X className="w-3 h-3" />
									</button>
								</div>
							)}
							{searchParams.propertyType !== "any" && (
								<div className="flex items-center px-3 py-1 text-sm bg-zinc-100 rounded-full">
									{propertyTypes.find(
										(t) =>
											t.value ===
											searchParams.propertyType
									)?.label || searchParams.propertyType}
									<button
										type="button"
										onClick={() =>
											updateSearchParam(
												"propertyType",
												"any"
											)
										}
										className="ml-2 text-zinc-500 hover:text-zinc-700">
										<X className="w-3 h-3" />
									</button>
								</div>
							)}
							{searchParams.minBeds > 1 && (
								<div className="flex items-center px-3 py-1 text-sm bg-zinc-100 rounded-full">
									{searchParams.minBeds}+ Beds
									<button
										type="button"
										onClick={() =>
											updateSearchParam("minBeds", 1)
										}
										className="ml-2 text-zinc-500 hover:text-zinc-700">
										<X className="w-3 h-3" />
									</button>
								</div>
							)}
							{searchParams.minBaths > 1 && (
								<div className="flex items-center px-3 py-1 text-sm bg-zinc-100 rounded-full">
									{searchParams.minBaths}+ Baths
									<button
										type="button"
										onClick={() =>
											updateSearchParam("minBaths", 1)
										}
										className="ml-2 text-zinc-500 hover:text-zinc-700">
										<X className="w-3 h-3" />
									</button>
								</div>
							)}
							{searchParams.features.map((feature) => (
								<div
									key={feature}
									className="flex items-center px-3 py-1 text-sm bg-zinc-100 rounded-full">
									{featuresList.find((f) => f.id === feature)
										?.label || feature}
									<button
										type="button"
										onClick={() => toggleFeature(feature)}
										className="ml-2 text-zinc-500 hover:text-zinc-700">
										<X className="w-3 h-3" />
									</button>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default Search;
