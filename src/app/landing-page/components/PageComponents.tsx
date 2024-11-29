import { ConsultationForm, Section } from "@/components";
import ChooseUs from "./chooseUs";
import MarketingAgency from "./marketingAgency";
import MileStones from "./mileStones";
import OurServices from "./ourServices";
import HotelPerformacne from "./hotelPerformacne";
import OurClients from "./ourClients";
import OurOTAPartners from "./OurOTAPartners";
import WhyUs from "./WhyUs";
import ContactUsCard from "./ContactUsCard";
import OurClientNew from "./OurClientNew";
import MIleStonesNew from "./MIleStonesNew";
import ContactUsCardNew from "./ContactUsCardNew";
import Riview from "./Riview";

const PageComponents = () => {
  return (
    <main className="">
      {/* Market Agency***** */}
      <div className="bg-blue-dark py-10">
        <div className="max-width">
          <MarketingAgency />
        </div>
      </div>

      {/* MileStones ****** */}
      <MIleStonesNew />

      {/* Services***** */}
      <div className="bg-blue-dark text-white lg:py-20 py-10" id="services">
        <div className="max-width">
          <OurServices />
        </div>
      </div>

      {/* Choose Us****** */}
      <Section className="bg-white lg:py-10">
        <div className="max-width">
          <ChooseUs />
        </div>
      </Section>

      {/* Hotel Performance***** */}
      <Section>
        <div className="max-width">
          <HotelPerformacne />
        </div>
      </Section>

      {/* Our Clients**** */}
      <div className="bg-white lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          <OurClientNew />
        </div>
      </div>
      <OurOTAPartners />

      <div className="bg-gray-secondary lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          {/* Here the component will come */}

          <WhyUs />
          {/* Here the component will come */}
        </div>
      </div>

      {/* Looking for Best Hotel***** */}
      <ContactUsCardNew />
      {/* <div className="bg-white">
        <Riview />
      </div> */}
      <div id="reviews">
        <ConsultationForm />
      </div>
    </main>
  );
};

export default PageComponents;
