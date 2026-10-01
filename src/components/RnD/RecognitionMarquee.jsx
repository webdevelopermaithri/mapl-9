import React, { useState } from "react";

import iitRoorkeeLogo from "../../assets/rnd/mou-logos/iit-roorkee.png";
import tnauLogo from "../../assets/rnd/mou-logos/tnau.png";
import exposomeLogo from "../../assets/rnd/mou-logos/exposome.png";
import nicmarHyderabadLogo from "../../assets/rnd/mou-logos/nicmar-hyderabad.png";
import tidesLogo from "../../assets/rnd/mou-logos/tides.png";

const COLLABORATIONS = [
  {
    name: "IIT Hyderabad",
    place: "Hyderabad",
    alt: "IIT Hyderabad",
    logoSrc: "https://www.google.com/s2/favicons?domain=iith.ac.in&sz=128",
    link: "https://www.iith.ac.in/",
  },
  {
    name: "BITS Pilani, Hyderabad Campus",
    place: "Hyderabad",
    alt: "BITS Hyderabad",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=bits-pilani.ac.in&sz=128",
    link: "https://www.bits-pilani.ac.in/hyderabad/",
  },
  {
    name: "NICMAR University",
    place: "Hyderabad",
    alt: "NICMAR University, Hyderabad",
    logoSrc: nicmarHyderabadLogo,
    link: "https://www.nicmar.ac.in/hyderabad/campus",
  },
  {
    name: "Anant National University",
    place: "Gujarat",
    alt: "Anant National University",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=anu.edu.in&sz=128",
    link: "https://www.anu.edu.in/",
  },
  {
    name: "SVNIT Surat",
    place: "Surat",
    alt: "SVNIT Surat",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=svnit.ac.in&sz=128",
    link: "https://www.svnit.ac.in/",
  },
  {
    name: "IIT Roorkee",
    place: "Roorkee",
    alt: "IIT Roorkee",
    logoSrc: iitRoorkeeLogo,
    link: "https://www.iitr.ac.in/",
  },
  {
    name: "MITS Kerala",
    place: "Kerala",
    alt: "MITS Kerala",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=mgmits.ac.in&sz=128",
    link: "https://mgmits.ac.in/",
  },
  {
    name: "IIT (BHU) Varanasi",
    place: "Varanasi",
    alt: "IIT BHU",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=iitbhu.ac.in&sz=128",
    link: "https://iitbhu.ac.in/",
  },
  {
    name: "CSIR-IICT",
    place: "Hyderabad",
    alt: "CSIR-IICT",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=iict.res.in&sz=128",
    link: "https://www.iict.res.in/",
  },
  {
    name: "VNR VJIET",
    place: "Hyderabad",
    alt: "VNR VJIET",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=vnrvjiet.ac.in&sz=128",
    link: "https://vnrvjiet.ac.in/",
  },
  {
    name: "Mahindra University",
    place: "Hyderabad",
    alt: "Mahindra University",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=mahindrauniversity.edu.in&sz=128",
    link: "https://www.mahindrauniversity.edu.in/",
  },
  {
    name: "Tamil Nadu Agricultural University",
    place: "Coimbatore",
    alt: "Tamil Nadu Agricultural University",
    logoSrc: tnauLogo,
    link: "https://tnau.ac.in/",
  },
  {
    name: "MBCET",
    place: "Thiruvananthapuram",
    alt: "MBCET",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=mbcet.ac.in&sz=128",
    link: "https://mbcet.ac.in/",
  },
  {
    name: "Visarj Technologies Pvt. Ltd.",
    place: "Hyderabad",
    alt: "Visarj Technologies",
    logoSrc:
      "https://www.google.com/s2/favicons?domain=visarj.in&sz=128",
    link: "https://www.visarj.in/",
  },
  {
    name: "Exposome Pvt. Ltd.",
    place: "Mumbai",
    alt: "Exposome",
    logoSrc: exposomeLogo,
    link: "https://exposome.in/",
  },
  {
    name: "TIDES Institute of Health and Medical Science",
    place: "Chennai",
    alt: "TIDES Institute of Health and Medical Science",
    logoSrc: tidesLogo,
    link: "https://tidesmedaudit.com/index.html",
  },
];

function OrgLogo({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="rnd-rec-logo-fallback">{alt}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rnd-rec-logo-img"
      onError={() => setFailed(true)}
    />
  );
}

function CollaborationItem({
  name,
  place,
  alt,
  logoSrc,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rnd-rec-item-link"
      aria-label={`Visit ${name} website`}
    >
      <div className="rnd-rec-item">
        <OrgLogo src={logoSrc} alt={alt} />

        <div className="rnd-rec-text">
          <div className="rnd-rec-title">{name}</div>
          <div className="rnd-rec-org">{place}</div>
        </div>
      </div>
    </a>
  );
}

