import Link from "next/link";

export default function Hero() {
	return (
		<section className="section-shell bg-white">
			<div className="page-shell grid gap-8 lg:grid-cols-12 border border-line">
				<div className="tile lg:col-span-7 space-y-5">
					<p className="eyebrow">Proven Track Record</p>
					<div className="rule" />
					<h1 className="text-4xl md:text-5xl leading-tight">
						Results across waterfront estates, sky residences, and marina villas.
					</h1>
					<p className="text-base text-ink-soft max-w-2xl">
						Eagan Luxury operates as a boutique advisory practice. Below is a
						snapshot of recent sales, average premiums achieved, and client
						testimonials across St. Petersburg&apos;s marquee neighborhoods.
					</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<Link href="/contact" className="btn-primary">
							List with Eagan
						</Link>
						<Link href="/buyers" className="btn-outline">
							Buyer Advisory
						</Link>
					</div>
				</div>
				<div className="tile-muted lg:col-span-5 space-y-3">
					<p className="uppercase text-xs tracking-[0.3em] text-graphite">
						Highlights
					</p>
					<ul className="list-disc pl-5 text-sm text-graphite/80 space-y-2">
						<li>$325M+ closed luxury volume</li>
						<li>97% list-to-sale ratio in 2024</li>
						<li>Average 19 days on market</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

