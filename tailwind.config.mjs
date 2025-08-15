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
				// Weichert design system colors
				weichert: {
					white: "#FFFFFF",
					offwhite: "#FAF9F6",
					black: "#000000",
					charcoal: "#222223",
					darkgray: "#222223",
					mediumgray: "#222223",
					lightgray: "#E5E5E5",
					// Brand colors
					red: "#890300",
					darkred: "#660200",
					lightred: "#A61C18",
					yellow: "#FFD700",
					darkyellow: "#FFB300",
					lightyellow: "#FFF59D",
					// Legacy colors (keeping for backward compatibility)
					darknavy: "#001f3f",
					oldgold: "#B08D57",
					silver: "#A9A9A9"
				},
				// Secondary color system
				secondary: {
					DEFAULT: "#FFD700",
					dark: "#FFB300",
					light: "#FFF59D"
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
				weichert: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
				"weichert-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
			},
			backgroundImage: {
				"gradient-weichert": "linear-gradient(to right, #F5F5F5, #FFFFFF)"
			}
		}
	},
	plugins: []
};
