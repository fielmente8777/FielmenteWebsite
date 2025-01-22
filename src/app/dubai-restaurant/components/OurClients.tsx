"use client";
import { Container, Section } from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


const OurClients = () => {
  const data = {
    title: "Trusted by",
    bold: "Leading Restaurants and Cloud Kitchens",
    items: [
      {
        src: "/clientsLogo/thc.png",
        alt: "thc",
      },
      {
        src: "/images/D&G-logo-03-1.png",
        alt: "D&G",
      },
      {
        src: "/clientsLogo/spice-haven.png",
        alt: "spice-haven",
      },
      {
        src: "/images/chefkenzo.png",
        alt: "chefkenzo",
      },
      {
        src: "/images/BURKEY-BLACK-LOGO-01.png",
        alt: "BURKEY",
      },
      {
        src: "/clientsLogo/desi-bar-grill.png",
        alt: "desi-bar-grill",
      },
    ],
  };
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl text-center text-blue-dark">
            {data.title} <b className="text-orange-primary">{data.bold}</b>
          </h2>
          <div className="lg:grid hidden grid-cols-6 gap-4">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center relative aspect-[4/2.5] w-full shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="lg:hidden block mt-8">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className=""
            >
              {data.items.map((item, index) => (
                <SwiperSlide key={index} className="p-2">
                  <div
                    key={index}
                    className="flex justify-center items-center relative aspect-[4/2.5] w-full shadow-xl"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain"
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

export default OurClients;
