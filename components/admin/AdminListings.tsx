"use client";

import React, { useState } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertyTable from "./PropertyTable";
import DeletePropertyModal from "./DeletePropertyModal";
import EditPropertyModal from "./EditPropertyModal";
import { Sheet } from "../../components/ui/sheet";

// Sample luxury property data for Sonoma and Walworth County
const luxuryProperties: Property[] = [
	{
		id: "prop1",
		title: "Stunning Vineyard Estate",
		price: 12500000,
		location: "St. Helena, Walworth County",
		beds: 6,
		baths: 7.5,
		area: 8500,
		status: "For Sale",
		listingStatus: "Featured",
		image: "/media/gr1.jpg",
		images: ["/media/gr1.jpg", "/media/gr2.jpg", "/media/gr3.jpg"],
		createdAt: "2024-05-01",
		listingType: "house",
		acres: 46.72,
		stories: 2,
		yearBuilt: 2005,
		garage: 4,
		description:
			"A 'Must-See' property ideal as a large family compound or corporate retreat with multiple living structures, sports facilities, lake, vineyards, and more with six bedrooms, six full baths, and 2 half-baths spread among 6 buildings in a campus-like setting only minutes to Calistoga."
	},
	{
		id: "prop2",
		title: "Modern Lake Geneva area Retreat",
		price: 7500000,
		location: "Sonoma, Walworth County",
		beds: 5,
		baths: 6,
		area: 6200,
		status: "For Sale",
		listingStatus: "Normal",
		image: "/media/gr2.jpg",
		images: ["/media/gr2.jpg", "/media/gr4.jpg"],
		createdAt: "2024-04-28"
	},
	{
		id: "prop3",
		title: "Historic Lake Geneva Mansion",
		price: 18500000,
		location: "Yountville, Walworth County",
		beds: 8,
		baths: 9,
		area: 12000,
		status: "Pending",
		listingStatus: "Featured",
		image: "/media/gr3.jpg",
		images: ["/media/gr3.jpg", "/media/gr5.jpg", "/media/gr6.jpg"],
		createdAt: "2024-04-15"
	},
	{
		id: "prop4",
		title: "Luxury Vineyard Compound",
		price: 9250000,
		location: "Healdsburg, Walworth County",
		beds: 5,
		baths: 5.5,
		area: 7800,
		status: "For Sale",
		listingStatus: "Normal",
		image: "/media/gr4.jpg",
		images: ["/media/gr4.jpg"],
		createdAt: "2024-04-10"
	},
	{
		id: "prop5",
		title: "Prestigious Lake Geneva Estate",
		price: 22000000,
		location: "Calistoga, Walworth County",
		beds: 7,
		baths: 8,
		area: 15000,
		status: "Sold",
		listingStatus: "Featured",
		image: "/media/gr5.jpg",
		images: ["/media/gr5.jpg", "/media/gr1.jpg"],
		createdAt: "2024-03-22"
	},
	{
		id: "prop6",
		title: "Contemporary Hilltop Villa",
		price: 8750000,
		location: "Glen Ellen, Walworth County",
		beds: 4,
		baths: 4.5,
		area: 5800,
		status: "For Sale",
		listingStatus: "Normal",
		image: "/media/gr6.jpg",
		images: ["/media/gr6.jpg", "/media/gr2.jpg"],
		createdAt: "2024-03-18"
	},
	{
		id: "prop7",
		title: "Lake Geneva area Architectural Masterpiece",
		price: 16500000,
		location: "Rutherford, Walworth County",
		beds: 6,
		baths: 7,
		area: 9500,
		status: "For Sale",
		listingStatus: "Featured",
		image: "/media/gr7.jpg",
		images: ["/media/gr7.jpg", "/media/gr3.jpg"],
		createdAt: "2024-03-10"
	},
	{
		id: "prop8",
		title: "Private Sonoma Valley Retreat",
		price: 7950000,
		location: "Kenwood, Walworth County",
		beds: 5,
		baths: 5,
		area: 6500,
		status: "Coming Soon",
		listingStatus: "Featured",
		image: "/media/gr8.jpg",
		images: ["/media/gr8.jpg", "/media/gr4.jpg"],
		createdAt: "2024-03-05"
	},
	{
		id: "prop9",
		title: "Lake Geneva Luxury Chateau",
		price: 24500000,
		location: "Oakville, Walworth County",
		beds: 9,
		baths: 10.5,
		area: 18000,
		status: "For Sale",
		listingStatus: "Featured",
		image: "/media/gr9.jpg",
		images: ["/media/gr9.jpg", "/media/gr5.jpg"],
		createdAt: "2024-02-28"
	},
	{
		id: "prop10",
		title: "Sonoma Mountain Estate",
		price: 6750000,
		location: "Santa Rosa, Walworth County",
		beds: 4,
		baths: 4.5,
		area: 5200,
		status: "For Sale",
		listingStatus: "Normal",
		image: "/media/gr10.jpg",
		images: ["/media/gr10.jpg", "/media/gr6.jpg"],
		createdAt: "2024-02-20"
	}
];

// Define a type for property listings
export type Property = {
	id: string;
	title: string;
	price: number;
	location: string;
	beds: number;
	baths: number;
	area: number;
	status: string;
	listingStatus: string;
	image: string;
	images?: string[];
	createdAt: string;
	listingType?: string;
	acres?: number;
	stories?: number;
	yearBuilt?: number;
	garage?: number;
	description?: string;
};

