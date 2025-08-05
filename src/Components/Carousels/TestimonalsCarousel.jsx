import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { CarouselWrapper } from "./CarouselWrapper";
import styled from "styled-components";
import TestimonalC from "../Cards/TestimonalC";

import { getTestimonials } from "../../api/testimonalsapi"; // ✅ import your API function

const StyledTitleText = styled.div.attrs({
  className: "font-[600] text-[3em] text-[#465462] font-montserrat text-center",
})`
  text-shadow: #768a9e 1px 0 10px;
  @media screen and (max-width: 780px) {
    margin-top: 10px;
    font-size: 2rem; /* 14px */
  }
  @media screen and (max-width: 580px) {
    margin-top: 10px;
    font-size: 1.8rem; /* 14px */
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 1.5rem; /* 14px */
  }
`;

const TestimonalsCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [testimonialData, setTestimonial] = useState([]);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
      const fetchTeam = async () => {
        try {
          const data = await getTestimonials(); // ✅ fetch data from backend
          setTestimonial(data);
        } catch (err) {
          console.error("Error fetching team data:", err);
        }
      };
      fetchTeam();
    }, []);
  

  return false ? (
    <div className="w-full h-screen flex justify-center items-center">
      tesing
    </div>
  ) : (
    true && (
      <CarouselWrapper className="gap-y-10 flex flex-col justify-between items-center w-full h-[600px]">
        <div className="w-[80%]">
          <Slider
            dots={true}
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
            {testimonialData.map((dt, i) => (
              <TestimonalC key={i} data={dt} />
            ))}
          </Slider>
        </div>
      </CarouselWrapper>
    )
  );
};

export default TestimonalsCarousel;
