"use client";

import Image from "next/image";
import React, { useState } from "react";
import Food from "../../../../public/images/people-taking-photos-food-1536x1024.webp";
import Girlwithchart from "../../../../public/images/Grilwithchart.webp";
import Girlwithcook from "../../../../public/images/Girlwithcook.webp";
import Marketloud from "../../../../public/images/Marketloud.webp";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import keyword from "../../../../public/images/keywords.webp";
import SocialCircle from "../../../../public/images/social-circle.webp";
import Backgrond from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import Form from "@/app/about/components/Form";

import Track from "../../../../public/images/trackandoptimize.webp";
import Enhanced from "../../../../public/images/inhancevisiblity.webp";
import Target from "../../../../public/images/targetingadvertised.webp";
import Costeffective from "../../../../public/images/costeffective.webp";
import Outperform from "../../../../public/images/outperform.webp";
import Local from "../../../../public/images/localtargeting.webp";

import BoostVisibility from "../../../../public/images/boostvisiblity.webp";
import CustomerFeedback from "../../../../public/images/cusomerfeedback.webp";
import Showcasemenu from "../../../../public/images/showcasemenu.webp";
import Customertrust from "../../../../public/images/customertrust.webp";
import Onlineordering from "../../../../public/images/onlineordering.webp";
import Brandidentify from "../../../../public/images/brandidentify.webp";
import { Accordin } from "../components/common-hero";

const faq = [
  {
    question: "Is Cloud Kitchen profitable business?",
    body: {
      type: "null",

      list: [
        " Yes, cloud kitchens can be a profitable business if managed efficiently and strategically.",
        "If you want to run your cloud kitchen business profitable, get on a call with our expert for a free one on one consultation.",
      ],
    },
  },
  {
    question: "Is Cloud Kitchen B2B and B2C?",
    body: {
      type: "null",
      list: [
        "Yes, cloud kitchens can operate as both B2B (Business-to-Business) and B2C (Business-to-Consumer) models, serving food delivery platforms and individual customers directly.",

        "If you want to create a sensational brand of your cloud kitchen?",

        "Connect with our expert cloud kitchen marketing agency, to skyrocket your revenue.",
      ],
    },
  },
  {
    question: "Does Cloud Kitchen needs license in India?",
    body: {
      type: "null",
      header:
        "Yes, cloud kitchens in India require licenses and permits to operate legally. The specific licenses may vary depending on the location and local regulations. It’s essential for cloud kitchen operators to comply with food safety and hygiene guidelines, trade licenses, and other necessary permits.",
    },
  },
  {
    question: "what is the startup cost of Cloud Kitchen?",
    body: {
      type: "number",
      header:
        "The startup cost of a cloud kitchen can be broken down as follows:",
      list: [
        " Kitchen Setup: INR 2,50,000 to INR 10,00,000 depending on the size and location of the kitchen.",
        "Equipment: Approximately INR 3,00,000 to INR 5,00,000 for high-quality kitchen appliances and tools.",
        "Licenses and Permits: Budget around INR 1,00,000 for various licenses and permits required for legal operations.",
        "Staffing: Initial staffing costs may range from INR 1,50,000 to INR 3,00,000, including salaries and training.",
        "Branding and Marketing: Allocate INR 50,000 to INR 1,50,000 for logo design, menu creation, and initial marketing efforts.",
        "Initial Inventory: Plan for INR 1,00,000 to INR 3,00,000 for purchasing ingredients and supplies.",
        "Technology: Invest around INR 50,000 to INR 1,00,000 for online ordering systems and delivery management software.",
        "Utilities and Insurance: Set aside INR 30,000 to INR 50,000 for covering water, electricity, and insurance costs.",
      ],
      footer: `Keep in mind that these figures are approximate and can vary based on various factors.

        Proper financial planning and budgeting are crucial for a successful cloud kitchen startup.`,
    },
  },
  {
    question: "What is required for Cloud Kitchen?",
    body: {
      type: "number",
      header: "To set up a cloud kitchen, you need:",
      list: [
        " Commercial kitchen space.",
        " Essential kitchen equipment.",
        "Licenses and permits.",
        "Online ordering system.",
        "Delivery fleet or partnership.",
        "  Well-curated menu.",
        "   Branding and marketing.",
        "   Skilled staff.",
        "Quality ingredients and suppliers.",
        "Proper packaging and hygiene.",
        " Technology and software.",
        "  Comprehensive financial planning.",
      ],
      footer:
        "To make your process of setting up a cloud kitchen and creating a brand that talks, our cloud kitchen marketing agency is your go to place.",
    },
  },
];

