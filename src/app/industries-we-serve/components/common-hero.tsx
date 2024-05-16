"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export interface AccordingDataPropsTypes {
  question: string;
  answer: string;
}

export interface CommonHeroPros {
  direction?: string;
  data: {
    title?: string;
    subtitle?: string;
    image: {
      src: StaticImageData;
      alt: string;
    };
    faq: {
      question: string;
      answer: string;
    }[];
  };
}

function CommonHero({ direction, data }: CommonHeroPros) {
  return (
    <section>
      <h2 className="text-black text-center lg:text-5xl text-3xl font-bold">
        {data.title}
      </h2>
      <div className="grid lg:grid-cols-5 gap-8 items-center md:mt-20 mt-10">
        <div
          className={`lg:col-span-2 col-span-1 w-full flex ${
            direction
              ? "lg:justify-end justify-center"
              : "lg:justify-start justify-center"
          } ${direction && "order-2 "}`}
        >
          <Image
            src={data.image.src}
            alt={data.image.alt}
            className="object-cover"
          />
        </div>
        <div className={`lg:col-span-3 col-span-1 ${direction && "order-1"}`}>
          <p className="text-black sm:text-xl text-lg">{data.subtitle}</p>
          <div className="mt-16">
            <Accordin Data={data.faq} />
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
      <h2 className="text-lg font-bold text-black border-b border-b-gray-300 py-4 flex gap-2 items-center">
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
