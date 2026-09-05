# Wilder & Vine — concept mockup

A seven-page site for a **fictional** wedding and event florist in Asheville,
NC. Built by Atlas Studio as a portfolio piece — no such business exists, and
the prices, growers, staff and testimonials are all invented.

Live: https://wilder-vine-mockup.pages.dev

## Stack

Astro 5, static output, deployed to Cloudflare Pages. No framework islands —
the interactive pieces (nav drawer, hero slideshow, thumbnail gallery,
testimonial slider, seasonal tabs, lightbox, stats counter, hours pill) are one
small inline script in `src/layouts/Layout.astro`.

## Design system

- **Palette:** `wisteria-haze` from the Atlas Studio vault
- **Fonts:** Lora headings, Work Sans body
- Design tokens come from `src/styles/tokens.css`, a verbatim copy of the
  vault's `design-system/tokens.css`. `src/styles/wilder.css` overrides only
  the `--color-*` and `--font-*` values.

## What this build exercises

The first image-led site in the portfolio. It puts three gallery kits to work
on one page, each doing a different job:

- **MasonryGallery** — twenty shots at mixed aspect ratios, the browse view
- **ImageComparison** — the same ceremony arch in May and October, side by side
- **LightboxGallery** — ten detail crops that open full-screen

Plus **ThumbnailGallery** on the home page (one wedding, start to finish) and
**InfiniteCarousel** on Events. Before this build, `ThumbnailGallery` and
`InfiniteCarousel` had never been used in a mockup and `MasonryGallery` only
once.

## Structure

```
src/
├── components/   ImageSlot, PageHero, CtaBanner, FooterCta
├── data/         nav.ts (studio details + nav), content.ts, content2.ts
├── layouts/      Layout.astro — header, footer, and the shared script
├── pages/        index, weddings, events, gallery, seasonal, the-studio, enquire
└── styles/       tokens.css (vault copy), wilder.css (this site)
public/photos/    72 WebP photos, all Pexels-licensed
```

## The drawer breakpoint is 900px, and it was measured

Not a standard tablet width — the value comes from this site's own nav. At
901px the seven links plus the CTA still clear the wordmark by 26px; at 880px
the wordmark **reflows to two lines** rather than clipping, which no overflow
or width assertion detects. Measure from a served build and screenshot the bar;
see `atlas-studio-internal/guides/mockup-mobile-optimization.md`.

## Photos

72 WebP files in `public/photos/`, all from the Pexels API (free for commercial
use, no attribution required). Fetched with
`.claude/scripts/fetch-images.mjs`, judged as contact sheets rather than one at
a time, and converted to WebP q82.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview
```
