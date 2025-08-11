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

interface VisitorData {
	month: string;
	desktop: number;
	mobile: number;
	timestamp?: string;
}

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

const defaultData: VisitorData[] = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 }
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(210, 100%, 45%)"
	},
	mobile: {
		label: "Mobile",
		color: "hsl(210, 70%, 85%)"
	}
} satisfies ChartConfig;

export default function BarChartVisitors({
	data = defaultData,
	title = "Bar Chart - Multiple",
	description = "Showing total visitors for the last 6 months",
	dateRange = "January - June 2024",
	trend = { value: 5.2, isUp: true }
}: BarChartVisitorsProps) {
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
							data={data}
							margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
							<CartesianGrid vertical={false} />
							<XAxis dataKey="month" hide={true} />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Bar
								dataKey="desktop"
								fill={chartConfig.desktop.color}
								radius={4}
							/>
							<Bar
								dataKey="mobile"
								fill={chartConfig.mobile.color}
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
