import React from "react";

const Footer = () => {
  return (
    <div className="container my-5">
      <footer
        className="text-center text-lg-start text-dark text-decoration-none mx-auto"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5
                  style={{ color: "#644F9C" }}
                  className="text-uppercase mb-4 font-weight-bold"
                >
                  Company name
                </h5>
                <h5>FOLLOW US</h5>
                <div className="py-2">
                  <img src="https://i.ibb.co/qFbFhTq/insta.jpg" alt="ins" />
                  <img src="https://i.ibb.co/fX3RxC1/face.jpg" alt="face" />
                  <img
                    src="https://i.ibb.co/vZmjYfZ/youtub.jpg"
                    alt="youtube"
                  />
                </div>
                <div>
                  <img
                    height={50}
                    className="pb-0"
                    src="https://i.ibb.co/Jc0sYNq/task1-logo.jpg"
                    alt="img"
                  />
                </div>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5
                  style={{ color: "#644F9C" }}
                  className="text-uppercase mb-4 font-weight-bold"
                >
                  Links
                </h5>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    ADVERTISERS FAQ
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    PUBLISHERS
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    INFLUENCERS
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    AD FORMATS
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5
                  style={{ color: "#644F9C" }}
                  className="text-uppercase mb-4 font-weight-bold"
                >
                  Documentation{" "}
                </h5>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    TERMS & CONDITIONS
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    PRIVACY POLICY
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    CANCELLATION POLICY
                  </a>
                </p>
                <p>
                  <a
                    style={{ fontWeight: "900" }}
                    className="text-dark text-decoration-none"
                  >
                    BLOG
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5
                  style={{ color: "#644F9C" }}
                  className="text-uppercase mb-4 font-weight-bold"
                >
                  Support
                </h5>
                <p>FAQ</p>
                <p>MEDIA KIT</p>
                <p>CONTACT US</p>
                <p></p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
