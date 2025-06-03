"use client";
import { Container, Section, SwiperCarousel } from "@/components";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const CountryFlags = () => {
  const countries = [
    {
      name: "dubai",
      flag: "/flags/dubai.png",
    },
    {
      name: "uk",
      flag: "/flags/uk.png",
    },
    {
      name: "usa",
      flag: "/flags/usa.png",
    },
    {
      name: "Canada",
      flag: "/flags/canada.png",
    },
    {
      name: "Australia",
      flag: "/flags/australia.png",
    },
    {
      name: "Oman",
      flag: "/flags/oman.png",
    },
    {
      name: "sri lanka",
      flag: "/flags/srilanka.png",
    },
    {
      name: "Nepal",
      flag: "/flags/nepal.png",
    },
  ];
  return (
    <Section className="bg-gradient-to-r from-[#110D3C] to-[#2E23A2] md:py-20">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 md:divide-x md:divide-[#838383] max-md:gap-6">
          <div className="flex flex-col gap-4 md:pe-14 max-w-md w-full">
            <h2 className="text-orange-primary font-semibold md:text-[2rem]/[2.5rem] text-2xl text-center">
              Countries we Worked
            </h2>
            <p className="text-white md:text-lg text-center">
              Fielmente delivering value & impactful solutions since 2020
            </p>
          </div>
          <div className="md:ps-14">
            <SwiperCarousel
              data={countries}
              slidesPerView={2}
              spaceBetween={24}
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              pagination={{
                clickable: true,
                el: ".pagination-Portfolio",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              renderSlide={(item) => (
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="relative w-full aspect-[4/2.5]">
                    <Image
                      src={item.flag}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white uppercase font-semibold">
                    {item.name}
                  </p>
                </div>
              )}
            />
            <div className="pagination-Portfolio flex justify-center gap-2 relative md:-bottom-9 max-md:mt-8"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CountryFlags;
