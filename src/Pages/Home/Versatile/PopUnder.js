import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PopUnder = () => {
  return (
    <Container>
      <Row className="banner-bg p-3">
        <Col sm={7} className="p-2">
          <img
            className="img-fluid"
            src="https://i.ibb.co/hCn4zXZ/varsatile1.jpg"
            alt="img"
          ></img>
        </Col>
        <Col sm={5} className="text-start">
          <h3
            style={{
              color: "#FF6F00",
              paddingBottom: "60px",
              paddingTop: "60px",
            }}
          >
            POP-UNDER
          </h3>
          <h5 style={{ color: "#404040" }}>
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default PopUnder;
