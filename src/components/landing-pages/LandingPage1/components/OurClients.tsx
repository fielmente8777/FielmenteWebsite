import Container from "@/components/Container";
import Section from "@/components/Section";
import Image from "next/image";

import React from "react";

interface OurClientProps {
  title?: string;
  subTitle?: string;
  items?: {
    src: string;
    alt: string;
  }[];
}

const OurClients = ({ items, subTitle, title }: OurClientProps) => {
  return (
    <Section>
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h2 className="bg-[#FFE7DE] text-blue-dark text-sm rounded-full px-4 w-fit mx-auto py-2 poppins">
          {title}
        </h2>

        <h3 className="md:text-5xl text-3xl font-medium text-blue-dark poppins">
          {subTitle}
        </h3>
      </div>

      <div className="mt-10">
        {/* upper line gradient */}
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[1px] w-full" />

        <Container>
          <div className="scroller py-6" data-direction="left">
            <div className="tag-list scroller_inner text-white">
              {items?.map((slider, index) => (
                <div key={index} className="w-full">
                  <div className="relative w-48 aspect-[3/2]">
                    <Image
                      src={slider?.src}
                      alt={slider?.alt}
                      className="object-contain"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* lower line gradient */}
        <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[1px] w-full" />
      </div>
    </Section>
  );
};

export default OurClients;
