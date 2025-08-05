import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";

const ScheduleCallButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Sticky button */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow-xl flex items-center gap-2 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-aos="fade-up"
      >
        <FaPhoneAlt className="text-lg" />
        Schedule a Consultation call
      </motion.button>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-2xl rounded-lg overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              data-aos="zoom-in"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                title="Close"
              >
                <FaTimes size={20} />
              </button>

              {/* Cal.com iframe */}
              <iframe
                src="https://cal.com/muhammadnasirpk44"
                title="Schedule a Call"
                className="w-full h-[600px] border-none rounded-b-lg"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScheduleCallButton;
