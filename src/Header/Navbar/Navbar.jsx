import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/logo/p-logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? "" : name);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`main-header ${isScrolled ? "scrolled" : ""} ${visible ? "" : "hidden"}`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>

          <nav className="nav-links d-none d-lg-flex">
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li className="dropdown">
                <span>Sanik School</span>
                <ul className="dropdown-menu">
                  <li><Link to="/SanikOverview">Overview</Link></li>
                  <li><Link to="/Sanikfacilities">Facilities</Link></li>
                  <li><Link to="/SanikFee">Fee Structure</Link></li>
                  <li><Link to="/SanikAchi">Achievement</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <span>Old Age Home</span>
                <ul className="dropdown-menu">
                  <li><Link to="/overview">Overview</Link></li>
                  <li><Link to="/facilites">Facilities</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/donation">Donation</Link></li>
                </ul>
              </li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <div className="menu-toggle d-lg-none" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li>
            <button className="mobile-dropdown-toggle" onClick={() => toggleDropdown("sanik")}>
              Sanik School <span>{activeDropdown === "sanik" ? "−" : "+"}</span>
            </button>
            {activeDropdown === "sanik" && (
              <ul className="mobile-submenu">
                <li><Link to="/SanikOverview" onClick={toggleMobileMenu}>Overview</Link></li>
                <li><Link to="/Sanikfacilities" onClick={toggleMobileMenu}>Facilities</Link></li>
                <li><Link to="/SanikFee" onClick={toggleMobileMenu}>Fee Structure</Link></li>
                <li><Link to="/SanikAchi" onClick={toggleMobileMenu}>Achievement</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button className="mobile-dropdown-toggle" onClick={() => toggleDropdown("oldage")}>
              Old Age Home <span>{activeDropdown === "oldage" ? "−" : "+"}</span>
            </button>
            {activeDropdown === "oldage" && (
              <ul className="mobile-submenu">
                <li><Link to="/overview" onClick={toggleMobileMenu}>Overview</Link></li>
                <li><Link to="/facilites" onClick={toggleMobileMenu}>Facilities</Link></li>
                <li><Link to="/pricing" onClick={toggleMobileMenu}>Pricing</Link></li>
                <li><Link to="/donation" onClick={toggleMobileMenu}>Donation</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
