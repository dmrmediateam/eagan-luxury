import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
	title: string;
	value: string | number;
	trend: number;
	timeframe: string;
}

export default function MetricCard({
	title,
	value,
	trend,
	timeframe
}: MetricCardProps) {
	const isPositive = trend > 0;
	const isNeutral = trend === 0;

	return (
		<Card>
			<CardContent className="">
				<div className="flex flex-col gap-1">
					<p className="text-sm font-medium text-muted-foreground">
						{title}
					</p>
					<div className="flex items-center justify-between">
						<span className="text-2xl font-bold">
							{typeof value === "number"
								? value.toLocaleString()
								: value}
						</span>
						<div
							className={`flex items-center gap-1 text-sm ${
								isNeutral
									? "text-muted-foreground"
									: isPositive
									? "text-green-600"
									: "text-red-600"
							}`}>
							{isPositive ? (
								<TrendingUp className="h-4 w-4" />
							) : (
								<TrendingDown className="h-4 w-4" />
							)}
							<span>
								{isPositive ? "+" : ""}
								{trend}%
							</span>
						</div>
					</div>
					<p className="text-xs text-muted-foreground">
						vs previous {timeframe.replace("this ", "")}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
