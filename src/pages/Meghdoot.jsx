import "../components/Meghdoot/meghdoot-original.css";
import Hero from "../components/Meghdoot/Hero.jsx";
import RecognitionBar from "../components/Meghdoot/RecognitionBar.jsx";
import ProductCategories from "../components/Meghdoot/ProductCategories.jsx";
import JoinMissionCta from "../components/shared/JoinMissionCta.jsx";
import ApplicationsFlowSection from "../components/ProductsOverview/ApplicationsFlowSection.jsx";

// This is the "Products" nav button's page. Hero, RecognitionBar,
// ProductCategories and CTASection here are untouched copies of the
// components from meghdoot-page.zip — nothing inside them was edited.
// (FloatingButtons from that zip is left out since the site already
// renders its own FloatingButtons globally in App.jsx — including
// both would show two floating widget stacks on the page.)
export default function Meghdoot() {
  return (
    <main className="meghdoot-page">
      <Hero />
      <RecognitionBar />
      <ProductCategories />
      <ApplicationsFlowSection />
      <JoinMissionCta />
    </main>
  );
}
