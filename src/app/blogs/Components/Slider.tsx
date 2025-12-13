"use client";
import { SwiperCarousel } from "@/components";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

const Slider: React.FC<{
  offersTitle: string[];
  wrapperClass?: string;
  direction?: "rtl" | "ltr";
}> = ({ offersTitle, wrapperClass, direction }) => {
  const data =
    offersTitle.length < 1
      ? offersTitle
      : [...offersTitle, ...offersTitle, ...offersTitle];
  return (
    <Section className={`!py-0 ${wrapperClass} demo`}>
      <SwiperCarousel
        data={data}
        speed={4000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={3.5}
        spaceBetween={16}

        dir={direction}
        renderSlide={(item, index) => (
          <div key={index}>
            <div className="relative w-full aspect-square">
              <Image
                src={item}
                alt="blog 1"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default Slider;
