"use client";

import { OurValuedClientsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/SwiperCarousel";
import { FillStarIcon } from "@/utils/newIcons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Autoplay, FreeMode } from "swiper/modules";

const OurValuedClients: React.FC<OurValuedClientsPropsType> = ({
  title,
  cards,
}) => {
  const pathname = usePathname();
  const useLink = pathname === "/";

  const Tag = useLink ? Link : "div";

  return (
    <SectionWithContainer>
      <div className="space-y-8 md:space-y-14">
        {/* Heading */}
        <div className="w-full space-y-4">
          <h2 className="text-primary lg_font_s font-semibold text-center">
            {title}
          </h2>

          <ul className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <FillStarIcon />
              </li>
            ))}
          </ul>
        </div>

        {/* Slider */}
        <div className="space-y-4 rounded-3xl box-shadow overflow-hidden demo">
          <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto " />

          <SwiperCarousel
            data={cards ?? []}
            speed={5000}
            loop
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            className="!py-2"
            renderSlide={(item, index) => {
              if (useLink) {
                return (
                  <Link
                    key={index}
                    href={item.href || "#"} // ✅ guaranteed
                    className="w-full relative aspect-[4/2.5] block shadow-md shadow-primary/20 rounded-lg"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || "client logo"}
                      fill
                      sizes="100%"
                      className="object-contain p-2 rounded-lg"
                      style={{ backgroundColor: item.className }}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={index}
                  className="w-full relative aspect-[4/2.5] shadow-md shadow-primary/20 rounded-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.alt || "client logo"}
                    fill
                    sizes="100%"
                    className="object-contain p-2 rounded-lg"
                    style={{ backgroundColor: item.className }}
                  />
                </div>
              );
            }}
          />

          <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[0.8px] w-full max-w-[90rem] mx-auto" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurValuedClients;
