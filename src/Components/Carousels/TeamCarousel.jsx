import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { CarouselWrapper } from "./CarouselWrapper";
import styled from "styled-components";
import TeamCard from "../Cards/TeamCard";
import { getteam } from "../../api/teamapi.js"; // ✅ import your API function

const StyledTitleText = styled.div.attrs({
  className: "font-[600] text-[3em] text-[#465462] font-montserrat text-center",
})`
  text-shadow: #768a9e 1px 0 10px;
  @media screen and (max-width: 780px) {
    margin-top: 10px;
    font-size: 2rem;
  }
  @media screen and (max-width: 580px) {
    margin-top: 10px;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`;

const StyledSliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }
`;

const TeamCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [teamData, setTeamData] = useState([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getteam(); // ✅ fetch data from backend
        setTeamData(data);
      } catch (err) {
        console.error("Error fetching team data:", err);
      }
    };
    fetchTeam();
  }, []);

  return (
    <CarouselWrapper className="gap-y-10 flex flex-col justify-between items-center w-full h-[600px]">
    
  
      <StyledSliderWrapper className="w-[80%] max-max800:max-w-[350px]">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500}
          centerPadding={windowWidth < 400 ? "20%" : "30%"}
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
                centerMode: false,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              },
            },
          ]}
        >
          {teamData.length > 0 ? (
            teamData.map((member) => (
              <TeamCard key={member._id} data={member} />
            ))
          ) : (
            <div className="text-center text-gray-600 py-10">
              Loading team data...
            </div>
          )}
        </Slider>
      </StyledSliderWrapper>
    </CarouselWrapper>
  );
};

export default TeamCarousel;
