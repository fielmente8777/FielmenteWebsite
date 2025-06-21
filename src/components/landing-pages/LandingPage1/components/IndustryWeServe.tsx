"use client";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import IndustryWeServeCard from "./cards/WeServeCard";
import Link from "next/link";
import { PopupForm } from "@/app/landing-page/components";

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
  const [showModal, setShowModal] = useState(false);
  return (
    <Section>
      <div className="max-w-5xl mx-auto text-center space-y-3 poppins">
        <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
          {title}
        </h2>
        <h3 className="md:text-5xl font-medium text-blue-dark">{subTitle}</h3>
      </div>

      <div className="w-full bg-blue-dark p-3 mt-12">
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
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-orange-primary font-medium p text-white text-lg/[24px] py-4 px-6 rounded-md"
          // href={button?.href}
        >
          {button?.label}
        </button>
      </div>

      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </Section>
  );
};

export default IndustryWeServe;
