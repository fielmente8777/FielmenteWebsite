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
  img?: {
    src?: StaticImageData | string;
    alt?: string;
  };
  card: {
    image?: { src?: StaticImageData | string };
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
  }[];
}
const NeedSeo: React.FC<DataType> = ({
  title,
  subtitle,
  card,
  span,
  href,
  label,
  img,
}) => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <Section>
      <Container>
        <div className="lg:grid grid-cols-3 gap-5 flex flex-col-reverse">
          <div className="col-span-2">
            <h2 className="lg:text-[2.875rem]/[3.25rem] text-3xl text-blue-dark">
              {title}
              {span && <strong className="text-orange-primary"> {span}</strong>}
            </h2>
            <p className="lg:text-lg text-base text-[#5F5E5E] mt-6 lg:tracking-wider">
              {subtitle}
            </p>
            <div className={`grid grid-cols-2 max-md:grid-cols-1 gap-9 mt-14`}>
              {card.map((item, index) => (
                <div className="grid grid-cols-3 items-center" key={index}>
                  <div className="col-span-1 flex items-center me-12">
                    {item.image ? (
                      <Image
                        src={item.image?.src || ""}
                        alt="alt"
                        width={60}
                        height={60}
                      />
                    ) : (
                      <div className="rounded-full flex items-center">
                        {item.icon}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 col-span-2 lg:-ms-12">
                    <h3 className="text-xl text-blue-dark font-semibold">{item.title}</h3>
                    <p className="text-lg text-[#5F5E5E]">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={img?.src || ""}
              alt={img?.alt || title}
              width={410}
              height={572}
            />
          </div>
        </div>

        {label && (
          <div className="flex justify-center mt-20">
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

export default NeedSeo;
