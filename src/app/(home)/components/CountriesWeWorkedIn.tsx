import { CountriesWeWorkedInPropsType } from "@/@types/@types";
import { Section } from "@/components";
import { SectionHeadingDesc } from "@/components/typography";
import Image from "next/image";

const CountriesWeWorkedIn: React.FC<CountriesWeWorkedInPropsType> = ({
  title,
  subTitle,
  imagesSrc,
}) => {
    const img = imagesSrc[0];
  return (
    <Section defaultPadding={false} className="border-b border-white" >
      <div className="md:space-y-12 space-y-8 pt-14">
        <SectionHeadingDesc
          title={title}
          subTitle={subTitle}
          mdTextCenter
          wrapperClassName="max-w-4xl mx-auto text-color max-md:px-4"
        />
        <div className="relative w-full md:aspect-[4/2] aspect-[4/2]">
          <Image
            src={img}
            alt="img"
            fill
            className="w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default CountriesWeWorkedIn;
