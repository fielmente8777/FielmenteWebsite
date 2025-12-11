"use client";
import { AboutCompanyPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeadingDesc } from "@/components/typography";
import DataContext from "@/contextApi/DataContext";
import { RightTickIcon } from "@/utils/newIcons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { contacts } from "../../../../contact";

const AboutCompany: React.FC<AboutCompanyPropsType> = ({
  title,
  subTitle,
  description,
  listData,
  linksData,
  imgSrc,
}) => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  const pathName = usePathname();
  return (
    <SectionWithContainer
      sectionClassName="about-class lg:py-24 max-lg:pt-24 max-md:pb-10"
      defaultPadding={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        <div className="lg:col-span-3 flex flex-col gap-8 max-w-2xl">
          <SectionHeadingDesc
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-color"
          />
          <div className="relative w-full lg:hidden aspect-[4/3]">
            <Image
              src={imgSrc[0]}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-light text-xl">{description[0]}</p>
          <ul className="flex flex-col gap-4">
            {listData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-light text-xl"
              >
                <span className="">
                  <RightTickIcon />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
          <p className="text-light font-semibold text-xl">{description[1]}</p>
          <div className="flex gap-4 max-lg:pr-4">
            {linksData.map((item, index) =>
              pathName === "/landing-page/" ? (
                <Link
                  href={contacts.WhatsAppCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-secondary lg:w-fit w-full bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => setIsOpenPopupForm(true)}
                  key={index}
                  className="text-secondary lg:w-fit w-full bg-white py-3 px-8 border border-secondary rounded-lg btn-shadow2"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="relative w-full lg:block hidden aspect-square">
            <Image src={imgSrc[0]} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutCompany;
