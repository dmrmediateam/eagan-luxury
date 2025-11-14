# Real Estate Website - Next.js App Router

A clean, elegant real estate website built with Next.js (App Router) and Tailwind CSS, featuring a white/black/dark-gold color scheme. This is a structural clone of realestatebycherylnj.com with placeholder content ready for customization.

## 🎨 Design System

### Color Palette
- **White**: `#ffffff` - Primary background
- **Black**: `#111111` - Text and headers
- **Gold**: `#b89649` - Accent color for buttons, borders, highlights
- **Gold Dark**: `#a27e2d` - Hover states
- **Gray Light**: `#f9f9f9` - Alternate section backgrounds
- **Gray**: `#e5e5e5` - Borders and dividers
- **Gray Dark**: `#666666` - Secondary text

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Light weight (300) for elegant, minimal look
- Body: Regular weight (400)
- Uppercase tracking for labels and small text

## 📁 Project Structure

```
cheryl-clone-pt2/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   └── page.tsx          # Blog/insights page
│   ├── buyers/
│   │   └── page.tsx          # Buyer's guide page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── listings/
│   │   └── page.tsx          # Property listings page
│   ├── sellers/
│   │   └── page.tsx          # Seller's guide page
│   ├── globals.css           # Global styles & Tailwind
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── page.tsx              # Homepage
├── components/
│   ├── AboutStats.tsx        # About section with statistics
│   ├── CallToAction.tsx      # CTA section with background image
│   ├── Communities.tsx       # Service areas section
│   ├── ContactForm.tsx       # Contact form with info panel
│   ├── Footer.tsx            # Footer with multiple columns
│   ├── Hero.tsx              # Hero section with overlay
│   ├── MarketInsights.tsx    # Blog posts/market insights grid
│   ├── MeetAgent.tsx         # Agent profile section
│   ├── Navbar.tsx            # Navigation bar
│   ├── SearchProperties.tsx  # Property search placeholder
│   └── Testimonials.tsx      # Testimonials carousel
├── public/
│   └── images/
│       └── no-image.svg      # Placeholder image
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # This file
```

## 🧩 Page Sections (Homepage)

The homepage follows this structure matching the reference site:

1. **Hero** - Full-screen background with overlay text and CTA buttons
2. **Search Properties** - Placeholder for iHomeFinder integration
3. **About with Stats** - Brief introduction with key statistics
4. **Meet Agent** - Agent profile with photo and biography
5. **Communities** - Service areas with descriptions
6. **Market Insights** - Blog posts grid
7. **Testimonials** - Client testimonials carousel
8. **Contact Form** - Contact information and message form
9. **Call to Action** - Final CTA with stats and buttons

## ✅ Component Features

### Navbar
- Sticky header with white background
- Links: Buyers, Sellers, About, Contact
- Gold underline animation on hover
- Mobile responsive with hamburger menu

### Footer
- White background with gold top border
- 5-column layout: Logo/Info, Navigate, Resources, Communities, Contact
- Legal & compliance section
- Social media placeholders

### Buttons
- `.btn-primary` - Gold background, white text
- `.btn-outline` - Gold border, transparent background
- Uppercase text with wide tracking

## 🚀 Getting Started

### Installation

```bash
npm install
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

## 📝 TODO Items

All components include `TODO` comments marking where customization is needed:

### High Priority
- [ ] Replace all `[Placeholder Text]` with actual content
- [ ] Add real agent/company name throughout
- [ ] Replace `/images/no-image.svg` with actual images
- [ ] Add actual contact information (phone, email, address)
- [ ] Update service areas in Communities component
- [ ] Add actual statistics and achievements

### Integrations Needed
- [ ] **iHomeFinder/MLS Integration** - Property search and listings
  - `SearchProperties.tsx`
  - `app/listings/page.tsx`
- [ ] **Testimonials Data** - Connect to review source or CMS
  - `Testimonials.tsx`
- [ ] **Contact Form Backend** - Email service integration
  - `ContactForm.tsx`
- [ ] **Blog/CMS Integration** - For market insights
  - `MarketInsights.tsx`
  - `app/blog/page.tsx`

### Content Updates
- [ ] Hero section background video or image
- [ ] Agent professional headshot
- [ ] Service area descriptions
- [ ] About page biography and credentials
- [ ] Legal disclaimers and licensing information
- [ ] Social media links
- [ ] Logo and branding assets

### SEO & Meta
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add proper alt text for all images
- [ ] Configure sitemap
- [ ] Add structured data for real estate

## 🎯 Key Files to Customize

1. **`tailwind.config.js`** - Already configured with color system
2. **`app/globals.css`** - Button styles and utilities defined
3. **`components/Navbar.tsx`** - Update logo and navigation links
4. **`components/Hero.tsx`** - Add hero image/video and content
5. **`components/Footer.tsx`** - Add real links and information
6. **`app/page.tsx`** - Main homepage structure (already assembled)

## 🔧 Utility Classes

Custom Tailwind utilities available:

- `.section-padding` - Consistent section spacing (py-20)
- `.container-max` - Max-width container with auto margins
- `.btn-primary` - Gold button style
- `.btn-outline` - Gold outlined button
- `.heading-line` - Gold underline decoration

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## 🎨 Design Principles

- **Minimalism**: Clean layouts with generous white space
- **Luxury Feel**: Gold accents, light typography weights
- **Readability**: High contrast (black on white)
- **Professional**: Structured sections, clear hierarchy
- **Modern**: Sharp corners (rounded-sm), subtle shadows

## 📦 Dependencies

- Next.js 14+ (App Router)
- React 18+
- Tailwind CSS 3+
- TypeScript

## 🔍 Search & Replace Guide

To quickly customize, search and replace these patterns:

- `[Agent Name]` → Your agent's name
- `[Agent/Company Name]` → Your business name
- `[Phone Number]` → Your contact number
- `[Email Address]` → Your email
- `[Office Address]` → Your office location
- `[Area 1]` through `[Area 6]` → Your service areas
- `/images/no-image.svg` → Actual image paths

## 📄 License

This is a structural template. All content should be replaced with your own.

## 🤝 Support

For issues or questions about the structure, refer to the TODO comments in each component.

---

**Note**: This is a clean structural implementation with no mock data. All placeholder text is clearly marked with `[brackets]` and `// TODO` comments for easy identification and replacement.
