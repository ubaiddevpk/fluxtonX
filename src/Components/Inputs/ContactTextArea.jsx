import React from "react";
import styled from "styled-components";

const ContactTextArea = ({ Value, setValue, placeholder, Label }) => {
  return (
    <StyledWrapper>
      <div className="form-control">
        <textarea
          placeholder={placeholder}
          required
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          className="font-alegreya"
        />
        <label>
          {Label.split("").map((dt, i) => {
            const dur = `${i * 50}ms`;
            return (
              <span
                key={i}
                className="font-alegreya"
                style={{ transitionDelay: dur }}
              >
                {dt}
              </span>
            );
          })}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 100%;
  }

  .form-control textarea {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #000 solid;
    display: block;
    width: 100%;
    padding: 15px 10px;
    font-size: 18px;
    color: #000;
    resize: vertical;
    min-height: 120px;
  }

  .form-control textarea:focus,
  .form-control textarea:valid {
    outline: 0;
    border-bottom-color: #000;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 10px;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #00000097;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control textarea:focus + label span,
  .form-control textarea:valid + label span {
    color: #000;
    transform: translateY(-30px);
  }

  .form-control textarea:focus + label {
    left: 0px !important;
    transition: all 0.9s ease-in-out;
  }
`;

export default ContactTextArea;
