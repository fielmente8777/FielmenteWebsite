import Image from "next/image";
import React from "react";
import LineDesign from "../../../../../public/images/4tg4fc4.webp";
import Keyboard from "../../../../../public/images/Keyboard.webp";

import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import WantToJoin from "../../industries-we-serve/components/want-to-join";

import GoogleAds1 from "../../../../../public/images/HOTEL-GOOGLE-ADS-02.webp";
import GoogleAds2 from "../../../../../public/images/HOTEL-GOOGLE-ADS-03.webp";
import GoogleAds3 from "../../../../../public/images/HOTEL-GOOGLE-ADS-04.webp";
import GoogleAds4 from "../../../../../public/images/HOTEL-GOOGLE-ADS-05.webp";

import Keyword from "../../../../../public/images/keywords.webp";
import Promote from "../../../../../public/images/3rf.webp";
import Hoursglass from "../../../../../public/images/hourglass.webp";
import Contentwriting from "../../../../../public/images/content-writing.webp";

import CaptivateAndConnect from "../../industries-we-serve/components/captivate-and-connect";
import { Accordin } from "../../industries-we-serve/components/common-hero";
import WeAreDef from "../hotel-seo/components/WeAreDef";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's Leading Hotel Google Ads Agency - Fielmente",
  description:
    "Drive hotel success with our leading hotel Google Ads agency in India. Maximize ROI with expertly managed campaigns. Partner with us now!",
};

const faq = [
  {
    question: "What is Hotel Google Ads?",
    body: {
      type: "null",
      header:
        "Hotel Google Ads are the digital advertisements. These Ads are specially designed to promote your hotels and its accommodations on Google’s advertising platform.",
    },
  },
  {
    question: "How to Advertise a Hotel online?",
    header: "To advertise a hotel online, follow these steps:",
    body: {
      type: "number",
      list: [
        "Create a user-friendly, responsive website. It should showcase your Hotel, accommodation, and services.",
        "Use search engine optimization (SEO) techniques. Ensure your website appears in relevant search results when users look for accommodations in your area.",
        "You should use Social Media platforms like Facebook, Instagram, and Twitter. Share high-quality images, videos, and information about your hotel on those platforms.",
        " Partner with popular Online Travel Agencies (OTAs). Like Booking.com, Ola, Uber, and Airbnb to list your property and attract potential guests.",
        "Creatively use Google’s hotel advertising platform. For displaying your hotel’s pricing and availability directly in search results.",
        " Create valuable and informative content related to travel, local attractions, and tips for travelers. This can attract potential guests and establish your hotel as an authority in the field.",
        "Collect email addresses from interested parties and send out promotional offers, newsletters, and updates.",
      ],
    },
  },
  {
    question: "How do I write a hotel Ads?",
    body: {
      type: "null",
      header:
        "Writing tempting hotel Ads involves showcasing your hotel’s special features. Like the amenities, benefits, etc. Use clarifying language, focus on what sets your hotel apart, and consider using attention-seeking headlines. Mention key selling points like location, room types, special offers, and guest experiences.",
    },
  },
  {
    question: "How does Google Hotel Ads work?",
    body: {
      type: "list",
      header:
        "Google Hotel Ads allows your hotels to show the rates and availability directly within Google Search and Google Maps. When users search for accommodations, they see a list of hotels with their rates and booking options. When they click on any of the hotels, it leads them to a page with more details. The page in which there is an option to book directly through the hotel’s website or other booking platforms.",
    },
  },
  {
    question: "What are Google Local Ads?",
    body: {
      type: "null",
      list: [
        " Google Local Ads is a type of online advertising. Local Ads help local businesses and hotels to rank on SERPs. When the users search for services in their local area, the hotels appear at the top of Google Search results. These ads include the business or hotel’s name, contact information, reviews, and a short description.",
        "Google Local Ads is also known as Local Services Ads.",
      ],
    },
  },
  {
    question: "What are the benefits of Google Hotel Ads?",
    body: {
      type: "number",
      header: "The Benefits of using Google Hotel Ads are:",
      list: [
        "It helps to increase the visibility of your hotel. Your hotel is displayed on Google Search and Maps results.",
        "It can target specific audiences. They can be based on factors like location, travel dates, and preferences.",
        "It display the rates of your hotel alongside your competition. It allows travelers to compare and choose.",
        "Google provides analytics and insights to help you understand how your ads are performing. It helps to make necessary adjustments",
        "Many travelers use mobile devices to search and book hotels. Google Ads help hotels appear seamlessly on every device.",
      ],
    },
  },
];

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
    subtitleText: `Paid Ads Drive Immediate Visibility, Targeted Reach, and High-Converting Bookings, Amplifying Your Online Presence and Revenue Potential.`,
  },

  items: [
    {
      title: "Increased Visibility",
      subtitle:
        "Boost your hotel’s online presence with targeted advertising strategies, expanding your reach and capturing the attention of your ideal audience.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Targeted Advertising",
      subtitle:
        "With Fielmente’s expertise, your hotel’s paid ads reach the right audience, maximizing engagement and driving high-quality leads.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Cost-Effective Results",
      subtitle: `Maximize your advertising budget with our cost-effective solutions, driving tangible results and high returns on investment for your hotel.`,
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "Drive Direct Bookings",
      subtitle:
        "Fielmente’s tailored paid ads effectively drive direct bookings, empowering your hotel to attract and convert potential guests.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Compete Effectively ",
      subtitle: `Stay ahead of the competition in the hospitality industry by leveraging our powerful paid advertising strategies, positioning your hotel as the top choice for guests

        `,
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Real-Time Optimization",
      subtitle:
        "Benefit from real-time optimization of your paid ads, ensuring continuous improvement and maximum performance for your hotel marketing efforts.",
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
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-20">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                HOTEL GOOGLE ADS
              </h2>
              <h2 className="md:text-5xl tracking-wider md:leading-[4rem] text-3xl text-black font-medium md:mt-10 mt-5">
                Excel at Google Ads with India’s Leading Hotel Marketing Agency.
              </h2>
              <p className="text-gray-primary text-xl md:mt-10 mt-5">
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

      <div >
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
                <h2 className="lg:text-5xl text-3xl lg:w-[80%] max-md:text-center text-black font-bold">
                  What We Offer: Paid Ads for Hotel
                </h2>
                <div>
                  <p className="lg:text-xl text-lg w-full text-gray-primary">
                    Paid Ads Drive Immediate Visibility, Targeted Reach, and
                    High-Converting Bookings, Amplifying Your Online Presence
                    and Revenue Potential.
                  </p>
                </div>
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
              <h2 className="text-4xl font-normal text-black text-center">
                3K+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-normal text-black text-center">
                89%
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-normal text-black text-center">
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
        <div className="grid lg:grid-cols-4">
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

      <WeAreDef />

      <div className="md:py-12 py-10 bg-black text-white">
        <div className="max-width">
          <WantToJoin />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="lg:text-5xl text-3xl font-bold text-black text-center">
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
