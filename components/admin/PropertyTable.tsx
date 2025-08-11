"use client";

import React from "react";
import { Property } from "./AdminListings";
import Image from "next/image";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";

interface PropertyTableProps {
	filteredProperties: Property[];
	handleEditClick: (property: Property) => void;
	handleDeleteClick: (id: string) => void;
}

const PropertyTable: React.FC<PropertyTableProps> = ({
	filteredProperties,
	handleEditClick,
	handleDeleteClick
}) => {
	const getStatusBadgeClass = (status: string) => {
		switch (status) {
			case "For Sale":
				return "bg-green-100 text-green-800";
			case "Coming Soon":
				return "bg-blue-100 text-blue-800";
			case "Pending":
				return "bg-yellow-100 text-yellow-800";
			case "Sold":
				return "bg-gray-100 text-gray-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getListingStatusBadgeClass = (listingStatus: string) => {
		switch (listingStatus) {
			case "Featured":
				return "bg-purple-100 text-purple-800";
			case "Normal":
				return "bg-gray-100 text-gray-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="bg-white xl:shadow-md xl:rounded-lg">
			{/* Table Layout for Desktop (hidden below xl) */}
			<div className="hidden xl:block overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-1/6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Property
							</TableHead>
							<TableHead className="w-1/12 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Price
							</TableHead>
							<TableHead className="w-1/8 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Location
							</TableHead>
							<TableHead className="w-1/6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Details
							</TableHead>
							<TableHead className="w-1/12 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Status
							</TableHead>
							<TableHead className="w-1/12 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Listing Type
							</TableHead>
							<TableHead className="w-1/12 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
								Date Added
							</TableHead>
							<TableHead className="w-1/12 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
								Actions
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredProperties.length > 0 ? (
							filteredProperties.map((property) => (
								<TableRow key={property.id}>
									<TableCell>
										<div className="flex items-center">
											<div className="flex-shrink-0 w-10 h-10">
												<Image
													className="object-cover w-10 h-10 rounded-md"
													src={
														property.image ||
														"/placeholder-property.jpg"
													}
													alt={property.title}
													width={40}
													height={40}
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-900 truncate max-w-[150px]">
													{property.title}
												</div>
											</div>
										</div>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-900">
											${property.price.toLocaleString()}
										</div>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-900 truncate max-w-[120px]">
											{property.location}
										</div>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-900">
											{property.beds} beds •{" "}
											{property.baths} baths •{" "}
											{property.area.toLocaleString()} sq
											ft
										</div>
									</TableCell>
									<TableCell>
										<span
											className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(
												property.status
											)}`}>
											{property.status}
										</span>
									</TableCell>
									<TableCell>
										<span
											className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getListingStatusBadgeClass(
												property.listingStatus
											)}`}>
											{property.listingStatus}
										</span>
									</TableCell>
									<TableCell>
										<div className="text-sm text-gray-500">
											{new Date(
												property.createdAt
											).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric"
											})}
										</div>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end space-x-4">
											<button
												onClick={() =>
													handleEditClick(property)
												}
												className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
												aria-label={`Edit ${property.title}`}>
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
													handleDeleteClick(
														property.id
													)
												}
												className="text-red-600 hover:text-red-900 focus:outline-none"
												aria-label={`Delete ${property.title}`}>
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
									colSpan={8}
									className="text-center text-sm text-gray-500">
									No properties found matching your criteria.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* Card Layout for Mobile and Tablet (hidden on xl and above) */}
			<div className="xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-4">
				{filteredProperties.length > 0 ? (
					filteredProperties.map((property) => (
						<div
							key={property.id}
							className="border rounded-lg p-4 shadow-sm bg-white">
							<div className="flex items-center">
								<Image
									className="object-cover w-16 h-16 rounded-md"
									src={
										property.image ||
										"/placeholder-property.jpg"
									}
									alt={property.title}
									width={64}
									height={64}
								/>
								<div className="ml-4 flex-1">
									<h3 className="text-sm font-medium text-gray-900">
										{property.title}
									</h3>
									<p className="text-sm text-gray-500">
										{property.location}
									</p>
								</div>
							</div>
							<div className="mt-2 text-sm text-gray-900">
								<p>${property.price.toLocaleString()}</p>
								<p>
									{property.beds} beds • {property.baths}{" "}
									baths • {property.area.toLocaleString()} sq
									ft
								</p>
							</div>
							<div className="mt-2 flex space-x-2">
								<span
									className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(
										property.status
									)}`}>
									{property.status}
								</span>
								<span
									className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getListingStatusBadgeClass(
										property.listingStatus
									)}`}>
									{property.listingStatus}
								</span>
							</div>
							<div className="mt-2 text-sm text-gray-500">
								Added:{" "}
								{new Date(
									property.createdAt
								).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric"
								})}
							</div>
							<div className="mt-4 flex justify-end space-x-4">
								<button
									onClick={() => handleEditClick(property)}
									className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
									aria-label={`Edit ${property.title}`}>
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
										handleDeleteClick(property.id)
									}
									className="text-red-600 hover:text-red-900 focus:outline-none"
									aria-label={`Delete ${property.title}`}>
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
					<p className="text-center text-sm text-gray-500">
						No properties found matching your criteria.
					</p>
				)}
			</div>
		</div>
	);
};

export default PropertyTable;
