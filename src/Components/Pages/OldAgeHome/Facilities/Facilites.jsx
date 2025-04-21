import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Facilities.css'; // Import custom CSS file
import { FaUtensils, FaDrumstickBite, FaMugHot, FaMoon, FaLeaf, FaChartLine, FaTint, FaSeedling, FaWineGlass, FaInfoCircle, FaHeart } from 'react-icons/fa';

const Facilities = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const facilities = [
    {
      icon: '🏠',
      title: 'Comfortable & Safe Living Spaces',
      features: [
        'Fully furnished private and semi-private rooms with modern interiors',
        'Anti-skid flooring, wheelchair-accessible design',
        'Emergency call buttons in every room',
        'Centralized air conditioning and heating'
      ]
    },
    {
      icon: '🏥',
      title: '24/7 Medical & Wellness Care',
      features: [
        'On-site doctors and trained nursing staff',
        'Regular health checkups and medical monitoring',
        'Tie-ups with leading hospitals for emergencies',
        'Mental health and counseling support'
      ]
    },
    {
      icon: '🍲',
      title: 'Nutritious & Personalized Meals',
      features: [
        'Dietician-curated meal plans',
        'Freshly prepared vegetarian and non-vegetarian options',
        'Special diet arrangements for diabetic, cardiac, and other needs',
        'Community dining as well as room service'
      ]
    },
    {
      icon: '🎨',
      title: 'Engagement & Recreation',
      features: [
        'Hobby rooms: music, painting, gardening, crafts',
        'Library with large-print books and audiobooks',
        'Game zone with indoor games and board games',
        'Regular cultural programs, movie nights, and celebrations'
      ]
    },
    {
      icon: '🧘‍♂️',
      title: 'Health & Wellness Programs',
      features: [
        'Daily yoga, meditation, and breathing exercises',
        'Fitness sessions tailored for seniors',
        'Ayurvedic and holistic wellness therapies',
        'Regular health workshops and seminars'
      ]
    },
    // Hidden facilities that will be shown when "View More" is clicked
    {
      icon: '💬',
      title: 'Community & Emotional Well-being',
      features: [
        'Peer group activities and support circles',
        'Interactions with volunteers and school children',
        'Regular family events and gatherings',
        'Family visit days and video calling facilities'
      ],
      hidden: true
    },
    {
      icon: '🔐',
      title: 'Safety & Security',
      features: [
        '24/7 security with CCTV surveillance',
        'Gated premises with biometric entry',
        'Fire safety systems and evacuation plans',
        '24/7 emergency transport availability'
      ],
      hidden: true
    },
    {
      icon: '🧺',
      title: 'Housekeeping & Personal Services',
      features: [
        'Daily housekeeping and laundry services',
        'Personal grooming: haircuts, pedicure, salon',
        'Assisted bathing and dressing (if needed)'
      ],
      hidden: true
    }
  ];

  // Animation handling when toggling visibility
  const handleViewToggle = () => {
    if (showMore) {
      setIsVisible(false);
      setTimeout(() => {
        setShowMore(false);
        setIsVisible(true);
      }, 300);
    } else {
      setShowMore(true);
    }
    
    // Smooth scroll back to top of section
    document.querySelector('.service-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>    <section className="service-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">
            World-Class Facilities at Pratichi Foundation's Old Age Home
          </h1>
          <div className="title-underline"></div>
        </div>
        
        <Row>
          {facilities.map((facility, index) => (
            <Col 
              sm={6} 
              lg={4} 
              className="mb-4" 
              key={index}
              style={{ 
                display: facility.hidden && !showMore ? 'none' : 'block',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            >
              <Card className="facility-card h-100">
                <Card.Body>
                  <h3 className="facility-title">
                    <span className="facility-icon">{facility.icon}</span>
                    {facility.title}
                  </h3>
                  <ul className="facility-list">
                    {facility.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Button 
            variant="primary" 
            className="view-more-btn"
            onClick={handleViewToggle}
          >
            {showMore ? 'View Less' : 'View More'}
          </Button>
        </div>
      </Container>
    </section>

    {/*  */}


    <div className="py-5 menu-section">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
          <div className="d-inline-block px-3 py-1 mb-3 rounded-pill bg-light text-primary fw-semibold">
            Food & Nutrition
          </div>
          <h1 className="display-5 mb-3">Sample Daily Menu at Pratichi Foundation Old Age Home</h1>
          <p className="text-muted">
            Specially designed meals to provide proper nutrition, taste, and satisfaction for our residents
          </p>
        </div>

        <Row className="g-4">
          {/* Breakfast Card */}
          <Col xl={3} lg={4} md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                    <FaUtensils size={24} />
                  </div>
                  <span className="bg-light px-3 py-1 rounded-pill text-muted small">7:30 AM – 8:30 AM</span>
                </div>
                <h4 className="mb-2">☀️ Breakfast</h4>
                <p className="text-muted mb-4">Nutritious start to energize the day</p>
                <ul className="list-unstyled mb-4">
                  {[
                    { name: 'Vegetable Upma', details: 'with coconut chutney & turmeric milk' },
                    { name: 'Oats Porridge', details: 'with almonds, raisins & papaya slices' },
                    { name: 'Moong Dal Cheela', details: 'with mint chutney & herbal tea' },
                    { name: 'Protein Breakfast', details: '2 boiled eggs, multigrain toast & apple' }
                  ].map((meal, idx) => (
                    <li key={idx} className="py-2 border-bottom">
                      <div className="fw-semibold">{meal.name}</div>
                      <div className="small text-muted">{meal.details}</div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex bg-light p-3 rounded-3">
                  <FaInfoCircle className="text-primary mt-1 me-2" />
                  <p className="mb-0 small">All options served with choice of herbal tea, warm milk, or lukewarm water with lemon</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Lunch Card */}
          <Col xl={3} lg={4} md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                    <FaDrumstickBite size={24} />
                  </div>
                  <span className="bg-light px-3 py-1 rounded-pill text-muted small">12:30 PM – 1:30 PM</span>
                </div>
                <h4 className="mb-2">🍛 Lunch</h4>
                <p className="text-muted mb-4">Balanced midday nourishment</p>
                <ul className="list-unstyled mb-4">
                  {[
                    { name: 'Whole Grains', details: 'Chapati/Rice/Brown rice/Millets (rotational)' },
                    { name: 'Protein Source', details: 'Dal/Moong dal/Masoor dal/Mix dal' },
                    { name: 'Fresh Vegetables', details: 'Seasonal sabzi (lauki, tinda, bhindi, etc.)' },
                    { name: 'Probiotics & Fiber', details: 'Curd/Buttermilk & fresh vegetable salad' }
                  ].map((meal, idx) => (
                    <li key={idx} className="py-2 border-bottom">
                      <div className="fw-semibold">{meal.name}</div>
                      <div className="small text-muted">{meal.details}</div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex bg-light p-3 rounded-3">
                  <FaInfoCircle className="text-success mt-1 me-2" />
                  <p className="mb-0 small">Low oil, low salt, no spicy masalas – cooked in cold-pressed oil or ghee</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Evening Snacks Card */}
          <Col xl={3} lg={4} md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                    <FaMugHot size={24} />
                  </div>
                  <span className="bg-light px-3 py-1 rounded-pill text-muted small">4:30 PM – 5:00 PM</span>
                </div>
                <h4 className="mb-2">☕ Evening Snacks</h4>
                <p className="text-muted mb-4">Light refreshment before dinner</p>
                <ul className="list-unstyled mb-4">
                  {[
                    { name: 'Traditional Snack', details: 'Roasted chana with jaggery & masala chai' },
                    { name: 'Protein Snack', details: 'Steamed sprouts chaat with lemon' },
                    { name: 'Light Meal', details: 'Poha with peanuts & herbal tea' },
                    { name: 'Fruit Option', details: 'Seasonal fruit smoothie (health-dependent)' }
                  ].map((meal, idx) => (
                    <li key={idx} className="py-2 border-bottom">
                      <div className="fw-semibold">{meal.name}</div>
                      <div className="small text-muted">{meal.details}</div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex bg-light p-3 rounded-3">
                  <FaInfoCircle className="text-warning mt-1 me-2" />
                  <p className="mb-0 small">Prepared with minimal oil and sugar for easy digestion</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Dinner Card */}
          <Col xl={3} lg={4} md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle text-info">
                    <FaMoon size={24} />
                  </div>
                  <span className="bg-light px-3 py-1 rounded-pill text-muted small">7:00 PM – 8:00 PM</span>
                </div>
                <h4 className="mb-2">🌙 Dinner</h4>
                <p className="text-muted mb-4">Light evening meal for peaceful sleep</p>
                <ul className="list-unstyled mb-4">
                  {[
                    { name: 'Comfort Food', details: 'Khichdi with curd & boiled vegetables' },
                    { name: 'Fiber-Rich', details: 'Dalia with mixed vegetables & raita' },
                    { name: 'Light Option', details: 'Vegetable soup & whole wheat toast/idli' },
                    { name: 'Traditional', details: 'Thin roti, light sabzi & warm milk' }
                  ].map((meal, idx) => (
                    <li key={idx} className="py-2 border-bottom">
                      <div className="fw-semibold">{meal.name}</div>
                      <div className="small text-muted">{meal.details}</div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex bg-light p-3 rounded-3">
                  <FaInfoCircle className="text-info mt-1 me-2" />
                  <p className="mb-0 small">Easily digestible meals to promote quality rest and sleep</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Special Diets Card */}
          <Col xs={12} className="mb-4">
            <Card className="shadow border-0 rounded-3 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-circle text-danger">
                    <FaLeaf size={24} />
                  </div>
                  <span className="bg-danger text-white px-3 py-1 rounded-pill">Personalized Care</span>
                </div>
                <h4 className="mb-2">Special Diets Available</h4>
                <p className="text-muted mb-4">Customized nutritional plans for specific health needs</p>
                <Row className="g-4 mb-4">
                  {[
                    { icon: <FaChartLine />, name: 'Diabetic Meals', details: 'Low glycemic index foods with controlled carbohydrates' },
                    { icon: <FaTint />, name: 'Low Sodium/Renal-Friendly', details: 'Reduced salt options suitable for kidney health' },
                    { icon: <FaSeedling />, name: 'Gluten-Free or Jain Meals', details: 'Accommodating religious and dietary restrictions' },
                    { icon: <FaWineGlass />, name: 'Liquid or Semi-Solid Diets', details: 'For residents with swallowing difficulties' }
                  ].map((diet, idx) => (
                    <Col md={6} lg={3} key={idx}>
                      <div className="d-flex">
                        <div className="bg-light p-3 rounded-circle text-danger me-3">
                          {diet.icon}
                        </div>
                        <div>
                          <div className="fw-semibold">{diet.name}</div>
                          <div className="small text-muted">{diet.details}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <div className="d-flex bg-light p-3 rounded-3">
                  <FaHeart className="text-danger mt-1 me-2" />
                  <p className="mb-0">All special diets are prepared in consultation with our nutritionist and healthcare team</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

</>


  );
};

export default Facilities;