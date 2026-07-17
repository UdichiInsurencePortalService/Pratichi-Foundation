import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
} from 'lucide-react';
import logo from '../../../src/assets/logo/p-logo.png'; // 🔁 Update with your logo path
import styles from './Footer.module.css';

/**
 * Footer
 * Premium footer for Pratichi Foundation.
 * Palette: forest green / gold / blush / ivory (matches site design system)
 * Type: Fraunces (display) + Inter (body)
 */
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeState, setSubscribeState] = useState('idle'); // idle | success
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Show back-to-top only after the reader has scrolled a meaningful distance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 480);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal footer content with a soft fade-up once it enters the viewport
  useEffect(() => {
    const node = footerRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubscribe = useCallback(
    (e) => {
      e.preventDefault();
      if (!email.trim()) return;
      // Hook up to a real subscription service here.
      setSubscribeState('success');
      setEmail('');
      window.setTimeout(() => setSubscribeState('idle'), 3500);
    },
    [email]
  );

  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${inView ? styles.footerVisible : ''}`}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className={styles.srOnly}>
        Footer
      </h2>

      <div className={styles.topDivider} aria-hidden="true">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className={styles.dividerSvg}>
          <path d="M0 12 C 200 24, 400 0, 600 12 S 1000 24, 1200 12" />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={`${styles.col} ${styles.brandCol}`}>
            <Link to="/" className={styles.brand}>
              <img alt="Pratichi Foundation logo" src={logo} className={styles.logo} />
              <span className={styles.brandName}>Pratichi Foundation</span>
            </Link>
            <p className={styles.tagline}>
              Building a more just, inclusive, and empowered society &mdash; one
              community at a time.
            </p>
            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://www.instagram.com/_pratichifoundation?igsh=b2x3amE2dzQycWN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Pratichi Foundation on Instagram"
                >
                  <Instagram size={18} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sandip-basu-54328125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Pratichi Foundation on LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <nav className={styles.col} aria-label="Quick links">
            <p className={styles.colHeading}>Quick Links</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/" className={styles.link}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Useful Links */}
          <nav className={styles.col} aria-label="Useful links">
            <p className={styles.colHeading}>Useful Links</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/donation" className={styles.link}>
                  <span>Donate</span>
                </Link>
              </li>
              <li>
                <Link to="/facilites" className={styles.link}>
                  <span>Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  <span>Support</span>
                </Link>
              </li>
              
        
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.col}>
            <p className={styles.colHeading}>Contact</p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={17} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  LGF-54, Captain Vijyant Thapar Marg, D Block, Pocket D, Sector
                  18, Noida, Uttar Pradesh 201301
                </span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={17} strokeWidth={1.75} aria-hidden="true" />
                <a href="tel:+919818152403" className={styles.contactLink}>
                  +91 98181 52403
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={17} strokeWidth={1.75} aria-hidden="true" />
                <a
                  href="mailto:pratichifoundation2019@gmail.com"
                  className={styles.contactLink}
                >
                  pratichifoundation2019@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={`${styles.col} ${styles.newsletterCol}`}>
            <p className={styles.colHeading}>Stay Informed</p>
            <p className={styles.newsletterCopy}>
              Occasional updates on our programs and impact. No spam, ever.
            </p>
            <form
              className={styles.newsletterForm}
              onSubmit={handleSubscribe}
              noValidate
            >
              <label htmlFor="footer-email" className={styles.srOnly}>
                Email address
              </label>
              <div className={styles.newsletterField}>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={styles.newsletterInput}
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className={styles.newsletterButton}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
              <p
                className={styles.newsletterStatus}
                role="status"
                aria-live="polite"
              >
                {subscribeState === 'success' ? "You're on the list — thank you." : ''}
              </p>
            </form>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {year} Pratichi Foundation. All rights reserved.
          </p>
          <p className={styles.designedBy}>
            Designed &amp; built with care in India
          </p>
        </div>
      </div>

      {/* <button
        type="button"
        onClick={scrollToTop}
        className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ''}`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2} aria-hidden="true" />
      </button> */}
    </footer>
  );
};

export default Footer;