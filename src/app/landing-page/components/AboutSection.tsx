import { CtaBtnPropsType } from "@/@types/@types";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography-new";
import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string[];
  points: {
    list: string[];
    src: string;
  }[];
  stats: {
    no: string;
    list: string[];
    growthPercentage: {
      value: string;
      label: string;
      progress: number;
    }[];
  };
  cta: CtaBtnPropsType;
}

const AboutSection: React.FC<Props> = ({
  title,
  subTitle,
  description,
  points,
  stats,
  cta,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 items-center">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          subTitleClassName="span-color"
        />
        <p
          className="text-secondary2 text-xl"
          dangerouslySetInnerHTML={{ __html: description[0] }}
        ></p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
        {points.map((point, index) => (
          <div
            key={index}
            className="relative w-full md:aspect-square aspect-[4/4.75] overflow-hidden rounded-2xl "
          >
            <Image src={point.src} alt="about" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10" />
            <p
              className={`text-white  absolute  z-10  ${index === 0 ? "text-xl md:text-[23px] inset-x-0 top-0 px-6 py-9" : "md:text-[23px] text-[17.89px] font-semibold md:mx-6 mx-5 text-center backdrop-blur-md bg-[#0A0C2D]/20 shadow-inner top-1/2 inset-x-0 -translate-y-1/2 text-nowrap px-5 py-3 rounded-full"} `}
              dangerouslySetInnerHTML={{ __html: point.list[0] }}
            ></p>
            <div
              className={`flex items-center gap-2 ${index === 0 ? "justify-between" : "justify-center"} absolute inset-x-0 bottom-0 z-10 px-6 py-9`}
            >
              {index === 0 && (
                <div className="p-2 w-[4.2rem] md:aspect-[4/1.5]  rounded-[100px] bg-gradient-to-r from-50% from-[#0B57F8] to-100% to-[#3B92E3] flex items-center justify-end">
                  <span className="bg-white md:w-4 w-2.5 aspect-square rounded-full"></span>
                </div>
              )}
              <p
                className={`text-white font-semibold ${index === 0 ? "md:text-xl text-[0.97rem] italic" : "text-center "}`}
                dangerouslySetInnerHTML={{ __html: point.list[1] }}
              ></p>
            </div>
          </div>
        ))}
        <div className="md:px-6 px-3 md:py-9 py-6 bg-[#E7F1FF] rounded-2xl flex flex-col items-center justify-between">
          <div className="flex flex-col gap-2 lg:gap-3.5">
            <h3 className="text-[2.5rem] font-bold text-primary">{stats.no}</h3>
            <h4 className="text-2xl text-primary">{stats.list[0]}</h4>
            <p
              className="text-secondary2 text-lg"
              dangerouslySetInnerHTML={{ __html: stats.list[1] }}
            ></p>
          </div>
          <div className="md:space-y-4 space-y-2 w-full max-xl:mt-6">
            {stats.growthPercentage.map((growth, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2"
              >
                <p
                  className="text-secondary2 font-medium md:text-[15px] text-sm text-nowrap"
                  dangerouslySetInnerHTML={{ __html: growth.label }}
                ></p>
                <div className="flex items-center gap-2">
                  <div className="space-x-1">
                    {Array.from({ length: growth.progress }).map(
                      (_, progressIndex) => (
                        <span
                          key={progressIndex}
                          className={`inline-block h-3.5 w-[.4rem]  rounded-[100px] ${
                            index === 1
                              ? progressIndex === growth.progress - 1
                                ? "bg-[#87A8EE]"
                                : "bg-color4"
                              : index === 2
                                ? progressIndex === growth.progress - 1
                                  ? "bg-[#7FCC9F]"
                                  : "bg-[#16A34A]"
                                : "bg-color4"
                          }`}
                        ></span>
                      )
                    )}
                  </div>
                  <p
                    className="text-primary font-semibold text-nowrap max-sm:text-sm"
                    dangerouslySetInnerHTML={{ __html: growth.value }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center max-md:flex-col justify-between gap-4 mt-14 w-full">
        <p
          className="span-color text-[2.2rem] font-semibold text-primary"
          dangerouslySetInnerHTML={{ __html: description[1] }}
        ></p>
        <CtaBtn
          type={cta.type}
          label={cta.label}
          href={cta.href}
          target={cta.target}
          className="bg-color4 text-white md:w-fit rounded-full justify-between!"
          icon="arrow"
        />
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
