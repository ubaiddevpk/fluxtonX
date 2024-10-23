import React from "react";
import HeaderTitle from "../Headers/HeaderTitle";
import TestimonalsCarousel from "../Carousels/TestimonalsCarousel";

const TestimonalCard = () => {
  return (
    <div
      className="relative min-w-screen min-h-screen flex flex-col py-8"
      style={{ backgroundColor: "rgba(0,0,0,.05)" }}
    >
      <div className="flex flex-col w-full items-center gap-y-5 py-4">
        <HeaderTitle
          title={"TESTIMONIALS"}
          bgColor={"bg-sec"}
          fontColor={"text-sec"}
        />
        <div className="font-alegreya font-bold text-4xl">
          Hear from Our <span className="text-main">Satisfied</span> Clients
        </div>
      </div>
      <div className="">
        <TestimonalsCarousel />
      </div>
    </div>
  );
};

export default TestimonalCard;
