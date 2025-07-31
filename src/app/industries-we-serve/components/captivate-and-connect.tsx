"use client";
import React, { useContext } from "react";

import Image from "next/image";
import DataContext from "@/contextApi/DataContext";

function CaptivateAndConnect({
  title,
  subtitle,
  leftContent,
  rightContent,
  items,
}: any) {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <section>
      <div className="flex flex-col gap-5 max-w-[900px] mx-auto">
        <h2 className="sm:text-4xl text-2xl font-bold text-center text-black">
          {title}
        </h2>
        <p className="text-center sm:text-lg text-base text-gray-primary">
          {subtitle}
        </p>
      </div>

      <div className="lg:mt-16 mt-10 lg:grid grid-cols-2 lg:gap-20 items-center flex flex-col-reverse gap-10 ">
        <div className=" bg-[#2CBCA5] p-16 rounded-xl">
          <h2 className="sm:text-5xl/[3.2rem] text-3xl text-black font-semibold">
            {leftContent?.title}
          </h2>
          <div className="flex mt-10 lg:justify-start justify-center">
            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="bg-[#262C2E] text-white px-10 py-3 rounded-lg sm:text-lg text-base font-semibold hover:bg-black duration-200"
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-6 bg-white rounded-2xl">
          <Image
            src={rightContent?.icon}
            alt="Keyword"
            width={65}
            className="object-contain"
          />
          <h2 className="text-black text-2xl font-semibold">
            {rightContent?.title}
          </h2>
          {rightContent?.subtitleText && (
            <p className="text-gray-primary text-[1.3rem]">
              {rightContent?.subtitleText}
            </p>
          )}
          {rightContent?.subtitle && (
            <ul className="list-disc ps-6">
              {rightContent?.subtitle?.map((item: any, index: number) => (
                <li key={index} className="text-gray-primary text-[1.3rem]">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 lg:gap-y-16 gap-y-8">
        {items?.map((item: any, index: number) => (
          <GrowthCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

const GrowthCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="flex flex-col gap-8 bg-white px-7 py-8 shadow-md rounded-xl">
      <Image
        src={image.src}
        alt="Keyword"
        width={65}
        className="object-contain"
      />
      <h2 className="text-black text-xl font-semibold">{title}</h2>
      <p className="sm:text-lg text-base text-gray-primary">{subtitle}</p>
    </div>
  );
};

export default CaptivateAndConnect;
