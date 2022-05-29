import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/advertise">
                ADVERTISERS
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/publishers">
                PUBLISHERS
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/influncers">
                INFLUENCERS
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/blog">
                BLOG
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/contact">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button className="login-btn">
                  LOGIN <button className="signUp-btn">SIGN UP</button>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
