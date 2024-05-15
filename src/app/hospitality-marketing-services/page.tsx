"use client";

import Image from "next/image";
import React, { useState } from "react";
import Manwithdocuments from "../../../public/images/briefing-staff-hotel-restaurant-1.png";
import Link from "next/link";
import Form from "../about/components/Form";
import GoogleAds1 from "../../../public/images/HOTEL-GOOGLE-ADS-02.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Brand1 from "../../../public/images/Wah-Malvan-PNG.png";
import { TrustPiolet } from "../(home)/components/marketingAgency";

export interface AccordingDataPropsTypes {
  question: string;
  answer: string;
}

const faq = [
  {
    question: "Expanding Reach",
    answer:
      "Reach global travelers and widen your audience through our hospitality digital marketing services.",
  },
  {
    question: "Boosting Bookings",
    answer:
      "Online presence drives more bookings, converting visitors into loyal guests.",
  },
  {
    question: "Competing Effectively",
    answer:
      "Stay ahead in the hospitality industry with cutting-edge digital marketing strategies.",
  },
  {
    question: "Targeted Advertising",
    answer:
      "Reach your ideal guests with precise targeting and personalized ads.",
  },
  {
    question: "Enhanced Guest Experience",
    answer:
      "Create seamless interactions and offer convenience through online channels.",
  },
  {
    question: "Data-Driven Insights",
    answer:
      "Leverage data to optimize marketing efforts and make informed business decisions..",
  },
];

