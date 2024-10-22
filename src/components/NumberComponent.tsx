"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import Section from "./Section";
import { Autoplay } from "swiper/modules";

interface dataTypeProps {
  data: { title: string; subtitle: string }[];
}

const NumberComponent = ({ data }: dataTypeProps) => {
  return (
    <section className="lg:py-12 py-0">
      <Container>
        <div className="bg-blue-dark py-7 px-10 rounded-3xl flex max-md:hidden items-center justify-between w-full h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 items-center w-full justify-center text-white ${
                index !== data.length - 1 && "lg:border-e border-orange-primary"
              }`}
            >
              <h2 className="text-[2.2rem]/[3.5rem]">{item.title}</h2>
              <span className="text-[1.125rem]/[1.5rem]">{item.subtitle}</span>
            </div>
          ))}
        </div>
        <div className="lg:hidden block">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            modules={[Autoplay]}
            className="bg-blue-dark  rounded-3xl  w-full h-full"
            >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="py-7 px-10">
                <div className="flex flex-col gap-3  items-center w-full justify-center text-white">
                  <h2 className="text-[2.2rem]/[3.5rem]">{item.title}</h2>
                  <span className="text-[1.125rem]/[1.5rem]">
                    {item.subtitle}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default NumberComponent;
