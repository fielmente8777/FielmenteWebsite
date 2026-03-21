import {
  AboutCompany,
  MarketingPartners,
  MaximizeGrowth
} from "@/app/(home)/components";
import { homePageData } from "@/app/(home)/homePageData";
import CountryFlags from "@/app/hospitality/components/CountryFlags";
import { OurOTAPartners } from "@/app/USA/components";
import Form1 from "@/components/Forms/Form1";
import OurClient from "@/components/OurClient";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import IndustryWeServe from "./components/IndustryWeServe";
import OurProduct from "./components/OurProduct";
import OurServices from "./components/OurServices";
import { pageData } from "./data";

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner {...pageData?.heroBanner} />
      {/* <OurPartners {...pageData?.ourPartners} /> */}
      <MarketingPartners {...homePageData.marketingPartnersData} />
      <div className="relative after:absolute after:bg-white after:inset-0 after:-z-10">
        <AboutCompany {...homePageData.aboutCompanyData} />
      </div>
      <IndustryWeServe {...pageData?.industryWeServe} />
      <OurServices {...pageData?.ourService} />
      <OurProduct {...pageData?.nextGenProducts} />
      {/* <HowItWorks {...homePageData.howItWorksData} /> */}
      {/* <Milestone milestone={homePageData.milestone} /> */}
      {/* <OurWork {...homePageData.ourWork} /> */}
      <MaximizeGrowth {...homePageData.maximizeGrowthData} />
      {/* <ChooseUsCard {...pageData?.ChooseUs} /> */}
      {/* <ChooseUsNew {...homePageData.chooseUsData} /> */}
      {/* <CountiesWeWorked {...pageData?.countiesWeWorked} />
       */}
      <OurOTAPartners />
      <CountryFlags />
      {/* <ContactUsCard /> */}
      <div className=" lg:py-20 py-10">
        <OurClient title="Our Clients" />
      </div>
      {/* <OurClients {...pageData?.OurClient} /> */}
      {/* <ConsultationForm /> */}
      <SectionWithContainer>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="w-full relative aspect-square">
            <Image
              src="/Asset18.png"
              alt="form img"
              fill
              className="object-contain"
            />
          </div>
          <Form1 />
        </div>
      </SectionWithContainer>
    </div>
  );
};

export default LandingPage1;
