import React from 'react';
import backgroundImage from '../Assets/Images/pattern-bg-1.jpg';
import rightImage from '../Assets/Images/illustration-1.png';

const HeroSection = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Opacity Layer */}
        <div className=" inset-0 bg-black opacity-50 "></div>

        <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center ">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-white pt-20 text-center md:text-left">
            <h4 className="text-lg text-sky-500 font-bold mb-2">IT SOLUTIONS</h4>
            <h1 className="text-4xl md:text-6xl font-bold mb-4"> Providing The Best Services & IT</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-sky-500"> Solution</h1>

            <p className="text-lg md:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci
            </p>
            <button className="bg-transparent border-2 border-sky-500 text-lg font-bold text-sky-500 px-10 py-3 rounded-bl-3xl rounded-tr-3xl hover:bg-sky-500 hover:text-white hover:transition hover:duration-500 hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500 ">
              Start Now
            </button>

          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center mb-16">
            <img src={rightImage} alt="Right Side" className="w-3/4 md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
