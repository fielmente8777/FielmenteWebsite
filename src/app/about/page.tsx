import React from "react";
import Agency from "../about-fielmente-best-hospitality-marketing-agency/components/Agency";
import Hero from "../about-fielmente-best-hospitality-marketing-agency/components/Hero";
import Milestones from "../about-fielmente-best-hospitality-marketing-agency/components/Milestones";
import MakeUsUnique from "../about-fielmente-best-hospitality-marketing-agency/components/MakeUsUnique";
import Form from "../about-fielmente-best-hospitality-marketing-agency/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fielmente Agency | Best Hospitality Marketing Consultants in India",
  description:
    "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
};

function About() {
  return (
    <div>
      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <Agency />
        </div>
      </div>

      <div className="sm:mt-4 max-width">
        <hr />
      </div>

      <div className="md:py-20 py-4">
        <div className="max-width">
          <Hero />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-w-[1024px] mx-auto">
          <Milestones />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <MakeUsUnique />
      </div>

      <div className="py-20 bg-blue-dark">
        <div className="max-width">
          <Form title={"Get a free audit report"} />
        </div>
      </div>
    </div>
  );
}

export default About;
