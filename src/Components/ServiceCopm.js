import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCopm = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between pt-16 pb-6 bg-white">
                <div className="md:w-2/3">
                    <h5 className="text-lg text-sky-500 font-bold mb-2">SERVICES</h5>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
                    <p className="text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur hell <br /> adipiscing elit. Nulla ac convallis leo.
                    </p>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-end">
                    <button className="bg-sky-500 text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
                        See All Services
                    </button>
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-16'>
                 <ServiceCard/>
            </div>
        </>
    );
}

export default ServiceCopm;
