import React from "react";
import BannerCard from "../../Components/Cards/BannerCard";
import ProjectCard from "../../Components/Cards/ProjectCard";
import HeaderTitle from "../../Components/Headers/HeaderTitle";

const Portfolio = () => {
  return (
    <div>
      <BannerCard title={"Portfolio"} imgUrl={"/projectteam.jpg"} />
      <div className="flex flex-col items-center justify-center gap-y-6 py-10 pt-14 ">
        <HeaderTitle title={"Our Projects Now"} />
        <div className="text-6xl font-bold font-alegreya px-8 text-center">
          We Have Business{" "}
          <span
            className="font-dacingscript text-7xl text-sec"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
            }}
          >
            Case Studies
          </span>
          !
        </div>
      </div>

      <div className="flex px-2 flex-wrap items-center justify-center gap-x-4 gap-y-4 py-8">
        {[1, 2, 3, 3, 4, 5, 6, 7].map((dt) => (
          <ProjectCard />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
