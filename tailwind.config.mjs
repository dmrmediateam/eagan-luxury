/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				// Luxury design system colors - Updated brand palette
				luxury: {
					white: "#FFFFFF",
					offwhite: "#FAF9F6",
					black: "#000000",
					charcoal: "#1A1A1A",
					darkgray: "#333333",
					mediumgray: "#666666",
					lightgray: "#E5E5E5",
					// Brand colors
					red: "#890300",
					darkred: "#660200",
					lightred: "#A61C18",
					gold: "#FFDF5E",
					darkgold: "#E6C652",
					lightgold: "#FFF4B8",
					// Legacy colors (keeping for backward compatibility)
					darknavy: "#001f3f",
					oldgold: "#B08D57",
					silver: "#A9A9A9"
				}
			},
			fontFamily: {
				serif: ["Playfair Display", "serif"]
			},
			spacing: {
				128: "32rem",
				144: "36rem"
			},
			boxShadow: {
				luxury: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
				"luxury-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
			},
			backgroundImage: {
				"gradient-luxury": "linear-gradient(to right, #F5F5F5, #FFFFFF)"
			}
		}
	},
	plugins: []
};
