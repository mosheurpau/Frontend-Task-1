import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BusinessStats = () => {
  return (
    <Container fluid style={{ backgroundColor: "#644F9C" }}>
      <div className="text-center mt-5 p-5">
        <h2 style={{ color: "white" }}>Title 1</h2>
      </div>
      <Row className="justify-content-md-center mt-5 pt-3">
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/BqMsJct/business1.jpg"
            alt=""
          />
        </Col>
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/BC8fKM9/business2.jpg"
            alt=""
          />
        </Col>
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/J2fHm60/business3.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BusinessStats;
