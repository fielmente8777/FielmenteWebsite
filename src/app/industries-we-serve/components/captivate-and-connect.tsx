import Link from "next/link";
import React from "react";

import Image from "next/image";

function CaptivateAndConnect({
  title,
  subtitle,
  leftContent,
  rightContent,
  items,
}: any) {
  return (
    <section>
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
        <h2 className="sm:text-5xl text-3xl font-bold text-center text-black">
          {title}
        </h2>
        <p className="text-center sm:text-xl text-lg text-gray-primary">
          {subtitle}
        </p>
      </div>

      <div className="lg:mt-20 mt-10 lg:grid grid-cols-2 lg:gap-20 items-center flex flex-col-reverse gap-10 ">
        <div className=" bg-[#2CBCA5] p-16 rounded-xl">
          <h2 className="sm:text-5xl text-3xl text-black font-semibold">
            {leftContent?.title}
          </h2>
          <div className="flex mt-10 lg:justify-start justify-center">
            <Link
              href={"/contact"}
              className="bg-[#262C2E] px-10 py-4 rounded-lg sm:text-xl text-lg font-semibold hover:bg-black duration-200"
            >
              Contact us
            </Link>
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
            <p className="text-gray-primary text-[1.5rem]">
              {rightContent?.subtitleText}
            </p>
          )}
          {rightContent?.subtitle && (
            <ul className="list-disc ps-6">
              {rightContent?.subtitle?.map((item: any, index: number) => (
                <li key={index} className="text-gray-primary text-[1.5rem]">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 lg:gap-y-28 gap-y-8">
        {items?.map((item: any, index: number) => (
          <GrowthCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

const GrowthCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="flex flex-col gap-8 bg-white p-10 shadow-md rounded-xl">
      <Image
        src={image.src}
        alt="Keyword"
        width={65}
        className="object-contain"
      />
      <h2 className="text-black text-2xl font-semibold">{title}</h2>
      <p className="sm:text-xl text-lg text-gray-primary">{subtitle}</p>
    </div>
  );
};

export default CaptivateAndConnect;
