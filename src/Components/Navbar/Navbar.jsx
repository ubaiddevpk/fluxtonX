import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ConsulatationCallBtn from "../Buttons/ConsulatationCallBtn";
import MenuBtn from "../Buttons/MenuBtn";

const NavData = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "About Us", link: "/about-us" },
];

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(""); // State to track the active navigation item
  const [isScrolledPast, setIsScrolledPast] = useState(false); // State to track if scrolled past 100vh

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const location = useLocation(); // Get the current location from react-router-dom
  const pathname = location.pathname;

  // Function to handle scrolling
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > window.innerHeight - 400) {
      setIsScrolledPast(true); // Scroll is past 100vh
    } else {
      setIsScrolledPast(false); // Scroll is within 100vh
    }
  };

  useEffect(() => {
    // Update active navigation item
    NavData.map((dt) => {
      if (dt.link === pathname) handleNavItemClick(dt.title);
    });

    // Scroll to top whenever the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enable smooth scrolling
    });

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 h-[12vh] min-h-[89px] ${
        isScrolledPast ? "p-3" : "bg-transparent"
      }`} // Smooth transition between states
    >
      <div
        className={`flex justify-between items-center h-full ${
          isScrolledPast
            ? "bg-main shadow-lg rounded-[100px] overflow-hidden"
            : "bg-transparent  pr-8"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-x-2 bg-transparent py-4 px-6 pr-8 rounded-[200px] border-none outline-none border-2 border-main ${
            isScrolledPast && ""
          }`}
        >
          <img
            src={isScrolledPast ? "/logo.png" : "/logo.png"}
            alt=""
            className="w-[70px]"
          />
          <div
            className={`flex font-alegreya text-2xl font-semibold mt-2 ${
              isScrolledPast ? "text-white" : "text-white"
            }`}
          >
            FLU<span className="text-sec">X</span>TONX
          </div>
        </div>
        <div className="flex items-center gap-x-20 h-full max-max820:hidden">
          <div className="flex gap-x-4 items-center">
            {NavData.map((dt) => (
              <div className="relative overflow-hidden" key={dt.title}>
                <Link
                  to={dt.link}
                  className={`text-[20px] font-[700] font-alegreya maxWeb1:text-[25px] maxWeb2:text-[30px] maxWeb3:text-[35px] maxWeb4:text-[40px] hover:text-sec transition-all ease-in-out duration-500 ${
                    isScrolledPast ? "text-white" : "text-white" // Change color based on scroll
                  } ${
                    activeNavItem === dt.title ? "!text-sec" : "text-white" // Change color based on scroll
                  }`} // Apply 'text-main' class if scrolled past 100vh
                  onClick={() => handleNavItemClick(dt.title)}
                >
                  {dt.title}
                </Link>
                {activeNavItem === dt.title && (
                  <div
                    className={`box-below-link ${
                      isScrolledPast ? "!bg-sec" : "!bg-sec"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className={`${isScrolledPast ? "!h-full" : ""}`}>
            <ConsulatationCallBtn isScrolledPast={isScrolledPast} />
          </div>
        </div>
        <div className={`${isScrolledPast && "pr-3"} max-max820:flex hidden`}>
          <MenuBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
