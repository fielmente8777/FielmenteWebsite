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
const Worked: React.FC = () => {
  return (
    <Section>
      <Container>
        <h2 className="lg:text-5xl text-2xl text-center text-black font-bold">
          Worked with Best Hospitality Brands
        </h2>
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
                <SwiperSlide key={index} className="py-4">
                  <Link
                    href={"/"}
                    className="relative w-full lg:aspect-[4/3.4] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[8rem] rounded-md flex justify-center items-center"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.alt}`}
                      width={100}
                      height={100}
                      className={`${
                        index == 25 ||
                        index == 26 ||
                        index == 19 ||
                        index == 1 ||
                        index == 2 ||
                        index == 4 ||
                        index == 5 ||
                        index == 7 ||
                        index == 9 ||
                        index == 11
                          ? "object-cover"
                          : "object-contain"
                      } w-full h-full rounded-md p-3`}
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
                            : index == 25
                            ? "#E6E6E6"
                            : index == 26
                            ? "#F3F3f3"
                            : "white"
                        }`,
                      }}
                    />
                    {/* <span className="absolute top-0 left-0 text-bleue-dark text-3xl font-bold">
                      {index}
                    </span> */}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Worked;
