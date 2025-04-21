import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import fee from '../../../../assets/sanik/Fee.jpg'

const SanikFee = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Heading and Intro Points */}
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="text-indigo-900 fw-bold mb-3">Fee Structure</h2>
            <p className="text-muted">
              At Sainik School, we maintain complete transparency in our fee structure. Here are a few key points:
            </p>
            <ul className="text-start text-muted mx-auto" style={{ maxWidth: "700px" }}>
              <li>Annual tuition and hostel charges apply.</li>
              <li>Uniforms, books, and sports kits are included.</li>
              <li>Financial aid available for eligible students.</li>
              <li>One-time admission charges may apply.</li>
            </ul>
          </Col>
        </Row>

        {/* Fee Structure Image */}
        <Row className="mb-5 justify-content-center">
          <Col md={10}>
            <Card className="shadow-sm border-0">
              <Card.Img 
                src={fee} // Replace with actual image path
                alt="Fee Structure"
                className="img-fluid"
              />
            </Card>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 text-center shadow border-0 bg-white">
              <h5 className="text-indigo-900 fw-bold mb-2">Have questions regarding the fee?</h5>
              <p className="text-muted mb-3">Feel free to reach out to us at:</p>
              <h4 className="text-success fw-bold">📞 +91 98765 43210</h4>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SanikFee;
