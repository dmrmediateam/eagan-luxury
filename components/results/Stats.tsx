const sales = [
	{
		address: "Harbour Isle Marina Estate",
		location: "St. Petersburg Waterfront",
		price: "$5.2M",
		days: 14,
		result: "104% of list"
	},
	{
		address: "Skyline Reserve Penthouse",
		location: "Downtown Arts District",
		price: "$3.3M",
		days: 18,
		result: "Off-market buyer"
	},
	{
		address: "Marina Bay Villa Collection",
		location: "Tierra Verde",
		price: "$2.8M",
		days: 21,
		result: "Cash, record price"
	}
];

export function Stats() {
	return (
		<section className="section-shell bg-white">
			<div className="page-shell tile space-y-6">
				<div>
					<p className="eyebrow">Recent Sales</p>
					<div className="rule" />
				</div>
				<div className="grid gap-4">
					{sales.map((sale) => (
						<div key={sale.address} className="border border-line p-4 grid gap-2 md:grid-cols-4 md:items-center">
							<div>
								<p className="text-lg">{sale.address}</p>
								<p className="text-sm text-graphite/80">{sale.location}</p>
							</div>
							<p className="text-sm uppercase tracking-[0.3em]">{sale.price}</p>
							<p className="text-sm text-graphite/80">{sale.days} days on market</p>
							<p className="text-sm text-graphite">{sale.result}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

