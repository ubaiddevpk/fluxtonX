import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { PiQuotesBold } from "react-icons/pi";
import { motion } from "framer-motion";

const TestimonalC = ({ data }) => {
TestimonalC.propTypes = {
  data: PropTypes.shape({
    review: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
  return (
    <motion.div
      className="min-h-[250px] max-w-[350px] mx-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <motion.div
        className="shadow-2xl border-[1.5px] border-main/30 rounded-[50px] text-center flex flex-col items-center relative gap-y-5 p-7 bg-gradient-to-br from-[#23263a] via-[#171a2b] to-[#23263a] overflow-hidden group"
        style={{ minHeight: "350px" }}
        whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        {/* Animated blurred blob */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-2xl z-0"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-pink-400 via-yellow-200 to-blue-400 opacity-20 rounded-full blur-2xl z-0"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 rounded-[49px] h-full w-full bg-[#171a2b] opacity-90 -z-10"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="z-10"
          initial={{ scale: 0.8, rotate: -10, opacity: 0.7 }}
          whileHover={{ scale: 1.1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <PiQuotesBold className="text-sec text-4xl" />
        </motion.div>
        <motion.div
          className="line-clamp-4 text-white z-10 font-alegreya"
          style={{ minHeight: "80px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        >
          {data.review}
        </motion.div>
        <motion.div
          className="w-full h-[3px] bg-sec opacity-70 rounded-full"
          layoutId="divider"
        />
        <motion.div className="flex items-center justify-center gap-x-2 text-sec z-10">
          {Array.from({ length: data.rating }).map((_, i) => (
            <motion.span key={i} whileHover={{ scale: 1.2 }}>
              <FaStar />
            </motion.span>
          ))}
        </motion.div>
        <div className="flex flex-col justify-center w-full px-2 gap-x-5 font-alegreya items-center z-10">
          <motion.div className="text-[1.3rem]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}> {data.name} </motion.div>
          <motion.div className="text-[1rem] text-sec" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}> {data.role} </motion.div>
        </div>
      </motion.div>
      <div className="w-full flex items-center justify-center py-6 relative">
        <motion.img
          src={data.image}
          className="rounded-full h-[60px] w-[60px] object-cover z-10 border-4 border-white shadow-lg"
          alt={data.name}
          initial={{ scale: 0.8, opacity: 0.7 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        />
        <div
          className="bg-gradient-to-r from-sec to-main absolute h-[3px] top-1/2 translate-y-1/2 left-0 rounded-full"
          style={{ width: "calc(50% - 31px)" }}
        ></div>
        <div
          className="bg-gradient-to-r from-main to-sec absolute h-[3px] top-1/2 translate-y-1/2 right-0 rounded-full"
          style={{ width: "calc(50% - 31px)" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default TestimonalC;
