import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../Assets/Images/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav className={`p-7 flex items-center justify-between px-6 md:px-16 ${scrolling ? 'bg-custom-blue' : isSmallDevice ? 'bg-custom-blue' : 'bg-transparent'} fixed top-0 left-0 right-0 z-10`}>
        {/* Logo */}
        {/* <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-16 mr-4" />
        </Link> */}
        <h1 className="text-xl md:text-6xl font-bold mb-4 text-white">FluxtonX</h1>

      

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-9 font-semibold">
          <Link to="/" className="text-white hover:text-gray-300" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300" onClick={closeMenu}>About Us</Link>
          <Link to="/services" className="text-white hover:text-gray-300" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-300" onClick={closeMenu}>Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-gray-300" onClick={closeMenu}>Contact Us</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Sidebar menu for mobile */}
        <div className={`fixed top-16 left-0 h-full bg-custom-blue z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="p-16 space-y-6 font-semibold">
            <Link to="/" className="text-white hover:text-gray-300 block" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 block" onClick={closeMenu}>About Us</Link>
            <Link to="/services" className="text-white hover:text-gray-300 block" onClick={closeMenu}>Services</Link>
            <Link to="/portfolio" className="text-white hover:text-gray-300 block" onClick={closeMenu}>Portfolio</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 block" onClick={closeMenu}>Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
