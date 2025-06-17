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
      <div className="bg-blue-dark w-full py-14 flex items-center justify-center">
        <Container>
          <div className="grid lg:grid-cols-12 gap-0 text-white items-center poppins">
            <div className="lg:col-span-8 space-y-8 pr-28">
              <h2 className="md:text-6xl/tight text-3xl font-semibold">
                {title}
              </h2>

              <h3 className="text-lg">{subTitle}</h3>

              <div className="flex items-center justify-between">
                {items?.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-center text-orange-primary text-3xl font-bold">
                      {item.title}
                    </h4>
                    <p>{item.subTitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <HospitalityLandingBannerForm />
            </div>
          </div>
        </Container>
      </div>

      {/* rounded shape  */}
      <div className=" h-20 overflow-hidden relative rotate-180">
        <div className="w-[7800px] h-[7800px] rounded-full bg-bg absolute top-0 left-1/2 -translate-x-1/2 bg-blue-dark" />
      </div>
    </Section>
  );
};

export default HeroBanner;
