import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { CarouselWrapper } from "./CarouselWrapper";
import TestimonalC from "../Cards/TestimonalC";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CarouselWrapper className="gap-y-10 flex flex-col justify-between items-center w-full h-[600px]">
      <div className="w-[80%]">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500 ? true : false} // Set centerMode to false for wider screens
          centerPadding={windowWidth < 400 ? "20%" : "0"}
          arrows={false}
          responsive={[
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: false, // Adjust this to ensure proper alignment
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: false, // Ensure this is false for correct alignment
              },
            },
          ]}
        >
          {[1, 2, 3, 4, 5].map((dt, i) => (
            <ProjectCard data={dt} />
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default ProjectsCarousel;
