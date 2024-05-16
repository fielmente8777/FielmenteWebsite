import Image from "next/image";
import React from "react";

import Whoweare from "../../../../public/images/WHO-ARE-WE.webp";
import Approach from "../../../../public/images/APPROACH-US.webp";
import Link from "next/link";

function Hero() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="mt-6">
          <h2 className="text-black sm:text-4xl text-3xl font-bold">
            INNOVATIVE HOSPITALITY MARKETING SOLUTIONS IN INDIA
          </h2>
          <p className="text-lg text-black mt-5">
            Know About Fielmente, we are your passionate F&B and hospitality
            marketing consultant! Since 2020, we’ve been crafting brands with
            creativity and problem-solving flair. Our love for innovation drives
            us as digital marketing consultants to ensure your successful
            future. Let’s embark on this exciting journey together – reach out
            today, and let’s kickstart your captivating branding adventure
          </p>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={Whoweare}
            alt="who-we-are"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:mt-0 md:mt-12 mt-8">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={Approach}
            alt="who-we-are"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="md:mt-16">
          <h2 className="text-black sm:text-4xl text-3xl font-bold">
            PIONEERING HOTEL & RESTAURANT MARKETING COMPANY IN INDIA
          </h2>
          <p className="text-lg text-black mt-5">
            Get to know about Fielmente, your dedicated F&B and hospitality
            marketing consultant! Share your dreams, and we’ll listen closely,
            delivering clear and timely social media progress reports to keep
            you assured of our positive impact. Just tell us about your hotel,
            restaurant, cloud kitchen or resort business, and we’ll work our
            magic, spreading the word far and wide across all social media
            platforms. Let’s create an unforgettable digital journey together!
          </p>
          <div className="flex justify-center">
            <Link
              href={"/contact"}
              className="bg-black text-white font-bold text-lg px-6 py-3 rounded-md mt-10 border border-black hover:bg-transparent hover:text-blue-dark duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
