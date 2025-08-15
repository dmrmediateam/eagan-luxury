"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export type MarketReportType = {
	_id: string;
	title: string;
	description: string;
	date: string;
	category: string;
	fileUrl?: string;
	thumbnailUrl?: string;
};

interface ReportsProps {
	reports?: MarketReportType[];
	title?: string;
	subtitle?: string;
	showAll?: boolean;
}

const Reports: React.FC<ReportsProps> = ({
	reports = [],
	title = "Market Reports",
	subtitle = "Stay informed with the latest market insights and trends in New Jersey real estate.",
	showAll = false
}) => {
	const [loading, setLoading] = useState(true);
	const [marketReports, setMarketReports] = useState<MarketReportType[]>([]);

	useEffect(() => {
		async function fetchReports() {
			try {
				// Fetch market reports from API
				const response = await fetch('/api/market-reports');
				if (response.ok) {
					const data = await response.json();
					setMarketReports(data);
				} else {
					console.error('Failed to fetch market reports');
				}
			} catch (error) {
				console.error('Error fetching market reports:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchReports();
	}, []);

	// Use provided reports or fetched reports
	const allReports = reports.length > 0 ? reports : marketReports;
	const displayReports = showAll ? allReports : allReports.slice(0, 3);

	if (loading) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<div className="text-lg">Loading market reports...</div>
					</div>
				</div>
			</section>
		);
	}

	if (!displayReports || displayReports.length === 0) {
		return (
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center">
						<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
						<p className="text-gray-600 mb-8">{subtitle}</p>
						<div className="text-gray-500">
							No market reports available at this time.
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif font-light mb-4">{title}</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayReports.map((report, index) => (
						<motion.div
							key={report._id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
						>
							{/* Thumbnail */}
							{report.thumbnailUrl && (
								<div className="aspect-video overflow-hidden">
									<img
										src={report.thumbnailUrl}
										alt={report.title}
										className="w-full h-full object-cover"
									/>
								</div>
							)}

							{/* Content */}
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<span className="text-xs font-medium text-yellow-600 uppercase tracking-wide">
										{report.category}
									</span>
									<span className="text-xs text-gray-500">
										{new Date(report.date).toLocaleDateString()}
									</span>
								</div>

								<h3 className="text-lg font-medium text-gray-900 mb-2">
									{report.title}
								</h3>

								<p className="text-gray-600 text-sm mb-4 line-clamp-3">
									{report.description}
								</p>

								{/* Download/View Button */}
								{report.fileUrl ? (
									<a
										href={report.fileUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded hover:bg-yellow-600 transition-colors duration-200"
									>
										Download Report
										<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</a>
								) : (
									<Link
										href={`/market-reports/${report._id}`}
										className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded hover:bg-yellow-600 transition-colors duration-200"
									>
										Read More
										<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</Link>
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Button */}
				{!showAll && allReports.length > 3 && (
					<div className="text-center mt-12">
						<Link
							href="/market-reports"
							className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
						>
							View All Reports
							<span className="ml-2">→</span>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default Reports;
