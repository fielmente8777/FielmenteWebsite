"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import ProductCard from "./cards/ProductCard";
import { Navigation, Pagination } from "swiper/modules";
import {
  NextBtnIcon,
  RightIcon,
} from "@/utils/HospitalityLandingPageIcons/Icons";

export interface OurProductsProps {
  title: string;
  subTitle: string;
  description: string;
  items: {
    title: string;
    subTitle: string;
    icon: React.JSX.Element;
    link: {
      label: string;
      href: string;
    };
  }[];
}

const OurProduct: React.FC<OurProductsProps> = ({
  title,
  subTitle,
  description,
  items,
}) => {
  return (
    <Section className="relative bg-[#F9FAFB">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="max-w-xl w-full mx-auto space-y-2 poppins">
            <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit py-2">
              {title}
            </h2>

            <h3 className="md:text-4xl mt-4 text-2xl text-blue-dark font-medium">
              {subTitle}
            </h3>
          </div>
          <div className="">
            <p className="text-[#363636] text-lg montserrat">{description}</p>
            <p className="text-[#363636] text-lg montserrat">
              Trusted by 120+ hotels & resorts worldwide
            </p>
          </div>
        </div>
        <div className="bg-blue-dark w-full p-9 md:p-8 rounded-3xl mt-8 md:mt-14 relative">
          <SwiperCarousel
            data={items}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            pagination={{
              el: ".product-pagination",
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            renderSlide={(item) => <ProductCard {...item} />}
          />
          <div className="disabled:hidden rotate-180 cursor-pointer btn-prev bg-white flex items-center justify-center rounded-full md:w-12 w-10 shadow-xl  md:-left-5 -left-[14px] aspect-square absolute top-1/2 -translate-y-[100%] z-50">
            <NextBtnIcon />
          </div>

          <div className="disabled:hidden cursor-pointer btn-next absolute bg-white flex items-center justify-center rounded-full md:w-12 w-10 shadow-xl  md:-right-5 -right-[14px] aspect-square top-1/2 -translate-y-[100%] z-50">
            <NextBtnIcon />
          </div>
        </div>
        <div className="product-pagination flex items-center justify-center mt-4 md:mt-6"></div>
      </Container>
      <div className="bg-[##F5F5F5] border-b-2 border-[#F26633] w-full md:h-[63%] max-md:hidden top-0 left-0 z-[-1] absolute" />
    </Section>
  );
};

export default OurProduct;
