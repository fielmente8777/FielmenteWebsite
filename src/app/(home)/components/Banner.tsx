import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../../public/images/img1.webp";
import img2 from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import img3 from "../../../../public/images/img2.webp";
import BannerImage from "../../../../public/icon/growth.gif";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className="bg-white">
      <Section>
        <Container>
          {/* <div className="lg:pb-20 ">
          <div className="bg-contain w-full h-full bg-center bg-no-repeat bg-[url('/images/uih7.webp')]">
            <h1 className="lg:text-[4.5rem]/[5.5rem] bg-imgclass text-2xl text-black font-bold lg:py-10 text-center ">
              Hospitality <br className="lg:block hidden" /> Marketing Agency
            </h1>
            <p className="text-[#111] lg:text-[1.38rem]/[2rem] text-lg text-center mt-3 lg:mt-6">
              India’s Leading Hotel & Restaurant Marketing Agency with over 10+
              Years of Experience
            </p>
          </div>
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
                  className="rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div> */}


          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="text-2xl md:text-5xl font-semibold text-[#110D3C]">India’s Leading Hospitality Marketing <span className="text-[#F26633]">Agency</span></h1>
              <p className="text-gray-primary text-2xl">India’s Leading Hotel, Resort & Restaurant Marketing Agency with over 10+ Years of Experience</p>
              <div>
                <Link href="#contactForm" className="border border-[#F26633] py-3 px-4 text-[#F26633] hover:bg-[#F26633] hover:text-white transition-all duration-200">Book Demo</Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={BannerImage} alt="banner" width={400} height={400} />
            </div>
          </div>
        </Container>
      </Section>
    </div>

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
