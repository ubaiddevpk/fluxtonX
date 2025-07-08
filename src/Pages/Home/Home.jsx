import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomeHeader from "../../Components/Headers/HomeHeader";
import ServiceBanner from "../../Components/Banners/ServiceBanner";
import ServicesCard from "../../Components/Cards/ServicesCard";
import TestimonalCard from "../../Components/Cards/TestimonalCard";
import RecentProjects from "../../Components/Cards/RecentProjects";
import AboutCompany from "../AboutUs/AboutCompany";
import ContactUsCard from "../../Components/Cards/ContactUsCard";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative">
      {/* Follow Pointer Animation */}

      <HomeHeader />
      <ServiceBanner />
      <AboutCompany />
      <ServicesCard />
      <RecentProjects />
      <TestimonalCard />
      <ContactUsCard />
    </div>
  );
};

export default Home;
