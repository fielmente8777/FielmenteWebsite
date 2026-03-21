"use client";
import { MarketingPartnersPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

const MarketingPartners: React.FC<MarketingPartnersPropsType> = ({ cards }) => {
  return (
    <SectionWithContainer
      sectionClassName="shadow-md md:py-[3rem] py-8"
      defaultPadding={false}
    >
      {/* <div className="lg:grid hidden grid-cols-5 gap-28">
        {cards.map((card, index) => (
          <div key={index} className="relative aspect-[3/1.04] w-full">
            <Image
              src={card.imgSrc}
              fill
              className="object-contain"
              alt="img"
            />
          </div>
        ))}
      </div> */}
      <div className="w-full demo">
        <SwiperCarousel
          data={cards}
          slidesPerView={2}
          spaceBetween={20}
          speed={5000}
          loop={true}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          renderSlide={(item, index) => (
            <div
              key={index}
              className="relative w-full lg:aspect-[3/1.5] aspect-[4/4] h-[5rem] rounded-xl flex justify-center items-center hover:shadow-lg shadow-slate-300 transition"
            >
              <Image
                src={item.imgSrc}
                fill
                priority={true}
                className="object-contain w-full h-full rounded-md px-6"
                alt={item.title}
              />
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default MarketingPartners;
