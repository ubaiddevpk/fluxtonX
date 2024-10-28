import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerCard = ({ title, imgUrl }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // You can set a default duration for animations
  }, []);
  return (
    <div
      className="w-full h-[50vh] overflow-hidden relative rounded-b-[80px] bg-transparent"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      <img
        src={imgUrl}
        className="absolute bottom-0 left-0 w-full h-full object-cover"
        data-aos="zoom-out"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-transparent flex flex-col justify-center items-center gap-y-4 z-10">
        <div
          className="z-10 text-white font-alegreya font-bold text-7xl"
          data-aos="fade-down"
          style={{ textShadow: "4px 3px 2px rgba(0, 0, 0, 1)" }}
        >
          {title}
        </div>
        <div
          className="text-white font-alegreya font-semibold text-2xl flex gap-x-2"
          style={{ textShadow: "3px 2px 2px rgba(0, 0, 0, 1)" }}
        >
          <span data-aos="fade-right">Home</span>
          <span data-aos="zoom-in">/</span>
          <span className="text-sec" data-aos="fade-left">
            {title}
          </span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#4D8CEC] to-transparent flex flex-col justify-center items-center gap-y-4"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-sec2 to-transparent flex flex-col justify-center items-center gap-y-4"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex flex-col justify-center items-center gap-y-4"></div>
    </div>
  );
};

export default BannerCard;
