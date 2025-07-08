import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ConsulatationCallBtn from "../Buttons/ConsulatationCallBtn";
import MenuBtn from "../Buttons/MenuBtn";
import { FaHome, FaCogs, FaBriefcase, FaInfoCircle } from "react-icons/fa";

const NavData = [
  { title: "Home", link: "/", icon: FaHome },
  { title: "Services", link: "/services", icon: FaCogs },
  { title: "Portfolio", link: "/portfolio", icon: FaBriefcase },
  { title: "About Us", link: "/about-us", icon: FaInfoCircle },
];

const SideMenu = ({ isOpen, closeMenu, activeNavItem, handleNavItemClick }) => (
  <div
    className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[350px] bg-gradient-to-br from-main via-blue-900 to-sec transition-transform duration-500 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } z-50 shadow-2xl rounded-tl-3xl rounded-bl-3xl flex flex-col`}
    style={{ borderTopLeftRadius: 32, borderBottomLeftRadius: 32 }}
    onTouchStart={(e) => {
      e.stopPropagation();
      e.currentTarget.dataset.touchStartX = e.touches[0].clientX;
    }}
    onTouchMove={(e) => {
      e.stopPropagation();
      const startX = parseFloat(e.currentTarget.dataset.touchStartX || 0);
      const currentX = e.touches[0].clientX;
      if (startX - currentX > 60) {
        closeMenu();
      }
    }}
  >
    {/* Cancel/Close Button */}
    <button
      className="absolute top-4 right-4 text-white text-2xl bg-white/10 hover:bg-white/20 border border-white/30 rounded-full p-2 shadow-lg transition-colors duration-300 z-50 backdrop-blur-md flex items-center justify-center"
      aria-label="Close menu"
      onClick={closeMenu}
      style={{ width: 40, height: 40 }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L15 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 5L5 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
    <div className="flex flex-col items-start p-6 pt-20 gap-y-6 h-full w-full animate-slideInRight">
      {NavData.map((dt) => {
        const Icon = dt.icon;
        return (
          <Link
            key={dt.title}
            to={dt.link}
            className={`w-full flex items-center justify-start gap-4 text-left text-[20px] font-[700] font-alegreya tracking-wide rounded-2xl py-3 px-4 bg-white/10 hover:bg-sec hover:text-white transition-all duration-300 shadow-md border-b-2 border-white/10 ${
              activeNavItem === dt.title ? "bg-sec text-white" : "text-white"
            }`}
            onClick={() => {
              handleNavItemClick(dt.title);
              closeMenu();
            }}
          >
            <span className="text-xl bg-white/20 rounded-full p-2 flex items-center justify-center">
              <Icon />
            </span>
            <span>{dt.title}</span>
          </Link>
        );
      })}
      <div className="w-full flex justify-start mt-6">
        <div className="scale-90">
          <ConsulatationCallBtn isScrolledPast={true} />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(""); // State to track the active navigation item
  const [isScrolledPast, setIsScrolledPast] = useState(false); // State to track if scrolled past 100vh

  const [OpenSideMenu, setOpenSideMenu] = useState(false);

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
      }`}
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
          <Link to="/" className="flex items-center gap-x-2">
            <img
              src={isScrolledPast ? "/logo.png" : "/logo.png"}
              alt=""
              className="w-[70px] hover:scale-110 transition-all duration-300 ease-in-out"
            />

            <div
              className={`flex font-alegreya text-2xl font-semibold mt-2 ${
                isScrolledPast ? "text-white" : "text-white"
              }`}
            >
              FLU<span className="text-sec">X</span>TONX
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-10 h-full max-max820:hidden  pr-5">
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
          {/* contact us btn */}
          <div className={`${isScrolledPast ? "!h-fit" : "!h-fit"}`}>
            <ConsulatationCallBtn isScrolledPast={isScrolledPast} />
          </div>
        </div>

        <div className={`${isScrolledPast && "pr-3"} max-max820:flex hidden`}>
          <MenuBtn
            setOpenSideMenu={setOpenSideMenu}
            OpenSideMenu={OpenSideMenu}
          />
        </div>
      </div>

      {/* Side Menu for mobile screens */}
      <SideMenu
        isOpen={OpenSideMenu}
        closeMenu={() => setOpenSideMenu(false)}
        handleNavItemClick={handleNavItemClick}
        activeNavItem={activeNavItem}
      />
    </div>
  );
};

export default Navbar;
