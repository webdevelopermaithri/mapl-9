import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/maithri-logo-new.png";

const NAV_ITEMS = [
  { label: "Technology", to: "/technology" },
  {
    label: "Products",
    to: "/products",
    singleColumn: true,
    dropdown: [
      { label: "Products Overview", to: "/products" },
      { label: "All Products", to: "/products/all" },
      { label: "Signature", to: "/products/signature" },
      { label: "Magnum", to: "/products/magnum" },
      { label: "Premium", to: "/products/premium" },
      { label: "Classic", to: "/products/classic" },
      { label: "Residential", to: "/products/residential" },
      { label: "Advanced AWG", to: "/products/advanced-awg" },
      { label: "Dehumidification", to: "/products/dehumidification" },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "Impact", to: "/impact" },
  {
    label: "R&D",
    to: "/rnd",
  },
  { label: "Media House", to: "/media-house" },
  { label: "Blogs", to: "/media-house#journal" },
  { label: "About Us", to: "/philosophy" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the full-screen mobile menu is open so the
  // page behind it can't scroll along with the overlay's own content.
  useEffect(() => {
    if (mobileOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileOpen]);

  const navRef = useRef(null);
  const closeTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const openNow = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };

  const closeWithDelay = () => {
    // small delay so moving diagonally from the nav link into the
    // dropdown panel below it doesn't close the panel prematurely
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
    <header className={`navbar ${isHome ? "navbar--home" : ""}`}>
      <div className="navbar__inner">
        {/* Logo Only */}
        <NavLink to="/" className="navbar__brand">
          <img
            src={logo}
            alt="Maithri Aquatech"
            className="navbar__logo"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar__links" ref={navRef}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="navbar__item"
              onMouseEnter={() => item.dropdown && openNow(item.label)}
              onMouseLeave={() => item.dropdown && closeWithDelay()}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive ? "navbar__link--active" : ""
                  }`
                }
                onClick={() => {
                  // Let the click navigate normally to item.to (the same
                  // overview page the dropdown's first entry points to);
                  // just make sure the dropdown closes after navigating.
                  if (item.dropdown) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {item.label}

                {item.dropdown && (
                  <svg
                    className={`navbar__chevron ${
                      openDropdown === item.label
                        ? "navbar__chevron--open"
                        : ""
                    }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </NavLink>

              {item.dropdown && (
                <div
                  className={`navbar__dropdown ${
                    item.dropdown.length > 6 && !item.singleColumn
                      ? "navbar__dropdown--grid"
                      : "navbar__dropdown--column"
                  } ${openDropdown === item.label ? "navbar__dropdown--open" : ""}`}
                >
                  <div className="navbar__dropdown-inner">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.label}
                        className="navbar__dropdown-item"
                        onClick={() => {
                          setOpenDropdown(null);
                          navigate(subItem.to);
                        }}
                      >
                        <span>{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/design-your-water-system#contact"
          className="navbar__cta"
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="navbar__burger"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation — full-screen overlay */}
      {mobileOpen && (
        <div className="navbar__mobile-overlay">
          <div className="navbar__mobile-header">
            <NavLink
              to="/"
              className="navbar__brand"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={logo}
                alt="Maithri Aquatech"
                className="navbar__logo"
              />
            </NavLink>

            <button
              className="navbar__mobile-close"
              aria-label="Close Menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1 1L19 19M19 1L1 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="navbar__mobile">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="navbar__mobile-group">
                <NavLink
                  to={item.to}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>

                {item.dropdown && (
                  <div className="navbar__mobile-dropdown">
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        to={subItem.to}
                        className="navbar__mobile-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="navbar__mobile-footer">
            <NavLink
              to="/design-your-water-system#contact"
              className="navbar__cta navbar__cta--mobile"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path
                  d="M1 6H13M13 6L8 1M13 6L8 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      )}
    </header>

    {/* Reserves the space the now-fixed navbar no longer occupies in
        the document flow, on every page except Home (whose hero is
        designed to sit directly under the transparent floating navbar). */}
    {!isHome && <div className="navbar__spacer" aria-hidden="true" />}
    </>
  );
}
