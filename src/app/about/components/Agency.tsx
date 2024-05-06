import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sachin from "../../../../public/images/Sachin.webp";

function Agency() {
  return (
    <section>
      <h2 className="text-center text-4xl text-black font-semibold">
        KNOW MORE ABOUT US
      </h2>
      <div className="grid lg:grid-cols-5 gap-16 items-center mt-20">
        <div className="lg:col-span-2 relative w-full aspect-[4/3]">
          <Image
            src={Sachin}
            alt="sachin-profile"
            fill
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-10 lg:col-span-3">
          <p className="text-black text-xl text-justify leading-[3rem]">
            Welcome to Fielmente, your trusted hospitality marketing company. I
            Sachin Kapoor founded Fielmente with a passion for hospitality and
            marketing after completing my Masters in Hospitality from WGSHA,
            Manipal, and gaining Sales & Marketing experience from Marriott &
            Hyatt in September 2020. We are a team of 15+ hospitality marketing
            experts who make sure about your business growth and take care about
            your Hospitality venture online reputation.
          </p>
          <p className="text-black text-xl text-justify leading-[3rem]">
            Our strategic consulting services craft tailored marketing
            strategies to boost bookings, build your brand, and expand your
            reach, elevating your hospitality business with results-driven,
            creative marketing.
          </p>
          <div className="flex gap-4">
            <Link
              href={"https://www.linkedin.com/in/sachinkapoor95/"}
              target="_blank"
              className="bg-black text-lg rounded-md text-white px-6 py-3"
            >
              Linked Profile
            </Link>
            <Link
              href={"https://www.instagram.com/sachinkapoorrr/"}
              target="_blank"
              className="bg-black text-lg rounded-md text-white px-6 py-3"
            >
              Instagram Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agency;
