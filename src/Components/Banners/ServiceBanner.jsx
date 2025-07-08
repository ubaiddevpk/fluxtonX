import React from "react";
import { motion } from "framer-motion"; // ✅ Import framer motion
import {
  FaChartBar,
  FaPaintBrush,
  FaUsers,
  FaGlobe,
  FaComments,
} from "react-icons/fa";
import HighlightedServiceCard from "../Cards/HighlightedServiceCard";

const NewServiceData = [
  {
    title: "Data Analytics",
    align: "l",
    icon: FaChartBar,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animate cards one by one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, translateY: 30 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServiceBanner = () => {
  return (
    <motion.div
      className="flex justify-center items-stretch gap-x-6 gap-y-6 flex-wrap px-8 py-4 relative w-screen overflow-hidden -top-[90px] max-max300:-top-[30px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // On-scroll trigger
    >
      {NewServiceData.map((dt, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          <HighlightedServiceCard data={dt} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceBanner;
