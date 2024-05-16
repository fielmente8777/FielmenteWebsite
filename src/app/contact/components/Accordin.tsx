"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface AccordingDataPropsTypes {
  question: string;
  answer: string;
}

const Data = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.",
  },
];

function AccordinSection() {
  return (
    <div>
      <h2 className="text-black md:text-5xl text-3xl font-bold text-center">
        How can we help you right now?
      </h2>

      <div className="md:mt-24 mt-8 max-w-[1080px] mx-auto">
        <p className="text-gray-primary text-lg text-center">
          In order to make sure your website is user friendly and optimized for
          Google’s algorithm, our on-site optimization experts clean up the code
          and copy.
        </p>
        <div className="md:mt-16 mt-8">
          <Accordin Data={Data} />
        </div>
      </div>
    </div>
  );
}

export const Accordin = ({ Data }: { Data: AccordingDataPropsTypes[] }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-16 gap-6">
      {Data.map((item, index) => (
        <AccordinContent {...item} key={index} />
      ))}
    </div>
  );
};

export const AccordinContent = ({
  question,
  answer,
}: AccordingDataPropsTypes) => {
  const [openAccordin, setOpenAccordin] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => setOpenAccordin(!openAccordin)}
    >
      <h2 className="text-xl font-bold text-black border-b border-b-gray-300 py-4 flex justify-between items-center">
        {question} <IoIosArrowDown />
      </h2>
      <div
        style={{
          maxHeight: openAccordin ? "1600px" : "0",
          overflow: "hidden",
          transition: "all 0.8s linear",
        }}
      >
        <p className="text-lg text-gray-primary py-4">{answer}</p>
      </div>
    </div>
  );
};

export default AccordinSection;
