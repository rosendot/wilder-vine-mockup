export const STUDIO = {
  name: "Wilder & Vine",
  tagline: "Floral · Asheville",
  blurb: "Wilder & Vine. Wedding and event flowers, Asheville, since 2018.",
  address1: "114 Riverside Drive",
  address2: "Asheville, NC 28801 — by appointment",
  phone: "(828) 555-0173",
  phoneHref: "tel:+18285550173",
  email: "hello@wilderandvine.com",
  footTagline: "We buy from people we can drive to.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Weddings", href: "/weddings" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Seasonal", href: "/seasonal" },
  { label: "The Studio", href: "/the-studio" },
  { label: "Enquire", href: "/enquire" },
];

export const FOOTER_LINKS = {
  weddings: [
    { label: "What's included", href: "/weddings" },
    { label: "Collections & pricing", href: "/weddings#pricing" },
    { label: "How the day runs", href: "/weddings#process" },
    { label: "Recent weddings", href: "/gallery" },
    { label: "Check your date", href: "/enquire" },
  ],
  studio: [
    { label: "Visit the studio", href: "/enquire#map" },
    { label: "Our growers", href: "/seasonal#sourcing" },
    { label: "What's in season", href: "/seasonal" },
    { label: "FAQ", href: "/the-studio#faq" },
    { label: "Events & workshops", href: "/events" },
  ],
};

// Tue–Fri 9am–4pm by appointment, Sat by arrangement, closed Sun–Mon.
export const HOURS = [
  { day: "Sunday", dow: 0, text: "Closed", closed: true },
  { day: "Monday", dow: 1, text: "Closed", closed: true },
  { day: "Tuesday", dow: 2, text: "9am – 4pm, by appointment" },
  { day: "Wednesday", dow: 3, text: "9am – 4pm, by appointment" },
  { day: "Thursday", dow: 4, text: "9am – 4pm, by appointment" },
  { day: "Friday", dow: 5, text: "9am – 4pm, by appointment" },
  { day: "Saturday", dow: 6, text: "By arrangement" },
];

export const HOURS_NOTE =
  "Closed Sunday and Monday — wedding days and recovery. Saturdays in May, June, September and October we are almost always at a venue, not the studio.";
