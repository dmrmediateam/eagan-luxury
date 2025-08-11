"use client";

import { TrendingUp } from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	ResponsiveContainer
} from "recharts";
import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart";

interface BaseVisitorData {
	month: string;
	timestamp?: string;
}

interface CombinedVisitorData extends BaseVisitorData {
	total: number;
}

interface SplitVisitorData extends BaseVisitorData {
	desktop: number;
	mobile: number;
}

type VisitorData = CombinedVisitorData | SplitVisitorData;

interface BarChartVisitorsProps {
	data?: VisitorData[];
	title?: string;
	description?: string;
	dateRange?: string;
	trend?: {
		value: number;
		isUp: boolean;
		timeframe?: string;
	};
}

const defaultData: SplitVisitorData[] = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 }
];

const chartConfig = {
	total: {
		label: "Total Visitors",
		color: "hsl(210, 100%, 45%)"
	}
} satisfies ChartConfig;

const transformData = (data: VisitorData[]): CombinedVisitorData[] => {
	return data.map((item) => {
		if ("total" in item) {
			return item as CombinedVisitorData;
		}
		const splitItem = item as SplitVisitorData;
		return {
			month: item.month,
			timestamp: item.timestamp,
			total: splitItem.desktop + splitItem.mobile
		};
	});
};

export default function BarChartVisitors({
	data = defaultData,
	title = "Total Visitors",
	description = "Showing combined desktop and mobile visitors for the last 6 months",
	dateRange = "January - June 2024",
	trend = { value: 5.2, isUp: true }
}: BarChartVisitorsProps) {
	const transformedData = React.useMemo(() => transformData(data), [data]);

	return (
		<Card className="w-full">
			<CardHeader className="p-4 pb-2">
				<CardTitle className="text-sm">{title}</CardTitle>
				<CardDescription className="text-xs">
					{dateRange}
				</CardDescription>
			</CardHeader>
			<CardContent className="p-4 pt-0 w-full">
				<ChartContainer config={chartConfig} className="h-32 w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={transformedData}
							margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
							<CartesianGrid vertical={false} />
							<XAxis dataKey="month" hide={true} />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Bar
								dataKey="total"
								fill={chartConfig.total.color}
								radius={4}
							/>
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-1 p-4 pt-0">
				<div className="flex gap-2 text-xs font-medium leading-none">
					{trend.isUp ? "Trending up" : "Trending down"} by{" "}
					{trend.value}% {trend.timeframe || "this month"}{" "}
					<TrendingUp
						className={`h-3 w-3 ${!trend.isUp && "rotate-180"}`}
					/>
				</div>
				<div className="text-xs leading-none text-muted-foreground">
					{description}
				</div>
			</CardFooter>
		</Card>
	);
}
