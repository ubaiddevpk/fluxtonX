
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

const ConsulatationCallBtn = ({ isScrolledPast }) => {
  const location = useLocation();

  // If we're on the home page, don't render the button
  if (location.pathname === "/") {
    return null;
  }

  return (
    <StyledWrapper>
      <Link to="/#contact-us" className="no-underline">
      <button
        className={`cssbuttons-io-button ${isScrolledPast ? "scrolled" : ""}`}
      >
        Get started 
        <div className="icon">
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: #0052cc;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: 2px solid white;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    /* box-shadow: inset 0 0 1.6em -0.6em black; */
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .cssbuttons-io-button.scrolled {
    background: #fff;
    color: black;
  }

  .cssbuttons-io-button .icon {
    background: #fbcc14;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    width: 2.2em;
    border-radius: 0.8em;
    /* box-shadow: 0.1em 0.1em 0.6em 0.2em #00; */
    right: 0.3em;
    bottom: 3px;
    transition: all 0.3s;
    padding-top: 16px;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

export default ConsulatationCallBtn;
