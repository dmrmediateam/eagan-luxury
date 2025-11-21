# Eagan Luxury Real Estate - Next.js App Router

A luxury real estate website built with Next.js (App Router) and Tailwind CSS, featuring a clean, elegant design system for St. Petersburg waterfront and sky residences.

## 🎨 Design System

### Color Palette
- **White**: `#ffffff` - Primary background
- **Black/Ink**: `#111111` - Text and headers
- **Accent**: `#B08D57` - Accent color for buttons, borders, highlights
- **Graphite**: `#666666` - Secondary text
- **Line**: `#e5e5e5` - Borders and dividers

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Space Grotesk (sans-serif)
- Light weight for elegant, minimal look
- Uppercase tracking for labels and small text

## 📁 Project Structure

```
Eagan-Luxury/
├── app/
│   ├── [community]/          # Dynamic community pages
│   │   ├── page.tsx          # Community main page
│   │   ├── magazine/         # Community magazine
│   │   ├── restaurants/      # Community restaurants
│   │   ├── businesses/       # Community businesses
│   │   ├── marinas/          # Community marinas
│   │   └── resources/        # Community resources
│   ├── about/                # About page
│   ├── blog/                 # Blog/journal
│   ├── contact/              # Contact page
│   ├── listings/             # Property listings
│   ├── sellers/              # Seller's guide
│   ├── communities/          # Communities overview
│   ├── components/           # App-specific components
│   └── layout.tsx            # Root layout
├── components/               # Shared components
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── HomeValuation.tsx    # Home valuation form
│   ├── FeaturedProperties.tsx
│   └── ui/                  # UI components
├── lib/                      # Utilities
│   ├── sanity.ts            # Sanity CMS client
│   ├── sanity-utils.ts      # Sanity utilities
│   └── email.ts             # Email utilities
├── sanity/                   # Sanity CMS
│   ├── schemas/             # Content schemas
│   └── queries/             # GROQ queries
└── public/                  # Static assets
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 🎯 Key Features

- **Dynamic Community Pages**: Featured communities with magazine, restaurants, businesses, marinas, and resources
- **Sanity CMS Integration**: Blog posts and content management
- **iHomeFinder Integration**: Property listings via iHomeFinder embed
- **Luxury Design System**: Clean, elegant, minimal aesthetic
- **SEO Optimized**: Structured data, sitemap, and metadata
- **Responsive Design**: Mobile-first, fully responsive

## 📝 Content Management

Content is managed through Sanity CMS:
- Blog posts
- Businesses
- Resources

Access Sanity Studio at `/studio` (redirects to hosted studio).

## 🔧 Tech Stack

- **Next.js 15+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **Sanity CMS**
- **Framer Motion** (animations)

## 📄 License

All rights reserved. Eagan Luxury Real Estate.
