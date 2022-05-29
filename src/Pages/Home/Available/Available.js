import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Available.css";

const Available = () => {
  return (
    <Container>
      <div className="text-center mt-5 p-5">
        <h2 style={{ color: "#644F9C" }}>AVAILABLE FOR EVERYONE</h2>
        <h5 style={{ fontWeight: "bold", color: "#404040" }}>
          Here will be a text
        </h5>
      </div>
      <Row className="justify-content-md-center mt-5 pt-3">
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/rk4DQBh/available1.jpg"
            alt=""
          />
          <h4 style={{ color: "#404040" }} className="py-3">
            Text 1
          </h4>
          <button className="available-btn">Hello 1</button>
        </Col>
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/ZSQhzKQ/available2.jpg"
            alt=""
          />
          <h4 style={{ color: "#404040" }} className="py-3">
            Text 2
          </h4>
          <button className="available-btn">Hello 2</button>
        </Col>
        <Col lg="4" className="text-center mb-5">
          <img
            className="img-fluid"
            src="https://i.ibb.co/FJgt6WD/available3.jpg"
            alt=""
          />
          <h4 style={{ color: "#404040" }} className="py-3">
            Text 3
          </h4>
          <button className="available-btn">Hello 3</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Available;
