# Q-Builders - AI Agent Guide

## Project Overview
One-page marketing site for a solo Denver custom-home builder. Static Astro site deployed on Cloudflare Pages.

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
    // ... 6-8 images
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
- Headings: Sans-serif, tracking-tight
- Body: Sans-serif, leading-relaxed
- All text left-aligned (except centered hero)

### Color Palette
- Primary: Earth tones (Colorado landscape inspired)
- Background: White/off-white
- Text: Dark gray (not pure black)
- Accents: Subtle gold/amber CTAs

### Layout
- Scroll-snap sections (`scroll-snap-type: y mandatory`)
- Mobile-first responsive
- Generous whitespace
- Max-width containers for readability

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

### New Gallery Images
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
