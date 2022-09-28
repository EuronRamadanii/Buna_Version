import React from "react";
import { Col, Container, Row } from "reactstrap";
import service1 from "../../assets/data/service1";
import "../../styles/services-list.css";
// import service12 from "../../assets/all-images/service_1.2671af4c.png";
import servicePhoto from "../../assets/all-images/services.jpg";
import { ScrollToTop } from "./ScrollToTop";

const Projektierung = ({ item }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ServiceItem item={service1} key={service1.id} />
    </div>
  );
};
const ServiceItem = ({ item }) => (
  <>
    <div className="d-flex">
      <div>
        <ScrollToTop />
      </div>
      <Container>
        <Row className="service-i">
          <Col lg="6" md="10" sm="10" className="mb-3" style={{}}>
            <div className="service__item" style={{ width: "100%" }}>
              <span
                className="mb-3 d-flex"
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
                <i
                  class={item.icon}
                  style={{
                    marginRight: "5px",
                    textAlign: "center",
                    fontSize: "2.5rem",
                  }}
                />
                <h1 style={{ textAlign: "center" }}>{item.title}</h1>
              </span>

              <p className="section__description">{item.desc}</p>
              <p className="section__description">{item.desc2}</p>
              {item.subLinks.map((sub, index) => (
                <div
                  key={index}
                  style={{ marginLeft: "40px" }}
                  className="sub-item"
                >
                  <h4>{sub.title}</h4>
                  <p>{sub.text}</p>
                  {sub.subTexts.map((t, index) => (
                    <div
                      key={index}
                      style={{ marginLeft: "40px" }}
                      className="subofsub-item"
                    >
                      <h5> {t.title}</h5>
                      <ul style={{ listStyleType: "circle" }}>
                        {t.paragraphs.map((p, index) => (
                          <li key={index}>{p}</li>
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
      {/* <Container>
        <Row>
          <img
            src={service12}
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </Row>
      </Container> */}
    </div>
  </>
);

export default Projektierung;
