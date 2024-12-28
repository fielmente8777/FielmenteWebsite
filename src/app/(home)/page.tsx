import Container from "@/components/Container";

import {
  Banner,
  Strategise,
  // Worked,
  // ChooseUs,
  CardSection,
} from "./components";
import Section from "@/components/Section";
import Form from "../about-fielmente-best-hospitality-marketing-agency/components/Form";
import {
  HotelPerformacne,
  OurClientNew,
  OurClients,
  OurOTAPartners,
  OurServices,
  PopupForm,
  WhyUs,
} from "../landing-page/components";
import { ConsultationForm } from "@/components";
import ChooseUs from "../landing-page/components/chooseUs";
import ContactUsCardNew from "../landing-page/components/ContactUsCardNew";
import MIleStonesNew from "../landing-page/components/MIleStonesNew";

export default function Home() {
  const data = [
    "Choose Fielmente - Hospitality Marketing Agency, Hotel Marketing Agency , and Restaurant marketing agency as your partner and get benefitted from our industry expertise and results-driven focus to take your hotel or restaurant to new heights of success in the digital realm. Welcome to Fielmente, a top-notch hotel marketing agency in India.",
    "Your stories are worth telling and we design compelling ways to showcase your brand. You might be wondering what makes us stand out from the rest. Well, we are all-rounders. From hotel social media marketing to hotel search engine optimisation and hotel paid campaigns, these are just a few of the services to name of this ingenious restaurant marketing company. With a team of highly qualified individuals, who come from different domains of life, we assure you maximum brand visibility with a remarkable return on investment.",
    "Since 2020, we have completed almost 120 hotel marketing projects in 4 countries with a 95% satisfaction rate. But! This is just a start. We, the best restaurant marketing agency in India, personalize strategies, build trust, and drive immense growth to the success of your hotel and restaurant.",
  ];

  return (
    <main>
      <Banner />
      <MIleStonesNew />
      <Strategise />
     
      {/* <Worked />
      <ChooseUs /> */}
      <Section>
        <Container>
          <ChooseUs />
          <div className="mt-14">
            <WhyUs />
          </div>
          <div className="mt-14">
            <HotelPerformacne />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <OurClientNew />
        </Container>
      </Section>
      <OurOTAPartners />

      {/* <Section>
        <Container>
          
        </Container>
      </Section> */}
       <div className="bg-blue-dark text-white lg:py-20 py-10">
        <div className="max-width">
          <OurServices />
        </div>
      </div>
      <CardSection />
      {/* <Section className="bg-blue-dark max-w-[1540px] mx-auto">
        <Container>
          <Form title="Request for" boldText="Proposal" /> */}
      {/* <Form title="Schedule a meeting with our marketing consultant" /> */}
      {/* </Container>
      </Section> */}
      <div className="mt-14">
        <Container>
          <article className="max-w-[1100px] mx-auto">
            {data.map((item, index) => (
              <p
                // className="lg:text-[1.1rem]/[2.2rem] text-lg  lg:text-justify text-center  mb-6 text-black "
                className="text-[18px] text-[#797979]  lg:text-justify text-center  mb-6"
                key={index}
              >
                {item}
              </p>
            ))}
          </article>
        </Container>
      </div>
      <ContactUsCardNew />
      <ConsultationForm />
      <div className="mt-10 lg:mt-20"></div>
    </main>
  );
}
