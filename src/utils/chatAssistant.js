/*
  HOW THE AI PART WORKS
  ----------------------
  Never call the Anthropic API directly from the browser in production —
  it would expose your API key to every visitor. Instead, create a small
  backend route (e.g. /api/chat on Vercel / Next.js) that holds the key
  server-side and forwards the visitor's message to Claude, then call
  that route from here.

  Example Next.js route (pages/api/chat.js or app/api/chat/route.js):

    export async function POST(req) {
      const { message, history } = await req.json();
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          system:
            "You are Maithri Aquatech's MEGHDOOT® guide. Answer only " +
            "questions about MEGHDOOT® atmospheric water generators — " +
            "technology, product range, applications, impact, pricing " +
            "guidance, and how to reach sales. Keep answers short (2-4 " +
            "sentences) and steer unrelated questions back to MEGHDOOT®.",
          messages: [...history, { role: "user", content: message }],
        }),
      });
      const data = await r.json();
      const text = data.content?.map((c) => c.text || "").join("") || "";
      return Response.json({ text });
    }

  getAIResponse() below calls that route first. Swap the URL/path if
  yours differs. Until a real backend is wired up (or if that call ever
  fails), it falls back to answerLocally() — a local knowledge base built
  from Maithri Aquatech's own MEGHDOOT® FAQ + product lineup — so the
  widget can still answer real questions about the product on its own,
  with no backend required.
*/

export async function getAIResponse(message, history) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error("no backend yet");
    const data = await res.json();
    return data.text;
  } catch {
    return answerLocally(message);
  }
}

/* ------------------------------------------------------------------ */
/*  Local knowledge base — Maithri Aquatech's MEGHDOOT® FAQ, condensed   */
/*  into short chat-friendly answers, plus the product lineup.          */
/* ------------------------------------------------------------------ */

const PRODUCT_CATEGORIES = [
  {
    name: "Residential",
    summary:
      "Compact home units for apartments, villas and cabins — producing anywhere from a few litres up to a few hundred litres a day, sized to a household's daily drinking-water need.",
  },
  {
    name: "Classic",
    summary:
      "Everyday systems for households and small offices — a reliable, easy-to-maintain source of purified drinking water.",
  },
  {
    name: "Premium",
    summary:
      "Systems for businesses, labs and schools that need a steady, maintenance-light supply of purified drinking water on-site.",
  },
  {
    name: "Magnum",
    summary:
      "Mid-scale systems for large schools, hostels and apartments — built to serve dozens to hundreds of people reliably from a single unit.",
  },
  {
    name: "Signature",
    summary:
      "Utility-scale AWG for factories, manufacturing plants and large facilities, generating from thousands up to millions of litres per day.",
  },
  {
    name: "Dehumidification",
    summary:
      "Indoor systems tuned for humidity control alongside water recovery — protecting electronic control units in radar installations, plus cold storage, data centers and moisture-sensitive facilities.",
  },
];

const STOPWORDS = new Set([
  "the", "is", "are", "a", "an", "and", "or", "of", "to", "for", "in", "on",
  "it", "does", "do", "how", "what", "why", "will", "can", "with", "have",
  "has", "you", "your", "i", "me", "my", "we", "our", "about", "any", "be",
  "am", "this", "that", "there", "from", "at", "as", "if", "so", "get",
]);

