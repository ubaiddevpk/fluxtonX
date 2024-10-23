import React from "react";
import styled from "styled-components";

const ConsulatationCallBtn = ({ isScrolledPast }) => {
  return (
    <StyledWrapper
      className={`${isScrolledPast ? "h-[100%]" : "rounded-[50px]"} bg-white`}
    >
      <button
        className={`${
          isScrolledPast ? "!rounded-r-[100px]" : "!rounded-[50px]"
        } bg-white  !text-main hover:!text-main !font-alegreya !font-bold`}
      >
        {" "}
        Contact Us
        <span
          className={`${
            isScrolledPast ? "!rounded-r-[100px]" : ""
          } hover:bg-sec`}
        />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border: none;
    display: block;
    position: relative;
    padding: 0.7em 1.7em;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    color: white;
    z-index: 1;
    font-family: inherit;
    font-weight: 500;
    border-radius: 10px;
    height: 100% !important;
  }

  button span {
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid white;
  }

  button span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.7s ease-in-out;
  }

  button:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: #fbcc14;
  }

  button:hover {
    color: royalblue;
  }

  button:active span::before {
    background: #2751cd;
  }
`;

export default ConsulatationCallBtn;
