"use client";
import Image from "next/image";
import React from "react";
import Mobile from "../../../../../public/images/online-mobile.webp";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Food from "../../../../../public/images/people-taking-photos-food-1536x1024.webp";
import Keyword from "../../../../../public/images/keywords.webp";
import WantToJoin from "../../components/want-to-join";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Brand1 from "../../../../../public/images/Wah-Malvan-PNG.png";

import GoogleAds1 from "../../../../../public/images/HOTEL-GOOGLE-ADS-02.webp";

function page() {
  return (
    <section>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-20">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                HOTEL GOOGLE ADS
              </h2>
              <h2 className="md:text-5xl md:!leading-[6.5rem] text-3xl text-black font-medium md:mt-20 mt-5">
                Excel at Google Ads with India’s Leading Hotel Marketing Agency.
              </h2>
              <p className="text-gray-primary text-xl md:mt-20 mt-5">
                Drive Revenue with Hotel Google Ads. With the Expertise of
                Fielmente- One of the best Hotel Marketing Companies in India to
                Maximize Your Online Visibility and Generate High-Conversion
                Bookings.
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
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:col-span-2 md:max-w-[400px] relative aspect-[4/2.5]">
              <Image
                src={Food}
                alt="food"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-5xl w-[80%] text-black font-bold">
                  What We Offer: Paid Ads for Hotel
                </h2>
                <p className="text-xl text-gray-primary">
                  Paid Ads Drive Immediate Visibility, Targeted Reach, and
                  High-Converting Bookings, Amplifying Your Online Presence and
                  Revenue Potential.
                </p>
              </div>

              <div className="flex">
                <Link
                  href={"/contact"}
                  className="border-b-2 border-b-[#6664E4] text-black text-xl font-medium pb-1 hover:text-[#6664E4] duration-300 flex items-center gap-2"
                >
                  Contact us <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-32 border-b border-b-gray-300 pb-16">
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
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <section>
            <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
              <h2 className="text-5xl font-bold text-center text-black">
                Enhance Your Hotel’s Digital Presence, with Targeted Ads
                Tailored for Hotels.
              </h2>
              <p className="text-center text-xl text-gray-primary">
                Staying on Top for Maximizing Online Success: From increasing
                bookings to dominating search rankings, our tailored SEO
                strategies for hotels drive targeted traffic, boost visibility,
                and skyrocket revenue. Experience the power of hotel SEO today!
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
                  restaurants. Engage a wider audience through captivating
                  restaurant social media posts and effective social media
                  marketing strategies.
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
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="grid grid-cols-4">
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="max-w-[610px] mx-auto flex flex-col gap-4">
            <h2 className="text-center text-black text-5xl font-bold">
              Why we are different?
            </h2>
            <p className="text-center text-gray-primary text-xl">
              Optimise Your Hotel’s Online Presence with Fielmente’s Expert
              On-Page SEO Strategies. Enhancing Search Rankings and Driving More
              Traffic to Your Website.
            </p>
          </div>

          <div className="mt-20">
            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width">
          <WantToJoin />
        </div>
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

export default page;
