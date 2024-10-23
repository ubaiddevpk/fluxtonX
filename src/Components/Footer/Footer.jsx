import React, { useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaRegMessage, FaPhoneVolume } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialBtns from "../Cards/SocialBtns";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    <footer className="bg-main text-white py-10 w-full font-spartan">
      <div className="mx-auto w-full px-8">
        <div className="flex w-full justify-between items-start max965:flex-col max965:items-center gap-y-6">
          <div
            className="flex flex-col items-center max-w-[300px]"
            data-aos="fade-right"
          >
            <a
              href="/"
              className="flex items-center justify-center sm:justify-normal p-3 rounded-full"
            >
              <img src={"./logo.png"} alt="Logo" className="h-10" />
              <div
                className={`flex font-alegreya text-2xl font-semibold mt-2 ${
                  false ? "text-white" : "text-white"
                }`}
              >
                FLU<span className="text-sec">X</span>TONX
              </div>
            </a>
            <p className="mt-2 font-alegreya text-center">
              At Fluxtonx, we provide cutting-edge geospatial services, driven
              by a commitment to excellence and delivering meaningful, impactful
              results.
            </p>
          </div>
          <div
            className="sm:w-4/12 max-w-[400px] max550:w-[300px]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold text-left sm:text-left font-alegreya">
              Quick Links
            </h3>
            <ul className="space-y-2 mx-auto w-[100%] sm:w-full flex flex-col gap-y-2 py-2 max550:items-start">
              <li>
                <a
                  href="/"
                  className="hover:underline text-white font-alegreya text-xl"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline text-white font-alegreya text-xl"
                >
                  Our Service
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className="hover:underline text-white font-alegreya text-xl"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:underline text-white font-alegreya text-xl"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div
            className="w-full sm:w-4/12 max-w-[400px] max550:w-fit max550:max-w-[300px] flex flex-col gap-y-2"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-left sm:text-left px-1 font-alegreya">
              Reach Us
            </h3>
            <ul className="space-y-2 mx-auto w-[100%] sm:w-full flex flex-col gap-y-2 py-2 max550:items-start">
              <li className="flex items-center gap-1">
                <a
                  href="https://wa.me/+923451184105"
                  className="hover:underline flex items-center gap-2 font-alegreya"
                >
                  <FaPhoneVolume size={20} /> +92345-1184105
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="mailto:info@fluxtonx.com"
                  className="hover:underline  flex items-center gap-2 font-alegreya"
                >
                  <FaRegMessage size={20} />
                  info@fluxtonx.com
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="https://maps.app.goo.gl/t7SeZD7Mw3RqwrV57"
                  className="hover:underline flex items-start gap-2 font-alegreya"
                >
                  <FaLocationDot size={20} /> Office No. B5 Town Center Plaza
                  Abdara Road , University Road Peshawar.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-500 pt-2">
          <p className="font-alegreya">
            2018 © FluxtonX Solutions - Copyright All Rights Reserved
          </p>

          <SocialBtns />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
