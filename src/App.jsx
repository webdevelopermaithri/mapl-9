import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import FloatingButtons from './components/FloatingButtons/FloatingButtons.jsx'
import WaterCursor from './components/common/WaterCursor.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import Home from './pages/Home.jsx'
import Technology from './pages/Technology.jsx'
import RnD from './pages/RnD.jsx'
import RnDAllPortfolio from './pages/RnDAllPortfolio.jsx'
import RnDWater from './pages/RnDWater.jsx'
import RnDCategoryPage from './pages/RnDCategoryPage.jsx'
import Meghdoot from './pages/Meghdoot.jsx'
import AllProducts from './pages/AllProducts.jsx'
import CategoryProducts from './pages/CategoryProducts.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { ProductSpecsProvider } from './context/ProductSpecsContext.jsx'
import ProductSpecsDrawer from './components/AllProducts/ProductSpecsDrawer.jsx'
import Applications from './pages/Applications.jsx'
import Projects from './pages/Projects.jsx'
import Impact from './pages/Impact.jsx'
import MediaHouse from './pages/MediaHouse.jsx'
import Philosophy from './pages/Philosophy.jsx'
import DesignSystem from './pages/DesignSystem.jsx'

// Navbar, Footer and FloatingButtons are rendered ONCE here, outside
// <Routes>, so every page (including the new /philosophy route) gets
// the exact same navbar, footer and floating contact buttons instead
// of each page importing its own copy.
//
// Exception: the Home page ("/"). Its <HeroCarousel /> owns a single
// internal scroll container and renders its own <Footer /> as the last
// slide inside that container (see heroCarousel/components/carousel/
// HeroCarousel.jsx). If this global Footer rendered underneath it too,
// Home would end up with two footers stacked in the DOM, and the extra
// height would give the outer page a second scrollbar on top of the
// carousel's own internal one. So we skip the global Footer on "/" only.
export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <ProductSpecsProvider>
      <WaterCursor />
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/rnd" element={<RnD />} />
        <Route path="/rnd/all-portfolio" element={<RnDAllPortfolio />} />
        <Route path="/rnd/water" element={<RnDWater />} />
        <Route path="/rnd/healthcare" element={<RnDCategoryPage category="HEALTHCARE" />} />
        <Route path="/rnd/horticulture" element={<RnDCategoryPage category="HORTICULTURE" />} />
        <Route path="/rnd/industrial" element={<RnDCategoryPage category="INDUSTRIAL" />} />
        <Route path="/rnd/sustainability" element={<RnDCategoryPage category="SUSTAINABILITY" />} />
        {/* Hydrogen and Carbon tracks now live inside Sustainability, and
            Digital lives inside Industrial — old links redirect straight
            to the merged category page instead of an empty one. */}
        <Route path="/rnd/hydrogen" element={<Navigate to="/rnd/sustainability" replace />} />
        <Route path="/rnd/carbon" element={<Navigate to="/rnd/sustainability" replace />} />
        <Route path="/rnd/digital" element={<Navigate to="/rnd/industrial" replace />} />
        <Route path="/products" element={<Meghdoot />} />
        <Route path="/products/all" element={<AllProducts />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/products/:categorySlug" element={<CategoryProducts />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/media-house" element={<MediaHouse />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/design-your-water-system" element={<DesignSystem />} />
      </Routes>
      {!isHome && <Footer />}
      <FloatingButtons />
      <ProductSpecsDrawer />
    </ProductSpecsProvider>
  )
}
