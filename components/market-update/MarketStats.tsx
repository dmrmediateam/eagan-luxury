const stats = [
	{
		segment: "Waterfront Estates",
		active: 34,
		pending: 12,
		median: "$4.1M"
	},
	{
		segment: "Sky Residences",
		active: 27,
		pending: 18,
		median: "$2.6M"
	},
	{
		segment: "Marina Villas",
		active: 19,
		pending: 7,
		median: "$3.0M"
	}
];

export function MarketStats() {
	return (
		<section className="section-shell bg-white">
			<div className="page-shell tile space-y-6">
				<div>
					<p className="eyebrow">Current Inventory</p>
					<div className="rule" />
				</div>
				<div className="overflow-x-auto">
					<table className="w-full text-left text-sm">
						<thead className="uppercase tracking-[0.3em] text-xs text-graphite border-b border-line">
							<tr>
								<th className="py-3 pr-4">Segment</th>
								<th className="py-3 pr-4">Active</th>
								<th className="py-3 pr-4">Pending</th>
								<th className="py-3 pr-4">Median Price</th>
							</tr>
						</thead>
						<tbody>
							{stats.map((row) => (
								<tr key={row.segment} className="border-b border-line last:border-none">
									<td className="py-4 pr-4 font-medium">{row.segment}</td>
									<td className="py-4 pr-4">{row.active}</td>
									<td className="py-4 pr-4">{row.pending}</td>
									<td className="py-4 pr-4">{row.median}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

