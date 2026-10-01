// Slide deck configuration for the HeroCarousel.
// Each entry drives one full-height section; the boolean `*Slide` flags select
// which section component renders it (see components/carousel/HeroCarousel.jsx).
// Only the first NAV_SLIDE_COUNT slides get dot navigation + the counter.
export const NAV_SLIDE_COUNT = 4;

export const SLIDES = [
  {
    bg: "#0e2a3d",
    videoBg: {
      mp4: "/media/hero-water-bg.mp4",
      webm: "/media/hero-water-bg.webm",
      poster: "/media/hero-water-poster.jpg",
    },
    eyebrow: "",
    title: "Future of water",
    titleEm: "is in the air.",
    tagline: "Sustainably built for water independence.",
    body: "World's first atmospheric water harvester. 5 billion+ liters drawn from air, 15 billion+ liters groundwater saved.",
    statCard: {
      heading: "World's first",
      stats: [
        { number: "5 Billion+", label: "Liters drawn from air." },
        { number: "15 Billion+", label: "Liters groundwater saved." },
      ],
      to: "/impact#impact-atlas",
    },
    ctas: ["Explore the technology", "Explore installations"],
    sideCards: [
      { label: "Impact atlas", text: "40+ countries live now", to: "/impact#impact-atlas" },
      { label: "Latest news", text: "Explore media house", to: "/media-house#news" },
      { label: "R&D innovations", text: "Explore advancements", to: "/rnd", labelColor: "#3f7bb3" },
    ],
  },
  {
    bg: "#1c3b2a",
    imageBg: "/media/meghdoot-hero-bg-outdoor.png",
    // Show the full photo uncropped/unzoomed, with no blur/crop/zoom or
    // white-wash gradient treatment — just the photo as provided.
    fullBleedImage: true,
    noWash: true,
    eyebrow: "",
    title: "MEGHDOOT®,",
    titleEm: "Engineered.",
    tagline: "",
    body: "We all know that there is water in the air, but what is not commonly known is the sheer volume of water present in it. Built on the Atmospheric Water Generation concept, our product can generate clean, potable water from the air. No groundwater is needed, and no surface water is required.",
    highlight: "Atmospheric Water Generators are the solution to the global water crisis.",
    ctas: ["See MEGHDOOT®", "Contact us"],
  },
  {
    bg: "#ffffff",
    certificationsSlide: true,
    eyebrow: "Certifications & Endorsements",
    title: "Certified, tested, and",
    titleEm: "institutionally endorsed.",
    body: "MEGHDOOT® combines product certification, water testing, and public-sector endorsements from institutions that understand safety, scale, and trust.",
  },
  {
    bg: "#0c2436",
    meghdootHeroSlide: true,
    eyebrow: "The abundance above us · The foundation",
    title: "Meet MEGHDOOT®. Water is already in the air.",
    titleEm: "We unlock it.",
    body: "The original Maithri story is simple: freshwater sources are stressed, but the atmosphere carries vast moisture every day. MEGHDOOT® unlocks that overlooked abundance without drawing from groundwater or surface water.",
    ctas: ["Contact Us", "How MEGHDOOT® Works"],
    glassBox: {
      heading: "Generated from air.\nDeployed anywhere.",
      stats: [
        { num: "11.7L", label: "quadrillion liters of water in the atmosphere at any given time" },
        { num: "0", label: "groundwater or surface-water source required" },
        { num: "25%+", label: "relative humidity operating pathway with intelligent sensing" },
      ],
    },
    // Places the "Trusted by brands" ribbon right after this slide (see
    // HeroCarousel.jsx), instead of its earlier fixed spot at the very end.
    trustedByBrandsAfter: true,
  },
  {
    bg: "#2a2a2a",
    videoBg: {
      mp4: "/media/rnd-hero-bg.mp4",
      webm: "/media/rnd-hero-bg.webm",
      poster: "/media/rnd-hero-poster.jpg",
    },
    eyebrow: "Research & development",
    title: "R&D,",
    titleEm: "Relentless.",
    tagline: "Built in labs | Proven in the field",
    body: "From condenser design and heat-exchange systems to controls, materials, and telemetry, our R&D keeps pushing AWG performance, efficiency, and deployment range forward.",
    ctas: ["Explore our R&D"],
  },
  {
    bg: "#241f1a",
    imageBg: "/media/credibility-hero-bg-tedx-v2.png",
    // Show the full photo uncropped/unzoomed, with no blur/crop/zoom or
    // white-wash gradient treatment — just the photo as provided.
    fullBleedImage: true,
    noWash: true,
    // Wraps the whole text column (eyebrow → title → tagline → body → CTA)
    // in a solid rounded card, matching the reference design, instead of
    // the plain over-the-photo text treatment used by other slides.
    boxed: true,
    // Only this slide's eyebrow label uses gold/yellow instead of the
    // shared blue — see DefaultHeroSection.jsx.
    eyebrowColor: "#e0a515",
    eyebrow: "TEDx · UN SDG pioneer",
    title: "Credibility,",
    titleEm: "Earned.",
    tagline: "Mr. Rama krishna mukkavilli on TEDx | UN SDG Pioneer | Global water stewardship",
    body: "The water-from-air story has travelled from field deployments to global recognition: TEDx thought leadership, UN SDG Pioneer acknowledgement, and award-winning climate innovation.",
    ctas: ["See recognition"],
    // Keeps the Recognition ticker pinned right after this slide, its
    // original spot in the deck (see HeroCarousel.jsx), independent of
    // where the MEGHDOOT® Foundation slide now sits in the order.
    recognitionBarAfter: true,
  },
];

// Pulled out of the sequential SLIDES array so it can be rendered after
// TrustedByBrandsSection (see HeroCarousel.jsx) instead of before it.
export const SOCIAL_SIGNALS_SLIDE = {
  bg: "#eef3f8",
  socialSignalsSlide: true,
  eyebrow: "Social Signals",
  title: "Recognition from",
  titleEm: "public voices.",
  body: "Public voices that helped make water-from-air visible.",
};
