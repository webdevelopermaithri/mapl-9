// Each entry pairs a real award/recognition with the issuing organization's
// logo. `logoSrc` is tried first; if it 404s or fails to load for any reason
// (broken link, hotlink protection, offline), the ticker falls back to the
// plain `acronym` text so the layout never breaks or shows a missing-image
// icon — see the <img onError> handling in RecognitionHeroSection.jsx.
export const RECOGNITIONS = [
  {
    acronym: "FICCI",
    text: "Smart urban innovation winner",
    logoSrc: "https://ficci.in/public/storage/uploads/hddDviUaFHm0CSK8ZNvFslEBf01WMbaaKpykifq1.png",
  },
  {
    acronym: "CII",
    text: "Excellence in water management",
    logoSrc: "https://www.cii.in/images_new/cii-logoNew.png",
  },
  {
    acronym: "ET",
    text: "Top innovative MSME recognition",
    logoSrc: "https://economictimes.indiatimes.com/photo/121622119.cms",
  },
  {
    acronym: "TS",
    text: "Best startup recognition",
    logoSrc: "https://nationalexcellencecouncil.com/wp-content/uploads/2025/06/NEC_Logo_Main.png",
  },
  {
    acronym: "TED",
    text: "Water-from-air thought leadership",
    logoSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEzqBw7rDxPrDhTsDxPsDxPqDhPvDxTzEBXtDxTtDxXuEBTvEBTrDxPtDxTvEBTpDRXHyRt5AAAAEXRSTlMAAkxxY1YetP//58n4MpXXDVGjRlUAAACdSURBVHgB5cuHEcQgDABBkRTI/Vf7Eji28D6buAN8JXcG7tVCH3bx3Pi0loSKxCwizJls1qjYRmppAH2MKjIKkc1aV7Q7pgmIrbB4xC4SEHE2xYYxs+hTQLJ1Kuah2Uu0I8cXskULnWJ4YQ9aXIgknN7oLcUQe+WMD2SpFilWYa4BNlbDZYY2Z4rTcGJrE5zOK8S9ONid63Fy8H/9ANCdCc4shszmAAAAAElFTkSuQmCC",
  },
  {
    acronym: "UN",
    text: "Water stewardship 2022",
    logoSrc: "https://www.un.org/sites/un2.un.org/files/2021/08/un-logo-big.png",
  },
  {
    acronym: "SDG",
    text: "UN Global Compact Network India 2022",
    logoSrc: "https://globalcompact.in/wp-content/themes/GCNI/assets/images/logo2.png",
  },
  {
    acronym: "KPMG",
    text: "Global tech innovator India finalist",
    logoSrc:
      "https://kpmg.com/content/experience-fragments/kpmgpublic/in/en/site/header/master/_jcr_content/root/header/logo.coreimg.svg/1732260814565/logo.svg",
  },
  {
    acronym: "ECA",
    text: "Innovation in climate action",
    logoSrc: "https://cgrindia.org/cgr-logo.png?v=2",
  },
  {
    acronym: "WSA",
    text: "Innovation in water technology",
    logoSrc: "https://wsa.teriin.org/images/wsa-logo.jpg",
  },
];
