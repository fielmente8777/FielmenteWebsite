import React from "react";
import BestRestauratMarket from "../components/best-restaurnat-market";
import LookingForRestaurant from "../components/looking-for-restaurant";
import TakeYourFbVenture from "../components/take-your-fb-venture";
import RestaurantSeo from "../components/restaurant-seo";
import Form from "@/app/about/components/Form";
import InfluencerMarketing from "../components/influencer-marketing";
import { Accordin } from "../components/common-hero";

const faq = [
  {
    question: "What is Marketing for a Restaurant?",
    body: {
      type: "number",
      header: "Marketing for a restaurant involves:",
      list: [
        " Promoting the restaurant’s brand, menu, and ambiance.",
        "Reaching and attracting the target audience.",
        "Utilizing various channels like social media, online ads, and local promotions.",
        "Encouraging repeat business through loyalty programs.",
        "Showcasing positive reviews and testimonials.",
        "Creating enticing offers and special promotions.",
        "Engaging with customers through email marketing and personalized campaigns.",
      ],
      footer:
        "Expand your customer base beyond local reach with our digital marketing services for cloud kitchens.",
    },
  },
  {
    question: "What marketing channels do Restaurants use?",
    body: {
      type: "number",
      header: "Restaurants use the following marketing channels:",
      list: [
        " Social media platforms (Facebook, Instagram, Twitter).",
        " Google Ads and search engine optimization (SEO).",
        "  Email marketing campaigns.",
        " Local promotions and events.",
        "  Online food delivery platforms(Swiggy, Zomato, ONDC).",
        " Influencer marketing partnerships.",
        " Loyalty programs and referral incentives.",
      ],
    },
  },
  {
    question: "How do Restaurants practice Marketing?",
    body: {
      type: "number",
      header: "Restaurants practice marketing through:",
      list: [
        " Online presence and social media engagement.",
        "Eye-catching menu design and visuals.",
        "Local advertising and promotions.",
        " Email and SMS marketing campaigns.",
        "Special offers and loyalty programs.",
        " Partnering with food influencers and bloggers.",
        "Showcasing positive reviews and testimonials.",
      ],
      footer:
        "We at our restaurant marketing agency, with experts with over 10+ years of experience, does all the best practices to fill in your dine.",
    },
  },
  {
    question: "Tap into Wider Audience",
    body: {
      type: "number",
      header: "Marketing for a restaurant involves:",
      list: [
        " Promoting the restaurant’s brand, menu, and ambiance.",
        "Reaching and attracting the target audience.",
        "Utilizing various channels like social media, online ads, and local promotions.",
        "Encouraging repeat business through loyalty programs.",
        "Showcasing positive reviews and testimonials.",
        "Creating enticing offers and special promotions.",
        "Engaging with customers through email marketing and personalized campaigns.",
      ],
      footer:
        "Expand your customer base beyond local reach with our digital marketing services for cloud kitchens.",
    },
  },
  {
    question: "How do I make my Restaurant famous?",
    body: {
      type: "number",
      header: "To make your restaurant famous:",
      list: [
        " Focus on exceptional food & service.",
        " Engage on social media with enticing visuals.",
        "Encourage positive online reviews.",
        "Participate in local events & partnerships.",
        " Collaborate with food influencers.",
        " Offer loyalty rewards & unique promotions.",
        "Seek press coverage & word-of-mouth.",
      ],
      footer:
        "Expand your customer base beyond local reach with our digital marketing services for cloud kitchens.",
    },
  },
];

function page() {
  return (
    <section className="bg-gradient-second">
      <div className="md:py-20 py-10">
        <div className="max-width">
          <BestRestauratMarket />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <LookingForRestaurant />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <TakeYourFbVenture />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <RestaurantSeo />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width  mx-auto">
          <InfluencerMarketing />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-blue-dark">
        <div className="max-width  mx-auto">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-white">
        <div className="max-width  mx-auto">
          <h2 className="text-center text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <div className="mt-5 max-w-[1024px] mx-auto">
            <Accordin Data={faq} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
