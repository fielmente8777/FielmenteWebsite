import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SocialMedia from "../../../../public/images/Layer-1.webp";
import SearchEngine from "../../../../public/images/Asset-2seo-1.webp";
import RestaurantPaid from "../../../../public/images/Asset-1pc-1.webp";
import WebsiteDevelopment from "../../../../public/images/Website-development-illsutration-2.webp";
import arrow from "../../../../public/images/Symbol.png";
const CardSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-[1100px] mx-auto">
          {data.map((item, index) => (
            <ContainerCard
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              btnName={item.btnName}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CardSection;

const ContainerCard: React.FC<{
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  btnName: string;
  index: number;
}> = ({ src, alt, title, subtitle, link, btnName, index }) => {
  return (
    <article className="lg:grid grid-cols-3 gap-8 p-10 shadow-2xl justify-center items-center mb-10 rounded-3xl">
      <div
        className={`${
          index % 2 === 0 ? "order-last" : "order-first"
        } col-span-1 lg:mb-0 mb-6 lg:block hidden`}
      >
        <div className="relative max-w-[350px] max-h-[320px] h-full w-full aspect-[7/6.5]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(100vw, 100vh)"
          />
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0 ? "order-first" : "order-last"
        } col-span-2 flex flex-col gap-9`}
      >
        <h2 className="lg:text-5xl text-3xl lg:text-start text-center font-extrabold text-black">
          {title}
        </h2>
        <p className="text-lg text-[#737373] text-justify">{subtitle}</p>
        <div className="h-max w-full flex justify-center lg:justify-start">
          <Link
            href={link}
            className="border-[3px] border-orange-primary text-orange-primary lg:text-lg text-[1.2rem] font-semibold py-6 lg:px-10 px-7 rounded-full hover:bg-black transition-all duration-300 flex gap-4 items-center justify-center w-max"
          >
            <Image src={arrow} alt="arrow" width={15} height={10} />
            {btnName}
          </Link>
        </div>
      </div>
    </article>
  );
};

interface CardSectionProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  btnName: string;
}

const data: CardSectionProps[] = [
  {
    src: SocialMedia,
    alt: "social media marketing",
    title: "Hotel & Restaurant Social Media Marketing",
    subtitle:
      "For businesses in the Hospitality industry, social media is a boon that lets more potential customers know about your business and helps you to accelerate your brand image. Our quirky social team manages the overall ideation, graphic designing, copywriting, and monitoring that will help you to skyrocket your overall engagement with the customers.",
    link: "/hospitality-marketing-services/social-media-marketing-agency",
    btnName: "Get a free Social Media Audit Report",
  },
  {
    src: SearchEngine,
    alt: "search engine optimization",
    title: "Hotel & Restaurant Search Engine Optimization",
    subtitle:
      "Fielmente is a leading Hotel Marketing Agency in India and Restaurant marketing agency in India. With our professional SEO services, we ensure that your sites will achieve high ranks on Google and different search engines. We’ve been providing tailored solutions to businesses hoping to broader their online presence and ROI. Our tried-and-true SEO techniques have brought immense success to clients.",
    link: "/hospitality-marketing-services/seo-agency",
    btnName: "Get a free SEO Report",
  },
  {
    src: RestaurantPaid,
    alt: "restaurant paid ads",
    title: "Hotel & Restaurant Paid Advertisement",
    subtitle:
      "When it comes to paid promotion, our ad experts strive to craft personalized and effective social media strategies that drive more customers as well as revenue to your business. With a team of PPC experts, we are well-known for delivering real end results to our clients quickly as well as efficiently.",
    link: "/hospitality-marketing-services/google-ads-agency",
    btnName: "Consult with us",
  },
  {
    src: WebsiteDevelopment,
    alt: "web development",
    title: "Hotel Website Development",
    subtitle:
      "Are you in need of a website that effectively represents your brand and drives results? Look no further! Our Marketing Agency offers top-notch hotel website development services that will take your online presence to the next level.",
    link: "/contact",
    btnName: "Schedule a Demo",
  },
];
