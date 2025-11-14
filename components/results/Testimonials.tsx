const quotes = [
	{
		body: "They positioned our Bacopa Bay estate with gallery-grade media and created competitive tension within 72 hours.",
		author: "Robert & Elaine B.",
		detail: "Sellers • Bacopa Bay"
	},
	{
		body: "Eagan Luxury handled everything remotely while we were abroad—contractors, staging, and a record closing.",
		author: "Bruce T.",
		detail: "Seller • St. Petersburg Waterfront"
	}
];

export function Testimonials() {
	return (
		<section className="section-shell bg-paper">
			<div className="page-shell grid gap-6 md:grid-cols-2">
				{quotes.map((quote) => (
					<div key={quote.author} className="tile">
						<p className="text-lg leading-8 text-ink-soft">“{quote.body}”</p>
						<div className="mt-4">
							<p className="font-medium">{quote.author}</p>
							<p className="text-sm text-graphite/80">{quote.detail}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

