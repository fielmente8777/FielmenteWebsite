import { SectionWithContainer } from "@/components/sectionComponants";
import { OurValuedClients, ServicesTitles } from "../(home)/components";
import { homePageData } from "../(home)/homePageData";
import Link from "next/link";
import { casStudyData } from "./caseData";
import CasStudyCard from "./components/CasStudyCard";

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

export const NextBtnIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5252 12.003L8.21026 17.7106C8.07009 17.8611 8.00176 18.0384 8.00529 18.2423C8.00894 18.4464 8.08085 18.6237 8.22102 18.7742C8.36131 18.9247 8.52642 19 8.71633 19C8.90625 19 9.07136 18.9247 9.21165 18.7742L14.6241 12.9734C14.7517 12.8364 14.8462 12.6829 14.9077 12.5129C14.9692 12.343 15 12.173 15 12.003C15 11.833 14.9692 11.6631 14.9077 11.4931C14.8462 11.3231 14.7517 11.1696 14.6241 11.0326L9.21165 5.22007C9.07135 5.06954 8.90443 4.99623 8.71087 5.00015C8.5173 5.00406 8.35043 5.08129 8.21026 5.23182C8.07009 5.38235 8 5.55965 8 5.76372C8 5.96767 8.07009 6.14491 8.21026 6.29544L13.5252 12.003Z"
      fill="currentColor"
    />
  </svg>
);
