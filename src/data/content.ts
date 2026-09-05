/**
 * Page copy for Home, Weddings and Events.
 *
 * Every image slot carries both `slot` (the placeholder caption describing the
 * photo that belongs there) and `src` (the real photo once sourced), so a slot
 * renders correctly in either state.
 */

/* ===== HOME ===== */

export const HERO_SLIDES = [
  {
    cap: "Ceremony arch · Hawkesdene, September",
    slot: "PHOTO: full-bleed ceremony arch at golden hour",
    src: "/photos/hero-arch.webp",
    alt: "A flower-covered ceremony arch at golden hour",
  },
  {
    cap: "Long tablescape · The Cottages at Spring House Farm, June",
    slot: "PHOTO: full-bleed long tablescape, low arrangements and candles",
    src: "/photos/hero-table.webp",
    alt: "A long dinner table with low floral arrangements and candles",
  },
  {
    cap: "Wiring a boutonnière · Riverside Drive studio",
    slot: "PHOTO: full-bleed hands wiring a boutonnière in the studio",
    src: "/photos/hero-hands.webp",
    alt: "Hands wiring a boutonnière at a studio bench",
  },
  {
    cap: "Just-cut dahlias · 6am, cold room floor",
    slot: "PHOTO: full-bleed buckets of just-cut dahlias on a concrete floor",
    src: "/photos/hero-buckets.webp",
    alt: "Buckets of freshly cut dahlias on a concrete floor",
  },
];

export const STATS = [
  { num: 40, label: "weddings a year" },
  { num: 11, label: "local growers" },
  { num: 6, label: "seasons of flowers" },
  { num: 1, label: "cold room" },
];

export const PILLARS = [
  {
    num: "01",
    title: "We start with the season",
    body: "A June wedding and an October wedding cannot have the same flowers. The ones fighting the calendar always look it — thin stems, tight heads, a colour that reads slightly wrong in photographs.",
  },
  {
    num: "02",
    title: "One wedding a weekend",
    body: "So the people who met you are the people arriving with the flowers. No sub-contracted crew, no freelancer seeing your notes for the first time at 7am on a Saturday.",
  },
  {
    num: "03",
    title: "You'll get a real number early",
    body: "A full proposal with quantities and prices before you're asked to commit to anything. Stem counts, vessel counts, delivery, breakdown — all of it, itemised.",
  },
];

export const THUMB_GALLERY = [
  {
    slot: "PHOTO: bridal bouquet — garden roses, dahlia, scabiosa",
    src: "/photos/tg-bouquet.webp",
    alt: "A bridal bouquet of garden roses, dahlia and scabiosa",
    thumbLabel: "Bouquet",
    cap: "The bouquet, conditioned overnight and wrapped an hour before the car came.",
  },
  {
    slot: "PHOTO: ceremony arch, built on site",
    src: "/photos/tg-arch.webp",
    alt: "A ceremony arch built on site",
    thumbLabel: "Ceremony arch",
    cap: "The arch, built on site in about ninety minutes.",
  },
  {
    slot: "PHOTO: aisle meadow of loose stems",
    src: "/photos/tg-aisle.webp",
    alt: "Loose stems lining a ceremony aisle",
    thumbLabel: "Aisle meadow",
    cap: "Aisle meadow — cosmos, feverfew, and grasses cut that morning.",
  },
  {
    slot: "PHOTO: head table with low arrangements and candles",
    src: "/photos/tg-headtable.webp",
    alt: "A head table set with low arrangements and candles",
    thumbLabel: "Head table",
    cap: "Head table: nine low arrangements, eleven candles, no height blocking anyone.",
  },
  {
    slot: "PHOTO: cake flowers, close crop",
    src: "/photos/tg-cake.webp",
    alt: "Fresh flowers placed on a wedding cake",
    thumbLabel: "Cake flowers",
    cap: "Cake flowers, placed after the cake was stacked and not before.",
  },
  {
    slot: "PHOTO: the van being loaded at 6am",
    src: "/photos/tg-van.webp",
    alt: "A florist's van being loaded early in the morning",
    thumbLabel: "Loading the van",
    cap: "6:04am. Everything in the van, in the order it comes back out.",
  },
];

