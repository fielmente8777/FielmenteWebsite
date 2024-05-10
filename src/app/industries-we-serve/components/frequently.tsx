"use client";

import React, { useState } from "react";

const Faq = [
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
  {
    question: "What is Social Media Marketing in Restaurants?",
    answer: "For marketing your Restaurant on Social Media you should:",
    items: [
      "Share enticing food photos,",
      "Run contests,",
      "Share enticing food photos,",
      "Run contests",
    ],
  },
];
function Frequently() {
  return (
    <section>
      <h2 className="text-5xl font-bold text-black">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 flex flex-col gap-8">
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
        className="text-black text-xl font-semibold flex gap-2"
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

        {items.length > 0 && (
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
