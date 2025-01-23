"use client";
import { Container, Section } from "@/components";
import {
  FoodAggregatorsOptimisation,
  PerformanceMarketing,
  SalesAndMarketingAutomation,
  SearchEngineOptimization,
  SocialMediaManagement,
  WebsiteDevelopment,
} from "@/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { PopupForm } from "@/app/landing-page/components";
import { useState } from "react";

interface OurServicesProps {
  title: string;
  subTitle: string;
  items: {
    title: string;
    bold: string;
    icon: JSX.Element;
  }[];
}

const OurServices: React.FC<OurServicesProps> = ({
  title,
  subTitle,
  items,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Section>
      <div className="bg-blue-dark text-white lg:py-20 py-12">
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl text-lg text-center helv">
              {title}
              <br />
              <b className="text-orange-primary lg:text-4xl text-xl">
                {subTitle}
              </b>
            </h2>
            <div className="lg:grid hidden grid-cols-6 gap-4 mt-10">
              {items.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  bold={item.bold}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="lg:hidden block mt-4">
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
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      title={item.title}
                      bold={item.bold}
                      icon={item.icon}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-8 flex justify-center">
              <button
              onClick={() => setShowModal(true)}
               className="bg-orange-primary text-white py-4 px-8 rounded-sm hover:bg-white hover:text-blue-dark active:scale-95 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </Container>
      </div>
      {showModal && <PopupForm showModal={showModal} setShowModal={setShowModal} />}
    </Section>
  );
};

export default OurServices;

export const Card = ({
  title,
  bold,
  icon,
}: {
  title: string;
  bold: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-lg">
      <span className="">{icon}</span>
      <div>
        <h3 className="text-lg text-center text-blue-dark helv">
          {title}
          <br /> <b>{bold}</b>
        </h3>
      </div>
    </div>
  );
};
