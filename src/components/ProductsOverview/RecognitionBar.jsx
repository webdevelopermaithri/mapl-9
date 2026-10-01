import React from "react";

const RECOGNITIONS = [
  {
    title: "Smart Urban Innovation Winner",
    org: "Federation of Indian Chambers of Commerce & Industry",
    alt: "FICCI",
    logoSrc: "https://ficci.in/public/storage/uploads/hddDviUaFHm0CSK8ZNvFslEBf01WMbaaKpykifq1.png",
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
    logoSrc: "https://nationalexcellencecouncil.com/wp-content/uploads/2025/06/NEC_Logo_Main.png",
  },
  {
    title: "Water-From-Air Thought Leadership",
    org: "TEDx",
    alt: "TEDx",
    logoSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEzqBw7rDxPrDhTsDxPsDxPqDhPvDxTzEBXtDxTtDxXuEBTvEBTrDxPtDxTvEBTpDRXHyRt5AAAAEXRSTlMAAkxxY1YetP//58n4MpXXDVGjRlUAAACdSURBVHgB5cuHEcQgDABBkRTI/Vf7Eji28D6buAN8JXcG7tVCH3bx3Pi0loSKxCwizJls1qjYRmppAH2MKjIKkc1aV7Q7pgmIrbB4xC4SEHE2xYYxs+hTQLJ1Kuah2Uu0I8cXskULnWJ4YQ9aXIgknN7oLcUQe+WMD2SpFilWYa4BNlbDZYY2Z4rTcGJrE5zOK8S9ONid63Fy8H/9ANCdCc4shszmAAAAAElFTkSuQmCC",
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
    logoSrc: "https://globalcompact.in/wp-content/themes/GCNI/assets/images/logo2.png",
  },
  {
    title: "Global Tech Innovator India Finalist",
    org: "KPMG",
    alt: "KPMG",
    logoSrc: "https://kpmg.com/content/experience-fragments/kpmgpublic/in/en/site/header/master/_jcr_content/root/header/logo.coreimg.svg/1732260814565/logo.svg",
  },
  {
    title: "Innovation in Climate Action",
    org: "ECA",
    alt: "ECA",
    logoSrc: "https://cgrindia.org/cgr-logo.png?v=2",
  },
  {
    title: "Innovation in Water Technology",
    org: "WSA",
    alt: "WSA",
    logoSrc: "https://wsa.teriin.org/images/wsa-logo.jpg",
  },
];

function OrgLogo({ src, alt }) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return <span className="mp-rec-logo-fallback">{alt}</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="mp-rec-logo-img"
      onError={() => setFailed(true)}
    />
  );
}

function RecognitionItem({ title, org, alt, logoSrc }) {
  return (
    <div className="mp-rec-item">
      <span className="mp-rec-title">{title}</span>
      <OrgLogo src={logoSrc} alt={alt} />
      <span className="mp-rec-org">{org}</span>
    </div>
  );
}

export default function RecognitionBar() {
  const loopItems = [...RECOGNITIONS, ...RECOGNITIONS];

  return (
    <div className="mp-rec-wrap">
      <style>{`
        .mp-rec-wrap {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #16324f 0%, #1f4a73 50%, #16324f 100%);
          padding: 18px 0;
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .mp-rec-wrap::before,
        .mp-rec-wrap::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 90px;
          z-index: 2;
          pointer-events: none;
        }
        .mp-rec-wrap::before {
          left: 0;
          background: linear-gradient(90deg, #16324f 0%, transparent 100%);
        }
        .mp-rec-wrap::after {
          right: 0;
          background: linear-gradient(270deg, #16324f 0%, transparent 100%);
        }
        .mp-rec-label {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          padding: 0 28px;
          background: #16324f;
          z-index: 3;
          font-family: "Segoe UI", sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          color: #f2c14e;
          text-transform: uppercase;
          box-shadow: 12px 0 20px -8px rgba(22,50,79,0.9);
        }
        .mp-rec-track {
          display: flex;
          width: max-content;
          animation: mp-rec-scroll 34s linear infinite;
          padding-left: 170px;
        }
        .mp-rec-wrap:hover .mp-rec-track {
          animation-play-state: paused;
        }
        @keyframes mp-rec-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .mp-rec-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 40px;
          white-space: nowrap;
          border-left: 1px solid rgba(255,255,255,0.18);
        }
        .mp-rec-title {
          font-family: "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.85);
          text-transform: uppercase;
        }
        .mp-rec-logo-img {
          height: 34px;
          max-width: 90px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        .mp-rec-logo-fallback {
          font-family: Georgia, serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.4);
          border: 1px dashed rgba(255,255,255,0.3);
          padding: 4px 10px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .mp-rec-org {
          font-family: "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          font-style: italic;
        }
      `}</style>

      <div className="mp-rec-label">Recognition</div>
      <div className="mp-rec-track">
        {loopItems.map((item, i) => (
          <RecognitionItem
            key={i}
            title={item.title}
            org={item.org}
            alt={item.alt}
            logoSrc={item.logoSrc}
          />
        ))}
      </div>
    </div>
  );
}
