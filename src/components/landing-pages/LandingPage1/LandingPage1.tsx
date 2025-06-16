import React from "react";
import HeroBanner from "./components/HeroBanner";
import { pageData } from "./data";
import OurPartners from "./components/OurPartners";
import IndustryWeServe from "./components/IndustryWeServe";
import OurServices from "./components/OurServices";

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner {...pageData?.heroBanner} />
      <OurPartners {...pageData?.ourPartners} />
      <IndustryWeServe {...pageData?.industryWeServe} />
      <OurServices {...pageData?.ourService} />
    </div>
  );
};

export default LandingPage1;
