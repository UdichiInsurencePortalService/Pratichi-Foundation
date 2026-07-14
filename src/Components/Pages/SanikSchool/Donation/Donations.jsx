import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Card, Accordion } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Utensils,
  Home as HomeIcon,
  Award,
  ShieldCheck,
  BadgeCheck,
  Lock,
  FileCheck2,
  Users,
  Quote,
  Phone,
  MapPin,
  Sparkles,
  HandHeart,
  ScanLine,
  ClipboardCheck,
  PackageCheck,
  Send,
  ArrowRight,
} from "lucide-react";
import qr from "../../../../assets/qr/qrs.png";

/* ------------------------------------------------------------------ */
/* Static content                                                      */
/* ------------------------------------------------------------------ */

const IMPACT_AREAS = [
  {
    icon: GraduationCap,
    tone: "forest",
    title: "Education",
    text: "Books, uniforms, and CBSE-aligned classrooms that keep children learning without interruption.",
  },
  {
    icon: HeartPulse,
    tone: "blush",
    title: "Healthcare",
    text: "Basic medical check-ups, hygiene kits, and awareness camps for students and their families.",
  },
  {
    icon: Utensils,
    tone: "gold",
    title: "Food & Nutrition",
    text: "Wholesome daily meals that ensure no child has to choose between hunger and homework.",
  },
  {
    icon: HomeIcon,
    tone: "forest",
    title: "Shelter",
    text: "Safe, dignified living and learning spaces for children who need them most.",
  },
  {
    icon: Award,
    tone: "gold",
    title: "Skill Development",
    text: "Vocational and digital training that opens doors to real, lasting livelihoods.",
  },
];

const PROCESS_STEPS = [
  {
    icon: HandHeart,
    title: "You Donate",
    text: "Choose an amount and contribute securely via QR scan or bank transfer — takes under a minute.",
  },
  {
    icon: ClipboardCheck,
    title: "We Verify",
    text: "Every contribution is logged and verified by our finance team for full accountability.",
  },
  {
    icon: PackageCheck,
    title: "It's Delivered",
    text: "Funds are converted into meals, materials, and mentorship at our partner centres.",
  },
  {
    icon: Send,
    title: "You're Updated",
    text: "Receive an acknowledgment and periodic impact updates on how your support was used.",
  },
];

const AMOUNTS = [
  { value: 500, label: "Feeds a child for 2 weeks" },
  { value: 1000, label: "Supplies a month of books" },
  { value: 2500, label: "Funds a skill workshop" },
  { value: 5000, label: "Sponsors a term's tuition" },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "Registered NGO" },
  { icon: FileCheck2, label: "80G Tax Benefit" },
  { icon: Lock, label: "Secure Transaction" },
  { icon: ShieldCheck, label: "100% Transparent Usage" },
];

const WHY_US = [
  {
    title: "Complete Transparency",
    text: "Every rupee is tracked and reported — no hidden costs, no middlemen.",
  },
  {
    title: "On-Ground Impact",
    text: "We work directly with schools and communities, not through layers of intermediaries.",
  },
  {
    title: "Verified & Trusted",
    text: "Recognized under Skill India and NSDC-aligned initiatives with a proven track record.",
  },
  {
    title: "Direct Reach",
    text: "Your contribution reaches beneficiaries within weeks, not years.",
  },
];

const STATS = [
  { value: 3200, suffix: "+", label: "Children Supported" },
  { value: 48, suffix: "", label: "Partner Schools" },
  { value: 96000, suffix: "+", label: "Meals Served" },
  { value: 7, suffix: "", label: "Years of Service" },
];

const TESTIMONIALS = [
  {
    quote:
      "Because of the support I received, I could finish school and start a vocational course. My family is proud, and I finally feel hopeful about my future.",
    name: "Beneficiary Student",
    role: "Sainik School Programme",
  },
  {
    quote:
      "Donating here felt different — I could see exactly where my money went. The impact updates make it real, not just a transaction.",
    name: "Recurring Donor",
    role: "Noida, Uttar Pradesh",
  },
  {
    quote:
      "Pratichi Foundation's ground team is genuinely present in the community. It's rare to see this level of on-site commitment.",
    name: "Partner Educator",
    role: "Government School Liaison",
  },
];

