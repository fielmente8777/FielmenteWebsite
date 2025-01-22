"use client";
import { Container, Section } from "@/components";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Star } from "@/utils/icons";

const Testimonial = () => {
  const data = {
    title: `What our <b class="text-orange-primary">clients say About Us</b>`,
    items: [
      {
        name: "Sophie Green",
        designation:
          "Fielmente campaigns quickly drove traffic and increased sales. I’m extremely satisfied with the results.",
      },
      {
        name: "Fatima Mansoori",
        designation:
          "Working with Fielmente Hospitality has been a game-changer for my restaurant. Their SEO, social media, and targeted marketing strategies boosted conversions quickly. I’m thrilled with the results and trusted them to enhance my restaurant's marketing.",
      },
      {
        name: "Ahmed Al-Farsi",
        designation:
          "Fielmente restaurant advertising agency, transformed my business with SEO, website development & performance marketing. The results were immediate, and I’m confident they’ll keep elevating my brand.",
      },
      {
        name: "Sophie Green",
        designation:
          "Fielmente campaigns quickly drove traffic and increased sales. I’m extremely satisfied with the results.",
      },
      {
        name: "Fatima Mansoori",
        designation:
          "Working with Fielmente Hospitality has been a game-changer for my restaurant. Their SEO, social media, and targeted marketing strategies boosted conversions quickly. I’m thrilled with the results and trusted them to enhance my restaurant's marketing.",
      },
      {
        name: "Ahmed Al-Farsi",
        designation:
          "Fielmente restaurant advertising agency, transformed my business with SEO, website development & performance marketing. The results were immediate, and I’m confident they’ll keep elevating my brand.",
      },
    ],
  };
  return (
    <Section 
    // className="bg-[url('/bg1.png')] bg-opacity-20 bg-[100%,10%] bg-center bg-no-repeat"
    >
      <Container>
      <div className="flex flex-col items-center gap-12">
        <h2
        className="lg:text-4xl text-2xl capitalize text-center text-blue-dark"
        dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
        <div className="block w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".client-pagination" }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          }}
        >
          {data.items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="border border-[#ECC4B6] shadow-xl p-4 bg-white"
          >
            <div className="flex flex-col items-center gap-3">
            <h3 className="text-center text-2xl text-blue-dark">
              {item.name}
            </h3>
            <span className="flex items-center gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <p className="text-center text-[#3B3B3B] text-lg">
              {item.designation}
            </p>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className="client-pagination flex items-center justify-center gap-1"></div>
      </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
