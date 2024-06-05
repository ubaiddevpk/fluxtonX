import React from 'react';
import iImage from '../Assets/Images/3.png';


const AboutUSComp = () => {
    return (
        <div className="container mx-auto mb-8 px-4 md:px-16 py-8 flex flex-col md:flex-row items-center md:justify-between">
            <div className="md:w-1/2">
                <h5 className="text-lg text-custom-blue font-bold mb-2">ABOUT US</h5>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Worldwide Clients Since 2019.</h2>
                <p className="text-lg text-gray-700 mb-4">
                FluxtonX is a complete software development company leading in this industry 
                for over 5+ years. We are here to help clients turn their thoughts into 
                reality. We have been serving people globally with expert web developers, app developers, and the latest artificial intelligence abilities.
                </p>
                <button className="bg-custom-blue mt-6 text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
                    Get in Touch
                </button>
            </div>
            <div className="md:w-1/2 mt-4 flex justify-center md:mt-0">
                <img src={iImage} alt="About Us" className="w-3/4 h-auto rounded-lg " />
            </div>
        </div>
    );
}

export default AboutUSComp;
