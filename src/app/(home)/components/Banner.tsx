import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../../public/images/img1.png";
import img2 from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import img3 from "../../../../public/images/img2.png";

const Banner : React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="lg:pb-32 lg:pt-36 bg-contain bg-center bg-no-repeat bg-[url('/images/uih7.webp')]">
          <h1 className="lg:text-9xl text-[2.6rem] text-black font-bold text-center">
            Hospitality <br className="lg:block hidden" /> Marketing Agency
          </h1>
          <p className="text-[#111] lg:text-[2rem] text-2xl text-center mt-6">
            India’s Leading Hotel & Restaurant Marketing Agency with over 10+
            Years of Experience
          </p>
        </div>
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-3 gap-4 mt-10 lg:mt-0 ">
            {data.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 2 ? "items-start" : "items-center"
                } w-full  rounded-2xl flex  justify-center`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;

interface data_type {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

const data: data_type[] = [
  {
    src: img1,
    alt: "",
    width: 450,
    height: 386.22,
  },
  {
    src: img2,
    alt: "",
    width: 319.98,
    height: 213.31,
  },
  {
    src: img3,
    alt: "",
    width: 350.98,
    height: 226.66,
  },
];