function page() {
  return (
    <section>
      {/* Boost Your Business with Fielmente, India's top Hospitality Marketing Services! */}
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-20">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                OUR HOSPITALITY MARKETING SERVICES
              </h2>
              <h2 className="md:text-3xl text-3xl text-black font-bold md:mt-20 mt-5">
                Boost Your Business with Fielmente, India's top Hospitality
                Marketing Services!
              </h2>
              <p className="text-gray-primary text-xl mt-5">
                Attention, savvy business owners! Release the true potential of
                your online presence with Fielmente, your go-to hospitality
                marketing services in India.
              </p>

              <p className="text-gray-primary text-xl mt-5">
                Let our experts empower your business with tailored strategies,
                setting new standards for success in the hospitality industry!
              </p>
            </div>
            <div className="">
              <div className="relative max-w-[500px] mx-auto aspect-[4/4]">
                <Image
                  src={Manwithdocuments}
                  alt="mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-4xl font-bold">
            What We Offer
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Want to embrace the Digital Frontier? Boost your hospitality
            business with our cutting-edge Hospitality Marketing Services and
            Hospitality Digital Marketing Services. Conquer the online realm,
            attract a broader audience, and experience a surge in bookings. It’s
            time to embrace the power of the digital world and release your
            business’s true potential!
          </p>
        </div>
      </div>

      {/* Industries We Serve:  */}
      <div className="py-20">
        <div className="max-width grid lg:grid-cols-2 gap-10">
          <div className="relative w-full aspect-[4/2.4]">
            <Image
              src={Manwithdocuments}
              alt="man-with-documents"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="">
            <h2 className="text-5xl text-black font-bold">
              Industries We Serve:
            </h2>
            <div className="text-black sm:text-3xl text-xl font-bold text-center mt-5 flex gap-6 justify-center">
              <p> Hotels</p>
              <p>Restaurants Cloud</p>
              <p>Kitchens</p>
            </div>
            <p className="text-xl text-black mt-10">
              Fielmente is a place, where we excel in revolutionizing your
              business! As the finest hospitality marketing agency in India, we
              exclusively cater to hotels, cloud kitchens, and restaurants.
              Elevate your brand’s presence, thrive in competition, and allure
              countless guests with our exceptional hospitality marketing
              services. Let us be your key to success in the dynamic world of
              hospitality!
            </p>
          </div>
        </div>
      </div>

      {/* Why do You need to Go Online?*/}
      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-5xl font-bold">
            Why do You need to Go Online?
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Unwrap your business’s true potential and reach new heights with the
            irresistible allure of online presence with Fielmente’s cutting-edge
            hospitality marketing services!
          </p>

          <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-6 mt-20 border-b pb-12">
            <div>
              <Accordin Data={faq} />
            </div>
            <div className="w-full">
              <div className="relative max-w-[340px] mx-auto aspect-[4/5]">
                <Image
                  src={Manwithdocuments}
                  alt=""
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Are you ready to unlock the full potential  */}
      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-5xl font-bold">
            Are you ready to unlock the full potential of your business’s online
            presence with our Hospitality Marketing Services?
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Hospitality Marketing Services? Go online and take your hospitality
            business to new heights! With the leading hospitality consultants in
            India and the best hospitality marketing agency, today.
          </p>
          <div className="flex justify-center mt-12">
            <Link
              href={"/contact"}
              className="bg-black px-20 py-5 border border-black text-xl rounded-xl hover:bg-transparent hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us?  */}
      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-5xl font-bold">
            Why Choose Us?
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Your business’s success is with Fielmente, your ultimate hospitality
            consultant, offering tailored and result-driven hospitality
            marketing services in India, crafted precisely for your needs!
          </p>

          <div className="grid lg:grid-cols-3 gap-y-32 mt-20">
            <ChooseUSCard />
            <ChooseUSCard />
            <ChooseUSCard />
            <ChooseUSCard />
            <ChooseUSCard />
            <ChooseUSCard />
          </div>

          <div className="grid sm:grid-cols-4 gap-8 py-16 mt-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-bold text-black text-center">3K+</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-bold text-black text-center">89%</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-bold text-black text-center">15</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-bold text-black text-center">15</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="grid grid-cols-4">
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hire us as your hospitality marketing agency  */}
      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-5xl font-bold">
            Hire us as your hospitality marketing agency and unlock the full
            potential of your business.
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Experience our expertise, results-driven approach, and personalized
            hospitality marketing service that set us apart in the industry.
          </p>
          <div className="flex justify-center mt-12">
            <Link
              href={"/contact"}
              className="bg-[#2CBCA5] px-20 py-5 border  text-xl rounded-xl hover:bg-transparent hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Brand We Work With  */}
      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="max-w-[610px] mx-auto flex flex-col gap-4">
            <h2 className="text-center text-black text-5xl font-bold">
              Brand We Work With
            </h2>
          </div>

          <div className="mt-16">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image src={Brand1} alt="brand" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* What People Say About Us  */}
      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="max-w-[610px] mx-auto flex flex-col gap-4">
            <h2 className="text-center text-black text-5xl font-bold">
              What People Say About Us
            </h2>
          </div>

          <div className="mt-16">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="border p-6">
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src={Brand1} alt="brand" width={65} />
                      <div>
                        <h2 className="text-xl text-black font-bold">
                          Antinder Bajwa
                        </h2>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <p className="text-black text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis doloremque excepturi mollitia placeat voluptatum ex
                    hic ipsam quo cum, eos aliquid esse in, at error corrupti
                    dolor iure commodi nemo.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border p-6">
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src={Brand1} alt="brand" width={65} />
                      <div>
                        <h2 className="text-xl text-black font-bold">
                          Antinder Bajwa
                        </h2>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <p className="text-black text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis doloremque excepturi mollitia placeat voluptatum ex
                    hic ipsam quo cum, eos aliquid esse in, at error corrupti
                    dolor iure commodi nemo.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border p-6">
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <Image src={Brand1} alt="brand" width={65} />
                      <div>
                        <h2 className="text-xl text-black font-bold">
                          Antinder Bajwa
                        </h2>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <p className="text-black text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis doloremque excepturi mollitia placeat voluptatum ex
                    hic ipsam quo cum, eos aliquid esse in, at error corrupti
                    dolor iure commodi nemo.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Form*** */}
      <div className="py-20 bg-blue-dark">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>
    </section>
  );
}

export const Accordin = ({ Data }: { Data: AccordingDataPropsTypes[] }) => {
  return (
    <div className=" flex flex-col gap-5">
      {Data.map((item, index) => (
        <AccordinContent {...item} key={index} />
      ))}
    </div>
  );
};

export const AccordinContent = ({
  question,
  answer,
}: AccordingDataPropsTypes) => {
  const [openAccordin, setOpenAccordin] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => setOpenAccordin(!openAccordin)}
    >
      <h2 className="text-xl font-bold text-black border-b border-b-gray-300 py-4 flex gap-2 items-center">
        <span>{openAccordin ? "-" : "+"}</span>
        {question}
      </h2>
      <div
        style={{
          maxHeight: openAccordin ? "1600px" : "0",
          overflow: "hidden",
          transition: "all 0.8s linear",
        }}
      >
        <p className="text-lg text-gray-primary py-4">{answer}</p>
      </div>
    </div>
  );
};

export const ChooseUSCard = () => {
  return (
    <div className="max-w-[300px] mx-auto">
      <div className="relative w-full aspect-[4/4]">
        <Image src={Manwithdocuments} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-center text-3xl text-black">Expertise</h2>
        <p className="text-center text-lg text-black">
          Benefit from our extensive experience and expertise in digital
          marketing for hotels, ensuring effective strategies tailored to your
          specific needs.
        </p>
      </div>
    </div>
  );
};

export default page;
