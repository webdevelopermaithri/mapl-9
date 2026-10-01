import React from "react";
import Eyebrow from "./common/Eyebrow";
import { TEAM_LEADS, TEAM_RESEARCHERS } from "../../data/rndData";

import ramkrishnaMukkavilli from "../../assets/management/ramkrishna-mukkavilli.png";
import shyamsunderMani from "../../assets/management/shyamsunder-mani.png";
import raveeshG from "../../assets/rnd/team/raveesh-g.png";
import anupamaPrakash from "../../assets/rnd/team/anupama-prakash.png";
import gouseAhammadShaik from "../../assets/rnd/team/gouse-ahammad-shaik.png";
import subramaniGnanasekaran from "../../assets/rnd/team/subramani-gnanasekaran.png";
import gowriShankar from "../../assets/rnd/team/gowri-shankar.png";

const IMAGES = {
  "ramkrishna-mukkavilli": ramkrishnaMukkavilli,
  "shyamsunder-mani": shyamsunderMani,
  "raveesh-g": raveeshG,
  "anupama-prakash": anupamaPrakash,
  "gouse-ahammad-shaik": gouseAhammadShaik,
  "subramani-gnanasekaran": subramaniGnanasekaran,
  "gowri-shankar": gowriShankar,
};

function TeamCard({ name, image, align, children }) {
  return (
    <div className={`team-card${align === "left" ? " team-card--left" : ""}`}>
      <div className="team-card-photo">
        <img src={IMAGES[image]} alt={name} />
      </div>
      <h3 className="whero-serif team-card-name">{name}</h3>
      {children}
    </div>
  );
}

// Truncates the bio by default and reveals the rest behind a "Read more"
// toggle, so a 4-up card grid stays a uniform height even though some
// researchers have much longer bios than others.
function ResearcherBio({ highlight, bio }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="team-card-bio-wrap">
      <p className={`team-card-bio${expanded ? "" : " team-card-bio--clamped"}`}>
        <strong style={{ color: "#0B2545" }}>{highlight}</strong> {bio}
      </p>
      <button
        type="button"
        className="team-card-readmore"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

const MARQUEE_CARD_WIDTH = 260;
const MARQUEE_CARD_GAP = 22;
const MARQUEE_SECONDS_PER_CARD = 4.5;

// Infinite auto-scrolling marquee: the researcher list is rendered twice
// back-to-back and animated left by exactly the width of one full set, so
// the loop point is invisible and it can scroll forever. Pauses on
// hover/focus so visitors can read a bio or hit "Read more".
function ResearcherCarousel({ people }) {
  const [isPaused, setIsPaused] = React.useState(false);
  const total = people.length;
  if (!total) return null;

  const setWidth = total * (MARQUEE_CARD_WIDTH + MARQUEE_CARD_GAP);
  const duration = total * MARQUEE_SECONDS_PER_CARD;
  const doubled = [...people, ...people];

  return (
    <div
      className="team-marquee-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes team-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-${setWidth}px); }
        }
      `}</style>
      <div
        className="team-marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {doubled.map((p, i) => (
          <div className="team-marquee-card" key={`${p.name}-${i < total ? "a" : "b"}`}>
            <TeamCard name={p.name} image={p.image} align="left">
              {p.role && <p className="team-card-role">{p.role}</p>}
              <ResearcherBio highlight={p.highlight} bio={p.bio} />
            </TeamCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="rnd-team" style={{ padding: "70px 8vw 40px", background: "#fff" }}>
      <style>{`
        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #F5F9FD;
          border: 1.5px solid #E1E7F0;
          border-radius: 20px;
          padding: 26px 24px 32px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -22px rgba(11,37,69,0.3);
          border-color: #C9DBF2;
        }
        .team-card-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 14px;
          overflow: hidden;
          background: #E4EEFB;
          margin-bottom: 20px;
        }
        .team-card-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 12%;
          display: block;
        }
        .team-card-name {
          font-size: 21px;
          color: #0B2545;
          font-weight: 600;
          margin: 0 0 6px 0;
        }
        .team-card-role {
          font-size: 13.5px;
          font-weight: 600;
          color: #1E56A0;
          margin: 0 0 12px 0;
        }
        .team-card-bio {
          font-size: 13.5px;
          line-height: 1.65;
          color: #5A6779;
          margin: 0;
        }
        .team-leads-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
          gap: 26px;
          max-width: 820px;
          margin: 0 auto;
        }
        .team-marquee-wrap {
          margin-top: 28px;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%);
        }
        .team-marquee-track {
          display: flex;
          width: max-content;
          gap: 22px;
          animation-name: team-marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .team-marquee-card {
          flex: 0 0 260px;
          width: 260px;
        }
        .team-card--left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 28px 22px 26px;
          height: 100%;
        }
        .team-card--left .team-card-photo {
          width: 168px;
          height: 168px;
          aspect-ratio: 1 / 1;
          border-radius: 14px;
          margin: 0 auto 18px;
        }
        .team-card--left .team-card-name {
          width: 100%;
          font-size: 19px;
          text-align: center;
        }
        .team-card-bio-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        .team-card--left .team-card-bio {
          text-align: center;
          font-size: 13.5px;
          max-width: 100%;
          margin: 0 auto;
        }
        .team-card-bio--clamped {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .team-card-readmore {
          margin-top: 10px;
          border: none;
          background: none;
          padding: 0;
          font-size: 13px;
          font-weight: 700;
          color: #1E56A0;
          cursor: pointer;
          align-self: center;
        }
        .team-card-readmore:hover {
          text-decoration: underline;
        }
        .team-card--left .team-card-role {
          display: inline-block;
          text-align: center;
          font-size: 12.5px;
          letter-spacing: 0.04em;
          color: #1E56A0;
          background: #E4EEFB;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
      `}</style>

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Eyebrow center>THE R&amp;D TEAM</Eyebrow>
        <h2
          className="whero-serif"
          style={{
            fontSize: "clamp(30px, 3.4vw, 46px)",
            color: "#0B2545",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.14,
            textAlign: "center",
          }}
        >
          Leadership and <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>research minds</span> behind the platform.
        </h2>

        {/* Leadership row */}
        <div className="team-leads-grid" style={{ marginTop: 46 }}>
          {TEAM_LEADS.map((p) => (
            <TeamCard key={p.name} name={p.name} image={p.image}>
              <p className="team-card-role">{p.role}</p>
              <p className="team-card-bio">{p.bio}</p>
            </TeamCard>
          ))}
        </div>

        {/* Researchers — infinite auto-scrolling marquee */}
        <ResearcherCarousel people={TEAM_RESEARCHERS} />
      </div>
    </section>
  );
}
