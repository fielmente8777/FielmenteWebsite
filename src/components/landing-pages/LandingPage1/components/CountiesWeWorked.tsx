"use client";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";

interface CountiesWeWorkedProps {
  title: string;
  subTitle: string;
  items: {
    title: string;
    image: { src: string; alt: string };
  }[];
}

const CountiesWeWorked = ({
  title,
  subTitle,
  items,
}: CountiesWeWorkedProps) => {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 items-center gap-1">
        <div className="lg:col-span-4 rounded-r-xl bg-orange-primary p-16 space-y-4 poppins">
          <h2 className="w-fit bg-[#FFE7DE] text-blue-dark px-2 rounded-full">
            {title}
          </h2>
          <h3 className="text-4xl text-white">{subTitle}</h3>
        </div>

        <div className="lg:col-span-8 px-20 py-6 bg-blue-dark">
          <SwiperCarousel
            data={items}
            speed={2000}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            renderSlide={(item, index) => (
              <div key={index}>
                <div className="text-white">
                  <div className="relative w-full aspect-[4/2]">
                    <Image
                      src={item?.image?.src}
                      alt={item?.image?.alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h2 className="text-center mt-2 poppins">{item?.title}</h2>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default CountiesWeWorked;
