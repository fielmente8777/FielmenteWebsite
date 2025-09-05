"use client";
import { BannerPropsType } from "@/@types/@types";
import DataContext from "@/contextApi/DataContext";
import { ArrowBtn } from "@/utils/newIcons";
import Image from "next/image";
import { useContext } from "react";
import Form from "@/components/Forms/Form";
import { Container, Section } from "../sectionComponants";
import { Headings } from "../typography";
import { FillLocationIcon } from "../../utils/newIcons";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  description,
  imgSrc,
}) => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <Section
      defaultPadding={false}
      className="relative overflow-hidden overflow-x-clip w-full xl:aspect-[16/8.7] lg:aspect-[4/3] md:aspect-[4/3.8] aspect-[4/5] bg1"
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover md:object-top"
        priority
        loading="eager"
        sizes="100vw"
      />
      <Image
        src={"/home/Vector3.png"}
        alt={title}
        width={525}
        height={276.87}
        className="object-cover md:block  hidden absolute top-28 left-[42%] -translate-x-[42%] -translate-y-1/2 z-50"
        priority
        loading="eager"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/90 flex items-center justify-center">
        <Container className="bg2">
          <div className="flex flex-col gap-8 bg3 pointer-events-none">
            <div className="flex flex-col md:gap-8 xl:gap-2">
              <div className="flex items-center justify-center md:text-2xl text-white divide-x divide-white">
                <span className="px-4 flex items-center gap-1">
                  <span className="text-orange-primary">
                    <FillLocationIcon />
                  </span>
                  <span className="fade-text">
                    {"GURGAON".split("").map((char, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="px-4 fade-text">
                  {"PUNE".split("").map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                      {char}
                    </span>
                  ))}
                </span>
              </div>

              <Headings
                level={1}
                className="text-white text-center max-md:!text-xl x_lg_font_s xl:leading-2 mt-4"
                heading={title}
              />

              <Headings
                level={2}
                className="text-white text-center xx_lg_font_s heading"
                heading={subTitle}
              />
            </div>
            <div className="max-w-5xl mx-auto xl:block hidden pointer-events-auto">
              <Form />
            </div>
            <p className="text-white text-center md:text-xl max-w-5xl mx-auto">
              {description}
            </p>

            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="w-fit xl:hidden pointer-events-auto mx-auto py-3 text-center bg-secondary text-white justify-center border-orange-primary text-md px-8 h-full   font-semibold hover:bg-white hover:text-secondary duration-300 rounded-full hover:scale-105 border"
            >
              <span className="flex items-center justify-center gap-2">
                Get a FREE Quote!
                <span>
                  <ArrowBtn />
                </span>
              </span>
            </button>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;
