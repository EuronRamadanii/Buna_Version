import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
// import Industry from "../components/UI/IndustrySection";
import AboutSection from "../components/UI/AboutSection";
import Management from "../components/UI/Management";
import Locations from "../components/UI/Locations";
import CompanyActivities from "../components/UI/CompanyActivities";
import Projektierung from "../components/UI/Projektierung.jsx";
import Beratung from "../components/UI/Beratung.jsx";
import Schulungen from "../components/UI/Schulungen.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<CarListing />} />
      <Route path="/team/:slug" element={<CarDetails />} />
      <Route path="/career" element={<Blog />} />
      <Route path="/client" element={<AboutSection />} />
      <Route path="/management" element={<Management />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/career/:slug" element={<BlogDetails />} />
      <Route path="/activities" element={<CompanyActivities />} />
      <Route path="/services/project" element={<Projektierung />} />
      <Route path="/services/beratung" element={<Beratung />} />
      <Route path="/services/schulungen" element={<Schulungen />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
