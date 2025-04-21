import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const pricingPlans = [
  {
    title: 'Shared Room',
    subtitle: '2 Occupants',
    price: '₹25,000',
    description: 'per month (all inclusive)',
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
    features: [
      { label: 'One-Time Deposit', value: '₹7,00,000' },
      { label: 'Refundable Security', value: '₹1,50,000' },
      'Dedicated Caretaker',
      'Luxury Furnishings & Amenities',
      'Personalized Care Plan',
    ],
  },
];

const Pricing= () => {
  return (
    <>
    <div id="generic_price_table" className="pt-4 pb-5">
      <Container>
        <Row className="pt-5">
          <Col md={12} className="text-center mb-4">
            <h1>💰 Proposed Pricing Structure – Pratichi Foundation Old Age Home</h1>
          </Col>
        </Row>
        <Row className="g-4">
          {pricingPlans.map((plan, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <Card className={`h-100 ${plan.active ? 'border-primary' : ''}`}>
                <Card.Header className="bg-light text-center">
                  <h5>{plan.title}</h5>
                </Card.Header>
                <Card.Body className="text-center">
                  <h6>{plan.subtitle}</h6>
                  <h3>{plan.price}</h3>
                  <p className="text-muted">{plan.description}</p>
                  <ul className="list-unstyled text-start mt-3">
                    {plan.features.map((feature, i) =>
                      typeof feature === 'string' ? (
                        <li key={i}><strong>{feature}</strong></li>
                      ) : (
                        <li key={i}><strong>{feature.label}:</strong> {feature.value}</li>
                      )
                    )}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                <Link to='/donation'>
                  <Button  variant={plan.active ? 'primary' : 'outline-primary'}>Book Now</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

//
<section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">🏡 Pratichi Foundation Facilities & Services</h2>
          <p className="text-muted">Comprehensive care and amenities for our residents</p>
        </div>

        <Row className="g-4">
          {/* Monthly Charges */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="h5 mb-4">📦 Monthly Charges Include:</Card.Title>
                <ul className="list-unstyled">
                  <li>✅ Fully furnished room with housekeeping & laundry</li>
                  <li>✅ 4 healthy meals a day + snacks</li>
                  <li>✅ 24/7 nursing and medical care</li>
                  <li>✅ Internet, TV, power backup</li>
                  <li>✅ In-house physiotherapy and wellness sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Optional Services */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="h5 mb-4">📝 Additional Services (Optional Charges):</Card.Title>
                <ul className="list-unstyled">
                  <li>💁 Personal caregiver (8 hrs/day) – ₹12,000/month</li>
                  <li>🕒 Full-time caregiver (24x7) – ₹20,000/month</li>
                  <li>🥗 Special diet plan – ₹2,500/month</li>
                  <li>💇 Salon & grooming – ₹500–₹1500/month</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Important Notes */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="h5 mb-4">🔒 Important Notes:</Card.Title>
                <ul className="list-unstyled">
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
