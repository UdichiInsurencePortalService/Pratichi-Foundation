import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm(
      'service_p3mq90k', // Replace with your EmailJS service ID
      'template_6vcf0jf', // Replace with your EmailJS template ID
      form.current,
      '_CVqq1nmrbE6BhO0x' // Replace with your EmailJS public key
    )
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          address: '',
          message: ''
        });
        setIsLoading(false);
      }, (error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'Oops! Something went wrong. Please try again later.'
        });
        setIsLoading(false);
      });
  };

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-indigo-900 mb-4 fw-bold">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          We'd love to hear from you! Fill out the form and we'll get back to you shortly.
        </p>

        {/* Form Section */}
        <Row className="mb-5">
          {status.submitted && (
            <Col md={12} className="mb-4">
              <Alert variant={status.success ? "success" : "danger"}>
                {status.message}
              </Alert>
            </Col>
          )}

          <Col md={12}>
            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required 
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Mobile Number</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="mobile" 
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number" 
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Address</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="address" 
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address" 
                    />
                  </Form.Group>
                </Col>

                <Col md={12} className="mb-4">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Type your message here..." 
                      required 
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Button 
                    type="submit" 
                    className="px-4 py-2 mt-2 me-3" 
                    style={{backgroundColor: "#09cc7f", color: "black", fontWeight: 600, border: "1px solid #09cc7f"}}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Submit'}
                  </Button>
                  <Link to="/donation">
                    <Button 
                      className="px-4 py-2 mt-2" 
                      style={{backgroundColor: "#09cc7f", color: "black", fontWeight: 600, border: "1px solid #09cc7f"}}
                    >
                      Donation
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
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