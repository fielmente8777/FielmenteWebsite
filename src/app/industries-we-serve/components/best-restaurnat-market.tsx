import React from "react";
import Food from "../../../../public/images/people-taking-photos-food-1536x1024.webp";
import Image from "next/image";

function BestRestauratMarket() {
  return (
    <div className="grid lg:grid-cols-5 items-center gap-8">
      <div className="lg:col-span-3 flex flex-col md:gap-10 gap-5">
        <h2 className="sm:text-5xl text-3xl text-black font-semibold">
          Best Restaurant Marketing Agency in India
        </h2>
        <p className="sm:text-xl text-lg text-gray-primary">
          We at Fielmente create ROI-driven social media campaigns and content
          for your for your restaurant business.{" "}
        </p>
        <p className="sm:text-xl text-lg text-gray-primary">
          The restaurant business is constantly changing and evolving but one
          thing that has remained the same over the last few years are diners
          turn to the internet to help them choose where to eat.{" "}
        </p>
      </div>
      <div className="lg:col-span-2 w-full flex lg:justify-end justify-center">
        <div className=" md:max-w-[400px] w-full aspect-[4/2.5]">
          <Image src={Food} alt="food" className="object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default BestRestauratMarket;
