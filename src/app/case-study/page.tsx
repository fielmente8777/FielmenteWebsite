import { SectionWithContainer } from "@/components/sectionComponants";
import { OurValuedClients, ServicesTitles } from "../(home)/components";
import { homePageData } from "../(home)/homePageData";
import Link from "next/link";
import { casStudyData } from "./caseData";
import CasStudyCard from "./components/CasStudyCard";
import { NextBtnIcon } from "../../utils/icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fielmente | Case Study",
  description:
    "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
    alternates: {
      canonical: "https://fielmente.com/case-study/",
      languages: {
        "en-US": "https://fielmente.com/case-study/",
      },
    },
    openGraph: {
      title: "Fielmente | Case Study",
      description:
        "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
    }
}

export default function CaseStudy() {
  return (
    <main>
      <OurValuedClients
        title="We’re Trusted by 1k+ Hospitality Businesses"
        cards={homePageData.ourValuedClientsData.cards}
      />
      <SectionWithContainer sectionClassName="relative after:content-[''] after:inset-0 after:absolute after:bg-blue-dark after:rounded-t-[80px] text-white after:z-[-2]">
        <div className="">
          {/* header */}
          <div className="flex items-center uppercase">
            <Link href="/" className="">
              Home
            </Link>
            <span className="">
              <NextBtnIcon />
            </span>
            <span>Case Study</span>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-blue-dark via-white to-blue-dark my-[40px]" />
          {/* client cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casStudyData.map((item, index) => (
              <CasStudyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </SectionWithContainer>
      <ServicesTitles title={homePageData.servicesTitles} bgColor="bg-orange-primary" />
    </main>
  );
}


