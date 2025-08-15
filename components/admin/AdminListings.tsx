"use client";

import React, { useState, useEffect } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertyTable from "./PropertyTable";
import DeletePropertyModal from "./DeletePropertyModal";
import EditPropertyModal from "./EditPropertyModal";
import { Sheet } from "../../components/ui/sheet";

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
	const [properties, setProperties] = useState<Property[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [filters, setFilters] = useState({
		status: "all",
		priceRange: "all",
		location: "all"
	});

	// Fetch properties from database
	useEffect(() => {
		async function fetchProperties() {
			try {
				const response = await fetch('/api/listings');
				if (response.ok) {
					const data = await response.json();
					// Transform database listings to Property format
					const transformedProperties: Property[] = data.map((listing: any) => ({
						id: listing.listingKey,
						title: `${listing.addressFull}, ${listing.city}`,
						price: Number(listing.listPrice) || 0,
						location: `${listing.city}, ${listing.state}`,
						beds: listing.bedsTotal || 0,
						baths: listing.bathsFull || 0,
						area: listing.livingArea || 0,
						status: listing.standardStatus || 'Unknown',
						listingStatus: 'Active',
						image: listing.media?.[0]?.url || '/placeholder.jpg',
						images: listing.media?.map((m: any) => m.url) || [],
						createdAt: listing.modificationTimestamp || new Date().toISOString(),
						listingType: listing.propertyType || 'Residential',
						acres: Number(listing.lotSizeAcres) || 0,
						yearBuilt: listing.yearBuilt || 0,
						description: listing.remarksPublic || ''
					}));
					setProperties(transformedProperties);
				} else {
					console.error('Failed to fetch properties');
				}
			} catch (error) {
				console.error('Error fetching properties:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchProperties();
	}, []);

	const handleDeleteProperty = (property: Property) => {
		setSelectedProperty(property);
		setIsDeleteModalOpen(true);
	};

	const handleEditProperty = (property: Property) => {
		setSelectedProperty(property);
		setIsEditModalOpen(true);
	};

	const handleDeleteConfirm = async () => {
		if (!selectedProperty) return;

		try {
			const response = await fetch(`/api/listings/${selectedProperty.id}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				setProperties(properties.filter(p => p.id !== selectedProperty.id));
				setIsDeleteModalOpen(false);
				setSelectedProperty(null);
			} else {
				console.error('Failed to delete property');
			}
		} catch (error) {
			console.error('Error deleting property:', error);
		}
	};

	const handleEditSave = async (updatedProperty: Property) => {
		if (!selectedProperty) return;

		try {
			const response = await fetch(`/api/listings/${selectedProperty.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updatedProperty)
			});

			if (response.ok) {
				setProperties(properties.map(p => 
					p.id === selectedProperty.id ? updatedProperty : p
				));
				setIsEditModalOpen(false);
				setSelectedProperty(null);
			} else {
				console.error('Failed to update property');
			}
		} catch (error) {
			console.error('Error updating property:', error);
		}
	};

	// Apply filters
	const filteredProperties = properties.filter(property => {
		if (filters.status !== "all" && property.status !== filters.status) return false;
		if (filters.location !== "all" && !property.location.includes(filters.location)) return false;
		if (filters.priceRange !== "all") {
			const price = property.price;
			switch (filters.priceRange) {
				case "under-500k":
					return price < 500000;
				case "500k-1m":
					return price >= 500000 && price < 1000000;
				case "1m-2m":
					return price >= 1000000 && price < 2000000;
				case "2m-5m":
					return price >= 2000000 && price < 5000000;
				case "5m+":
					return price >= 5000000;
				default:
					return true;
			}
		}
		return true;
	});

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-lg">Loading properties...</div>
			</div>
		);
	}

	return (
		<div className="p-6">
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
				<p className="text-gray-600 mt-2">Manage all property listings in the database</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Filters Sidebar */}
				<div className="lg:col-span-1">
					<PropertyFilters filters={filters} onFiltersChange={setFilters} />
				</div>

				{/* Properties Table */}
				<div className="lg:col-span-3">
					<PropertyTable
						properties={filteredProperties}
						onDelete={handleDeleteProperty}
						onEdit={handleEditProperty}
					/>
				</div>
			</div>

			{/* Delete Modal */}
			<DeletePropertyModal
				isOpen={isDeleteModalOpen}
				onClose={() => {
					setIsDeleteModalOpen(false);
					setSelectedProperty(null);
				}}
				onConfirm={handleDeleteConfirm}
				property={selectedProperty}
			/>

			{/* Edit Modal */}
			<EditPropertyModal
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedProperty(null);
				}}
				onSave={handleEditSave}
				property={selectedProperty}
			/>
		</div>
	);
};

export default AdminListings;
