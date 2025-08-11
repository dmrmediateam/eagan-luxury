"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

interface SourceData {
	browser: string;
	visitors: number;
}

interface PieChartSourceProps {
	data?: SourceData[];
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
	{ browser: "chrome", visitors: 275 },
	{ browser: "safari", visitors: 200 },
	{ browser: "firefox", visitors: 287 },
	{ browser: "edge", visitors: 173 },
	{ browser: "other", visitors: 190 }
];

const chartConfig = {
	visitors: {
		label: "Visitors"
	},
	chrome: {
		label: "Chrome",
		color: "hsl(210, 100%, 45%)" // Deep blue
	},
	safari: {
		label: "Safari",
		color: "hsl(210, 85%, 60%)" // Medium blue
	},
	firefox: {
		label: "Firefox",
		color: "hsl(210, 70%, 75%)" // Light blue
	},
	edge: {
		label: "Edge",
		color: "hsl(210, 60%, 85%)" // Lighter blue
	},
	other: {
		label: "Other",
		color: "hsl(210, 50%, 90%)" // Lightest blue
	}
} satisfies ChartConfig;

export default function PieChartSource({
	data = defaultData,
	title = "Pie Chart - Donut with Text",
	description = "Showing browser distribution",
	dateRange = "January - June 2024",
	trend = { value: 5.2, isUp: true }
}: PieChartSourceProps) {
	const totalVisitors = React.useMemo(() => {
		return data.reduce((acc, curr) => acc + curr.visitors, 0);
	}, [data]);

	// Calculate text size based on number length
	const getFontSize = React.useCallback((number: number) => {
		const length = number.toString().length;
		if (length > 7) return "text-lg";
		if (length > 6) return "text-xl";
		if (length > 5) return "text-2xl";
		return "text-3xl";
	}, []);

	// Add fill colors to the data
	const chartDataWithColors = React.useMemo(() => {
		return data.map((item) => {
			const color =
				chartConfig[
					item.browser as keyof Omit<typeof chartConfig, "visitors">
				]?.color;
			return {
				...item,
				fill: color,
				stroke: color
			};
		});
	}, [data]);

	return (
		<Card className="flex flex-col h-full">
			<CardHeader className="items-center pb-0">
				<CardTitle>{title}</CardTitle>
				<CardDescription>{dateRange}</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto h-full w-full">
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartDataWithColors}
							dataKey="visitors"
							nameKey="browser"
							innerRadius={60}
							strokeWidth={1}
							stroke="#fff">
							<Label
								content={({ viewBox }) => {
									if (
										viewBox &&
										"cx" in viewBox &&
										"cy" in viewBox
									) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle">
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className={`fill-foreground font-bold ${getFontSize(
														totalVisitors
													)}`}>
													{totalVisitors.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground text-sm">
													Visitors
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					{trend.isUp ? "Trending up" : "Trending down"} by{" "}
					{trend.value}% this month{" "}
					<TrendingUp
						className={`h-4 w-4 ${!trend.isUp && "rotate-180"}`}
					/>
				</div>
				<div className="leading-none text-muted-foreground">
					{description}
				</div>
			</CardFooter>
		</Card>
	);
}
