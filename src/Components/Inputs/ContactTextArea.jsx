import React from "react";
import styled from "styled-components";

const ContactTextArea = ({
  Value,
  setValue,
  placeholder,
  type,
  Label,
  Width,
}) => {
  return (
    <StyledWrapper>
      <div className="form-control">
        <textarea
          type={type}
          placeholder={placeholder}
          required="true"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          className="font-alegreya"
        />
        <label>
          {Label.split("").map((dt, i) => {
            const dur = `${i * 50}ms`;
            return (
              <span
                className="font-alegreya"
                style={{ transitionDelay: dur.toString() }}
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
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 10px;
    font-size: 18px;
    color: #fff;
  }

  .form-control textarea:focus,
  .form-control textarea:valid {
    outline: 0;
    border-bottom-color: #fbcc14;
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
    color: #fff;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control textarea:focus + label span,
  .form-control textarea:valid + label span {
    color: #fbcc14;
    transform: translateY(-30px);
  }
  .form-control textarea:focus + label {
    left: 0px !important;
    transition: all 0.9s ease-in-out;
  }
`;

export default ContactTextArea;
