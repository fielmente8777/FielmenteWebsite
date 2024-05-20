import React from "react";
import IndustryWeServe from "./components/industry-we-serve";
import CommonHero from "./components/common-hero";

import HotelLuxury from "../../../public/images/rich-luxury-modern-residential.webp";
import Popularrestaurnat from "../../../public/images/popular-val-s-restaurant-freret-street-shade-palm-tree-during-summer-day-1.webp";
import Threechef from "../../../public/images/three-chefs-are-restaurant-kitchen-one-them-is-wearing-white-apron-1.webp";

import OurService from "./components/our-service";
import Form from "../about/components/Form";

const CommonHero1 = {
  title: "Why Your Hotel need to Go Online",
  subtitle:
    "Unshackle your hotel business’s full potential online! Elevate success with India’s top hospitality consultants and the best hospitality digital marketing agency. Discover the industries we serve and seize growth today!",
  image: {
    src: HotelLuxury,
    alt: "hotel-luxury",
  },
  faq: [
    {
      question: "Expanding Reach",
      body: {
        header:
          "Reach global travelers and widen your audience through our hospitality digital marketing services.",
      },
    },
    {
      question: "Boosting Bookings",
      body: {
        header:
          "Online presence drives more bookings, converting visitors into loyal guests.",
      },
    },
    {
      question: "Competing Effectively",
      body: {
        header:
          "Stay ahead in the hospitality industry with cutting-edge digital marketing strategies.",
      },
    },
    {
      question: "Targeted Advertising",
      body: {
        header:
          "Reach your ideal guests with precise targeting and personalized ads.",
      },
    },
    {
      question: "Enhanced Guest Experience",
      body: {
        header:
          "Create seamless interactions and offer convenience through online channels.",
      },
    },
    {
      question: "Data-Driven Insights",
      body: {
        header:
          "Leverage data to optimize marketing efforts and make informed business decisions..",
      },
    },
  ],
};

const CommonHero2 = {
  title: "Why Your Restaurant Should Have Online Presence",
  subtitle:
    "Take your Restaurant to new heights! Partner with India’s top hospitality consultants and premier hospitality digital marketing agency. Elevate your brand presence and conquer new markets today!",
  image: {
    src: Popularrestaurnat,
    alt: "popular-restaurant",
  },
  faq: [
    {
      question: "Expanded Customer Base",
      body: {
        header:
          "Tap into a wider audience pool by going online with our hospitality digital marketing services",
      },
    },
    {
      question: "Drive Online Orders",
      body: {
        header:
          "Boost sales with a robust online ordering system and targeted promotions.",
      },
    },
    {
      question: "Stay Competitive",
      body: {
        header:
          "Stand out in the industry by embracing digital channels for your restaurant.",
      },
    },
    {
      question: "Enhanced Visibility",
      body: {
        header:
          "Increase brand visibility and attract more local customers through digital marketing strategies.",
      },
    },
    {
      question: "Engage with Customers",
      body: {
        header:
          "Connect with diners through social media and personalized interactions for lasting loyalty.",
      },
    },
    {
      question: "Insights for Growth",
      body: { header: "Insights for Growth" },
    },
  ],
};

const CommonHero3 = {
  title: "Why Your Cloud Kitchen need to Go Online",
  subtitle:
    "Catapult your cloud kitchen to the top! Partner with India’s foremost hospitality consultants and the ultimate hospitality digital marketing agency. Check out the industries we serve and taste unrivaled success today!",
  image: {
    src: Threechef,
    alt: "three-chef",
  },
  faq: [
    {
      question: "Tap into Wider Audience",
      body: {
        header:
          "Expand your customer base beyond local reach with our digital marketing services for cloud kitchens.",
      },
    },
    {
      question: "Enhanced Visibility",
      body: {
        header:
          "Online presence drives higher visibility, attracting hungry customers to your cloud kitchen.",
      },
    },
    {
      question: "Seamless Online Ordering",
      body: {
        header:
          "Embrace convenience with a user-friendly online ordering system for your cloud kitchen.",
      },
    },
    {
      question: "Stay Competitive",
      body: {
        header:
          "Stay ahead of the curve with cutting-edge digital marketing strategies tailored for cloud kitchens.",
      },
    },
    {
      question: "Targeted Promotions",
      body: {
        header:
          "Reach your ideal diners with targeted promotions and personalized marketing campaigns.",
      },
    },
    {
      question: "Optimize Operations",
      body: {
        header:
          "Leverage data insights to optimize operations and elevate the efficiency of your cloud kitchen.",
      },
    },
  ],
};

function page() {
  return (
    <section>
      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <IndustryWeServe />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient-second">
        <div className="max-w-[1080px] w-full mx-auto px-6 flex flex-col lg:gap-32 gap-20">
          <CommonHero data={CommonHero1} />
          <CommonHero data={CommonHero2} direction={"reverse"} />
          <CommonHero data={CommonHero3} />
        </div>
        <div className="mt-32">
          <div className="max-width flex flex-col gap-8">
            <h2 className="text-black md:text-5xl text-3xl text-center font-semibold">
              Why Fielmente Hospitality Marketing?
            </h2>
            <p className="text-gray-500 text-center md:text-xl text-lg">
              Unseal limitless possibilities with Fielmente’s tailored expertise
              and results-driven solutions! Our hospitality digital marketing
              services cater precisely to the industries we serve, empowering
              your success.
            </p>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width ">
          <OurService />
        </div>
      </div>

      <div className="py-20 bg-blue-dark">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>
    </section>
  );
}

export default page;
