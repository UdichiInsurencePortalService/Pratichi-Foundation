import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Heart, Star, Activity, Shield, Home, Users, CheckCircle2, Phone, MapPin } from 'lucide-react';
import sanik from '../../../../assets/Home-image/pathshaala-1.jpg'

// ---- Animation variants ----
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// framer-motion is loaded conditionally so this file has zero hard new dependencies
// if framer-motion is already used elsewhere in the project (as in Overview.jsx),
// this import will resolve the same way.
import { motion } from 'framer-motion';

// ---- Content (unchanged copy, restructured as data for cleaner markup) ----
const DONATION_POINTS = [
  'Learning materials and supplies',
  'Infrastructure improvements',
  'Teacher training and development'
];

const FEATURES = [
  {
    icon: Home,
    tone: 'forest',
    title: 'CBSE-Affiliated Curriculum',
    text: 'Rigorous academics aligned with the CBSE board to ensure holistic educational development.'
  },
  {
    icon: Activity,
    tone: 'gold',
    title: 'Military Training & Discipline',
    text: 'Cadet life instills a strong sense of discipline, punctuality, and commitment to duty.'
  },
  {
    icon: Users,
    tone: 'blush',
    title: 'Advanced Sports Facilities',
    text: 'From athletics to team sports, we foster physical strength and sportsmanship at every level.'
  },
  {
    icon: Star,
    tone: 'forest',
    title: 'Leadership Development',
    text: 'Focused programs to nurture confidence, decision-making, and public speaking from a young age.'
  },
  {
    icon: Shield,
    tone: 'gold',
    title: 'Defense Exam Preparation',
    text: 'Intensive coaching and guidance for NDA, UPSC, and other defense-related examinations.'
  },
  {
    icon: Heart,
    tone: 'blush',
    title: 'Holistic Care & Mentorship',
    text: 'Dedicated faculty and counselors ensure students’ emotional, mental, and academic well-being.'
  }
];

export default function SanikOverview() {
  // Load the same typefaces used on Overview.jsx to keep the design system consistent
  useEffect(() => {
    const id = 'pf-sainik-fonts';
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
    <div className="pf-sainik">
      {/* Hero Section */}
      <div className="pf-hero">
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <span className="pf-eyebrow">Pratichi Foundation</span>
                <h1 className="pf-h1">A New Chapter for Our Brave Young Aspirants</h1>
                <div className="pf-rule" />

                <p className="pf-lead">
                  The Pratichi Foundation is dedicated to improving educational opportunities for children in need.
                  We are reaching out for your support to help us provide essential resources to schools that are
                  facing significant challenges. Your donation will directly contribute to:
                </p>

                <ul className="pf-donation-list">
                  {DONATION_POINTS.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="pf-lead">
                  Together, we can make a meaningful impact on the lives of students and empower future generations.
                  Please consider making a donation today!
                </p>

                <Button className="pf-btn-primary">
                  Learn More
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
                <div
                  className="pf-hero-img"
                  style={{ backgroundImage: `url(${sanik})` }}
                  role="img"
                  aria-label="Sainik School students"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>

        <svg className="pf-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,110 L0,110 Z" fill="#FBF8F2" />
        </svg>
      </div>

      {/* Features Section */}
      <div className="pf-features">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-section-head"
          >
            <span className="pf-eyebrow pf-eyebrow-dark">What Sets Us Apart</span>
            <h2 className="pf-h2-alt">Key Highlights</h2>
            <div className="pf-rule pf-rule-center" />
            <p className="pf-section-sub">
              Empowering young minds with discipline, knowledge, and leadership—laying the foundation for tomorrow's
              heroes.
            </p>
          </motion.div>

          <Row>
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Col md={6} lg={4} className="mb-4 d-flex" key={f.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                    className="w-100"
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

          <Row className="justify-content-center pt-4 pb-2">
            <Col md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
              >
                <Card className="pf-contact-card text-center">
                  <p className="pf-contact-label">Feel free to reach out to us at:</p>
                  <h4 className="pf-contact-line">
                    <Phone size={18} />
                    <span>+91 9818152403</span>
                  </h4>
                  <h4 className="pf-contact-line">
                    <MapPin size={18} />
                    <span>B-48 Sector 53, Noida</span>
                  </h4>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      <style>{`
        .pf-sainik {
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
          padding: 88px 0 120px;
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
          font-size: clamp(2.1rem, 4vw, 3.2rem);
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

        .pf-lead {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.8);
          margin-bottom: 18px;
          max-width: 560px;
        }

        .pf-donation-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pf-donation-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.98rem;
          color: rgba(255,255,255,0.92);
          font-weight: 500;
        }
        .pf-donation-list svg { color: var(--pf-gold); flex-shrink: 0; }

        .pf-btn-primary {
          background: var(--pf-gold) !important;
          border: 1px solid var(--pf-gold) !important;
          color: var(--pf-forest-dark) !important;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          margin-top: 8px;
          transition: all .25s ease;
          box-shadow: 0 8px 24px rgba(201,162,39,0.25);
        }
        .pf-btn-primary:hover {
          background: #fff !important;
          border-color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .pf-hero-img-wrap {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
        }
        .pf-hero-img {
          width: 100%;
          height: 300px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 14px;
          transition: transform 0.5s ease;
        }
        .pf-hero-img-wrap:hover .pf-hero-img { transform: scale(1.03); }

        .pf-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 90px;
          display: block;
        }

        /* Features */
        .pf-features { padding: 96px 0 88px; }
        .pf-section-head { max-width: 640px; margin: 0 auto 52px; }
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

        /* Contact card */
        .pf-contact-card {
          border: none;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          color: #fff;
          padding: 32px 28px;
          box-shadow: 0 20px 44px rgba(18,56,50,0.2);
        }
        .pf-contact-label { color: rgba(255,255,255,0.75); margin-bottom: 14px; font-size: 0.95rem; }
        .pf-contact-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--pf-gold);
          margin-bottom: 10px;
        }
        .pf-contact-line:last-child { margin-bottom: 0; }
        .pf-contact-line svg { flex-shrink: 0; }

        @media (max-width: 767px) {
          .pf-hero-img { height: 220px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-card, .pf-icon-wrap, .pf-btn-primary, .pf-hero-img {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
} 