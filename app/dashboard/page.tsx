"use client";

import React, { useState } from "react";
import Link from "next/link";
import AdminListings from "../../components/admin/AdminListings";
import AdminBlogPosts from "../../components/admin/AdminBlogPosts";
import AdminAnalytics from "../../components/admin/AdminAnalytics";

// Shadcn UI components
import { Button } from "../../components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from "../../components/ui/tabs";

export default function Dashboard() {
	const [activeTab, setActiveTab] = useState<
		"properties" | "blog" | "analytics"
	>("properties");

	const handleTabChange = (tab: "properties" | "blog" | "analytics") => {
		setActiveTab(tab);
	};

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">
			{/* Admin Header */}
			<header className="bg-white shadow">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl font-bold text-gray-900">
							Admin Dashboard
						</h1>
						<Button variant="outline" asChild>
							<Link href="/">Return to Website</Link>
						</Button>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<Tabs
					value={activeTab} // Use value instead of defaultValue for controlled component
					onValueChange={(value) => {
						if (
							value === "properties" ||
							value === "blog" ||
							value === "analytics"
						) {
							handleTabChange(value);
						}
					}}
					className="space-y-6">
					<TabsList className="inline-flex h-10 rounded-md bg-gray-200 p-1">
						<TabsTrigger
							value="properties"
							className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm cursor-pointer">
							Property Listings
						</TabsTrigger>
						<TabsTrigger
							value="blog"
							className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm cursor-pointer">
							Blog Posts
						</TabsTrigger>
						<TabsTrigger
							value="analytics"
							className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm cursor-pointer">
							Analytics
						</TabsTrigger>
					</TabsList>

					<TabsContent value="properties" className="mt-0">
						<div className="bg-white rounded-lg shadow-sm p-6">
							<AdminListings />
						</div>
					</TabsContent>
					<TabsContent value="blog" className="mt-0">
						<div className="bg-white rounded-lg shadow-sm p-6">
							<AdminBlogPosts />
						</div>
					</TabsContent>
					<TabsContent value="analytics" className="mt-0">
						<div className="bg-white rounded-lg shadow-sm p-6">
							<AdminAnalytics />
						</div>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