export const HOME_ALT = [
  {
    eyebrow: "Weddings",
    title: "Forty a year, one a weekend.",
    slot: "PHOTO: wedding work — bouquet and ceremony installation",
    src: "/photos/alt-weddings.webp",
    alt: "A bouquet resting beside a ceremony installation",
    intro:
      "A full wedding package starts with personal flowers — bouquets, boutonnières, corsages, flower crowns if you want them — and runs through to the last votive coming off the table.",
    list: [
      "Personals, conditioned and wrapped the morning of",
      "Ceremony installation, built on site and weighted for wind",
      "Reception tables, low enough to see across",
      "Delivery, setup, and same-night breakdown",
      "Rental vessels, collected by us so you're not returning anything",
    ],
    cta: { label: "Wedding collections & pricing", href: "/weddings" },
    flip: false,
  },
  {
    eyebrow: "Events",
    title: "Some of the best jobs are a Tuesday.",
    slot: "PHOTO: event work — low arrangements on a restaurant table",
    src: "/photos/alt-events.webp",
    alt: "Low floral arrangements on a restaurant table",
    intro:
      "Corporate dinners, gallery openings, memorials, milestone parties. Smaller, faster, often midweek — and usually booked with two weeks' notice rather than eighteen months.",
    list: [
      "Delivered and collected, so nobody on your staff deals with vases",
      "Weekly accounts for restaurants, hotels and offices",
      "Memorials handled quietly and without upsell",
      "Workshops in the studio, twelve people maximum",
    ],
    cta: { label: "Events & weekly accounts", href: "/events" },
    flip: true,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I sent a Pinterest board full of peonies for an October wedding and Marisol very kindly explained why that was a bad idea. She was right.",
    who: "Thea Brannigan",
    when: "October 2025",
  },
  {
    quote:
      "They arrived at 6am, built the arch in the rain, and came back at midnight to take it down. I never had to think about it once.",
    who: "Junius Okafor",
    when: "June 2025",
  },
  {
    quote:
      "The proposal had every stem count on it. I've never had a vendor be that straightforward about money.",
    who: "Delphine Marchetti",
    when: "September 2024",
  },
  {
    quote:
      "We asked for something that looks like the mountain in spring, and somehow that's exactly what showed up.",
    who: "Rowan Ashby",
    when: "April 2025",
  },
];

/* ===== WEDDINGS ===== */

export const WEDDING_STEPS = [
  {
    num: "01",
    title: "Enquire with your date and venue",
    body: "We'll tell you within a few days if we're free. If we're not, we'll say so plainly rather than leaving you waiting.",
  },
  {
    num: "02",
    title: "A call and a proposal",
    body: "An hour on the phone or at the studio, then an itemised proposal — quantities, stems, and a real number.",
  },
  {
    num: "03",
    title: "Book with a 30% retainer",
    body: "That holds the weekend. Nothing else is due until eight weeks out, and the price on the proposal is the price.",
  },
  {
    num: "04",
    title: "A check-in eight weeks out",
    body: "Final counts, table numbers, any changes. This is also where we tell you what the season is actually doing.",
  },
  {
    num: "05",
    title: "The week of",
    body: "Flowers land Wednesday, condition Thursday, build Friday. We deliver, install, and come back the same night for breakdown.",
  },
];

export const TIERS = [
  {
    name: "The Ceremony",
    tagline:
      "Personal flowers and one ceremony moment. For small weddings and elopements.",
    price: "$1,800",
    popular: false,
    features: [
      "Bouquet, plus up to four personals",
      "One ceremony piece — arch, urns, or aisle",
      "Delivery and setup",
      "Rental vessels included",
    ],
  },
  {
    name: "The Full Day",
    tagline: "Personals, ceremony, reception tables, installation and breakdown.",
    price: "$4,500",
    popular: true,
    badge: "Where most couples land",
    features: [
      "All personals, conditioned the morning of",
      "Ceremony installation, built on site",
      "Reception centrepieces and candles",
      "One statement piece",
      "Delivery, setup, same-night breakdown",
      "Rental vessels collected by us",
    ],
  },
  {
    name: "The Whole Weekend",
    tagline: "Everything in The Full Day, plus every other event around it.",
    price: "$9,000",
    popular: false,
    features: [
      "Everything in The Full Day",
      "Rehearsal dinner",
      "Welcome party",
      "Sunday brunch",
      "Reset and re-use between events where the flowers allow",
    ],
  },
];

