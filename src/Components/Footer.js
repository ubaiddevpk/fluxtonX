import React from 'react';
import backgroundImage from '../Assets/Images/footer-bg-1.jpg';

const Footer = () => {
    return (
        <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-65"></div> {/* Overlay with opacity */}
            <div className="relative mx-auto max-w-screen-xl space-y-8 px-8 py-16 sm:px-12 lg:space-y-16 lg:px-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center">
                            {/* Your logo */}
                            <span className="ml-2 text-white">Your Company</span>
                        </div>
                        <p className="mt-4 max-w-xs text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                        </p>
                        <div className="mt-4">
                            <h4 className="text-white mb-2">Subscribe to Our Newsletter</h4>
                            <form className="flex">
                                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-semibold text-white text-2xl">Useful Links</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  
                                    <a href="/#" className="text-white transition hover:opacity-75">Google</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Dribbble</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Wikipedia</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-white text-2xl">Resources</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Support</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Drivers</a>
                                </li>
                                <li>
                                    <a href="/#" className="text-white transition hover:opacity-75">Projects</a>
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
