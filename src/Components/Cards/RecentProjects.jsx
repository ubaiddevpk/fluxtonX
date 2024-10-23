import React from "react";
import HeaderTitle from "../Headers/HeaderTitle";
import ProjectCard from "./ProjectCard";
import ProjectsCarousel from "../Carousels/ProjectsCarousel";

const RecentProjects = () => {
  return (
    <div className="relative min-w-screen min-h-screen flex flex-col py-8">
      <div className="flex flex-col w-full items-center gap-y-5 py-4">
        <HeaderTitle
          title={"FLUXTONX PROJECTS"}
          bgColor={"bg-sec"}
          fontColor={"text-sec"}
        />
        <div className="font-alegreya font-bold text-4xl">
          Check Out Our <span className="text-main">Latest</span> Projects.
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-3">
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default RecentProjects;
