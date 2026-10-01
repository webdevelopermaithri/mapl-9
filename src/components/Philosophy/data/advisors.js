// "The Advisors" carousel data — Maithri Aquatech advisory board.
// Images live in src/assets/advisors/ and are imported directly so Vite
// bundles + hashes them like every other local asset in the project.

import sSridhar from "../assets/advisors/s-sridhar.png";
import shyamMohan from "../assets/advisors/shyam-mohan.png";
import chetanChoudhury from "../assets/advisors/chetan-choudhury.png";
import rnBagdalakar from "../assets/advisors/rn-bagdalakar.png";

export const ADVISORS = [
  {
    name: "Dr. S. Sridhar",
    role: "Advisor",
    bio: "A Principal Scientist at CSIR-IICT, Dr. S. Sridhar brings 20 years of expertise in membrane separation processes. He has developed multiple technologies for the chemical industry while contributing significantly to rural welfare through water purification initiatives and academic development projects, combining scientific research with practical solutions that deliver societal impact.",
    image: sSridhar,
  },
  {
    name: "Shyam Mohan",
    role: "Advisor",
    bio: "A serial entrepreneur with over 32 years of experience across hospitality, food and beverage, and agribusiness, Shyam Mohan is building his third venture. A Harvard Business School AMP alumnus and Oberoi School postgraduate, he champions sustainability, food safety, organic produce, traceability, LEED, GlobalG.A.P. and Rainforest Alliance certification standards globally today.",
    image: shyamMohan,
  },
  {
    name: "Chetan Choudhury",
    role: "Advisor",
    bio: "A strategy and public policy professional with approximately 15 years of international experience, Chetan Choudhury advises the Prime Minister's Office in the UAE. His expertise spans strategy, technology, public policy, finance and social enterprise across the USA, Canada, UAE and India, including experience with leading firms KPMG and Deloitte globally.",
    image: chetanChoudhury,
  },
  {
    name: "R. N. Bagdalakar",
    role: "Advisor",
    bio: "A technocrat and electrical engineer, R. N. Bagdalakar brings 35 years of experience at Bharat Electronics Limited, where he retired as Director of Human Resources. His career spans defence, aerospace and homeland security, with expertise across multiple technical disciplines and extensive experience bridging engineering leadership, people management and organisational development.",
    image: rnBagdalakar,
  },
];