// Each entry: a question visitors might ask, a short chat-ready answer,
// and a few extra keywords to help matching beyond the question text.
const FAQ_DATA = [
  {
    q: "how does meghdoot awg work",
    a: "MEGHDOOT® pulls in air through an electrostatic filter, cools it over refrigerated coils to condense the moisture, then runs that water through sediment, carbon and UV filtration before it reaches the dispenser — pure, cold drinking water straight from the air.",
    keywords: ["work", "works", "technology", "process", "how"],
  },
  {
    q: "is the water from meghdoot pure and safe",
    a: "Yes — MEGHDOOT® water meets international drinking-water standards and is 100% microbe-free. Filtration removes particles and dissolved pollutants while retaining essential minerals, and select models add remineralisation for extra quality.",
    keywords: ["pure", "safe", "quality", "clean", "drinkable"],
  },
  {
    q: "is taking water from the atmosphere harmful to the environment",
    a: "Not at all — the oceans alone release about 850 billion litres of moisture into the atmosphere every day. MEGHDOOT® taps into that endless, naturally replenishing source, so it actually helps conserve groundwater rather than deplete it.",
    keywords: ["environment", "harmful", "sustainable", "eco", "groundwater"],
  },
  {
    q: "is there enough water in the air to produce water every day",
    a: "Yes — there are roughly 3.1 quadrillion gallons of water held in the atmosphere at any given moment, more than enough to supply AWG systems continuously.",
    keywords: ["enough", "atmosphere", "quantity", "amount"],
  },
  {
    q: "can i get pure drinking water from air with impurities",
    a: "Absolutely. MEGHDOOT® condenses only the water vapour, then passes it through a 10-micron air filter, sediment filter, activated carbon and UV disinfection — removing particles, odour, taste and bacteria along the way.",
    keywords: ["impurities", "filter", "filtration", "particles", "bacteria"],
  },
  {
    q: "is it expensive to produce water with an awg",
    a: "No — MEGHDOOT® is very energy-efficient, using only about 0.25 units of electricity per litre. On average that works out to under ₹2 per litre of high-quality water.",
    keywords: ["expensive", "cost", "price", "energy", "electricity", "cheap"],
  },
  {
    q: "what are the power requirements",
    a: "MEGHDOOT® runs on standard grid power, or off-grid using solar, wind or a diesel/oil generator — so it can be deployed almost anywhere.",
    keywords: ["power", "electricity", "solar", "generator", "energy"],
  },
  {
    q: "will the water taste or smell odd",
    a: "No — the multi-stage filtration, including activated carbon, removes any dust or odour, so MEGHDOOT® water has no unusual taste or smell.",
    keywords: ["taste", "smell", "odour", "odor"],
  },
  {
    q: "why do i need awg instead of tap water",
    a: "Public water supplies can carry impurities and contamination risks that vary by source. Producing your own water on-site with MEGHDOOT® means you know exactly what's in it — pure, tested, and generated right in front of you.",
    keywords: ["tap", "municipal", "supply", "compare"],
  },
  {
    q: "is bottled water safe",
    a: "Not always — studies have found a meaningful share of bottled water is really just reprocessed tap water, and some batches don't meet safety standards. MEGHDOOT® water is generated and purified on-site, so there's no supply-chain uncertainty.",
    keywords: ["bottled", "bottle", "packaged"],
  },
  {
    q: "is meghdoot water better than bottled or cooler water",
    a: "Yes — MEGHDOOT® water is generated fresh in front of you, unlike bottled water (often reprocessed tap or unverified spring water) or office water-cooler bottles, which can build up bacteria and algae if not cleaned regularly.",
    keywords: ["cooler", "dispenser", "bottled", "better"],
  },
  {
    q: "what other benefits does meghdoot offer",
    a: "MEGHDOOT® needs no existing water source, starts producing within about an hour of installation, wastes no water (unlike RO or desalination), needs very little maintenance or skilled operation, and its raw material — air — is free.",
    keywords: ["benefits", "advantages", "why"],
  },
  {
    q: "what is the ph of meghdoot water",
    a: "MEGHDOOT® water sits at about 7.2 pH, within the normal range of 6.5–8.5 for safe drinking water.",
    keywords: ["ph", "acidity", "alkaline"],
  },
  {
    q: "what humidity and temperature does meghdoot need",
    a: "Rated output is achieved at around 85°F (29°C) and 80% relative humidity, but MEGHDOOT® operates across 15°C–45°C and humidity as low as 25% RH.",
    keywords: ["humidity", "temperature", "climate", "conditions"],
  },
  {
    q: "how often do filters need changing",
    a: "Carbon and sediment filters are typically replaced every 4–6 months, and air filters just need periodic backwashing — no specialist required.",
    keywords: ["filter", "maintenance", "replace", "service"],
  },
  {
    q: "what is the machine's lifespan and warranty",
    a: "With proper use and maintenance, a MEGHDOOT® unit typically lasts 15+ years. It comes with a one-year manufacturer's warranty, and annual service contracts are available through Maithri Aquatech or authorised partners.",
    keywords: ["lifespan", "warranty", "life", "guarantee", "durable"],
  },
  {
    q: "when will the machine start producing water",
    a: "Usually within 1–2 hours of startup, depending on ambient humidity and temperature.",
    keywords: ["start", "startup", "time", "begin"],
  },
  {
    q: "how does it work in low humidity areas",
    a: "Very low humidity is a challenge for any AWG. In hot, dry daytime conditions output can drop, but MEGHDOOT® can still generate water overnight via the dew-point effect, and it automatically pauses if humidity falls below 25% RH.",
    keywords: ["desert", "dry", "low humidity", "arid"],
  },
  {
    q: "where can meghdoot be deployed",
    a: "Anywhere reliable water access is hard to guarantee — schools, hostels, hospitals, government offices, religious sites, railway/bus stations, universities, defence camps, ships, offshore rigs, and remote telecom towers.",
    keywords: ["deploy", "install", "where", "locations", "applications", "use case"],
  },
  {
    q: "does the reservoir overflow when full",
    a: "No — a built-in water-level sensor automatically cuts off the machine once the tank is full, so there's no risk of overflow.",
    keywords: ["overflow", "reservoir", "tank", "full"],
  },
  {
    q: "does stored water go stale",
    a: "No — water quality stays consistent for up to 4 months in the reservoir, and the generated water has a shelf life of up to 6 months without bacterial growth.",
    keywords: ["stale", "stagnant", "storage", "shelf life"],
  },
  {
    q: "does the water have minerals",
    a: "Yes — MEGHDOOT® retains essential water-soluble minerals, and select models add automated remineralisation using our proprietary mineral-salt formula for extra quality.",
    keywords: ["minerals", "mineral", "remineralise", "remineralize"],
  },
  {
    q: "can meghdoot make other types of water",
    a: "Yes — with filtration adjustments, MEGHDOOT® can also produce alkaline water, dialysis-grade water, and distilled water for battery use, in addition to regular purified drinking water.",
    keywords: ["alkaline", "dialysis", "distilled", "type"],
  },
  {
    q: "how is meghdoot different from other awgs",
    a: "MEGHDOOT® can keep generating water at humidity levels as low as 25% RH — lower than most competing systems — while consuming less power per litre than typical AWGs on the market.",
    keywords: ["different", "compare", "competitor", "better"],
  },
  {
    q: "is the machine noisy",
    a: "No — all MEGHDOOT® variants run at 70 dBA or below, quiet enough that no hearing protection is needed.",
    keywords: ["noise", "loud", "quiet", "sound"],
  },
  {
    q: "does it need special knowledge to operate",
    a: "No — MEGHDOOT® is plug-and-play. Connect it to power, switch it on, and the system handles the rest automatically.",
    keywords: ["operate", "use", "easy", "training"],
  },
  {
    q: "what safety features does it have",
    a: "MEGHDOOT® auto-pauses for 10 minutes after every 90 minutes of continuous use to protect the machine, and it has humidity and water-level sensors to prevent overflow or unnecessary running.",
    keywords: ["safety", "safe", "protection", "sensor"],
  },
];

