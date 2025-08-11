import { TrendingDown, TrendingUp } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

interface PopularPage {
	path: string;
	title: string;
	views: number;
	trend: number;
}

interface PopularPagesCardProps {
	pages: PopularPage[];
	timeframe: string;
}

export default function PopularPagesCard({
	pages,
	timeframe
}: PopularPagesCardProps) {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Popular Pages</CardTitle>
				<CardDescription>Most viewed pages {timeframe}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{pages.map((page) => (
						<div
							key={page.path}
							className="flex items-center justify-between">
							<div className="space-y-1">
								<p className="text-xs sm:text-sm font-medium leading-none">
									{page.title}
								</p>
								<p className="text-xs sm:text-sm text-muted-foreground">
									{page.path}
								</p>
							</div>
							<div className="flex items-center gap-2 sm:gap-4">
								<span className="font-mono text-xs sm:text-sm">
									{page.views.toLocaleString()} views
								</span>
								<div
									className={`flex items-center gap-1 text-xs sm:text-sm ${
										page.trend === 0
											? "text-muted-foreground"
											: page.trend > 0
											? "text-green-600"
											: "text-red-600"
									}`}>
									{page.trend > 0 ? (
										<TrendingUp className="h-4 w-4" />
									) : (
										<TrendingDown className="h-4 w-4" />
									)}
									<span>
										{page.trend > 0 ? "+" : ""}
										{page.trend}%
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
