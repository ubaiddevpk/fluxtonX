import React from 'react';

const ServiceCard = () => {
    const cards = [
        { id: 1, logo: '📷', title: 'Card 1', description: 'This is the first card description. and i want to add more and more' },
        { id: 2, logo: '📷', title: 'Card 2', description: 'This is the second card description. and i want to add more and more' },
        { id: 3, logo: '📷', title: 'Card 3', description: 'This is the third card description. and i want to add more and more' },
        { id: 4, logo: '📷', title: 'Card 4', description: 'This is the fourth card description. and i want to add more and more' },
        { id: 5, logo: '📷', title: 'Card 5', description: 'This is the fifth card description. and i want to add more and more' },
        { id: 6, logo: '📷', title: 'Card 6', description: 'This is the sixth card description. and i want to add more and more' },
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
