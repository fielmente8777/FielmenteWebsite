import Container from "@/components/Container";
import Form from "@/components/Form";
import HospitalityLandingBannerForm from "@/components/Forms/HospitaltiyLadingBannerForm";
import Section from "@/components/Section";
import React from "react";

interface HeroBannerProps {
  title?: string;
  subTitle?: string;
  items?: {
    title: string;
    subTitle: string;
  }[];
}

const HeroBanner = ({ title, subTitle, items }: HeroBannerProps) => {
  return (
    <Section className="!p-0">
      <div className="bg-blue-dark w-full lg:py-14 py-10 flex items-center justify-center">
        <Container>
          <div className="grid lg:grid-cols-12 lg:gap-0 gap-6 text-white items-center poppins">
            <div className="lg:col-span-8 col-span-1 space-y-8 lg:pr-28">
              <h2 className="md:text-6xl/tight text-3xl font-semibold md:text-start text-center">
                {title}
              </h2>

              <h3 className="text-lg md:text-start text-center">{subTitle}</h3>

              <div className="bg-[linear-gradient(to_right,_#110D3C,_#FFFFFF,_#110D3C)] h-[1px] w-full" />

              <div className="flex items-center justify-between">
                {items?.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-center text-orange-primary md:text-3xl text-2xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-center">{item.subTitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 w-full">
              <HospitalityLandingBannerForm />
            </div>
          </div>
        </Container>
      </div>

      {/* rounded shape  */}
      <div className="h-20 lg:mt-0 -mt-4 overflow-hidden relative rotate-180">
        <div className="w-[7800px] h-[7800px] rounded-full bg-bg absolute top-0 left-1/2 -translate-x-1/2 bg-blue-dark" />
      </div>
    </Section>
  );
};

export default HeroBanner;
