import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../../../assets/Home-image/olds.png";
import homebanner from "../../../assets/Home-image/olld.png";
import sanik from "../../../assets/Home-image/pathshaala-1.jpg";
import { Link } from "react-router";

import { Shield, BookOpen, Award, Users, Flag } from 'lucide-react';

import './Home.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="slider-area py-5">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <Container>
              <Row className="align-items-center">
                {/* Left side content - centered with proper padding */}
                <Col xl={6} lg={6} md={12} className="mb-4 mb-lg-0">
                  <div
                    className="hero__caption text-center text-lg-start px-3 px-md-4 py-4"
                    data-aos="fade-right"
                  >
                    <h2
                      className="mb-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Pratichi Foundation Empowering Lives, Enriching Futures
                    </h2>
                    <p className="my-4" data-aos="fade-up" data-aos-delay="400">
                      Pratichi Foundation is a dynamic NGO committed to building
                      a more just, inclusive, and empowered society. With a
                      strong grassroots presence, we work across diverse
                      sectors—education and literacy, poverty alleviation,
                      minority rehabilitation, senior citizen welfare, women
                      entrepreneurship, environmental sustainability, and
                      support for Sainik School education. Driven by compassion
                      and guided by equity, we focus on creating long-term,
                      sustainable change. From nurturing young minds in
                      underprivileged communities to empowering women with
                      entrepreneurial skills, supporting the elderly with
                      dignity, and addressing the global climate crisis—Pratichi
                      believes in action that transforms lives. Every initiative
                      we undertake is a step toward a brighter, more resilient
                      tomorrow.
                    </p>
                    <div className="hero__btn d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                    <Link to='/donation'>
                      <button
                        href="/donate"
                        className="old-button hero-btn px-4 py-2 fw-bold"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        style={{backgroundColor:'#09cc7f',border:'1px solid #09cc7f'}}
                      >
                        Donate
                      </button>
                      </Link>
                    </div>
                  </div>
                </Col>

                {/* Right side image */}
                <Col
                  xl={6}
                  lg={6}
                  md={12}
                  className="d-flex justify-content-center"
                >
                  <div
                    className="hero-image-wrapper"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <img
                      src={home}
                      alt="Elderly care at Pratichi Foundation"
                      className="img-fluid "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* old age home */}

      <Container className="py-5">
        <Card className="border-0 shadow-lg my-5 overflow-hidden">
          {/* Header Banner */}
          <div className=" text-white p-4 p-md-5" style={{backgroundColor:'#09cc7f'}}>
            <h2 className="display-5 fw-bold">🏠 Ananda Shanti Niketan</h2>
            <p className="lead mb-0 text-black fw-bold">
              Where Every Sunset Glows with Peace and Dignity
            </p>
          </div>

          <Card.Body className="p-4 p-md-5">
            <Row className="g-4">
              {/* Left Content Column */}
              <Col lg={6} className="mb-4 mb-lg-0">
                <h3 className=" mb-4" style={{Color:'#09cc7f'}}>
                  Welcome to Ananda Shanti Niketan,
                </h3>

                <p className="mb-4">
                  At Ananda Shanti Niketan, each day begins with gentle smiles,
                  nurturing care, and the quiet assurance that our residents are
                  cherished. Our holistic approach ensures physical well-being,
                  emotional comfort, and mental stimulation through personalized
                  care, cultural engagement, and companionship.
                </p>

                {/* Testimonial Box */}

                <p>
                  Our community offers a perfect balance of independence and
                  support, allowing residents to enjoy life to the fullest while
                  receiving the assistance they need.
                </p>

                {/* Feature Badges */}
                <h5 className="mt-4 mb-3">Our Comprehensive Services:</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <badge  className="p-2 px-3 rounded-pill" >
                    Comfortable, well-equipped living spaces designed for safety
                    and ease
                  </badge>
                  <badge className="p-2 px-3 rounded-pill">
                    24/7 medical support and attentive caregiving
                  </badge>
                  <badge  className="p-2 px-3 rounded-pill" >
                    Engaging recreational and cultural activities
                  </badge>
                  <badge  className="p-2 px-3 rounded-pill">
                    A community where laughter, stories, and love are shared
                    freely
                  </badge>
                  <badge  className="p-2 px-3 rounded-pill">
                    Beautiful Gardens
                  </badge>
                </div>

