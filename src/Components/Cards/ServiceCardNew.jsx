import React, { useEffect, useState } from "react";
import { FaCogs, FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCardNew = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);
  const [ReadMoreIsHovered, setReadMoreIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col max-w-[300px] min-w-[250px] overflow-hidden px-4 py-4 items-center bg-white"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      data-aos="zoom-in"
    >
      <div className="relative w-[99%]">
        <img src="/service-1.jpg" alt="" className="w-[100%]" />
        <div className="absolute -bottom-4 left-5 p-4 text-3xl z-10 bg-sec rounded-[5px] text-white">
          <data.icon />
        </div>
      </div>
      <div className="min-h-[10vh] max-w-[300px] px-4 mt-6 flex flex-col gap-y-1 ">
        <div className="text-[1.3rem] font-alegreya font-bold text-main">
          {data.title}
        </div>
        <div className="text-[.9rem] font-alegreya font-[300] line-clamp-3 text-[gray]">
          {data.desc}
        </div>
        <div
          className="text-gray-700 hover:text-sec text-[.8rem] mt-2 flex items-center gap-y-4 bg-white cursor-pointer mb-2"
          onMouseEnter={() => {
            setReadMoreIsHovered(true);
          }}
          onMouseLeave={() => {
            setReadMoreIsHovered(false);
          }}
        >
          Read more{" "}
          <FaLongArrowAltRight
            className={`text-[1rem] mt-[2px] ml-2 text-main ${
              ReadMoreIsHovered && "-ml-[50px] -z-10"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardNew;
