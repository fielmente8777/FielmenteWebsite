"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export interface AccordingDataPropsTypes {
  question?: string;
  body?: {
    type?: string;
    header?: string;
    list?: string[];
    footer?: string;
  };
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
    faq: AccordingDataPropsTypes[];
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
          <p className="text-black sm:text-xl text-lg lg:text-start text-center">{data.subtitle}</p>
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
  body,
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
        {body?.header && (
          <p className="text-lg text-black py-4 px-5">{body.header}</p>
        )}

        {body?.list && body?.type == "number" && (
          <ul className="list-decimal list-inside text-black flex flex-col text-lg">
            {body?.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {body?.list && body?.type == "list" && (
          <ul className="list-disc list-inside text-black flex flex-col text-lg mt-6">
            {body?.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {body?.list && body?.type == "null" && (
          <ul className="list-inside text-black flex flex-col gap-6 text-lg mt-6">
            {body?.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {body?.footer && (
          <p className="mt-5 text-lg text-black px-5">{body.footer}</p>
        )}
      </div>
    </div>
  );
};

export default CommonHero;
