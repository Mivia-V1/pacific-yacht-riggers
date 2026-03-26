# Pacific Yacht Rigging Services — Website

Production website for **Pacific Yacht Rigging Services** — professional yacht rigging services across the South Pacific (Fiji, Tonga, Vanuatu).

**Live URL:** [https://pacificyachtriggers.com](https://pacificyachtriggers.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Cloudflare Pages (recommended) or Vercel
- **Forms:** Formspree
- **Analytics:** Google Analytics 4
- **Domain:** Registered on Cloudflare

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, mobile CTA bar)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── not-found.tsx       # Custom 404 page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page (6 sections with anchors)
│   ├── locations/page.tsx  # Locations page (Fiji, Tonga, Vanuatu)
│   ├── contact/
│   │   ├── page.tsx        # Contact page
│   │   └── ContactForm.tsx # Client-side form component
│   └── blog/
│       ├── page.tsx        # Blog index
│       ├── standing-rigging-inspection-guide/page.tsx
│       └── cyclone-season-preparation/page.tsx
├── components/
│   ├── Header.tsx          # Sticky header with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── MobileCTABar.tsx    # Sticky mobile Call + WhatsApp bar
│   ├── GoogleAnalytics.tsx # GA4 script loader
│   └── JsonLd.tsx          # JSON-LD structured data component
└── lib/
    ├── constants.ts        # Site config, contact info, services, locations
    ├── metadata.ts         # SEO metadata helpers
    └── structured-data.ts  # JSON-LD schema generators
```

## Configuration (Before Launch)

### 1. Formspree
1. Create a form at [formspree.io](https://formspree.io)
2. Update `FORMSPREE_URL` in `src/lib/constants.ts`

### 2. Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Update `GA4_ID` in `src/lib/constants.ts`

### 3. Images
Replace placeholder blocks with actual photographs:
- **Hero:** Yacht rigging work in the South Pacific
- **Services:** Action shots of each service type
- **Locations:** Marina/anchorage photos for Fiji, Tonga, Vanuatu
- **About:** Photo of Sammy working on a yacht
- **Blog:** Relevant header images for each article
- **Logo:** Replace the PYR text logo with the actual circular emblem logo

### 4. Content Placeholders
Search the codebase for `[PLACEHOLDER:` to find all content that needs real copy. Key areas:
- Service detailed descriptions
- Location detailed descriptions
- About page biography
- Testimonials
- Trust signal descriptions
- Blog article body content

### 5. Favicon & OG Image
Add to `public/`:
- `favicon.ico`
- `apple-touch-icon.png`
- `og-image.jpg` (1200x630px)
- `logo.png`

## Deployment to Cloudflare Pages

```bash
# Option 1: Direct deployment
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static

# Option 2: Connect GitHub repo to Cloudflare Pages dashboard
# Build command: npx @cloudflare/next-on-pages
# Build output directory: .vercel/output/static
```

### Alternative: Vercel
```bash
npx vercel --prod
```

## SEO Features

- Per-page meta titles and descriptions
- Open Graph and Twitter Card tags
- JSON-LD structured data (LocalBusiness, Service, Article, WebSite schemas)
- Auto-generated `sitemap.xml` and `robots.txt`
- Canonical URLs on all pages
- Semantic HTML with proper heading hierarchy
- Mobile-first responsive design

## Contact Details (from business card)

- **Chief Rigger:** Sammy
- **Phone (Fiji):** +679 7090091
- **WhatsApp:** +61 405084832
- **Email:** pyriggingservices@gmail.com
