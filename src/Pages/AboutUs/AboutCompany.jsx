import React from "react";
import AboutCompanyCard from "../../Components/Cards/AboutCompanyCard";
import HeaderTitle from "../../Components/Headers/HeaderTitle";
import AboutTabs from "../../Components/Tabs/AboutTabs";
import "./AboutCompany.css";

const AboutCompany = () => {
  return (
    <div className="flex gap-x-8 justify-center items-center px-[5rem] py-20 about-company-card max-w-[1800px]">
      <AboutCompanyCard />
      <div className="max-w-[600px] about-company-detail" data-aos="fade-left">
        <div className="min-w-[300px] font-montserrat flex items-center gap-x-2 text-2xl font-semibold text-main about-company-detail-inner px-5">
          <HeaderTitle title={"About Company"} />
        </div>
        <div className="">
          <div className="flex flex-col font-alegreya gap-y-2 py-4">
            <div className="text-3xl font-bold my-5 tracking-widest max1100:text-2xl max500:text-sm about-company-desc1">
              We believe that every problem has a solution
            </div>
            <div className="text-2xl font-semibold font-alegreya tracking-widest max1100:text-xl about-company-desc2 text-gray-800">
              Bring to the table win-win survival strategies to ensure proactive
              domination at the end of the day,   going forward.
            </div>
          </div>
          <div className="">
            <AboutTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
