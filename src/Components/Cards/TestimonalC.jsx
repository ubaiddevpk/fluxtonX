import React from "react";
import { FaStar } from "react-icons/fa";
import { PiQuotesBold } from "react-icons/pi";

const TestimonalC = () => {
  return (
    <div className="min-h-[250px] max-w-[350px] mx-4">
      <div className="shadow-xl border-[1px] border-black rounded-[50px] text-center flex flex-col items-center relative gap-y-5 p-6">
        <div className="absolute top-0 left-0 rounded-[49px] h-full w-full bg-[#171a2b] opacity-90 -z-10"></div>
        <PiQuotesBold className="text-sec text-4xl z-10" />
        <div className="line-clamp-4 text-white z-10 font-alegreya">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo
          quasi, iusto voluptatum tempora alias hic, perspiciatis saepe ducimus
          cum perferendis earum velit ex, ipsam eius molestias id neque dolores.
        </div>
        <div className="w-full h-[3px] bg-sec opacity-70 rounded-full"></div>
        <div className="flex items-center justify-center gap-x-2 text-sec">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex flex-col justify-center w-full px-2 gap-x-5 font-alegreya items-center">
          <div className="text-[1.3rem]">Zain Ul Basit</div>
          <div className="text-[1rem] text-sec">Developer</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-6 relative">
        {/* image */}
        <img
          src="/test.jpg"
          className="rounded-full h-[60px] w-[60px] object-cover z-10"
          alt=""
        />
        {/* lines */}
        <div
          className="bg-gradient-to-r from-sec to-main absolute h-[3px] top-1/2 translate-y-1/2 left-0 rounded-full"
          style={{ width: "calc(50% - 31px)" }}
        ></div>
        <div
          className="bg-gradient-to-r from-main to-sec absolute h-[3px] top-1/2 translate-y-1/2 right-0 rounded-full"
          style={{ width: "calc(50% - 31px)" }}
        ></div>
      </div>
    </div>
  );
};

export default TestimonalC;
