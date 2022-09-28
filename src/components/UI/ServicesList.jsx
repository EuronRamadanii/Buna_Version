import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import { NavLink } from "react-router-dom";

const ServicesList = () => {
  // const navigate = useNavigate();

  // const goToClient = () => {
  //   navigate("/client");
  // };
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <NavLink to={item.path} style={{ textDecoration: "none" }}>
      <div className="service__item">
        <span className="mb-3 d-inline-block">
          <i class={item.icon} />
        </span>

        <h6>{item.title}</h6>
        <p className="section__description">{item.desc}</p>
      </div>
    </NavLink>
  </Col>
);

export default ServicesList;
