"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import ProductCard from "./cards/ProductCard";
import { Navigation } from "swiper/modules";
import { RightIcon } from "@/utils/HospitalityLandingPageIcons/Icons";

export interface OurProductsProps {
  title: string;
  subTitle: string;
  description: string;
  items: {
    title: string;
    subTitle: string;
    icon: React.JSX.Element;
  }[];
}

const OurProduct: React.FC<OurProductsProps> = ({
  title,
  subTitle,
  description,
  items,
}) => {
  return (
    <Section className="relative">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="max-w-xl w-full mx-auto space-y-2 poppins">
            <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit py-2">
              {title}
            </h2>

            <h3 className="md:text-5xl/[4rem] text-blue-dark font-medium">
              {subTitle}
            </h3>
          </div>
          <div className="">
            <p className="text-[#363636] text-lg montserrat">{description}</p>
          </div>
        </div>
        <div className="bg-blue-dark w-full p-5 md:p-8 rounded-3xl mt-8 md:mt-14 relative">
          <SwiperCarousel
            data={items}
            modules={[Navigation]}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            renderSlide={(item) => <ProductCard {...item} />}
          />
          <button className="absolute md:right-0 right-[-22px] top-[40%] z-10 btn-next disabled:hidden ">
            <RightIcon />
          </button>
          <button className="absolute md:left-0 left-[-22px] top-[39%] z-10 rotate-180 btn-prev disabled:hidden ">
            <RightIcon />
          </button>
        </div>
      </Container>
      <div className="bg-[#F26633] w-full h-[2px] top-[66.5%] z-[-1] absolute"/>
    </Section>
  );
};

export default OurProduct;
