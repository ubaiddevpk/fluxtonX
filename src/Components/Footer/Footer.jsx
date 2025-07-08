import React, { useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaRegMessage, FaPhoneVolume } from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialBtns from "../Cards/SocialBtns";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-main via-main-dark to-main text-white py-16 w-full font-spartan overflow-hidden">
      {/* Animated blurred blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-gradient-to-tr from-pink-400 via-yellow-200 to-blue-400 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-y-10">
          {/* Logo and Description */}
          <motion.div
            className="flex flex-col items-start max-w-sm"
            data-aos="fade-right"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <a href="/" className="flex items-center gap-x-2 mb-3">
              <motion.img
                src="./logo.png"
                alt="Logo"
                className="h-14 drop-shadow-xl rounded-xl border-2 border-white/30 bg-white/10 p-1"
                initial={{ scale: 0.9, opacity: 0.7 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              />
              <div className="font-alegreya text-3xl font-semibold tracking-wide">
                FLU<span className="text-sec">X</span>TONX
              </div>
            </a>
            <motion.p
              className="mt-2 font-alegreya text-left text-[1rem] leading-relaxed text-white/90 drop-shadow"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
            >
              At Fluxtonx, we provide cutting-edge geospatial services, driven by a commitment to excellence and delivering meaningful, impactful results.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-60"
            data-aos="zoom-in"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-alegreya">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "Our Service", link: "/services" },
                { name: "About Us", link: "/aboutUs" },
                { name: "Portfolio", link: "/portfolio" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.08, x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={item.link}
                    className="hover:text-sec transition-colors duration-300 font-alegreya text-lg"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Reach Us */}
          <motion.div
            className="w-72"
            data-aos="fade-left"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <h3 className="text-2xl font-bold mb-4 font-alegreya">Reach Us</h3>
            <ul className="space-y-4">
              <motion.li className="flex items-center gap-3" whileHover={{ scale: 1.05, x: 6 }}>
                <FaPhoneVolume size={22} className="text-sec" />
                <a
                  href="https://wa.me/+923451184105"
                  className="hover:text-sec transition-colors duration-300 font-alegreya text-base"
                >
                  +92 345 1184105
                </a>
              </motion.li>
              <motion.li className="flex items-center gap-3" whileHover={{ scale: 1.05, x: 6 }}>
                <FaRegMessage size={22} className="text-sec" />
                <a
                  href="mailto:info@fluxtonx.com"
                  className="hover:text-sec transition-colors duration-300 font-alegreya text-base"
                >
                  info@fluxtonx.com
                </a>
              </motion.li>
              <motion.li className="flex items-start gap-3" whileHover={{ scale: 1.05, x: 6 }}>
                <FaLocationDot size={22} className="text-sec mt-1" />
                <a
                  href="https://maps.app.goo.gl/PxFgwKY9x4j5tRAR8"
                  className="hover:text-sec transition-colors duration-300 font-alegreya text-base max-w-xs leading-snug"
                >
                  FluxtonX, 1st Floor, KP IT Park, Board Bazar, Peshawar.
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <p className="font-alegreya text-sm">
            © {new Date().getFullYear()} FluxtonX Solutions. All Rights Reserved.
          </p>
          <SocialBtns />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
