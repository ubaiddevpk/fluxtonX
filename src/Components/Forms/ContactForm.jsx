import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <p className="title">Start Your Project Today!</p>
        <p className="message">
          Turn your ideas into reality—start your project with confidence and
          create something extraordinary.
        </p>

        <label>
          <input required type="text" className="input" />
          <span>Firstname</span>
        </label>

        <label>
          <input required type="email" className="input" />
          <span>Email</span>
        </label>

        <label>
          <input required type="text" className="input" />
          <span>Topic</span>
        </label>

        <label>
          <textarea required className="input textarea" />
          <span>Message</span>
        </label>

        <button className="submit">Submit</button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    color: #fff;
    animation: fadeIn 0.8s ease;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
  }

  .title::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    height: 3px;
    width: 50px;
    background: #fbcc14;
    border-radius: 2px;
  }

  .message {
    font-size: 14px;
    text-align: center;
    opacity: 0.85;
  }

  label {
    position: relative;
  }

  .input {
    width: 100%;
    padding: 12px 12px 12px 12px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: background 0.3s ease, border 0.3s ease;
  }

  .input:focus {
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #fbcc14;
  }

  .input + span {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    pointer-events: none;
    transition: 0.3s ease;
  }

  .input:focus + span,
  .input:not(:placeholder-shown) + span {
    top: -8px;
    left: 10px;
    background: rgba(0, 0, 0, 0.3);
    padding: 0 5px;
    font-size: 12px;
    border-radius: 4px;
  }

  .textarea {
    resize: vertical;
    min-height: 100px;
  }

  .submit {
    background: #fbcc14;
    color: #000;
    padding: 12px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .submit:hover {
    background: #e0b913;
    transform: translateY(-2px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      translateY: 20px;
    }
    to {
      opacity: 1;
      translateY: 0;
    }
  }

  @media (max-width: 500px) {
    .form {
      padding: 20px;
    }
    .title {
      font-size: 22px;
    }
  }
`;

export default ContactForm;
