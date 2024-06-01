import React from 'react';
import backgroundImage from "../Assets/Images/inner-page-hero.jpg"
import AboutUSComp from '../Components/AboutUSComp';
const AboutUs = () => {
  return (
    <>
    <div
    className=" bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Background Opacity Layer */}
    <div className=" inset-0 bg-black opacity-90 "></div>
      
      {/* Overlay Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mt-24 mb-4">About Us</h1>
        <p className="text-xl mb-20">Home / About Us</p>
      </div>
    </div>
    <div className='mt-12 mb-20' >
        <AboutUSComp/>
        </div>
    </>
  );
}

export default AboutUs;
