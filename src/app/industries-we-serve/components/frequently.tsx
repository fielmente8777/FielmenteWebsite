"use client";

import React, { useState } from "react";

const Faq = [
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer:
      "Social media marketing in restaurants is using platforms like Facebook, Instagram, and Twitter. To promote the restaurant, engage with customers, and showcase food and events.",
  },
  {
    question: "How to Market a Restaurant on Social Media?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "  Share enticing food photos,",
      "Run contests,",
      "Post behind-the-scenes content,",
      "Respond to comments on time,",
      "Use relevant hashtags, and ",
      "Collaborate with influencers to showcase your restaurant’s uniqueness.",
    ],
  },
  {
    question: "Why do Restaurants need Social Media Marketing?",
    answer: "Restaurants need Social Media Marketing as it:",
    items: [
      "Boosts brand awareness,",
      "Attracts new customers, ",
      "Fosters customer loyalty, and ",
      "Provides a direct channel for feedback and promotions.",
    ],
  },
  {
    question: "What is the role of social media in the food business?",
    answer: "The role of social media in the food business is that:",
    items: [
      "It is a dynamic platform to showcase menu items, share cooking processes,",
      "Gather customer feedback, and",
      "Create a sense of community around your restaurant.",
    ],
  },
  {
    question: "How can restaurants increase engagement on social media?",
    answer: "Restaurants can increase engagement on social media by:",
    items: [
      "Posting consistently, ",
      "Using high-quality visuals,",
      "  Running interactive polls or quizzes, ",
      " Responding promptly to comments, ",
      "Collaborating with local influencers, and ",
      "Sharing user-generated content.",
    ],
  },
  {
    question: "Does social media work for restaurants?",
    answer:
      "Yes, social media can work for restaurants by reaching a wide audience, engaging customers, driving website traffic, and influencing dining choices.",
  },
  {
    question: "What to promote for a restaurant on social media?",
    answer:
      "You can promote the following things on Social Media of restaurants:",
    items: [
      " Highlight daily specials, ",
      "Seasonal dishes and chef’s recommendations, ",
      "Customer reviews, ",
      "Special events, limited-time offers, and ",
      "Unique aspects of your restaurant’s ambiance and cuisine.",
    ],
  },
];

function Frequently() {
  return (
    <section>
      <h2 className="lg:text-5xl text-3xl font-bold text-black">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 flex flex-col gap-10">
        {Faq.map((item, index) => (
          <Accordin {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export const Accordin = ({ question, answer, items }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2
        className="text-black sm:text-xl text-lg font-semibold flex gap-2 border-b border-b-gray-200 pb-2 cursor-pointer"
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

        {items?.length > 0 && (
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

export default Frequently;