const FAQS = [
  {
    q: "Is my donation eligible for tax exemption?",
    a: "Yes. Pratichi Foundation is a registered NGO, and all donations are eligible for tax benefits under Section 80G. A receipt will be shared with you after your contribution is verified.",
  },
  {
    q: "How do I know my donation is being used correctly?",
    a: "We maintain complete transparency through verified financial tracking and periodic impact reports shared directly with donors, so you always know where your contribution goes.",
  },
  {
    q: "What payment methods are accepted?",
    a: "You can donate instantly by scanning the QR code with any UPI app, or reach out to our team directly for bank transfer details.",
  },
  {
    q: "Can I donate on behalf of someone else or a company?",
    a: "Absolutely. Simply mention the relevant details in the donation form, and our team will ensure the acknowledgment and receipt reflect it correctly.",
  },
  {
    q: "Will I receive an update on how my donation helped?",
    a: "Yes. Donors receive periodic updates showcasing the on-ground impact of contributions, including stories and progress from our partner schools.",
  },
];

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

function CountUp({ value, suffix = "", duration = 1.6 }) {
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
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  useEffect(() => {
    const id = "pf-donation-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const scrollToDonate = () => {
    document.getElementById("pf-donate-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAmountClick = (val) => {
    setSelectedAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    if (val) setSelectedAmount(Number(val));
  };

  return (
    <div className="pf-donation">
      {/* ---------------- Hero ---------------- */}
      <div className="pf-d-hero">
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <span className="pf-d-eyebrow">
                  <Sparkles size={14} /> Pratichi Foundation
                </span>
                <h1 className="pf-d-h1">
                  Every Rupee Rewrites <span>a Child's Story</span>
                </h1>
                <div className="pf-d-rule" />
                <p className="pf-d-lead">
                  Behind every donation is a real classroom, a real meal, a real chance. Your support today gives a
                  child the opportunity to learn, grow, and lead tomorrow with confidence and dignity.
                </p>
                <div className="pf-d-hero-cta">
                  <Button className="pf-d-btn-primary" onClick={scrollToDonate}>
                    Donate Now <ArrowRight size={17} />
                  </Button>
                  <span className="pf-d-hero-note">
                    <ShieldCheck size={16} /> Secure &amp; 80G Tax Exempt
                  </span>
                </div>
              </motion.div>
            </Col>

            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="pf-d-hero-strip"
              >
                {STATS.slice(0, 3).map((s) => (
                  <div className="pf-d-hero-stat" key={s.label}>
                    <div className="pf-d-hero-stat-num">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="pf-d-hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>

        <svg className="pf-d-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,110 L0,110 Z" fill="#FBF8F2" />
        </svg>
      </div>

      {/* ---------------- Why Your Donation Matters ---------------- */}
      <div className="pf-d-why">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
                <span className="pf-d-eyebrow pf-d-eyebrow-dark">Why It Matters</span>
                <h2 className="pf-d-h2">A Small Gift Can Redraw a Future</h2>
                <div className="pf-d-rule" />
                <p className="pf-d-body-text">
                  For many children we serve, the gap between opportunity and neglect is often just a meal, a
                  textbook, or a mentor away. Your donation closes that gap — directly, quickly, and visibly.
                </p>
              </motion.div>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                {[
                  { icon: HeartPulse, title: "Immediate Relief", text: "Funds are put to use within weeks of your donation, not years." },
                  { icon: Users, title: "Community First", text: "We work hand-in-hand with local schools and families for lasting change." },
                  { icon: ShieldCheck, title: "Verified Impact", text: "Every programme is monitored and reported on transparently." },
                ].map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <Col sm={12} key={r.title}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={i}
                        variants={fadeUp}
                        className="pf-d-why-row"
                      >
                        <div className="pf-d-why-icon">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4>{r.title}</h4>
                          <p>{r.text}</p>
                        </div>
                      </motion.div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------- Impact Cards ---------------- */}
      <div className="pf-d-impact">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow pf-d-eyebrow-dark">Where It Goes</span>
            <h2 className="pf-d-h2">Your Donation Powers Five Pillars</h2>
            <div className="pf-d-rule pf-d-rule-center" />
          </motion.div>

          <Row className="g-4 justify-content-center">
            {IMPACT_AREAS.map((f, i) => {
              const Icon = f.icon;
              return (
                <Col md={6} lg={4} xl={4} className="d-flex" key={f.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                    className="w-100"
                  >
                    <Card className={`pf-d-card pf-d-tone-${f.tone} h-100`}>
                      <Card.Body>
                        <div className="pf-d-icon-wrap">
                          <Icon size={22} />
                        </div>
                        <h3 className="pf-d-card-title">{f.title}</h3>
                        <p className="pf-d-card-text">{f.text}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* ---------------- Process ---------------- */}
      <div className="pf-d-process">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow">How Your Donation Helps</span>
            <h2 className="pf-d-h2 pf-d-h2-light">From Your Pocket to Their Progress</h2>
            <div className="pf-d-rule pf-d-rule-center pf-d-rule-gold" />
          </motion.div>

          <Row className="g-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Col md={6} lg={3} key={step.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    custom={i}
                    variants={fadeUp}
                    className="pf-d-process-card"
                  >
                    <div className="pf-d-process-index">0{i + 1}</div>
                    <div className="pf-d-process-icon">
                      <Icon size={22} />
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* ---------------- Donation Section (functionality preserved) ---------------- */}
      <div className="pf-d-donate" id="pf-donate-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow pf-d-eyebrow-dark">Make a Difference Today</span>
            <h2 className="pf-d-h2">Support Pratichi Foundation</h2>
            <div className="pf-d-rule pf-d-rule-center" />
          </motion.div>

          {/* Amount selector (cosmetic aid, does not alter existing form/flow) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="pf-d-amounts"
          >
            <Row className="g-3 justify-content-center">
              {AMOUNTS.map((a) => (
                <Col xs={6} sm={4} md={2} key={a.value}>
                  <button
                    type="button"
                    className={`pf-d-amount-card ${selectedAmount === a.value && !customAmount ? "active" : ""}`}
                    onClick={() => handleAmountClick(a.value)}
                  >
                    <span className="pf-d-amount-value">₹{a.value.toLocaleString("en-IN")}</span>
                    <span className="pf-d-amount-label">{a.label}</span>
                  </button>
                </Col>
              ))}
              <Col xs={12} sm={8} md={3}>
                <div className={`pf-d-amount-card pf-d-amount-custom ${customAmount ? "active" : ""}`}>
                  <span className="pf-d-amount-value">₹</span>
                  <Form.Control
                    type="text"
                    inputMode="numeric"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="pf-d-custom-input"
                  />
                </div>
              </Col>
            </Row>
            <p className="pf-d-amount-hint">
              Selected contribution: <strong>₹{(customAmount ? Number(customAmount) : selectedAmount).toLocaleString("en-IN")}</strong> — scan the QR
              below to complete your donation.
            </p>
          </motion.div>

          <Row className="g-4 mt-1">
            {/* QR and Info Section */}
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
                <Card className="pf-d-panel text-center h-100">
                  <div className="pf-d-panel-badge">
                    <ScanLine size={20} /> Scan to Donate
                  </div>
                  <h4 className="pf-d-panel-title">Instant UPI Donation</h4>
                  <div className="pf-d-qr-frame">
                    <img src={qr} alt="Donation QR Code" className="img-fluid rounded-3" />
                  </div>
                  <p className="pf-d-panel-foot">Pratichi Foundation</p>
                </Card>
              </motion.div>
            </Col>

            {/* Form Section */}
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={1}>
                <Card className="pf-d-panel h-100">
                  <div className="pf-d-panel-badge">
                    <FileCheck2 size={16} /> Donation Details
                  </div>
                  <h4 className="pf-d-panel-title">Share Your Details</h4>
                  <Form>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="phone" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group controlId="address" className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Your address" />
                    </Form.Group>

                    <Button className="pf-d-btn-primary w-100 justify-content-center mt-2" type="submit">
                      Submit Details
                    </Button>
                  </Form>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Trust badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="pf-d-trust-strip"
          >
            {TRUST_BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <div className="pf-d-trust-badge" key={b.label}>
                  <Icon size={18} />
                  <span>{b.label}</span>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </div>

      {/* ---------------- Why Donate With Us ---------------- */}
      <div className="pf-d-whyus">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow pf-d-eyebrow-dark">Why Donate With Us</span>
            <h2 className="pf-d-h2">Confidence, Built Into Every Step</h2>
            <div className="pf-d-rule pf-d-rule-center" />
          </motion.div>
          <Row className="g-4">
            {WHY_US.map((w, i) => (
              <Col md={6} lg={3} key={w.title}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={i}
                  variants={fadeUp}
                  className="pf-d-whyus-card"
                >
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ---------------- Impact Stats ---------------- */}
      <div className="pf-d-stats">
        <Container>
          <Row className="text-center g-4">
            {STATS.map((s) => (
              <Col xs={6} md={3} key={s.label}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
                  <div className="pf-d-stat-num">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="pf-d-stat-label">{s.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ---------------- Testimonials ---------------- */}
      <div className="pf-d-testimonials">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow pf-d-eyebrow-dark">Voices of Impact</span>
            <h2 className="pf-d-h2">Stories That Make It Real</h2>
            <div className="pf-d-rule pf-d-rule-center" />
          </motion.div>
          <Row className="g-4">
            {TESTIMONIALS.map((t, i) => (
              <Col md={6} lg={4} className="d-flex" key={t.name}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  variants={fadeUp}
                  className="w-100"
                >
                  <Card className="pf-d-testimonial-card h-100">
                    <Quote size={26} className="pf-d-quote-icon" />
                    <p>{t.quote}</p>
                    <div className="pf-d-testimonial-foot">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ---------------- FAQ ---------------- */}
      <div className="pf-d-faq">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center pf-d-section-head"
          >
            <span className="pf-d-eyebrow pf-d-eyebrow-dark">Common Questions</span>
            <h2 className="pf-d-h2">Frequently Asked Questions</h2>
            <div className="pf-d-rule pf-d-rule-center" />
          </motion.div>
          <Row className="justify-content-center">
            <Col lg={9}>
              <Accordion defaultActiveKey="0" className="pf-d-accordion">
                {FAQS.map((f, i) => (
                  <Accordion.Item eventKey={String(i)} key={f.q}>
                    <Accordion.Header>{f.q}</Accordion.Header>
                    <Accordion.Body>{f.a}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------- Final CTA ---------------- */}
      <div className="pf-d-final-cta">
        <Container className="text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            <h2>Your Support Can Start Right Now</h2>
            <p>Join a growing community of donors giving children the tools to build brighter futures.</p>
            <Button className="pf-d-btn-primary" onClick={scrollToDonate}>
              Donate Now <ArrowRight size={17} />
            </Button>
          </motion.div>
        </Container>
      </div>

      {/* ---------------- Map (unchanged) ---------------- */}
      <div className="pf-d-map-section">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h5 className="text-center mb-3 pf-d-map-title">Our Location</h5>
            <div className="pf-d-map-frame">
              <iframe
                title="NGO Location"
                src="https://www.google.com/maps?q=Silver+Tower,+Sector+18,+Noida&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="pf-d-contact-line-wrap">
              <span className="pf-d-contact-line">
                <Phone size={16} /> +91 9818152403
              </span>
              <span className="pf-d-contact-line">
                <MapPin size={16} /> B-48 Sector 53, Noida
              </span>
            </div>
          </motion.div>
        </Container>
      </div>

      <style>{`
        .pf-donation {
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

        .pf-donation h1, .pf-donation h2, .pf-donation h3, .pf-donation h4 {
          font-family: 'Fraunces', serif;
        }

        /* Eyebrow / rule reused across sections */
        .pf-d-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pf-gold);
          font-weight: 600;
          margin-bottom: 14px;
        }
        .pf-d-eyebrow-dark { color: var(--pf-forest); }
        .pf-d-rule {
          width: 64px;
          height: 3px;
          background: var(--pf-gold);
          border-radius: 2px;
          margin-bottom: 20px;
        }
        .pf-d-rule-center { margin-left: auto; margin-right: auto; }
        .pf-d-rule-gold { background: var(--pf-gold); }
        .pf-d-section-head { max-width: 640px; margin: 0 auto 48px; }
        .pf-d-h2 {
          font-weight: 600;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          color: var(--pf-forest-dark);
          margin-bottom: 16px;
        }
        .pf-d-h2-light { color: #fff; }
        .pf-d-body-text { color: var(--pf-ink-soft); font-size: 1rem; line-height: 1.75; }

        /* ---------------- Hero ---------------- */
        .pf-d-hero {
          position: relative;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          padding: 84px 0 112px;
          overflow: hidden;
          color: #fff;
        }
        .pf-d-hero::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -100px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,162,39,0.35), transparent 70%);
        }
        .pf-d-hero::after {
          content: '';
          position: absolute;
          bottom: -140px;
          left: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,123,132,0.28), transparent 70%);
        }
        .pf-d-h1 {
          font-weight: 600;
          font-size: clamp(2.1rem, 4vw, 3.1rem);
          line-height: 1.16;
          color: #fff;
          margin-bottom: 20px;
        }
        .pf-d-h1 span { color: var(--pf-gold); }
        .pf-d-lead {
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.82);
          margin-bottom: 26px;
          max-width: 540px;
        }
        .pf-d-hero-cta { display: flex; align-items: center; flex-wrap: wrap; gap: 18px; }
        .pf-d-hero-note {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.75);
        }
        .pf-d-btn-primary {
          background: var(--pf-gold) !important;
          border: 1px solid var(--pf-gold) !important;
          color: var(--pf-forest-dark) !important;
          font-weight: 600;
          padding: 12px 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all .25s ease;
          box-shadow: 0 8px 24px rgba(201,162,39,0.25);
        }
        .pf-d-btn-primary:hover {
          background: #fff !important;
          border-color: #fff !important;
          color: var(--pf-forest-dark) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .pf-d-hero-strip {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 20px;
          padding: 28px 22px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.28);
        }
        .pf-d-hero-stat { text-align: center; flex: 1; }
        .pf-d-hero-stat-num {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          color: var(--pf-gold);
        }
        .pf-d-hero-stat-label {
          font-size: 0.76rem;
          color: rgba(255,255,255,0.75);
          margin-top: 4px;
          line-height: 1.3;
        }

        .pf-d-wave {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 90px;
          display: block;
        }

        /* ---------------- Why it matters ---------------- */
        .pf-d-why { padding: 92px 0; background: var(--pf-ivory); }
        .pf-d-why-row {
          display: flex;
          gap: 16px;
          background: #fff;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 8px 22px rgba(30,40,35,0.05);
        }
        .pf-d-why-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--pf-forest-soft);
          color: var(--pf-forest);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-d-why-row h4 { font-size: 1.02rem; color: var(--pf-forest-dark); margin-bottom: 4px; }
        .pf-d-why-row p { font-size: 0.92rem; color: var(--pf-ink-soft); margin-bottom: 0; line-height: 1.6; }

        /* ---------------- Impact Cards ---------------- */
        .pf-d-impact { padding: 20px 0 96px; background: var(--pf-ivory); }
        .pf-d-card {
          border: none;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 10px 28px rgba(30,40,35,0.06);
          transition: transform .3s ease, box-shadow .3s ease;
          padding: 8px;
        }
        .pf-d-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(30,40,35,0.14); }
        .pf-d-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: transform .3s ease;
        }
        .pf-d-card:hover .pf-d-icon-wrap { transform: rotate(-6deg) scale(1.06); }
        .pf-d-tone-forest .pf-d-icon-wrap { background: var(--pf-forest-soft); color: var(--pf-forest); }
        .pf-d-tone-gold .pf-d-icon-wrap { background: var(--pf-gold-soft); color: #a8811c; }
        .pf-d-tone-blush .pf-d-icon-wrap { background: var(--pf-blush-soft); color: var(--pf-blush); }
        .pf-d-card-title { font-weight: 600; font-size: 1.1rem; color: var(--pf-forest-dark); margin-bottom: 10px; }
        .pf-d-card-text { color: var(--pf-ink-soft); font-size: 0.94rem; line-height: 1.65; margin-bottom: 0; }

        /* ---------------- Process ---------------- */
        .pf-d-process {
          padding: 96px 0;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          color: #fff;
        }
        .pf-d-process-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 26px 22px;
          height: 100%;
          position: relative;
        }
        .pf-d-process-index {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--pf-gold);
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }
        .pf-d-process-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(201,162,39,0.16);
          color: var(--pf-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pf-d-process-card h4 { font-size: 1.02rem; margin-bottom: 8px; }
        .pf-d-process-card p { font-size: 0.9rem; color: rgba(255,255,255,0.78); line-height: 1.6; margin-bottom: 0; }

        /* ---------------- Donate section ---------------- */
        .pf-d-donate { padding: 96px 0; background: var(--pf-sand); }
        .pf-d-amounts { margin-bottom: 8px; }
        .pf-d-amount-card {
          width: 100%;
          background: #fff;
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
          cursor: pointer;
          transition: all .25s ease;
          box-shadow: 0 8px 20px rgba(30,40,35,0.06);
        }
        .pf-d-amount-card:hover { transform: translateY(-3px); box-shadow: 0 14px 28px rgba(30,40,35,0.12); }
        .pf-d-amount-card.active {
          border-color: var(--pf-gold);
          background: var(--pf-gold-soft);
        }
        .pf-d-amount-value {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--pf-forest-dark);
        }
        .pf-d-amount-label { font-size: 0.72rem; color: var(--pf-ink-soft); line-height: 1.3; }
        .pf-d-amount-custom { flex-direction: row; gap: 8px; padding: 10px 14px; }
        .pf-d-custom-input {
          border: none !important;
          box-shadow: none !important;
          background: transparent !important;
          padding: 0 !important;
          font-family: 'Fraunces', serif;
          font-weight: 600;
        }
        .pf-d-amount-hint {
          text-align: center;
          margin-top: 18px;
          color: var(--pf-ink-soft);
          font-size: 0.92rem;
        }
        .pf-d-amount-hint strong { color: var(--pf-forest-dark); }

        .pf-d-panel {
          border: none;
          border-radius: 20px;
          background: #fff;
          padding: 30px 26px;
          box-shadow: 0 16px 36px rgba(30,40,35,0.08);
        }
        .pf-d-panel-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: center;
          background: var(--pf-forest-soft);
          color: var(--pf-forest);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          margin: 0 auto 14px;
        }
        .pf-d-panel-title { color: var(--pf-forest-dark); font-weight: 600; margin-bottom: 20px; text-align: center; }
        .pf-d-qr-frame {
          background: var(--pf-ivory);
          border: 1px dashed var(--pf-gold);
          border-radius: 16px;
          // padding: 18px;
          margin: 0 auto;
          // max-width: 260px;
        }
        .pf-d-panel-foot { margin-top: 16px; font-weight: 600; color: var(--pf-forest-dark); margin-bottom: 0; }
        .pf-d-panel label { color: var(--pf-ink-soft); font-size: 0.88rem; font-weight: 500; }
        .pf-d-panel .form-control {
          border-radius: 10px;
          border-color: #e4e0d3;
          padding: 10px 14px;
        }
        .pf-d-panel .form-control:focus {
          border-color: var(--pf-forest);
          box-shadow: 0 0 0 0.2rem rgba(30,75,67,0.12);
        }

        .pf-d-trust-strip {
          margin-top: 44px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
        .pf-d-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--pf-forest-dark);
          font-size: 0.86rem;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 6px 16px rgba(30,40,35,0.06);
        }
        .pf-d-trust-badge svg { color: var(--pf-gold); }

        /* ---------------- Why donate with us ---------------- */
        .pf-d-whyus { padding: 96px 0; background: var(--pf-ivory); }
        .pf-d-whyus-card {
          height: 100%;
          background: #fff;
          border-radius: 18px;
          padding: 26px 22px;
          border-top: 3px solid var(--pf-gold);
          box-shadow: 0 10px 26px rgba(30,40,35,0.06);
        }
        .pf-d-whyus-card h4 { font-size: 1.02rem; color: var(--pf-forest-dark); margin-bottom: 10px; }
        .pf-d-whyus-card p { font-size: 0.92rem; color: var(--pf-ink-soft); line-height: 1.6; margin-bottom: 0; }

        /* ---------------- Stats ---------------- */
        .pf-d-stats {
          padding: 64px 0;
          background: var(--pf-forest-dark);
          color: #fff;
        }
        .pf-d-stat-num {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          color: var(--pf-gold);
        }
        .pf-d-stat-label { font-size: 0.86rem; color: rgba(255,255,255,0.75); margin-top: 6px; }

        /* ---------------- Testimonials ---------------- */
        .pf-d-testimonials { padding: 96px 0; background: var(--pf-ivory); }
        .pf-d-testimonial-card {
          border: none;
          border-radius: 18px;
          background: #fff;
          padding: 28px 24px;
          box-shadow: 0 10px 28px rgba(30,40,35,0.06);
        }
        .pf-d-quote-icon { color: var(--pf-gold-soft); margin-bottom: 12px; }
        .pf-d-testimonial-card p {
          color: var(--pf-ink-soft);
          font-size: 0.95rem;
          line-height: 1.7;
          font-style: italic;
        }
        .pf-d-testimonial-foot { margin-top: 16px; display: flex; flex-direction: column; }
        .pf-d-testimonial-foot strong { color: var(--pf-forest-dark); font-size: 0.92rem; }
        .pf-d-testimonial-foot span { color: var(--pf-ink-soft); font-size: 0.8rem; }

        /* ---------------- FAQ ---------------- */
        .pf-d-faq { padding: 96px 0; background: var(--pf-sand); }
        .pf-d-accordion .accordion-item {
          border: none;
          border-radius: 14px !important;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(30,40,35,0.06);
        }
        .pf-d-accordion .accordion-button {
          font-weight: 600;
          color: var(--pf-forest-dark);
          background: #fff;
        }
        .pf-d-accordion .accordion-button:not(.collapsed) {
          background: var(--pf-forest-soft);
          color: var(--pf-forest-dark);
          box-shadow: none;
        }
        .pf-d-accordion .accordion-button:focus { box-shadow: none; }
        .pf-d-accordion .accordion-body {
          color: var(--pf-ink-soft);
          font-size: 0.94rem;
          line-height: 1.7;
          background: #fff;
        }

        /* ---------------- Final CTA ---------------- */
        .pf-d-final-cta {
          padding: 90px 0;
          background: linear-gradient(135deg, var(--pf-forest) 0%, var(--pf-forest-dark) 100%);
          color: #fff;
        }
        .pf-d-final-cta h2 { font-weight: 600; font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 14px; }
        .pf-d-final-cta p { color: rgba(255,255,255,0.8); max-width: 520px; margin: 0 auto 26px; }

        /* ---------------- Map ---------------- */
        .pf-d-map-section { padding: 90px 0; background: var(--pf-ivory); }
        .pf-d-map-title { color: var(--pf-forest-dark); font-weight: 600; }
        .pf-d-map-frame {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 14px 32px rgba(30,40,35,0.1);
        }
        .pf-d-contact-line-wrap {
          display: flex;
          justify-content: center;
          gap: 26px;
          flex-wrap: wrap;
          margin-top: 22px;
        }
        .pf-d-contact-line {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--pf-forest-dark);
          font-weight: 600;
          font-size: 0.94rem;
        }
        .pf-d-contact-line svg { color: var(--pf-gold); }

        @media (max-width: 991px) {
          .pf-d-hero-strip { margin-top: 32px; }
        }

        @media (max-width: 767px) {
          .pf-d-hero { padding: 64px 0 96px; }
          .pf-d-why, .pf-d-impact, .pf-d-process, .pf-d-donate, .pf-d-whyus, .pf-d-testimonials, .pf-d-faq, .pf-d-final-cta, .pf-d-map-section {
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-d-card, .pf-d-icon-wrap, .pf-d-btn-primary, .pf-d-amount-card {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Donations;