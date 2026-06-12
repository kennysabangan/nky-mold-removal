/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Mold Removal Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
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
        "Complete mold removal using HEPA filtration, negative air pressure, and antimicrobial treatment. We remove mold from walls, ceilings, crawl spaces, and basements. Safe and thorough.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Mold Prevention",
      slug: "prevention",
      description:
        "Moisture control, dehumidification, and encapsulation to prevent mold from coming back. We address the root cause, not just the symptoms.",
      photo: "/photos/mold-prevention.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does mold removal cost?",
      answer:
        "Call (859) 900-8065 for a free inspection to get an accurate quote for your specific situation.",
    },
    {
      question: "Is mold dangerous?",
      answer:
        "Yes. Mold can cause respiratory issues, allergies, and other health concerns. If you see or smell mold, call a professional.",
    },
    {
      question: "How do I know if I have mold?",
      answer:
        "Musty odors, visible discoloration on walls or ceilings, water stains, peeling paint, and health symptoms that improve when you leave the house are all signs. Air testing confirms it.",
    },
    {
      question: "Can I remove mold myself?",
      answer:
        "Small areas (less than 10 sq ft) maybe. But DIY removal often spreads spores and doesn't address the moisture source. Professional remediation is recommended for anything significant.",
    },
    {
      question: "How long does remediation take?",
      answer:
        "Most jobs take 1-3 days. Large commercial projects may take a week. Call (859) 900-8065 to schedule your free inspection.",
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
        "Call (859) 900-8065. We serve all of Northern Kentucky and greater Cincinnati. We can usually schedule your inspection within a few days.",
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
        "Florence homeowners trust NKY Mold Removal Pros for professional mold removal services that protect their families and homes. Whether you live near the Florence Mall area or in one of the neighborhoods off US-42, our team brings professional equipment and proven remediation techniques right to your door. Northern Kentucky's humid summers and older housing stock create ideal conditions for mold growth, and we serve homes across Florence — from basement black mold to attic infestations. Florence's mix of older homes and new construction means we've seen every type of mold problem, and we know how to eliminate it safely and completely.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties are especially vulnerable to mold — the Ohio River's proximity means higher humidity year-round, and older structures often have hidden moisture problems behind plaster and lathe walls. NKY Mold Removal Pros serves Covington residents and businesses, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — aging foundations near the Roebling Bridge, crawl space moisture, and the mold that thrives in historic basements. We take pride in keeping Covington homes safe and mold-free.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of service when mold appears. NKY Mold Removal Pros delivers exactly that. We specialize in thorough, detail-oriented mold remediation that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Our technicians are trained to treat your home with the same respect they'd treat their own. Fort Mitchell residents choose us because we show up on time, do the job right, and leave every surface clean and treated.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that mold can appear without warning — behind walls, under flooring, in crawl spaces — and they know to call NKY Mold Removal Pros when it does. We serve this thriving community with professional mold removal that's thorough, affordable, and reliable. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the expertise and equipment to find and eliminate mold at any location. We also serve Erlanger's growing commercial corridor, keeping offices and businesses safe from mold contamination. Our flexible scheduling means we work around your life.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Mold Removal Pros is here to handle every mold situation that arises. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide mold removal services that Northern Kentucky homeowners count on. New construction can trap moisture during the building process, while older homes may develop hidden mold from years of minor leaks. Whatever the cause, our team identifies it, removes the mold, and prevents it from coming back.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's position along the Ohio River means homes here face higher humidity and moisture challenges year-round. NKY Mold Removal Pros is proud to help Newport residents combat mold with expert remediation services. From the Newport on the Levee district to the residential streets of Clifton and Southgate, we provide thorough mold removal for homes and businesses throughout the city. River proximity means elevated moisture levels that encourage mold growth in basements, crawl spaces, and behind walls. Our specialized drying and remediation process eliminates mold completely and addresses the moisture source to prevent recurrence.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's well-kept homes and tree-lined streets make it one of Kenton County's most charming communities — and NKY Mold Removal Pros helps keep it that way by tackling mold problems quickly and professionally. We serve Edgewood homeowners, providing the kind of careful, thorough mold remediation that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to navigate Edgewood's varied construction and deliver consistently excellent results. Our team protects your property and leaves every treated area clean and safe.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that character means older properties that can harbor hidden mold. NKY Mold Removal Pros is Fort Thomas's go-to service for professional mold remediation that preserves your home while protecting your health. We're experienced with the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and older foundations that let moisture seep in over time. Our team handles it all with skill and care, ensuring every trace of mold is eliminated from your Fort Thomas home.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Mold Removal Pros is honored to serve Bellevue residents and business owners with mold removal services. We understand the mix of historic and modern properties that define Bellevue, and we approach each job with the care and attention your home or business deserves. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring the same level of professionalism to every appointment. Bellevue is a community that takes pride in its homes, and we're here to help.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties make it a beautiful place to live — but they also mean crawl spaces and basements are prone to moisture buildup and mold. NKY Mold Removal Pros provides Cold Spring homeowners with thorough, professional mold remediation that removes contamination and prevents recurrence. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll make sure your indoor air quality is safe and your home is mold-free. We use HEPA filtration and antimicrobial treatments that eliminate mold at the source.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Mold Removal Pros is proud to serve the homes and businesses that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide mold removal that Taylor Mill residents trust. Our team understands the local environment — the clay soil that traps moisture, the seasonal humidity changes, and the way Northern Kentucky's climate creates conditions for mold growth throughout the year. We tailor our approach to each property, ensuring the best possible results every single time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve nothing less than the best when mold appears. NKY Mold Removal Pros delivers mold remediation services that match Villa Hills' high standards. The city's elevated terrain and river-adjacent location mean your home faces unique moisture challenges — morning fog, seasonal flooding concerns, and the humidity that comes with proximity to the Ohio River floodplain. Our team is equipped to handle all of it, using professional-grade containment and remediation techniques that leave your home truly safe and mold-free.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Mold Removal Pros delivers it with every visit. We serve this community with professional mold removal that homeowners and businesses rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from attic mold caused by roof leaks to basement mold from foundation seepage. We work efficiently, respect your time, and always deliver results.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — service when mold threatens their homes. NKY Mold Removal Pros is proud to serve Lakeside Park with professional mold remediation that keeps homes safe and healthy. The tree-lined streets and well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. We protect your belongings, work neatly, and leave every treated surface clean and treated. From post-flood mold cleanup to hidden mold behind walls, Lakeside Park homeowners know they can count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — but the steep terrain and older homes here are also prone to moisture intrusion and mold. NKY Mold Removal Pros provides Park Hills homeowners with expert mold remediation that keeps their homes safe and healthy. We're experienced with the steep terrain, multi-story homes, and unique foundation issues that Park Hills properties are known for. Our team uses containment barriers and proven techniques to safely remove mold from even the most challenging locations, delivering complete remediation whether your home overlooks Devou Park or the Cincinnati skyline beyond.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and it's just minutes from Northern Kentucky across the river. NKY Mold Removal Pros is proud to extend our mold removal services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the revitalized commercial district near Peeble's Corner, we bring the same professional-grade mold remediation that NKY residents trust. Walnut Hills' mix of historic Victorian homes, modern apartments, and commercial properties means we see every type of mold issue — and we know how to eliminate each one completely.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes, tree-lined streets, and vibrant town square. NKY Mold Removal Pros brings our professional mold removal expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards Hyde Park homeowners expect. Our team delivers thorough, complete mold remediation every time — because a neighborhood this nice deserves homes that are safe and healthy inside and out.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Mold Removal Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable mold removal. Norwood's mix of older homes, duplexes, and storefronts means properties here face everything from decades of hidden moisture problems to basement mold from aging foundations. Our team handles it all with professional equipment and proven techniques, leaving every treated area clean and safe.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Mold Removal Pros extends our mold removal services to Montgomery homeowners who expect nothing but the best. The large lots, mature landscaping, and multi-story homes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to detail that has made us Professional mold removal service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Mold Removal Pros is proud to bring our mold removal services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve safe, mold-free indoor air. We offer flexible scheduling, fair pricing, and the kind of dependable service that Deer Park homeowners appreciate. When mold threatens your family's health, we eliminate it quickly and thoroughly.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Mold Removal Pros provides the mold removal service that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our technicians deliver exactly that. We protect your property, respect your privacy, and leave every treated area clean and safe. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes and businesses. NKY Mold Removal Pros is excited to serve Westwood with the same reliable mold removal that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've remediated mold in every type of property Westwood has to offer. Our team works efficiently, respects your property, and always delivers complete mold elimination.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Mold Removal Pros brings our professional mold removal expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here means rainwater runoff can seep into foundations and basements — creating the perfect conditions for mold. Our comprehensive remediation process removes all contamination and addresses the moisture source to prevent mold from returning.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Mold Removal Pros brings expert mold remediation to Mt. Adams homeowners and businesses who want to keep their properties safe and healthy. The hillside homes and unique architecture in Mt. Adams require careful access and professional techniques — our team has the containment equipment and safety gear to reach and treat any affected area safely. Whether you're in a renovated Victorian or a modern condo, we'll eliminate the mold completely.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Mold Removal Pros serves Mt. Lookout homeowners with professional mold removal that keeps homes safe and healthy. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every mold issue Mt. Lookout has to offer. We use HEPA air scrubbers and antimicrobial treatments that eliminate mold at the source, so your home stays mold-free — perfect for the families along the tree-lined streets of this beloved Cincinnati neighborhood.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Mold Removal Pros is proud to serve Oakley's homes and businesses with professional mold removal that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide mold remediation that's thorough, affordable, and reliable. Whether you're a homeowner dealing with basement mold or a business owner with a moisture problem, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Mold Removal Pros brings our professional mold removal services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. The Ohio River proximity means higher humidity year-round, and older structures here are especially susceptible to hidden mold behind walls and under floors. Our specialized remediation process tackles all of it — whether your home overlooks the river or sits tucked into the hillside.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Mold Removal Pros is happy to extend our mold removal services to Pleasant Ridge residents who want a safe, healthy home without the hassle. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each property. Our team is fast, friendly, and thorough, leaving your home mold-free and safe for your family every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Mold Removal Pros found mold behind our bathroom wall in Florence. They removed it, treated the area, and fixed the moisture issue. Our home smells fresh again.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We had black mold in our Covington basement. Scary stuff. They came out quickly, set up containment, and removed everything. Professional and thorough.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Our crawl space was full of mold. NKY Mold Removal Pros cleaned it all out and installed a vapor barrier. Our air quality improved immediately. Highly recommend.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "Had recurring mold in our Edgewood bathroom. They found the leak causing it, fixed it, removed the mold, and treated the area. Hasn't come back. Great mold company.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Mold Removal Pros found mold behind our bathroom wall in Florence. They removed it, treated the area, and fixed the moisture issue. Our home smells fresh again. Professional mold removal service in Northern Kentucky.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We had black mold in our Covington basement. Scary stuff. They came out quickly, set up containment, and removed everything. Professional and thorough. They even tested the air quality after to make sure it was safe.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Our crawl space was full of mold. NKY Mold Removal Pros cleaned it all out and installed a vapor barrier. Our air quality improved immediately. Highly recommend their mold removal service in Northern Kentucky.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Had mold growing in our Erlanger restaurant's basement storage. NKY Mold Removal Pros came out and handled it professionally. They worked around our business hours and eliminated all the mold. Great service.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We discovered mold in our crawl space in Independence after heavy rains. NKY Mold Removal Pros came out, found the moisture source, removed all the mold, and installed proper vapor barriers. Our home is safe again.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for mold removal on our home in Newport. They gave us a fair price over the phone and came out the same week. The mold was behind our basement walls. They set up containment, removed it all, and treated the area. Great service, great price.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "Had recurring mold in our Edgewood bathroom. They found the leak causing it, fixed it, removed the mold, and treated the area. Hasn't come back. Reliable mold removal company in Northern Kentucky.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home had mold in the attic from a roof leak. These guys removed it all in about a day. They sealed the area, treated everything, and the air quality test came back clean. Professional mold removal in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
