import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Shakinghand from "../../../../public/images/Shakinghand.webp";
import Girlmeet from "../../../../public/images/Girlmeet.webp";

// import GoogleAds from "../../../../public/images/GOOGLE-ADS-03-1.webp";

import HotelAds from "../../../../public/images/HOTEL-MARKETING.webp";
import CloudKitchenAds from "../../../../public/images/CLOUD-KITCHEN-MARKETING.webp";
import RestaurantAds from "../../../../public/images/RESTAURANT-MARKETING.webp";

import GoogleAds08 from "../../../../public/images/GOOGLE-ADS-08.webp";
import GoogleAds10 from "../../../../public/images/GOOGLE-ADS-10.webp";
import GoogleAds11 from "../../../../public/images/GOOGLE-ADS-11.webp";

import TrustyBrand from "../../../../public/images/hsdgvc.webp";
import Manwithlaptop from "../../../../public/images/Manwithlaptop2.webp";
import Monthly from "../../../../public/images/monthly-remport-1-1024x588-1.webp";

import Form from "@/app/about/components/Form";

const CardData1 = [
  {
    title: "Hotel Ads",
    subtitle:
      "If you are looking for the best hotel advertisement company, look no further.",
    icon: HotelAds,
  },
  {
    title: "Cloud Kitchen Ads",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
    icon: CloudKitchenAds,
  },
  {
    title: "Restaurant Ads",
    subtitle:
      "If you are looking for the best restaurant advertising, look no further.",
    icon: RestaurantAds,
  },
];

const CardData2 = [
  {
    title: "Why Google Ads Matter for Your Business",
    subtitle:
      "Your Potential: Discover the Impact of Effective Advertising on Your Business Success",
    image: GoogleAds08,
  },
  {
    title:
      "Our Google Ads Services - Igniting Your Online Advertising Strategy",
    subtitle:
      "Precision Targeting: Drive Results with Search Advertising, Display Advertising, and Video Advertising",
    image: GoogleAds10,
  },
  {
    title: " Our Approach to Your Advertising Success",
    subtitle:
      "Strategic Mastery: From Planning to Execution, We Craft Customized Ads Strategies for Optimal Results",
    image: GoogleAds11,
  },
];

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
              <div className="relative max-w-[260px] mx-auto aspect-[4/5]">
                {/* <Image
                  src={GoogleAds}
                  alt="google-ads"
                  fill
                  className="object-cover rounded-lg"
                /> */}
              </div>
            </div>
          </div>

          {/* Milestones*** */}
          <div className="grid sm:grid-cols-4 gap-8 py-16 max-w-[1080px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">
                100+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                REVIEWS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">88%</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                INCREASE IN ROAS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">70+</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                HOTELIERS TRUST US
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">90+</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 px-20 border-t pt-32 border-t-gray-700 ">
            {CardData1.map((item, index) => (
              <Card key={index} {...item} />
            ))}
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
                  At Fielmente, the top hospitality Google Ads agency in India,
                  we amplify your brand’s visibility and drive targeted traffic.
                  Our powerful Google Ads services fuel your business growth by
                  unleashing the full potential of online advertising.
                </p>

                <div className="mt-10 flex flex-col gap-1">
                  {CardData2.map((item, index) => (
                    <CardTwo {...item} key={index} />
                  ))}
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
                  src={Shakinghand}
                  alt="shaking-hand-img"
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
              src={Girlmeet}
              alt="girl-meet-img"
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

const Card = ({ title, subtitle, icon }: any) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl flex flex-col gap-3">
      <div className="flex justify-center">
        <Image src={icon} alt="icon" width={85} />
      </div>
      <h2 className="text-4xl text-center font-bold text-black">{title}</h2>
      <p className="text-black text-xl text-center">{subtitle}</p>
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

const CardTwo = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-[#333742] px-4 py-10 rounded-[3rem] flex gap-6 items-start">
      <div className="relative max-w-28 w-full aspect-[4/3]">
        <Image
          src={image}
          alt="images"
          fill
          className="object-contain rounded-3xl"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-white text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

const CardThree = () => {
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
