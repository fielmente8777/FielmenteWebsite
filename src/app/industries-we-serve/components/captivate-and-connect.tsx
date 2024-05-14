import Link from "next/link";
import React from "react";
import Keyword from "../../../../public/images/keywords.webp";
import Image from "next/image";

function CaptivateAndConnect() {
  return (
    <section>
      <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
        <h2 className="text-5xl font-bold text-center text-black">
          Captivate and Connect
        </h2>
        <p className="text-center text-xl text-gray-primary">
          Harness the Power of Restaurant Social Media Management to Engage
          Guests, Cultivate Relationships, and Create Unforgettable Experiences.
        </p>
      </div>

      <div className="mt-20 lg:grid grid-cols-2 gap-20 items-center">
        <div className=" bg-[#2CBCA5] p-16 rounded-xl">
          <h2 className="sm:text-5xl text-3xl text-black font-semibold">
            Accelerate Your Restaurant’s Growth with Social Media.
          </h2>
          <div className="flex mt-10">
            <Link
              href={"/contact"}
              className="bg-[#262C2E] px-10 py-4 rounded-lg text-xl font-semibold hover:bg-black duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-[400px] p-6">
          <Image
            src={Keyword}
            alt="Keyword"
            width={65}
            className="object-contain"
          />
          <h2 className="text-black text-2xl font-semibold">
            Reach a Wider Audience
          </h2>
          <p className="text-lg text-gray-primary">
            Expand your reach with Fielmente’s social media management for
            restaurants. Engage a wider audience through captivating restaurant
            social media posts and effective social media marketing strategies.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-x-12 gap-y-28">
        <GrowthCard />
        <GrowthCard />
        <GrowthCard />
        <GrowthCard />
        <GrowthCard />
        <GrowthCard />
      </div>
    </section>
  );
}

const GrowthCard = () => {
  return (
    <div className="flex flex-col gap-8 bg-white p-10 shadow-md rounded-xl">
      <Image
        src={Keyword}
        alt="Keyword"
        width={65}
        className="object-contain"
      />
      <h2 className="text-black text-2xl font-semibold">
        Reach a Wider Audience
      </h2>
      <p className="text-xl text-gray-primary">
        Expand your reach with Fielmente’s social media management for
        restaurants. Engage a wider audience through captivating restaurant
        social media posts and effective social media marketing strategies.
      </p>
    </div>
  );
};

export default CaptivateAndConnect;
