import { Card, Container, Section } from "@/components";
import Card2 from "@/components/Card2";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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

const Needs: React.FC<DataType> = ({
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
  return (
    <Section>
      <Container>
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="lg:text-[2.875rem]/[3.25rem] text-3xl text-blue-dark">
            {title}
            {span && <strong className="text-orange-primary"> {span}</strong>}
          </h2>
          <p className="lg:text-lg text-base text-[#5F5E5E] mt-6 lg:tracking-wider">
            {subtitle}
          </p>
        </div>
        <div
          className={`lg:grid grid-cols-3 gap-9 mt-14 max-w-${
            maxw && "[980px]"
          } mx-auto`}
        >
          {card.map((item, index) =>
            card1 ? (
              <Card
                key={index}
                image={item.image?.src}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ) : (
              <Card2
                key={index}
                image={item.image?.src}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            )
          )}
        </div>
        {label && (
          <div className="flex justify-center mt-20">
            <Link
              href={href || "#"}
              className="bg-blue-dark px-[0.95rem] font-medium py-[.5rem] rounded-xl text-white text-xl shadow-sm shadow-blue-dark hover:bg-transparent border border-blue-dark hover:text-blue-dark transition-all duration-300"
            >
              {label}
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Needs;