<Link as={Link} to='/contact'>
                <button
                  size="lg"
                  className=" old-button rounded-pill px-4 mt-3 shadow-sm fw-bold"
                  style={{backgroundColor:"#09cc7f",padding:'10px',border:'1px solid #09cc7f'}}
                >
                  Schedule a Call
                </button>
                </Link>
              </Col>

              {/* Right Image Column */}
              <Col lg={6}>
                <div className="position-relative h-100">
                  <div className="overflow-hidden ">
                    <img
                      src={homebanner}
                      alt="Seniors enjoying community activities"
                      className="img-fluid w-100 h-100 object-fit-cover"
                      style={{
                        objectPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>

                  {/* Floating Feature Cards */}
                  <Row className="g-3 mt-4">
                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex align-items-center p-3">
                          <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                            <i className="bi bi-heart-pulse text-primary fs-4"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Personalized Care</h6>
                            <p className="mb-0 small text-muted">
                              Tailored to individual needs
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex align-items-center p-3">
                          <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                            <i className="bi bi-house-heart text-primary fs-4"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Homely Environment</h6>
                            <p className="mb-0 small text-muted">
                              Comfort in every corner
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>


      {/* sanik school session  */}


      <Container className="py-5">
      <Card className="border-0 shadow-lg my-5 overflow-hidden">
        {/* Header Banner with Military-inspired design */}
        <div className="text-white p-4 p-md-5" style={{ backgroundColor: '#09cc7f' }}>
          <h2 className="display-5 fw-bold">🎖️ Sainik School Excellence</h2>
          <p className="lead mb-0 fw-bold text-black">
            Molding Tomorrow's Leaders with Discipline and Knowledge
          </p>
        </div>

        <Card.Body className="p-4 p-md-5">
          <Row className="g-4">
            {/* Left Content Column */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="mb-4 text-black fw-bold">
                Welcome to Sainik School,
              </h3>

              <p className="mb-4">
              The Pratichi Foundation is dedicated to improving educational opportunities for children in need. We are reaching out for your support to help us provide essential resources to schools that are facing significant challenges. Your donation will directly contribute to: Learning materials and supplies Infrastructure improvements Teacher training and development. Together, we can make a meaningful impact on the lives of students and empower future generations. Please consider making a donation today!
              </p>

             
              

              {/* Feature Badges */}
              <h5 className="mt-4 mb-3">Our Educational Excellence:</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {[
                  "CBSE-affiliated academic curriculum",
                  "Military training & discipline",
                  "State-of-the-art sports facilities",
                  "Leadership development programs",
                  "NCC training",
                  "Defense services preparation"
                ].map((feature, index) => (
                  <badge 
                    key={index} 
                    className="p-2 px-3 rounded-pill mb-2 fw-bold" 
                  >
                    {feature}
                  </badge>
                ))}
              </div>
<Link to='/contact'>
              <Button
                size="lg"
                className="rounded-pill px-4 mt-3 shadow-sm fw-bold "
                style={{backgroundColor:'#09cc7f',border:'1px solid #09cc7f',color:'black',fontWeight:600}}
              >
                Schedule a Call
              </Button>
              </Link>
            </Col>

            {/* Right Image Column */}
            <Col lg={6}>
              <div className="position-relative h-100">
              <div className="overflow-hidden">
  <div 
    className="img-fluid w-100"
    style={{
      height: '300px',
      backgroundImage: `url(${sanik})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      transition: 'transform 0.5s ease',
    }}
  />
</div>

                {/* Floating Feature Cards */}
                <Row className="g-3 mt-4">
                  <Col sm={6}>
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="d-flex align-items-center p-3">
                        <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                          <Shield className="text-warning" size={24} />
                        </div>
                        <div>
                          <h6 className="mb-1">Military Training</h6>
                          <p className="mb-0 small text-muted">
                            Discipline & tactical skills
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="d-flex align-items-center p-3">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                          <BookOpen className="text-primary" size={24} />
                        </div>
                        <div>
                          <h6 className="mb-1">Academic Excellence</h6>
                          <p className="mb-0 small text-muted">
                            Top-tier education
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} className="mt-3">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="d-flex align-items-center p-3">
                        <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                          <Users className="text-success" size={24} />
                        </div>
                        <div>
                          <h6 className="mb-1">Character Building</h6>
                          <p className="mb-0 small text-muted">
                            Values & leadership
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} className="mt-3">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="d-flex align-items-center p-3">
                        <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                          <Award className="text-danger" size={24} />
                        </div>
                        <div>
                          <h6 className="mb-1">Sports & Fitness</h6>
                          <p className="mb-0 small text-muted">
                            Physical excellence
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          
          {/* Statistics Row */}
          
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default Home;
