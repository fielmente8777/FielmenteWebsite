import React from "react";
import IndustryWeServe from "./components/industry-we-serve";
import CommonHero from "./components/common-hero";

function page() {
  return (
    <section>
      <div className="py-20">
        <div className="max-width">
          <IndustryWeServe />
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-[1080px] mx-auto">
          <CommonHero />
        </div>
      </div>
    </section>
  );
}

export default page;
