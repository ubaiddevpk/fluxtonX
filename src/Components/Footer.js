import React from 'react';
// import backgroundImage from '../Assets/Images/footer-bg-1.jpg';
import lgo from "../Assets/Images/logo.jpeg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // <footer className="relative mt-20 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <footer className="relative mt-20 bg-sky-500">
            <div className="absolute"></div> 
            <div className="relative mx-auto max-w-screen-xl space-y-8 px-8 py-16 sm:px-12 lg:space-y-16 lg:px-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Link to="/" className="flex items-center">
                            {/* Your logo */}
                            <img src={lgo} className="ml-2 h-12 w-16 text-white"/>
                        </Link>
                        <p className="mt-4 max-w-xs text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-white mb-2">Subscribe to Our Newsletter</h4>
                            <form className="flex">
                                <input type="email" placeholder="Enter your email" className="text-base font-medium text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-r-md hover:bg-white hover:text-sky-500 hover:border-sky-700 hover:border-2 hover:transition hover:duration-500">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-semibold text-white text-2xl">Our Services</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  
                                    <a href="/#" className="text-white transition hover:opacity-75">Mobile Apps Development</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Websites Development</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">UI UX Desiging</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Business Development</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-white text-2xl">Follow Us</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Facebook</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Twitter</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-2xl text-white">Contact Information</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">example@support.com</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">5 xyz st., abc, Alexandria, Egypt.</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">+20123456789</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-white">&copy; 2022. Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
