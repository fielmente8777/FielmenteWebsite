"use client";
import Container from "@/components/Container";
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
    <Container>
      <div className="scroller py-24" data-direction="left">
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
    </Container>
  );
};

export default OurPartners;
