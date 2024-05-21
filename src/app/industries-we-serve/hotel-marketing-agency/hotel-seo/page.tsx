"use client";
import Image from "next/image";
import React from "react";
import Mobile from "../../../../../public/images/online-mobile.webp";
import LineDesign from "../../../../../public/images/4tg4fc4.webp";
import Bookingman from "../../../../../public/images/Bookingman.webp";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Food from "../../../../../public/images/people-taking-photos-food-1536x1024.webp";
import WantToJoin from "../../components/want-to-join";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Brand1 from "../../../../../public/images/Wah-Malvan-PNG.png";

import Hotelseo1 from "../../../../../public/images/HOTEL-SEO-02.webp";
import Hotelseo2 from "../../../../../public/images/HOTEL-SEO-03.webp";
import Hotelseo3 from "../../../../../public/images/HOTEL-SEO-04.webp";
import Hotelseo4 from "../../../../../public/images/HOTEL-SEO-05.webp";

import CaptivateAndConnect from "../../components/captivate-and-connect";

import Keyword from "../../../../../public/images/keywords.webp";
import Promote from "../../../../../public/images/3rf.webp";
import Hoursglass from "../../../../../public/images/hourglass.webp";
import Contentwriting from "../../../../../public/images/content-writing.webp";
import { Accordin } from "../../components/common-hero";

const faq = [
  {
    question: "How to do hotel SEO?",
    body: {
      type: "list",
      header:
        "Hotel SEO is all about optimizing your website for search engines. It helps to improve its visibility in search results. It includes:",
      list: [
        "Using relevant keywords,",
        "Optimizing meta tags,",
        "Creating high-quality content,",
        "Improving website speed,",
        "Developing backlinks from reputable sources and ensure your site is mobile-friendly.",
      ],
    },
  },
  {
    question: "How to do SEO for a hotel website?",
    body: {
      type: "number",
      header: "For doing SEO for Hotel you should follow the steps:",
      list: [
        "  Optimize your hotel website by conducting keyword research, ",
        "Optimize meta titles and descriptions,",
        "  Create high-quality content,",
        "Improve site speed, and",
        "  Acquire quality backlinks. ",
      ],
      footer:
        "Local SEO is also very important. Also, create an account and optimize your Google My Business listing.",
    },
  },
  {
    question: "What are SEO and SEM for hotels?",
    body: {
      type: "null",
      list: [
        "SEO (Search Engine Optimization) for hotels is improving organic search rankings.",

        "SEM (Search Engine Marketing) involves paid advertising to gain immediate visibility on search engines.",

        "Both SEO and SEM help hotels attract more online visitors and potential guests.",
      ],
    },
  },
  {
    question: "Why is SEO important for hotels?",
    body: {
      type: "list",
      header: "SEO is important for Hotels for the following reason:",
      list: [
        " SEO boosts the online visibility. It further makes it easier for potential guests to find.",
        "SEO increases organic website traffic.",
        "It enhances brand exposure.",
      ],
      footer: `By ranking higher on search engines, hotels can attract more bookings and revenue.`,
    },
  },
  {
    question: "What does SEO stand for in a hotel?",
    body: {
      type: "null",
      list: [
        "  In a hotel context, SEO stands for Search Engine Optimization.",

        "It’s the process of boosting a hotel website’s online visibility. By optimizing various factors to improve its ranking on search engine results pages.",
      ],
    },
  },
];

const capitavteAndConnectData = {
  title:
    "Improve Your Hotel’s Digital Presence, with our Customized SEO Strategies",
  subtitle:
    "Discover Why SEO is Crucial for Maximizing Online Success: From increasing bookings to dominating search rankings, our tailored SEO strategies boost targeted traffic, boost visibility, and skyrocket revenue. ",
  leftContent: {
    title: "Save more and get visibility for your business.",
  },
  rightContent: {
    title: "Advantages of Local SEO for Your Hotel",
    icon: Keyword,
    subtitle: `Increased online visibility for local searches.
      Targeted exposure to potential guests in your area.
      Improved rankings on local search engine results in pages.
      Enhanced brand awareness within your community.
      Higher chances of attracting qualified leads and direct bookings.
      Competitive edge over other hotels in your vicinity.
      Maximized occupancy rates and revenue potential.
      Better customer engagement and personalized experiences.
      Cost-effective marketing strategy with high ROI.
      Establishing a solid local online presence for long-term growth.`,
  },

  items: [
    {
      title: "Boost Visibility",
      subtitle:
        "Looking to enhance your hotel’s online presence? Choose Fielmente. It ensures your hotel ranks high on search engines with the customized strategies.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Drive Bookings",
      subtitle:
        "Fielmente- The Best Hotel SEO Agency gives customized Strategies and Expertise Designed for Hotels to Drive More Reservations and Increase Your Profits.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Stay Competitive",
      subtitle: `Fielmente gives cutting-Edge Strategies. Empower Your Hotel to Outrank Competitors, Attract More Guests, and Achieve Lasting Success in the Digital Landscape.`,
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "Targetted Traffic",
      subtitle:
        "Our Expert Strategies and Services Drive Qualified Visitors to Your Hotel Website. Boosting Visibility and Fueling Bookings for Unmatched Success in the Hospitality Industry.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Enhanced User Experience ",
      subtitle:
        "Fielmente provides the best strategies and Services. Boost your Website’s User Experience by ensuring Smooth Navigation, Fast Load Times, and Engaging Content for an Unforgettable Stay at Your Hotel.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Cost-Effective Marketing",
      subtitle:
        "Our Result-Driven Strategies and Services Deliver Maximum Return on Investment. Boost Your Online Presence, Driving Bookings, and Optimizing Marketing Budgets for Lasting Success.",
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },
  ],
};

function page() {
  return (
    <section>
      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 md:mt-20">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                HOTEL SEO
              </h2>
              <h2 className="md:text-5xl md:!leading-[6.5rem] text-3xl text-black font-medium md:mt-20 mt-5">
                Skyrocket Your Hotel’s Success with Fielmente’s SEO Strategies!
              </h2>
              <p className="text-gray-primary text-xl md:mt-20 mt-5">
                Enhance the Potential of Your Hotel with our Targeted SEO
                Services and a Winning Strategy.
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
            <div className="lg:col-span-2 md:max-w-[380px] relative aspect-[4/4.6]">
              <Image
                src={Bookingman}
                alt="booking-man"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-5xl w-[80%] text-black font-bold">
                  What We Offer: Local SEO for Hotels
                </h2>
                <p className="text-xl text-gray-primary">
                  Dominate the Local Market with Specialized SEO Solutions
                  Tailored Exclusively for Hotels, Boosting Your Visibility and
                  Attracting More Guests.
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
              src={Hotelseo1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={Hotelseo2}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={Hotelseo3}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={Hotelseo4}
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

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="text-5xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              <Accordin Data={faq} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
