// -----------------------------------------------------------------------
// Single source of truth for the Projects page copy + data.
// Every image below is imported from ./src/assets/images — nothing is
// pulled from an external/stock photo URL. Swap any file in
// src/assets/images/<name>.svg (or .jpg/.png, updating the import) for
// a real photograph and it will appear with zero other code changes.
// -----------------------------------------------------------------------

import featuredKiosk from '../assets/projects-full/images/image 7.jpg'
import secunderabadKiosk from '../assets/projects-full/images/image 7.jpg'
import coastGuardQuarters from '../assets/projects-full/images/Coast guard.jpg'
import insKardip from '../assets/projects-full/images/image 16.jpg'
import awgBottlingPlant from '../assets/projects-full/images/image 4.jpg'
import cancerInstitute from '../assets/projects-full/images/image 6.jpg'
import ongcOffshoreRig from '../assets/projects-full/images/image 2.jpg'
import primarySchool from '../assets/projects-full/images/image 13.jpg'
import privateBanking from '../assets/projects-full/images/image 17.jpg'
import kanooKanmoi from '../assets/projects-full/images/kanoo-kanmoi.jpg'
import armyUnit from '../assets/projects-full/images/image 15.jpg'
import medicalCollege from '../assets/projects-full/images/image 14.jpg'
import borderOutpost from '../assets/projects-full/images/image 12.jpg'
import girlsSchool from '../assets/projects-full/images/image 11.jpg'
import wildlifeKenya from '../assets/projects-full/images/image 10.jpg'
import ecommerceCampus from '../assets/projects-full/images/image 9.jpg'
import techCampus from '../assets/projects-full/images/image 8.jpg'
import nationalMemorial from '../assets/projects-full/images/image 5.jpg'
import waterKnowledgeCentre from '../assets/projects-full/images/image 3.jpg'
import zoologicalPark from '../assets/projects-full/images/Zological park.jpg'
import softwareCampus from '../assets/projects-full/images/softaware company.jpg'

import psErpSoftware from '../assets/projects-full/images/private-sector/ps-01-erp-software.jpg'
import psOsCompany from '../assets/projects-full/images/private-sector/ps-02-os-company.jpg'
import psComputerMakers from '../assets/projects-full/images/private-sector/ps-03-computer-makers.jpg'
import psTsavoWildlife from '../assets/projects-full/images/private-sector/ps-04-tsavo-wildlife.jpg'
import psBottlingPlant from '../assets/projects-full/images/private-sector/ps-05-bottling-plant.jpg'
import psVandalurZoo from '../assets/projects-full/images/private-sector/ps-06-vandalur-zoo.jpg'
import psCricketStadium from '../assets/projects-full/images/private-sector/ps-07-cricket-stadium.jpg'
import psBerlinMuseum from '../assets/projects-full/images/private-sector/ps-08-berlin-museum.jpg'
import psMncCampus from '../assets/projects-full/images/private-sector/ps-09-mnc-campus.jpg'

import pubCovidMobile from '../assets/projects-full/images/public-sector/pub-01-covid-mobile.jpg'
import pubKhurjaSchools from '../assets/projects-full/images/public-sector/pub-02-khurja-schools.jpg'
import pubSecunderabadKiosk from '../assets/projects-full/images/public-sector/pub-03-secunderabad-kiosk.jpg'
import pubUttarakhandSchools from '../assets/projects-full/images/public-sector/pub-04-uttarakhand-schools.jpg'
import pubNehruPlanetarium from '../assets/projects-full/images/public-sector/pub-05-nehru-planetarium.jpg'
import pubCop28Dubai from '../assets/projects-full/images/public-sector/pub-06-cop28-dubai.jpg'
import pubOngcRig from '../assets/projects-full/images/public-sector/pub-07-ongc-rig.jpg'
import pubKhalifaUniversity from '../assets/projects-full/images/public-sector/pub-08-khalifa-university.jpg'
import pubWaterKnowledgeCentre from '../assets/projects-full/images/public-sector/pub-09-water-knowledge-centre.jpg'
import pubHaragaddeVillage from '../assets/projects-full/images/public-sector/pub-10-haragadde-village.jpg'
import omanFreshcube from '../assets/projects-full/images/public-sector/oman-freshcube.jpg'

