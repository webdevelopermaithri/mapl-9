import { useEffect, useRef } from "react";
import images from "../../config/images";
import { hero } from "../../data/philosophy-content";
import RecognitionBar from "./RecognitionBar";
import "./Hero.css";

/**
 * The circular visual on the right of the hero is fully swappable:
 * pass a different `src` prop, or just edit `heroSphere` in
 * src/config/images.js. Everything else (ripple rings, falling
 * droplet, glass sphere) is generated in CSS/SVG and layers on top
 * of whatever image is supplied.
 */
function WaterSphere({ src = images.heroSphere, alt = "Water droplet forming ripples" }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return undefined;

    function handleMove(e) {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
    }
    function handleLeave() {
      node.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="sphere-stage">
      <div className="sphere-orbit" ref={wrapRef}>
        <div className="sphere-main">
          <img src={src} alt={alt} className="sphere-img" />
          <span className="sphere-ripple sphere-ripple--1" />
          <span className="sphere-ripple sphere-ripple--2" />
          <span className="sphere-ripple sphere-ripple--3" />
        </div>
        <span className="sphere-drop" aria-hidden="true" />
      </div>
      <div className="sphere-ghost" aria-hidden="true" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="phi-container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">{hero.eyebrow}</span>
          <h1 className="hero-title">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            <br />
            <span className="italic-serif hero-title-accent">{hero.titleItalic}</span>
          </h1>
          <p className="hero-body">{hero.body}</p>
        </div>
        <WaterSphere />
      </div>
      <RecognitionBar />
    </section>
  );
}
