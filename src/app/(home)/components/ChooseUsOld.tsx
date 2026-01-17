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

const ChooseUsOld: React.FC = () => {
  return (
    <Section>
      {/* <Container>
        <h2 className="lg:text-5xl text-2xl text-center text-black font-bold">
          Why Choose Us?
        </h2>
        <p className="lg:text-3xl text-xl text-center text-black font-bold mt-6 lg:tracking-wider">
          Force of 20+ hotel Marketing Experts
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-md:gap-4 gap-9 lg:py-14 py-7 max-w-[1100px] mx-auto">
          {ChooseUsData.map((item, index) => (
            <ChooseUsCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              Icon={item.Icon}
            />
          ))}
        </div>
      </Container> */}

      <Container>
        <article>
          {data.map((item, index) => (
            <p
              className="lg:text-[1.3rem]/[2.2rem] text-lg  lg:text-justify text-center font-medium mb-6 text-black "
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </article>
      </Container>
    </Section>
  );
};

export default ChooseUsOld;

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export const ChooseUsCard = ({ title, subtitle, Icon }: ChooseCardProsData) => {
  return (
    <div className="flex flex-col gap-2 shadow-md hover:shadow-none rounded-xl p-6">
      <div className="flex items-center justify-center">{Icon}</div>
      <h2 className="font-medium lg:min-h-[60px] text-blue-dark text-2xl text-center capitalize">
        {title}
      </h2>
      <p
        className="text-base text-[#797979]  text-center"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
};

const ChooseUsData = [
  {
    title: `Expertise in hotel`,
    subtitle:
      "With a decade of experience in the hotel industry, we are the perfect partner to market your hotel, resort, villa & restaurant.",

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
    title: "Customized hotel Marketing Solutions",
    subtitle:
      "A compelling reason for you to choose us is our commitment to providing tailored and customized marketing solutions.",
    Icon: <MarketSolution2 />,
  },
  {
    title: "Exceptional hotel Website Development",
    subtitle:
      "Our website development expertise provides an outstanding user experience from design to functionality.",
    Icon: <WebSiteDevelopmentIcon2 />,
  },
];

const data = [
  "Choose Fielmente - <a class='inter-link' href='/'>Hospitality Marketing Agency</a>, <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency</a> , and <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant marketing agency</a> as your partner and get benefitted from our industry expertise and results-driven focus to take your hotel or restaurant to new heights of success in the digital realm. Welcome to Fielmente, a top-notch <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agency</a> in India.",
  "Your stories are worth telling and we design compelling ways to showcase your brand. You might be wondering what makes us stand out from the rest. Well, we are all-rounders. From <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media marketing</a> to <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/'>hotel search engine optimisation</a> and <a href='/industries-we-serve/hotel-marketing-agency/hotel-google-ads/'>hotel paid campaigns</a>, these are just a few of the services to name of this ingenious <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>restaurant marketing company</a>. With a team of highly qualified individuals, who come from different domains of life, we assure you maximum brand visibility with a remarkable return on investment.",
  "Since 2020, we have completed almost 120 <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/' >hotel marketing</a> projects in 4 countries with a 95% satisfaction rate. But! This is just a start. We, the best <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>restaurant marketing agency</a> in India, personalize strategies, build trust, and drive immense growth to the success of your hotel and restaurant.",
];
