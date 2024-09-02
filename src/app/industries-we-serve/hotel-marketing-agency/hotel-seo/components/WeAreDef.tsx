"use client";
import { ClientImages } from "@/utils/client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const WeAreDef = () => {
    return (
        <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="max-w-[610px] mx-auto flex flex-col gap-4">
            <h2 className="text-center text-black lg:text-4xl text-3xl font-bold">
              Why we are different?
            </h2>
            <p className="text-center text-gray-primary lg:text-lg text-base">
              Optimise Your Hotel’s Online Presence with Fielmente’s Expert
              On-Page SEO Strategies. Enhancing Search Rankings and Driving More
              Traffic to Your Website.
            </p>
          </div>

          <div className="mt-16">
            <Swiper
              
              pagination={{
                type: "progressbar",
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[Pagination,Autoplay]}
              breakpoints={
                {
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }
              }
              className="mySwiper"
            >
              {ClientImages.map((item, index) => (
                <SwiperSlide key={index} className="py-4 mt-4">
                  <Link
                    href={"/"}
                    className="relative w-full lg:aspect-[4/3.4] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[9rem] rounded-md flex justify-center items-center"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.alt}`}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full rounded-md p-3"
                      // style={{
                      //   backgroundColor: `${
                      //     index == 23
                      //       ? "#22413f"
                      //       : index == 9
                      //       ? "#FF6C26"
                      //       : index == 21 || index == 0
                      //       ? "#1e1e1e"
                      //       : index == 20
                      //       ? "#f7f7f7"
                      //       : "white"
                      //   }`,
                      // }}
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
          </div>
        </div>
      </div>
    );
}

export default WeAreDef;