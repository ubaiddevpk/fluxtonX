import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamCard = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div
      className="text-black max-max900:w-[300px] max-max770:w-full max-w-[350px] w-[350px] h-[400px] relative mb-20 rounded-2xl"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      {/* Background image with hover scale effect */}
      <div className="overflow-hidden absolute inset-0 max-max900:w-[300px] max-max770:w-full max-w-[350px] w-[350px] h-[400px]">
        <motion.img
          src="/developer.jpg"
          className=" w-full h-full object-cover rounded-2xl"
          alt="Developer"
          initial={{ scale: 1 }} // Default scale
          animate={{ scale: isHovered ? 1.1 : 1 }} // Scale on hover
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        />
      </div>
      {/* Detail */}
      <div className="w-full absolute -bottom-5 left-0 h-fit flex justify-center">
        <motion.div
          className="text-center text-black bg-sec px-6 py-5 rounded-xl w-[80%]"
          initial={{ opacity: 0, translateY: -20 }} // Initial animation state
          animate={{
            opacity: 1,
            translateY: 12,
          }} // Animate based on hover state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition effect
        >
          <div className="text-2xl font-semibold font-alegreya">
            Zain Ul Basit
          </div>
          <div className="text-[1rem] font-[300] whitespace-nowrap">
            MERN Stack Engineer
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamCard;
