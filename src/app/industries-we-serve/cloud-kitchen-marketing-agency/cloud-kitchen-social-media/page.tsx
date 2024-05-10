"use client";

import Image from "next/image";
import React, { useState } from "react";
import Mobile from "../../../../../public/images/online-mobile.webp";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialCircle from "../../../../../public/images/social-circle.webp";
import Keyword from "../../../../../public/images/keywords.webp";
import Donner from "../../../../../public/images/doner.webp";

const Faq = [
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
];

function page() {
  return (
    <div>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <section>
            <div className="grid lg:grid-cols-2 gap-5 mt-20">
              <div>
                <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl tracking-[0.3rem]">
                  CLOUD KITCHEN SOCIAL MEDIA MARKETING
                </h2>
                <h2 className="md:text-6xl text-3xl text-black font-semibold md:mt-20 mt-5">
                  Make online presence With more impactful creatives.
                </h2>
                <p className="text-gray-primary text-xl md:mt-20 mt-5">
                  Enhance Your Online Presence with Compelling Restaurant Social
                  Media Posts or Campaigns. Our Expert Social Media Management
                  Team Delivers Engaging Creatives for Effective Audience
                  Engagement.
                </p>
              </div>
              <div className="">
                <div className="relative max-w-[500px] mx-auto aspect-[4/4]">
                  <Image
                    src={Mobile}
                    alt="mobile"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient-second">
        <div className="max-width">
          <section>
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 ">
                <div className="relative lg:max-w-[400px] mx-auto aspect-[4/4]">
                  <Image
                    src={SocialCircle}
                    alt="socail-icons"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <h2 className="text-black md:text-[4.8rem] md:leading-[6rem] text-3xl font-semibold">
                  Unlock the Benefits with The Power of Social Media Presence
                  for Your Restaurant.
                </h2>
                <p className="text-xl text-gray-primary mt-10">
                  Our Restaurant Social Media Management Ensures a Dynamic
                  Presence, Engaging Posts, and Best-in-Class Campaigns to Keep
                  Your Hotel Ahead of the Curve.
                </p>

                <div className="flex">
                  <Link
                    href={"/contact"}
                    className="border-b-2 border-b-[#6664E4] text-black text-xl font-medium mt-10 pb-1 hover:text-[#6664E4] duration-300 flex items-center gap-2"
                  >
                    Contact us <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mt-20 border-b border-b-gray-300 pb-16">
              <div className="flex flex-col gap-2">
                <h2 className="text-6xl font-normal text-black text-center">
                  3K+
                </h2>
                <p className="text-lg font-medium text-gray-primary text-center">
                  COMPLETED PROJECTS
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-6xl font-normal text-black text-center">
                  89%
                </h2>
                <p className="text-lg font-medium text-gray-primary text-center">
                  SATISFACTION RATE
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-6xl font-normal text-black text-center">
                  15
                </h2>
                <p className="text-lg font-medium text-gray-primary text-center">
                  YEARS OF EXPERIENCE
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <section>
            <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
              <h2 className="text-5xl font-bold text-center text-black">
                Captivate and Connect
              </h2>
              <p className="text-center text-xl text-gray-primary">
                Harness the Power of Restaurant Social Media Management to
                Engage Guests, Cultivate Relationships, and Create Unforgettable
                Experiences.
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
              <div className="flex flex-col gap-8 max-w-[500px] p-6">
                <Image
                  src={Keyword}
                  alt="Keyword"
                  width={65}
                  className="object-contain"
                />
                <h2 className="text-black text-4xl font-semibold">
                  Reach a Wider Audience
                </h2>
                <p className="text-lg text-gray-primary">
                  Expand your reach with Fielmente’s social media management for
                  restaurants. Engage a wider audience through captivating
                  restaurant social media posts and effective social media
                  marketing strategies.
                </p>
              </div>
            </div>

            <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-x-12 gap-y-28">
              <GrowthCard />
              <GrowthCard />
              <GrowthCard />
              <GrowthCard />
              <GrowthCard />
              <GrowthCard />
            </div>
          </section>
        </div>
      </div>

      <div>
        <div className="max-width">
          <section>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
              <div className="relative aspect-[4/5]">
                <Image
                  src={Donner}
                  alt="donner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src={Donner}
                  alt="donner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src={Donner}
                  alt="donner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src={Donner}
                  alt="donner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width">
          <section className="grid lg:grid-cols-2 items-center">
            <div className="p-20">
              <h2 className="text-5xl font-bold">Want to join?</h2>
              <p className="text-xl text-gray-primary mt-6">
                Find a team of digital marketers you can rely on. Every day, we
                build trust through communication, transparency, and results.
              </p>
            </div>
            <div className="lg:p-20">
              <div className="flex justify-center">
                <Link
                  href={"/contact"}
                  className="bg-[#2CBCA5] px-12 py-4 rounded-xl text-xl hover:bg-white hover:text-black duration-300"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="text-5xl font-bold text-black">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {Faq.map((item, index) => (
                <Accordin {...item} key={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
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
      <h2 className="text-black text-4xl font-medium">
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

const Accordin = ({ question, answer, items }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2
        className="text-black text-xl font-semibold flex gap-2"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xl font-bold cursor-pointer">+</span>
        {question}
      </h2>
      <div
        className="flex flex-col gap-5"
        style={{
          maxHeight: open ? "1200px" : "0px",
          overflow: "hidden",
          transition: "all 0.8s linear",
        }}
      >
        {answer && <p className="text-black text-lg mt-8 px-10">{answer}</p>}

        {items.length > 0 && (
          <ul className="list-disc list-inside">
            {items.map((item: any, index: number) => {
              return (
                <li className="text-black text-lg" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default page;
