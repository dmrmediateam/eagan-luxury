const milestones = [
	{
		title: "Waterfront Estates",
		description: "Bacopa Bay, Tierra Verde, Bayway Isles",
		value: "$187M",
		context: "Closed volume since 2021"
	},
	{
		title: "Sky Residences",
		description: "ONE, Signature Place, 400 Beach",
		value: "$86M",
		context: "High-rise transactions"
	},
	{
		title: "Buyer Relocations",
		description: "Clients relocating from NY, TX, and CA",
		value: "62%",
		context: "Of deals closed cash"
	}
];

export function Overview() {
	return (
		<section className="section-shell bg-paper">
			<div className="page-shell grid gap-6 md:grid-cols-3">
				{milestones.map((item) => (
					<div key={item.title} className="tile space-y-2">
						<p className="uppercase text-xs tracking-[0.3em] text-graphite">
							{item.title}
						</p>
						<p className="text-3xl">{item.value}</p>
						<p className="text-sm text-graphite/80">{item.context}</p>
						<p className="text-sm text-graphite/80">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