export default function RecognitionBar() {
  const loopItems = [...COLLABORATIONS, ...COLLABORATIONS];

  return (
    <div className="rnd-rec-wrap">
      <style>{`
        .rnd-rec-wrap {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 18px 0;
          background: linear-gradient(
            90deg,
            #16324f 0%,
            #1f4a73 50%,
            #16324f 100%
          );
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .rnd-rec-wrap::before,
        .rnd-rec-wrap::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .rnd-rec-wrap::before {
          left: 0;
          background: linear-gradient(
            90deg,
            #16324f 0%,
            rgba(22,50,79,0) 100%
          );
        }

        .rnd-rec-wrap::after {
          right: 0;
          background: linear-gradient(
            270deg,
            #16324f 0%,
            rgba(22,50,79,0) 100%
          );
        }

        .rnd-rec-label {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 230px;
          z-index: 3;

          display: flex;
          align-items: center;

          padding-left: 28px;

          background: #16324f;

          color: #f2c14e;

          font-family: "Segoe UI", Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.4;

          box-shadow:
            12px 0 20px -8px rgba(22,50,79,0.9);
        }

        .rnd-rec-track {
          display: flex;
          width: max-content;

          padding-left: 230px;

          animation: rnd-rec-scroll 40s linear infinite;
        }

        .rnd-rec-wrap:hover .rnd-rec-track {
          animation-play-state: paused;
        }

        @keyframes rnd-rec-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .rnd-rec-item-link {
          display: block;
          flex-shrink: 0;

          color: inherit;
          text-decoration: none;

          outline: none;
        }

        .rnd-rec-item {
          display: flex;
          align-items: center;

          gap: 14px;

          padding: 0 40px;

          min-height: 42px;

          white-space: nowrap;

          border-left: 1px solid
            rgba(255,255,255,0.18);

          cursor: pointer;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
        }

        .rnd-rec-item-link:hover .rnd-rec-item {
          transform: translateY(-2px);
        }

        .rnd-rec-item-link:hover {
          opacity: 1;
        }

        .rnd-rec-logo-img {
          display: block;

          width: auto;
          height: 36px;
          max-width: 90px;

          object-fit: contain;

          flex-shrink: 0;

          border-radius: 4px;

          transition:
            transform 0.25s ease;
        }

        .rnd-rec-item-link:hover .rnd-rec-logo-img {
          transform: scale(1.08);
        }

        .rnd-rec-logo-fallback {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 90px;
          min-height: 32px;

          padding: 5px 8px;

          box-sizing: border-box;

          color: rgba(255,255,255,0.75);

          border: 1px dashed
            rgba(255,255,255,0.3);

          border-radius: 5px;

          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;

          text-align: center;

          flex-shrink: 0;
        }

        .rnd-rec-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .rnd-rec-title {
          color: rgba(255,255,255,0.92);

          font-family:
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: 13px;
          font-weight: 600;

          letter-spacing: 0.3px;

          transition:
            color 0.25s ease;
        }

        .rnd-rec-item-link:hover .rnd-rec-title {
          color: #f2c14e;
        }

        .rnd-rec-org {
          color: rgba(255,255,255,0.55);

          font-family:
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: 12px;
          font-weight: 400;

          font-style: italic;
        }

        @media (max-width: 900px) {
          .rnd-rec-label {
            width: 190px;
            padding-left: 20px;
            font-size: 11px;
            letter-spacing: 1.5px;
          }

          .rnd-rec-track {
            padding-left: 190px;
          }

          .rnd-rec-item {
            padding: 0 30px;
          }
        }

        @media (max-width: 600px) {
          .rnd-rec-wrap {
            padding: 15px 0;
          }

          .rnd-rec-label {
            width: 145px;
            padding-left: 12px;
            font-size: 9px;
            letter-spacing: 1px;
          }

          .rnd-rec-track {
            padding-left: 145px;
            animation-duration: 32s;
          }

          .rnd-rec-item {
            gap: 10px;
            padding: 0 20px;
          }

          .rnd-rec-logo-img {
            height: 30px;
            max-width: 70px;
          }

          .rnd-rec-logo-fallback {
            width: 70px;
            font-size: 9px;
          }

          .rnd-rec-title {
            font-size: 11px;
          }

          .rnd-rec-org {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rnd-rec-track {
            animation: none;
          }
        }
      `}</style>

      <div className="rnd-rec-label">
        R&amp;D MoUs/Collaborations
      </div>

      <div className="rnd-rec-track">
        {loopItems.map((item, index) => (
          <CollaborationItem
            key={`${item.name}-${index}`}
            name={item.name}
            place={item.place}
            alt={item.alt}
            logoSrc={item.logoSrc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}