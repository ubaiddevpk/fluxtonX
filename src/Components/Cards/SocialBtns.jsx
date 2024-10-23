import React from "react";
import styled from "styled-components";

const SocialBtns = () => {
  return (
    <StyledWrapper>
      <div className="share">
        <button className="btn1">
          <svg
            fillRule="nonzero"
            height="30px"
            width="30px"
            viewBox="0,0,256,256"
            xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            className="instagram"
          >
            <g
              style={{ mixBlendMode: "normal" }}
              textAnchor="none"
              fontSize="none"
              fontWeight="none"
              fontFamily="none"
              strokeDashoffset={0}
              strokeDasharray=""
              strokeMiterlimit={10}
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeWidth={1}
              stroke="none"
              fillRule="nonzero"
            >
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
              </g>
            </g>
          </svg>
        </button>
        <button className="btn3">
          <svg
            height="30px"
            width="30px"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className="git"
          >
            {" "}
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .share {
    display: flex;
    flex-direction: row;
    gap: 1em;
    transition: 0.4s ease-in-out;
    margin-top: 60px;
  }

  .btn1 {
    position: relative;
    width: 3em;
    height: 3em;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s all;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn1 .instagram {
    margin-top: 0.1em;
    fill: #cc39a4;
  }

  .btn1 .tooltiptext1 {
    visibility: hidden;
    width: 6em;
    height: 8em;
    background-color: whitesmoke;
    color: black;
    text-align: center;
    border-radius: 10px;
    padding: 1em;
    position: absolute;
    left: -1.5em;
    top: -8em;
    z-index: 1;
    transition: 0.1s ease-in-out;
  }

  .btn1 .tooltiptext1 .card {
    width: 4em;
    height: 4em;
    background-color: white;
  }

  .btn1 .tooltiptext1 .account {
    margin-top: 1em;
  }

  .btn1 .tooltiptext1 .username {
    font-size: 0.7em;
    margin-top: 1.6em;
    font-weight: bold;
  }

  .btn1:hover .tooltiptext1 {
    transform: translateY(-1em);
    visibility: visible;
  }

  .btn1:hover {
    background-color: #cc39a4;
  }

  .btn1:hover .instagram {
    fill: white;
  }

  .btn2 {
    position: relative;
    width: 3em;
    height: 3em;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s all;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn2 .twitter {
    margin-top: 0.25em;
    margin-left: 0.1em;
    fill: #03a9f4;
  }

  .btn2 .tooltiptext2 {
    visibility: hidden;
    width: 6em;
    height: 8em;
    background-color: whitesmoke;
    color: black;
    text-align: center;
    border-radius: 10px;
    padding: 1em;
    position: absolute;
    left: -1.5em;
    top: -8em;
    z-index: 1;
    transition: 0.1s ease-in-out;
  }

  .btn2 .tooltiptext2 .card {
    width: 4em;
    height: 4em;
    background-color: white;
  }

  .btn2 .tooltiptext2 .account {
    margin-top: 1em;
  }

  .btn2 .tooltiptext2 .username {
    font-size: 0.6em;
    margin-top: 1.6em;
    font-weight: bold;
  }

  .btn2:hover .tooltiptext2 {
    transform: translateY(-1em);
    visibility: visible;
  }

  .btn2:hover {
    background-color: #03a9f4;
  }

  .btn2:hover .twitter {
    fill: white;
  }

  .btn3 {
    position: relative;
    width: 3em;
    height: 3em;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s all;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn3 .tooltiptext3 {
    visibility: hidden;
    width: 6em;
    height: 8em;
    background-color: whitesmoke;
    color: black;
    text-align: center;
    border-radius: 10px;
    padding: 1em;
    position: absolute;
    left: -1.5em;
    top: -8em;
    z-index: 1;
    transition: 0.1s ease-in-out;
  }

  .btn3 .tooltiptext3 .card {
    width: 4em;
    height: 4em;
    background-color: white;
  }

  .btn3 .tooltiptext3 .account {
    margin-top: 1em;
  }

  .btn3 .tooltiptext3 .username {
    font-size: 0.7em;
    margin-top: 1.6em;
    font-weight: bold;
  }

  .btn3:hover .tooltiptext3 {
    transform: translateY(-1em);
    visibility: visible;
  }

  .btn3:hover {
    background-color: black;
  }

  .btn3:hover .git {
    fill: white;
  }
`;

export default SocialBtns;
