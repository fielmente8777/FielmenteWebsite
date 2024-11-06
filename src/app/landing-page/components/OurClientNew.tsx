"use client";

import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import React from "react";
import { ClientImages } from "@/utils/client";
const OurClientNew = () => {
  return (
    <div>
      <div>
        <h2 className="lg:text-4xl text-2xl font-normal text-blue-dark text-center">
          Worked with the Best <br />{" "}
          <b className="text-orange-primary">Hospitality Brands</b>
        </h2>
      </div>
      <div className="mt-16">
        <div>
          <Swiper
            modules={[Autoplay, Grid, Pagination]}
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            pagination={{
              type: "bullets",
              clickable: true,
              el: ".client-pagination",
            }}
            // loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            className="border border-[#F2B203] !p-4 shadow-inner"
          >
            {ClientImages.map((item, index) => (
              <SwiperSlide key={index} className="p-4">
                <Link
                  href={"/"}
                  className="relative w-full lg:aspect-[4/3.4] aspect-[4/4] h-[8rem] flex justify-center items-center duration-300 cursor-pointer hover:shadow-xl shadow-2xl hover:shadow-white/35 hover:scale-[1.04] rounded-tl-[1.875rem] rounded-br-[1.875rem] overflow-hidden"
                  style={{
                    backgroundColor: `${
                      index == 23
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
                >
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full p-3 "
                    style={{
                      backgroundColor: `${
                        index == 23
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

          <div className="client-pagination mt-8 flex justify-center items-center gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default OurClientNew;