// Recognition badges that scroll beside the fixed "RECOGNITION" label
// in the hero strip (Image 1). Movable via CSS marquee.
export const heroRecognitionBadges = [
  {
    id: "ficci",
    title: "Smart Urban Innovation Winner",
    label: "FICCI",
    sub: "Federation of Indian Chambers of Commerce & Industry",
    logoSrc: "https://ficci.in/public/storage/uploads/hddDviUaFHm0CSK8ZNvFslEBf01WMbaaKpykifq1.png",
  },
  {
    id: "cii",
    title: "Excellence in Water Management",
    label: "CII",
    sub: "Confederation of Indian Industry",
    logoSrc: "https://www.cii.in/images_new/cii-logoNew.png",
  },
  {
    id: "et",
    title: "Top Innovative MSME Recognition",
    label: "ET",
    sub: "The Economic Times",
    logoSrc: "https://economictimes.indiatimes.com/photo/121622119.cms",
  },
  {
    id: "telangana",
    title: "Best Startup Recognition",
    label: "Telangana State",
    sub: "Telangana State Industry Awards",
    logoSrc: "https://nationalexcellencecouncil.com/wp-content/uploads/2025/06/NEC_Logo_Main.png",
  },
  {
    id: "tedx",
    title: "Water-From-Air Thought Leadership",
    label: "TEDx",
    sub: "TEDx",
    logoSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEzqBw7rDxPrDhTsDxPsDxPqDhPvDxTzEBXtDxTtDxXuEBTvEBTrDxPtDxTvEBTpDRXHyRt5AAAAEXRSTlMAAkxxY1YetP//58n4MpXXDVGjRlUAAACdSURBVHgB5cuHEcQgDABBkRTI/Vf7Eji28D6buAN8JXcG7tVCH3bx3Pi0loSKxCwizJls1qjYRmppAH2MKjIKkc1aV7Q7pgmIrbB4xC4SEHE2xYYxs+hTQLJ1Kuah2Uu0I8cXskULnWJ4YQ9aXIgknN7oLcUQe+WMD2SpFilWYa4BNlbDZYY2Z4rTcGJrE5zOK8S9ONid63Fy8H/9ANCdCc4shszmAAAAAElFTkSuQmCC",
  },
  {
    id: "un",
    title: "Water Stewardship 2022",
    label: "UN",
    sub: "United Nations",
    logoSrc: "https://www.un.org/sites/un2.un.org/files/2021/08/un-logo-big.png",
  },
  {
    id: "gcni",
    title: "UN Global Compact Network India 2022",
    label: "UN GCNI",
    sub: "UN Global Compact Network India",
    logoSrc: "https://globalcompact.in/wp-content/themes/GCNI/assets/images/logo2.png",
  },
  {
    id: "kpmg",
    title: "Global Tech Innovator India Finalist",
    label: "KPMG",
    sub: "KPMG",
    logoSrc: "https://kpmg.com/content/experience-fragments/kpmgpublic/in/en/site/header/master/_jcr_content/root/header/logo.coreimg.svg/1732260814565/logo.svg",
  },
  {
    id: "eca",
    title: "Innovation in Climate Action",
    label: "ECA",
    sub: "Innovation in Climate Action",
    logoSrc: "https://cgrindia.org/cgr-logo.png?v=2",
  },
  {
    id: "wsa",
    title: "Innovation in Water Technology",
    label: "WSA",
    sub: "Water Technology",
    logoSrc: "https://wsa.teriin.org/images/wsa-logo.jpg",
  },
];

// Image 1 — hero copy.
export const projectsHero = {
  eyebrow: 'Projects',
  titlePlain: 'Water, already flowing in',
  titleEm: '40+ countries.',
  subtitle:
    'Villages. Navies. Resorts. Hospitals. Hydrogen plants. Smart cities. A decade of quietly built proof — each installation a chapter in the Maithri ledger.',
}

// Image 2 — the single featured case study.
export const featuredProject = {
  eyebrow: 'Featured · 2019',
  categoryLabel: 'Public Mobility',
  title: 'Secunderabad Railway Station Kiosk',
  subtitle: "World's First Water-from-Air Railway Kiosk",
  location: 'Secunderabad, Telangana, India',
  year: '2019',
  capacity: '1,000 LPD x4',
  description:
    'A public refill kiosk model built with Indian Railways partners to generate drinking water at the station and reduce dependence on packaged-water logistics.',
  cta: { label: 'Evaluate a similar site', href: '/design-your-water-system' },
  image: featuredKiosk,
}

// Filter tabs above the case-study grid (Image 3).
export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'corporate-esg', label: 'Corporate ESG' },
  { id: 'defence', label: 'Defence' },
  { id: 'offshore', label: 'Offshore' },
  { id: 'public-mobility', label: 'Public Mobility' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'education', label: 'Education' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'conservation', label: 'Conservation' },
]

