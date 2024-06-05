import React from 'react';
import { Link } from 'react-router-dom';
import mobiledev from "../Assets/Icons/app-development.png";
import webdev from "../Assets/Icons/web-development.png";
import eccomdev from "../Assets/Icons/eccomerce.png";
import digidev from "../Assets/Icons/social-media-marketing.png";
import uiuxdev from "../Assets/Icons/ui-ux.png";
import busidev from "../Assets/Icons/profit.png";



const ServiceCard = () => {
    const cards = [
        { id: 1, logo: mobiledev, title: 'Mobile Apps Development', description: 'Access an extensive range of forward-thinking mobile app development solutions to reach target audiences...' },
        { id: 2, logo: webdev, title: 'Websites Development', description: 'Get cost-effective and eye-catching web development solutions for your business to thrive... ' },
        { id: 3, logo: uiuxdev, title: 'UI/UX Desiging', description: 'Unlock the power of intuitive design with our innovative UI/UX solutions. Transform your user experience ...' },
        { id: 4, logo: eccomdev, title: 'Ecommerce Development', description: 'Delivering perfect and top-notch customer satisfaction through smoothly functioning, secure ... ' },
        { id: 5, logo: busidev, title: 'Digital Marketing', description: 'Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab ... ' },
        { id: 6, logo: digidev, title: 'Business Development', description: 'Use our business development skills to grow your business and reach more customers. We offer ...' },
    ];

    return (
        <div className="container mx-auto mb-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map(card => (
                <div
                    key={card.id}
                    className="group bg-transparent border border-custom-blue p-4 rounded-lg transition duration-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-custom-blue">
                    <div className="mb-4 grid ">
                        <img src={card.logo} alt={card.title} className="justify-items-start h-16 w-16  group-hover:filter group-hover:brightness-0 group-hover:invert"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white">{card.title}</h3>
                    <p className="mb-4 group-hover:text-white">{card.description}</p>
                    <Link to={`/readmore/${card.id}`} className="text-custom-blue group-hover:text-white hover:underline">Read More</Link>
                </div>
            ))}
        </div>
    );
}

export default ServiceCard;
