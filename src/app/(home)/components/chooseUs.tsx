import Container from "@/components/Container";
import Section from "@/components/Section";
import {
  ExpertiseIcon2,
  HotelPerformance2,
  MarketSolution2,
  Optimized2,
  SocialMediaMarketing2,
  WebSiteDevelopmentIcon2,
} from "@/utils/icons";

const ChooseUs: React.FC = () => {
  return (
    <Section>
      <Container>
        <h2 className="lg:text-8xl text-3xl text-center text-black font-bold">
          Why Choose Us?
        </h2>
        <p className="lg:text-4xl text-2xl text-center text-black font-bold mt-6 lg:tracking-wider">
          Force of 20+ Hospitality Marketing Experts
        </p>
        <div className="lg:grid grid-cols-3 gap-9 py-14 max-w-[1100px] mx-auto">
          {ChooseUsData.map((item, index) => (
            <ChooseUsCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              Icon={item.Icon}
            />
          ))}
        </div>
      </Container>

      <Container>
        <article className="max-w-[1100px] mx-auto">
          {data.map((item, index) => (
            <p className="lg:text-[1.9rem]/[4rem] text-lg  lg:text-justify text-center font-medium mb-6 text-black " key={index}>
              {item}
            </p>
          ))}
        </article>
      </Container>
    </Section>
  );
};

export default ChooseUs;

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export const ChooseUsCard = ({ title, subtitle, Icon }: ChooseCardProsData) => {
  return (
    <div className="flex flex-col gap-2 shadow-md hover:shadow-none rounded-xl p-9">
      <div className="flex items-center justify-center">{Icon}</div>
      <h2 className="font-medium lg:min-h-[60px] text-blue-dark text-3xl text-center capitalize">
        {title}
      </h2>
      <p className="text-lg text-[#797979]  text-center">{subtitle}</p>
    </div>
  );
};

const ChooseUsData = [
  {
    title: `Expertise in Hospitality`,
    subtitle:
      "With a decade of experience in the hospitality industry, we are the perfect partner to market your hotel, resort, villa & restaurant.",

    Icon: <ExpertiseIcon2 />,
  },
  {
    title: "Strategic Social Media Marketing",
    subtitle:
      "Our proven strategy of hotel social media management boost your brand’s exposure engage your target audience and gives you more bookings.",
    Icon: <SocialMediaMarketing2 />,
  },
  {
    title: "Optimized for Search Engines",
    subtitle:
      "Maximise your hotel’s google visibility and increase organic traffic through search engine optimisation and increase more queries.",

    Icon: <Optimized2 />,
  },
  {
    title: "Effective Hotel Performance Marketing",
    subtitle:
      "Get the best results with our impactful campaigns that bring in targeted visitors and maximize your return on investment.",
    Icon: <HotelPerformance2 />,
  },
  {
    title: "Customized Hospitality Marketing Solutions",
    subtitle:
      "A compelling reason for you to choose us is our commitment to providing tailored and customized marketing solutions.",
    Icon: <MarketSolution2 />,
  },
  {
    title: "Exceptional Hospitality Website Development",
    subtitle:
      "Our website development expertise provides an outstanding user experience from design to functionality.",
    Icon: <WebSiteDevelopmentIcon2 />,
  },
];

const data = [
  "Choose Fielmente - Hospitality Marketing Agency, Hotel Marketing Agency , and Restaurant marketing agency as your partner and get benefitted from our industry expertise and results-driven focus to take your hotel or restaurant to new heights of success in the digital realm. Welcome to Fielmente, a top-notch hotel marketing agency in India.",
  "Your stories are worth telling and we design compelling ways to showcase your brand. You might be wondering what makes us stand out from the rest. Well, we are all-rounders. From hotel social media marketing to hotel search engine optimisation and hotel paid campaigns, these are just a few of the services to name of this ingenious restaurant marketing company. With a team of highly qualified individuals, who come from different domains of life, we assure you maximum brand visibility with a remarkable return on investment.",
  "Since 2020, we have completed almost 120 hotel marketing projects in 4 countries with a 95% satisfaction rate. But! This is just a start. We, the best restaurant marketing agency in India, personalize strategies, build trust, and drive immense growth to the success of your hotel and restaurant.",
];
