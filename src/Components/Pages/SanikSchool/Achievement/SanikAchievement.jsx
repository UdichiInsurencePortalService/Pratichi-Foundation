import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SanikAchievement = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Facility Overview */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h2 className="text-indigo-900 fw-bold mb-3">Sainik School Achievement</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Sainik School provides state-of-the-art facilities designed to build discipline,
              leadership, and all-round development of cadets. The environment is structured
              to foster academic excellence, physical fitness, and character building.
            </p>
          </Col>
        </Row>

        {/* Under Development */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center bg-white p-5 rounded shadow-sm">
            <h4 className="text-warning fw-bold mb-3">🚧 Under Development 🚧</h4>
            <p className="text-muted">
              This section is currently being developed. Please check back soon for exciting updates
              on sports and infrastructure facilities.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SanikAchievement;
