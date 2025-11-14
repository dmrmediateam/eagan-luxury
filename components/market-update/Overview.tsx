const highlights = [
	{
		title: "Inventory",
		value: "3.1 Months",
		detail:
			"Balanced supply after two consecutive quarters below 2 months of inventory."
	},
	{
		title: "Median List",
		value: "$3.4M",
		detail: "Up 6% month-over-month; luxury condos outpaced single-family estates."
	},
	{
		title: "Contract Velocity",
		value: "27 Days",
		detail: "Average market time for listings priced $2M–$4M with water access."
	}
];

export function Overview() {
	return (
		<section className="section-shell bg-paper">
			<div className="page-shell grid gap-6 lg:grid-cols-12">
				<div className="tile lg:col-span-4 space-y-4">
					<p className="eyebrow">Snapshot</p>
					<div className="rule" />
					<p className="text-base text-ink-soft">
						Our research desk blends MLS data with private listing intel. Use
						these indicators to gauge seller leverage and buyer urgency across
						Pinellas County luxury neighborhoods.
					</p>
				</div>
				<div className="lg:col-span-8 grid gap-4 md:grid-cols-3">
					{highlights.map((item) => (
						<div key={item.title} className="tile">
							<p className="uppercase text-xs tracking-[0.3em] text-graphite">
								{item.title}
							</p>
							<p className="text-3xl mt-3">{item.value}</p>
							<p className="text-sm text-graphite/80 mt-2">{item.detail}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

