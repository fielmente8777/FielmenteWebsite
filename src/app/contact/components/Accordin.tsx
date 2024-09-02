"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface AccordingDataPropsTypes {
  question: string;
  answer: string;
  index?: number;
}

const Data = [
  {
    question: "What is digital marketing?",
    answer: `<p>Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.</p>`,
  },
  {
    question: "What do you need to start your marketing?",
    answer: `<p>To begin marketing effectively,</p>
    <ol class="!list-decimal list-inside">
    <li>You need to have a clear understanding of your target audience,</li>
    <li>You need defined goals,</li>
    <li>You should also have a well-designed marketing strategy,</li>
    <li>The major thing you should need is compelling content and suitable channels (like social media, website),</li>
    <li>You must have knowledge about Analytics tools to track performance.</li>
    </ol>
 
    <p>You should adapt and refine your approach based on data and audience response.</p>`,
  },
  {
    question: "What is SEO?",
    answer: `<p>SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website’s chances of being found by users searching for relevant information or products.</p>`,
  },
  {
    question: "How does SEO work?",
    answer: `<p>SEO works by</p>
    <ul class="list-disc list-inside">
    <li>Optimizing website elements (keywords, content, meta tags) to match user search intent.</li>
    <li>Search engines crawl and index these optimized pages,</li>
    <li>After that, it ranks them based on relevance and authority.</li>
    <li>Higher rankings lead to increased visibility and organic traffic.</li>
    </ul>
    `,
  },
  {
    question: "How does SEO affect your sales?",
    answer: `<p>SEO can positively impact sales by:</p>
  <ul class="list-disc list-inside">
    <li>SEO drives sales by boosting visibility through higher rankings,/<li>
    <li>SEO helps attracts potential customers actively seeking products/services.</li>
    <li>It helps in Higher Ranking. Top ranks establish credibility</li>
    <li>SEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.</li>
    </ul>
      <p>A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits.</p>`,
  },
  {
    question: "How to start SEO Campaign?",
    answer: `<ul class="list-disc list-inside">
    <li>Identify <b>relevant</b> keywords your audience searches for.</li>
    <li><b>Optimize your On-Page</b> (webpage content, titles, and meta descriptions) with chosen keywords.</li>
    <li>Ensure site structure, speed, and mobile-friendliness, that is to <b>optimize your Technical</b> Sites.</li>
    <li>Create valuable, engaging, and shareable <b>content</b></li>
    <li>Secure high-quality <b>backlinks</b> from reputable websites.</li>
    <li>Make the best <b>Analytics setup</b>. Install tools to track performance and make data-driven adjustments.</li>
    </ul>`,
  },
];

function AccordinSection() {
  return (
    <div>
      <h2 className="text-black md:text-5xl text-3xl font-bold text-center">
        How can we help you right now?
      </h2>

      <div className="md:mt-20 mt-8 max-w-[1080px] mx-auto">
        <p className="text-gray-primary text-lg text-center">
          In order to make sure your website is user friendly and optimized for
          Google’s algorithm, our on-site optimization experts clean up the code
          and copy.
        </p>
        <div className="md:mt-16 mt-8">
          <Accordin Data={Data} />
        </div>
      </div>
    </div>
  );
}

export const Accordin = ({ Data }: { Data: AccordingDataPropsTypes[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 md:gap-10 gap-6">
      {Data.map((item, index) => (
        <AccordinContent
          {...item}
          index={index}
          key={index}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export const AccordinContent = ({
  question,
  answer,
  index,
  isOpen,
  onClick,
}: AccordingDataPropsTypes & { isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <h2 className="text-xl font-bold text-black border-b border-b-gray-300 py-4 flex justify-between items-center">
        {question} <IoIosArrowDown />
      </h2>
      <div
        style={{
          maxHeight: isOpen ? "1600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.8s ease",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: answer }} className="text-lg text-gray-primary py-4 accordclass"></div>
      </div>
    </div>
  );
};

export default AccordinSection;
