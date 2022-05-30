import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Skim = () => {
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
            SKIM
          </h3>
          <h5 style={{ color: "#404040" }}>
            SKIM" is a link that a publisher inserts on a specific site element,
            and after clicking on it, an advertisement appears to the user. SKIM
            gives 100% control of your sold traffic amount, higher CR to
            advertisers and CPM rates to publishers
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Skim;
