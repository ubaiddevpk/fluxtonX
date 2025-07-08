
import styled from "styled-components";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed


const GetStartedBtn = () => {
  return (
    <StyledWrapper>
      <Link to="/#contact-us" className="no-underline">
      <button className="btn font-alegreya">Get Started</button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(234, 234, 234);
    color: #0000005f;
    color: #0052cc;
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(0, 82, 204, 0.681) 0%,
      rgba(251, 204, 20, 0.873) 60%
    );
    color: white;
    /* color: rgb(251, 204, 20); */
    /* color: rgb(0, 82, 204); */
  }
`;

export default GetStartedBtn;
