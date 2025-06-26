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

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner {...pageData?.heroBanner} />
      <OurPartners {...pageData?.ourPartners} />
      <IndustryWeServe {...pageData?.industryWeServe} />
      <OurServices {...pageData?.ourService} />
      <OurProduct {...pageData?.nextGenProducts} />
      <ChooseUs {...pageData?.ChooseUs} />
      <CountiesWeWorked {...pageData?.countiesWeWorked} />
      <OurClients {...pageData?.OurClient} />
    </div>
  );
};

export default LandingPage1;