const CardDetails = [
  {
    title: "Customer Feedback",
    subtitle:
      "Update menu and seasonal specials, and promotions or discounts to keep customers informed and excited about offerings.",
    image: {
      src: CustomerFeedback,
      alt: "",
    },
  },

  {
    title: "Menu Presentation",
    subtitle:
      "An organized and visually appealing menu on the website entices customers to explore and order from the cloud kitchen.",
    image: {
      src: Showcasemenu,
      alt: "",
    },
  },
  {
    title: "Search Engine Visibility",
    subtitle: `With our expertise in cloud kitchen SEO services, we can optimize your website to rank higher in search engine results. `,
    image: {
      src: BoostVisibility,
      alt: "",
    },
  },
  {
    title: "Customer Trust",
    subtitle:
      "A website builds trust and credibility among customers, assuring them of the quality and reliability of your cloud kitchen.",
    image: {
      src: Customertrust,
      alt: "",
    },
  },
  {
    title: "Online Ordering",
    subtitle:
      "Provide a convenient and seamless online ordering experience for customers, increasing sales and customer satisfaction.",
    image: {
      src: Onlineordering,
      alt: "Booking",
    },
  },
  {
    title: "Brand Identity",
    subtitle:
      "Establish a strong brand identity showcasing unique offerings through compelling visuals, enticing descriptions, and website design",
    image: {
      src: Brandidentify,
      alt: "Booking",
    },
  },
];

const GoogleAdsCardDetails = [
  {
    title: "Track and Optimize",
    subtitle:
      "Monitor the performance of your ads in real time, making data-driven adjustments to maximize their effectiveness and drive more orders.",
    image: {
      src: Track,
      alt: "Booking",
    },
  },

  {
    title: "Enhanced Visibility",
    subtitle:
      "Increase your cloud kitchen’s visibility by appearing at the top of relevant Google search results, capturing the attention of hungry customers.",
    image: {
      src: Enhanced,
      alt: "Booking",
    },
  },

  {
    title: "Targeted Advertising",
    subtitle: `Reach customers actively searching for food delivery options in your area, targeting specific keywords and locations to maximize relevance.`,
    image: {
      src: Target,
      alt: "Booking",
    },
  },

  {
    title: "Cost-Effective Results",
    subtitle:
      "Set your budget and only pay for clicks or conversions, ensuring you get a measurable return on investment and control your advertising costs.",
    image: {
      src: Costeffective,
      alt: "Booking",
    },
  },
  {
    title: "Outperform Competitors",
    subtitle:
      "Outrank competing cloud kitchens in paid search ads, gaining a competitive edge and increasing the likelihood of attracting customers.",
    image: {
      src: Outperform,
      alt: "Booking",
    },
  },
  {
    title: "Local Targeting",
    subtitle:
      "Focus your ads on specific geographic areas to target customers in proximity to your cloud kitchen, increasing the chances of conversion.",
    image: {
      src: Local,
      alt: "Booking",
    },
  },
];

