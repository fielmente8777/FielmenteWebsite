import { Container, Form2, Section } from "@/components";
import React from "react";

interface BannerProps {
  title: string;
  subTitle: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, subTitle, description }) => {
  return (
    <Section className="bg-banner ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-4 w-full max-w-[47rem] lg:pe-12">
            <p
              className="text-sm text-orange-primary helv"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            ></p>
            <h1
              className="text-2xl tracking-wider lg:text-5xl/tight text-blue-dark helv"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <p
              className="text-gray-tertiary"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <Form2
              title="Grow Your Restaurant!"
              bold="Partner with Fielmente"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
