import { AboutCompany, HowItWorks, MarketingPartners, MaximizeGrowth, Milestone, OurWork } from "@/app/(home)/components";
import { homePageData } from "@/app/(home)/homePageData";
import ChooseUs from "./components/ChooseUs";
import CountiesWeWorked from "./components/CountiesWeWorked";
import HeroBanner from "./components/HeroBanner";
import IndustryWeServe from "./components/IndustryWeServe";
import OurClients from "./components/OurClients";
import OurProduct from "./components/OurProduct";
import OurServices from "./components/OurServices";
import { pageData } from "./data";
import ConsultationForm from "@/components/ConsultationForm";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/Forms/Form1";

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner {...pageData?.heroBanner} />
      {/* <OurPartners {...pageData?.ourPartners} /> */}
      <MarketingPartners {...homePageData.marketingPartnersData} />
      <AboutCompany {...homePageData.aboutCompanyData} />
      <IndustryWeServe {...pageData?.industryWeServe} />
      <OurServices {...pageData?.ourService} />
      <OurProduct {...pageData?.nextGenProducts} />
      {/* <HowItWorks {...homePageData.howItWorksData} /> */}
      <Milestone milestone={homePageData.milestone} />
      {/* <OurWork {...homePageData.ourWork} /> */}
      <MaximizeGrowth {...homePageData.maximizeGrowthData} />
      {/* <ChooseUs {...pageData?.ChooseUs} /> */}
      <CountiesWeWorked {...pageData?.countiesWeWorked} />
      <OurClients {...pageData?.OurClient} />
      <ConsultationForm />
      <SectionWithContainer >
        <div className="md:max-w-5xl mx-auto">
          <Form1 />
        </div>
      </SectionWithContainer>
    </div>
  );
};

export default LandingPage1;
