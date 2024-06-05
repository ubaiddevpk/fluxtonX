import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import backgroundImage from "../Assets/Images/inner-page-hero.jpg";


const services = [
  { id: 1, title: 'Top Mobile App Development company',description: 'FluxtonX is an award-winning top mobile app development company provide feature-packed and interactive mobile app development services for startups, medium and large enterprises. Be it a startup, SME or large enterprise, FluxtonX has been highly recommended by its clients as a professional Mobile App Development Company proved to be the right development partner to bank on. Powered with professional technology consultants, FluxtonX commits to walk the path with you on your digital transformation journey. Starting from the technology consulting to the actual architecture & solution design, UI / UX to solution implementation, and even assistance on the Go To Market Strategy, FluxtonX remains intact with all possible support for your enterprise. Our cutting-edge and out-of-the-box approach will deliver cost-effective mobile app development solutions to turn your business into a leading enterprise From Mobile App Development planning to launch, we follow the agile project management process to get things done faster and with maximum quality. No matter how unique or complex your business ideas are, our highly skilled team of mobile app developers, designers & testers are ready to take the challenge. We have a dedicated pool of 6+ designers, strategists, and developers in our work centers to deliver perfectly crafted, created, and innovative mobile app development solutions to our clients. We take your business to the new heights When compared to other mobile app development companies - what makes us unique and stand out from the crowd? We take every project as an opportunity to deliver unique and next-gen solutions using state-of-the-art technologies. At FluxtonX, perfection is not just another trait but also a way of life that we have become accustomed to. When you shake your hand with us - We can make your digital dreams come true',},
  { id: 2, title: 'Websites Development', description: 'FluxtonX is the top Website Development Company, offering professional website design and development for small enterprises to large businesses. We offer you the best website development services for various platforms such as Angular , React, PHP , WordPress, etc. Other than this, we also offer customized Web development solutions to meet your needs perfectly.As being the top website Development Company, we have a dedicated and professional expert team that creates powerful, elegant, and engaging websites. We design innovatively to provide a standardized markup code, facilitating the exponential growth of your business and enhancing your conversion rate.Our goal is to craft a personalized and responsive website that sets your business apart from the competition, providing a customer-centric experience for our clients  users. As a web development company based in India, we specialize in creating user-friendly, easily navigable, and visually appealing web designs that achieve high rankings on Google.As a prominent web development company based in India, we are dedicated to helping you transform your business into a prominent brand in the online market.' },
  { id: 3, title: 'UI/UX Designing', description: 'At FluxtonX, we offer exceptional UI/UX design services that transform your mobile app into a seamless and engaging user experience. Our team of seasoned designers focuses on creating visually appealing, user-friendly, and intuitive interfaces that not only look stunning but also enhance user satisfaction and drive business success. Whether you are a startup, SME, or a large enterprise, FluxtonX is your trusted partner in UI/UX design. Our approach is centered around understanding your unique business needs and user personas to craft designs that resonate with your audience. From initial user research and wireframing to prototyping and final design, we ensure every step of the design process is meticulously planned and executed. At FluxtonX, we pride ourselves on our attention to detail and commitment to excellence. Our team 5+ dedicated designers, strategists, and developers work collaboratively to deliver innovative and user-centric design solutions. We believe that great design is at the heart of any successful app, and our goal is to help you achieve your digital ambitions through exceptional UI/UX design. Partner with FluxtonX and let us take your mobile app to the next level with our cutting-edge UI/UX design services. Together, we can create an engaging and intuitive experience that will captivate your users and drive your business forward.' },
  { id: 4, title: 'Ecommerce Development', description: 'FluxtonX is proud to offer specialized eCommerce services, including Virtual Assistant (VA) support for leading platforms such as Amazon, eBay, and more. Our dedicated team of eCommerce experts is committed to helping you streamline operations, enhance customer experience, and drive sales across multiple marketplaces. At FluxtonX, we understand the unique challenges of managing an eCommerce business on platforms like Amazon and eBay. Our VA services are designed to provide you with the support you need to optimize your listings, manage inventory, handle customer service, and grow your business efficiently. Our eCommerce VA services include: Product Listing Optimization: Enhance your product visibility and increase sales with our expert listing optimization services. We ensure your product titles, descriptions, and images are optimized for search and conversion. Inventory Management: Keep track of your stock levels and avoid overselling with our efficient inventory management solutions. We help you manage your inventory across multiple platforms to ensure smooth operations. Order Processing & Fulfillment: Streamline your order processing and fulfillment with our reliable VA support. We handle order tracking, shipping coordination, and ensure timely delivery to your customers. Customer Service Support: Provide excellent customer service with our dedicated VA team. We manage customer inquiries, handle returns and refunds, and maintain positive seller ratings on platforms like Amazon and eBay. Market Research & Competitor Analysis: Stay ahead of the competition with our comprehensive market research and competitor analysis. We provide insights on market trends, pricing strategies, and competitor activities to inform your business decisions. Advertising & Promotions Management: Boost your sales with targeted advertising and promotions. Our VA team manages PPC campaigns, deals, and promotional activities to maximize your visibility and ROI. Account Health Monitoring: Maintain a healthy seller account with our proactive monitoring services. We keep track of your account metrics, address policy violations, and ensure compliance with platform guidelines. Sales Reporting & Analytics: Gain valuable insights into your sales performance with our detailed reporting and analytics. We provide regular reports on key metrics, helping you make data-driven decisions.At FluxtonX, our mission is to support your eCommerce business is growth and success. Our team of 4+ experienced professionals is dedicated to providing high-quality, reliable VA services that cater to your specific needs and objectives.' },
  { id: 5, title: 'Digital Marketing', description: 'FluxtonX is proud to offer comprehensive digital marketing services designed to propel your business to new heights. Our team of digital marketing experts is dedicated to creating and executing strategies that drive traffic, boost engagement, and increase conversions. At FluxtonX, we understand the ever-evolving digital landscape and the importance of staying ahead of the curve. Whether you are a startup, SME, or large enterprise, we tailor our digital marketing services to meet your unique needs and goals. Our digital marketing services include: Search Engine Optimization (SEO): Improve your website is visibility on search engines with our advanced SEO techniques. We conduct thorough keyword research, on-page optimization, and off-page strategies to increase your organic traffic and search engine rankings. Pay-Per-Click (PPC) Advertising: Drive targeted traffic to your website with our expertly managed PPC campaigns. We create, monitor, and optimize ads on platforms like Google Ads and Bing Ads to maximize your ROI. Social Media Marketing: Engage with your audience and build your brand presence on social media platforms. Our social media marketing services include content creation, community management, and paid social advertising on platforms such as Facebook, Instagram, Twitter, and LinkedIn. Content Marketing: Attract and retain your target audience with high-quality, relevant content. We develop content strategies, create engaging blog posts, articles, infographics, and videos that resonate with your audience and drive traffic. Email Marketing: Nurture your leads and convert them into customers with our effective email marketing campaigns. We design personalized email campaigns that deliver the right message at the right time, ensuring high open and click-through rates. Conversion Rate Optimization (CRO): Increase your website is conversion rates with our CRO services. We analyze user behavior, conduct A/B testing, and implement strategies to improve your website is performance and turn visitors into customers. Analytics & Reporting: Make data-driven decisions with our comprehensive analytics and reporting services. We provide detailed insights into your digital marketing performance, helping you understand what works and where there is room for improvement. At FluxtonX, our goal is to help you achieve your business objectives through strategic and innovative digital marketing solutions. Our team of 6+ dedicated professionals works collaboratively to ensure your digital marketing campaigns are effective and aligned with your brand is vision ' },
  { id: 6, title: 'Business Development', description: 'FluxtonX offers comprehensive business development services designed to accelerate your business growth. Our team of seasoned business strategists is dedicated to helping startups, SMEs, and large enterprises achieve their goals through innovative and strategic planning. At FluxtonX, we understand that business development is crucial for expanding your market reach, forging valuable partnerships, and driving sustainable growth. Our tailored approach ensures that each strategy aligns with your unique business objectives and market dynamics. Our business development services include: Market Research & Analysis: Gain valuable insights into your industry, competitors, and target audience. Our in-depth market research helps you identify opportunities, understand market trends, and make informed decisions. Strategic Planning: We work with you to develop comprehensive business strategies that outline clear goals, action plans, and key performance indicators (KPIs). Our strategic planning services ensure your business is well-positioned for growth and success. Sales Strategy & Execution: Increase your sales and revenue with our customized sales strategies. We provide expert guidance on lead generation, sales processes, and customer relationship management to help you close more deals. Partnership & Alliance Building: Expand your business network and leverage new opportunities through strategic partnerships and alliances. We identify and establish mutually beneficial relationships that enhance your market presence and drive growth. Business Model Innovation: Stay ahead of the competition with innovative business models tailored to your industry. We help you explore new revenue streams, optimize existing models, and adapt to changing market conditions. Go-to-Market Strategy: Successfully launch new products or services with our go-to-market strategies. We assist in planning and executing your market entry, ensuring maximum impact and rapid adoption. Financial Planning & Management: Ensure your business’s financial health with our financial planning and management services. We provide budgeting, forecasting, and financial analysis to support your strategic initiatives. Performance Tracking & Optimization: Monitor and optimize your business performance with our detailed tracking and analysis services. We help you measure success, identify areas for improvement, and adjust strategies for optimal results. At FluxtonX, our mission is to empower your business with the tools, strategies, and insights needed to achieve sustained growth and success. Our team of 5+ dedicated professionals brings a wealth of experience and expertise to every project, ensuring you receive the highest level of service and support.' },
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
          {/* <p className="text-xl mb-20">Home / ReadMore</p> */}
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
