import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <Row className="banner-bg p-3">
        <Col sm={5} className="text-start">
          <h3
            style={{
              color: "#644F9C",
              paddingBottom: "60px",
              paddingTop: "60px",
            }}
          >
            Here will be a Title
          </h3>
          <h5 style={{ color: "#404040" }}>Here will be a text</h5>
        </Col>
        <Col sm={7} className="p-2">
          <img
            className="img-fluid"
            src="https://i.ibb.co/BzxvyVn/task1-banner.jpg"
            alt="img"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
