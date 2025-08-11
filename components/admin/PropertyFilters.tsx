import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PropertyFiltersProps {
	statusFilter: string;
	setStatusFilter: (status: string) => void;
	listingStatusFilter: string;
	setListingStatusFilter: (status: string) => void;
	sortBy: string;
	setSortBy: (sort: string) => void;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	statuses: string[];
	listingStatuses: string[];
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
	statusFilter,
	setStatusFilter,
	listingStatusFilter,
	setListingStatusFilter,
	sortBy,
	setSortBy,
	searchTerm,
	setSearchTerm,
	statuses,
	listingStatuses
}) => {
	return (
		<div className="p-4 mb-6 bg-white rounded-lg shadow-md">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
				<div className="space-y-2">
					<Label htmlFor="statusFilter">Filter by Status</Label>
					<Select
						value={statusFilter}
						onValueChange={setStatusFilter}>
						<SelectTrigger>
							<SelectValue placeholder="Select status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="All">All Statuses</SelectItem>
							{statuses
								.filter((status) => status !== "All")
								.map((status) => (
									<SelectItem key={status} value={status}>
										{status}
									</SelectItem>
								))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="listingStatusFilter">
						Filter by Listing Type
					</Label>
					<Select
						value={listingStatusFilter}
						onValueChange={setListingStatusFilter}>
						<SelectTrigger>
							<SelectValue placeholder="Select listing type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="All">
								All Listing Types
							</SelectItem>
							{listingStatuses
								.filter((status) => status !== "All")
								.map((status) => (
									<SelectItem key={status} value={status}>
										{status}
									</SelectItem>
								))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="sortBy">Sort By</Label>
					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger>
							<SelectValue placeholder="Select sorting" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="newest">Newest First</SelectItem>
							<SelectItem value="oldest">Oldest First</SelectItem>
							<SelectItem value="priceAsc">
								Price: Low to High
							</SelectItem>
							<SelectItem value="priceDesc">
								Price: High to Low
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="search">Search</Label>
					<Input
						type="text"
						id="search"
						placeholder="Search by title or location..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyFilters;
