import React from "react";
import HeroBanner from "./components/HeroBanner";
import { pageData } from "./data";
import OurPartners from "./components/OurPartners";
import IndustryWeServe from "./components/IndustryWeServe";
import OurServices from "./components/OurServices";
import ChooseUs from "./components/ChooseUs";
import CountiesWeWorked from "./components/CountiesWeWorked";
import OurClients from "./components/OurClients";
import OurProduct from "./components/OurProduct";
import { AboutCompany, HowItWorks, Milestone } from "@/app/(home)/components";
import { homePageData } from "@/app/(home)/homePageData";

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner {...pageData?.heroBanner} />
      <OurPartners {...pageData?.ourPartners} />
      <AboutCompany {...homePageData.aboutCompanyData} />
      <IndustryWeServe {...pageData?.industryWeServe} />
      <OurServices {...pageData?.ourService} />
      <OurProduct {...pageData?.nextGenProducts} />
      <HowItWorks {...homePageData.howItWorksData} />
      <Milestone milestone={homePageData.milestone} />
      <ChooseUs {...pageData?.ChooseUs} />
      <CountiesWeWorked {...pageData?.countiesWeWorked} />
      <OurClients {...pageData?.OurClient} />
    </div>
  );
};

export default LandingPage1;
