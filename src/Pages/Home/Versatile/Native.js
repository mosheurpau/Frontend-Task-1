import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Native = () => {
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
            NATIVE
          </h3>
          <h5 style={{ color: "#404040" }}>
            Ad format with the image and the title, that perfectly fits into the
            content of the site. Native ads are placed in the most visible areas
            of the page and, thus, this format shows good results and the level
            of interaction.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Native;
