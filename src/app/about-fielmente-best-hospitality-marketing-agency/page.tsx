import { GotEnquiry } from "@/components";
import type { Metadata } from "next";
import Agency from "./components/Agency";
import Form from "./components/Form";
import Hero from "./components/Hero";
import MakeUsUnique from "./components/MakeUsUnique";
import Milestones from "./components/Milestones";

export const metadata: Metadata = {
  title: "Fielmente Agency | Best Hospitality Marketing Consultants in India",
  description:
    "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
  alternates: {
    canonical: "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
    languages: {
      "en-US": "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
    },
  },
  openGraph: {
    title: "Fielmente Agency | Best Hospitality Marketing Consultants in India",
    description:
      "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
  }
};

function About() {
  const gotEnquiryData = {
    title: "Got Started",
    subTitle: "Let's Work Together",
    description:
      "Get a free consultation and let us know your restaurants and hotel business idea to turn it into an amazing digital asset.",
  };
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

      <div className="md:py-14 py-10">
        <MakeUsUnique />
      </div>
      <GotEnquiry {...gotEnquiryData} />
      <div className="py-20 bg-blue-dark">
        <div className="max-width">
          <Form title={"Get a free audit report"} />
        </div>
      </div>
    </div>
  );
}

export default About;
