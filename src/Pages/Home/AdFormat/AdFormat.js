import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AdFormat.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const AdFormat = () => {
  const [oneBtn, setOneBtn] = useState(true);
  const [twoBtn, setTwoBtn] = useState(false);
  const [threeBtn, setThreeBtn] = useState(false);
  const [fourBtn, setFourBtn] = useState(false);
  const buttonHandling = (data) => {
    if (data === "oneBtn") {
      setOneBtn(true);
      setTwoBtn(false);
      setThreeBtn(false);
      setFourBtn(false);
    } else if (data === "twoBtn") {
      setOneBtn(false);
      setTwoBtn(true);
      setThreeBtn(false);
      setFourBtn(false);
    } else if (data === "threeBtn") {
      setOneBtn(false);
      setTwoBtn(false);
      setThreeBtn(true);
      setFourBtn(false);
    } else if (data === "fourBtn") {
      setOneBtn(false);
      setTwoBtn(false);
      setThreeBtn(false);
      setFourBtn(true);
    }
    // console.log(data);
  };
  return (
    <div>
      <div className="text-center mt-5 p-5">
        <h2 style={{ color: "#644F9C" }}>VERSATILE AD FORMATS</h2>
      </div>
      <div className="my-5">
        <button className="test-btn" onClick={() => buttonHandling("oneBtn")}>
          POP-UNDER
        </button>

        <button className="test-btn" onClick={() => buttonHandling("twoBtn")}>
          BANNER AD
        </button>

        <button className="test-btn" onClick={() => buttonHandling("threeBtn")}>
          NATIVE
        </button>
        <button className="test-btn" onClick={() => buttonHandling("fourBtn")}>
          SKIM
        </button>
      </div>
      {oneBtn && (
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
                  paddingTop: "20px",
                }}
              >
                POP-UNDER
              </h3>
              <h5 style={{ color: "#404040" }}>
                This is one of the most popular ads. After user’s click, this ad
                opens landing page in behind. So, the user experience is not
                hampered much.
              </h5>
              <h5 style={{ color: "#644F9C" }} className="pt-5">
                Learn more
                <small className="p-2">
                  <BsBoxArrowUpRight />
                </small>
              </h5>
            </Col>
          </Row>
        </Container>
      )}
      {twoBtn && (
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
                  paddingTop: "20px",
                }}
              >
                BANNER AD
              </h3>
              <h5 style={{ color: "#404040" }}>
                Choose between the available banner formats. Highly effective ad
                for visibility.
              </h5>
              <h5 style={{ color: "#644F9C" }} className="pt-5">
                Learn more
                <small className="p-2">
                  <BsBoxArrowUpRight />
                </small>
              </h5>
            </Col>
          </Row>
        </Container>
      )}
      {threeBtn && (
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
                  paddingTop: "20px",
                }}
              >
                NATIVE
              </h3>
              <h5 style={{ color: "#404040" }}>
                Ad format with the image and the title, that perfectly fits into
                the content of the site. Native ads are placed in the most
                visible areas of the page and, thus, this format shows good
                results and the level of interaction.
              </h5>
              <h5 style={{ color: "#644F9C" }} className="pt-5">
                Learn more
                <small className="p-2">
                  <BsBoxArrowUpRight />
                </small>
              </h5>
            </Col>
          </Row>
        </Container>
      )}
      {fourBtn && (
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
                  paddingBottom: "30px",
                  paddingTop: "20px",
                }}
              >
                SKIM
              </h3>
              <h5 style={{ color: "#404040" }}>
                SKIM" is a link that a publisher inserts on a specific site
                element, and after clicking on it, an advertisement appears to
                the user. SKIM gives 100% control of your sold traffic amount,
                higher CR to advertisers and CPM rates to publishers
              </h5>
              <h5 style={{ color: "#644F9C" }} className="pt-5">
                Learn more
                <small className="p-2">
                  <BsBoxArrowUpRight />
                </small>
              </h5>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default AdFormat;
