import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamCard = ({ data }) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <motion.div
      className="text-black max-max900:w-[300px] max-max770:w-full max-w-[350px] w-[350px] h-[400px] relative mb-20 rounded-2xl"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      initial={{ opacity: 0, y: 50 }} // Initial state for on-scroll animation
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% visible
    >
      {/* Background image with hover scale effect */}
      <div className="overflow-hidden absolute inset-0 max-max900:w-[300px] max-max770:w-full max-w-[350px] w-[350px] h-[400px]">
        <motion.img
          src={data.img}
          className="w-full h-full object-cover rounded-2xl"
          alt={data.name}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      {/* Detail */}
      <div className="w-full absolute -bottom-5 left-0 h-fit flex justify-center">
        <motion.div
          className="text-center text-black bg-sec px-6 py-5 rounded-xl w-[80%]"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 12,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-2xl font-semibold font-alegreya">
            {data.name}
          </div>
          <div className="text-[1rem] font-[300] whitespace-nowrap">
            {data.role}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
