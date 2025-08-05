import React, { useState } from "react";
import ContactInput from "../Inputs/ContactInput";
import ContactTextArea from "../Inputs/ContactTextArea";
import SendMsg from "../Buttons/SendMsg";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsCard = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Topic, setTopic] = useState("");
  const [Message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false); // ✅ error message state

  const service_id = "service_gqe0de9";
  const template_id = "template_12gqbmn";
  const public_key = "hktsWWWvxGeJ-Px0q";

  const onSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if any field is empty
    if (!Name || !Email || !Topic || !Message) {
      setErrorMsg(true);
      toast.error("❌ Please fill in all required fields."); // 🔥 Added toast here
      setTimeout(() => {
        setErrorMsg(false);
      }, 3000);
      return;
    }

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
        setSuccessMsg(true);
        toast.success("✅ Message sent successfully!"); // 🔥 Added toast here

        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
      },
      (err) => {
        console.log(err);
        toast.error("❌ Failed to send message. Please try again."); // 🔥 Added toast here
      }
    );
  };

  return (
    <div className="w-full flex flex-col items-center bg-[aliceblue] relative overflow-hidden">
      {/* ✅ Toast container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* ✅ Your old code remains unchanged below */}

      {/* Animated blurred blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-gradient-to-tr from-pink-400 via-yellow-200 to-blue-400 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="text-6xl font-bold font-alegreya py-10 pt-14 px-8 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <span className="inline-block mr-2">Let&apos;s</span>
        <motion.span
          className="inline-block text-main"
          initial={{ scale: 0.8, rotate: -10, color: "#0ea5e9" }}
          animate={{ scale: 1.1, rotate: 0, color: "#e11d48" }}
          transition={{
            duration: 1.2,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Tackle
        </motion.span>
        <span className="inline-block ml-2">This Challenge as a</span>{" "}
        <motion.span
          className="font-dacingscript text-7xl text-sec inline-block ml-2"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 1)" }}
          initial={{ scale: 0.9, rotate: 0 }}
          animate={{ scale: 1.1, rotate: 2 }}
          transition={{
            duration: 1.5,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Team
        </motion.span>
        <motion.span
          className="inline-block text-5xl text-main ml-2"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1.2, rotate: 10 }}
          transition={{
            duration: 1.5,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          !
        </motion.span>
      </motion.div>

      <motion.img
        src="/team.jpg"
        className="w-[70%] max-max900:w-[90%] z-10 object-cover border-8 rounded-t-[20px] border-sec rounded-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      />

      <motion.div
        id="contact-us"
        className="-mt-40 min-h-[100px] bg-transparent pt-[200px] rounded-t-[30px] w-full flex items-start justify-center gap-x-10 gap-y-10 px-20 py-10 max-max1000:flex-col max-max1000:items-center border-8 border-sec z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="flex flex-col items-start text-black font-alegreya text-2xl pt-4 max-max1000:w-full"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="text-2xl">Get In Touch</div>
          <div className="text-main font-bold max-w-[300px] max-max1000:max-w-[90%] text-3xl">
            Kick Start Your Awesome Project Now!
          </div>
          <div className="text-[1rem] w-[350px] mt-5 max-max1000:w-[100%] max-max1000:text-[1.2rem] !text-xl">
            &quot;Now is the perfect time to turn your ideas into reality by
            starting your project with confidence and enthusiasm, creating
            something extraordinary and impactful.&quot;
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col max-max1000:w-full"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="flex gap-x-4 max-max1000:flex-wrap">
            <div className="max-max1000:w-full w-[300px]">
              <ContactInput
                Value={Name}
                setValue={setName}
                type={"text"}
                Label={"Name *"}
              />
            </div>
            <div className="max-max1000:w-full w-[300px]">
              <ContactInput
                Value={Email}
                setValue={setEmail}
                type={"email"}
                Label={"Email *"}
              />
            </div>
          </div>

          <div className="w-full">
            <ContactInput
              Value={Topic}
              setValue={setTopic}
              type={"text"}
              Label={"Topic *"}
            />
          </div>

          <div className="w-full">
            <ContactTextArea
              Value={Message}
              setValue={setMessage}
              type={"text"}
              Label={"Message *"}
            />
          </div>

          <div className="w-full flex flex-col justify-end">
            <SendMsg onCLick={onSubmit} />

            {/* ✅ Error message */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-red-600 font-bold text-center"
                >
                  ❌ Please fill in all required fields.
                </motion.div>
              )}
            </AnimatePresence>

            {/* ✅ Success message */}
            <AnimatePresence>
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-green-600 font-bold text-center"
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsCard;
