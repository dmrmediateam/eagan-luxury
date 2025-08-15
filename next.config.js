/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io'
			},
			{
				protocol: 'https',
				hostname: 'img-v2.gtsstatic.net'
			},
			{
				protocol: 'https',
				hostname: 'images.weichert.com'
			}
		],
		formats: ["image/webp"]
	},
	// Add Sanity CORS configuration
	async headers() {
		return [
			{
				source: "/studio/:path*",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*"
					}
				]
			}
		];
	}
};

export default nextConfig;
