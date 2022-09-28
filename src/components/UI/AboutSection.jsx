import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import BecomeDriverSection from "./BecomeDriverSection";
import CommonSection from "./CommonSection";
import driveImg from "../../assets/all-images/drive.jpg";
import { ScrollToTop } from "./ScrollToTop";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <>
      <div>
        <ScrollToTop />
      </div>
      <CommonSection title="Company" />
      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "0px" }
        }
      >
        <Container>
          <Row className="client-con1">
            <Col lg="6" md="9">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Clients</h2>
                <p className="section__description q">
                  226 / 5,000 Translation results Our customers are technology
                  and process-oriented companies that develop and manufacture
                  complex products. The majority of these are function-critical
                  components and safety-relevant overall systems.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="9">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://st4.depositphotos.com/19305274/31411/i/450/depositphotos_314115366-stock-photo-car-sell-agent-client-car.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "50px" }}>
          <Row className="client-con2">
            <Col lg="6" md="9">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://www.pwc.com/gx/en/brand-simplified/teaser-images-670/automotive/damil-gettyimages-723504579-670.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="9">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">The industry</h2>
                <p className="section__description">
                  Our roots are in the automotive industry. Today we support
                  well-known manufacturers and suppliers from the fields of
                  mobility, electronics as well as plant and mechanical
                  engineering, from large medium-sized companies to global
                  corporations.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "50px" }}>
          <Row className="client-con3">
            <Col lg="6" md="9">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Credentials</h2>
                <p className="section__description">
                  Basically, we strive for long-term customer relationships.
                  Most of our clients are long-standing regular customers who
                  decide on the respective type of our assignment depending on
                  the requirements in the individual projects. The relationship
                  of trust that has grown in this way underlines the efficiency
                  and precision of our solutions. We will be happy to provide
                  you with customer references on request.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="9">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://media.istockphoto.com/photos/various-car-parts-and-accessories-on-black-background-picture-id1150507732?k=20&m=1150507732&s=612x612&w=0&h=kCrTc2zNQKb6WExxZOW6a60cTYSpjrKx-JOwIUd-YZk="
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Container> */}
      <BecomeDriverSection />
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row>
          <Col lg="6" md="9" sm="12">
            <div className="about__page-img">
              <img src={driveImg} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
          <Col lg="6" md="9" sm="12">
            <div className="about__page-content">
              <h2 className="section__title">
                We Are Committed To Provide Safe Ride Solutions
              </h2>

              <p className="section__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <p className="section__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <div className=" d-flex align-items-center gap-3 mt-4">
                <span className="fs-4">
                  <i class="ri-phone-line"></i>
                </span>

                <div>
                  <h6 className="section__subtitle">Need Any Help?</h6>
                  <h4>+00123456789</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default AboutSection;
