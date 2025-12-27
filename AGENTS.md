# Q-Builders - AI Agent Guide

## Project Overview
One-page marketing site for a solo Denver custom-home builder. Static Astro site deployed on Cloudflare Pages.

## Design Philosophy
Premium, sophisticated aesthetic with refined typography, smooth animations, and a luxurious color palette. The design emphasizes craftsmanship and quality through generous whitespace, elegant typography hierarchy, and subtle micro-interactions. Scroll snapping provides clear section navigation while maintaining natural feel.

## Tech Stack

### Framework & Build
- **Astro 5.x** - Static site generation (SSG)
  - Output: `static` (configured in astro.config.mjs)
  - No SSR, no hydration needed

### Styling
- **Tailwind CSS 4.x** - Via Vite plugin (@tailwindcss/vite)
  - Imported in `src/styles/global.css`: `@import "tailwindcss";`
  - Configured in `astro.config.mjs` with Vite plugin
  - Custom fonts, colors, etc. via Tailwind CSS configuration

### Images
- **HTML5 `<picture>` element** with AVIF/WebP srcset
  - Astro's built-in `Image` component not used (static CDN approach)
  - Placeholders: Unsplash source URLs
  - Production: Optimize with `sharp` CLI or Cloudflare Images

### Hosting
- **Cloudflare Pages** - Git push-to-deploy via `wrangler.jsonc`

## File Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base HTML template + Tailwind CDN
├── components/               # Reusable sections (optional)
├── pages/
│   └── index.astro           # Main landing page (all sections)
├── styles/
│   └── global.css            # Custom CSS overrides (minimal)
public/
└── assets/                   # Static assets (favicon, etc.)
```

## Content Editing

### Easy-to-Edit Configuration
All text content and image URLs are in `src/config.ts` - simply edit this file to update all content:

```javascript
const config = {
  hero: {
    headline: "Custom Homes Built for Colorado Living",
    subline: "38 homes across Denver since 2014",
    backgroundImage: "...",
    email: "hello@qbuilders.com"
  },
  about: {
    name: "John Smith",
    photo: "...",
    bio: "Two-sentence bio goes here.",
    stats: [
      { label: "38 Homes Built", value: "2014–Today" }
    ]
  },
  gallery: [
    { src: "...", alt: "..." },
    // ... 6-8 images (sample work, not comprehensive portfolio)
  ],
  testimonials: [
    { quote: "...", name: "Sarah", neighborhood: "LoDo" },
    // ... 4-6 testimonials
  ]
};
```

### Image Updates
Replace placeholder URLs with your own:
- Option 1: Host in `public/images/` and reference as `/images/filename.jpg`
- Option 2: Use Unsplash source URLs with your keywords
- Option 3: Cloudflare Images CDN for production

## Design System

### Typography
- Headings: Large, dramatic scales (up to 8xl), tight tracking, bold weights
- Body: Clean sans-serif, relaxed leading for readability
- Accents: Uppercase tracking for labels/sections
- Hierarchy: Clear visual separation with size, weight, and spacing

### Color Palette
- Primary: Rich stone tones (stone-900, stone-800, stone-50)
- Accent: Amber/gold for emphasis (amber-600, amber-500)
- Neutral: Stone grays for text (stone-600, stone-500)
- Background: White with subtle stone-50 variations
- Dark sections: Stone-900 with lighter overlays

### Layout & Spacing
- Generous vertical spacing (py-32 for major sections)
- Max-width containers (max-w-7xl for full width, max-w-4xl for centered)
- Strategic use of negative space
- Responsive grid systems
- Scroll snapping to sections (`snap-y snap-mandatory`, `snap-start`)

### Animations & Interactions
- Hero fade-in animations with staggered timing
- Hover scale effects on gallery images
- Smooth scroll behavior globally
- Fixed navbar with scroll-triggered appearance
- Backdrop blur on navigation
- Gradient overlays on hero images
- Subtle bounce on scroll indicator
- Group hover states for interactive elements
- Performance-optimized scroll handler with requestAnimationFrame

### Accessibility
- ARIA labels on navigation and interactive elements
- `aria-labelledby` for section headings
- `aria-hidden` on decorative elements
- Semantic HTML: `<blockquote>` and `<figcaption>` for testimonials
- Definition lists (`<dt>`, `<dd>`) for stats
- Proper heading hierarchy
- Keyboard-accessible links with clear labels

### Visual Elements
- Large featured image in gallery (2x2 span)
- Offset background elements for depth (about section)
- Clean testimonial cards without stars
- Icons/arrows for directional CTAs
- Stats in contact section

## Deployment

### Local Development
```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Cloudflare Pages Deploy
```bash
git push origin main    # Auto-deploys via Cloudflare Pages
```

## Best Practices

1. **Keep it static** - No client-side JavaScript, no hydration
2. **Performance first** - Optimize images (AVIF/WebP), lazy-load below-fold
3. **Accessibility** - Alt text, semantic HTML, keyboard navigation
4. **SEO basics** - Meta tags, Open Graph, structured data
5. **Incremental updates** - Edit config object, no need to touch layout code

## Adding New Content

### New Gallery Images (Sample Work)
Add to `gallery` array in config:
```javascript
{ src: "/images/new-home.jpg", alt: "Modern kitchen in Cherry Creek" }
```

### New Testimonials
Add to `testimonials` array:
```javascript
{ quote: "Great experience!", name: "Mike", neighborhood: "Highland" }
```

### New Stats
Add to `about.stats` array:
```javascript
{ label: "Custom Kitchens", value: "100%" }
```

## Notes

- No forms needed (mailto only)
- No analytics configured yet (add Cloudflare Web Analytics if needed)
- No blog or CMS (static content only)
- Simple, maintainable, performant

## SEO Features

### Meta Tags
- Optimized title and meta descriptions
- Keywords for custom home building in Denver
- Robots meta tag with proper directives
- Theme color for mobile browsers

### Search Engine Optimization
- Sitemap.xml (generates when site URL is configured)
- Robots.txt (updates when site URL is configured)
- Canonical URLs (active when site URL is configured)
- Open Graph tags for social sharing
- Twitter Card tags

### Configuration
- Add your domain in `astro.config.mjs` (uncomment `site` line)
- Sitemap and canonical URLs will activate automatically

## Production Quality Checklist

### Performance
- Image optimization with `loading="lazy"` for below-fold images
- `fetchpriority="high"` for above-fold hero image
- Passive scroll listeners for better performance
- requestAnimationFrame for smooth animations

### Accessibility (WCAG AA Compliant)
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<header>`, `<figure>`, `<blockquote>`, `<dl>`)
- ARIA labels on all interactive elements
- `aria-labelledby` for section headings
- `aria-hidden` for decorative elements
- Proper alt text on all images
- Definition lists for key-value stats
- Keyboard-navigable links with descriptive labels

### SEO
- Proper meta tags (description, keywords, robots)
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic heading hierarchy (h1, h2)
- Title and description props for customization
- Sitemap.xml (requires site URL in config)
- Robots.txt (requires site URL in config)
- Canonical URLs (requires site URL in config)
- Proper viewport meta tag

### Code Quality
- TypeScript interfaces for component props
- Clean component structure
- No console.logs or debug code
- Modular, maintainable code organization
- Production-ready Astro configuration
