"use client";

import Image from "next/image";
import React, { useState } from "react";
import Mobile from "../../../../../public/images/online-mobile.webp";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialCircle from "../../../../../public/images/social-circle.webp";
import Donner from "../../../../../public/images/doner.webp";

import Keyword from "../../../../../public/images/keywords.webp";
import Promote from "../../../../../public/images/3rf.webp";
import Hoursglass from "../../../../../public/images/hourglass.webp";
import Contentwriting from "../../../../../public/images/content-writing.webp";
import { Accordin } from "../../components/common-hero";

const faq = [
  {
    question: "What is a Cloud Kitchen?",
    body: {
      type: "number",
      header:
        "A cloud kitchen is a facility where food is prepared and cooked exclusively for online orders and delivery. It lacks a dine-in option, focusing on efficient production and delivery of food. Cloud Kitchen is also known as a ghost kitchen or virtual kitchen, ",
    },
  },
  {
    question: "How to Start a Cloud Kitchen?",
    body: {
      type: "number",
      header: "You can start your own Cloud Kitchen by following these steps:",
      list: [
        "Research: Understand your target market and competition.",
        " Location: Choose a strategic location with good delivery reach.",
        " Menu Planning: Create a unique and appealing menu.",
        " Infrastructure: Set up kitchen space with the necessary equipment.",
        "Online Presence: Develop a user-friendly website and app for orders.",
        " Staffing: Hire skilled cooks, kitchen staff, and delivery per sonnel.",
        " Licensing: Obtain the required permits and licenses.",
        " Technology: Use order management and delivery tracking systems.",
        "  Quality Control: Maintain consistent food quality and safety.",
        "Marketing: Promote your cloud kitchen effectively.",
      ],
    },
  },
  {
    question: "How to market Cloud Kitchen?",
    body: {
      type: "number",
      header: "You can Market Cloud Kitchen in:",
      list: [
        "Social Media: Utilize platforms like Instagram, and Facebook for visual promotions.",
        "Online Ads: Invest in targeted online advertising.",
        "Food Aggregators: Partner with delivery platforms like Swiggy, and UberEats.",
        "Influencers: Collaborate with food influencers for reviews.",
        "SEO: Optimize your website for search engines.",
        " Email Marketing: Send promotions and updates to subscribers.",
        "  Loyalty Programs: Offer discounts or rewards for repeat orders.",
        " Content: Create engaging blog posts or videos about your offerings",
      ],
    },
  },
  {
    question: "How do I advertise my cloud kitchen?",
    body: {
      type: "list",
      header: "Advertise your cloud kitchen on social media by ",
      list: [
        " Creating visually appealing posts showcasing your menu, specials, and behind-the-scenes glimpses. ",
        "Engage with followers through interactive content, ",
        "   Collaborate with food influencers, run targeted ads, and use relevant hashtags to increase reach.",
        "Encourage user-generated content and prompt online orders for effective promotion.",
      ],
    },
  },
  {
    question: "Who is the target audience of cloud kitchens?",
    body: {
      type: "list",
      header: "The target audience for cloud kitchens is:",
      list: [
        " Busy professionals, ",
        "  Families,",
        "Students, and ",
        "anyone seeking convenient and quick meal options.",
      ],
      footer:
        "It’s especially appealing to those who prefer ordering food online and getting it delivered to their doorstep.",
    },
  },
];

const CardDetails = [
  {
    title: "Engage with Customers",
    subtitle:
      "Cultivate strong customer relationships with Fielmente’s social media management for restaurants. Engage directly with customers, promptly responding to comments, inquiries, and reviews, fostering a vibrant community that builds loyalty and strengthens your restaurant’s reputation.",
    image: {
      src: Contentwriting,
      alt: "Booking",
    },
  },

  {
    title: "Promote Special Offers",
    subtitle:
      "Drive customer engagement with Fielmente’s social media management for restaurants. Promote exclusive discounts, limited-time offers, and enticing promotions, creating a sense of urgency that attracts customers and fills your restaurant with eager diners.",
    image: {
      src: Promote,
      alt: "Booking",
    },
  },

  {
    title: "Build Brand Personality",
    subtitle: `Unleash your restaurant’s unique brand personality with Fielmente’s social media management. Develop a distinctive identity and voice that resonates with customers, creating a memorable and relatable image that sets your establishment apart.`,
    image: {
      src: Hoursglass,
      alt: "Booking",
    },
  },

  {
    title: "Visual Appeal ",
    subtitle:
      "Ignite cravings and drive orders with Fielmente’s cloud kitchen website design. Showcase tantalizing food photos and mouthwatering videos that captivate and entice customers, leaving them with no choice but to succumb to the temptation and indulge in the delicious offerings from your cloud kitchen.",
    image: {
      src: Contentwriting,
      alt: "Booking",
    },
  },

  {
    title: "Customer Feedback and Reviews",
    subtitle:
      "At Fielmente, we understand the power of customer feedback. Engage with your customers by responding to their reviews. Utilize social listening tools to gather valuable insights. By actively responding to feedback, you can continuously improve your cloud kitchen’s offerings, ensuring customer satisfaction and maintaining a strong reputation in the industry.",
    image: {
      src: Promote,
      alt: "Booking",
    },
  },

  {
    title: "Collaborate with Influencers",
    subtitle:
      "Expand your reach and boost brand awareness with Fielmente’s influencer collaboration services. By partnering with influential figures in the food and lifestyle industry, you can tap into their engaged audience, attract new customers, and create a buzz around your cloud kitchen, ultimately driving more orders and establishing your brand as a prominent player in the culinary scene.",
    image: {
      src: Hoursglass,
      alt: "Booking",
    },
  },

  {
    title: "Scheduling & publishing Content:",
    subtitle:
      "Streamline Social Media Content Delivery with Fielmente. Utilize Publishing and Scheduling Solutions for Hotel Social Media Posts, Empowering Your Team to Enhance Strategy and Build Stronger Connections with Consumers.",
    image: {
      src: Hoursglass,
      alt: "Booking",
    },
  },

  {
    title: "Linktree Account Setup",
    subtitle:
      "Elevate Your Social Media Management with Linktree. Share Multiple Links in One Tap, Maximizing Engagement and Effortlessly Connecting Users with Relevant Content.",
    image: {
      src: Contentwriting,
      alt: "Booking",
    },
  },

  {
    title: "Social Media Platform Audit & Remedial Action:",
    subtitle:
      "Conduct a Comprehensive Social Media Platform Audit & Take Remedial Action. Track Data in Google Analytics to Identify Social Traffic, Monitor Campaigns, Referral Traffic, and Conversions from cloud kitchen Social Media Posts.",
    image: {
      src: Promote,
      alt: "Booking",
    },
  },
];

function page() {
  return (
    <div>
      <div className="lg:py-20 py-10 bg-gradient">
        <div className="max-width">
          <section>
            <div className="grid lg:grid-cols-2 gap-5 lg:mt-20">
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

      <div className="lg:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="lg:py-20 py-10 bg-gradient-second">
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

      <div className="lg:py-20 py-10 bg-gradient">
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

            <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-x-12 lg:gap-y-28 gap-y-10">
              {CardDetails.map((item, index) => (
                <GrowthCard key={index} {...item} />
              ))}
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
            <h2 className="sm:text-5xl text-3xl font-bold text-black">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              <Accordin Data={faq} />
            </div>
          </section>
        </div>
      </div>
    </div>
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
      <h2 className="text-black sm:text-4xl text-3xl font-medium">{title}</h2>
      <p className="sm:text-xl text-lg text-gray-primary">{subtitle}</p>
    </div>
  );
};

export default page;
