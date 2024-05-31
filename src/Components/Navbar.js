import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-500 p-7 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-9 font-semibold">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
        <Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar menu for mobile */}
      <div className={`fixed top-16 left-0 h-full bg-sky-500 z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-16 space-y-6 font-semibold">
          <Link to="/" className="text-white hover:text-gray-300 block">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 block">About Us</Link>
          <Link to="/services" className="text-white hover:text-gray-300 block">Services</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-300 block">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 block">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
