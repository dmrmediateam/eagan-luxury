"use client";

import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import AreaChartVisitors from "./AreaChartVisitors";
import { default as BarChartComponent } from "./BarChartVisitors";
import { default as PieChartComponent } from "./PieChartSource";
import { analyticsData, type TimeFrame } from "@/lib/data/analytics";
import MetricCard from "./MetricCard";
import PopularPagesCard from "./PopularPagesCard";
import BarChartComponentMobile from "./BarChartVisitorsMobile";
import TrafficSourcesCard from "./TrafficSourcesCard";
const timeFrameLabels: Record<TimeFrame, string> = {
	"1d": "Last 24 Hours",
	"7d": "Last 7 Days",
	"30d": "Last 30 Days",
	"90d": "Last 90 Days",
	"180d": "Last 6 Months",
	"2y": "Last 2 Years"
};

const getTimeFrameDescription = (frame: TimeFrame) => {
	switch (frame) {
		case "1d":
			return "Hourly breakdown";
		case "7d":
			return "12-hour intervals";
		case "30d":
			return "Daily breakdown";
		case "90d":
			return "Weekly breakdown";
		case "180d":
			return "Monthly breakdown";
		case "2y":
			return "Quarterly breakdown";
	}
};

const getTimeFrameText = (frame: TimeFrame) => {
	switch (frame) {
		case "1d":
			return "day";
		case "7d":
			return "week";
		case "30d":
			return "month";
		case "90d":
			return "quarter";
		case "180d":
			return "6 months";
		case "2y":
			return "year";
	}
};

const AdminAnalytics = () => {
	const [timeFrame, setTimeFrame] = React.useState<TimeFrame>("30d");
	const data = analyticsData[timeFrame];

	const getDateRangeText = (frame: TimeFrame) => {
		const now = new Date();
		const formatter = new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric"
		});

		let start: Date;
		switch (frame) {
			case "1d":
				start = new Date(now.setDate(now.getDate() - 1));
				break;
			case "7d":
				start = new Date(now.setDate(now.getDate() - 7));
				break;
			case "30d":
				start = new Date(now.setDate(now.getDate() - 30));
				break;
			case "90d":
				start = new Date(now.setDate(now.getDate() - 90));
				break;
			case "180d":
				start = new Date(now.setMonth(now.getMonth() - 6));
				break;
			case "2y":
				start = new Date(now.setFullYear(now.getFullYear() - 2));
				break;
		}

		return `${formatter.format(start)} - ${formatter.format(new Date())}`;
	};

	// Transform data to use timestamp instead of month
	const transformedData = React.useMemo(
		() => ({
			...data,
			visitors: data.visitors.map((item) => ({
				...item,
				month: item.timestamp // For backward compatibility with chart components
			}))
		}),
		[data]
	);

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl font-semibold text-gray-900">
					Analytics
				</h2>
				<Select
					value={timeFrame}
					onValueChange={(value: TimeFrame) => setTimeFrame(value)}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select timeframe" />
					</SelectTrigger>
					<SelectContent>
						{Object.entries(timeFrameLabels).map(
							([value, label]) => (
								<SelectItem key={value} value={value}>
									{label}
								</SelectItem>
							)
						)}
					</SelectContent>
				</Select>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
				<MetricCard
					title="Total Visitors"
					value={transformedData.metrics.totalVisitors.current}
					trend={transformedData.metrics.totalVisitors.trend}
					timeframe={getTimeFrameText(timeFrame)}
				/>
				<MetricCard
					title="Page Views"
					value={transformedData.metrics.pageViews.current}
					trend={transformedData.metrics.pageViews.trend}
					timeframe={getTimeFrameText(timeFrame)}
				/>
				<MetricCard
					title="Avg. Engagement"
					value={`${transformedData.metrics.avgEngagementTime.current} min`}
					trend={transformedData.metrics.avgEngagementTime.trend}
					timeframe={getTimeFrameText(timeFrame)}
				/>
				<MetricCard
					title="Bounce Rate"
					value={`${transformedData.metrics.bounceRate.current}%`}
					trend={transformedData.metrics.bounceRate.trend}
					timeframe={getTimeFrameText(timeFrame)}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				<PopularPagesCard
					pages={transformedData.popularPages}
					timeframe={getTimeFrameText(timeFrame)}
				/>
				<TrafficSourcesCard
					sources={transformedData.trafficSources}
					timeframe={getTimeFrameText(timeFrame)}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<AreaChartVisitors
						data={transformedData.visitors}
						title="Traffic Overview"
						description={`Visitor trends - ${getTimeFrameDescription(
							timeFrame
						)}`}
						dateRange={getDateRangeText(timeFrame)}
						trend={{
							value: 5.2,
							isUp: true,
							timeframe: getTimeFrameText(timeFrame)
						}}
					/>
				</div>

				<div>
					<PieChartComponent
						data={transformedData.browsers}
						title="Browser Distribution"
						description={`Browser usage - ${getTimeFrameDescription(
							timeFrame
						)}`}
						dateRange={getDateRangeText(timeFrame)}
						trend={{
							value: 3.8,
							isUp: true,
							timeframe: getTimeFrameText(timeFrame)
						}}
					/>
				</div>

				<div className="hidden md:block md:col-span-2">
					<BarChartComponent
						data={transformedData.visitors}
						title="Visitor Comparison"
						description={`Platform comparison - ${getTimeFrameDescription(
							timeFrame
						)}`}
						dateRange={getDateRangeText(timeFrame)}
						trend={{
							value: 4.5,
							isUp: true,
							timeframe: getTimeFrameText(timeFrame)
						}}
					/>
				</div>
				<div className="md:hidden">
					<BarChartComponentMobile
						data={transformedData.visitors}
						title="Visitor Comparison"
						description={`Platform comparison - ${getTimeFrameDescription(
							timeFrame
						)}`}
						dateRange={getDateRangeText(timeFrame)}
						trend={{
							value: 4.5,
							isUp: true,
							timeframe: getTimeFrameText(timeFrame)
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdminAnalytics;
