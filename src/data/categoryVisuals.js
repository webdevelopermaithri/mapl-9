// Per-category gradient + icon used by the new "category" R&D subsection
// pages (Healthcare, Horticulture, Industrial, Sustainability). These
// entries don't carry their own icon/photo fields (unlike the dedicated
// Water dataset), so each category gets one consistent visual treatment
// instead. Colors loosely echo the badge colors already used for each
// category in data/portfolioEntries.js. Icons come from react-icons,
// already a project dependency.
import { FaHeartbeat, FaAtom, FaSeedling, FaIndustry, FaLeaf } from "react-icons/fa";

export const CATEGORY_VISUALS = {
  WATER: {
    gradient: "linear-gradient(180deg, #b56a52 0%, #8a5a63 28%, #3a4f78 62%, #1f345c 100%)",
    icon: FaAtom,
  },
  HEALTHCARE: {
    gradient: "linear-gradient(180deg, #d46a86 0%, #b2536f 45%, #5c2f42 100%)",
    icon: FaHeartbeat,
  },
  HORTICULTURE: {
    gradient: "linear-gradient(180deg, #3f7d52 0%, #2e6144 45%, #16342a 100%)",
    icon: FaSeedling,
  },
  INDUSTRIAL: {
    gradient: "linear-gradient(180deg, #35505f 0%, #4c7079 55%, #9db6ba 100%)",
    icon: FaIndustry,
  },
  SUSTAINABILITY: {
    gradient: "linear-gradient(180deg, #6c5b9e 0%, #55467f 45%, #2c2450 100%)",
    icon: FaLeaf,
  },
};
