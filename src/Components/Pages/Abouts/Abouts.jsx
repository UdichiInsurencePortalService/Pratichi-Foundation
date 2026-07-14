import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import {
  FaBed,
  FaHeartbeat,
  FaUsers,
  FaUtensils,
  FaBullseye,
  FaEye,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaCheckCircle,
  FaMedal,
  FaHandsHelping,
  FaFileInvoiceDollar,
  FaAward,
  FaChevronRight,
  FaHome,
} from 'react-icons/fa';
import './About.css';
import about2 from '../../../assets/Home-image/olld.png';
import { Link } from 'react-router';

/* ------------------------------------------------------------------ */
/* Animation helpers                                                   */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CountUp({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Static content for new sections                                     */
/* ------------------------------------------------------------------ */

const CORE_VALUES = [
  {
    icon: FaHandHoldingHeart,
    tone: 'blush',
    title: 'Compassion',
    text: 'Every elder in our care is treated with warmth, patience, and genuine kindness.',
  },
  {
    icon: FaShieldAlt,
    tone: 'forest',
    title: 'Dignity & Respect',
    text: 'We honour the life experience of every senior citizen and protect their independence.',
  },
  {
    icon: FaFileInvoiceDollar,
    tone: 'gold',
    title: 'Transparency',
    text: 'Every contribution is tracked and reported, so donors always know their impact.',
  },
  {
    icon: FaMedal,
    tone: 'forest',
    title: 'Commitment to Care',
    text: 'Our team shows up every single day, in every season, without exception.',
  },
];

const WHY_CHOOSE = [
  {
    icon: FaAward,
    title: 'Registered & Trusted NGO',
    text: 'Recognised for our on-ground work and long-standing commitment to elderly welfare.',
  },
  {
    icon: FaHandsHelping,
    title: 'On-Ground Presence',
    text: 'We run our own senior care centre directly, not through layers of intermediaries.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Transparent Utilization',
    text: 'Complete visibility into how every rupee is used for food, care, and medicine.',
  },
  {
    icon: FaCheckCircle,
    title: 'Verified Impact',
    text: 'Regular impact updates and reports keep our donor community informed and involved.',
  },
];

const IMPACT_STATS = [
  { value: 850, suffix: '+', label: 'Senior Citizens Supported' },
  { value: 96000, suffix: '+', label: 'Meals Served' },
  { value: 24, suffix: '', label: 'Care Volunteers' },
  { value: 7, suffix: '', label: 'Years of Service' },
];

const Abouts = () => {
  useEffect(() => {
    const id = 'pf-about-fonts';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="pf-about">
      {/* ---------------- Premium Hero with Breadcrumb ---------------- */}
      <div className="pf-about-hero">
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <span className="pf-about-eyebrow">Pratichi Foundation</span>
            <h1 className="pf-about-h1">About Us</h1>
            <div className="pf-about-rule pf-about-rule-center" />
            <div className="pf-about-breadcrumb">
              <Link to="/" className="pf-about-crumb">
                <FaHome size={13} /> Home
              </Link>
              <FaChevronRight size={10} className="pf-about-crumb-sep" />
              <span className="pf-about-crumb pf-about-crumb-active">About Us</span>
            </div>
          </motion.div>
        </Container>
        <svg className="pf-about-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,110 L0,110 Z" fill="#FBF8F2" />
        </svg>
      </div>

      {/* ---------------- Existing: What We Are Doing (unchanged content) ---------------- */}
    <div className="service-area section-padding30 p-5">
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={7} md={10} sm={10}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="section-tittle text-center mb-80"
            >
              <span className='fw-bold'>What we are doing</span>
              <h2>We Are In A Mission To Help The Helpless</h2>
            </motion.div>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col lg={3} md={3} sm={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={0} variants={fadeUp} className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaBed size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Comfortable and luxurious living spaces</a>
                </h5>
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={1} variants={fadeUp} className="single-cat active text-center mb-50">
              <div className="cat-icon">
                <FaHeartbeat size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">24/7 medical care and wellness programs</a>
                </h5>
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={2} variants={fadeUp} className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaUsers size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Recreational activities and community engagement</a>
                </h5>
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={3} variants={fadeUp} className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaUtensils size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Nutritious meals and personal care</a>
                </h5>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>

      {/* ---------------- Existing: Who We Are (unchanged content) ---------------- */}
      <section className="about-section py-5 my-5">
        <Container>
          {/* Central Header Section */}
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="section-title position-relative"
              >
                <span className="subtitle d-inline-block fw-semibold mb-2 px-3 py-1 rounded-pill">
                  About our foundation
                </span>
                <h2 className="display-5 fw-bold mb-4">Who We Are</h2>
                <div className="title-decoration mx-auto"></div>
              </motion.div>
            </Col>
          </Row>

          {/* Content Row with Centered Image and Text */}
          <Row className="align-items-center justify-content-center">
            {/* Image Column (Centered) */}
            <Col lg={5} md={6} className="mb-5 mb-md-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="about-image position-relative text-center"
              >
                <div className="main-image rounded-3  overflow-hidden">
                  <img src={about2} alt="About Pratichi Foundation" className="img-fluid" />
                </div>
                <div className="floating-accent floating-accent-1 position-absolute"></div>
                <div className="floating-accent floating-accent-2 position-absolute"></div>
              </motion.div>
            </Col>

            {/* Content Column (Centered) */}
            <Col lg={6} md={10} className="ps-lg-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="about-content"
              >
                <p className="lead mb-4">
                  At Pratichi Foundation, we believe in the power of culture,
                  nature, and human potential to shape a better future. Founded
                  with a vision to safeguard the unique cultural identity of the
                  Himalayan region and combat the pressing challenges of climate
                  change, we are committed to creating a world where tradition
                  and innovation coexist harmoniously.
                </p>
                <div className="key-features mt-5">
                  <Row className="g-4">
                    {[
                      {
                        title: "Cultural Preservation",
                        description: "Protecting and promoting the rich heritage of the Himalayan region"
                      },
                      {
                        title: "Environmental Action",
                        description: "Implementing sustainable solutions to address climate challenges"
                      },
                      {
                        title: "Community Development",
                        description: "Empowering local communities through education and resources"
                      }
                    ].map((feature, index) => (
                      <Col md={6} key={index}>
                        <div className="feature-item d-flex">
                          <div className="feature-icon me-3">
                            <div className="icon-bg rounded-circle d-flex align-items-center justify-content-center">
                              <span className="fw-bold">{index + 1}</span>
                            </div>
                          </div>
                          <div className="feature-text">
                            <h5 className="mb-2">{feature.title}</h5>
                            <p className="text-muted mb-0">{feature.description}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="mt-5 text-md-start text-center">
                  <Link to='/overview'>
                    <button className="btn btn-primary rounded-pill px-4 py-2 me-3">
                      Learn More
                    </button>
                  </Link>
                  <Link to='/contact'>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                      Join Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------------- New: Mission & Vision ---------------- */}
      <div className="pf-about-mv">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="pf-about-mv-card"
              >
                <div className="pf-about-mv-icon pf-about-tone-forest">
                  <FaBullseye size={22} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide senior citizens with dignified, compassionate care — nutritious meals, medical
                  attention, safe shelter, and true companionship — so that no elder is ever left behind.
                </p>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={1}
                variants={fadeUp}
                className="pf-about-mv-card"
              >
                <div className="pf-about-mv-icon pf-about-tone-gold">
                  <FaEye size={22} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  A society where every senior citizen lives their golden years with dignity, security, and love —
                  never alone, never forgotten.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------- New: Core Values ---------------- */}
      <div className="pf-about-values">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-about-section-head"
          >
            <span className="pf-about-eyebrow pf-about-eyebrow-dark">What Guides Us</span>
            <h2 className="pf-about-h2">Our Core Values</h2>
            <div className="pf-about-rule pf-about-rule-center" />
          </motion.div>
          <Row className="g-4">
            {CORE_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Col md={6} lg={3} className="d-flex" key={v.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                    className="w-100"
                  >
                    <div className={`pf-about-value-card pf-about-tone-${v.tone}`}>
                      <div className="pf-about-value-icon">
                        <Icon size={20} />
                      </div>
                      <h4>{v.title}</h4>
                      <p>{v.text}</p>
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* ---------------- New: Why Choose Us ---------------- */}
      <div className="pf-about-why">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-about-section-head"
          >
            <span className="pf-about-eyebrow">Why Choose Us</span>
            <h2 className="pf-about-h2 pf-about-h2-light">Trusted With Every Rupee, Every Elder</h2>
            <div className="pf-about-rule pf-about-rule-center pf-about-rule-gold" />
          </motion.div>
          <Row className="g-4">
            {WHY_CHOOSE.map((w, i) => {
              const Icon = w.icon;
              return (
                <Col md={6} lg={3} key={w.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    custom={i}
                    variants={fadeUp}
                    className="pf-about-why-card"
                  >
                    <div className="pf-about-why-icon">
                      <Icon size={20} />
                    </div>
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* ---------------- New: Impact Statistics ---------------- */}
      <div className="pf-about-stats">
        <Container>
          <Row className="text-center g-4">
            {IMPACT_STATS.map((s) => (
              <Col xs={6} md={3} key={s.label}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
                  <div className="pf-about-stat-num">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="pf-about-stat-label">{s.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ---------------- New: Final CTA ---------------- */}
      <div className="pf-about-cta">
        <Container className="text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            <h2>Be Part of Their Story</h2>
            <p>Join us as a donor or volunteer and help give senior citizens the care and dignity they deserve.</p>
            <div className="pf-about-cta-actions">
              <Link to="/donation">
                <button className="pf-about-btn-primary">
                  Donate Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="pf-about-btn-outline">
                  Become a Volunteer
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Abouts;