// -----------------------------------------------------------------------
// Images 3–5 — the case-study grid itself, one continuous filterable
// section; "All" shows every card, the other tabs narrow the same grid.
//
// Card shape (used by ProjectsGrid.jsx):
//   objective         — headline copy shown on the card FRONT
//   image              — card FRONT visual (swap the import above to replace)
//   location, capacity, dailyBeneficiaries, stakeholders, impact[],
//   testimonial        — shown on the card BACK, revealed by the flip button
// -----------------------------------------------------------------------
export const projects = [
  {
    id: 'kanoo-machinery-kanmoi-dubai',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    year: '2026',
    title: 'Kanoo Machinery: KANMOI, a Branded "Water from Air" Product',
    subtitle: 'Made from Air. Launched in Dubai.',
    objective:
      "To enable Kanoo Machinery, a division of Kanoo Industrial & Energy, to launch its own branded atmospheric water generation (AWG) product, KANMOI, built on the MEGHDOOT® platform. The aim is to give Kanoo's own employees access to clean, sustainable drinking water, and to introduce AWG to Kanoo's wider partner network.",
    location: "Kanoo's Dubai office, UAE",
    capacity: 'MEGHDOOT® 500 LPD (stainless steel), branded as KANMOI',
    dailyBeneficiaries:
      "Kanoo employees, with the first bottles going out to them. Wider rollout to Kanoo's partner network under discussion.",
    stakeholders:
      'Kanoo Machinery (Kanoo Industrial & Energy, Kanoo Group), Maithri Aquatech. Inaugurated by Mishal Kanoo, Chairman of the Kanoo Group, with the Founder and Co-founder of Maithri Aquatech present at the launch.',
    impact: [
      'Kanoo tested the water in-house against several leading bottled water brands before launch, and it held up.',
      "Provides clean, sustainable drinking water to Kanoo's own employees, starting at home.",
      'Reduces dependence on packaged bottled water and its single-use plastics and transport emissions.',
      'Marks a white-label milestone: a global group launched its own branded product on MEGHDOOT® technology.',
      'Kanoo has signalled early interest in introducing AWG to its wider partner network, a sign of where this could go.',
      'Adds to the growing number of corporates choosing MEGHDOOT® as the foundation for clean drinking water.',
    ],
    launchDate: '10 September 2026',
    linkText: 'Made from Air. Launched in Dubai.',
    image: kanooKanmoi,
  },
  {
    id: 'state-govt-department-guwahati',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    title: 'State Government Department, Guwahati',
    subtitle: 'Sustainable Drinking Water for Staff & Visitors (CSR Project)',
    objective:
      "To sustainably provide access to clean, microbe-free drinking water for the staff and visitors at a state government department, supported by a leading private bank's CSR initiative.",
    location: 'Guwahati, Assam, India',
    capacity: 'MEGHDOOT® Magnum (500 LPD)',
    dailyBeneficiaries: 'Department Staff and Visitors',
    stakeholders: 'A leading private bank, Maithri Aquatech, a state government department',
    impact: [
      'Promotes public health and community well-being by ensuring continuous access to safe, healthy drinking water for both staff and visiting citizens.',
      'Reduces dependence on local municipal water sources, acting as a model for sustainable community infrastructure.',
      'Eliminates the carbon footprint and plastic waste associated with the packaging and ferrying of traditional bottled water.',
    ],
    testimonial: {
      quote:
        'Having this system here has been a blessing for the staff and local citizens who visit our office. Clean water is a fundamental right, and seeing the community access pure, mineral-enriched water safely and freely reflects our true public health mission.',
      author: 'Department Official',
    },
    linkText: 'Public Health, Delivered Daily',
    image: privateBanking,
  },
  {
    id: 'naval-medical-facility-delhi',
    categoryId: 'defence',
    categoryLabel: 'Defence',
    title: 'Naval Medical Facility, New Delhi',
    subtitle: 'Clean Water Access for Naval Personnel & Patients (CSR Project)',
    objective:
      "To ensure a reliable, independent supply of pure drinking water for naval personnel and patients at a naval medical facility through a leading private bank's CSR mandate.",
    location: 'New Delhi, Delhi, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Naval Personnel, Medical Staff, and Patients',
    stakeholders: 'A leading private bank, Maithri Aquatech, a national naval force',
    impact: [
      'The system is strategically installed at the wellness centre for maximum accessibility by medical staff and patients.',
      'Extracted atmospheric water undergoes a strict filtration process to meet healthcare safety standards.',
      'The filtered water is enriched with vital minerals prior to dispensation.',
    ],
    testimonial: {
      quote:
        "The well-being of our personnel and their families is our highest priority. This installation doesn't just provide water; it guarantees peace of mind for our medical staff and aids in the safe recovery of our patients by ensuring every drop they drink is completely microbe-free.",
      author: 'Medical Officer',
    },
    linkText: 'Healthcare-Grade Water Security',
    image: insKardip,
  },
  {
    id: 'army-unit-gujarat',
    categoryId: 'defence',
    categoryLabel: 'Defence',
    title: 'Army Unit, Gujarat',
    subtitle: 'Sustainable Water for Frontline Personnel (CSR Project)',
    objective:
      'To provide an independent, highly sustainable source of safe drinking water for Indian Army personnel overcoming regional water scarcity challenges.',
    location: 'Gujarat, India',
    capacity: 'MEGHDOOT® Magnum (500 LPD)',
    dailyBeneficiaries: 'Army Personnel',
    stakeholders: 'A leading private bank, Maithri Aquatech, a national army',
    impact: [
      'Supports the health and operational readiness of frontline personnel in challenging terrains by providing premium, mineral-enriched drinking water.',
      'Drastically reduces the logistical burden, emissions, and costs associated with transporting drinking water to remote camps.',
      "Acts as a resilient, off-grid water source that increases the camp's self-reliance.",
    ],
    testimonial: {
      quote:
        'Securing a reliable water source in this terrain used to be a monumental logistical challenge that strained our local resources. Now, our jawans have uninterrupted access to healthy water, improving their daily welfare and allowing our unit to be completely self-reliant.',
      author: 'Camp Commander',
    },
    linkText: 'Frontline Water Independence',
    image: armyUnit,
  },
  {
    id: 'medical-college-hospital-odisha',
    categoryId: 'healthcare',
    categoryLabel: 'Healthcare',
    title: 'Government Medical College & Hospital, Odisha',
    subtitle: 'Water-Positive Healthcare Infrastructure (CSR Project)',
    objective:
      "To supply clean, mineralized, and safe drinking water to medical students, healthcare staff, and patients, elevating the public healthcare infrastructure via a leading private bank's CSR program.",
    location: 'Odisha, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Hospital Patients, Medical Students, and Healthcare Staff',
    stakeholders: 'A leading private bank, Maithri Aquatech, a government medical college & hospital',
    impact: [
      "Empowers the local healthcare infrastructure by ensuring patients and staff have secure access to safe hydration, directly improving community health outcomes.",
      "Reduces the institution's dependence on the local municipal water grid, preserving community resources.",
      'Supports public health mandates by preventing waterborne illnesses through safe, microbe-free hydration.',
    ],
    testimonial: {
      quote:
        "A hospital's first duty is to do no harm, and that starts with the water our patients and students consume. This system empowers our healthcare community, drastically reducing waterborne risks and ensuring that vulnerable patients receive the cleanest hydration possible during their treatment.",
      author: 'Hospital Administrator',
    },
    linkText: 'Do-No-Harm Hydration',
    image: medicalCollege,
  },
  {
    id: 'government-school-tamil-nadu',
    categoryId: 'education',
    categoryLabel: 'Education',
    title: 'Government School, Tamil Nadu',
    subtitle: 'Drinking Water for a Healthier Learning Environment (CSR Project)',
    objective:
      'To provide growing students and teaching staff with unhindered access to healthy, mineral-enriched drinking water, fostering a healthier learning environment.',
    location: 'A hill town in Tamil Nadu, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'School Students and Faculty',
    stakeholders: 'A leading private bank, Maithri Aquatech, a government school',
    impact: [
      'Fosters a healthier learning environment for growing students, aiding in concentration, well-being, and educational outcomes.',
      'Educates the next generation on sustainable technologies and practical water conservation methods.',
      "Operates sustainably by utilizing atmospheric humidity, removing the need to strain local water resources for the school's hydration needs.",
    ],
    testimonial: {
      quote:
        'Our students used to worry about carrying enough safe water from home to last the whole day. Now, they are not only drinking safe, mineral-rich water that keeps them focused and healthy, but they are also learning firsthand about sustainable technology that protects their future environment.',
      author: 'Senior Faculty Member',
    },
    linkText: 'Learning, Fully Hydrated',
    image: primarySchool,
  },
  {
    id: 'border-security-outpost-west-bengal',
    categoryId: 'defence',
    categoryLabel: 'Defence',
    title: 'Border Security Outpost, West Bengal',
    subtitle: 'Clean Drinking Water at a Remote Frontier (CSR Project)',
    objective:
      'To ensure an uninterrupted supply of pure, microbe-free drinking water for border security personnel stationed at a remote border outpost.',
    location: 'West Bengal, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Border Security Personnel',
    stakeholders: 'A leading private bank, Maithri Aquatech, a national border security force',
    impact: [
      'Significantly improves the daily living conditions and community welfare for border security personnel by providing premium drinking water.',
      "Creates a decentralized water source, increasing the camp's self-reliance and operational independence.",
      'Eliminates the logistical emissions and plastic waste associated with delivering packaged water to the border outpost.',
    ],
    testimonial: {
      quote:
        "Living at a remote border outpost comes with immense hardships, and access to clean drinking water shouldn't be one of them. This initiative has significantly improved the daily living conditions and health of our personnel, empowering them to focus entirely on their duties.",
      author: 'Border Security Inspector',
    },
    linkText: 'Water Security at the Frontier',
    image: borderOutpost,
  },
  {
    id: 'girls-school-dehradun',
    categoryId: 'education',
    categoryLabel: 'Education',
    title: "Girls' Higher Secondary School, Dehradun",
    subtitle: 'Clean Water for a Remote Hill School (CSR Project)',
    objective:
      'To provide access to clean, healthy, mineral-enriched drinking water to students at a public school, in a remote location on a hilly region with poor water access.',
    location: 'Dehradun, Uttarakhand, India',
    capacity: 'MEGHDOOT® Premium (150 LPD)',
    dailyBeneficiaries: 'Teachers, Students (~120)',
    stakeholders: "A girls' public school, a corporate CSR partner, Maithri Aquatech",
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water at a remote location.',
      'Improves health of students and reduces absenteeism, by eliminating reliance on unclean water.',
    ],
    testimonial: {
      quote:
        'Previously there was no water at the school. We had to fill water at home and carry it to school, and would be left without any water once complete. If needed more water we had to travel 2 km from the school to get water. We can now rely on this machine inside our school for water.',
      author: 'Student',
    },
    linkText: 'No More 2km Water Runs',
    image: girlsSchool,
  },
  {
    id: 'wildlife-kenya',
    categoryId: 'conservation',
    categoryLabel: 'Conservation',
    title: 'Water for Wildlife, Kenya',
    subtitle: "Refilling the Elephant Corridor's Dry Waterholes",
    objective:
      'To provide a water solution to the wildlife in the elephant corridor of the African Savannah, by refilling waterholes that had previously dried up.',
    location: 'A wildlife reserve, Kenya, Africa',
    capacity: 'MEGHDOOT® Magnum Plus x2',
    dailyBeneficiaries: 'Patrick Kilonzo Mwalua, Villagers, Wildlife (currently under process)',
    stakeholders: 'A local conservationist, Maithri Aquatech',
    impact: [
      'Provides clean water to the wildlife of the African Savannah.',
      'Showcases MEGHDOOT® as a solution capable of meeting water requirements in remote regions with zero water infrastructure.',
      "Eliminates dependence on the village's water supply and other locations.",
      "Expands MEGHDOOT®'s impact beyond humanity to all life.",
    ],
    testimonial: {
      quote:
        "An ideal solution for all places in Africa. We don't have access to the previous water sources we used to depend on due to climate change. It can solve Africa's water problem completely!",
      author: 'A Local Conservationist',
    },
    linkText: 'Water for All Life',
    image: wildlifeKenya,
  },
  {
    id: 'ecommerce-campus-hyderabad',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    title: 'Global E-Commerce Company Campus, Hyderabad',
    subtitle: "Water Positive at the World's Largest Campus",
    objective:
      "To sustainably give access to clean drinking water to a global e-commerce company's largest campus in the world, reduce their carbon footprint caused by ferrying of water, in line with their commitment of net-zero carbon emissions by 2040 and the United Nations Sustainable Development Goals — and to be water positive.",
    location: 'Hyderabad, Telangana, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Company Staff (~1000)',
    stakeholders: 'A global e-commerce company, Maithri Aquatech',
    impact: [
      'Provides healthy, mineral-enriched drinking water to their staff.',
      'Brings down the expenses to a fraction of the cost of branded water bottles.',
      'Reduces carbon footprint from ferrying water, and cuts single-use plastics.',
      'First MNC on the planet making use of Atmospheric Water Generation, boosting the brand.',
    ],
    linkText: 'Water-Positive, at Scale',
    image: ecommerceCampus,
  },
  {
    id: 'tech-campus-hyderabad',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    title: 'Global Technology Company Campus, Hyderabad',
    subtitle: 'Creating a Water Habitat Across the Campus',
    objective:
      "To sustainably give access to clean drinking water to a global technology company's campus, reduce their carbon footprint caused by ferrying of water, in line with their commitment of net-zero carbon emissions by 2040 and the United Nations Sustainable Development Goals — making the company water positive.",
    location: 'Hyderabad, Telangana, India',
    capacity: 'MEGHDOOT® Signature 2K (2000 LPD) x 10',
    dailyBeneficiaries: 'Campus Staff',
    stakeholders: 'A global technology company, Maithri Aquatech',
    impact: [
      'Provides healthy, mineral-enriched drinking water to staff, saving ~20 million litres of ground and surface water annually by generating ~10 million litres of Air Water every year.',
      'Brings down expenses to a fraction of the cost of branded water bottles.',
      'Reduces carbon footprint from ferrying water, and cuts single-use plastics.',
    ],
    linkText: '10M Litres of Air Water a Year',
    image: techCampus,
  },
  {
    id: 'secunderabad-kiosk',
    categoryId: 'public-mobility',
    categoryLabel: 'Public Mobility',
    year: '2019',
    title: 'Secunderabad Railway Station Kiosk',
    subtitle: "World's First Water-from-Air Railway Kiosk",
    objective:
      'To implement a sustainable water solution in partnership with a national railway authority to meet the water requirements of travellers and railway staff, with zero reliance on external water sources.',
    location: 'Secunderabad, Telangana, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD) x4',
    dailyBeneficiaries: 'Railway Staff, Police, Travellers, Vendors, Local Communities (~6000)',
    stakeholders: 'A national railway authority, Maithri Aquatech',
    impact: [
      'Access to clean, high-quality, mineral-enriched drinking water at a fraction of the cost of branded water bottles.',
      'Reduction in plastic wastage by encouraging refills.',
      "First railway station in the world with Atmospheric Water Generation technology, boosting the railway authority's brand.",
      'Employment opportunities to marginalised/under-served community members.',
    ],
    testimonial: {
      quote:
        'Railways have come up with a novel idea to conserve water and ensure healthy and safe drinking water for passengers.',
      author: 'Union Minister for Railways',
    },
    linkText: 'Transit-Scale Refill Access',
    image: secunderabadKiosk,
  },
  {
    id: 'cancer-institute',
    categoryId: 'healthcare',
    categoryLabel: 'Healthcare',
    year: '2024',
    title: 'Cancer Institute Water Harvesting Unit, Chennai',
    subtitle: 'Safer Drinking Water for Sensitive Care',
    objective:
      'To provide access to clean, microbe-free, mineral-enriched potable water to children (patients), doctors and researchers in a water-scarce location, and eliminate dependence on canned water with questionable water quality.',
    location: 'Chennai, Tamil Nadu, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Children (Patients), Doctors, Researchers (~600)',
    stakeholders: 'A leading cancer hospital, Maithri Aquatech',
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water in a water-scarce location.',
      'Eliminates external dependence for the purpose of drinking water.',
      'Avoids logistics involved in procuring canned water, storing it and distributing it to different floors.',
    ],
    testimonial: {
      quote:
        'This unique water solution is so beneficial to the children being treated at this hospital, as it is capable of supplying clean drinking water.',
      author: 'Hospital Staff',
    },
    linkText: 'Healthcare-Grade Resilience',
    image: cancerInstitute,
  },
  {
    id: 'national-memorial-tamil-nadu',
    categoryId: 'infrastructure',
    categoryLabel: 'Infrastructure',
    title: 'National Memorial, Tamil Nadu',
    subtitle: 'Public Water at a River-Island Tourist Spot (CSR Project)',
    objective:
      'To provide a dependable source of clean, healthy, mineral-enriched drinking water to locals and tourists at a tourist spot in a water-scarce river island plagued with saline water sources.',
    location: 'A coastal tourist town, Tamil Nadu, India',
    capacity: 'MEGHDOOT® Magnum (500 LPD)',
    dailyBeneficiaries: 'Tourists, Government Officials, Staff (~500)',
    stakeholders: 'A public-sector telecommunications company, a national defense research organisation, Maithri Aquatech',
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water at a tourist spot.',
      'Eliminates reliance on extremely scarce freshwater sources.',
      "Boosts the public-sector partner's brand image as an environmentally conscious organisation.",
    ],
    testimonial: {
      quote:
        "The water here tastes nice. I'm glad such solutions are being installed in such a remote location, where it is difficult to even find bottled water.",
      author: 'Tourist',
    },
    linkText: 'Clean Water on a Saline Island',
    image: nationalMemorial,
  },
  {
    id: 'awg-bottling-plant',
    categoryId: 'industrial',
    categoryLabel: 'Industrial',
    year: '2021',
    title: "World's First AWG Bottling Plant, Hyderabad",
    subtitle: 'Industrial-Scale Packaged Water from Air',
    objective:
      'To provide a renewable source of water for a sustainable bottled water plant, and also provide fresh air cooling using MEGHDOOT®.',
    location: 'Hyderabad, Telangana, India',
    capacity: '2.5 million litres per annum',
    dailyBeneficiaries: 'Bottling Plant Operations',
    stakeholders: 'Maithri Aquatech, a bottled-water company',
    impact: [
      'Provision of a renewable water source, generating 2.5 million litres of clean water on-site.',
      'Provides fresh air cooling as a by-product of water production — a proof-of-concept for a new application of MEGHDOOT®.',
    ],
    linkText: 'Category-Defining Industrial Proof',
    image: awgBottlingPlant,
  },
  {
    id: 'water-knowledge-centre-visakhapatnam',
    categoryId: 'infrastructure',
    categoryLabel: 'Infrastructure',
    title: 'Water Knowledge Resource Centre, Visakhapatnam',
    subtitle: 'Affordable Water & WASH Knowledge Sharing',
    objective:
      'To provide clean, healthy, mineral-enriched drinking water at an affordable price to local communities and also provide knowledge sharing to low-income groups and marginalised communities.',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Kiosk Operators, Local Slums, Municipal Workers (~400)',
    stakeholders: 'A municipal corporation, an international development agency, an NGO, Maithri Aquatech',
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water at an extremely affordable price.',
      'Employment opportunities to low-income groups.',
      'Knowledge sharing on best Water, Sanitation and Hygiene practices.',
    ],
    linkText: 'Water Access Meets WASH Education',
    image: waterKnowledgeCentre,
  },
  {
    id: 'ongc-offshore-rig',
    categoryId: 'offshore',
    categoryLabel: 'Offshore',
    year: '2022',
    title: 'ONGC Offshore Oil Rig, Arabian Sea',
    subtitle: 'Freshwater Where Ship Supply Can Fail',
    objective:
      "To provide round-the-clock freshwater on a national oil & gas corporation's offshore oil rig located in the Arabian Sea.",
    location: 'Arabian Sea, off the coast of Maharashtra, India',
    capacity: 'MEGHDOOT® Magnum Plus (1000 LPD)',
    dailyBeneficiaries: 'Oil Rig Crew & Helicopter Crew',
    stakeholders: 'Oil and Natural Gas Corporation (ONGC), Maithri Aquatech',
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water in a remote, off-shore site.',
      'Eliminates external dependence for freshwater, previously delivered by ships from the coast — difficult during periods of bad weather.',
      'Reduces man-management cost and logistics cost involved in ferrying water from the coast.',
    ],
    linkText: 'Offshore Resilience',
    image: ongcOffshoreRig,
  },
  {
    id: 'coast-guard-quarters',
    categoryId: 'defence',
    categoryLabel: 'Defence',
    year: '2020',
    title: 'National Coast Guard, Chennai',
    subtitle: 'Distributed Water Security for Offices and Homes',
    objective:
      "To provide consistent access to high-quality, clean drinking water to a national coast guard's residential quarters and offices in an extremely water-scarce city.",
    location: 'Chennai, Tamil Nadu, India',
    capacity: 'MEGHDOOT® Classic (40 LPD) x22, MEGHDOOT® Premium (100 LPD) x6',
    dailyBeneficiaries: 'Coast Guard Officers, Guardsmen and their Families (~1000)',
    stakeholders: 'A national coast guard, Maithri Aquatech',
    impact: [
      'Access to clean, high-quality, mineral-enriched drinking water, without external dependence in a water-scarce location.',
      'Each house gets over 25 litres of water per day.',
      'Showcased MEGHDOOT® as a solution capable of meeting water requirements for a national coast guard.',
      'Targeting to meet water requirements of 280 houses by installing a standalone solution in each house.',
    ],
    linkText: '28 Deployed AWG Systems',
    image: coastGuardQuarters,
  },
  {
    id: 'zoological-park-chennai',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    title: 'State Zoological Park, Chennai',
    subtitle: 'Making a Zoo Water-Positive, Two Kiosks at a Time (CSR Project)',
    objective:
      'To work with an automotive multinational and an NGO as part of their CSR initiative and provide a decentralised potable water solution at various points of a state zoological park.',
    location: 'Vandalur, Chennai, Tamil Nadu, India',
    capacity: 'MEGHDOOT® Water from Air Kiosk x2',
    dailyBeneficiaries: 'Zoo Staff, Visitors (>2 million annually)',
    stakeholders: 'A state zoological park, an automotive multinational, an NGO, Maithri Aquatech',
    impact: [
      'Access to clean, healthy, mineral-enriched drinking water at various points in the zoo for staff and visitors.',
      'Reduces the water footprint of the zoo with a water-positive solution.',
      'Eliminates dependence on external sources for drinking water in a water-scarce region.',
    ],
    testimonial: {
      quote:
        "We have been working with the state ministry for environment and private organisations to make the zoological park water-positive. Maithri Aquatech's MEGHDOOT® solution has been implemented as two kiosks to meet the water requirements of visitors while also helping the zoo reduce its impact on local water sources.",
      author: 'Deputy Director, the Zoological Park',
    },
    linkText: '2M+ Visitors Served Annually',
    image: zoologicalPark,
  },
  {
    id: 'software-company-campus-hyderabad',
    categoryId: 'corporate-esg',
    categoryLabel: 'Corporate ESG',
    title: 'Global Software Company Campus, Hyderabad',
    subtitle: 'Sustainable, Water-Positive Employee Hydration',
    objective:
      "To sustainably give access to clean drinking water to employees of a global software company's Hyderabad campus, in line with their commitment of becoming water positive by 2030.",
    location: 'Hyderabad, Telangana, India',
    capacity: 'MEGHDOOT® Magnum x4',
    dailyBeneficiaries: 'Company Staff (~500)',
    stakeholders: 'A global software company, Maithri Aquatech',
    impact: [
      "Provides healthy, mineral-enriched drinking water to the company's security and service staff.",
      "Reduces dependence on scarce water sources and supports the company's journey to becoming water-positive.",
      'Reduces carbon footprint caused by ferrying of water.',
    ],
    linkText: 'Water-Positive by 2030',
    image: softwareCampus,
  },
  {
    id: 'freshcube-oman',
    categoryId: 'infrastructure',
    categoryLabel: 'Infrastructure',
    title: 'Integrated Water & Food Security Project with FreshCube, Oman',
    subtitle: 'Decentralised Water & Cold Storage for an Extreme Desert Environment',
    objective:
      'To implement a self-sustaining, decentralised infrastructure solution in an extreme desert environment by deploying FreshCube powered by MEGHDOOT® AWG, providing both clean water from air and critical on-site cold storage to eliminate dependency on external logistics.',
    location: 'Oman',
    capacity: 'FreshCube powered by MEGHDOOT® AWG (Containerised, Solar-Integrated System)',
    dailyBeneficiaries: 'Remote Workforce and Local Communities in Arid Regions',
    stakeholders: 'Maithri Aquatech, Local Agricultural/Operations Partners',
    installationSetup: [
      'A plug-and-play, containerised FreshCube system was deployed in a desert setting characterized by extreme heat and zero access to groundwater or piped water.',
      'The system integrates Atmospheric Water Generation (AWG) with a cold storage unit, operating seamlessly from a single infrastructure footprint.',
      'The technology is specifically optimized for low-humidity, high-temperature conditions utilizing advanced dew point-based optimization to ensure consistent output.',
      'Solar integration can enable the entire unit to operate completely off-grid, overcoming the absence of traditional power lines.',
    ],
    impact: [
      'Absolute Resource Independence: Eliminates the need for costly water transportation and logistics by producing high-quality water directly on-site.',
      'Enhanced Food Security: Localized cold storage drastically extends the shelf life of perishables, mitigating the high food spoilage rates typical of high-temperature environments.',
      'Cost & Efficiency Optimization: Replaces the unreliable, high-cost supply chain model with a highly efficient, single-point solution for both cooling and hydration.',
      "Climate Resilience: Serves as a pioneering, scalable model for climate-resilient agriculture, remote food supply chains, and emergency disaster response in the world's harshest environments.",
    ],
    testimonial: {
      quote:
        'In the desert, the lack of water and extreme heat make sustaining operations and preserving food nearly impossible without massive logistical costs. The FreshCube system has completely redesigned how we operate, giving us our own reliable source of pure water and keeping our food safe, all without relying on a single external pipeline or delivery truck.',
    },
    linkText: 'Water & Food Security, Engineered for the Desert',
    image: omanFreshcube,
  },
]

