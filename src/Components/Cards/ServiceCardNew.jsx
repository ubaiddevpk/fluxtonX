import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; // ✅ import all icons
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCardNew = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [ReadMoreIsHovered, setReadMoreIsHovered] = useState(false);

  const IconComponent = FaIcons[data.icon] || FaIcons.FaCogs; // ✅ convert icon string

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col max-w-[300px] min-w-[250px] overflow-hidden px-4 py-4 items-center bg-white rounded-xl transition-transform duration-300"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        height: "400px", // ✅ fixed card height
      }}
      data-aos="zoom-in"
    >
      {/* Image container with fixed height */}
      <div className="relative w-[99%] rounded-xl h-[180px] overflow-hidden bg-gray-100">
        <img
          src={data.img}
          alt={data.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl"
          style={{ height: "100%", width: "100%" }} // ✅ force fill
        />
        <div className="absolute -bottom-4 left-5 p-4 text-3xl z-10 bg-sec rounded-[5px] text-white">
          <IconComponent /> {/* ✅ dynamic icon */}
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-col gap-y-1 mt-6 px-4 w-full">
        <div className="text-[1.3rem] font-alegreya font-bold text-main text-center">
          {data.title}
        </div>
        <div
          className="text-[.9rem] font-alegreya font-[300] text-[gray] overflow-hidden line-clamp-3 text-center"
          style={{ minHeight: "60px", maxHeight: "60px" }} // ✅ fixed desc height
        >
          {data.desc}
        </div>
      </div>

      {/* Read more button */}
      <Link
        to={`/services/${data.slug}`}
        className="text-gray-700 hover:text-sec text-[.8rem] mt-auto flex items-center justify-center gap-x-2 bg-[rgba(0,0,0,.05)] cursor-pointer rounded-[50px] mb-2 py-3 w-[60%] mx-auto font-bold shadow-sm hover:shadow-md transition"
        onMouseEnter={() => setReadMoreIsHovered(true)}
        onMouseLeave={() => setReadMoreIsHovered(false)}
      >
        Read more
        <FaLongArrowAltRight
          className={`text-[1rem] mt-[2px] ml-2 text-main transition-all duration-300 ${
            ReadMoreIsHovered ? "-ml-[50px] -z-10 opacity-0" : ""
          }`}
        />
      </Link>
    </motion.div>
  );
};

export default ServiceCardNew;
