"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";

// import required modules
import { ClientImages } from "@/utils/client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
const OurClient = () => {
  const pathName = usePathname();
  const text =
    pathName === "/hospitality/"
      ? "Hospitality"
      : pathName === "/resort/"
        ? "Resorts"
        : "Hotels";

  const objectCoverIndexes = [1, 2, 4, 5, 7, 9, 19, 25, 27, 29, 35];

  

  return (
    <Section className="max-w-[1540px] mx-auto w-full !pt-4">
      <Container>
        <div className="mb-8">
          <h2 className="text-blue-dark text-4xl/[3rem] font-semibold text-center">
            You&apos;re in good company <br />
            <span className="text-orange-primary">
              Trusted by 500+ happy {text}
            </span>
          </h2>
        </div>
      </Container>
      <Section className="bg-[#110D3C] max-w-[1540px] mx-auto w-full">
        <Container>
          <div className="mt-10">
            <div>
              <SwiperCarousel
                data={ClientImages}
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
                swiperSlideClassName="py-4 h-full"
                renderSlide={(item, index?: number) => (
                  <div className="">
                    <div className="relative w-full lg:aspect-[4/2.5] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[9rem] rounded-md flex justify-center items-center">
                      {/* <span className="absolute top-0 right-0 z-10 text-white">{index}</span> */}
                      <Image
                        src={item.src}
                        alt={`${item.alt}`}
                        fill
                        className={`${
                          objectCoverIndexes.includes(index || 0)
                            ? "object-cover"
                            : "object-contain"
                        } w-full h-full rounded-md p-3`}
                        style={{
                          backgroundColor: item.className
                            ? item.className
                            : index == 23
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
                                        : index == 32 ||
                                            index == 33 ||
                                            index == 28 ||
                                            index == 34 ||
                                            index == 36
                                          ? "#000000"
                                          : index == 41
                                            ? "#007a39"
                                            : index == 29
                                              ? "#a7d062"
                                              : "white",
                        }}
                      />
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default OurClient;
