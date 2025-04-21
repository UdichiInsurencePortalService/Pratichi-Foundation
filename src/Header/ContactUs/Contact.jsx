import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-indigo-900 mb-4 fw-bold">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          We'd love to hear from you! Fill out the form and we’ll get back to you shortly.
        </p>

        {/* Form Section */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile number" />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Button  className="px-4 py-2 mt-2" style={{backgroundColor:" #09cc7f",color:'black',fontWeight:600,border:'1px solid #09cc7f'}}>Submit</Button>
          </Col>
        </Row>

        {/* Contact Info Cards */}
        <Row className="gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm p-4 text-center border-0">
              <Phone className="text-primary mb-2" size={28} />
              <h6 className="fw-bold mb-1">Phone</h6>
              <p className="text-muted m-0">+91 9818152403</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm p-4 text-center border-0">
              <Mail className="text-primary mb-2" size={28} />
              <h6 className="fw-bold mb-1">Email</h6>
              <p className="text-muted m-0">pratichifoundation2019@gmail.com</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm p-4 text-center border-0">
              <MapPin className="text-primary mb-2" size={28} />
              <h6 className="fw-bold mb-1">Address</h6>
              <p className="text-muted m-0">LGF-54, Captain Vijyant Thapar Marg, D Block, Pocket D, Sector 18, Noida, Uttar Pradesh 201301</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
