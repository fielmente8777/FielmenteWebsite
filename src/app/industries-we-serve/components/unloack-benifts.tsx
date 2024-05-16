import React from "react";
import SocialCircle from "../../../../public/images/social-circle.webp";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

function UnloackBenifts() {
  return (
    <section>
      <div className="grid lg:grid-cols-5">
        <div className="lg:col-span-2 ">
          <div className="relative md:max-w-[400px] mx-auto aspect-[4/4]">
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
            Unlock the Benefits with The Power of Social Media Presence for Your
            Restaurant.
          </h2>
          <p className="text-xl text-gray-primary mt-10">
            Our Restaurant Social Media Management Ensures a Dynamic Presence,
            Engaging Posts, and Best-in-Class Campaigns to Keep Your Hotel Ahead
            of the Curve.
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
          <h2 className="sm:text-6xl text-4xl font-normal text-black text-center">
            3K+
          </h2>
          <p className="text-lg font-medium text-gray-primary text-center">
            COMPLETED PROJECTS
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="sm:text-6xl text-4xl font-normal text-black text-center">
            89%
          </h2>
          <p className="text-lg font-medium text-gray-primary text-center">
            SATISFACTION RATE
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="sm:text-6xl text-4xl font-normal text-black text-center">
            15
          </h2>
          <p className="text-lg font-medium text-gray-primary text-center">
            YEARS OF EXPERIENCE
          </p>
        </div>
      </div>
    </section>
  );
}

export default UnloackBenifts;