// Private Sector carousel — sits right after the "Proof, not promise"
// case-studies grid. One slide per named installation.
export const privateSectorSlides = [
  {
    id: 'ps-erp-software',
    title: "Sustainable water for one of the world's biggest ERP software company",
    image: psErpSoftware,
  },
  {
    id: 'ps-os-company',
    title: "Making the world's biggest computer OS company water-positive.",
    image: psOsCompany,
  },
  {
    id: 'ps-computer-makers',
    title: 'Sustainable water for one of largest computer makers in the world.',
    image: psComputerMakers,
  },
  {
    id: 'ps-tsavo-wildlife',
    title: 'Water for Wildlife Project with the Waterman of Tsavo, Kenya',
    image: psTsavoWildlife,
  },
  {
    id: 'ps-bottling-plant',
    title: "World's First Water-from-Air Bottling Plant, Hyderabad",
    image: psBottlingPlant,
  },
  {
    id: 'ps-vandalur-zoo',
    title: 'Water-Positive Project at the Vandalur Zoo, Chennai',
    image: psVandalurZoo,
  },
  {
    id: 'ps-cricket-stadium',
    title: 'Water for Indian cricketers in M. A. Chidambaram Stadium, Chennai.',
    image: psCricketStadium,
  },
  {
    id: 'ps-berlin-museum',
    title: 'MEGHDOOT® exhibited in a museum gallery in Berlin, Germany.',
    image: psBerlinMuseum,
  },
  {
    id: 'ps-mnc-campus',
    title: "World's First Air Water habitat installed in Hyderabad campus of one of the world's largest MNCs.",
    image: psMncCampus,
  },
]

