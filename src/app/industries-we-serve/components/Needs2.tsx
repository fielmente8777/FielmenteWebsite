"use client";
import { Container, Section } from "@/components";
import DataContext from "@/contextApi/DataContext";
import { StaticImageData } from "next/image";
import { useContext } from "react";

export interface DataType {
  title: string;
  span?: string;
  subtitle: string;
  label?: string;
  href?: string;
  maxw?: boolean;
  textCenter?: boolean;
  card1?: boolean;
  card: {
    image?: { src?: StaticImageData | string };
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
  }[];
}
const Needs2: React.FC<DataType> = ({
  title,
  subtitle,
  card,
  span,
  href,
  label,
  maxw,
  card1,
  textCenter = false,
}) => {
  const {setIsOpenPopupForm} = useContext(DataContext);
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <h2 className="lg:text-[2.875rem]/[3.25rem] text-3xl text-blue-dark">
            {title}
            {span && <strong className="text-orange-primary"> {span}</strong>}
          </h2>
          <p className="lg:text-lg text-base text-[#5F5E5E] lg:tracking-wider">
            {subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 mt-8 gap-3 justify-center">
          {card.map((item, index) => (
            <div
              className="flex flex-col gap-5 items-center justify-center border px-10 py-6 border-orange-primary"
              key={index}
            >
              <div>{item.icon}</div>
              <h3 className="text-xl text-blue-dark">{item.title}</h3>
            </div>
          ))}
        </div>
        {label && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="bg-orange-primary px-[0.95rem] font-medium py-[.5rem] rounded-xl text-white text-xl shadow-sm shadow-orange-primary hover:bg-transparent border border-orange-primary hover:text-blue-dark transition-all duration-300"
            >
              {label}
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Needs2;
