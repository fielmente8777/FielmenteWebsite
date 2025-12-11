import { Section } from "@/components";
import { Banner } from "@/components/banners";
import {
  AboutCompany,
  AIPoweredServices,
  ChooseUsNew,
  CountriesWeWorkedIn,
  Faqs,
  HowItWorks,
  MarketingPartners,
  MaximizeGrowth,
  Milestone,
  OurValuedClients,
  OurWork,
  ServicesTitles,
  ServingHospitality,
  Strategise,
  Testimonials,
} from "./components";
import { AddsCard } from "@/components/cards";
import { homePageData } from "./homePageData";
import OurServices from "@/components/landing-pages/LandingPage1/components/OurServices";
import OurProduct from "@/components/landing-pages/LandingPage1/components/OurProduct";
import { pageData } from "@/components/landing-pages/LandingPage1/data";
import ChooseUs from "../hospitality/components/chooseUs";
import ChooseUsOld from "./components/ChooseUsOld";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />

      <MarketingPartners {...homePageData.marketingPartnersData} />
      <AboutCompany {...homePageData.aboutCompanyData} />
      <ServingHospitality {...homePageData.servingHospitalityData} />
      {/* <AIPoweredServices {...homePageData.servicesData} /> */}
      {/* new landing page code */}
      <OurServices {...pageData?.ourService} />
      <OurProduct {...pageData?.nextGenProducts} />
      <HowItWorks {...homePageData.howItWorksData} />
      <Milestone milestone={homePageData.milestone} />
      <ChooseUsNew {...homePageData.chooseUsData} />
      <CountriesWeWorkedIn {...homePageData.countriesWeWorkedIn} />
      <ServicesTitles title={homePageData.servicesTitles} />
      <OurWork {...homePageData.ourWork} />

      <MaximizeGrowth {...homePageData.maximizeGrowthData} />

      <ServicesTitles title={homePageData.servicesTitles} />
      {/* <Faqs {...homePageData.faqsData} /> */}
      <SectionWithContainer>
        <ChooseUs />
      </SectionWithContainer>
      <ChooseUsOld />
      <Strategise />
      <Section
        defaultPadding={false}
        className="relative after:absolute after:bg-[url('/home/bgred.png')] after:bg-cover after:bg-repeat after:opacity-20 after:w-full after:h-full after:-top-[18%] after:right-0 after:z-[-2]"
      >
        <OurValuedClients {...homePageData.ourValuedClientsData} />
        <Testimonials {...homePageData.testimonialsData} />
      </Section>
      <AddsCard {...homePageData.addscardsData} />
      <Faqs {...homePageData.faqsData} />
    </main>
  );
}
