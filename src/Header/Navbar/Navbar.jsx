import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/logo/p-logo.png";

import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  HeartHandshake,
  Info,
  Mail,
  Heart,
  Home as HomeIcon,
} from "lucide-react";

/* Single source of truth for the menu — used for both the desktop bar
   and the mobile drawer so links never drift out of sync. */
const NAV_ITEMS = [
  { label: "Home", to: "/", icon: HomeIcon },
  {
    label: "Sanik School",
    icon: GraduationCap,
    children: [
      { label: "Overview", to: "/SanikOverview" },
      { label: "Facilities", to: "/Sanikfacilities" },
      { label: "Fee Structure", to: "/SanikFee" },
      { label: "Achievement", to: "/SanikAchi" },
      { label: "Donation", to: "/Donations"}
    ],
  },
  {
    label: "Old Age Home",
    icon: HeartHandshake,
    children: [
      { label: "Overview", to: "/overview" },
      { label: "Facilities", to: "/facilites" },
      { label: "Pricing", to: "/pricing" },
      { label: "Donation", to: "/donation" },
    ],
  },
  { label: "About Us", to: "/about", icon: Info },
  { label: "Contact Us", to: "/contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [desktopDropdown, setDesktopDropdown] = useState("");

  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const isChildActive = (item) =>
    item.children?.some((child) => child.to === location.pathname);
  const isItemActive = (item) =>
    item.to === location.pathname || isChildActive(item);

  /* ---- Sticky background + hide-on-scroll-down ----
     Runs inside requestAnimationFrame so it's capped to one update per
     paint (no matter how many "scroll" events the browser fires), and
     compares against a small pixel threshold so trackpad/mobile
     momentum jitter can't flip the visible state back and forth.
     Because the listener only reads/writes refs, it never needs to be
     re-attached — it's registered once, on mount. */
  useEffect(() => {
    const HIDE_THRESHOLD = 8; // px of downward travel before hiding
    const SHOW_THRESHOLD = 4; // px of upward travel before reappearing
    const TOP_OFFSET = 80; // always show near the very top of the page

    const updateNavbar = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < TOP_OFFSET) {
        setVisible(true);
      } else if (delta > HIDE_THRESHOLD) {
        setVisible(false);
      } else if (delta < -SHOW_THRESHOLD) {
        setVisible(true);
      }
      // else: movement was smaller than the threshold — leave the
      // current visible state untouched to avoid flicker.

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateNavbar);
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Never hide the header while the mobile drawer is open ---- */
  useEffect(() => {
    if (mobileMenuOpen) setVisible(true);
  }, [mobileMenuOpen]);

  /* ---- Close mobile drawer if resized to desktop ---- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  /* ---- Close everything on route change ---- */
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown("");
    setDesktopDropdown("");
  }, [location.pathname]);

  /* ---- Lock body scroll while the drawer is open ---- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* ---- Escape closes drawer / desktop dropdowns ---- */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setDesktopDropdown("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* ---- Click outside closes an open desktop dropdown ---- */
  useEffect(() => {
    if (!desktopDropdown) return undefined;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopDropdown("");
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [desktopDropdown]);

  const toggleDesktopDropdown = useCallback(
    (label) => setDesktopDropdown((prev) => (prev === label ? "" : label)),
    []
  );
  const toggleMobileDropdown = (label) =>
    setMobileDropdown((prev) => (prev === label ? "" : label));
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <div className="pf-navbar">
      <header
        className={`main-header ${isScrolled ? "scrolled" : ""} ${
          visible ? "" : "hidden"
        }`}
      >
        <div className="pf-navbar__inner">
          <Link to="/" className="navbar-logo" aria-label="Pratichi Foundation, home">
            <img src={logo} alt="Pratichi Foundation logo" />
          </Link>

          <nav
            className="nav-links d-none d-lg-flex"
            ref={navRef}
            aria-label="Primary"
          >
            <ul className="menu">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li
                    className={`pf-dropdown ${
                      desktopDropdown === item.label ? "active" : ""
                    } ${isItemActive(item) ? "is-active" : ""}`}
                    key={item.label}
                  >
                    <button
                      type="button"
                      className="pf-dropdown-trigger"
                      aria-haspopup="true"
                      aria-expanded={desktopDropdown === item.label}
                      onClick={() => toggleDesktopDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown size={15} className="pf-dropdown-chevron" aria-hidden="true" />
                    </button>

                    {/* Outer box sits flush against the trigger (no gap) so
                        the hover chain is never broken while the cursor
                        travels from the trigger down into the panel. */}
                    <div className="pf-dropdown-menu" role="menu">
                      <div className="pf-dropdown-menu__panel">
                        <ul className="pf-dropdown-menu__list">
                          {item.children.map((child) => (
                            <li key={child.to} role="none">
                              <Link
                                to={child.to}
                                role="menuitem"
                                className={location.pathname === child.to ? "is-active" : ""}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={isItemActive(item) ? "is-active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="pf-navbar__actions">
            <Link to="/donation" className="pf-nav-cta d-none d-lg-inline-flex">
              <Heart size={16} strokeWidth={2.4} aria-hidden="true" />
              Donate
            </Link>

            <button
              type="button"
              className={`menu-toggle d-lg-none ${mobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="pf-mobile-drawer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`pf-nav-backdrop ${mobileMenuOpen ? "show" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile off-canvas drawer */}
      <div
        id="pf-mobile-drawer"
        className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav__header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="Pratichi Foundation logo" />
          </Link>
          <button
            type="button"
            className="mobile-nav__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav__list">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return item.children ? (
              <li key={item.label} className={isItemActive(item) ? "is-active" : ""}>
                <button
                  className="mobile-dropdown-toggle"
                  onClick={() => toggleMobileDropdown(item.label)}
                  aria-expanded={mobileDropdown === item.label}
                >
                  <span className="mobile-dropdown-toggle__label">
                    <Icon size={18} aria-hidden="true" />
                    {item.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`mobile-dropdown-chevron ${
                      mobileDropdown === item.label ? "rotated" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <ul
                  className={`mobile-submenu ${
                    mobileDropdown === item.label ? "open" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={location.pathname === child.to ? "is-active" : ""}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className={isItemActive(item) ? "is-active" : ""}>
                <Link to={item.to} onClick={() => setMobileMenuOpen(false)}>
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/donation"
          className="pf-nav-cta pf-nav-cta--block"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Heart size={16} strokeWidth={2.4} aria-hidden="true" />
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Navbar;