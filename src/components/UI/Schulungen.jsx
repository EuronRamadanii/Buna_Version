import React from "react";
import { Col, Container, Row } from "reactstrap";
import service3 from "../../assets/data/service3";
import "../../styles/services-list.css";
import servicePhoto from "../../assets/all-images/services.jpg";
import { ScrollToTop } from "./ScrollToTop";

const Schulung = ({ item }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ServiceItem item={service3} key={service3.id} />
    </div>
  );
};
const ServiceItem = ({ item }) => (
  <>
    <div>
      <ScrollToTop />
    </div>
    <Container>
      <Row>
        <Col lg="6" md="10" sm="10" className="mb-3">
          <div className="service__item">
            <span
              className="mb-3 d-flex"
              style={{ alignItems: "flex-end", justifyContent: "flex-start" }}
            >
              <i class={item.icon} style={{ marginRight: "5px" }} />
              <h1>{item.title}</h1>
            </span>

            <p className="section__description">{item.desc}</p>
            <p className="section__description">{item.desc2}</p>
            {item.subLinks.map((sub) => (
              <div style={{ marginLeft: "40px" }} className="sub-item">
                <h4>{sub.title}</h4>
                <p>{sub.text}</p>
                {sub.subTexts.map((t) => (
                  <div style={{ marginLeft: "40px" }} className="subofsub-item">
                    <h5> {t.title}</h5>
                    <ul style={{ listStyleType: "circle" }}>
                      {t.paragraphs.map((p) => (
                        <li>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Col>
        <Col className="fixed-photo">
          <img
            src={servicePhoto}
            style={{
              height: "500px",
              width: "500px",
              marginLeft: "100px",
              position: "fixed",
              zIndex: "-1",
            }}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  </>
);

export default Schulung;
