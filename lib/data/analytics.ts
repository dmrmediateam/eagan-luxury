export type TimeFrame = "1d" | "7d" | "30d" | "90d" | "180d" | "2y";

interface AnalyticsData {
	visitors: {
		timestamp: string;
		desktop: number;
		mobile: number;
	}[];
	browsers: {
		browser: string;
		visitors: number;
	}[];
	metrics: {
		totalVisitors: {
			current: number;
			trend: number;
		};
		pageViews: {
			current: number;
			trend: number;
		};
		avgEngagementTime: {
			current: number; // in minutes
			trend: number;
		};
		bounceRate: {
			current: number; // percentage
			trend: number;
		};
	};
	popularPages: {
		path: string;
		title: string;
		views: number;
		trend: number;
	}[];
	trafficSources: {
		source: string;
		users: number;
		trend: number;
	}[];
}

// Helper to generate random numbers within a range
const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);

// Helper to generate trend percentage (-20 to +20)
const generateTrend = () => random(-20, 20);

// Generate hourly data for last 24 hours
const generateHourlyData = () => {
	const data = [];
	const now = new Date();
	for (let i = 47; i >= 0; i--) {
		const date = new Date(now);
		date.setMinutes(date.getMinutes() - i * 30);
		data.push({
			timestamp: date.toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: true
			}),
			desktop: random(50, 200),
			mobile: random(30, 150)
		});
	}
	return data;
};

// Generate 12-hour data points for last 7 days
const generate12HourlyData = () => {
	const data = [];
	const now = new Date();
	for (let i = 27; i >= 0; i--) {
		const date = new Date(now);
		date.setHours(date.getHours() - i * 6);
		data.push({
			timestamp: `${date.toLocaleDateString("en-US", {
				weekday: "short"
			})} ${date.getHours() >= 12 ? "PM" : "AM"}`,
			desktop: random(150, 400),
			mobile: random(80, 250)
		});
	}
	return data;
};

// Generate daily data for last 30 days
const generateDailyData = () => {
	const data = [];
	const now = new Date();
	for (let i = 59; i >= 0; i--) {
		const date = new Date(now);
		date.setDate(date.getDate() - i);
		data.push({
			timestamp: date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric"
			}),
			desktop: random(500, 1200),
			mobile: random(300, 800)
		});
	}
	return data;
};

// Generate weekly data for last 90 days
const generateWeeklyData = () => {
	const data = [];
	const now = new Date();
	for (let i = 25; i >= 0; i--) {
		const date = new Date(now);
		date.setDate(date.getDate() - i * 3.5);
		data.push({
			timestamp: `Week ${Math.floor((26 - i) / 2)}`,
			desktop: random(3000, 8000),
			mobile: random(2000, 5000)
		});
	}
	return data;
};

// Generate monthly data for last 180 days
const generateBiAnnualData = () => {
	const data = [];
	const now = new Date();
	for (let i = 11; i >= 0; i--) {
		const date = new Date(now);
		date.setMonth(date.getMonth() - Math.floor(i / 2));
		date.setDate(i % 2 === 0 ? 1 : 15);
		data.push({
			timestamp: date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric"
			}),
			desktop: random(12000, 25000),
			mobile: random(8000, 15000)
		});
	}
	return data;
};

// Generate quarterly data for last 2 years
const generateTwoYearData = () => {
	const data = [];
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentQuarter = Math.floor(now.getMonth() / 3) + 1;

	for (let i = 7; i >= 0; i--) {
		const quarterOffset = currentQuarter - (i % 4);
		const yearOffset = Math.floor(i / 4);
		const year = currentYear - yearOffset;
		const quarter = quarterOffset <= 0 ? quarterOffset + 4 : quarterOffset;

		data.push({
			timestamp: `Q${quarter} ${year}`,
			desktop: random(30000, 60000),
			mobile: random(20000, 40000)
		});
	}
	return data;
};

