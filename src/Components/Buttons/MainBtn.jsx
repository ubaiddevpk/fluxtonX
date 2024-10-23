import React from "react";
import styled from "styled-components";

const MainBtn = ({ title, onClick }) => {
  return (
    <StyledWrapper>
      <button className="btn font-alegreya" onClick={onClick}>
        {title}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 10px 0px;
  .btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(234, 234, 234);
    color: #0052cc;
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
  }

  /* Scale effect on click */
  .btn:active {
    scale: 0.92;
  }

  /* Hover effect */
  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(0, 82, 204, 0.681) 0%,
      rgba(251, 204, 20, 0.873) 60%
    );
    color: white;
  }
`;

export default MainBtn;
