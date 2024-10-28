import React, { useEffect } from "react";
import { PiDotsSixBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";
import "./AboutCompanyCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCompanyCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // You can set a default duration for animations
  }, []);

  return (
    <div className="relative" data-aos="fade-right">
      <img src="/about1.png" alt="" className="about-img" />
      <div className="absolute top-5 right-20 text-3xl text-main font-montserrat font-bold expes">
        10+ Experience
      </div>
      <motion.div
        className="flex absolute -left-5 bottom-[2rem] iconss"
        animate={{ y: [0, 30, 0] }} // Move from 0 to 50px and back to 0
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }} // Controls the timing
      >
        <PiDotsSixBold className="text-[10rem] pt-10 text-main dotss" />
        <TbTargetArrow className="text-[5rem] text-main arroww" />
      </motion.div>
    </div>
  );
};

export default AboutCompanyCard;
