"use client";

import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import React from "react";
import { ClientImages } from "@/utils/client";



const SectionHeadingDetails = {
  title: "Our ",
  span: "Clients",
};



function OurClients({
  SHeading,
  heading,
}: {
  SHeading?: boolean;
  heading?: string;
}) {
  return (
    <div>
      {SHeading ? (
        <SectionHeading {...SectionHeadingDetails} />
      ) : (
        <h2 className="text-[#14113D] text-center md:text-4xl text-3xl font-bold">
          {heading}
        </h2>
      )}
      {/* desktop view */}
      {/* <div className='lg:block hidden'>
        <div className="mt-16 grid lg:grid-cols-7 gap-y-8 md:grid-cols-4">
          {ClientImages.map((item, index) => (
            <Link
              href={"/"}
              className="relative w-full aspect-[4/3.7] bg-white"
              key={index}
            >
              <Image
                src={item.src}
                alt={`${item.alt}`}
                width={100}
                height={100}
                className="object-contain w-full h-full rounded-md"
              />
            </Link>
          ))}
        </div>
      </div> */}
      {/* small screen view */}
      <div className="mt-16">
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={2}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {ClientImages.map((item, index) => (
              <SwiperSlide key={index} className="py-3">
                <Link
                  href={"/"}
                  className="relative w-full lg:aspect-[4/3.4] aspect-[4/4] h-[8rem] rounded-md flex justify-center items-center hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-lg hover:shadow-white/35 hover:scale-[1.04]"
                >
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full rounded-md p-3 "
                 
                    style={{
                      backgroundColor: `${index == 23
                        ? "#22413f"
                        : index == 22
                          ? "#F7F7F7"
                          : index == 9
                            ? "#FF6C26"
                            : index == 16
                              ? "#F7F7F7"
                              : index == 21 || index == 0
                                ? "#1e1e1e"
                                : index == 18
                                  ? "#F7F7F7"
                                  : index == 20
                                    ? "#f7f7f7"
                                    : "white"
                        }`,
                    }}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
