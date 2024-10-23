import React, { useEffect } from "react";
import ServiceCardNew from "./ServiceCardNew";
import ServicesData from "../../utils/ServicesData";
import HeaderTitle from "../Headers/HeaderTitle";
import { motion } from "framer-motion"; // Import motion from framer-motion
import AOS from "aos";
import "aos/dist/aos.css";
import MainBtn from "../Buttons/MainBtn";

const ServicesCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);
  return (
    <div className="w-screen">
      <div className="flex flex-col w-full items-center py-20 gap-y-3 relative overflow-hidden">
        {/* Animated element using framer-motion */}
        <motion.div
          id="play-btn"
          className="!w-[250px] !h-[250px] bg-sec opacity-10 absolute -right-[160px] top-4 rounded-[50px] flex justify-center items-center z-20"
          initial={{ rotate: 45 }} // Set initial rotation
          animate={{ x: [-5, 90, -5], rotate: 45 }} // Horizontal animation
          transition={{
            duration: 5, // Duration of the animation
            repeat: Infinity, // Infinite repeat
            repeatType: "loop", // Loop animation
            ease: "easeInOut", // Smoother transition
          }}
        ></motion.div>
        <motion.div
          id="play-btn"
          className="!w-[250px] !h-[250px] bg-sec opacity-10 absolute -right-[160px] top-4 rounded-[50px] flex justify-center items-center z-20"
          initial={{ rotate: 45 }} // Set initial rotation
          animate={{ x: [-100, 90, -100], rotate: 45 }} // Horizontal animation
          transition={{
            duration: 5, // Duration of the animation
            repeat: Infinity, // Infinite repeat
            repeatType: "loop", // Loop animation
            ease: "easeInOut", // Smoother transition
          }}
        ></motion.div>
        <motion.img
          data-aos="fade-down"
          src="./line.png"
          className="!w-[300px] !h-[300px] absolute left-0  top-10 max-max520:!w-[150px] max-max520:!h-[150px] max-max520:!bottom-0 max-max520:top-[180px] rounded-[50px] flex justify-center items-center -z-10"
          animate={{ y: [-15, 30, -15] }} // Horizontal animation
          transition={{
            duration: 5, // Duration of the animation
            repeat: Infinity, // Infinite repeat
            repeatType: "loop", // Loop animation
            ease: "easeInOut", // Smoother transition
          }}
        />

        <div className="!w-full !h-full bg-black opacity-5 absolute left-0 top-0 flex justify-center items-center -z-1"></div>

        <HeaderTitle
          title={"FLUXTONX COMPANY"}
          fontColor={"text-sec"}
          bgColor={"bg-sec"}
        />
        <div className="font-alegreya text-3xl font-bold">
          <div className="">How Professional IT Services</div>
          <div className="">
            Can Drive <span className="text-main"> Success.</span>
          </div>
        </div>
      </div>

      <div
        className="flex w-full min-h-full gap-x-5 gap-y-5 items-center justify-center px-20 flex-wrap pb-5 line-clamp-1"
        style={{ backgroundColor: "rgba(0,0,0,.05)" }}
      >
        {ServicesData.slice(0, 4).map((sd) => (
          <ServiceCardNew key={sd.id} data={sd} />
        ))}
      </div>
      <div
        className="py-8 shadow-lg flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,.05)" }}
      >
        <MainBtn title={"See More"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default ServicesCard;
