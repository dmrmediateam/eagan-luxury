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

interface BlogFiltersProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
	categoryFilter: string;
	setCategoryFilter: (value: string) => void;
	statusFilter: string;
	setStatusFilter: (value: string) => void;
	sortBy: "newest" | "oldest" | "title";
	setSortBy: (value: "newest" | "oldest" | "title") => void;
	categories: string[];
	statuses: string[];
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
	searchTerm,
	setSearchTerm,
	categoryFilter,
	setCategoryFilter,
	statusFilter,
	setStatusFilter,
	sortBy,
	setSortBy,
	categories,
	statuses
}) => {
	return (
		<div className="p-4 mb-6 bg-white rounded-lg shadow-md">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
				<div className="space-y-2">
					<Label htmlFor="search">Search</Label>
					<Input
						type="text"
						id="search"
						placeholder="Search blog posts..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="category">Category</Label>
					<Select
						value={categoryFilter}
						onValueChange={setCategoryFilter}>
						<SelectTrigger>
							<SelectValue placeholder="Select category" />
						</SelectTrigger>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category} value={category}>
									{category === "All"
										? "All Categories"
										: category}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="status">Status</Label>
					<Select
						value={statusFilter}
						onValueChange={setStatusFilter}>
						<SelectTrigger>
							<SelectValue placeholder="Select status" />
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

				<div className="space-y-2">
					<Label htmlFor="sortBy">Sort By</Label>
					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger>
							<SelectValue placeholder="Select sorting" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="newest">Newest First</SelectItem>
							<SelectItem value="oldest">Oldest First</SelectItem>
							<SelectItem value="title">Title</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};

export default BlogFilters;
