import React from "react";
import styled from "styled-components";

const ContactInput = ({ Value, setValue, placeholder, type, Label }) => {
  return (
    <StyledWrapper>
      <div className="input-group">
        <input
          type={type}
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <label>{Label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-group {
    position: relative;
    margin: 30px 0;
    width: 100%;
  }

  .input-group input {
    background: none;
    border: none;
    border-bottom: 2px solid #999;
    outline: none;
    width: 100%;
    padding: 12px 0 8px 0;
    font-size: 16px;
    color: #333;
    transition: border-color 0.3s;
  }

  .input-group input:focus {
    border-bottom-color: #0077b6; /* your main theme color */
  }

  .input-group label {
    position: absolute;
    top: 12px;
    left: 0;
    color: #999;
    font-size: 16px;
    pointer-events: none;
    transition: 0.3s ease all;
  }

  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: -16px;
    font-size: 13px;
    color: #0077b6; /* your main theme color */
  }
`;

export default ContactInput;
