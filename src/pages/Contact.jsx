import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Context from "../assets/all-images/Context.png";

import "../styles/contact.css";
import { ScrollToTop } from "../components/UI/ScrollToTop";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <div>
        <ScrollToTop />
      </div>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="First Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Last Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="E-mail" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Company Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Position" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input type="file" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="How did you find out about us?"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <h5>Privacy Policy*</h5>
                <FormGroup className="contact__form" check>
                  <Input type="checkbox" />
                  <Label check>
                    I want to receive a copy of this message via e-mail.
                  </Label>
                </FormGroup>
                <FormGroup className="contact__form" check>
                  <Input type="checkbox" />
                  <Label check>
                    I have read the <span>Privacy Policy</span> note. I agree
                    that my data will be collected and stored electronically to
                    answer my request.
                  </Label>
                </FormGroup>
                <button
                  className=" contact__btn"
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Bremer Str. 11 80807 München Deutschland
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+88683896366</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
                <Container>
                  <Row style={{ width: "100%" }}>
                    <img src={Context} alt="" />
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
    </Helmet>
  );
};

export default Contact;
