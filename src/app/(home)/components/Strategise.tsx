import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";
import consult from "../../../../public/images/partners-sitting-table.webp";
import strategise from "../../../../public/images/img1.png";
import execute from "../../../../public/images/aerial-view-barista-book-1024x1024.webp";
import { title } from "process";

const Strategise: React.FC = () => {
  return (
    <Section className="bg-[#0F110F] lg:py-24">
      <Container>
        <article>
          <h2 className="lg:text-5xl text-3xl font-bold text-center">
            This is our Behind the Scene
          </h2>
          <p className="text-[#BCBCBC] lg:text-[1.68rem]/[2rem] text-2xl text-center mt-6 max-w-5xl mx-auto">
            These are the foundation of our hospitality marketing agency&apos;s
            approach, aimed at making your hospitality business thrive, leading
            to success
          </p>
        </article>
        <div className="mt-20 lg:grid grid-cols-3 gap-8 ">
          {cardData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              src={item.image.src}
              alt={item.image.alt}
              color={item.color}
            />
          ))}
        </div>
      </Container>
      <Container>
        <article className="py-20">
          <h2 className="lg:text-5xl text-3xl font-bold text-center lg:text-start">
            Work with India’s Best Hotel Marketing Agency
          </h2>
          <p className="text-[#BCBCBC] text-xl mt-6 text-center lg:text-start">
            Transforming hotels & restaurants into thriving destinations with
            our expert hospitality marketing solutions and Hotel Marketing
            Agency.
          </p>
          <p className="text-[#BCBCBC] text-xl mt-6 text-center lg:text-start">
            We believe that your stories are worth telling and we design
            compelling ways to showcase your brand. You might be wondering what
            makes us stand out from the rest.? Well, we are all-rounders. From
            social media marketing to search engine optimization and paid
            campaigns, these are just a few of the services to name.
          </p>
          <p className="text-[#BCBCBC] text-xl mt-6 text-center lg:text-start">
            Since 2020, we have completed 120 projects with a 95% satisfaction
            rate. But! This is just a start. We, the best restaurant marketing
            agency in India, personalised strategies, to build trust and drive
            immense growth to the success of your hotel and restaurant.
          </p>
        </article>
      </Container>
    </Section>
  );
};

export default Strategise;

export const Card: React.FC<{
  title: string;
  subtitle: string;
  src: string | StaticImageData;
  alt: string;
  color: string;
}> = ({ title, subtitle, src, alt, color }) => {
  return (
    <div
      className="rounded-[3.5rem] p-14 shadow-md flex flex-col  items-center gap-6 lg:mb-0 mb-6"
      style={{ background: color }}
    >
      <div className="w-full">
        <h3 className="text-3xl font-bold text-black text-center lg:text-start">
          {title}
        </h3>
      </div>
      <p className="text-black lg:text-[1.6rem]/[2.5rem]  text-lg mt-4 text-center lg:text-justify">
        {subtitle}
      </p>
      <div className="flex justify-center relative w-full aspect-[4/4] overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-cover rounded-3xl" />
      </div>
    </div>
  );
};

interface cradData_types {
  title: string;
  subtitle: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  color: string;
}

const cardData: cradData_types[] = [
  {
    title: "Consult",
    subtitle:
      "We guide you through every step of your hospitality marketing journey, offering expert advice to increase your hotel occupancy and revenue. Our passionate professionals are dedicated to uplifting your hotel & Restaurant digital business and plan a strategically road maps and action plan with you.",
    image: {
      src: consult,
      alt: "Consult",
    },
    color: "#E9D175",
  },
  {
    title: "Strategise",
    subtitle:
      "We craft data-driven digital marketing strategies, custom-built for your hospitality business. Leveraging hospitality industry insights, consumer trends, and innovative approaches to create a roadmap.",
    image: {
      src: strategise,
      alt: "Strategise",
    },
    color: "#9896FF",
  },
  {
    title: "Execute",
    subtitle:
      "The continuous and ongoing stage is to put the plans into action. Implement the curated hospitality strategies, manage campaigns, and monitor performance to ensure your hotel & restaurant brand stands out.",
    image: {
      src: execute,
      alt: "Execute",
    },
    color: "#EEE",
  },
];
