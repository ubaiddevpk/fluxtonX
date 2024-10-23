import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderTitle = ({ title, bgColor, fontColor }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS for animations
  }, []);
  return (
    <div
      className="flex flex-col justify-center bg-[#0000005f] relative z-10 px-5 pr-5 py-1 w-fit rounded-[50px] border-2 border-black"
      data-aos="zoom-in"
    >
      <div
        className={`absolute -left-7 top-1/2 h-[4px] w-[40px] ${
          bgColor ? bgColor : "bg-sec"
        } rounded-[20px] -mt-[2px]`}
        data-aos="fade-right"
      ></div>
      <div
        className={`${
          fontColor ? fontColor : "text-sec"
        } z-10 font-montserrat font-semibold text-xl max-max300:text-[.8rem]`}
        // data-aos="fade-right"
        style={{
          textShadow: "0px 0px 40px #000",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default HeaderTitle;
