import Link from "next/link";

const reportLinks = [
	{
		title: "Pinellas Luxury Insights",
		description: "14-page briefing covering absorption rates and pricing ladders.",
		href: "#"
	},
	{
		title: "Downtown Tower Index",
		description: "Quarterly look at resale performance for ONE, 400 Beach, and more.",
		href: "#"
	},
	{
		title: "Gulf Beaches Outlook",
		description: "Buyer origin maps and rental yield ranges for Tierra Verde &amp; Pass-a-Grille.",
		href: "#"
	}
];

export function Reports() {
	return (
		<section id="reports" className="section-shell bg-paper">
			<div className="page-shell grid gap-6 lg:grid-cols-12">
				<div className="tile lg:col-span-5 space-y-4">
					<p className="eyebrow">Reports</p>
					<div className="rule" />
					<p className="text-base text-ink-soft">
						Download our latest PDFs or contact the team for bespoke modeling on
						your property or development.
					</p>
				</div>
				<div className="lg:col-span-7 grid gap-4">
					{reportLinks.map((report) => (
						<div key={report.title} className="tile flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
							<div>
								<p className="text-lg">{report.title}</p>
								<p className="text-sm text-graphite/80">{report.description}</p>
							</div>
							<Link href={report.href} className="btn-outline mt-2 md:mt-0">
								View PDF
							</Link>
						</div>
					))}
					<div className="tile-muted">
						<p className="text-sm text-graphite/80">
							Need off-market comps or a pricing strategy for your residence?
						</p>
						<Link href="/contact" className="btn-primary mt-4 inline-flex">
							Request Custom Brief
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

