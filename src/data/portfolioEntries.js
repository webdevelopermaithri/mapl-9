export const CATEGORIES = [
  "WATER",
  "HEALTHCARE",
  "HORTICULTURE",
  "SUSTAINABILITY",
  "INDUSTRIAL",
];

export const HERO_PILLS = ["WATER", "HEALTHCARE", "HORTICULTURE", "SUSTAINABILITY", "INDUSTRIAL"];

export const CATEGORY_STYLES = {
  WATER: { badge: "bg-sky-50 text-sky-600", tag: "bg-sky-50 text-sky-700" },
  HEALTHCARE: { badge: "bg-pink-50 text-pink-600", tag: "bg-pink-50 text-pink-700" },
  HORTICULTURE: { badge: "bg-emerald-50 text-emerald-600", tag: "bg-emerald-50 text-emerald-700" },
  INDUSTRIAL: { badge: "bg-slate-100 text-slate-600", tag: "bg-slate-100 text-slate-700" },
  SUSTAINABILITY: { badge: "bg-violet-50 text-violet-600", tag: "bg-violet-50 text-violet-700" },
};

export const ENTRIES = [
  {
    id: "meghdoot-feather",
    category: "WATER",
    eyebrow: "COMPACT PRODUCT CONCEPT",
    title: "MEGHDOOT® Feather",
    subtitle: "Personal water generation for cabins, rooms and compact spaces.",
    description:
      "An ultra-compact atmospheric water generator designed for individual needs and small enclosed environments where bottled or supplied water dependency should be reduced.",
    tags: ["4-5 LPD OUTPUT", "LIGHTWEIGHT DESIGN", "SMALL-SPACE DEPLOYMENT"],
    bullets: [
      "Supports personal water independence without pipelines.",
      "Easy to place in cabins, rooms and compact living environments.",
      "Built around sustainable living and reduced packaged-water reliance.",
    ],
  },
  {
    id: "meghdoot-ultra-lite",
    category: "WATER",
    eyebrow: "ROOM-LEVEL PLATFORM",
    title: "MEGHDOOT® Ultra Lite",
    subtitle: "Decentralized water generation for rooms and small spaces.",
    description:
      "A compact and aesthetically adaptable AWG platform for room-level deployment, with optional solar integration for urban and semi-off-grid environments.",
    tags: ["UP TO 12 LPD", "OPTIONAL SOLAR OPERATION", "PORTABLE DEPLOYMENT"],
    bullets: [
      "Designed for rooms, hospitality spaces and small facilities.",
      "Reduces dependency on packaged water and supply chains.",
      "Improves convenience, sustainability and guest experience.",
    ],
  },
  {
    id: "compact-dehumidification",
    category: "INDUSTRIAL",
    eyebrow: "DEFENSE AND COASTAL UTILITY",
    title: "Compact Dehumidification System",
    subtitle: "Precision humidity control with usable water recovery.",
    description:
      "A compact, energy-efficient dehumidification system for radomes, cabins, control units and other enclosed environments exposed to high humidity.",
    tags: ["HUMIDITY CONTROL", "WATER BY-PRODUCT", "CONFINED-SPACE DESIGN"],
    bullets: [
      "Protects sensitive equipment in coastal and high-humidity environments.",
      "Maintains optimal operating conditions in space-constrained zones.",
      "Combines environmental control with recoverable water generation.",
    ],
  },
  {
    id: "advanced-awg",
    category: "WATER",
    eyebrow: "PERFORMANCE UPGRADE",
    title: "Advanced AWG System",
    subtitle: "High-performance water generation for hot and dry climates.",
    description:
      "A passive pre-cooling loop lowers inlet air temperature and improves humidity, unlocking stronger water output without adding energy load.",
    tags: ["30-50% HIGHER WATER OUTPUT", "LOWER SPECIFIC ENERGY USE", "EXTENDED OPERATING HOURS"],
    bullets: [
      "Designed for low-humidity and peak-summer conditions.",
      "Improves reliability where conventional AWG systems lose efficiency.",
      "Supports facilities in water-scarce, high-temperature regions.",
    ],
  },
  {
    id: "hybrid-awg",
    category: "WATER",
    eyebrow: "INNOVATION AND IP",
    title: "Hybrid AWG",
    subtitle: "Continuous, climate-adaptive water generation.",
    description:
      "A next-generation atmospheric water harvesting system combining desiccants, modified VCR, waste heat recovery and intelligent controls.",
    tags: ["24-HOUR WATER PRODUCTION", "COMPACT MODULAR DESIGN", "REDUCED ENERGY CONSUMPTION"],
    bullets: [
      "Uses solid, liquid, MOF and composite desiccant pathways.",
      "Runs simultaneous adsorption or absorption and desorption cycles.",
      "IoT controls help maintain output across changing ambient conditions.",
    ],
  },
  {
    id: "passive-awh",
    category: "WATER",
    eyebrow: "RESEARCH PHASE",
    title: "Passive AWH System",
    subtitle: "Zero-energy water generation for water-stressed communities.",
    description:
      "A salt-based composite sorbent captures moisture at night and releases it during the day using natural sunlight.",
    tags: ["FULLY PASSIVE OPERATION", "NEAR-ZERO OPERATING COST", "LOW-COST SCALABLE DEPLOYMENT"],
    bullets: [
      "Uses the natural day-night cycle for water generation.",
      "Built for affordability and community accessibility.",
      "Targets clean drinking water with minimal electricity dependency.",
    ],
  },
  {
    id: "agriculture-water",
    category: "HORTICULTURE",
    eyebrow: "PRECISION FARMING SUPPORT",
    title: "Horticulture Water Solutions",
    subtitle: "Decentralized water for precision and high-value farming.",
    description:
      "AWG systems produce water directly from air to support controlled farming, off-grid regions and farms facing uncertain groundwater or tanker supply.",
    tags: ["ON-SITE SUPPLY", "PRECISION FARMING", "WATER-SCARCE REGIONS"],
    bullets: [
      "Supports controlled and precision horticulture systems.",
      "Reduces dependency on groundwater and tanker supply.",
      "Improves resilience where yield quality depends on reliable water.",
    ],
  },
  {
    id: "healthcare-water",
    category: "HEALTHCARE",
    eyebrow: "CRITICAL APPLICATIONS",
    title: "Healthcare Water",
    subtitle: "Regular AWG plus advanced filtration for dialysis centers.",
    description:
      "MEGHDOOT® generates water from atmospheric air and processes it through multi-stage purification for healthcare applications.",
    tags: ["HIGH-PURITY WATER", "NEAR ZERO LIQUID DISCHARGE", "LOWER CONTAMINATION LOAD"],
    bullets: [
      "Reduces dependency on municipal or borewell supply.",
      "Extends filter life through low-TDS input.",
      "Improves reliability in remote or water-stressed areas.",
    ],
  },
  {
    id: "lab-ultrapure",
    category: "HEALTHCARE",
    eyebrow: "CRITICAL APPLICATIONS",
    title: "Laboratory grade water",
    subtitle: "Reliable Type 2 quality at source.",
    description:
      "An integrated patented filtration pathway turns atmospheric water into a self-sustaining source for sensitive analytical and biomedical work.",
    tags: ["STABLE TYPE 2 OUTPUT", "ZERO EXTERNAL SOURCE DEPENDENCY"],
    bullets: [
      "Eliminates variability from input water.",
      "Supports laboratory and research facility workflows.",
      "Designed for self-sustaining, zero liquid discharge operation.",
    ],
  },
  {
    id: "semiconductor-electronics",
    category: "INDUSTRIAL",
    eyebrow: "RESEARCH PHASE",
    title: "Semiconductor and Electronics",
    subtitle: "Wafer cleaning, etching and rinsing.",
    description:
      "Low-TDS atmospheric water integrates with advanced filtration to support decentralized water generation.",
    tags: ["REDUCED CONTAMINATION LOAD", "LOWER PRE-TREATMENT BURDEN", "NEAR ZLD CONFIGURATIONS"],
    bullets: [
      "Supports high-purity water needs for surface preparation.",
      "Reduces dependency on external water infrastructure.",
      "Protects performance where water quality cannot be compromised.",
    ],
  },
  {
    id: "green-hydrogen-feedwater",
    category: "SUSTAINABILITY",
    eyebrow: "INDUSTRIAL INTEGRATION",
    title: "Green Hydrogen Feedwater",
    subtitle: "On-site water for electrolysis.",
    description:
      "Integrated AWG produces stable water for hydrogen projects without drawing from groundwater or municipal supply.",
    tags: ["ELECTROLYZER-READY WATER", "REMOTE DEPLOYMENT", "ENERGY-WATER OPTIMIZATION"],
    bullets: [
      "Removes a hidden bottleneck in hydrogen project scalability.",
      "Supports decentralized and water-stressed project locations.",
    ],
  },
  {
    id: "cooling-tower-reclamation",
    category: "INDUSTRIAL",
    eyebrow: "RECLAMATION SYSTEM",
    title: "Cooling Tower Water Reclamation",
    subtitle: "Turn evaporation loss into a recoverable water resource.",
    description:
      "An advanced AWG heat-exchanger loop captures moisture from cooling tower exhaust plumes and condenses it into usable water.",
    tags: ["FRESHWATER INTAKE REDUCTION", "LOWER TREATMENT COST", "WATER-POSITIVE OPERATIONS"],
    bullets: [
      "Captures water from exhaust air that is already near saturation.",
      "Supports ESG reporting, water stewardship and cost optimization.",
    ],
  },
  {
    id: "data-center-resilience",
    category: "INDUSTRIAL",
    eyebrow: "RESEARCH PHASE",
    title: "Data Center Water Resilience",
    subtitle: "On-site atmospheric water support for cooling reliability.",
    description:
      "Data centers need continuous cooling and face pressure to reduce water usage and logistics risk. AWG can generate water on-site and integrate with existing cooling infrastructure.",
    tags: ["COOLING SUPPORT", "LOWER LOGISTICS RISK", "RESEARCH PHASE"],
    bullets: [
      "Reduces reliance on municipal supply or tankers.",
      "Supports water resilience where scarcity can affect uptime.",
      "Designed for integration pathways with cooling infrastructure.",
    ],
  },
  {
    id: "cold-storage-environment",
    category: "HORTICULTURE",
    eyebrow: "ENVIRONMENT CONTROL",
    title: "Cold Storage Environment Control",
    subtitle: "Temperature and humidity optimization for perishable storage.",
    description:
      "Controlled circulation and moisture management maintain stable RH and temperature conditions for high-value perishables.",
    tags: ["IMPROVED FRESHNESS", "REDUCED SPOILAGE", "BETTER STORAGE CONSISTENCY"],
    bullets: [
      "Reduces post-harvest losses from poor humidity control.",
      "Maintains product quality, pricing and shelf-life.",
      "Balances cooled-air circulation with excess warm-air removal.",
    ],
  },
  {
    id: "circular-economy-awg",
    category: "SUSTAINABILITY",
    eyebrow: "FRAMEWORK DEVELOPMENT",
    title: "Circular Economy for AWG",
    subtitle: "Closing the loop in water generation.",
    description:
      "A circular economy framework for AWG systems that reduces waste from filters, brine and system by-products while improving resource efficiency.",
    tags: ["LOWER WASTE", "RESOURCE EFFICIENCY", "ESG ALIGNMENT"],
    bullets: [
      "Reduces operational waste and disposal costs.",
      "Lowers water footprint and resource dependency.",
      "Aligns water systems with circular economy and climate goals.",
    ],
  },
  {
    id: "carbon-capture-pathway",
    category: "SUSTAINABILITY",
    eyebrow: "AIR-TO-WATER QUALITY",
    title: "Carbon Capture Pathway",
    subtitle: "Improving water quality at the air intake and condensation stages.",
    description:
      "Incoming air is conditioned during AWG, partially reducing CO2 before and during water formation.",
    tags: ["LOWER DISSOLVED CO2", "IMPROVED OUTPUT STABILITY", "SENSITIVE-USE READINESS"],
    bullets: [
      "Addresses atmospheric CO2 interaction during condensation.",
      "Partially converts CO2 into bicarbonates during water formation.",
      "Enhances suitability for labs, medical and industrial applications.",
    ],
  },
  {
    id: "water-credits-tokens",
    category: "SUSTAINABILITY",
    eyebrow: "STEWARDSHIP PATHWAY",
    title: "Water Credits and Tokens",
    subtitle: "Measurable value from responsible water stewardship.",
    description:
      "AWG can reduce groundwater, tanker and external water dependence while supporting emerging water and green credit mechanisms.",
    tags: ["WATER STEWARDSHIP", "ESG DISCLOSURES", "ECONOMIC VALUE"],
    bullets: [
      "Supports water conservation goals in water-scarce regions.",
      "Strengthens sustainability reporting and future-ready positioning.",
      "Creates a pathway to measurable value from saved water.",
    ],
  },
  {
    id: "carbon-credit-contribution",
    category: "SUSTAINABILITY",
    eyebrow: "PROJECT-SPECIFIC POTENTIAL",
    title: "Carbon Credit Contribution",
    subtitle: "Supporting decarbonization through water innovation.",
    description:
      "AWG systems can help reduce Scope 2 and Scope 3 emissions depending on location, energy source, system capacity and usage patterns.",
    tags: ["CARBON ACCOUNTING", "NET-ZERO SUPPORT", "VERIFICATION DEPENDENT"],
    bullets: [
      "Lowers the carbon intensity of water usage.",
      "May support voluntary carbon market participation subject to verification.",
      "Contributes to decarbonization and reporting frameworks.",
    ],
  },
  {
    id: "esg-sustainability-awg",
    category: "SUSTAINABILITY",
    eyebrow: "RISK AND RESILIENCE",
    title: "ESG and Sustainability with AWG",
    subtitle: "Low-risk, resource-resilient water systems.",
    description:
      "AWG supports water security, operational resilience, regulatory alignment and long-term sustainability positioning for organizations facing water-related business risk.",
    tags: ["WATER RISK REDUCTION", "OPERATIONAL RESILIENCE", "ESG REPORTING"],
    bullets: [
      "Reduces dependency on groundwater, tankers and uncertain external supply.",
      "Supports GRI, BRSR and sustainability disclosures.",
      "Helps net-zero, water-positive and resource-efficiency goals.",
    ],
  },
];

export const FEATURED = ENTRIES[0];
