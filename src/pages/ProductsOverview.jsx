import "../components/ProductsOverview/mp-base.css";
import Hero from "../components/ProductsOverview/Hero.jsx";
import RecognitionBar from "../components/ProductsOverview/RecognitionBar.jsx";
import ProductCategories from "../components/ProductsOverview/ProductCategories.jsx";
import CTASection from "../components/ProductsOverview/CTASection.jsx";

// This is the single source of truth for the "Products" page content
// (the MEGHDOOT product overview). Both the "Products" nav button and
// the "Product Overview" dropdown link route here, so they always show
// the exact same page.
export default function ProductsOverview() {
  return (
    <main className="mp-page">
      <Hero />
      <RecognitionBar />
      <ProductCategories />
      <CTASection />
    </main>
  );
}
