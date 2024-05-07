"use client";

import Image from "next/image";
import React, { useState } from "react";
import HotelLuxury from "../../../../public/images/rich-luxury-modern-residential.webp";

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

function CommonHero() {
  return (
    <section>
      <h2 className="text-black text-center text-5xl font-bold">
        Why Your Hotel need to Go Online
      </h2>
      <div className="grid grid-cols-5 items-center mt-20">
        <div className="col-span-2 w-full aspect-[4/4]">
          <Image src={HotelLuxury} alt="luxury-hotel" />
        </div>
        <div className="col-span-3">
          <p className="text-black text-lg">
            Unshackle your hotel business’s full potential online! Elevate
            success with India’s top hospitality consultants and the best
            hospitality digital marketing agency. Discover the industries we
            serve and seize growth today!
          </p>
          <div className="mt-16">
            <Accordin Data={Data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Accordin = ({ Data }: { Data: AccordingDataPropsTypes[] }) => {
  return (
    <div className=" flex flex-col gap-5">
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
      <h2 className="text-lg font-semibold text-black border-b border-b-gray-300 py-4 flex gap-2 items-center">
        <span>{openAccordin ? "-" : "+"}</span>
        {question}
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

export default CommonHero;
