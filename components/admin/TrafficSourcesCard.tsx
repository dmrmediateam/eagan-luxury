import { TrendingDown, TrendingUp } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

interface TrafficSource {
	source: string;
	users: number;
	trend: number;
}

interface TrafficSourcesCardProps {
	sources: TrafficSource[];
	timeframe: string;
}

export default function TrafficSourcesCard({
	sources,
	timeframe
}: TrafficSourcesCardProps) {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Traffic Sources</CardTitle>
				<CardDescription>
					Active users by source {timeframe}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{sources.map((source) => (
						<div
							key={source.source}
							className="flex items-center justify-between">
							<div className="space-y-1">
								<p className="text-xs sm:text-sm font-medium leading-none">
									{source.source}
								</p>
							</div>
							<div className="flex items-center gap-2 sm:gap-4">
								<span className="font-mono text-xs sm:text-sm">
									{source.users.toLocaleString()} users
								</span>
								<div
									className={`flex items-center gap-1 text-xs sm:text-sm ${
										source.trend === 0
											? "text-muted-foreground"
											: source.trend > 0
											? "text-green-600"
											: "text-red-600"
									}`}>
									{source.trend > 0 ? (
										<TrendingUp className="h-4 w-4" />
									) : (
										<TrendingDown className="h-4 w-4" />
									)}
									<span>
										{source.trend > 0 ? "+" : ""}
										{source.trend}%
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
