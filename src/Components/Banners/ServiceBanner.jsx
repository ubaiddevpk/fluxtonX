import React from "react";
import {
  FaChartBar,
  FaPaintBrush,
  FaUsers,
  FaGlobe,
  FaComments,
} from "react-icons/fa"; // Import additional icons
import HighlightedServiceCard from "../Cards/HighlightedServiceCard";

const NewServiceData = [
  {
    title: "Data Analytics",
    align: "l",
    icon: FaChartBar, // Adding icon directly to the object
    desc: "Unlock valuable insights from your data for better decision-making.",
  },
  {
    title: "UI/UX Design Services",
    align: "l",
    icon: FaPaintBrush,
    desc: "Create visually appealing and user-friendly designs for digital platforms.",
  },
  {
    title: "Dedicated Teams",
    align: "u",
    icon: FaUsers,
    desc: "Get access to skilled professionals committed to your project’s success.",
  },
  {
    title: "Web Development",
    align: "r",
    icon: FaGlobe,
    desc: "Build responsive, high-performance websites tailored to your needs.",
  },
  {
    title: "Business Consultation",
    align: "r",
    icon: FaComments,
    desc: "Expert advice to help you grow and scale your business efficiently.",
  },
];

const ServiceBanner = () => {
  return (
    <div className="flex justify-center items-stretch gap-x-6 gap-y-6 flex-wrap px-8 py-4 relative w-screen overflow-hidden -top-[90px] max-max300:-top-[30px]">
      {NewServiceData.map((dt) => {
        return <HighlightedServiceCard data={dt} />;
      })}
    </div>
  );
};

export default ServiceBanner;
