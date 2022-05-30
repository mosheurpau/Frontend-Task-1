import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import CustomLinkV from "../../CustomLinkV/CustomLinkV";
const Versatile = () => {
  return (
    <Container>
      <div className="text-center mt-5 p-5">
        <h2 style={{ color: "#644F9C" }}>VERSATILE AD FORMATS</h2>
      </div>

      {/* <div className="py-5 bg-bg-primary">
        <Link to="/versatile/popUnder">pop Under</Link>
        <Link to="/versatile/bannerAd">bannerAd</Link>
        <Link to="/versatile/native">native</Link>
        <Link to="/versatile/skim">skim</Link>
      </div> */}

      <Nav
        variant="pills"
        className="justify-content-center"
        activeKey="/versatile/popUnder"
      >
        <Nav.Item>
          <Nav.Link as={CustomLinkV} to="/versatile/popUnder">
            pop Under
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={CustomLinkV} to="/versatile/bannerAd">
            bannerAd
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={CustomLinkV} to="/versatile/native">
            native
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={CustomLinkV} to="/versatile/skim">
            skim
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet></Outlet>
    </Container>
  );
};

export default Versatile;
