import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const ProjectCard = ({ data, custom }) => {
  const [IsHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: custom * 0.1 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-[300px] h-[400px] flex flex-col justify-end items-center rounded-[20px] overflow-hidden text-center  cursor-pointer transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={data.img}
        loading="lazy"
        className="h-full w-[300px] absolute left-0 top-0 object-cover -z-10"
        alt={data.title}
      />
      <div className="h-full w-[300px] absolute left-0 top-0 object-cover z-10 bg-black opacity-30"></div>

      {/* Overlay on hover */}
      <div
        className={`h-full w-[300px] absolute left-0 ${
          IsHovered ? "top-0" : "-top-full"
        } z-10 bg-main opacity-40 transition-all duration-1000 ease-in-out`}
      ></div>

      {/* Arrow button */}
      <a
        href={data.github || data.live}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-2 rounded-full hover:bg-sec"
      >
        <div
          className={`h-[40px] w-[40px] rounded-full border-2 border-white absolute right-5 ${
            IsHovered ? "top-5" : "-top-full"
          } z-[11] transition-all duration-1000 ease-in-out text-white flex items-center justify-center hover:text-sec hover:border-sec text-xl cursor-pointer`}
        >
          <FaLongArrowAltRight />
        </div>
      </a>
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
          {data.title}
        </div>
        <div
          className="font-alegreya"
          style={{
            textShadow: "0px 0px 10px #000",
          }}
        >
          {data.category}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
  custom: PropTypes.number,
};

export default ProjectCard;
