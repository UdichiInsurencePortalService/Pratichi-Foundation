import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Heart, Star, Activity, Utensils, Home, Users } from 'lucide-react';
import overview from '../../../../assets/overview/overview.png'

export default function Overview() {
  return (
    <div className="font-sans pt-5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-50 py-16 md:py-24">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                A New Beginning for Our Beloved Parents
              </h1>
              <div className="bg-indigo-600 w-24 h-1 mb-6"></div>
              <h2 className="text-xl md:text-2xl text-indigo-700 mb-6">
                Pratichi Foundation presents a world-class sanctuary built with love, care, and unmatched amenities.
              </h2>
              <p className="text-gray-700 mb-8">
                This home isn't just a place to stay—it's a <strong>home to live, laugh, and thrive</strong>. Designed with compassion and equipped with top-tier facilities, it's our way of giving back to those who've given us everything.
              </p>

              <Button href='/facilites' size="lg" style={{backgroundColor:'#09cc7f',border:'1px solid #09cc7f',color:'black',fontWeight:'600'}}>
                Learn More
              </Button>
            </Col>
            <Col lg={6}>
              <img 
                src={overview}
                alt="Senior residents enjoying amenities" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="py-16 pt-4">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Key Highlights</h2>
            <div className="bg-indigo-600 w-24 h-1 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's honor our parents with the dignity, love, and comfort they truly deserve.
            </p>
          </div>
          
          <Row>
            <Col md={6} lg={4} className="mb-8 p-4">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100  rounded-full inline-flex mb-4">
                    <Home color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">Luxurious Living Spaces</h3>
                  <p className="text-gray-600">
                    Comfortable, spacious accommodations designed to feel like home with all modern amenities.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mb-8 p-4">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100 rounded-full inline-flex mb-4">
                    <Activity color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">24/7 Medical Care</h3>
                  <p className="text-gray-600">
                    Round-the-clock medical supervision and wellness programs tailored to individual needs.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mb-8 p-4">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100  rounded-full inline-flex ">
                    <Users color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">Recreational Activities</h3>
                  <p className="text-gray-600">
                    Engaging community events, hobby classes, and entertainment options to foster joy and connection.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mb-8 md:mb-0 p-4">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100  rounded-full inline-flex mb-4">
                    <Utensils color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">Nutritious Meals</h3>
                  <p className="text-gray-600">
                    Delicious, balanced, and diet-specific meals prepared by professional chefs with love and care.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mb-8 md:mb-0 p-4">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100  rounded-full inline-flex mb-4">
                    <Star color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">Premium Amenities</h3>
                  <p className="text-gray-600">
                    Library, garden, meditation rooms, and more to ensure comfort, peace, and personal growth.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className='p-4'>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-3">
                <div className="p-6">
                  <div className="bg-indigo-100  rounded-full inline-flex mb-4">
                    <Heart color="#4f46e5" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-900">Personal Care</h3>
                  <p className="text-gray-600">
                    Attentive staff providing personalized assistance with daily activities while respecting dignity.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      
 

    
    </div>
  );
}