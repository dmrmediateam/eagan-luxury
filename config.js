export const config = {
	cdn: "https://d3gxodpb7stuxj.cloudfront.net/johnallen/",

	// Property listings with video and thumbnail references for easy access
	// Usage examples:
	// Video: <source src={config.properties.foster1460.vid} type="video/mp4" />
	// Thumbnail: <Image src={config.properties.foster1460.thumb} alt="Property thumbnail" width={640} height={360} />
	properties: {
		foster1460: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/1460foster-compressed.mp4",
			thumb: "/thumb/1460foster.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/1460foster.mov"
		},
		franz225: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/225franz-compressed.mp4",
			thumb: "/thumb/225franz.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/225franz.mp4"
		},
		foster2324: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/2324foster-compressed.mp4",
			thumb: "/thumb/2324foster.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/2324foster.mp4"
		},
		veeder3000: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3000veeder-compressed.mp4",
			thumb: "/thumb/3000veeder.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3000veeder.mp4"
		},
		hwy3245: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3245hwy-compressed.mp4",
			thumb: "/thumb/3245hwy.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3245hwy.mp4"
		},
		kortum350: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/350kortum-compressed.mp4",
			thumb: "/thumb/350kortum.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/350kortum.mp4"
		},
		silverado4189: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/4189silverado-compressed.mp4",
			thumb: "/thumb/4189silverado.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/4189silverado.mp4"
		},
		lonmel777: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/777lonmel-compressed.mp4",
			thumb: "/thumb/777lonmel.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/777lonmel.mp4"
		},
		franz8495: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8495franz-compressed.mp4",
			thumb: "/thumb/8495franz.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8495franz.mov"
		},
		franz8507: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz-compressed.mp4",
			thumb: "/thumb/8507franz.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz.mp4"
		},
		franz8507_2: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz2-compressed.mp4",
			thumb: "/thumb/8507franz2.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz2.mov"
		},
		dahlia90: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/90dahlia-compressed.mp4",
			thumb: "/thumb/90dahlia.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/90dahlia.mov"
		},
		petrified971: {
			vid: "https://d3gxodpb7stuxj.cloudfront.net/agoodrich/971petrified-compressed.mp4",
			thumb: "/thumb/971petrified.webp",
			originalVid:
				"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/971petrified.mov"
		},
		// Additional valley image
		franz8495valley: {
			thumb: "/thumb/8495franzvalley.webp"
		}
	},

	// For backward compatibility - will be deprecated in future updates
	videos: {
		foster1460:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/1460foster-compressed.mp4",
		franz225:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/225franz-compressed.mp4",
		foster2324:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/2324foster-compressed.mp4",
		veeder3000:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3000veeder-compressed.mp4",
		hwy3245:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3245hwy-compressed.mp4",
		kortum350:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/350kortum-compressed.mp4",
		silverado4189:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/4189silverado-compressed.mp4",
		lonmel777:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/777lonmel-compressed.mp4",
		franz8495:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8495franz-compressed.mp4",
		franz8507:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz-compressed.mp4",
		franz8507_2:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz2-compressed.mp4",
		dahlia90:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/90dahlia-compressed.mp4",
		petrified971:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/971petrified-compressed.mp4",

		// Original uncompressed versions (use only when needed)
		foster1460_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/1460foster.mov",
		franz225_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/225franz.mp4",
		foster2324_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/2324foster.mp4",
		veeder3000_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3000veeder.mp4",
		hwy3245_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/3245hwy.mp4",
		kortum350_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/350kortum.mp4",
		silverado4189_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/4189silverado.mp4",
		lonmel777_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/777lonmel.mp4",
		franz8495_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8495franz.mov",
		franz8507_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz.mp4",
		franz8507_2_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/8507franz2.mov",
		dahlia90_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/90dahlia.mov",
		petrified971_original:
			"https://d3gxodpb7stuxj.cloudfront.net/agoodrich/971petrified.mov"
	}
};
