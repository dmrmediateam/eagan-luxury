"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropertyHistoryProps {
	listing: any;
}

const PropertyHistory: React.FC<PropertyHistoryProps> = ({ listing }) => {
	// Use actual price history from listing data
	const priceHistory = listing.priceHistories || [];
	const statusHistory = listing.statusHistories || [];

	// Format price
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price);
	};

	// Format date
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	};

	if (priceHistory.length === 0 && statusHistory.length === 0) {
		return null;
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
			<h3 className="text-xl font-serif font-light mb-4">Property History</h3>
			
			{/* Price History */}
			{priceHistory.length > 0 && (
				<div className="mb-6">
					<h4 className="font-medium text-gray-900 mb-3">Price History</h4>
					<div className="space-y-3">
						{priceHistory.map((history: any, index: number) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
							>
								<div>
									<span className="font-medium text-gray-900">
										{formatPrice(history.listPrice)}
									</span>
									<span className="text-gray-600 text-sm ml-2">
										{formatDate(history.changedAt)}
									</span>
								</div>
								{index > 0 && (
									<div className="text-sm">
										{history.listPrice > priceHistory[index - 1].listPrice ? (
											<span className="text-green-600">↑ Price Increased</span>
										) : history.listPrice < priceHistory[index - 1].listPrice ? (
											<span className="text-red-600">↓ Price Decreased</span>
										) : (
											<span className="text-gray-600">No Change</span>
										)}
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			)}

			{/* Status History */}
			{statusHistory.length > 0 && (
				<div>
					<h4 className="font-medium text-gray-900 mb-3">Status History</h4>
					<div className="space-y-3">
						{statusHistory.map((history: any, index: number) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: (priceHistory.length * 0.1) + (index * 0.1) }}
								className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
							>
								<div>
									<span className="font-medium text-gray-900">
										{history.standardStatus}
									</span>
									<span className="text-gray-600 text-sm ml-2">
										{formatDate(history.changedAt)}
									</span>
								</div>
								<div className="text-sm text-gray-600">
									Status Change
								</div>
							</motion.div>
						))}
					</div>
				</div>
			)}

			{/* Disclaimer */}
			<div className="mt-6 p-4 bg-yellow-50 rounded-lg">
				<p className="text-xs text-gray-600">
					* Property history information is provided for reference only. Contact your agent for the most current information.
				</p>
			</div>
		</div>
	);
};

export default PropertyHistory;