const AdminListings = () => {
	const [properties, setProperties] = useState<Property[]>(luxuryProperties);
	const [statusFilter, setStatusFilter] = useState("All");
	const [listingStatusFilter, setListingStatusFilter] = useState("All");
	const [sortBy, setSortBy] = useState("newest");
	const [searchTerm, setSearchTerm] = useState("");
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [propertyToDelete, setPropertyToDelete] = useState<string | null>(
		null
	);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [propertyToEdit, setPropertyToEdit] = useState<Property | null>(null);
	const [isNewPropertyModalOpen, setIsNewPropertyModalOpen] = useState(false);

	const statuses = ["All", ...new Set(properties.map((p) => p.status))];
	const listingStatuses = [
		"All",
		...new Set(properties.map((p) => p.listingStatus))
	];

	const filteredProperties = properties
		.filter((property) => {
			const matchesSearch =
				searchTerm === "" ||
				property.title
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				property.location
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				property.price
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			const matchesStatus =
				statusFilter === "All" || property.status === statusFilter;
			const matchesListingStatus =
				listingStatusFilter === "All" ||
				property.listingStatus === listingStatusFilter;
			return matchesSearch && matchesStatus && matchesListingStatus;
		})
		.sort((a, b) => {
			if (sortBy === "newest") {
				return (
					new Date(b.createdAt).getTime() -
					new Date(a.createdAt).getTime()
				);
			} else if (sortBy === "oldest") {
				return (
					new Date(a.createdAt).getTime() -
					new Date(b.createdAt).getTime()
				);
			} else if (sortBy === "priceDesc") {
				return Number(b.price) - Number(a.price);
			} else if (sortBy === "priceAsc") {
				return Number(a.price) - Number(b.price);
			}
			return 0;
		});

	const handleDeleteClick = (id: string) => {
		setPropertyToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = () => {
		if (propertyToDelete) {
			setProperties(
				properties.filter(
					(property) => property.id !== propertyToDelete
				)
			);
			setIsDeleteModalOpen(false);
			setPropertyToDelete(null);
		}
	};

	const handleEditClick = (property: Property) => {
		setPropertyToEdit({ ...property });
		setIsEditModalOpen(true);
	};

	const saveEditChanges = () => {
		if (propertyToEdit) {
			setProperties(
				properties.map((property) =>
					property.id === propertyToEdit.id
						? propertyToEdit
						: property
				)
			);
			setIsEditModalOpen(false);
			setPropertyToEdit(null);
		}
	};

	const emptyProperty: Property = {
		id: "",
		title: "",
		price: 0,
		location: "",
		beds: 0,
		baths: 0,
		area: 0,
		status: "For Sale",
		listingStatus: "Normal",
		image: "",
		createdAt: new Date().toISOString()
	};

	const handleNewProperty = () => {
		setPropertyToEdit(emptyProperty);
		setIsNewPropertyModalOpen(true);
	};

	const saveNewProperty = () => {
		if (propertyToEdit) {
			const newProperty = {
				...propertyToEdit,
				id: `prop${properties.length + 1}` // Simple ID generation
			};
			setProperties([...properties, newProperty]);
			setIsNewPropertyModalOpen(false);
			setPropertyToEdit(null);
		}
	};

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl font-semibold text-gray-900">
					Properties
				</h2>
				<button
					onClick={handleNewProperty}
					className="whitespace-nowrap px-3 py-2 text-sm lg:text-base font-medium text-white bg-black rounded-md hover:bg-gray-800">
					Add New Property
				</button>
			</div>

			<PropertyFilters
				statusFilter={statusFilter}
				setStatusFilter={setStatusFilter}
				listingStatusFilter={listingStatusFilter}
				setListingStatusFilter={setListingStatusFilter}
				sortBy={sortBy}
				setSortBy={setSortBy}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				statuses={statuses}
				listingStatuses={listingStatuses}
			/>

			<PropertyTable
				filteredProperties={filteredProperties}
				handleEditClick={handleEditClick}
				handleDeleteClick={handleDeleteClick}
			/>

			<DeletePropertyModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={confirmDelete}
			/>

			<Sheet open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
				<EditPropertyModal
					isOpen={isEditModalOpen}
					onClose={() => setIsEditModalOpen(false)}
					property={propertyToEdit}
					setProperty={setPropertyToEdit}
					onSave={saveEditChanges}
					statuses={statuses.filter((status) => status !== "All")}
					listingStatuses={listingStatuses.filter(
						(status) => status !== "All"
					)}
				/>
			</Sheet>

			<Sheet
				open={isNewPropertyModalOpen}
				onOpenChange={setIsNewPropertyModalOpen}>
				<EditPropertyModal
					isOpen={isNewPropertyModalOpen}
					onClose={() => setIsNewPropertyModalOpen(false)}
					property={propertyToEdit}
					setProperty={setPropertyToEdit}
					onSave={saveNewProperty}
					statuses={statuses.filter((status) => status !== "All")}
					listingStatuses={listingStatuses.filter(
						(status) => status !== "All"
					)}
				/>
			</Sheet>
		</div>
	);
};

export default AdminListings;