const GENERIC_PRODUCT_LINE = PRODUCT_CATEGORIES.map(
  (p) => `${p.name} (${p.summary.split(" — ")[0].toLowerCase()})`
).join(", ");

function findBestFaqMatch(message) {
  const tokens = message
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));

  if (tokens.length === 0) return null;

  let best = null;
  let bestScore = 0;
  for (const item of FAQ_DATA) {
    const haystack = (item.q + " " + item.keywords.join(" ")).toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (haystack.includes(t)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore > 0 ? best : null;
}

function findProductMatch(message) {
  const m = message.toLowerCase();
  const named = PRODUCT_CATEGORIES.find((p) => m.includes(p.name.toLowerCase()));
  if (named) return `${named.name}: ${named.summary}`;

  if (m.includes("product") || m.includes("range") || m.includes("lineup") || m.includes("catalog")) {
    return `MEGHDOOT® comes in six product lines to match different needs: ${GENERIC_PRODUCT_LINE}. Which of these sounds closest to your use case?`;
  }
  if (m.includes("which model") || m.includes("model should") || m.includes("fit") || m.includes("choose") || m.includes("recommend")) {
    return "Happy to help you pick — could you tell me roughly where you'd use it (home, community/institution, or industrial site) and how many people or how much daily water you need? That's usually enough to point you to the right MEGHDOOT® line.";
  }
  return null;
}

function isGreeting(message) {
  const m = message.toLowerCase().trim();
  return /^(hi|hello|hey|hii+|good\s?(morning|afternoon|evening))\b/.test(m);
}

function isSalesIntent(message) {
  const m = message.toLowerCase();
  return m.includes("sales") || m.includes("price") || m.includes("cost") || m.includes("quote") || m.includes("buy") || m.includes("purchase");
}

function answerLocally(message) {
  if (isGreeting(message)) {
    return "Hi, this is Maithri Aquatech Pvt Ltd. How may I help you? Ask me about MEGHDOOT®'s technology, product range, applications, impact, or pricing.";
  }

  if (isSalesIntent(message)) {
    return "I can connect you with our sales team for pricing based on your location and daily water need — tap Contact sales below, or tell me a bit about your requirement and I'll guide you.";
  }

  const product = findProductMatch(message);
  if (product) return product;

  const faq = findBestFaqMatch(message);
  if (faq) return faq.a;

  if (message.toLowerCase().includes("impact")) {
    return "Across 40+ countries, MEGHDOOT® installations have generated over 3 billion litres of water from air, with 4 million+ litres added every day.";
  }

  return "Good question — I can answer almost anything about MEGHDOOT®: how the technology works, the product range (Residential, Classic, Premium, Magnum, Signature, Dehumidification), applications, purity, maintenance, or pricing. What would you like to know?";
}

export const QUICK_QUESTIONS = [
  "Tell me about the technology",
  "Show product range",
  "Which model should I choose?",
  "I want to talk to sales",
];
