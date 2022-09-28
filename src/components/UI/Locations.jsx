import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import BecomeDriverSection from "./BecomeDriverSection";
import CommonSection from "./CommonSection";
// import driveImg from "../../assets/all-images/drive.jpg";
// import photo1 from "../../assets/all-images/Max_Mustermann.jpg";
// import photo2 from "../../assets/all-images/max2.jpg";

const Locations = ({ aboutClass }) => {
  return (
    <>
      <CommonSection title="Locations" />
      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "0px" }
        }
      >
        <Container>
          <h1>
            CONTEXT ist inhabergeführt und konzernunabhängig. Den Vorstand
            bilden Herr Egerer und Herr Schuster.
          </h1>
          <Row>
            <Col lg="6" md="6"></Col>

            <Col lg="6" md="6"></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__section-content">
                <h2 className="section__title">Stefan Egerer</h2>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Studium: FH München
                    sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing.
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Technische Risikoanalysen (FMEA, FTA), Methodenberatung und
                    -entwicklung, Innovations- und Kreativitätsmethoden
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                <h2 className="section__title">Karsten Schuster</h2>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Studium: Universität
                    Jena, TU München
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing., Dipl.-Wirtsch.-Ing.
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Unternehmensberatung, Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Prozessmanagement
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <h1>
            CONTEXT wurde 1997 von einem Expertenteam für Methodenanwendung und
            -entwicklung mit der Idee gegründet, Technologieunternehmen bei der
            Lösung ihrer qualitäts- und prozessspezifischen Herausforderungen zu
            unterstützen. Heute zählt CONTEXT zu den professionellen Partnern
            von technologiegetriebenen Unternehmen im Bereich
            Qualitätsmanagement.
          </h1>
        </Row>
      </Container>
      <BecomeDriverSection />
    </>
  );
};

export default Locations;