function page() {
  return (
    <section>
      {/* India’s Best Cloud Kitchen Marketing Agency   */}
      <div className="lg:py-20 py-10">
        <div className="max-width">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:col-span-3 flex flex-col sm:gap-10 gap-5">
              <h2 className="sm:text-5xl text-3xl text-black font-semibold">
                India’s Best Cloud Kitchen Marketing Agency
              </h2>
              <p className="sm:text-xl text-lg text-gray-primary">
                Struggling to achieve your cloud kitchen’s order goals?
              </p>
              <p className="sm:text-xl text-lg text-gray-primary">
                Fielmente, the leading cloud kitchen marketing agency in India,
                has the solution! With our expert services, we’ll boost your
                sales and empower your managers and teams to reach their desired
                goals.
              </p>
              <p className="sm:text-xl text-lg text-gray-primary">
                Ready to see your cloud kitchen thrive like never before?
              </p>
            </div>

            <div className="lg:col-span-2 w-full flex lg:justify-end justify-center">
              <div className=" md:max-w-[400px] w-full relative aspect-[4/2.5] -z-10">
                <Image
                  src={Girlwithchart}
                  alt="food"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      {/* How our Cloud Kitchen Marketing Agency help you to grow  */}
      <div className="lg:py-20 py-10">
        <div className="max-width  mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:col-span-2 md:max-w-[400px] w-full mx-auto relative aspect-[4/2.5]">
              <Image
                src={Girlwithcook}
                alt="Cooking-girl"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-16">
                <h2 className="text-3xl underline text-black font-semibold">
                  How our Cloud Kitchen Marketing Agency help you to grow
                </h2>
                <h2 className="text-4xl text-black font-bold">
                  You focus on cooking and We Grow Your Cloud Kitchen Business
                  through our marketing strategy
                </h2>
              </div>

              <p className="text-xl text-gray-primary">
                Join forces with Fielmente, India’s premier cloud kitchen
                marketing agency. Maximize online orders, boost sales, and
                unleash your business’s full potential. Our expert strategies
                will supercharge your revenue and optimize operations for
                seamless growth.
              </p>

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
        </div>
      </div>

      {/* How our Cloud Kitchen Marketing Agency help you to grow  */}
      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl underline text-black font-semibold">
                  How our Cloud Kitchen Marketing Agency help you to grow
                </h2>
                <p className="text-xl text-gray-primary">
                  Building an online brand organically is a laborious yet
                  rewarding process. Establishing an attractive Food Aggegerator
                  Optimization, an effective marketing plan and social media
                  platforms help you to grow by 10X
                </p>
              </div>

              <p className="text-xl text-gray-primary">
                For business growth, leverage Fielmente, the best cloud kitchen
                marketing agency in India. Let our expert cloud kitchen
                marketing company lead you to success.
              </p>

              <div className="flex">
                <Link
                  href={"/contact"}
                  className="border-b-2 border-b-[#6664E4] text-black text-xl font-medium pb-1 hover:text-[#6664E4] duration-300 flex items-center gap-2"
                >
                  Contact us <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 md:max-w-[400px] relative aspect-[4/2.5]">
              <Image
                src={Marketloud}
                alt="Marketloud"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Milestones*** */}
          <div className="max-w-[1220px] mx-auto grid sm:grid-cols-4 gap-8 mt-32 border-b border-b-gray-300 pb-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-black text-center">
                50L+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-black text-center">
                10K+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-black text-center">
                90 %
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-black text-center">
                10+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Cloud Kitchen Require a Website to expand   */}
      <div className="pb-10">
        <div className="max-width mx-auto">
          <section>
            <h2 className="text-center text-5xl text-black font-bold">
              Why Cloud Kitchen Require a Website to expand
            </h2>
            <div className="mt-32 grid lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
              {CardDetails.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Link
                href={"/contact"}
                className="px-16 py-5 bg-blue-dark text-lg font-bold text-white rounded-full hover:text-black hover:bg-white duration-200"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-28">
              <h2 className="text-center text-5xl text-black font-bold">
                Why Cloud Kitchen Needs Google SEO
              </h2>

              <div className="flex justify-center mt-20">
                <Image
                  src={keyword}
                  alt="keyword"
                  width={300}
                  height={200}
                  className="animate-pulse duration-1000 delay-700"
                />
              </div>

              <div className="flex justify-center mt-16">
                <Link
                  href={"/contact"}
                  className="px-16 py-5 bg-blue-dark text-lg font-bold text-white rounded-full hover:text-black hover:bg-white duration-200"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="mt-28">
              <section>
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 ">
                    <div className="relative lg:max-w-[300px] mx-auto aspect-[4/4]">
                      <Image
                        src={SocialCircle}
                        alt="socail-icons"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h2 className="text-black md:text-[4.8rem] md:leading-[6rem] text-3xl font-bold">
                      Why Cloud Kitchens should have Social media presence
                    </h2>
                    <p className="text-xl text-gray-primary mt-10">
                      Fielmente, the leading cloud kitchen marketing agency
                      knows the power of social media in reaching a wider
                      audience, engaging with customers, and more to it. Here’s
                      why you should invest in a captivating social media
                      presence:
                    </p>
                    <div className="flex justify-center mt-16">
                      <Link
                        href={"/contact"}
                        className="px-16 py-5 bg-blue-dark text-lg font-bold text-white rounded-full hover:text-black hover:bg-white duration-200"
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width  mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 flex flex-col justify-center items-end gap-16">
              <h2 className="md:text-4xl text-3xl text-end font-bold">
                How our Food Influencer Marketing help your cloud kitchen to
                grow
              </h2>

              <div className="mt-5">
                <Link
                  href={"/contact"}
                  className="bg-[#50af9b] px-16 py-6 text-lg font-bold rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:col-span-3 grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
              {InfluencerCardDetails.map((item, index) => (
                <InfluencerCard {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="py-20 "
          style={{
            backgroundImage: `url(${Backgrond.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="max-width px-8">
            <h2 className="text-center md:text-5xl text-3xl font-bold">
              Why a Cloud Kitchen Needs Google Ads
            </h2>

            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-6 mt-20">
              {GoogleAdsCardDetails.map((item, index) => (
                <PerformaceCard key={index} {...item} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                href={"/contact"}
                className="bg-blue-dark px-16 py-4 text-xl font-bold rounded-full hover:bg-white hover:text-black duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-blue-dark">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="text-5xl font-bold text-black">
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

const Card = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-[#E8FFF9] rounded-2xl p-6 shadow-md">
      <div className="flex justify-center">
        <Image src={image.src} alt="boost-visiblity" width={140} />
      </div>

      <h2 className="text-3xl font-semibold text-black text-center">{title}</h2>
      <p className="text-gray-primary text-lg text-center mt-4">{subtitle}</p>
    </div>
  );
};

const InfluencerCard = ({ title, subtitle, icon }: any) => {
  return (
    <div className="p-5 rounded-xl bg-[#F6D27C]">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl text-black font-semibold">{title}</h2>
      </div>

      <p className="text-black text-sm mt-4">{subtitle}</p>
    </div>
  );
};

const Trust = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="40"
      viewBox="0 0 42 40"
      fill="none"
      className="two_elementor_element"
    >
      <path
        d="M12.9694 2.72641C12.6584 2.18638 13.4783 1.71294 13.7896 2.25287L16.4366 6.8376C16.4994 6.94634 16.5165 7.07555 16.484 7.19686C16.4516 7.31816 16.3724 7.42163 16.2637 7.48455C16.0388 7.61354 15.7484 7.53986 15.6167 7.31114L12.9694 2.72641ZM7.61854 8.42491L12.2023 11.0721C12.4275 11.2012 12.7179 11.1273 12.8492 10.8987C12.8803 10.8448 12.9005 10.7854 12.9086 10.7237C12.9168 10.662 12.9127 10.5994 12.8966 10.5393C12.8805 10.4792 12.8527 10.4229 12.8148 10.3736C12.777 10.3242 12.7297 10.2828 12.6759 10.2517L8.09208 7.60473C7.55225 7.29343 7.07833 8.11351 7.61854 8.42491ZM21.4005 5.76067V0.467527C21.4005 -0.156032 20.4534 -0.155653 20.4534 0.467527V5.76067C20.4534 6.38432 21.4005 6.3847 21.4005 5.76067ZM29.4148 11.1355C29.4979 11.1353 29.5795 11.1135 29.6515 11.0721L34.2366 8.42491C34.7759 8.11351 34.3029 7.29305 33.7626 7.60483L29.178 10.2518C28.7578 10.4943 28.9361 11.1355 29.4148 11.1355ZM10.9127 15.7523L7.562 13.8183C7.02927 13.5109 6.33771 13.694 6.02915 14.2287L0.149858 24.4135C-0.158985 24.9485 0.0249379 25.637 0.560039 25.946L3.91072 27.881C4.44393 28.1889 5.13473 28.0048 5.44357 27.4699L11.3238 17.2849C11.6312 16.7522 11.4462 16.0602 10.9127 15.7523ZM25.8273 7.54791C25.99 7.54791 26.1501 7.46267 26.2374 7.31114L28.8844 2.72632C29.1961 2.18676 28.3762 1.71265 28.0641 2.25278L25.417 6.8375C25.2336 7.15544 25.4667 7.54791 25.8273 7.54791ZM19.3052 36.6041L18.433 37.8448C17.3983 39.321 19.6223 40.8792 20.656 39.4088L21.5281 38.1682C22.5622 36.6971 20.3406 35.1317 19.3052 36.6041ZM22.2868 18.2956C20.4562 17.8925 19.3746 18.0441 17.9278 19.2313C17.2568 19.7818 16.4942 20.5472 15.8701 21.1619L14.8827 22.1308L14.689 26.2022C14.6764 26.4677 14.709 26.824 14.9566 26.9796C15.3911 27.2524 16.2378 26.8916 16.6289 26.6804C17.4568 26.2333 18.0667 24.5174 18.5575 23.5915C18.5968 23.5178 18.659 23.4591 18.7348 23.4241C20.1484 22.7717 21.6332 21.9041 23.1738 22.796L32.3643 28.1169L35.0949 26.722L30.1369 18.1328C27.4722 18.9296 24.9752 18.8875 22.2868 18.2956ZM32.1592 28.8828L22.7899 23.4589C21.615 22.7787 20.339 23.5112 19.2021 24.0511C18.9574 24.2211 18.2815 26.6573 16.9921 27.3538C16.3039 27.7254 15.2805 28.087 14.5483 27.6268C14.0457 27.3109 13.8975 26.7295 13.9243 26.1662L14.1252 21.9431C14.1298 21.8459 14.1716 21.7537 14.2414 21.6858L16.2158 19.7525L11.7119 18.1435L6.68804 26.8445L9.75989 30.68L10.8157 29.1805C11.5533 28.1327 12.81 28.0042 13.7662 28.6761C14.2211 28.9956 14.4523 29.3588 14.634 29.8634L14.7343 29.7751C16.1979 28.4854 18.51 29.9094 18.2234 31.7147L18.2049 31.8307L18.3219 31.8194C19.9236 31.6651 21.4475 33.4513 20.3575 35.1065L20.2686 35.2415L20.4302 35.2474C21.8822 35.2997 23.0856 36.8358 22.3388 38.3031L22.2999 38.3797L24.5535 39.6911C26.1074 40.5953 27.4678 38.2511 25.9315 37.3487L23.3986 35.8736C22.9634 35.6203 23.3498 34.9598 23.7833 35.2123L27.0973 37.1416C28.6507 38.0456 30.0127 35.7011 28.4752 34.7991L25.3721 32.9926C24.938 32.7399 25.3208 32.0776 25.7569 32.3313L29.8417 34.7095C31.3967 35.6166 32.7659 33.2658 31.2098 32.3599L30.3873 31.8817L27.3456 30.1105C26.9115 29.8577 27.2954 29.1954 27.7316 29.4495L30.7946 31.2327C32.3481 32.1369 33.7155 29.7837 32.1592 28.8828ZM41.704 24.4135L35.8246 14.2287C35.5157 13.6935 34.8246 13.5111 34.2922 13.8183L30.9416 15.7523C30.4076 16.0605 30.2233 16.7527 30.5305 17.2848L36.4108 27.4698C36.7194 28.0044 37.4096 28.1891 37.9431 27.8809L41.2938 25.9459C41.829 25.637 42.0129 24.9485 41.704 24.4135ZM19.6857 34.7332C20.7206 33.2626 18.4976 31.6966 17.4628 33.1682L15.0308 36.6269C13.9969 38.0974 16.2194 39.6618 17.2545 38.1899L18.685 36.1551L19.6857 34.7332ZM13.6654 31.1835C14.6981 29.717 12.4781 28.1474 11.4416 29.6203L9.70089 32.0941C8.66658 33.564 10.8873 35.1314 11.9238 33.6581L13.6654 31.1835ZM14.9839 30.6384L12.5496 34.0991L12.0336 34.8321C10.9968 36.3046 13.2221 37.8704 14.2573 36.3962L17.2071 32.2026C18.2423 30.7329 16.0201 29.1651 14.9839 30.6384Z"
        fill="#110D3C"
      ></path>
    </svg>
  );
};

const PerformaceCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
      <div>
        <Image src={image.src} alt={image.alt} width={60} />
      </div>
      <h2 className="text-black text-3xl font-bold">{title}</h2>
      <p className="text-blue-dark text-lg">{subtitle}</p>
    </div>
  );
};

const InfluencerCardDetails = [
  {
    title: "Trusted Recommendation",
    subtitle:
      "Harness the power of influencers’ trusted recommendations to showcase your restaurant’s unique offerings and drive customer interest. ",
    icon: <Trust />,
  },

  {
    title: "Expand Reach",
    subtitle: `Tap into the influencer’s dedicated following, extending your brand’s reach to a wider audience of potential customers.`,
    icon: <Trust />,
  },
  {
    title: "Engaging Content",
    subtitle: `Collaborate with influencers to create engaging and authentic content that showcases your restaurant’s ambiance, cuisine, and dining experience.`,
    icon: <Trust />,
  },
  {
    title: "Social Proof",
    subtitle:
      "Benefit from the social proof generated by influencers’ positive experiences and endorsements, building trust and encouraging more customers to order from your cloud kitchen.",
    icon: <Trust />,
  },
  {
    title: "Unique Experiences",
    subtitle:
      "Offer exclusive tastings or experiences to influencers, allowing them to share their firsthand experiences and generate excitement around your cloud kitchen.",
    icon: <Trust />,
  },
  {
    title: "Increased Orders",
    subtitle:
      "Influencer marketing can drive a surge in orders as followers are inspired to try your cloud kitchen’s offerings based on the influencers’ recommendations.",
    icon: <Trust />,
  },
];

export default page;
