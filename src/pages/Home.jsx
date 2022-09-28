import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
// import FindCarForm from "../components/UI/FindCarForm";
// import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
// import carData from "../assets/data/carData";
// import CarItem from "../components/UI/TeamItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/home.css'

import OurMembers from "../components/UI/OurMembers";
import { ScrollToTop } from "../components/UI/ScrollToTop";
// import About from "./About";

const Home = () => {
  AOS.init({
    once: false,
  });
  return (
    <Helmet title="Home">
      <div>
        <ScrollToTop />
      </div>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        {/* <div className="hero__form">
          <Container>
            <Row className="form__row contex">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>
                    <br />
                    Context
                    <br />
                  </h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm data-aos="zoom-in" data-aos-duration="1700" />
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>
      {/* =========== about section ================ */}
      {/* <AboutSection /> */}
      {/* <About /> */}
      {/* ========== services section ============ */}
      {/* <section>
        <Container>
          <Row data-aos="zoom-in" data-aos-duration="1700">
            <Col lg="12" className="mb-5 text-center">
              <h1
                style={{ marginBottom: "50px" }}
                data-aos="zoom-in"
                data-aos-duration="1700"
                className="section__title"
              >
                About Us
              </h1>
              <h4 style={{ fontStyle: "24px", color: "#7c8a97" }}>
                CONTEXT plant, berät und setzt Projekte im Bereich
                Qualitätsmanagement und Prozessmanagement um. Zusätzlich
                vermitteln wir unser Methodenwissen in Seminaren und Schulungen.
                Mit unserem Know-how unterstützen wir Technologieunternehmen bei
                der erfolgreichen Entwicklung und Optimierung von Produkten und
                Prozessen.
              </h4>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section data-aos="zoom-in" data-aos-duration="1700">
        <Container>
          <Row data-aos="zoom-in" data-aos-duration="1700">
            <Col lg="12" className="mb-5 text-center">
              {/* <h6
                data-aos="zoom-in"
                data-aos-duration="1700"
                className="section__subtitle"
              >
                See our
              </h6> */}
              <h2
                data-aos="zoom-in"
                data-aos-duration="1700"
                className="section__title"
              >
                Services
              </h2>
            </Col>
            {/* <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, necessitatibus.</Col> */}
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit illo odit! Quisquam, explicabo ducimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut officiis facilis voluptas ex optio magnam!</h3>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Our</h6>
              <h2 className="section__title">Team</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section> */}


      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
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
              <h2 className="section__title">About Us</h2>
              <h5 style={{ fontStyle: "24px", color: "#7c8a97" }}>
                CONTEXT plant, berät und setzt Projekte im Bereich
                Qualitätsmanagement und Prozessmanagement um. Zusätzlich
                vermitteln wir unser Methodenwissen in Seminaren und Schulungen.
                <br />
                Mit unserem Know-how unterstützen wir Technologieunternehmen bei
                der erfolgreichen Entwicklung und Optimierung von Produkten und
                Prozessen.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <BecomeDriverSection />
      <section data-aos="zoom-in" data-aos-duration="1700">
        <Container>
          <Row>
            <Col
              data-aos="zoom-in"
              data-aos-duration="1700"
              lg="12"
              className="mb-4 text-center"
            >
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      <section data-aos="zoom-in" data-aos-duration="1700">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}

      {/* =========== testimonial section =========== */}


      {/* =============== blog section =========== */}
      {/* <section data-aos="zoom-in" data-aos-duration="1700">
        <Container data-aos="zoom-in" data-aos-duration="1700">
          <Row>
            <Col
              data-aos="zoom-in"
              data-aos-duration="1700"
              lg="12"
              className="mb-5 text-center"
            >
              <h2 className="section__title">Jobs</h2>
              <h6 className="section__subtitle">Open Positions</h6>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
