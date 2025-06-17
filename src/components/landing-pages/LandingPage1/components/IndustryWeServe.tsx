"use client";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import React from "react";
import { Autoplay } from "swiper/modules";
import IndustryWeServeCard from "./cards/WeServeCard";
import Link from "next/link";

export interface IndustryWeServeProps {
  title: string;
  subTitle?: string;
  description?: string;
  button: {
    label: string;
    href: string;
  };
  items: { title: string; image: { src: string; alt: string } }[];
}

const IndustryWeServe = ({
  title,
  subTitle,
  description,
  button,
  items,
}: IndustryWeServeProps) => {
  return (
    <Section>
      <div className="max-w-5xl mx-auto text-center space-y-3 poppins">
        <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
          {title}
        </h2>
        <h3 className="md:text-5xl font-medium text-blue-dark">{subTitle}</h3>
      </div>

      <div className="w-full bg-blue-dark p-2 mt-12">
        {items && items?.length > 0 && (
          <SwiperCarousel
            data={items}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            className="w-full"
            renderSlide={(card) => <IndustryWeServeCard {...card} />}
          />
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center space-y-12 poppins">
        <p className="text-gray-primary">{description}</p>
        <Link
          className="inline-block bg-orange-primary text-white px-4 py-2 rounded-md"
          href={button?.href}
        >
          {button?.label}
        </Link>
      </div>
    </Section>
  );
};

export default IndustryWeServe;
