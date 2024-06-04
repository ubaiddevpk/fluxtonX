import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import backgroundImage from "../Assets/Images/inner-page-hero.jpg";


const services = [
  { id: 1, title: 'Top Mobile App Development company: One-stop Destination For All Mobile App Development Services', description: 'Access an extensive range of forward-thinking mobile app development solutions to reach target audiences.' },
  { id: 2, title: 'Websites Development', description: 'Get cost-effective and eye-catching web development solutions for your business to thrive.' },
  { id: 3, title: 'UI/UX Designing', description: 'Unlock the power of intuitive design with our innovative UI/UX solutions. Transform your user experience and keep your audience engaged like never before.' },
  { id: 4, title: 'Ecommerce Development', description: 'Delivering perfect and top-notch customer satisfaction through smoothly functioning, secure, and integrated e-commerce solutions that help businesses boost sales, expand user engagement.' },
  { id: 5, title: 'Digital Marketing', description: 'Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers.' },
  { id: 6, title: 'Business Development', description: 'Use our business development skills to grow your business and reach more customers. We offer smart strategies and creative solutions to help you stay ahead and succeed.' },
];

const ReadMore = () => {
  const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    describe: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ozu5moo', 'template_28geslm', formData, '8T0lGpzNb30SktHr0')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" inset-0 bg-black opacity-90 "></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4">{service.title}</h1>
          <p className="text-xl mb-20">Home / ReadMore</p>
        </div>
      </div>
      <div className="flex px-4 md:px-16 flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 ">{service.title}</h1>
          <p className="text-lg">{service.description}</p>
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-lg border-sky-500 border-2">
          <h2 className="text-2xl flex justify-center font-bold mb-4">FREE CONSULTATION</h2>
          <h3 className="text-lg flex justify-center mb-4">Get your Free Quote</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="describe" className="block text-sm font-medium text-gray-700">Describe</label>
              <textarea
                id="describe"
                placeholder="Please tell us in detail. The more we know about your mobile app idea, the easier it would be for us to give you the app development cost and timeline."
                name="describe"
                value={formData.describe}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-sky-500 text-white font-medium rounded-md hover:bg-transparent hover:text-sky-500 hover:border-2 hover:border-sky-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReadMore;
