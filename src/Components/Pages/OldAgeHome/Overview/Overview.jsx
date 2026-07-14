import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Heart, Star, Activity, Utensils, Home, Users, ChevronRight, ShieldCheck } from 'lucide-react';
import overview from '../../../../assets/overview/overview.png'

// ---- Animation variants ----
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// ---- Content (unchanged copy, restructured as data) ----
const FEATURES = [
  {
    icon: Home,
    tone: 'forest',
    title: 'Luxurious Living Spaces',
    text: 'Comfortable, spacious accommodations designed to feel like home with all modern amenities.'
  },
  {
    icon: Activity,
    tone: 'gold',
    title: '24/7 Medical Care',
    text: 'Round-the-clock medical supervision and wellness programs tailored to individual needs.'
  },
  {
    icon: Users,
    tone: 'blush',
    title: 'Recreational Activities',
    text: 'Engaging community events, hobby classes, and entertainment options to foster joy and connection.'
  },
  {
    icon: Utensils,
    tone: 'forest',
    title: 'Nutritious Meals',
    text: 'Delicious, balanced, and diet-specific meals prepared by professional chefs with love and care.'
  },
  {
    icon: Star,
    tone: 'gold',
    title: 'Premium Amenities',
    text: 'Library, garden, meditation rooms, and more to ensure comfort, peace, and personal growth.'
  },
  {
    icon: Heart,
    tone: 'blush',
    title: 'Personal Care',
    text: 'Attentive staff providing personalized assistance with daily activities while respecting dignity.'
  }
];

const STATS = [
  { value: '6', label: 'Pillars of Comprehensive Care' },
  { value: '24/7', label: 'Medical Supervision & Support' },
  { value: '100%', label: 'Personalized Attention' }
];

