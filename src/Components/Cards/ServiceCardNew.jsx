import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCardNew = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [ReadMoreIsHovered, setReadMoreIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col max-w-[300px] min-w-[250px] overflow-hidden px-4 py-4 items-center bg-white rounded-xl transition-transform duration-300"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        minHeight: "380px",
      }}
      data-aos="zoom-in"
    >
      <div className="relative w-[99%] rounded-xl h-[180px] overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute -bottom-4 left-5 p-4 text-3xl z-10 bg-sec rounded-[5px] text-white">
          <data.icon />
        </div>
      </div>

      <div className="min-h-[10vh] max-w-[300px] px-4 mt-6 flex flex-col gap-y-1">
        <div className="text-[1.3rem] font-alegreya font-bold text-main">
          {data.title}
        </div>
        <div className="text-[.9rem] font-alegreya font-[300] line-clamp-3 text-[gray]">
          {data.desc}
        </div>
        <Link
          to={`/services/${data.slug}`} // ✅ changed from title to slug
          className="text-gray-700 hover:text-sec text-[.8rem] mt-5 flex items-center justify-center gap-x-2 bg-[rgba(0,0,0,.05)] cursor-pointer rounded-[50px] mb-2 py-3 w-[60%] mx-auto font-bold shadow-sm hover:shadow-md transition"
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
      </div>
    </motion.div>
  );
};

export default ServiceCardNew;
