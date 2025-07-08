import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import ServicesData from "../../utils/ServicesData";
import BannerCard from "../../Components/Cards/BannerCard";
import AOS from "aos";
import "aos/dist/aos.css";
import MainBtn from "../../Components/Buttons/MainBtn";
import { TiArrowForward } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const service = ServicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      {/* Banner */}
      <BannerCard title={service.title} imgUrl={service.img} />

      {/* Main content section */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Image with border and shadow */}
        <div
          data-aos="fade-right"
          className="md:w-1/2 order-1 md:order-1 flex justify-center"
        >
          <div className="w-full min-h-[320px] max-h-[420px] flex items-center justify-center bg-white rounded-2xl border-4 border-sec shadow-xl p-2">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[320px] max-h-[420px] rounded-xl object-cover object-center transition-transform duration-500 hover:scale-105"
              style={{objectPosition: 'center'}}
            />
          </div>
        </div>

        {/* Right: Description and details with highlights */}
        <div
          data-aos="fade-left"
          className="flex flex-col gap-y-8 md:w-1/2 order-2 md:order-2 bg-white/80 rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-main font-alegreya mb-2">
            {service.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed font-alegreya">
            {service.desc}
          </p>
          <p className="text-gray-600 text-base">
            Our <span className="font-semibold text-main">{service.title}</span> services
            are designed to ensure you achieve your goals efficiently. We bring
            <span className="text-sec font-semibold"> innovative solutions</span>, modern frameworks, and a dedicated team to
            make your ideas come to life.
          </p>
          <div className="bg-gradient-to-r from-sec to-main text-white p-6 rounded-xl shadow-lg border border-white/30">
            <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">
              Why Choose This Service?
            </h2>

            <ul className="space-y-3">
              {[
                "High Quality & Performance",
                "Latest Industry Standards",
                "Customized Solutions",
                "Expert Team Support",
                "Long-term Maintenance",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-4 bg-[rgba(255,255,255,0.08)] rounded-md px-3 py-2 hover:bg-[rgba(255,255,255,0.18)] transition"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow">
                    <TiArrowForward className="text-sec text-xl" />
                  </div>
                  <span className="text-base font-alegreya">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Call to action with icon */}
          <div className="flex justify-center mt-8">
            <MainBtn
              title="Get started  "
              onClick={() => {
                if (window.location.pathname === "/") {
                  const element = document.getElementById("contact-us");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                } else {
                  navigate("/#contact-us");
                }
              }}
            />
          </div>
        </div>
      </div>
      {/* Removed Key Features & Technologies section as requested */}
    </div>
  );
};

export default ServiceDetail;
//what is github copilot

