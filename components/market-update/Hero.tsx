import Link from "next/link";

export default function Hero() {
	return (
		<section className="section-shell bg-white">
			<div className="page-shell grid gap-8 lg:grid-cols-12 border border-line">
				<div className="tile lg:col-span-7 space-y-6">
					<p className="eyebrow">Monthly Intelligence</p>
					<div className="rule" />
					<h1 className="text-4xl md:text-5xl leading-tight">
						Gulf-to-Bay Market Brief
					</h1>
					<p className="text-base text-ink-soft max-w-2xl">
						This dashboard highlights pricing velocity, inventory health, and
						buyer demand for St. Petersburg, Tierra Verde, and the surrounding
						Gulf Beaches—updated every 30 days from MLS data and our in-house
						deals desk.
					</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<Link href="#reports" className="btn-primary">
							Download Full Report
						</Link>
						<Link href="/contact" className="btn-outline">
							Schedule Advisory Call
						</Link>
					</div>
				</div>
				<div className="tile-muted lg:col-span-5 space-y-3">
					<p className="uppercase text-xs tracking-[0.3em] text-graphite">
						Latest Release
					</p>
					<p className="text-2xl">March 2025</p>
					<p className="text-sm text-graphite">
						Data sourced from Stellar MLS, on-market activity, and Eagan Luxury
						private sales.
					</p>
					<ul className="list-disc pl-5 text-sm text-graphite/80 space-y-2 pt-3">
						<li>Waterfront single-family &amp; tower residences</li>
						<li>Absorption trends for $2M–$8M segment</li>
						<li>Buyer origin and cash share insights</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

