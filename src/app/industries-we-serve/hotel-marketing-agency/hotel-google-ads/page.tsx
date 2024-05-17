"use client";
import Image from "next/image";
import React from "react";
import LineDesign from "../../../../../public/images/4tg4fc4.webp";
import Keyboard from "../../../../../public/images/Keyboard.webp";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Keyword from "../../../../../public/images/keywords.webp";
import WantToJoin from "../../components/want-to-join";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Brand1 from "../../../../../public/images/Wah-Malvan-PNG.png";

import GoogleAds1 from "../../../../../public/images/HOTEL-GOOGLE-ADS-02.webp";
import GoogleAds2 from "../../../../../public/images/HOTEL-GOOGLE-ADS-03.webp";
import GoogleAds3 from "../../../../../public/images/HOTEL-GOOGLE-ADS-04.webp";
import GoogleAds4 from "../../../../../public/images/HOTEL-GOOGLE-ADS-05.webp";

import CaptivateAndConnect from "../../components/captivate-and-connect";

const capitavteAndConnectData = {
  title:
    "Enhance Your Hotel’s Digital Presence, with Targeted Ads Tailored for Hotels.",
  subtitle:
    "Staying on Top for Maximizing Online Success: From increasing bookings to dominating search rankings, our tailored SEO strategies for hotels drive targeted traffic, boost visibility, and skyrocket revenue. Experience the power of hotel SEO today!",
  leftContent: {
    title: "Save more and get visibility for your business with google Ads.",
  },
  rightContent: {
    title: "Accelerate Your Hotel’s Growth with Paid Ads.",
    icon: Keyword,
    subtitle: `Paid Ads Drive Immediate Visibility, Targeted Reach, and High-Converting Bookings, Amplifying Your Online Presence and Revenue Potential.`,
  },

  items: [
    {
      title: "Increased Visibility",
      subtitle:
        "Boost your hotel’s online presence with targeted advertising strategies, expanding your reach and capturing the attention of your ideal audience.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Targeted Advertising",
      subtitle:
        "With Fielmente’s expertise, your hotel’s paid ads reach the right audience, maximizing engagement and driving high-quality leads.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Cost-Effective Results",
      subtitle: `Maximize your advertising budget with our cost-effective solutions, driving tangible results and high returns on investment for your hotel.`,
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Drive Direct Bookings",
      subtitle:
        "Fielmente’s tailored paid ads effectively drive direct bookings, empowering your hotel to attract and convert potential guests.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Compete Effectively ",
      subtitle: `Stay ahead of the competition in the hospitality industry by leveraging our powerful paid advertising strategies, positioning your hotel as the top choice for guests

        `,
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Real-Time Optimization",
      subtitle:
        "Benefit from real-time optimization of your paid ads, ensuring continuous improvement and maximum performance for your hotel marketing efforts.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },
  ],
};

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
              <div className="relative max-w-[500px] mx-auto aspect-[4/3]">
                <Image
                  src={LineDesign}
                  alt="Line-design"
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
            <div className="lg:col-span-2 md:max-w-[400px] relative aspect-[4/4.5]">
              <Image
                src={Keyboard}
                alt="Keyboard"
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
          <CaptivateAndConnect {...capitavteAndConnectData} />
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
              src={GoogleAds2}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds3}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds4}
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

export default page;
