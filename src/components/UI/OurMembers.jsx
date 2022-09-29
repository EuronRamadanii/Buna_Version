import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
// import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {OUR__MEMBERS.map((item, index) => (
          <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
            <div className="single__member">
              <div className="single__member-img">
                <img src={item.imgUrl} alt="" className="w-100" />

                <div className="single__member-social">
                  <Link to={item.fbUrl}>
                    <i class="ri-facebook-line"></i>
                  </Link>
                  <Link to={item.twitUrl}>
                    <i class="ri-twitter-line"></i>
                  </Link>

                  <Link to={item.linkedinUrl}>
                    <i class="ri-linkedin-line"></i>
                  </Link>

                  <Link to={item.instUrl}>
                    <i class="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>

              <h6 className="text-center mb-0 mt-3">{item.name}</h6>
              <p className="section__description text-center">
                {item.experience}
              </p>
            </div>
          </Col>
        ))}
      </Slider>
    </>
  );
};

export default OurMembers;
