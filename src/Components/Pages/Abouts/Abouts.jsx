import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBed, FaHeartbeat, FaUsers, FaUtensils } from 'react-icons/fa';
import './About.css';
import about2 from '../../../assets/Home-image/olld.png';
import { Link } from 'react-router';


const Abouts = () => {
  return (
    <>
    <div className="service-area section-padding30 p-5">
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={7} md={10} sm={10}>
            <div className="section-tittle text-center mb-80">
              <span className='fw-bold'>What we are doing</span>
              <h2>We Are In A Mission To Help The Helpless</h2>
            </div>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col lg={3} md={3} sm={6}>
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaBed size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Comfortable and luxurious living spaces</a>
                </h5>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <div className="single-cat active text-center mb-50">
              <div className="cat-icon">
                <FaHeartbeat size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">24/7 medical care and wellness programs</a>
                </h5>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaUsers size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Recreational activities and community engagement</a>
                </h5>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <FaUtensils size={40} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Nutritious meals and personal care</a>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>


// 


<section className="about-section py-5 my-5">
      <Container>
        {/* Central Header Section */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="section-title position-relative">
              <span className="subtitle d-inline-block text-primary fw-semibold mb-2 px-3 py-1 rounded-pill" 
                    style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                About our foundation
              </span>
              <h2 className="display-5 fw-bold mb-4">Who We Are</h2>
              <div className="title-decoration mx-auto"></div>
            </div>
          </Col>
        </Row>

        {/* Content Row with Centered Image and Text */}
        <Row className="align-items-center justify-content-center">
          {/* Image Column (Centered) */}
          <Col lg={5} md={6} className="mb-5 mb-md-0">
            <div className="about-image position-relative text-center">
              <div className="main-image rounded-3  overflow-hidden">
                <img src={about2} alt="About Pratichi Foundation" className="img-fluid" />
              </div>
              <div className="floating-accent position-absolute"
                   style={{ 
                     bottom: '-2rem', 
                     right: '-2rem', 
                     width: '8rem', 
                     height: '8rem',
                     backgroundColor: 'rgba(13, 110, 253, 0.1)',
                     borderRadius: '50%',
                     zIndex: '-1'
                   }}>
              </div>
              <div className="floating-accent position-absolute"
                   style={{ 
                     top: '-1rem', 
                     left: '-1rem', 
                     width: '5rem', 
                     height: '5rem',
                     backgroundColor: 'rgba(13, 110, 253, 0.05)',
                     borderRadius: '50%',
                     zIndex: '-1'
                   }}>
              </div>
            </div>
          </Col>

          {/* Content Column (Centered) */}
          <Col lg={6} md={10} className="ps-lg-5">
            <div className="about-content">
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
                          <div className="icon-bg rounded-circle d-flex align-items-center justify-content-center"
                               style={{ 
                                 width: '50px', 
                                 height: '50px', 
                                 backgroundColor: 'rgba(13, 110, 253, 0.1)' 
                               }}>
                            <span className="text-primary fw-bold">{index + 1}</span>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>  
    </>
  );
};

export default Abouts;
