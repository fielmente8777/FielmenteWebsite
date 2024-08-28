import Link from "next/link";
import Container from "./Container";
import Section from "./Section";
import Image from "next/image";

interface data_type {
  title: string;
  description: string;
  span: string;
}

const GotEnquiry: React.FC<data_type> = ({ title, description, span }) => {
  return (
    <Section>
      <Container>
        <div className="max-w-[1040px] mx-auto bg-blue-dark">
          <div className="flex flex-col gap-7 justify-center items-center lg:pt-[4.5rem] ">
            <h2 className="text-xl text-center text-white">
              {title}
            </h2>
            <p className="text-white lg:text-[2.875rem]/[3.5rem] text-center px-16">{description}
                {" "}<b className="text-orange-primary">{span}</b>
            </p>
          </div>
          <div className="flex justify-center items-center py-10 mt-2">
            <Link
              href="/contact-us"
              className="bg-transparent px-6 hover:bg-white font-medium py-3 rounded-full text-orange-primary border-2 border-orange-primary lg:text-xl text-lg flex gap-2 items-center"
            >
              Get in touch
              <Image src="/icon/arrow-right.png" alt="arrow" width={20} height={20} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GotEnquiry;
