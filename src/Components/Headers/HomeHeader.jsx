import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import GetStartedBtn from "../Buttons/GetStartedBtn";
import ServiceCard from "../Cards/ServiceCard";
import HeaderTitle from "./HeaderTitle";
import "./HomeHeader.css";

const HomeHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS for animations
  }, []);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Set direction to forward
      setCurrentVideo((prevVideo) => (prevVideo === 2 ? 0 : prevVideo + 1));
    }, 6000);
    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  // Animation variants based on direction
  const variants = {
    enter: (direction) => ({
      x: direction === 1 ? 100 : -100, // Enter from the right or left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === 1 ? -100 : 100, // Exit to the left or right
      opacity: 0,
    }),
  };

  // Service added
  return (
    <div className="h-[80vh] relative bg-black main-cont">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={currentVideo}
          src={`/img${currentVideo + 1}.jpg`}
          preload="auto" // Preloads the video
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute top-0 left-[10rem] max-max1190:left-[10rem] max-max400:left-[3rem] max-max900:left-[5rem] w-full h-full flex flex-col justify-center items-start">
        <div className="z-10 flex flex-col gap-y-2">
          <HeaderTitle title={"Solutions for Businesses"} />
          <div
            className="text-6xl text-white z-10 font-alegreya font-bold max-w-[600px] flex flex-col gap-y-4 py-3 max-max720:text-4xl max-max720:max-w-[400px] max-max520:max-w-[300px] max-max300:w-fit pr-4 header-text"
            style={{
              textShadow: "0px 0px 40px #000",
            }}
            data-aos="fade-up"
          >
            Elevate Your Business to New Heights with <br />{" "}
            <span className="text-white">
              FLU<span className="text-sec">X</span>TONX
            </span>
          </div>
          <div className="">
            <GetStartedBtn />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sec2 to-transparent flex flex-col justify-center items-center gap-y-4"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#4D8CEC] to-transparent flex flex-col justify-center items-center gap-y-4"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex flex-col justify-center items-center gap-y-4"></div>
    </div>
  );
};

export default HomeHeader;