// Public Sector carousel — sits right after the Private Sector one.
export const publicSectorSlides = [
  {
    id: 'pub-covid-mobile',
    title: 'Mobile Response Vehicle quenches thirst of Frontline Workers during COVID-19 Lockdown, Hyderabad',
    image: pubCovidMobile,
  },
  {
    id: 'pub-khurja-schools',
    title: 'Potable Water Access for 1500+ students, teachers and staff in 15 Public Schools in Khurja, Uttar Pradesh',
    image: pubKhurjaSchools,
  },
  {
    id: 'pub-secunderabad-kiosk',
    title: "World's First Water-From-Air Kiosk at Secunderabad Junction Railway Station",
    image: pubSecunderabadKiosk,
  },
  {
    id: 'pub-uttarakhand-schools',
    title: 'Potable Water Access for 1000+ students, teachers and staff in 15 Public Schools in rural Uttarakhand',
    image: pubUttarakhandSchools,
  },
  {
    id: 'pub-nehru-planetarium',
    title: 'Providing sustainable water solution for Jawaharlal Nehru Planetarium, Bengaluru',
    image: pubNehruPlanetarium,
  },
  {
    id: 'pub-cop28-dubai',
    title: 'Providing water from air for COP28 in Sustainability Village, Dubai',
    image: pubCop28Dubai,
  },
  {
    id: 'pub-ongc-rig',
    title: "Sustainable Water Solution for ONGC's Oil Rig in the Arabian Sea",
    image: pubOngcRig,
  },
  {
    id: 'pub-khalifa-university',
    title: 'India Biggest AWG Exported to Khalifa University, Abu Dhabi',
    image: pubKhalifaUniversity,
  },
  {
    id: 'pub-water-knowledge-centre',
    title: "World's First Mobile Water-from-Air Kiosk & Knowledge Resource Centre Project with USAID and SWN",
    image: pubWaterKnowledgeCentre,
  },
  {
    id: 'pub-haragadde-village',
    title: 'Providing pay-per-use water solution for Haragadde village in Karnataka.',
    image: pubHaragaddeVillage,
  },
]

// Image 6 — closing CTA.
export const projectsCta = {
  eyebrow: 'Your Project, Next?',
  titlePlain: 'From a blueprint ',
  titleEm: 'to a living deployment.',
  body:
    'Our projects team handles everything — site assessment, design, commissioning, operations, service. End-to-end.',
  cta: { label: 'Design Your Water System', href: '/design-your-water-system#contact' },
}
