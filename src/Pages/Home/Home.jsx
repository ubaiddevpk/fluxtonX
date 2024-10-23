import React from "react";
import HomeHeader from "../../Components/Headers/HomeHeader";
import ServiceBanner from "../../Components/Banners/ServiceBanner";
import ServicesCard from "../../Components/Cards/ServicesCard";
import TestimonalCard from "../../Components/Cards/TestimonalCard";
import RecentProjects from "../../Components/Cards/RecentProjects";
import AboutCompanyCard from "../../Components/Cards/AboutCompanyCard";
import { TbActivityHeartbeat } from "react-icons/tb";
import AboutTabs from "../../Components/Tabs/AboutTabs";
import HeaderTitle from "../../Components/Headers/HeaderTitle";
import AboutCompany from "../AboutUs/AboutCompany";

const Home = () => {
  return (
    <div className="relative">
      <HomeHeader />
      <ServiceBanner />
      <AboutCompany />
      <ServicesCard />
      <RecentProjects />
      <TestimonalCard />
    </div>
  );
};

export default Home;
