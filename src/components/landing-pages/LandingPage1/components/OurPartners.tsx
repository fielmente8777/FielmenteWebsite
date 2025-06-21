"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SwiperCarousel from "@/components/SwiperCarousel";
import Image from "next/image";
import React, { useEffect } from "react";
interface OurPartnersProps {
  images?: {
    src: string;
    alt: string;
  }[];
}

const OurPartners = ({ images }: OurPartnersProps) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller_inner");
        if (!scrollerInner) return;

        const scrollerInnerChildren = Array.from(scrollerInner.children);
        scrollerInnerChildren.forEach((child) => {
          const clone = child.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(clone);
        });
      });
    }
  }, []);

  return (
    <Section>
      {/* upper line gradient */}
      <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[1px] w-full" />

      <Container>
        <div className="md:grid grid-cols-6 py-14 hidden">
          {images?.map((slider, index) => (
            <div key={index} className="w-full">
              <div className="relative w-full aspect-[6/1.25]">
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

        {images && images.length > 0 && (
          <div className="block md:hidden py-7">
            <SwiperCarousel
              data={images}
              slidesPerView={2}
              spaceBetween={10}
              renderSlide={(slider) => (
                <div className="relative w-full aspect-[8/2]">
                  <Image
                    src={slider?.src}
                    alt={slider?.alt}
                    className="object-contain"
                    fill
                  />
                </div>
              )}
            />
          </div>
        )}

        {/* <div className="py-14 space-y-8">
          <div className="scroller" data-direction="left">
            <div className="tag-list scroller_inner text-white">
              {images?.map((slider, index) => (
                <div key={index} className="w-full">
                  <div className="relative w-48 aspect-[3/1.06]">
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
        </div> */}
      </Container>

      {/* lower line gradient */}
      <div className="bg-[linear-gradient(to_right,_#FFFFFF,_#F26633,_#FFFFFF)] h-[1px] w-full" />
    </Section>
  );
};

export default OurPartners;
