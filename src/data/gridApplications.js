import bottlingPlantImage from "../assets/applications/bottling-plant-meghdoot.png";
import healthcareImage from "../assets/applications/healthcare-awg-unit.png";
import defenceNavyImage from "../assets/applications/defence-navy-awg-unit.png";
import schoolsImage from "../assets/applications/schools-institutions.png";
import miningEnergyImage from "../assets/applications/mining-energy-offshore.png";
import disasterReliefImage from "../assets/applications/disaster-relief-covid-response.jpg";
import drinkingWaterCommunitiesImage from "../assets/projects-full/images/public-sector/pub-10-haragadde-village.jpg";
import agricultureImage from "../assets/applications/agriculture-meghdoot-dome.png";
import greenHydrogenImage from "../assets/applications/green-hydrogen.png";
import semiconductorImage from "../assets/applications/semiconductor-electronics.png";
import constructionImage from "../assets/applications/construction-meghdoot-assembly.png";

export const GRID_FILTERS = [
  "All",
  "Foundational",
  "Commercial",
  "Frontier",
  "Strategic",
  "Critical",
  "Premium",
];

export const GRID_APPLICATIONS = [
  {
    tag: "FOUNDATIONAL",
    title: "Drinking Water Communities",
    caption:
      "Village-scale AWG deployments providing the first clean water source for underserved communities — rain-independent, grid-optional, locally operated.",
    gradient: "linear-gradient(135deg, #7a6a55 0%, #4a4034 55%, #241f19 100%)",
    image: drinkingWaterCommunitiesImage,
  },
  {
    tag: "COMMERCIAL",
    title: "Bottling Plants",
    caption:
      "The world's first AWG-powered bottling facility. Premium beverage brands built entirely on water drawn from air — a globally replicable model.",
    gradient: "linear-gradient(135deg, #5fd4e8 0%, #1a9bc7 55%, #0b5f82 100%)",
    image: bottlingPlantImage,
  },
  {
    tag: "FRONTIER",
    title: "Green Hydrogen",
    caption:
      "Pure, mineral-free AWG water as electrolysis feedstock — accelerating the clean energy transition without competing with drinking or agricultural water.",
    gradient: "linear-gradient(135deg, #123044 0%, #0a1c2b 60%, #050d14 100%)",
    image: greenHydrogenImage,
  },
  {
    tag: "STRATEGIC",
    title: "Agriculture",
    caption:
      "Precision drip irrigation from atmospheric water. Rain-independent food security for greenhouses, horticulture and high-value crops.",
    gradient: "linear-gradient(135deg, #d8dfc0 0%, #9fb06a 55%, #5c6f33 100%)",
    image: agricultureImage,
  },
  {
    tag: "CRITICAL",
    title: "Healthcare",
    caption:
      "Pharmaceutical-grade water for hospitals, dialysis centres, vaccine chains and pharma manufacturing — meeting USP / IP purity out of the box.",
    gradient: "linear-gradient(135deg, #2a7fd6 0%, #145aa8 55%, #06336e 100%)",
    image: healthcareImage,
  },
  {
    tag: "INFRASTRUCTURE",
    title: "Construction",
    caption:
      "On-site water generation for remote construction, mining and industrial operations — eliminating tanker logistics and groundwater dependence.",
    gradient: "linear-gradient(135deg, #8fbfe0 0%, #4d86b8 55%, #2a5478 100%)",
    image: constructionImage,
  },
  {
    tag: "STRATEGIC",
    title: "Defence & Navy",
    caption:
      "Deployable water independence for armed forces, naval fleets and operating bases that cannot be resupplied through conventional logistics.",
    gradient: "linear-gradient(135deg, #cfd9e8 0%, #7b93b3 55%, #3a4d68 100%)",
    image: defenceNavyImage,
  },
  {
    tag: "SOCIAL",
    title: "Schools & Institutions",
    caption:
      "Reliable drinking water for schools and public institutions — low operating cost, high social impact.",
    gradient: "linear-gradient(135deg, #6fd9e0 0%, #2ba5b8 55%, #16636f 100%)",
    image: schoolsImage,
  },
  {
    tag: "FRONTIER",
    title: "Semiconductor & Electronics",
    caption:
      "Ultra-pure water for semiconductor fabs, display manufacturing and precision electronics — without the burden on regional aquifers.",
    gradient:
      "radial-gradient(circle at 50% 45%, #6dfc9a 0%, #1f9b4d 45%, #0a3d1e 100%)",
    image: semiconductorImage,
  },
  {
    tag: "REMOTE",
    title: "Mining & Energy",
    caption:
      "Self-sufficient water for remote mining camps, oil & gas operations, and off-grid energy sites across deserts and highlands.",
    gradient:
      "radial-gradient(circle at 50% 45%, #7fe89a 0%, #2f9e4f 45%, #114d24 100%)",
    image: miningEnergyImage,
  },
  {
    tag: "PLANET",
    title: "Disaster Relief & Climate",
    caption:
      "Rapid-deploy AWG for disaster zones, refugee settlements and climate-displaced populations — water services where it is needed most.",
    gradient: "linear-gradient(135deg, #eef3fa 0%, #a9c3dd 55%, #5c7ea3 100%)",
    image: disasterReliefImage,
  },
];
