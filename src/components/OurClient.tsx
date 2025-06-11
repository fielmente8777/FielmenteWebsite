"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { ClientImages } from "@/utils/client";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./SectionHeadings/SectionHeading";
const OurClient = () => {
  return (
    <Section className="bg-[#110D3C] max-w-[1540px] mx-auto w-full">
      <Container>
        <div className="">
          <h2 className="text-white text-4xl text-center">
            Our <b className="text-orange-primary">Clients</b>
          </h2>
        </div>
        <div className="mt-10">
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
                <SwiperSlide key={index} className="py-4">
                  <div
                    // href={"/"}
                    className="relative w-full lg:aspect-[4/2.5] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[9rem] rounded-md flex justify-center items-center"
                  >
                    {/* <span className="absolute top-0 right-0 z-10 text-white">{index}</span> */}
                    <Image
                      src={item.src}
                      alt={`${item.alt}`}
                      fill
                      className={`${
                        index == 25 ||
                        // index == 26 ||
                        index == 19 ||
                        index == 1 ||
                        index == 2 ||
                        index == 4 ||
                        index == 5 ||
                        index == 7 ||
                        index == 9 ||
                        // index == 11 ||
                        index == 19 ||
                        index == 27 ||
                        index == 29 ||
                        index == 35
                          ? "object-cover"
                          : "object-contain"
                      } w-full h-full rounded-md p-3`}
                       style={{
                      backgroundColor: `${index == 23
                          ? "#e6e6e6"
                          : index == 22 ||
                            index == 16 ||
                            index == 18 ||
                            index == 20
                            ? "#F7F7F7"
                            : index == 21
                              ? "#21413e"
                              : index == 19 || index == 0
                                ? "#1e1e1e"
                                : index == 24
                                  ? "#f3f3f3"
                                  : index == 26 
                                    ? "#000000"
                                    : index == 32 || index == 33 || index == 28 || index == 34 || index == 36
                                      ? "#000000"
                                      : index == 41
                                        ? "#007a39"
                                      : index == 29 
                                        ? "#a7d062"
                                        : "white"
                        }`,
                    }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurClient;
