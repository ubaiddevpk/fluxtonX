import  { useEffect, useState } from "react";
import BannerCard from "../../Components/Cards/BannerCard";
import HeaderTitle from "../../Components/Headers/HeaderTitle";
import ServiceCardNew from "../../Components/Cards/ServiceCardNew";
import { getServices } from "../../api/serviceApi"; // ✅ import your API function

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();
// ✅ check in console
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BannerCard title={"Services"} imgUrl={"/projectteam.jpg"} />
      <div className="flex flex-col items-center justify-center gap-y-6 py-10 pt-14 ">
        <HeaderTitle title={"Our Best Service"} />
        <div className="text-6xl font-bold font-alegreya px-8 text-center">
          We Leadership This{" "}
          <span
            className="font-dacingscript text-7xl text-sec"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
            }}
          >
            Service
          </span>
          !
        </div>
      </div>

      <div className="flex px-2 flex-wrap items-center justify-center gap-x-4 gap-y-4 py-8">
        {servicesData.length > 0 ? (
          servicesData.map((sd) => (
            <ServiceCardNew key={sd._id} data={sd} />
          ))
        ) : (
          <div>Loading services...</div>
        )}
      </div>
    </div>
  );
};

export default Services;
