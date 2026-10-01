import { useNavigate } from "react-router-dom";
import PortfolioHero from "../components/RnD/AllPortfolio/PortfolioHero.jsx";
import PortfolioGrid from "../components/RnD/AllPortfolio/PortfolioGrid.jsx";
import { ENTRIES } from "../data/portfolioEntries";
import { categoryPath } from "../utils/categoryRoutes.js";

const GRID_ID = "all-portfolio-grid";

// "All Portfolio" — a dedicated R&D subsection/page, ported from the
// standalone maithri-portfolio build. This is intentionally its own
// page (route: /rnd/all-portfolio) rather than a section spliced into
// pages/RnD.jsx, so the existing R&D page and R&D Overview are left
// completely untouched. Navbar, Footer and FloatingButtons are already
// rendered once by App.jsx, so this page only composes its own content.
//
// Since this page already IS the "All" section, clicking "All" just
// scrolls down to the grid. Clicking any other category pill (Water,
// Healthcare, Hydrogen, ...) redirects to that category's own dedicated
// page, matching the redirect behavior on every other R&D page.
export default function RnDAllPortfolio() {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    if (category === "ALL") {
      const el = document.getElementById(GRID_ID);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(categoryPath(category));
  };

  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero onExplore={goToCategory} />
      <PortfolioGrid id={GRID_ID} entries={ENTRIES} />
    </div>
  );
}
