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
import Link from "next/link";

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
  const handleClick = () => {
    window.open(
      "https://dashboard.eazotel.com",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <Section className="relative bg-[#F9FAFB">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="max-w-xl w-full mx-auto space-y-2 poppins">
            <h2 className="bg-[#1F1F1F] text-white text-lg font-semibold rounded-full px-4 w-fit py-2">
              {title}
            </h2>

            <h3 className="md:text-4xl mt-4 text-2xl text-blue-dark font-medium">
              {subTitle}
            </h3>
          </div>
          <div className="">
            <p className="text-[#1F1F1F] text-lg montserrat">{description}</p>
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
              <p className="text-[#1F1F1F] text-lg montserrat">
                Trusted by 120+ hotels & resorts worldwide
              </p>
              <button
                onClick={() => handleClick()}
                className="w-fit flex items-center text-nowrap gap-2 mt-4 bg-orange-primary text-white font-semibold py-2 px-4 rounded-md"
              >
                Login / Sign Up{" "}
                <span>
                  <BtnIcon />
                </span>
              </button>
            </div>
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
      {/* <div className="bg-[##F5F5F5] border-b-2 border-[#F26633] w-full md:h-[63%] max-md:hidden top-0 left-0 z-[-1] absolute" /> */}
    </Section>
  );
};

export default OurProduct;

export const BtnIcon = () => (
  <svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y={12}
      width={24}
      height={24}
      rx={12}
      transform="rotate(-30 0 12)"
      fill="white"
    />
    <path
      d="M21.0406 14.2859L10.5801 20.3253L10.0801 19.4592L20.5406 13.4199L12.6282 11.2998L12.8923 10.3301L22.4544 12.8923L19.8923 22.4544L18.9205 22.1983L21.0406 14.2859Z"
      fill="#F26633"
    />
  </svg>
);
