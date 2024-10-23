import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = () => {
  const [IsHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[300px] h-[400px] flex flex-col justify-end items-center rounded-[20px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/robot.jpg"
        className="h-full w-[300px] absolute left-0 top-0 object-cover -z-10"
        alt=""
      />
      <div className="h-full w-[300px] absolute left-0 top-0 object-cover z-10 bg-black opacity-30"></div>

      {/* Overlay on hover with animation */}
      <div
        className={`h-full w-[300px] absolute left-0 ${
          IsHovered ? "top-0" : "-top-full"
        } z-10 bg-main opacity-90 transition-all duration-1000 ease-in-out`}
      ></div>
      {/* Overlay on hover with animation */}
      <div
        className={`h-[40px] w-[40px] rounded-full border-2 border-white absolute right-5 ${
          IsHovered ? "top-5" : "-top-full"
        } z-[11] transition-all duration-1000 ease-in-out text-white flex items-center justify-center hover:text-sec hover:border-sec text-xl cursor-pointer`}
      >
        <FaLongArrowAltRight />
      </div>

      {/* Text content */}
      <div
        className={`flex flex-col z-10 items-center py-5 transition-all duration-500 ease-in-out ${
          IsHovered ? "text-white" : "text-sec"
        }`}
      >
        <div
          className="text-3xl font-alegreya"
          style={{
            textShadow: "0px 0px 10px #000",
          }}
        >
          Smart Vision
        </div>
        <div
          className="font-alegreya"
          style={{
            textShadow: "0px 0px 10px #000",
          }}
        >
          Design / Ideas
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
