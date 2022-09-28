import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/all-images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/header.css";
// import { useState } from "react";
import english from "../../assets/all-images/united-kingdom.png";
import deutsch from "../../assets/all-images/germany.png";

// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   // {
//   //   path: "/about",
//   //   display: "Company",
//   // },
//   // {
//   //   path: "/cars",
//   //   display: "Team",
//   // },

//   {
//     path: "/blogs",
//     display: "Career",
//   },
//   {
//     path: "/contact",
//     display: "Contact",
//   },

//   // {
//   //   path: "/client",
//   //   display: "Company",
//   // },
// ];

const Header = () => {
  const menuRef = useRef(null);
  // const [isHovering, setIsHovering] = useState(false);
  // const [isHovering2, setIsHovering2] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const navigate = useNavigate();

  const goToClient = () => {
    navigate("/client");
    toggleMenu();
  };
  const goToManagment = () => {
    navigate("/management");
    toggleMenu();
  };
  const goToProjektierung = () => {
    navigate("/services/project");
    toggleMenu();
  };
  const goToBeratung = () => {
    navigate("/services/beratung");
    toggleMenu();
  };
  const goToSchulungen = () => {
    navigate("/services/schulungen");
    toggleMenu();
  };
  const goToTeam = () => {
    navigate("/team");
    toggleMenu();
  };
  const location = useLocation();

  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top"> */}
      {/* <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +49 (0)89 35477460
                </span>
              </div>
            </Col> */}

      {/* <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col> */}
      {/* </Row>
        </Container> */}
      {/* </div> */}

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i class="ri-car-line"></i> */}
                    {/* <span>
                      <br />
                      Context
                    </span> */}
                    <Col>
                      <Row>
                        <img
                          src={logo}
                          alt=""
                          style={{ height: "100px", width: "200px" }}
                        />
                      </Row>
                    </Col>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  {/* <h4>Bangladesh</h4> */}
                  <h6>Lorem Ipsum</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            {/* <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col> */}
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef}>
              <div className="menu">
                {/* {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                {navLinks[0].display} */}
                <NavLink
                  to="/home"
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <Dropdown className="hover-dropdown">
                  <Dropdown.Toggle
                    variant="secondary"
                    // dropdown-basic
                    id="Euroni"
                    // style={{ color: "#6b6600" }}

                    // className={(navClass) =>
                    //   navClass.isActive ? "nav__active nav__item" : "nav__item"
                    // }
                  >
                    Leistungen
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={goToProjektierung}
                      active={
                        location.pathname.includes("project") ? true : false
                      }
                    >
                      Projektierung & Umsetzung
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={goToBeratung}
                      active={
                        location.pathname.includes("beratung") ? true : false
                      }
                    >
                      Beratung
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={goToSchulungen}
                      active={
                        location.pathname.includes("schulungen") ? true : false
                      }
                    >
                      Schulungen
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="hover-dropdown">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="Euroni"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                  >
                    Company
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={goToClient}
                      active={
                        location.pathname.includes("client") ? true : false
                      }
                    >
                      Client
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={goToManagment}
                      active={
                        location.pathname.includes("management") ? true : false
                      }
                    >
                      Management
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={goToTeam}
                      active={location.pathname.includes("team") ? true : false}
                    >
                      Team
                    </Dropdown.Item>
                    {/* <Dropdown.Item onClick={goToLocations}>
                      Locations
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToActivities}>
                      Company Activities
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/career"
                  onClick={toggleMenu}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                >
                  Career
                </NavLink>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="nav__right fshihe">
                <div className="search__box">
                  <input type="text" placeholder="Search" />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
              <div style={{ marginLeft: "15px" }}>
                <img
                  src={english}
                  style={{ height: "20px", marginRight: "10px" }}
                  alt=""
                />
                <img src={deutsch} style={{ height: "20px" }} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
