import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "credentials"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              {/* <h4 className="section__subtitle">Clients</h4> */}
              <h2 className="section__title">Credentials</h2>
              <p className="section__description">
                Basically, we strive for long-term customer relationships. Most
                of our clients are long-standing regular customers who decide on
                the respective type of our assignment depending on the
                requirements in the individual projects. The relationship of
                trust that has grown in this way underlines the efficiency and
                precision of our solutions. We will be happy to provide you with
                customer references on request.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              {/* <img src={aboutImg} alt="" className="w-100" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
