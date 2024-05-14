import Image from "next/image";
import Link from "next/link";
import React from "react";
import Girl from "../../../../public/images/Girl.jpg";
import CircularSocial from "../../../../public/images/social-circle.webp";

import TrustyBrand from "../../../../public/images/hsdgvc.webp";
import Manwithlaptop from "../../../../public/images/manwithlaptop.jpg";
import Monthly from "../../../../public/images/monthly-remport-1-1024x588-1.webp";

import Form from "@/app/about/components/Form";

function page() {
  return (
    <section>
      <div className="bg-[#1E1928] py-20">
        <div className="max-width">
          {/* Ignite Your Hospitality Growth with Leading Hospitality Google Ads Agency:***** */}
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl">
                Ignite Your Hospitality Growth with Leading Hospitality Google
                Ads Agency
              </h2>
              <p className="text-gray-primary text-xl">
                Experience the magic of Fielmente, the leading hospitality
                Google Ads agency in India.
              </p>
              <p className="text-gray-primary text-xl">
                Our expertly crafted campaigns ensure your hotel, restaurant, or
                resort shines in the digital arena, delivering remarkable
                results. Trust the best in the industry, partner with
                Fielmente’s Google Ads agency, and witness your business soar to
                unprecedented heights through targeted advertising.
              </p>

              <p className="text-gray-primary text-xl">
                Let your brand captivate, engage, and thrive with our
                specialized expertise in the hospitality sector. Unleash the
                full potential of your business – choose Fielmente today!
              </p>

              <div className="flex">
                <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="relative  max-w-[260px] mx-auto aspect-[4/5]">
                <Image
                  src={Girl}
                  alt="girl"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Milestones*** */}
          <div className="grid sm:grid-cols-4 gap-8 py-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                3K+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                89%
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                15
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                15
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 px-20 border-t pt-32 border-b-gray-700 ">
            <Card />
            <Card />
            <Card />
          </div>

          {/* Why Does Your Business Needs Google Ads?*** */}
          <div className="mt-20">
            <h2 className="text-center text-5xl md:w-[70%] mx-auto font-bold">
              Why Does Your Business Needs Google Ads?
            </h2>
            <div className="grid lg:grid-cols-2 items-center mt-10">
              <div className="w-full">
                <div className="relative max-w-2xl mx-auto aspect-[4/5]">
                  <Image
                    src={Manwithlaptop}
                    alt="circular-social"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div>
                <p className="text-xl mt-8">
                  Discover the recipe for success as a restaurant, hotel or
                  Cloud Kitchen in the digital age with Fielmente, the top
                  hospitality SEO agency in India.
                </p>
                <p className="text-xl mt-8">
                  Rule the search engine results, attract a steady stream of
                  customers, and ignite real revenue growth. Rocket your
                  business with our professional SEO services, going beyond mere
                  rankings!
                </p>

                <div className="mt-10 flex flex-col gap-1">
                  <CardTwo />
                  <CardTwo />
                  <CardTwo />
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories and Clientele - Experience the Power of Google Ads**** */}
          <div className="grid md:grid-cols-2 gap-6 items-center mt-5">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl">
                Success Stories and Clientele - Experience the Power of Google
                Ads
              </h2>
              <p className="text-white text-xl">
                At Fielmente, we pride ourselves on success stories that
                showcase the unparalleled power of Google Ads. Our clientele has
                experienced extraordinary results, with increased brand
                visibility, targeted traffic, and amplified conversions. With
                our expertise as a top hospitality Google Ads agency, we help
                businesses across India soar to new heights, creating a trail of
                satisfied clients who have witnessed the true impact of
                effective online advertising. Partner with us and become the
                next success story in the world of digital advertising
              </p>

              <div className="flex">
                <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/5]">
                <Image
                  src={Girl}
                  alt="girl"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Explore Our Comprehensive Digital Marketing Services */}
          <div className="mt-20 py-12">
            <h2 className="text-center text-4xl font-bold">
              Explore Our Comprehensive Digital Marketing Services
            </h2>
            <p className="text-center text-xl mt-6">
              Expand Your Horizons: Discover the Full Range of Digital Marketing
              Solutions We Offer for your Hospitality Business.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Consultation - Unlocking Your Advertising Potential */}
      <div className="grid md:grid-cols-5 gap-10 items-center py-12 bg-[#15151D]">
        <div className="md:col-span-2 w-full flex md:justify-end">
          <div className="relative max-w-[400px] w-full aspect-[4/4]">
            <Image
              src={Girl}
              alt="girl"
              fill
              className="object-cover rounded-[4rem]"
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-8">
          <div className="max-w-[700px]">
            <h2 className="text-4xl font-bold">
              Expert Consultation - Unlocking Your Advertising Potential
            </h2>

            <p className="text-gray-primary text-xl mt-5">
              Unleash Your Business’s Full Potential: Get a Website Audit and
              Expert Advice from Our Seasoned Google Ads Professionals
            </p>

            <div className="mt-10 flex gap-5 items-center">
              <Image
                src={TrustyBrand}
                alt="trust by many brands"
                width={250}
                height={55}
              />
              <p className="text-lg">
                Fielmente: Hospitality Google Ads Agency Trusted by many brands
                around the globe
              </p>
            </div>

            <div className="flex mt-5">
              <Link
                href={"/"}
                className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
              >
                Connect With Our Experts
              </Link>
            </div>

            <p className="text-lg text-center mt-10">
              Get Started Now: Let’s Work Together to Ignite Your Brand’s Online
              Growth
            </p>
          </div>
        </div>
      </div>

      {/* Form  */}
      <div className="py-20 bg-black">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} color={"black"} />
        </div>
      </div>
    </section>
  );
}

export const Card = () => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl">
      <h2 className="text-5xl text-center font-bold text-black">
        Hotel Social Media
      </h2>
      <p className="text-black text-xl text-center">
        If you are looking for the best hotel seo, look no further.
      </p>
      <div>
        <div className="flex justify-center mt-5">
          <Link
            href={"/"}
            className="bg-black px-12 font-medium py-4 rounded-2xl text-white text-xl"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardTwo = () => {
  return (
    <div className="bg-[#333742] px-4 py-10 rounded-[3rem] flex gap-6">
      <div className="relative max-w-32 w-full aspect-[4/3]">
        <Image
          src={CircularSocial}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Social Media Calendar</h2>
        <p className="text-white text-lg mt-2">
          A well-planned content calendar to make sure that your posts are
          always interesting and consistent.
        </p>
      </div>
    </div>
  );
};

export const CardThree = () => {
  return (
    <div className="bg-[#E9D175] px-8 py-10 rounded-[3rem] gap-6">
      <div className="flex flex-col gap-16">
        <h2 className="text-4xl font-bold text-black">Expertise</h2>
        <p className="text-black text-xl mt-2">
          A team of seasoned professionals dedicated to your success.
        </p>
        <div>
          <Link
            href={"/"}
            className="hover:text-white text-xl font-semibold duration-300 text-black"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="relative max-w-56 w-full aspect-[4/4] mx-auto mt-10">
        <Image
          src={Monthly}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default page;
