import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";
import consult from "../../../../public/images/partners-sitting-table.webp";
import strategise from "../../../../public/images/img1.png";
import execute from "../../../../public/images/aerial-view-barista-book-1024x1024.webp";

const Strategise: React.FC = () => {
  const data = [
    "Transforming hotels & restaurants into thriving destinations with our expert hospitality marketing solutions and Hotel Marketing Agency.",
    "We believe that your stories are worth telling and we design compelling ways to showcase your brand. You might be wondering what makes us stand out from the rest.? Well, we are all-rounders. From social media marketing to search engine optimization and paid campaigns, these are just a few of the services to name.",
    "Since 2020, we have completed 120 projects with a 95% satisfaction rate. But! This is just a start. We, the best restaurant marketing agency in India, personalised strategies, to build trust and drive immense growth to the success of your hotel and restaurant.",
    "As a leading marketing company for hotels and marketing company for resorts, we specialize in creating impactful campaigns to attract guests. Our expertise as a marketing agency for resorts ensures a personalized approach for your brand. Recognized as a top hotel digital marketing agency and hotel digital marketing company, we deliver measurable results through cutting-edge strategies. Choose Fielmente as your digital marketing agency for hotels and digital marketing company for hotels to transform your hospitality business with proven success and innovation.",
  ];
  return (
    <Section className="bg-[#0F110F] text-white lg:py-24">
      <Container>
        <article>
          <h2 className="lg:text-4xl text-3xl font-bold text-center">
            This is our Behind the Scene
          </h2>
          <p className="text-[#BCBCBC] lg:text-[1.125rem]/[2.1375rem] text-2xl text-center mt-6 max-w-5xl mx-auto">
            These are the foundation of our hospitality marketing agency&apos;s
            approach, aimed at making your hospitality business thrive, leading
            to success
          </p>
        </article>
        <div className="mt-20 max-md:mt-4 lg:grid grid-cols-3 gap-8 ">
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
        <article className="lg:py-14 py-6">
          <h2 className="lg:text-4xl text-2xl font-bold text-center lg:text-start">
            Work with India’s Best Hotel Marketing Agency
          </h2>
          {data.map((item, index) => (
            <p
              className="text-[#BCBCBC] text-lg mt-6 text-center lg:text-start"
              key={index}
            >
              {item}
            </p>
          ))}
          {/* <p className="text-[#BCBCBC] text-lg mt-6 text-center lg:text-start">
            Transforming hotels & restaurants into thriving destinations with
            our expert hospitality marketing solutions and Hotel Marketing
            Agency.
            
          </p> */}
          {/* <p className="text-[#BCBCBC] text-lg mt-6 text-center lg:text-start">
            We believe that your stories are worth telling and we design
            compelling ways to showcase your brand. You might be wondering what
            makes us stand out from the rest.? Well, we are all-rounders. From
            social media marketing to search engine optimization and paid
            campaigns, these are just a few of the services to name.
          </p>
          <p className="text-[#BCBCBC] text-lg mt-6 text-center lg:text-start">
            Since 2020, we have completed 120 projects with a 95% satisfaction
            rate. But! This is just a start. We, the best restaurant marketing
            agency in India, personalised strategies, to build trust and drive
            immense growth to the success of your hotel and restaurant.
          </p> */}
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
      className="rounded-[3.5rem] py-11 px-9 shadow-md flex flex-col items-center lg:gap-0 gap-2 lg:mb-0 justify-between mb-6"
      style={{ background: color }}
    >
      <div className="w-full">
        <h3 className="lg:text-3xl text-2xl font-bold text-black text-center lg:text-start">
          {title}
        </h3>
        <p className="text-black max-md:text-center  lg:text-[1.125rem]/[1.9rem] mt-2">
          {subtitle}
        </p>
      </div>
      <div className="relative w-full aspect-[1/1] overflow-hidden rounded-3xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-3xl"
        />
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
