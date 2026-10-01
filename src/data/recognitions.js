/**
 * REAL LOGOS: this data is already wired for actual logo files —
 * it does not include any logo artwork itself, since those marks are
 * owned by each organization.
 *
 * To finish it:
 * 1. Save each organization's real logo file (from their own site's
 *    press/brand page) into your project, e.g. /public/logos/ficci.png
 * 2. Set the matching `logoSrc` value below to that path.
 *
 * Until a `logoSrc` is set, the item falls back to a plain text label
 * so the layout never breaks or shows a placeholder graphic.
 */

export const RECOGNITIONS = [
  {
    title: "Smart Urban Innovation Winner",
    org: "Federation of Indian Chambers of Commerce & Industry",
    alt: "FICCI",
    logoSrc:
      "https://ficci.in/public/storage/uploads/hddDviUaFHm0CSK8ZNvFslEBf01WMbaaKpykifq1.png",
  },
  {
    title: "Excellence in Water Management",
    org: "Confederation of Indian Industry",
    alt: "CII",
    logoSrc: "https://www.cii.in/images_new/cii-logoNew.png",
  },
  {
    title: "Top Innovative MSME Recognition",
    org: "The Economic Times",
    alt: "ET",
    logoSrc: "https://economictimes.indiatimes.com/photo/121622119.cms",
  },
  {
    title: "Best Startup Recognition",
    org: "Telangana State Industry Awards",
    alt: "Telangana State",
    logoSrc:
      "https://nationalexcellencecouncil.com/wp-content/uploads/2025/06/NEC_Logo_Main.png",
  },
  {
    title: "Water-From-Air Thought Leadership",
    org: "TEDx",
    alt: "TEDx",
    logoSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEzqBw7rDxPrDhTsDxPsDxPqDhPvDxTzEBXtDxTtDxXuEBTvEBTrDxPtDxTvEBTpDRXHyRt5AAAAEXRSTlMAAkxxY1YetP//58n4MpXXDVGjRlUAAACdSURBVHgB5cuHEcQgDABBkRTI/Vf7Eji28D6buAN8JXcG7tVCH3bx3Pi0loSKxCwizJls1qjYRmppAH2MKjIKkc1aV7Q7pgmIrbB4xC4SEHE2xYYxs+hTQLJ1Kuah2Uu0I8cXskULnWJ4YQ9aXIgknN7oLcUQe+WMD2SpFilWYa4BNlbDZYY2Z4rTcGJrE5zOK8S9ONid63Fy8H/9ANCdCc4shszmAAAAAElFTkSuQmCC",
  },
  {
    title: "Water Stewardship 2022",
    org: "United Nations",
    alt: "UN",
    logoSrc: "https://www.un.org/sites/un2.un.org/files/2021/08/un-logo-big.png",
  },
  {
    title: "UN Global Compact Network India 2022",
    org: "UN GCNI",
    alt: "UN Global Compact Network India",
    logoSrc:
      "https://globalcompact.in/wp-content/themes/GCNI/assets/images/logo2.png",
  },
  {
    title: "Global Tech Innovator India Finalist",
    org: "KPMG",
    alt: "KPMG",
    logoSrc:
      "https://kpmg.com/content/experience-fragments/kpmgpublic/in/en/site/header/master/_jcr_content/root/header/logo.coreimg.svg/1732260814565/logo.svg",
  },
  {
    title: "Innovation in Climate Action",
    org: "ECA", // could not verify exact org
    alt: "ECA",
    logoSrc: "https://cgrindia.org/cgr-logo.png?v=2",
  },
  {
    title: "Innovation in Water Technology",
    org: "WSA", // could not verify exact org
    alt: "WSA",
    logoSrc: "https://wsa.teriin.org/images/wsa-logo.jpg",
  },
];