/** Comparison rows. `vals` are [Ceremony, Full Day, Whole Weekend]. */
export const TIER_TABLE = [
  { feature: "Bouquets & boutonnières", vals: ["Up to 5", "All party", "All party"] },
  { feature: "Ceremony installation", vals: ["One piece", "Full install", "Full install"] },
  { feature: "Reception centrepieces", vals: [false, true, true] },
  { feature: "Statement piece", vals: [false, true, true] },
  { feature: "Delivery & setup", vals: [true, true, true] },
  { feature: "Same-night breakdown", vals: [false, true, true] },
  { feature: "Rehearsal dinner", vals: [false, "Add-on", true] },
  { feature: "Rental vessels included", vals: [true, true, true] },
];

export const WEDDING_FAQ = [
  {
    q: "How far in advance should we book?",
    a: "Nine to fourteen months for a Saturday in May, June, September or October — those four months are most of our year. Winter and midweek dates are often open inside six months. Ask anyway; people move dates.",
  },
  {
    q: "What if our flowers aren't in season?",
    a: "We'll tell you, and then we'll show you what does the same job that week. Peonies in September and ranunculus in July are the two we say no to most. It isn't precious — out-of-season stems cost two to three times as much and arrive tired.",
  },
  {
    q: "Do you have a minimum?",
    a: "$1,800 for a Saturday in peak season, which is roughly a bouquet, four personals and one ceremony piece. Midweek and winter dates have no minimum. Elopements are welcome.",
  },
  {
    q: "What happens if it rains?",
    a: "We build it anyway. Installations are weighted and wired for wind, and we carry a wet-weather plan for every arch — usually a covered position we agreed at the site visit. In June 2025 we built an arch in steady rain and came back at midnight for it.",
  },
  {
    q: "Can we do our own flowers for part of it?",
    a: "Yes. Plenty of couples buy their own bud vases or ask a relative to do the ceremony. We'll quote only what we're doing and stay out of the rest — but we won't install someone else's work, because we can't stand behind it.",
  },
  {
    q: "Do you travel outside Asheville?",
    a: "Within about ninety minutes: Black Mountain, Marshall, Burnsville, Brevard, Cashiers, Andrews. Past that we add mileage and, for anything over two hours, a night's lodging for the two of us — it goes on the proposal, itemised.",
  },
];

/* ===== EVENTS ===== */

export const SERVICES = [
  {
    price: "From $600",
    title: "Corporate dinners",
    body: "Low arrangements that people can see over, delivered and collected. Nobody on your staff handles a vase.",
    slot: "PHOTO: corporate dinner — low arrangements down a long table",
    src: "/photos/sc-corporate.webp",
    alt: "Low floral arrangements down a long dinner table",
  },
  {
    price: "From $450",
    title: "Gallery & shop openings",
    body: "Statement pieces that photograph — built tall, built once, and positioned where the camera will actually be.",
    slot: "PHOTO: gallery opening — statement piece on a plinth",
    src: "/photos/sc-gallery.webp",
    alt: "A tall floral statement piece on a plinth",
  },
  {
    price: "From $350",
    title: "Memorials",
    body: "We will take this off your plate entirely, and we do not upsell at funerals. One phone call, one price, delivered where it needs to be.",
    slot: "PHOTO: memorial spray, quiet and simple",
    src: "/photos/sc-memorial.webp",
    alt: "A simple memorial flower spray",
  },
  {
    price: "From $500",
    title: "Milestone parties",
    body: "Birthdays, anniversaries, retirements. Usually a centrepiece, a run of bud vases, and something for the door.",
    slot: "PHOTO: milestone party — bud vases and a centrepiece",
    src: "/photos/sc-party.webp",
    alt: "Bud vases and a centrepiece set for a party",
  },
  {
    price: "From $180/week",
    title: "Weekly accounts",
    body: "Restaurants, hotels, offices. Changed every Monday, with the old stems taken away and the vessels washed.",
    slot: "PHOTO: weekly account — bar arrangement in a restaurant",
    src: "/photos/sc-weekly.webp",
    alt: "A floral arrangement on a restaurant bar",
  },
  {
    price: "From $85 a head",
    title: "Workshops",
    body: "Seasonal, in the studio, twelve people maximum. You leave with what you made and a pair of clean shears if you want them.",
    slot: "PHOTO: workshop — twelve benches set with buckets and shears",
    src: "/photos/sc-workshop.webp",
    alt: "A workshop bench set with buckets and shears",
  },
];

