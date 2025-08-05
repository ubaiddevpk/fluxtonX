import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HighlightedServiceCard from "../Cards/HighlightedServiceCard";
import { getnewServices } from "../../api/newservices.js";
import iconMap from "../../icons/iconMap"; // ✅ import icon map

const ServiceBanner = () => {
  const [newservicesData, setnewServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getnewServices();
        setnewServicesData(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setnewServicesData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div className="flex justify-center items-stretch gap-x-6 gap-y-6 flex-wrap px-8 py-4 relative w-screen overflow-hidden -top-[90px] max-max300:-top-[30px]">
      {newservicesData.length > 0 ? (
        newservicesData.map((dt) => {
          const IconComponent = iconMap[dt.icon] || iconMap.FaCogs; // ✅ map string to icon

          return (
            <HighlightedServiceCard
              key={dt._id}
              data={{
                ...dt,
                icon: IconComponent, // ✅ pass as component not string
              }}
            />
          );
        })
      ) : (
        <div>Loading services...</div>
      )}
    </motion.div>
  );
};

export default ServiceBanner;