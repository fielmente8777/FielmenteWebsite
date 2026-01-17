"use client";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { OurServiceCard } from "./cards/OurServiceCard";
import Container from "@/components/Container";
import {
  NextBtnIcon,
  RightIcon,
} from "@/utils/HospitalityLandingPageIcons/Icons";
import { PopupForm } from "@/app/hospitality/components";

interface OurServicesProps {
  title: string;
  subTitle?: string;
  description?: string;
  button?: {
    label: string;
    href: string;
  };
  items: {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
    subIconTitle?: string;
    link: {
      label: string;
      href: string;
    };
  }[];
}

const OurServices = ({ title, subTitle, button, items }: OurServicesProps) => {
  return (
    <Section className="bg-blue-dark">
      <Container>
        <div className="max-w-5xl mx-auto text-center space-y-8 poppins">
          <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
            {title}
          </h2>

          <h3
            className="md:text-5xl/[4rem] text-2xl font-medium text-white"
            dangerouslySetInnerHTML={{ __html: subTitle ?? "" }}
          ></h3>
        </div>

        <div className="w-full p-2 mt-12 com relative">
          {items && items?.length > 0 && (
            <SwiperCarousel
              data={items}
              modules={[Autoplay, Pagination, Navigation]}
              // autoplay={{ delay: 12000 }}
              slidesPerView={1}
              spaceBetween={24}
              // loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
                el: ".pagination-ourservice",
              }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              className="w-full"
              renderSlide={(card) => <OurServiceCard {...card} />}
            />
          )}

          <div>
            <div className="disabled:hidden rotate-180 cursor-pointer button-prev bg-white flex items-center justify-center rounded-full md:w-12 w-10 shadow-xl  md:-left-5 -left-[14px] aspect-square absolute top-1/2 -translate-y-[100%] z-50">
              <NextBtnIcon />
            </div>

            <div className="disabled:hidden cursor-pointer button-next absolute bg-white flex items-center justify-center rounded-full md:w-12 w-10 shadow-xl  md:-right-5 -right-[14px] aspect-square top-1/2 -translate-y-[100%] z-50">
              <NextBtnIcon />
            </div>
          </div>

          <div className="pagination-ourservice flex justify-center mt-10"></div>
        </div>

        {/* <div className="max-w-2xl mx-auto md:mt-12 mt-6 text-center space-y-12 poppins">
          <Link
            className="inline-block bg-orange-primary font-medium p text-white text-lg/[24px] py-4 px-6 rounded-md"
            href={`${button?.href}`}
          >
            {button?.label}
          </Link>
        </div> */}
      </Container>
    </Section>
  );
};

export default OurServices;

// export const WebsiteDevelopment = () => {
//   return (
//     <svg
//       width="64"
//       height="64"
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <mask
//         id="mask0_1621_1626"
//         style="mask-type:luminance"
//         maskUnits="userSpaceOnUse"
//         x="0"
//         y="0"
//         width="64"
//         height="64"
//       >
//         <path d="M63.5 63.5V0.5H0.5V63.5H63.5Z" fill="white" stroke="white" />
//       </mask>
//       <g mask="url(#mask0_1621_1626)">
//         <path
//           d="M1.25 19.4158H20.8619H58.1899"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M11.6884 14.0964C13.3254 14.0964 14.6611 12.7649 14.6611 11.1288C14.6611 9.49269 13.3254 8.16119 11.6884 8.16119C10.055 8.16119 8.71912 9.49269 8.71912 11.1288C8.71912 12.7649 10.055 14.0964 11.6884 14.0964Z"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M37.4938 8.16119H48.6763C50.3097 8.16119 51.6455 9.49631 51.6455 11.1288C51.6455 12.7614 50.3097 14.0964 48.6763 14.0964H37.4938C35.8604 14.0964 34.5245 12.7614 34.5245 11.1288C34.5245 9.49631 35.8604 8.16119 37.4938 8.16119Z"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M22.6511 14.0964C24.2881 14.0964 25.6239 12.7649 25.6239 11.1288C25.6239 9.49269 24.2881 8.16119 22.6511 8.16119C21.0178 8.16119 19.6819 9.49269 19.6819 11.1288C19.6819 12.7649 21.0178 14.0964 22.6511 14.0964Z"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M20.302 29.0304L17.8004 39.4988"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M26.0634 38.5532L29.603 34.5797C29.7589 34.4062 29.7589 34.123 29.603 33.9495L26.0634 29.976"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M12.0392 38.5532L8.49957 34.5797C8.34357 34.4062 8.34357 34.123 8.49957 33.9495L12.0392 29.976"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M50.5649 34.555C51.9325 34.8596 53.2116 35.3979 54.3632 36.1203L55.3872 35.1004C55.9931 34.4913 56.9887 34.4913 57.5982 35.1004L59.2104 36.7118C59.8197 37.3209 59.8197 38.316 59.2104 38.9216L58.1899 39.945C58.9092 41.0854 59.4406 42.3533 59.749 43.706H61.1839C62.045 43.706 62.75 44.4108 62.75 45.2678V47.552C62.75 48.4089 62.045 49.1136 61.1839 49.1136H59.7419C59.4335 50.4594 58.9021 51.7201 58.1899 52.8534L59.2104 53.8733C59.8197 54.4824 59.8197 55.4775 59.2104 56.0831L57.5982 57.698C56.9887 58.3071 55.9931 58.3071 55.3872 57.698L54.3632 56.678C53.2259 57.3934 51.9609 57.9246 50.6074 58.2328V59.6846C50.6074 60.5453 49.9022 61.25 49.0449 61.25H46.7595C45.9019 61.25 45.1969 60.5453 45.1969 59.6846V58.2293C43.8504 57.9246 42.5855 57.3899 41.448 56.678L40.4276 57.698C39.8181 58.3071 38.8226 58.3071 38.2166 57.698L36.601 56.0831C35.995 55.4775 35.995 54.4824 36.601 53.8733L37.6249 52.8534C36.9092 51.7201 36.3777 50.4594 36.0695 49.1136H34.6202C33.7594 49.1136 33.0576 48.4089 33.0576 47.552V45.2678C33.0576 44.4108 33.7594 43.706 34.6202 43.706H36.066C36.3706 42.3674 36.8951 41.1138 37.6001 39.984L36.5726 38.9535C35.9632 38.3479 35.9632 37.3528 36.5726 36.7436L38.1847 35.1323C38.7942 34.5231 39.7899 34.5231 40.3957 35.1323L41.4126 36.1451C42.5466 35.4263 43.8079 34.8914 45.1544 34.5763V33.135C45.1544 32.2744 45.8559 31.5696 46.7169 31.5696H48.9987C49.8597 31.5696 50.5649 32.2744 50.5649 33.135V34.555Z"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M47.9039 39.9699C51.4612 39.9699 54.3455 42.8526 54.3455 46.4116C54.3455 49.9672 51.4612 52.8499 47.9039 52.8499C44.343 52.8499 41.4586 49.9672 41.4586 46.4116C41.4586 42.8526 44.343 39.9699 47.9039 39.9699Z"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M13.3041 49.1135H5.90575C3.34775 49.1135 1.25 46.6099 1.25 43.5537V8.30978C1.25 5.25015 3.344 2.7499 5.90575 2.7499H11.2986H53.5341C56.0959 2.7499 58.1899 5.25365 58.1899 8.30978V35.6918M34.6202 49.1135H24.476"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M18.9025 49.1135H18.9272"
//           stroke="#F26633"
//           strokeMiterlimit="10"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </g>
//     </svg>
//   );
// };
