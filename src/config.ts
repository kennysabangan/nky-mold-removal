/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, certified, guarantees) until the
 *   service partner actually has them — add them then.
 * - Mold is health-adjacent: no health-outcome promises ("eliminates health
 *   risks", "safe for your family"). Describe the work, not medical results.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Mold Removal Pros",
  phone: "(714) 494-9486",
  phoneE164: "+17144949486",
  domain: "nkymoldremovalpros.com",
  siteUrl: "https://nkymoldremovalpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "mold removal",
  serviceKeywordPlural: "mold removal services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Professional Mold Removal in Northern Kentucky",
  heroSubtext: "Professional mold remediation serving Florence, Covington, Fort Mitchell, and all of NKY. Call for a free inspection.",
  heroAlt: "Professional mold removal technician at work",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Mold Inspection & Testing",
      slug: "inspection-testing",
      description:
        "Professional mold inspection with air quality testing. We identify the type and extent of mold in your home. Results within 24-48 hours. Free visual inspections across NKY.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Mold Remediation & Removal",
      slug: "remediation-removal",
      description:
        "Mold removal using containment, HEPA filtration, negative air pressure, and antimicrobial treatment of affected surfaces. We remove mold from walls, ceilings, crawl spaces, and basements, and cut out moldy porous materials like drywall and insulation when they can't be cleaned.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Mold Prevention",
      slug: "prevention",
      description:
        "Moisture control, dehumidification, and encapsulation to help keep mold from coming back. The moisture source gets addressed, not just the visible growth.",
      photo: "/photos/mold-prevention.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does mold removal cost?",
      answer:
        "Call (714) 494-9486 for a free inspection to get an accurate quote for your specific situation.",
    },
    {
      question: "Is mold dangerous?",
      answer:
        "It can be. Mold exposure can trigger allergy symptoms, asthma flare-ups, and irritation in some people, and anyone with a health concern should talk to their doctor. Indoor mold also damages drywall, wood, and insulation over time, so if you see or smell mold, it's worth having it looked at.",
    },
    {
      question: "How do I know if I have mold?",
      answer:
        "Musty odors, visible discoloration on walls or ceilings, water stains, peeling paint, and allergy-type symptoms that ease when you are away from the house are all common signs. An inspection, with sampling when needed, confirms it.",
    },
    {
      question: "Can I remove mold myself?",
      answer:
        "Small areas (less than 10 sq ft) maybe. But DIY removal often spreads spores and doesn't address the moisture source. Professional remediation is recommended for anything significant.",
    },
    {
      question: "How long does remediation take?",
      answer:
        "Most jobs take 1-3 days. Large commercial projects may take a week. Call (714) 494-9486 to schedule your free inspection.",
    },
    {
      question: "Will the mold come back?",
      answer:
        "Our prevention services include moisture control and encapsulation to reduce the chance of mold returning.",
    },
    {
      question: "Do you work with insurance?",
      answer:
        "Mold remediation may be covered by homeowners insurance depending on your policy. We can provide documentation to support your claim.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (714) 494-9486. We serve Florence, Covington, Fort Thomas, Newport, and the rest of Northern Kentucky, and can usually schedule your inspection within a few days.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Mold Removal Pros provides mold inspection and removal for Florence homes. Whether you live near the Florence Mall area or in one of the neighborhoods off US-42, our team brings professional equipment and proven remediation techniques right to your door. Northern Kentucky's humid summers and older housing stock create ideal conditions for mold growth, and we serve homes across Florence — from basement black mold to attic infestations. Florence's mix of older homes and new construction means we've seen every type of mold problem, and how to remove it and fix the moisture behind it.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties are especially vulnerable to mold — the Ohio River's proximity means higher humidity year-round, and older structures often have hidden moisture problems behind plaster and lath walls. NKY Mold Removal Pros serves Covington residents and businesses, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — aging foundations near the Roebling Bridge, crawl space moisture, and the mold that thrives in historic basements. Every job starts with finding where the moisture is coming from.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that character means older properties that can harbor hidden mold. NKY Mold Removal Pros provides mold remediation for Fort Thomas homes, old and new. We're experienced with the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and older foundations that let moisture seep in over time. Remediation here means removing the mold and dealing with the water that caused it — often a grading, gutter, or foundation drainage problem.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's position along the Ohio River means homes here face higher humidity and moisture challenges year-round. NKY Mold Removal Pros is proud to help Newport residents combat mold with expert remediation services. From the Newport on the Levee district to the residential streets of Clifton and the East Row, we provide thorough mold removal for homes and businesses throughout the city. River proximity means elevated moisture levels that encourage mold growth in basements, crawl spaces, and behind walls. Remediation includes drying the affected area and addressing the moisture source to reduce the chance of regrowth.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of service when mold appears. NKY Mold Removal Pros delivers exactly that. We specialize in thorough, detail-oriented mold remediation that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Work areas are contained so spores don't spread to the rest of the house, and treated surfaces are cleaned before the containment comes down.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that mold can appear without warning — behind walls, under flooring, in crawl spaces — and they know to call NKY Mold Removal Pros when it does. We serve this community with mold inspection, removal, and moisture control. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the equipment to find and remove mold wherever it's growing. We also serve Erlanger's growing commercial corridor, including offices and storefronts.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's well-kept homes and tree-lined streets make it one of Kenton County's most charming communities — and NKY Mold Removal Pros helps keep it that way by tackling mold problems quickly and professionally. We serve Edgewood homeowners, providing the kind of careful, thorough mold remediation that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to work around Edgewood's varied construction. Work areas are contained during the job and cleaned when it's done.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Mold Removal Pros handles mold in homes of every age there. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide mold inspection, removal, and prevention. New construction can trap moisture during the building process, while older homes may develop hidden mold from years of minor leaks. Whatever the cause, the moisture source is identified and addressed along with the mold so it's less likely to come back.",
    },
  ] as City[],
};
