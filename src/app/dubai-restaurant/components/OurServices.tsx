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

const OurServices = () => {
  const data = {
    title: "Boost Your Restaurant's Success with",
    subTitle: "Our Expert Marketing Services",
    items: [
      { title: "Website", bold: "Development", icon: <WebsiteDevelopment /> },
      {
        title: "Performance",
        bold: "Marketing",
        icon: <PerformanceMarketing />,
      },
      {
        title: "Search Engine",
        bold: "Optimization",
        icon: <SearchEngineOptimization />,
      },
      {
        title: "Sales & Marketing",
        bold: "Automation",
        icon: <SalesAndMarketingAutomation />,
      },
      {
        title: "Social Media",
        bold: "Management",
        icon: <SocialMediaManagement />,
      },
      {
        title: "Food Aggregators",
        bold: "Optimisation",
        icon: <FoodAggregatorsOptimisation />,
      },
    ],
  };
  return (
    <Section>
      <div className="bg-blue-dark text-white lg:py-20 py-12">
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl text-xl text-center">
              {data.title}
              <br />
              <b className="text-orange-primary lg:text-4xl text-2xl">
                {data.subTitle}
              </b>
            </h2>
            <div className="lg:grid hidden grid-cols-6 gap-4 mt-10">
              {data.items.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  bold={item.bold}
                  icon={item.icon}
                />
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
          </div>
        </Container>
      </div>
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
        <h3 className="text-lg text-center text-blue-dark">
          {title}
          <br /> <b>{bold}</b>
        </h3>
      </div>
    </div>
  );
};