export const MARQUEE = [
  {
    slot: "PHOTO: restaurant bar arrangement",
    src: "/photos/mq-bar.webp",
    alt: "A floral arrangement on a restaurant bar",
    cap: "Bar arrangement — weekly account, Biltmore Avenue",
  },
  {
    slot: "PHOTO: lectern piece at a conference",
    src: "/photos/mq-lectern.webp",
    alt: "A floral piece at the foot of a lectern",
    cap: "Lectern piece — annual meeting, March",
  },
  {
    slot: "PHOTO: long dinner table with low arrangements",
    src: "/photos/mq-longtable.webp",
    alt: "A long dinner table with low floral arrangements",
    cap: "Long table, forty covers — corporate dinner, February",
  },
  {
    slot: "PHOTO: shop window installation",
    src: "/photos/mq-window.webp",
    alt: "A floral installation in a shop window",
    cap: "Shop window — opening night, Lexington Avenue",
  },
  {
    slot: "PHOTO: memorial spray",
    src: "/photos/mq-memorial.webp",
    alt: "A memorial spray of garden roses and rosemary",
    cap: "Memorial spray — garden roses and rosemary",
  },
  {
    slot: "PHOTO: office reception desk arrangement",
    src: "/photos/mq-desk.webp",
    alt: "A floral arrangement on an office reception desk",
    cap: "Reception desk — weekly account, downtown",
  },
];

export const EVENT_ALT = [
  {
    eyebrow: "Weekly accounts",
    title: "How a standing order works.",
    slot: "PHOTO: Monday delivery — fresh vessels going into a restaurant",
    src: "/photos/alt-weekly.webp",
    alt: "Fresh floral vessels being carried into a restaurant",
    intro:
      "You tell us how many positions and roughly what money you want to spend. We arrive every Monday morning before service, swap the flowers, take the old stems away, and wash the vessels back at the studio.",
    list: [
      "From $180 a week for three to five positions",
      "Invoiced monthly, cancel with two weeks' notice",
      "Vessels are ours — nothing to store, nothing to replace",
    ],
    outro:
      "The flowers change every week because we buy what's cutting that week. In August that's dahlias and zinnias for weeks on end; in February it's anemone, forced branches and a lot of foliage. It costs the same either way.",
    flip: false,
  },
  {
    eyebrow: "Workshops",
    title: "Two hours at the bench.",
    slot: "PHOTO: workshop in progress — twelve people at the bench",
    src: "/photos/alt-workshop.webp",
    alt: "People arranging flowers at a long workshop bench",
    intro:
      "Twelve people, one long bench, and whatever we cut or bought that morning. We start by talking about the season, then you build — a hand-tied bunch in spring and summer, a wreath or a dried arrangement in the winter.",
    list: [
      "From $85 a head, all materials and a vessel included",
      "You take home what you made",
      "Roughly monthly, plus a run in late November and December",
      "Private bookings for groups of eight or more",
    ],
    cta: { label: "Ask about the next one", href: "#event-enquiry" },
    flip: true,
  },
];

export const LOGO_WALL = [
  { name: "THE HAVERLY", kind: "Hotel · Downtown" },
  { name: "SALT & SORREL", kind: "Restaurant · Biltmore Ave" },
  { name: "NINE PINES", kind: "Restaurant · West Asheville" },
  { name: "MERIDIAN GALLERY", kind: "Gallery · Lexington Ave" },
  { name: "THE FOUNDRY ROOM", kind: "Music venue · River Arts" },
  { name: "LAUREL RIDGE GARDENS", kind: "Botanical garden · Swannanoa" },
];
