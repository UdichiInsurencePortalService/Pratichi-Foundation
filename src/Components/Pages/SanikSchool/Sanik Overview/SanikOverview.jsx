import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Heart, Star, Activity, Shield, Home, Users } from 'lucide-react';
import sanik from '../../../../assets/Home-image/pathshaala-1.jpg'

export default function SanikOverview() {
  return (
    <div className="font-sans pt-5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-50 py-16 md:py-24">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              A New Chapter for Our Brave Young Aspirants
              </h1>
              <div className="bg-indigo-600 w-24 h-1 mb-6"></div>
              
              <p className="text-gray-700 mb-8">
              The Pratichi Foundation is dedicated to improving educational opportunities for children in need. We are reaching out for your support to help us provide essential resources to schools that are facing significant challenges. Your donation will directly contribute to: Learning materials and supplies Infrastructure improvements Teacher training and development. Together, we can make a meaningful impact on the lives of students and empower future generations. Please consider making a donation today!
              </p>
              <Button size="lg" style={{backgroundColor:'#09cc7f',border:'1px solid #09cc7f',color:'black',fontWeight:'600'}}>
                Learn More
              </Button>
            </Col>
            <Col lg={6}>
              <div className="img-fluid w-100" style={{height: '300px', backgroundImage: `url(${sanik})`, backgroundSize:'contain',backgroundPosition: 'center',transition: 'transform 0.5s ease',
                  }}
                >
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="py-16 pt-5">
  <Container>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Key Highlights</h2>
      <div className="bg-indigo-600 w-24 h-1 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Empowering young minds with discipline, knowledge, and leadership—laying the foundation for tomorrow's heroes.
      </p>
    </div>

    <Row>
      <Col md={6} lg={4} className="mb-8 p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Home color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">CBSE-Affiliated Curriculum</h3>
            <p className="text-gray-600">
              Rigorous academics aligned with the CBSE board to ensure holistic educational development.
            </p>
          </div>
        </Card>
      </Col>

      <Col md={6} lg={4} className="mb-8 p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Activity color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Military Training & Discipline</h3>
            <p className="text-gray-600">
              Cadet life instills a strong sense of discipline, punctuality, and commitment to duty.
            </p>
          </div>
        </Card>
      </Col>

      <Col md={6} lg={4} className="mb-8 p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Users color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Advanced Sports Facilities</h3>
            <p className="text-gray-600">
              From athletics to team sports, we foster physical strength and sportsmanship at every level.
            </p>
          </div>
        </Card>
      </Col>

      <Col md={6} lg={4} className="mb-8 p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Star color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Leadership Development</h3>
            <p className="text-gray-600">
              Focused programs to nurture confidence, decision-making, and public speaking from a young age.
            </p>
          </div>
        </Card>
      </Col>

      <Col md={6} lg={4} className="mb-8 p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Shield color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Defense Exam Preparation</h3>
            <p className="text-gray-600">
              Intensive coaching and guidance for NDA, UPSC, and other defense-related examinations.
            </p>
          </div>
        </Card>
      </Col>

      <Col md={6} lg={4} className="p-4 d-flex">
        <Card className="h-100 w-100 d-flex flex-column border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
          <div className="p-6">
            <div className="bg-indigo-100 rounded-full inline-flex mb-4 p-2">
              <Heart color="#4f46e5" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Holistic Care & Mentorship</h3>
            <p className="text-gray-600">
              Dedicated faculty and counselors ensure students’ emotional, mental, and academic well-being.
            </p>
          </div>
        </Card>
      </Col>
    </Row>
       <Row className="justify-content-center pt-5 pb-4">
              <Col md={6}>
                <Card className="p-4 text-center shadow border-0 bg-white">
                  <p className="text-muted mb-3">Feel free to reach out to us at:</p>
                  <h4 className="text-success fw-bold"> +91 9818152403</h4>
                  <h4 className="text-success fw-bold"> B-48 Sector 53 , Noida</h4>

                </Card>
              </Col>
            </Row>
  </Container>
</div>


      
 

    
    </div>
  );
}