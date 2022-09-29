import React from "react";
// import { Button, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Button } from "react-bootstrap";
import { Row } from "reactstrap";
import Aos from "aos";

function JobPosition() {
  Aos.init({
    once: false,
  });
  return (
    <>
      <section style={{}}>
        <Container className="p-4" data-aos="zoom-in" data-aos-duration="1700">
          <Row>
            <Col md="4" style={{ marginBottom: "20px" }}>
              {/* <Card> */}
              {/* <Card.Img variant="top" src={img1} /> */}
              <Card.Body>
                <Card.Title>
                  Open Position <br /> <b>JOBS</b>{" "}
                </Card.Title>
                <Card.Text style={{ marginTop: "20px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie
                </Card.Text>
                {/* <Button style={{ float: "right" }} variant="primary">
                  More Details
                </Button> */}
              </Card.Body>
              {/* </Card> */}
            </Col>
            {/* </Container>
          <Container className="p-4"> */}
            <Col md="4" style={{ marginBottom: "20px" }}>
              <Card>
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b> Ingenieure Elektrotechnik </b>
                  </Card.Title>
                  <Card.Text style={{ padding: "20px 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae molestie magna. Vivamus sed molestie
                  </Card.Text>
                  <Button
                    style={{ float: "right", backgroundColor: "#fe7e4b" }}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* </Container>
        <div className="App">
          <Container className="p-4"> */}
            <Col md="4">
              <Card>
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>Functional Safety Engineer</b>{" "}
                  </Card.Title>
                  <Card.Text style={{ padding: "20px 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae molestie magna. Vivamus sed molestie
                  </Card.Text>
                  <Button
                    style={{ float: "right", backgroundColor: "#fe7e4b" }}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* </Container> */}
            {/* </div> */}
            {/* <div className="App"> */}
            {/* <Container className="p-4"> */}
            <Col md="4">
              <Card>
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>Functional Safety Manager</b>{" "}
                  </Card.Title>
                  <Card.Text style={{ padding: "20px 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae molestie magna. Vivamus sed molestie
                  </Card.Text>
                  <Button
                    style={{ float: "right", backgroundColor: "#fe7e4b" }}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>System Engineers </b>{" "}
                  </Card.Title>
                  <Card.Text style={{ padding: "20px 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae molestie magna. Vivamus sed molestie e
                  </Card.Text>
                  <Button
                    style={{ float: "right", backgroundColor: "#fe7e4b" }}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>Systemingenieure</b>{" "}
                  </Card.Title>
                  <Card.Text style={{ padding: "20px 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae molestie magna. Vivamus sed molestie e
                  </Card.Text>
                  <Button
                    style={{ float: "right", backgroundColor: "#fe7e4b" }}
                    variant="primary"
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* </div> */}
      </section>
    </>
  );
}

export default JobPosition;
