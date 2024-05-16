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
import CaptivateAndConnect from "../../components/captivate-and-connect";

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
      title: "Showcase Your Hotel",
      subtitle:
        "With Expert Guidance Create Social Media Posts for your hotels. Highlight the Unique Features, Exquisite Experiences, and Unmatched Hospitality of Your Property.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Drive Bookings",
      subtitle:
        "Utilize our Effective Social Media Management Team to Ignite Interest, Capture Attention, and Convert Potential Guests into Confirmed Bookings.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Reputation Management",
      subtitle: `Our Hotel Social Media Management Ensures Effective Brand Monitoring, Prompt Responses, and Positive Guest Experiences for Optimal Online Reputation.`,
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Visual Appeal",
      subtitle:
        "Capture Attention with Visual Appeal through your Hotel’s Social Media Posts and Campaigns. Our Hotel Social Media Management Expertly Crafts Eye-Catching Visuals, Showcasing the Allure and Beauty of Your Property to Engage and Attract Potential Guests.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Reach a Wider Audience ",
      subtitle:
        "Through Strategic Hotel Social Media Posts and Campaigns, Reach a Wide and Diverse Audience, Amplifying Brand Awareness, and Attracting New Guests.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Calendar Ideation",
      subtitle:
        "At Fielmente, we combine the power of unrestrained voice and strategic social engineering to create compelling digital content (static, audio, dynamic, video) for brand awareness. Our meticulous approach includes monthly content calendars with precise schedules, ensuring impactful and timely engagement with your audience.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Scheduling & publishing Content:",
      subtitle:
        "Streamline Social Media Content Delivery with Fielmente. Utilize Publishing and Scheduling Solutions for Hotel Social Media Posts, Empowering Your Team to Enhance Strategy and Build Stronger Connections with Consumers.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Linktree Account Setup",
      subtitle:
        "Elevate Your Social Media Management with Linktree. Share Multiple Links in One Tap, Maximizing Engagement and Effortlessly Connecting Users with Relevant Content.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Social Media Audit",
      subtitle:
        "Conduct a Comprehensive Social Media Platform Audit & Take Remedial Action. Track Data in Google Analytics to Identify Social Traffic, Monitor Campaigns, Referral Traffic, and Conversions from Hotel Social Media Posts.",
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
