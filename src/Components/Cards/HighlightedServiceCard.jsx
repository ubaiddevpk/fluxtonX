import React, { useEffect, useState } from "react";
import "./HighlightedServiceCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HighlightedServiceCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.icon; // ✅ destructure icon component

  return (
    <div
      className="e-card playing font-montserrat justify-center items-center z-20 relative overflow-hidden cursor-pointer"
      data-aos={
        data.align === "l"
          ? "fade-left"
          : data.align === "r"
          ? "fade-right"
          : data.align === "u" && "fade-up"
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="./11.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      />
      {/* Overlay that expands from the center */}
      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 transition-transform duration-700 ease-in-out rounded-[10px] ${
          isHovered ? "expand-overlay" : "shrink-overlay"
        }`}
      ></div>

      <div className="infotop flex flex-col justify-center items-center z-30 opacity-1">
        <div
          className={`text-4xl transition-all duration-500 ${
            isHovered ? "text-main bg-sec" : " text-sec bg-main"
          } h-[80px] w-[80px] p-3 rounded-full flex justify-center items-center z-30`}
        >
          {Icon ? (
            <Icon className={`text-4xl ${isHovered && "text-main"}`} />
          ) : (
            <span>No Icon</span>
          )}
        </div>

        <div
          className={`mt-4 text-[1rem] font-semibold transition-all duration-500 ${
            isHovered ? "text-sec" : "text-[#0550ba]"
          }`}
          style={{
            textShadow: "0px 0px 40px #FBCC14",
          }}
        >
          {data.title}
        </div>

        <div
          className={`mt-2 text-[.9rem] text-center font-[400] transition-all duration-500 ${
            isHovered ? "text-white opacity-100" : "text-gray-600 opacity-70"
          }`}
        >
          {data.desc}
        </div>
      </div>
    </div>
  );
};

export default HighlightedServiceCard;
