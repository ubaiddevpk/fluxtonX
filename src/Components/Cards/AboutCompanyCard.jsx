import React, { useEffect } from "react";
import { PiDotsSixBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";
import "./AboutCompanyCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCompanyCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // You can set a default duration for animations
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 min-h-[400px]"
      data-aos="fade-right"
    >
      {/* Blurred gradient blobs for modern effect */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200 opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-pink-200 via-yellow-100 to-blue-200 opacity-30 rounded-full blur-3xl z-0" />

      {/* Company Image */}
      <div className="relative z-10 flex-shrink-0 flex flex-col items-center justify-center">
        <motion.img
          src="/about1.png"
          alt="About FluxtonX"
          className="about-img rounded-2xl shadow-xl object-cover w-56 h-56 md:w-72 md:h-72 border-4 border-white"
          initial={{ scale: 0.95, opacity: 0.7 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <motion.div
          className="absolute -top-6 right-0 bg-white/80 px-6 py-2 rounded-full shadow-lg text-2xl md:text-3xl text-main font-montserrat font-bold expes border border-main"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          10+ Years Experience
        </motion.div>
      </div>

      {/* Company Info Card */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start gap-6 max-w-xl">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-main font-montserrat mb-2 drop-shadow-lg"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          About <span className="text-blue-500">FluxtonX</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 font-medium mb-2"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          We are a passionate team of innovators, designers, and engineers
          dedicated to delivering cutting-edge digital solutions. With over a
          decade of experience, FluxtonX empowers businesses to thrive in the
          digital era through creativity, technology, and a client-first
          approach.
        </motion.p>
        <motion.ul
          className="flex flex-wrap gap-4 mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li
            className="bg-white/80 border border-main rounded-xl px-4 py-2 flex items-center gap-2 text-main font-semibold shadow-md hover:bg-main hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            <TbTargetArrow className="text-xl" />
            Our Mission
          </motion.li>
          <motion.li
            className="bg-white/80 border border-blue-400 rounded-xl px-4 py-2 flex items-center gap-2 text-blue-500 font-semibold shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            <PiDotsSixBold className="text-xl" />
            Innovation
          </motion.li>
          <motion.li
            className="bg-white/80 border border-pink-400 rounded-xl px-4 py-2 flex items-center gap-2 text-pink-500 font-semibold shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xl">💡</span>
            Creativity
          </motion.li>
        </motion.ul>
      </div>

      {/* Animated floating icons */}
      <motion.div
        className="hidden md:flex absolute -left-5 bottom-[2rem] iconss z-20"
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PiDotsSixBold className="text-[7rem] pt-10 text-main dotss opacity-60" />
        <TbTargetArrow className="text-[3.5rem] text-main arroww opacity-60" />
      </motion.div>
    </div>
  );
};

export default AboutCompanyCard;
