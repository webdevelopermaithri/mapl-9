import { Fragment, useEffect, useRef, useState } from "react";

import { SLIDES, NAV_SLIDE_COUNT, SOCIAL_SIGNALS_SLIDE } from "../../data/slides";
import "../../styles/animations.css";

import MeghdootHeroSection from "../sections/MeghdootHeroSection";
import RecognitionBar from "../shared/RecognitionBar";
import CertificationsSection from "../sections/CertificationsSection";
import SocialSignalsSection from "../sections/SocialSignalsSection";
import DefaultHeroSection from "../sections/DefaultHeroSection";
import TrustedByBrandsSection from "../sections/TrustedByBrandsSection";
import JoinMissionSection from "../sections/JoinMissionSection";

import SlideDots from "./SlideDots";
import SlideCounter from "./SlideCounter";
import Footer from "../../../components/Footer/Footer";

// Slides whose background should hug their own content height instead of
// forcing a fixed 100vh panel (which was leaving large empty background
// areas above/below shorter content, e.g. Foundation, Certifications,
// Scale-Stats, Social Signals — see slides.js for each slide's flag).
function isAutoHeightSlide(slide) {
  return Boolean(
    slide.meghdootHeroSlide ||
    slide.certificationsSlide ||
    slide.socialSignalsSlide
  );
}

export default function HeroCarousel() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const bgRefs = useRef([]);
  const cursorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);

  // Let the navbar know once the hero has been scrolled at all, so it can
  // switch from fully transparent (over the bright slide-1 photo) to its
  // normal solid look — this now fires as soon as scrolling starts,
  // instead of waiting for slide 2 to become the active slide, and clears
  // again once scrolled back to the very top of slide 1. Cleaned up on
  // unmount so other pages' navbar is never affected.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const updateScrolledState = () => {
      document.documentElement.dataset.heroScrolled = container.scrollTop > 4 ? "true" : "false";
    };

    updateScrolledState();
    container.addEventListener("scroll", updateScrolledState);
    return () => {
      container.removeEventListener("scroll", updateScrolledState);
      delete document.documentElement.dataset.heroScrolled;
    };
  }, []);

  // Custom cursor follows the mouse.
  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Track which full-height section is active via IntersectionObserver.
  useEffect(() => {
    const root = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { root, threshold: [0.6] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (i) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden", cursor: "none", userSelect: "none", WebkitUserSelect: "none" }}>
      <div ref={containerRef} className="carousel-viewport">
        {SLIDES.map((slide, i) => (
          <Fragment key={i}>
          <section
            data-index={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="hero-slide-section"
            style={{
              // Every mapped slide is a full viewport tall by default, so
              // scroll-snap lands flush with no gap between slides. The
              // slides below auto-size to their own content height instead
              // of forcing a fixed viewport height, so each background hugs
              // its copy/cards instead of leaving empty space above/below.
              height: isAutoHeightSlide(slide) ? "auto" : "100vh",
              minHeight: isAutoHeightSlide(slide) ? 0 : undefined,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: undefined,
              padding: slide.certificationsSlide ? 0 : "0 6%",
              fontFamily: "Georgia, 'Times New Roman', serif",
              overflow: "hidden",
              backgroundColor: (slide.meghdootHeroSlide || slide.certificationsSlide || slide.socialSignalsSlide) ? (slide.bg || "#fff") : undefined,
            }}
          >
            {slide.meghdootHeroSlide ? (
              <MeghdootHeroSection slide={slide} i={i} activeIndex={activeIndex} setIsHoveringBtn={setIsHoveringBtn} bgRefs={bgRefs} />
            ) : slide.certificationsSlide ? (
              <CertificationsSection slide={slide} i={i} activeIndex={activeIndex} setIsHoveringBtn={setIsHoveringBtn} />
            ) : slide.socialSignalsSlide ? (
              <SocialSignalsSection slide={slide} i={i} activeIndex={activeIndex} />
            ) : (
              <DefaultHeroSection slide={slide} i={i} activeIndex={activeIndex} setIsHoveringBtn={setIsHoveringBtn} bgRefs={bgRefs} />
            )}
          </section>
          {/* Recognition ticker — kept pinned in its original spot right
              after the Credibility slide (see
              src/heroCarousel/components/shared/RecognitionBar.jsx),
              instead of tracking the MEGHDOOT® hero slide, which has since
              moved earlier in the deck. */}
          {slide.recognitionBarAfter && <RecognitionBar />}
          {/* Trusted by brands — pinned right after the MEGHDOOT® Foundation
              slide, instead of its earlier fixed spot after all the slides. */}
          {slide.trustedByBrandsAfter && <TrustedByBrandsSection setIsHoveringBtn={setIsHoveringBtn} />}
          </Fragment>
        ))}

        {/* Social Signals — moved here, right after Trusted by brands,
            swapping its original spot in the SLIDES sequence (see
            SOCIAL_SIGNALS_SLIDE in data/slides.js) */}
        <section
          data-index={SLIDES.length}
          ref={(el) => (slideRefs.current[SLIDES.length] = el)}
          style={{
            height: "auto",
            minHeight: 0,
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "0 6%",
            fontFamily: "Georgia, 'Times New Roman', serif",
            overflow: "hidden",
            backgroundColor: SOCIAL_SIGNALS_SLIDE.bg || "#fff",
          }}
        >
          <SocialSignalsSection slide={SOCIAL_SIGNALS_SLIDE} i={SLIDES.length} activeIndex={activeIndex} />
        </section>

        {/* Join the mission — closing CTA, sits just above the footer */}
        <JoinMissionSection setIsHoveringBtn={setIsHoveringBtn} />

        {/* Footer — the Home page locks body scroll so the carousel can
            handle its own internal scrolling (see pages/Home.jsx), which
            means the globally-rendered <Footer /> in App.jsx is never
            reachable here. Rendering it as the last item inside this
            scrollable viewport puts it back at the very bottom of the
            Home page, after Trusted-by-brands / Join Mission. */}
        <Footer />
      </div>

      {/* dots, fixed to viewport, right side — only for the first NAV_SLIDE_COUNT slides */}
      <SlideDots
        slides={SLIDES}
        navSlideCount={NAV_SLIDE_COUNT}
        activeIndex={activeIndex}
        scrollToSlide={scrollToSlide}
        setIsHoveringBtn={setIsHoveringBtn}
      />

      {/* slide counter, fixed, bottom left — only for the first NAV_SLIDE_COUNT slides */}
      <SlideCounter navSlideCount={NAV_SLIDE_COUNT} activeIndex={activeIndex} />
    </div>
  );
}
