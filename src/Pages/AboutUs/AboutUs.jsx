import React from "react";
import BannerCard from "../../Components/Cards/BannerCard";
import AboutCompany from "./AboutCompany";
import HeaderTitle from "../../Components/Headers/HeaderTitle";
import TeamCarousel from "../../Components/Carousels/TeamCarousel";

const AboutUs = () => {
  return (
    <div>
      <BannerCard title={"About Us"} imgUrl={"/aboutusteam.jpg"} />
      <AboutCompany />
      <div className="flex flex-col items-center justify-center gap-y-6 py-8  bg-[aliceblue]">
        <HeaderTitle title={"Our Team"} />
        <div className="text-6xl font-bold font-alegreya px-8 text-center">
          Meet Our
          <span
            className="font-dacingscript text-7xl text-sec"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
            }}
          >
            Team
          </span>
          !
        </div>
      </div>
      <div className=" bg-[aliceblue]">
        <TeamCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