// Generate browser data with appropriate scaling for each timeframe
const generateBrowserData = (multiplier: number) => [
	{ browser: "chrome", visitors: random(2000, 3000) * multiplier },
	{ browser: "safari", visitors: random(1000, 2000) * multiplier },
	{ browser: "firefox", visitors: random(800, 1500) * multiplier },
	{ browser: "edge", visitors: random(500, 1000) * multiplier },
	{ browser: "other", visitors: random(300, 800) * multiplier }
];

// Generate metrics data with appropriate scaling for each timeframe
const generateMetricsData = (multiplier: number) => ({
	totalVisitors: {
		current: random(1000, 2000) * multiplier,
		trend: generateTrend()
	},
	pageViews: {
		current: random(2000, 4000) * multiplier,
		trend: generateTrend()
	},
	avgEngagementTime: {
		current: random(2, 10),
		trend: generateTrend()
	},
	bounceRate: {
		current: random(20, 40),
		trend: generateTrend() * -1 // Inverse trend for bounce rate (negative is good)
	}
});

// Generate popular pages data
const generatePopularPagesData = (multiplier: number) => [
	{
		path: "/",
		title: "Home",
		views: random(500, 1000) * multiplier,
		trend: generateTrend()
	},
	{
		path: "/properties/luxury-condos",
		title: "Luxury Condominiums",
		views: random(300, 800) * multiplier,
		trend: generateTrend()
	},
	{
		path: "/blog/market-trends-2024",
		title: "Real Estate Market Trends 2024",
		views: random(200, 600) * multiplier,
		trend: generateTrend()
	},
	{
		path: "/contact",
		title: "Contact Us",
		views: random(150, 400) * multiplier,
		trend: generateTrend()
	},
	{
		path: "/properties/beachfront-villas",
		title: "Beachfront Villas",
		views: random(100, 300) * multiplier,
		trend: generateTrend()
	}
];

// Generate traffic sources data
const generateTrafficSourcesData = (multiplier: number) => [
	{
		source: "Organic Search",
		users: random(800, 1500) * multiplier,
		trend: generateTrend()
	},
	{
		source: "Direct",
		users: random(500, 1000) * multiplier,
		trend: generateTrend()
	},
	{
		source: "Social Media",
		users: random(300, 800) * multiplier,
		trend: generateTrend()
	},
	{
		source: "Referral",
		users: random(200, 500) * multiplier,
		trend: generateTrend()
	},
	{
		source: "Email",
		users: random(100, 300) * multiplier,
		trend: generateTrend()
	}
];

export const analyticsData: Record<TimeFrame, AnalyticsData> = {
	"1d": {
		visitors: generateHourlyData(),
		browsers: generateBrowserData(1),
		metrics: generateMetricsData(1),
		popularPages: generatePopularPagesData(1),
		trafficSources: generateTrafficSourcesData(1)
	},
	"7d": {
		visitors: generate12HourlyData(),
		browsers: generateBrowserData(7),
		metrics: generateMetricsData(7),
		popularPages: generatePopularPagesData(7),
		trafficSources: generateTrafficSourcesData(7)
	},
	"30d": {
		visitors: generateDailyData(),
		browsers: generateBrowserData(30),
		metrics: generateMetricsData(30),
		popularPages: generatePopularPagesData(30),
		trafficSources: generateTrafficSourcesData(30)
	},
	"90d": {
		visitors: generateWeeklyData(),
		browsers: generateBrowserData(90),
		metrics: generateMetricsData(90),
		popularPages: generatePopularPagesData(90),
		trafficSources: generateTrafficSourcesData(90)
	},
	"180d": {
		visitors: generateBiAnnualData(),
		browsers: generateBrowserData(180),
		metrics: generateMetricsData(180),
		popularPages: generatePopularPagesData(180),
		trafficSources: generateTrafficSourcesData(180)
	},
	"2y": {
		visitors: generateTwoYearData(),
		browsers: generateBrowserData(730),
		metrics: generateMetricsData(730),
		popularPages: generatePopularPagesData(730),
		trafficSources: generateTrafficSourcesData(730)
	}
};
