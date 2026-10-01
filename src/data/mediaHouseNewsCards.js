// Real press-coverage links, shown as cards inside the LatestNews modal.
// `tag` matches the eyebrow tags used in `newsList` (mediaHouseNews.js) so
// that clicking a right-side box can filter this same list down to its
// topic.
//
// `image` is a topical photo used as the card's visual anchor/background.
// `logo` is only set where Maithri's own asset library actually has the
// publication's real logo on file (Telangana Today) — for outlets whose
// logo isn't part of this project's assets, the topical `image` doubles
// as the card art instead of a placeholder or invented logo.
import mouSigning from '../assets/mediaHouse/maithri-contec-global-mou.png'
import founderDesk from '../assets/mediaHouse/founder-desk-portrait.png'
import cweicVisit from '../assets/mediaHouse/cweic-visit.png'
import meghdootKiosk from '../assets/mediaHouse/meghdoot-kiosk-signage.png'
import gsticConference from '../assets/mediaHouse/gstic-conference.png'
import berkeleyNasaForum from '../assets/mediaHouse/berkeley-nasa-forum.png'
import teriDpa from '../assets/mediaHouse/teri-dpa-water-neutrality.png'
import ariaBottling from '../assets/mediaHouse/meghdoot-aria-bottling.png'
import textilePlant from '../assets/mediaHouse/textile-plant.png'
import telanganaTodayLogo from '../assets/mediaHouse/telangana-today-logo.png'

export const newsCards = [
  // ---- LATEST NEWS (DP World strategic investment, July 2026) ----
  {
    tag: 'LATEST NEWS',
    outlet: 'Deccan Herald',
    initials: 'DH',
    title: 'Maithri Aquatech Welcomes DP World as Strategic Investor',
    body: "DP World, one of the world's leading supply chain and logistics companies, has made a strategic equity investment in Maithri Aquatech to support deployment of its atmospheric water generation (AWG) technology across DP World's global network.",
    date: '24 Jul 2026',
    meta: '1 week ago',
    url: 'https://www.deccanherald.com/amp/story/agencies/maithri-aquatech-welcomes-dp-world-as-strategic-investor-4080689',
    image: mouSigning,
  },
  {
    tag: 'LATEST NEWS',
    outlet: 'YourStory',
    initials: 'YS',
    title: "Maithri Aquatech draws DP World's backing in a sign of Indian climate tech coming of age",
    body: 'The Hyderabad climate-tech startup behind MEGHDOOT®, which produces drinking water from air, has secured strategic backing from DP World, with the logistics major picking up a 14% stake.',
    date: '01 Jul 2026',
    meta: '1 month ago',
    url: 'https://yourstory.com/2026/06/dp-world-maithri-aquatech-water-air-climate-tech-investment',
    image: founderDesk,
  },
  {
    tag: 'LATEST NEWS',
    outlet: 'Gulf News',
    initials: 'GN',
    title: 'Maithri Aquatech welcomes DP World as strategic investor',
    body: "Coverage of DP World's strategic equity investment in Maithri Aquatech, supporting the rollout of atmospheric water generation technology across DP World's operations worldwide.",
    date: '10 Jul 2026',
    meta: '3 weeks ago',
    url: 'https://gulfnews.com/business/corporate-news/maithri-aquatech-welcomes-dp-world-as-strategic-investor-1.500603472',
    image: cweicVisit,
  },
  {
    tag: 'LATEST NEWS',
    outlet: 'The Tribune',
    initials: 'TI',
    title: 'DP World to pilot atmospheric water generation technology across global operations',
    body: "Following its strategic investment, DP World will pilot Maithri Aquatech's MEGHDOOT® systems in real-world environments across different geographies, generating operational data on performance at scale.",
    date: '14 Jul 2026',
    meta: '2 weeks ago',
    url: 'https://www.tribuneindia.com/news/business/dp-world-to-pilot-atmospheric-water-generation-technology-across-global-operations-after-strategic-investment-in-maithri-aquatech/',
    image: meghdootKiosk,
  },

  // ---- PRESS ROOM (MoUs & institutional partnerships) ----
  {
    tag: 'PRESS ROOM',
    outlet: 'PIB, Govt of India',
    initials: 'PIB',
    title: 'IIT Roorkee and Maithri Aquatech Join Hands to Pioneer Sustainable Water Solutions in India',
    body: "IIT Roorkee and Maithri Aquatech signed an MoU to collaborate on joint research, technology development, and pilot demonstrations, supporting India's National Water Mission and Jal Shakti Abhiyan.",
    date: '08 Oct 2025',
    meta: '8 Oct 2025',
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2176151',
    image: gsticConference,
  },
  {
    tag: 'PRESS ROOM',
    outlet: 'India Education Diary',
    initials: 'IE',
    title: 'IIT Roorkee and Maithri Aquatech Join Hands to Pioneer Sustainable Water Solutions in India',
    body: 'The MoU, signed in the presence of IIT Roorkee director Prof. K.K. Pant, focuses on optimizing AWG systems for varied climatic conditions and expanding social impact in water-stressed regions.',
    date: '08 Oct 2025',
    meta: '8 Oct 2025',
    url: 'https://indiaeducationdiary.in/iit-roorkee-and-maithri-aquatech-join-hands-to-pioneer-sustainable-water-solutions-in-india/',
    image: berkeleyNasaForum,
  },
  {
    tag: 'PRESS ROOM',
    outlet: 'TERI',
    initials: 'TERI',
    title: 'TERI and Maithri Aquatech sign MoU to generate water from air moisture',
    body: "TERI and Maithri Aquatech signed an MoU to advance the Government of India's vision of universal access to drinking water through 'Air to Water' technology, with TERI studying the tech's adaptability across climates.",
    date: '27 Feb 2020',
    meta: '27 Feb 2020',
    url: 'https://www.teriin.org/press-release/teri-and-maithri-aquatech-sign-mou-generate-water-air-moisture',
    image: teriDpa,
  },

  // ---- FIELD BRIEF (deployments & expansion on the ground) ----
  {
    tag: 'FIELD BRIEF',
    outlet: 'Maithri Aquatech',
    initials: 'MA',
    title: "Maithri Aquatech sets up world's first water-from-air bottling plant in Hyderabad",
    body: "A packaged-water bottling plant using the MEGHDOOT® atmospheric water generator went live in Hyderabad, branded 'ARIA Lifewater' and certified by BIS and FSSAI, generating over 2.5 million litres annually.",
    date: '10 Sep 2021',
    meta: '10 Sept 2021',
    url: 'https://www.maithriaqua.com/post/maithri-aquatech-sets-up-world-s-first-water-from-air-bottling-plant-in-hyd',
    image: ariaBottling,
  },
  {
    tag: 'FIELD BRIEF',
    outlet: 'Telangana Today',
    initials: 'TT',
    title: 'Hyderabad-based Maithri Aquatech plans to tap new cities',
    body: 'Beyond its Cherlapally and Chennai facilities, the company outlined plans for a new manufacturing unit in Bengaluru, with ₹20 crore already invested in R&D and manufacturing.',
    date: '14 Nov 2021',
    meta: '14 Nov 2021',
    url: 'https://telanganatoday.com/hyderabad-based-maithri-aquatech-plans-to-tap-new-cities',
    image: textilePlant,
    logo: telanganaTodayLogo,
  },
]
