"use client";

import React, { useState } from "react";
import AdminListings from "./AdminListings";
import AdminAnalytics from "./AdminAnalytics";

const AdminDashboard = () => {
	const [activeTab, setActiveTab] = useState<"listings" | "analytics">(
		"listings"
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-6">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						<button
							onClick={() => setActiveTab("listings")}
							className={`${
								activeTab === "listings"
									? "border-black text-black"
									: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
							} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}>
							Listings
						</button>
						<button
							onClick={() => setActiveTab("analytics")}
							className={`${
								activeTab === "analytics"
									? "border-black text-black"
									: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
							} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}>
							Analytics
						</button>
					</nav>
				</div>
			</div>

			<div className="mt-4">
				{activeTab === "listings" ? (
					<AdminListings />
				) : (
					<AdminAnalytics />
				)}
			</div>
		</div>
	);
};

export default AdminDashboard;
