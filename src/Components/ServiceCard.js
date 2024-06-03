import React from 'react';

const ServiceCard = () => {
    const cards = [
        { id: 1, logo: '📷', title: 'Mobile Apps Development', description: 'Access an extensive range of forward-thinking mobile app development solutions to reach target audiences.' },
        { id: 2, logo: '📷', title: 'Websites Development', description: 'Get cost-effective and eye-catching web development solutions for your business to thrive. ' },
        { id: 3, logo: '📷', title: 'UI/UX Desiging', description: 'Unlock the power of intuitive design with our innovative UI/UX solutions. Transform your user experience and keep your audience engaged like never before.' },
        { id: 4, logo: '📷', title: 'Ecommerce Development', description: 'Delivering perfect and top-notch customer satisfaction through smoothly functioning, secure, and integrated e-commerce solutions that help businesses boost sales, expand user engagement,' },
        { id: 5, logo: '📷', title: 'Digital Marketing', description: 'Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers.' },
        { id: 6, logo: '📷', title: 'Business Development', description: 'Use our business development skills to grow your business and reach more customers. We offer smart strategies and creative solutions to help you stay ahead and succeed.' },
    ];

    return (
        <div className="container mx-auto mb-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map(card => (
                <div
                    key={card.id}
                    className="group bg-transparent border border-sky-500 p-4 rounded-lg transition duration-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500">
                    <div className="text-4xl mb-4 ">{card.logo}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white">{card.title}</h3>
                    <p className="mb-4 group-hover:text-white">{card.description}</p>
                    <a href="/#" className="text-sky-500 group-hover:text-white hover:underline">Read More</a>
                </div>
            ))}
        </div>
    );
}

export default ServiceCard;
