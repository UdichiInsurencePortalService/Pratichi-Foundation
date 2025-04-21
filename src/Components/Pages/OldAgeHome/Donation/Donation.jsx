import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import qr from '../../../../assets/qr/qrs.png'

const Donation = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Support Pratichi Foundation</h2>
      <Row className="g-4">
        {/* QR and Info Section */}
        <Col lg={6} md={6} sm={12}>
          <Card className="p-3 shadow rounded-4 text-center">
            <h4 className="mb-3">Scan to Donate</h4>
            <img
              src={qr}
              alt="Donation QR Code"
              className="img-fluid rounded-3"
            />
            <p className="mt-3 fw-semibold">Pratichi Foundation</p>
          </Card>
        </Col>

        {/* Form Section */}
        <Col lg={6} md={6} sm={12}>
          <Card className="p-4 shadow rounded-4">
            <h5 className="mb-4">Donation Details</h5>
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

              <Button variant="primary" className="w-100 rounded-pill mt-2">
                Submit Details
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Google Map */}
      <div className="mt-5">
        <h5 className="text-center mb-3">Our Location</h5>
        <div style={{ borderRadius: "12px", overflow: "hidden" }}>
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
      </div>
    </Container>
  );
};

export default Donation;
