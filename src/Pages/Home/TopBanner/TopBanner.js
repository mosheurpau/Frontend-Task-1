import React from "react";
import { Container } from "react-bootstrap";

const TopBanner = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img
            height={50}
            className="pb-0"
            src="https://i.ibb.co/Jc0sYNq/task1-logo.jpg"
            alt="img"
          />
        </div>
        <div>
          <p style={{ fontWeight: "bold", padding: "20px 0 0 0" }}>
            <span style={{ color: "green" }}>BN </span>/ EN{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TopBanner;
