import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import {
  FaBed,
  FaDoorOpen,
  FaCrown,
  FaGem,
  FaCheckCircle,
  FaBoxOpen,
  FaClipboardList,
  FaShieldAlt
} from 'react-icons/fa';
import './Pricing.css';

const pricingPlans = [
  {
    title: 'Shared Room',
    subtitle: '2 Occupants',
    price: '₹25,000',
    description: 'per month (all inclusive)',
    icon: <FaBed />,
    features: [
      { label: 'One-Time Deposit', value: '₹2,00,000' },
      { label: 'Refundable Security', value: '₹50,000' },
      '24/7 Medical Assistance',
      'Daily Housekeeping',
      '3 Meals + Evening Snacks',
    ],
  },
  {
    title: 'Single Private Room',
    subtitle: 'Private Accommodation',
    price: '₹40,000',
    description: 'per month (all inclusive)',
    icon: <FaDoorOpen />,
    features: [
      { label: 'One-Time Deposit', value: '₹3,50,000' },
      { label: 'Refundable Security', value: '₹75,000' },
      '24/7 Medical Assistance',
      'Daily Housekeeping',
      'Premium Meal Options',
    ],
    active: true,
  },
  {
    title: 'Deluxe Private Room',
    subtitle: 'Balcony/Garden View',
    price: '₹55,000',
    description: 'per month (all inclusive)',
    icon: <FaCrown />,
    features: [
      { label: 'One-Time Deposit', value: '₹5,00,000' },
      { label: 'Refundable Security', value: '₹1,00,000' },
      'Personal Caretaker Available',
      'Premium Furnishings',
      'Enhanced Amenities Package',
    ],
  },
  {
    title: 'Suite Room',
    subtitle: 'With Attached Living Area',
    price: '₹70,000',
    description: 'per month (all inclusive)',
    icon: <FaGem />,
    features: [
      { label: 'One-Time Deposit', value: '₹7,00,000' },
      { label: 'Refundable Security', value: '₹1,50,000' },
      'Dedicated Caretaker',
      'Luxury Furnishings & Amenities',
      'Personalized Care Plan',
    ],
  },
];

/**
 * Lightweight scroll-reveal hook — purely presentational.
 * Adds `.is-visible` to any `.reveal` element inside the container
 * once it enters the viewport. Does not touch any pricing data or logic.
 */
const useScrollReveal = (containerRef) => {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.querySelectorAll('.reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
};

const Pricing = () => {
  const pricingRef = useRef(null);
  const detailsRef = useRef(null);

  useScrollReveal(pricingRef);
  useScrollReveal(detailsRef);

  return (
    <>
      <div id="generic_price_table" className="pricing-section pt-4 pb-5" ref={pricingRef}>
        <div className="pricing-bg-accent" aria-hidden="true"></div>
        <Container>
          <Row className="pt-5">
            <Col md={12} className="text-center mb-5 reveal">
              <span className="pricing-eyebrow">Transparent & All-Inclusive</span>
              <h1 className="pricing-title">💰 Proposed Pricing Structure – Pratichi Foundation Old Age Home</h1>
              <div className="pricing-title-underline"></div>
            </Col>
          </Row>
          <Row className="g-4">
            {pricingPlans.map((plan, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={3}
                className="reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Card className={`h-100 pricing-card ${plan.active ? 'pricing-card--active' : ''}`}>
                  {plan.active && (
                    <span className="pricing-badge">Most Popular</span>
                  )}
                  <Card.Header className="pricing-card__header text-center">
                    <div className="pricing-card__icon">{plan.icon}</div>
                    <h5 className="pricing-card__title">{plan.title}</h5>
                  </Card.Header>
                  <Card.Body className="text-center pricing-card__body">
                    <h6 className="pricing-card__subtitle">{plan.subtitle}</h6>
                    <h3 className="pricing-card__price">{plan.price}</h3>
                    <p className="pricing-card__desc">{plan.description}</p>
                    <ul className="list-unstyled text-start mt-3 pricing-feature-list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <FaCheckCircle className="pricing-feature-icon" aria-hidden="true" />
                          {typeof feature === 'string' ? (
                            <span>{feature}</span>
                          ) : (
                            <span>
                              <strong>{feature.label}:</strong> {feature.value}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center pricing-card__footer">
                    <Link to="/donation">
                      <Button
                        variant={plan.active ? 'primary' : 'outline-primary'}
                        className="pricing-cta-btn"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <section className="py-5 pricing-details-section" ref={detailsRef}>
        <Container>
          <div className="text-center mb-5 reveal">
            <span className="pricing-eyebrow">Know Before You Book</span>
            <h2 className="fw-bold pricing-details-title">🏡 Pratichi Foundation Facilities &amp; Services</h2>
            <p className="text-muted">Comprehensive care and amenities for our residents</p>
          </div>

          <Row className="g-4">
            {/* Monthly Charges */}
            <Col xs={12} md={6} lg={4} className="reveal">
              <Card className="h-100 shadow-sm pricing-info-card pricing-info-card--navy">
                <Card.Body>
                  <div className="pricing-info-icon">
                    <FaBoxOpen />
                  </div>
                  <Card.Title className="h5 mb-4">📦 Monthly Charges Include:</Card.Title>
                  <ul className="list-unstyled pricing-info-list">
                    <li>✅ Fully furnished room with housekeeping &amp; laundry</li>
                    <li>✅ 4 healthy meals a day + snacks</li>
                    <li>✅ 24/7 nursing and medical care</li>
                    <li>✅ Internet, TV, power backup</li>
                    <li>✅ In-house physiotherapy and wellness sessions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Optional Services */}
            <Col xs={12} md={6} lg={4} className="reveal">
              <Card className="h-100 shadow-sm pricing-info-card pricing-info-card--gold">
                <Card.Body>
                  <div className="pricing-info-icon">
                    <FaClipboardList />
                  </div>
                  <Card.Title className="h5 mb-4">📝 Additional Services (Optional Charges):</Card.Title>
                  <ul className="list-unstyled pricing-info-list">
                    <li>💁 Personal caregiver (8 hrs/day) – ₹12,000/month</li>
                    <li>🕒 Full-time caregiver (24x7) – ₹20,000/month</li>
                    <li>🥗 Special diet plan – ₹2,500/month</li>
                    <li>💇 Salon &amp; grooming – ₹500–₹1500/month</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Important Notes */}
            <Col xs={12} md={6} lg={4} className="reveal">
              <Card className="h-100 shadow-sm pricing-info-card pricing-info-card--rose">
                <Card.Body>
                  <div className="pricing-info-icon">
                    <FaShieldAlt />
                  </div>
                  <Card.Title className="h5 mb-4">🔒 Important Notes:</Card.Title>
                  <ul className="list-unstyled pricing-info-list">
                    <li>💡 Security deposit is refundable at exit (post deductions).</li>
                    <li>📜 One-time deposit is non-refundable, ensures lifetime stay.</li>
                    <li>🧾 Prices are inclusive of GST and taxes.</li>
                    <li>🤝 Subsidies available for underprivileged seniors (evaluation required).</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricing;