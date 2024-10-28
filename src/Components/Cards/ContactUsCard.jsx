import React, { useState } from "react";
import { FaWaveSquare } from "react-icons/fa";
import ContactInput from "../Inputs/ContactInput";
import ContactTextArea from "../Inputs/ContactTextArea";
import SendMsg from "../Buttons/SendMsg";
import emailjs from "@emailjs/browser";

const ContactUsCard = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Topic, setTopic] = useState("");
  const [Message, setMessage] = useState("");

  const service_id = "service_r9tmjb9";
  const template_id = "template_ux3wr5i";
  const public_key = "M17105tc6OX5gHAIs";

  const onSubmit = async (e) => {
    e.preventDefault();

    const templateparms = {
      from_name: Name,
      from_email: Email,
      topic: Topic,
      message: Message,
      to_name: "FluxtonX",
    };

    emailjs.send(service_id, template_id, templateparms, public_key).then(
      (res) => {
        console.log(res);
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="w-full flex flex-col items-center bg-[aliceblue]">
      <div className="text-6xl font-bold font-alegreya py-10 pt-14 px-8 text-center">
        Let's Tackle This Challenge as a{" "}
        <span
          className="font-dacingscript text-7xl text-sec"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
          }}
        >
          Team
        </span>
        !
      </div>
      <img
        src="/team.jpg"
        className="w-[70%] max-max900:w-[90%] z-10 object-cover border-8 rounded-t-[20px] border-sec rounded-xl"
      />
      <div className=" -mt-40 min-h-[100px] bg-transparent pt-[200px] rounded-t-[30px] w-full flex items-start justify-center gap-x-10 gap-y-10 px-20 py-10 max-max1000:flex-col max-max1000:items-center border-8 border-sec">
        <div className="flex flex-col items-start text-black font-alegreya text-2xl pt-4 max-max1000:w-full">
          <div className="text-2xl">Get In Touch</div>
          <div className="text-main font-bold max-w-[300px] max-max1000:max-w-[90%] text-3xl">
            Kick Start Your Awesome Project Now!
          </div>
          <div className="text-[1rem] w-[350px] mt-5 max-max1000:w-[100%] max-max1000:text-[1.2rem] !text-xl">
            "Now is the perfect time to turn your ideas into reality by starting
            your project with confidence and enthusiasm, creating something
            extraordinary and impactful."
          </div>
        </div>
        <div className="flex flex-col max-max1000:w-full">
          <div className="flex gap-x-4 max-max1000:flex-wrap">
            <div className="max-max1000:w-full w-[300px]">
              <ContactInput
                Value={Name}
                setValue={setName}
                type={"text"}
                Label={"Name"}
              />
            </div>
            <div className="max-max1000:w-full w-[300px]">
              <ContactInput
                Value={Email}
                setValue={setEmail}
                type={"email"}
                Label={"Email"}
              />
            </div>
          </div>
          <div className="w-full">
            <ContactInput
              Value={Topic}
              setValue={setTopic}
              type={"text"}
              Label={"Topic"}
            />
          </div>
          <div className="w-full">
            <ContactTextArea
              Value={Message}
              setValue={setMessage}
              type={"text"}
              Label={"Message"}
            />
          </div>
          <div className="w-full flex justify-end">
            <SendMsg onCLick={onSubmit} />
            {/* <button
              className="bg-white text-sec font-alegreya px-8 py-3 font-bold text-xl rounded-[50px] hover:bg-sec hover:text-white transition-all ease-in-out duration-700"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
              }}
            >
              Send Message
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