export default function Overview() {
  // Load display + body typefaces without touching any other project file
  useEffect(() => {
    const id = 'pf-overview-fonts';
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
    <div className="pf-overview">
      {/* Hero */}
      <section className="pf-hero">
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="pf-breadcrumb"
          >
            <a href="/">Home</a>
            <ChevronRight size={14} />
            <span>Overview</span>
          </motion.div>

          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
                <span className="pf-eyebrow">Pratichi Foundation</span>
                <h1 className="pf-h1">A New Beginning for Our Beloved Parents</h1>
                <div className="pf-rule" />
                <h2 className="pf-h2">
                  Pratichi Foundation presents a world-class sanctuary built with love, care, and unmatched amenities.
                </h2>
                <p className="pf-lead">
                  This home isn't just a place to stay—it's a <strong>home to live, laugh, and thrive</strong>. Designed
                  with compassion and equipped with top-tier facilities, it's our way of giving back to those who've
                  given us everything.
                </p>

                <Button href="/facilites" className="pf-btn-primary">
                  Learn More <ChevronRight size={18} className="ms-1" />
                </Button>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="pf-hero-img-wrap"
              >
                <img src={overview} alt="Senior residents enjoying amenities" className="pf-hero-img" /> <br /> <br />
                <div className="pf-hero-badge">
                  <ShieldCheck size={18} />
                  <span>Trusted, Dignified Care</span>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        <svg className="pf-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,110 L0,110 Z" fill="#FBF8F2" />
        </svg>
      </section>

      {/* Stats band */}
      <Container className="pf-stats-wrap">
        <Row className="g-3 g-md-4">
          {STATS.map((s, i) => (
            <Col xs={4} key={s.label}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                variants={fadeUp}
                className="pf-stat-card"
              >
                <div className="pf-stat-value">{s.value}</div>
                <div className="pf-stat-label">{s.label}</div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Key Highlights */}
      <section className="pf-features">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-section-head"
          >
            <span className="pf-eyebrow pf-eyebrow-dark">Why Families Trust Us</span>
            <h2 className="pf-h2-alt">Key Highlights</h2>
            <div className="pf-rule pf-rule-center" />
            <p className="pf-section-sub">
              Let's honor our parents with the dignity, love, and comfort they truly deserve.
            </p>
          </motion.div>

          <Row>
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Col md={6} lg={4} className="mb-4" key={f.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                    className="h-100"
                  >
                    <Card className={`pf-card pf-tone-${f.tone} h-100`}>
                      <Card.Body>
                        <div className="pf-icon-wrap">
                          <Icon size={22} />
                        </div>
                        <h3 className="pf-card-title">{f.title}</h3>
                        <p className="pf-card-text">{f.text}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="pf-cta">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="pf-cta-inner"
          >
            <div>
              <h3 className="pf-cta-title">See where your parents will feel at home</h3>
              <p className="pf-cta-text">
                Explore our facilities, amenities, and the everyday care that makes this a true sanctuary.
              </p>
            </div>
            <Button href="/facilites" className="pf-btn-secondary">
              View Facilities <ChevronRight size={18} className="ms-1" />
            </Button>
          </motion.div>
        </Container>
      </section>

      <style>{`
        .pf-overview {
          --pf-forest: #1E4B43;
          --pf-forest-dark: #123832;
          --pf-forest-soft: #E4EDE9;
          --pf-gold: #C9A227;
          --pf-gold-soft: #F6EFD8;
          --pf-blush: #C97B84;
          --pf-blush-soft: #F6E7E7;
          --pf-ivory: #FBF8F2;
          --pf-sand: #EFE8D8;
          --pf-ink: #23261F;
          --pf-ink-soft: #5B5F55;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--pf-ink);
          background: var(--pf-ivory);
          overflow-x: hidden;
        }

        /* Hero */
        .pf-hero {
          position: relative;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          padding: 88px 0 132px;
          overflow: hidden;
          color: #fff;
        }
        .pf-hero::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -100px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,162,39,0.35), transparent 70%);
        }
        .pf-hero::after {
          content: '';
          position: absolute;
          bottom: -140px;
          left: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,123,132,0.28), transparent 70%);
        }
        .pf-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 32px;
        }
        .pf-breadcrumb a { color: #fff; text-decoration: none; opacity: 0.85; }
        .pf-breadcrumb a:hover { opacity: 1; text-decoration: underline; }

        .pf-eyebrow {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pf-gold);
          font-weight: 600;
          margin-bottom: 14px;
        }
        .pf-eyebrow-dark { color: var(--pf-forest); }

        .pf-h1 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(2.1rem, 4vw, 3.3rem);
          line-height: 1.14;
          color: #fff;
          margin-bottom: 20px;
        }
        .pf-rule {
          width: 64px;
          height: 3px;
          background: var(--pf-gold);
          border-radius: 2px;
          margin-bottom: 22px;
        }
        .pf-rule-center { margin-left: auto; margin-right: auto; }

        .pf-h2 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.92);
          margin-bottom: 18px;
        }
        .pf-lead {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.78);
          margin-bottom: 32px;
          max-width: 520px;
        }

        .pf-btn-primary {
          background: var(--pf-gold) !important;
          border: 1px solid var(--pf-gold) !important;
          color: var(--pf-forest-dark) !important;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          transition: all .25s ease;
          box-shadow: 0 8px 24px rgba(201,162,39,0.25);
        }
        .pf-btn-primary:hover {
          background: #fff !important;
          border-color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .pf-hero-img-wrap { position: relative; }
        .pf-hero-img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          border: 4px solid rgba(255,255,255,0.15);
          display: block;
        }
        .pf-hero-badge {
          position: absolute;
          bottom: -22px;
          left: 24px;
          background: #fff;
          color: var(--pf-forest-dark);
          padding: 12px 18px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 14px 30px rgba(0,0,0,0.18);
        }
        .pf-hero-badge svg { color: var(--pf-gold); flex-shrink: 0; }

        .pf-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 90px;
          display: block;
        }

        /* Stats */
        .pf-stats-wrap { margin-top: -64px; position: relative; z-index: 3; }
        .pf-stat-card {
          background: #fff;
          border-radius: 18px;
          padding: 24px 10px;
          text-align: center;
          box-shadow: 0 20px 44px rgba(18,56,50,0.14);
          border: 1px solid rgba(30,75,67,0.06);
        }
        .pf-stat-value {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          font-weight: 700;
          color: var(--pf-forest);
        }
        .pf-stat-label {
          font-size: 12.5px;
          color: var(--pf-ink-soft);
          margin-top: 6px;
          line-height: 1.4;
        }

        /* Features */
        .pf-features { padding: 104px 0 96px; }
        .pf-section-head { max-width: 640px; margin: 0 auto 56px; }
        .pf-h2-alt {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          color: var(--pf-forest-dark);
          margin-bottom: 16px;
        }
        .pf-section-sub { color: var(--pf-ink-soft); font-size: 1rem; margin-bottom: 0; }

        .pf-card {
          border: none;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 10px 28px rgba(30,40,35,0.06);
          transition: transform .3s ease, box-shadow .3s ease;
          padding: 8px;
        }
        .pf-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(30,40,35,0.14); }
        .pf-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: transform .3s ease;
        }
        .pf-card:hover .pf-icon-wrap { transform: rotate(-6deg) scale(1.06); }
        .pf-tone-forest .pf-icon-wrap { background: var(--pf-forest-soft); color: var(--pf-forest); }
        .pf-tone-gold .pf-icon-wrap { background: var(--pf-gold-soft); color: #a8811c; }
        .pf-tone-blush .pf-icon-wrap { background: var(--pf-blush-soft); color: var(--pf-blush); }
        .pf-card-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 1.12rem;
          color: var(--pf-forest-dark);
          margin-bottom: 10px;
        }
        .pf-card-text { color: var(--pf-ink-soft); font-size: 0.95rem; line-height: 1.65; margin-bottom: 0; }

        /* CTA */
        .pf-cta { background: var(--pf-sand); padding: 64px 0; }
        .pf-cta-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          border-radius: 24px;
          padding: 44px;
          color: #fff;
        }
        .pf-cta-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.4rem; margin-bottom: 8px; }
        .pf-cta-text { color: rgba(255,255,255,0.78); margin-bottom: 0; max-width: 480px; }
        .pf-btn-secondary {
          background: transparent !important;
          border: 1.5px solid #fff !important;
          color: #fff !important;
          font-weight: 600;
          padding: 12px 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          transition: all .25s ease;
        }
        .pf-btn-secondary:hover {
          background: #fff !important;
          color: var(--pf-forest-dark) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 767px) {
          .pf-cta-inner { padding: 32px; text-align: center; justify-content: center; }
          .pf-hero-badge { left: 50%; transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-card, .pf-icon-wrap, .pf-btn-primary, .pf-btn-secondary {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}