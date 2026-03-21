"use client";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import { SectionHeadingDesc } from "@/components/typography";
import DataContext from "@/contextApi/DataContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Autoplay } from "swiper/modules";
import { contacts } from "../../../../../contact";
import IndustryWeServeCard from "./cards/WeServeCard";

export interface IndustryWeServeProps {
  title: string;
  subTitle?: string;
  description?: string;
  button: {
    label: string;
    href: string;
  };
  items: {
    title: string;
    image: { src: string; alt: string; desc?: string };
  }[];
}

const IndustryWeServe = ({
  title,
  subTitle,
  description,
  button,
  items,
}: IndustryWeServeProps) => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  const pathName = usePathname();
  return (
    <Section>
      <div className="max-w-5xl mx-auto text-center space-y-3 poppins">
        {/* <h2 className="bg-[#FFE7DE] text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
          {title}
        </h2>
        <h3 className=" text-2xl font-medium text-blue-dark">{subTitle}</h3> */}
        <SectionHeadingDesc title={title} description={subTitle} textcenter />
      </div>

      <div className="w-full bg-blue-dark py-4 mt-12">
        {items && items?.length > 0 && (
          <SwiperCarousel
            data={items}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            spaceBetween={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 2,
              },
            }}
            className="w-full bg-white"
            renderSlide={(card) => <IndustryWeServeCard {...card} />}
          />
        )}
      </div>

      <div className="md:max-w-2xl w-full max-md:px-4 mx-auto mt-12 text-center space-y-4 poppins">
        <p className="text-[#1C1c1c] md:text-xl">{description}</p>
        {pathName === "/landing-page/" ? (
          <Link
            href={contacts.WhatsAppCta}
            onClick={() => setIsOpenPopupForm(true)}
            className="inline-block bg-[#1c1c1c] font-medium text-white text-lg/[24px] py-4 px-6 rounded-md"
          >
            {button?.label}
          </Link>
        ) : (
          <button
            onClick={() => setIsOpenPopupForm(true)}
            className="inline-block bg-[#1c1c1c] font-medium text-white text-lg/[24px] py-4 px-6 rounded-md"
          >
            {button?.label}
          </button>
        )}
      </div>

      {/* <PopupForm setShowModal={setShowModal} showModal={showModal} /> */}
    </Section>
  );
};

export default IndustryWeServe;
