"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
}

interface AreaChartVisitorsProps {
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

const defaultData = [
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
		color: "hsl(210, 100%, 45%)" // Bright blue
	},
	mobile: {
		label: "Mobile",
		color: "hsl(210, 70%, 65%)" // Light blue
	}
} satisfies ChartConfig;

export default function AreaChartVisitors({
	data = defaultData,
	title = "Area Chart - Stacked",
	description = "Showing total visitors for the last 6 months",
	dateRange = "January - June 2024",
	trend = { value: 5.2, isUp: true }
}: AreaChartVisitorsProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 8,
							right: 8,
							bottom: 0
						}}
						height={250}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey="month" hide={true} />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dot" />}
						/>
						<Area
							dataKey="mobile"
							type="monotone"
							fill={chartConfig.mobile.color}
							fillOpacity={0.4}
							stroke={chartConfig.mobile.color}
							strokeWidth={2}
							stackId="a"
						/>
						<Area
							dataKey="desktop"
							type="monotone"
							fill={chartConfig.desktop.color}
							fillOpacity={0.4}
							stroke={chartConfig.desktop.color}
							strokeWidth={2}
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-1 sm:gap-2 text-xs sm:text-sm">
					<div className="grid gap-1 sm:gap-2">
						<div className="flex items-center gap-1 sm:gap-2 font-medium leading-none">
							{trend.isUp ? "Trending up" : "Trending down"} by{" "}
							{trend.value}% {trend.timeframe || "this month"}{" "}
							<TrendingUp
								className={`h-3 w-3 sm:h-4 sm:w-4 ${
									!trend.isUp && "rotate-180"
								}`}
							/>
						</div>
						<div className="flex items-center gap-1 sm:gap-2 leading-none text-muted-foreground">
							{dateRange}
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
