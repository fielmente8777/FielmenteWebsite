"use client";
import { Container, Section } from "@/components";
import DataContext from "@/contextApi/DataContext";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";

interface DataType {
  title: string;
  span?: string;
  subtitle: string;
  label?: string;
  href?: string;
  order?: boolean;
  img?: {
    src?: StaticImageData | string;
    alt?: string;
  };
  //   card: {
  //     image?: { src?: StaticImageData | string };
  //     icon?: React.ReactNode;
  //     title: string;
  //     subtitle?: string;
  //   }[];
}
const NeedSeo2: React.FC<DataType> = ({
  title,
  subtitle,
  span,
  href,
  label,
  img,
  order = false,
}) => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <Section>
      <Container>
        <div className="lg:grid grid-cols-2 gap-5 flex flex-col-reverse">
          <div
            className={`flex justify-center items-center ${
              order ? "order-last" : "order-first"
            }`}
          >
            <div className="w-full relative aspect-[4/3]">
              <Image
                src={img?.src || ""}
                alt={img?.alt || title}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className={`${order ? "order-first" : "order-last"}`}>
            <h2 className="lg:text-[2.875rem]/[3.25rem] text-3xl text-blue-dark">
              {title}
              {span && (
                <strong
                  className={`text-orange-primary ${
                    order ? "lg:block inline" : "inline"
                  }`}
                >
                  {" "}
                  {span}
                </strong>
              )}
            </h2>
            <p className="lg:text-lg text-base text-[#5F5E5E] mt-6 lg:tracking-wider">
              {subtitle}
            </p>
            {label && (
              <div className="mt-7">
                <button
                  onClick={() => setIsOpenPopupForm(true)}
                  className="bg-orange-primary px-[0.95rem] font-medium py-[.5rem] rounded-xl text-white text-xl shadow-sm shadow-orange-primary hover:bg-transparent border border-orange-primary hover:text-blue-dark transition-all duration-300"
                >
                  {label}
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NeedSeo2;
