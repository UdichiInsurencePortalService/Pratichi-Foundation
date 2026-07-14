import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../../../assets/Home-image/olds.png";
import homebanner from "../../../assets/Home-image/olld.png";
import sanik from "../../../assets/Home-image/pathshaala-1.jpg";
import { Link } from "react-router";

import {
  Shield,
  BookOpen,
  Award,
  Users,
  Heart,
  Home as HomeIcon,
  GraduationCap,
  Leaf,
} from "lucide-react";

import "./Home.css";

/* A soft horizon-line divider used between sections. It reads as a gentle
   path/curve, echoing the Foundation's idea of guiding people forward. */
const SectionDivider = ({ flip = false, tone = "light" }) => (
  <div className={`pf-divider ${flip ? "pf-divider--flip" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`pf-divider__svg pf-divider__svg--${tone}`}>
      <path d="M0,32 C240,90 480,0 720,28 C960,56 1200,10 1440,40 L1440,90 L0,90 Z" />
    </svg>
  </div>
);

const focusAreas = [
  { icon: GraduationCap, label: "Education & Literacy" },
  { icon: Heart, label: "Senior Citizen Welfare" },
  { icon: Users, label: "Women Empowerment" },
  { icon: Leaf, label: "Environmental Sustainability" },
  { icon: Shield, label: "Sainik School Education" },
];

const anandaKananFeatures = [
  "Comfortable, well-equipped living spaces designed for safety and ease",
  "24/7 medical support and attentive caregiving",
  "Engaging recreational and cultural activities",
  "A community where laughter, stories, and love are shared freely",
  "Beautiful Gardens",
];

const sainikFeatures = [
  "CBSE-affiliated academic curriculum",
  "Military training & discipline",
  "State-of-the-art sports facilities",
  "Leadership development programs",
  "NCC training",
  "Defense services preparation",
];

const anandaKananCards = [
  { icon: Heart, title: "Personalized Care", text: "Tailored to individual needs" },
  { icon: HomeIcon, title: "Homely Environment", text: "Comfort in every corner" },
];

const sainikCards = [
  { icon: Shield, title: "Military Training", text: "Discipline & tactical skills", accent: "gold" },
  { icon: BookOpen, title: "Academic Excellence", text: "Top-tier education", accent: "green" },
  { icon: Users, title: "Character Building", text: "Values & leadership", accent: "teal" },
  { icon: Award, title: "Sports & Fitness", text: "Physical excellence", accent: "gold" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="pf-page">
      {/* ================= HERO ================= */}
      <section className="pf-hero">
        <Container>
          <Row className="align-items-center gy-5">
            <Col xl={6} lg={6} md={12}>
              <div className="pf-hero__content" data-aos="fade-right">
                <span className="pf-eyebrow" data-aos="fade-up" data-aos-delay="100">
                  Pratichi Foundation
                </span>
                <h1 className="pf-hero__title" data-aos="fade-up" data-aos-delay="200">
                  Empowering Lives, <br className="d-none d-lg-block" />
                  Enriching Futures
                </h1>
                <p className="pf-hero__text" data-aos="fade-up" data-aos-delay="300">
                  Pratichi Foundation is a dynamic NGO committed to building a
                  more just, inclusive, and empowered society. With a strong
                  grassroots presence, we work across diverse sectors—education
                  and literacy, poverty alleviation, minority rehabilitation,
                  senior citizen welfare, women entrepreneurship, environmental
                  sustainability, and support for Sainik School education.
                  Driven by compassion and guided by equity, we focus on
                  creating long-term, sustainable change. From nurturing young
                  minds in underprivileged communities to empowering women with
                  entrepreneurial skills, supporting the elderly with dignity,
                  and addressing the global climate crisis—Pratichi believes in
                  action that transforms lives. Every initiative we undertake
                  is a step toward a brighter, more resilient tomorrow.
                </p>

                <ul className="pf-focus-strip" data-aos="fade-up" data-aos-delay="400">
                  {focusAreas.map(({ icon: Icon, label }) => (
                    <li className="pf-focus-strip__item" key={label}>
                      <span className="pf-focus-strip__icon">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                <div className="pf-hero__actions" data-aos="fade-up" data-aos-delay="500">
                  <Link to="/donation" className="pf-btn pf-btn--primary">
                    Donate Now
                  </Link>
                  <Link to="/contact" className="pf-btn pf-btn--ghost">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </Col>

            <Col xl={6} lg={6} md={12}>
              <div className="pf-hero__visual" data-aos="fade-left" data-aos-delay="200">
                <div className="pf-image-frame pf-image-frame--hero">
                  <img src={home} alt="Elderly care at Pratichi Foundation" />
                </div>
                <span className="pf-hero__caption">
                  Care and dignity, delivered at the grassroots
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <SectionDivider tone="light" />
      </section>

      {/* ================= ANANDA KANAN ================= */}
      <section className="pf-section pf-section--care">
        <Container>
          <div className="pf-section-banner pf-section-banner--care" data-aos="fade-up">
            <span className="pf-section-banner__eyebrow">Old Age Home</span>
            <h2 className="pf-section-banner__title">Ananda Kanan</h2>
            <p className="pf-section-banner__subtitle">
              Where Every Sunset Glows with Peace and Dignity
            </p>
          </div>

          <Row className="g-5 align-items-center pf-section__body">
            <Col lg={6} data-aos="fade-right">
              <h3 className="pf-block-title">Welcome to Ananda Kanan</h3>
              <p className="pf-body-text">
                At Ananda Kanan, each day begins with gentle smiles, nurturing
                care, and the quiet assurance that our residents are cherished.
                Our holistic approach ensures physical well-being, emotional
                comfort, and mental stimulation through personalized care,
                cultural engagement, and companionship.
              </p>
              <p className="pf-body-text">
                Our community offers a perfect balance of independence and
                support, allowing residents to enjoy life to the fullest while
                receiving the assistance they need.
              </p>

              <h5 className="pf-chip-heading">Our Comprehensive Services</h5>
              <div className="pf-chip-group">
                {anandaKananFeatures.map((feature) => (
                  <span className="pf-chip" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="pf-btn pf-btn--primary pf-btn--lg">
                Schedule a Call
              </Link>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <div className="pf-image-frame pf-image-frame--wide">
                <img src={homebanner} alt="Seniors enjoying community activities" />
              </div>

              <Row className="g-3 pf-floating-row">
                {anandaKananCards.map(({ icon: Icon, title, text }, i) => (
                  <Col sm={6} key={title} data-aos="zoom-in" data-aos-delay={i * 100}>
                    <div className="pf-floating-card">
                      <span className="pf-floating-card__icon pf-floating-card__icon--green">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <div>
                        <h6>{title}</h6>
                        <p>{text}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <SectionDivider tone="care" />
      </section>

      {/* ================= SAINIK SCHOOL ================= */}
      <section className="pf-section pf-section--academy">
        <Container>
          <div className="pf-section-banner pf-section-banner--academy" data-aos="fade-up">
            <span className="pf-section-banner__eyebrow">Sainik School</span>
            <h2 className="pf-section-banner__title">Sainik School Excellence</h2>
            <p className="pf-section-banner__subtitle">
              Molding Tomorrow's Leaders with Discipline and Knowledge
            </p>
          </div>

          <Row className="g-5 align-items-center pf-section__body">
            <Col lg={6} data-aos="fade-right">
              <h3 className="pf-block-title">Welcome to Sainik School</h3>
              <p className="pf-body-text">
                The Pratichi Foundation is dedicated to improving educational
                opportunities for children in need. We are reaching out for
                your support to help us provide essential resources to schools
                that are facing significant challenges. Your donation will
                directly contribute to: learning materials and supplies,
                infrastructure improvements, and teacher training and
                development. Together, we can make a meaningful impact on the
                lives of students and empower future generations. Please
                consider making a donation today!
              </p>

              <h5 className="pf-chip-heading">Our Educational Excellence</h5>
              <div className="pf-chip-group">
                {sainikFeatures.map((feature) => (
                  <span className="pf-chip pf-chip--dark" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="pf-btn pf-btn--dark pf-btn--lg">
                Schedule a Call
              </Link>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <div className="pf-image-frame pf-image-frame--wide pf-image-frame--contain">
                <img src={sanik} alt="Sainik School students" />
              </div>

              <Row className="g-3 pf-floating-row">
                {sainikCards.map(({ icon: Icon, title, text, accent }, i) => (
                  <Col sm={6} key={title} data-aos="zoom-in" data-aos-delay={i * 100}>
                    <div className="pf-floating-card">
                      <span className={`pf-floating-card__icon pf-floating-card__icon--${accent}`}>
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <div>
                        <h6>{title}</h6>
                        <p>{text}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="pf-cta-band">
        <Container>
          <div className="pf-cta-band__inner" data-aos="fade-up">
            <h2>Every Contribution Creates Change</h2>
            <p>
              Whether it's a caring home for our elders or a strong education
              for a child, your support turns intention into impact.
            </p>
            <div className="pf-cta-band__actions">
              <Link to="/donation" className="pf-btn pf-btn--accent pf-btn--lg">
                Donate Now
              </Link>
              <Link to="/contact" className="pf-btn pf-btn--outline pf-btn--lg">
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;