// Renders the Wilder & Vine brand assets. Run from the repo root:
//   node .brand/build-assets.mjs
//
// sharp isn't a dependency here (the site itself doesn't need it), so this
// borrows the vault's copy by explicit path. NODE_PATH does NOT work for this —
// it applies to CommonJS resolution only, and this file is ESM, so the import
// has to go through createRequire.
//
// THE MARK: a dahlia rosette — two rings of pointed petals around a sage core.
// Dahlias are the flower the site's copy keeps returning to (September is "our
// single best month"; "three weeks of the year, and worth it"), so the mark
// names the thing the business is actually about.
//
// WHY SVG AND NOT THE GEMINI RASTER. The concept grid's winning cell was a
// dense concentric-petal rosette — lovely at 96px, an unreadable purple blob at
// 32 and below, which is exactly the size a favicon has to survive. This is the
// same mark simplified to two petal rings so the silhouette holds when it
// shrinks. Drawn as SVG, which also means it recolours cleanly for the
// two-state header swap below instead of needing an alpha-mask flatten.
// The original crop is kept at .brand/_emblem-crop.png for reference.
//
// TWO-STATE HEADER (the Lumen case, see mockup-logo-workflow.md Step 4). The
// header is transparent over the hero and turns WHITE on scroll, while the
// footer is near-black. One colourway can't do all three:
//   emblem-light.png  cream petals  -> over the hero, and in the dark footer
//   emblem-plum.png   plum petals   -> on the white scrolled bar
import { createRequire } from "node:module";
const require = createRequire(
  "c:/Users/Rosendo Torres/Documents/altas-studio/atlas-studio-internal/"
);
const sharp = require("sharp");

const WIST  = "#8678ad";   // --color-primary
const PLUM  = "#6a5d8f";   // --color-primary-dark
const SAGE  = "#9caf88";   // --color-secondary
const DARK  = "#221f2c";   // --color-dark
const CREAM = "#f7f6f9";   // --color-cream
const SERIF = "'Lora', Georgia, 'Times New Roman', serif";
const SANS  = "'Work Sans', Helvetica, Arial, sans-serif";

// A petal that comes to a point at its outer end. Round petals read as a
// generic daisy; the taper is what makes it a dahlia, and it's what keeps the
// silhouette legible once the detail is gone at small sizes.
const petal = (rIn, rOut, w) =>
  `M0,${-rIn} C${w},${-rIn - (rOut - rIn) * 0.35} ${w * 0.75},${-rOut + (rOut - rIn) * 0.28} 0,${-rOut} ` +
  `C${-w * 0.75},${-rOut + (rOut - rIn) * 0.28} ${-w},${-rIn - (rOut - rIn) * 0.35} 0,${-rIn} Z`;

const ring = (n, rIn, rOut, w, fill, rot = 0) =>
  Array.from({ length: n }, (_, i) =>
    `<path d="${petal(rIn, rOut, w)}" fill="${fill}" transform="rotate(${(i / n) * 360 + rot})"/>`
  ).join("");

/** The mark. `tile` fills a rounded square behind it (favicon/PWA only). */
const dahlia = ({ outer, inner, core = SAGE, tile = null }) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-50 -50 100 100">
  ${tile ? `<rect x="-50" y="-50" width="100" height="100" rx="18" fill="${tile}"/>` : ""}
  ${ring(11, 22, 46, 10.5, outer, 16.4)}
  ${ring(9, 9, 27, 8.5, inner, 0)}
  <circle cx="0" cy="0" r="6" fill="${core}"/>
</svg>`;

// Colourways.
const PLUM_MARK  = dahlia({ outer: PLUM,  inner: WIST });               // on white/cream
const LIGHT_MARK = dahlia({ outer: CREAM, inner: "#cfc8e0" });          // on dark / over the hero
const TILE_MARK  = dahlia({ outer: WIST,  inner: "#a99cc7", tile: DARK }); // favicon: needs its own ground

const R = (svg, size) => sharp(Buffer.from(svg), { density: 400 }).resize(size, size);
const out = [];

// ── Favicons / PWA / Apple touch ──────────────────────────────────────────
// These get the dark tile: a browser tab, an installed-app grid and an iOS home
// screen all sit on backgrounds we don't control, and iOS composites away alpha
// entirely — so the mark carries its own ground rather than hoping.
await R(TILE_MARK, 32).webp({ quality: 92 }).toFile("public/favicon-32.webp");   out.push("favicon-32.webp");
await R(TILE_MARK, 192).webp({ quality: 90 }).toFile("public/icon-192.webp");    out.push("icon-192.webp");
await R(TILE_MARK, 512).webp({ quality: 90 }).toFile("public/icon-512.webp");    out.push("icon-512.webp");
await R(TILE_MARK, 512).png().toFile("public/icon-512.png");                     out.push("icon-512.png");
await R(TILE_MARK, 180).png().toFile("public/apple-touch-icon.png");             out.push("apple-touch-icon.png");

// SVG favicon — the mark is vector, so modern browsers can have the real thing.
await import("node:fs/promises").then(fs =>
  fs.writeFile("public/favicon.svg", TILE_MARK.replace('width="100" height="100" ', ""))
);
out.push("favicon.svg");

// ── On-site marks, transparent (header + footer) ──────────────────────────
await R(LIGHT_MARK, 512).png().toFile("public/emblem-light.png"); out.push("emblem-light.png");
await R(PLUM_MARK, 512).png().toFile("public/emblem-plum.png");   out.push("emblem-plum.png");

// ── OG / social share card, 1200x630 ──────────────────────────────────────
// Cream card, mark above a serif wordmark, sage rule, tagline, meta strip.
// Mirrors the site's own typography rather than inventing a second identity.
const MARK_PX = 132;
const ogMark = await R(PLUM_MARK, MARK_PX).png().toBuffer();
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${WIST}"/>
  <text x="600" y="356" text-anchor="middle" font-family="${SERIF}" font-size="86" font-weight="600" fill="${DARK}">Wilder &amp; Vine</text>
  <text x="600" y="404" text-anchor="middle" font-family="${SANS}" font-size="23" font-weight="600" letter-spacing="9" fill="${PLUM}">FLORAL · ASHEVILLE, NORTH CAROLINA</text>
  <line x1="500" y1="446" x2="700" y2="446" stroke="${SAGE}" stroke-width="2"/>
  <text x="600" y="508" text-anchor="middle" font-family="${SERIF}" font-size="33" font-style="italic" fill="${DARK}">Flowers that look like where they came from.</text>
  <text x="100" y="588" font-family="${SANS}" font-size="19" font-weight="600" letter-spacing="3.2" fill="${PLUM}">WEDDINGS · EVENTS · SEASONAL</text>
  <text x="1100" y="588" text-anchor="end" font-family="${SANS}" font-size="19" font-weight="600" letter-spacing="3.2" fill="${SAGE}">CONCEPT BUILD</text>
</svg>`;
const ogBase = await sharp(Buffer.from(og), { density: 150 }).resize(1200, 630).png().toBuffer();
const ogCard = await sharp(ogBase)
  .composite([{ input: ogMark, left: Math.round((1200 - MARK_PX) / 2), top: 128 }])
  .png().toBuffer();
await sharp(ogCard).png().toFile("public/og-image.png");                  out.push("og-image.png");
await sharp(ogCard).webp({ quality: 88 }).toFile("public/og-image.webp"); out.push("og-image.webp");

console.log("wrote:", out.join(", "));
