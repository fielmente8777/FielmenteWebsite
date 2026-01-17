import {
  ConsultationForm,
  GotEnquiry,
  NumberComponent,
  OurClient
} from "@/components";
import { Needs, NeedSeo } from "../components";
import BestHotelAgency from "../components/best-hotel-agency";
import HotelMarketing from "../components/hotel-marketing";

import type { Metadata } from "next";
import { hotelMarketingData } from "./hotelMarketingAgency";

export const metadata: Metadata = {
  title: "Best Hotel Marketing Company in India - Fielmente",
  description:
    "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
  alternates: {
    canonical: "https://fielmente.com/industries-we-serve/hotel-marketing-agency/",
    languages: {
      "en-US": "https://fielmente.com/industries-we-serve/hotel-marketing-agency/",
    },
  },
  openGraph: {
    title: "Best Hotel Marketing Company in India - Fielmente",
    description:
      "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
  },
};

function page() {
  return (
    <section>
      <div className="md:py-10 py-8">
        <div className="max-width">
          <HotelMarketing />
        </div>
      </div>

      <div className="md:py-10 py-8">
        <div className="max-width">
          <BestHotelAgency />
        </div>
      </div>
      <NumberComponent data={hotelMarketingData.mileStones} />
      <Needs
        {...hotelMarketingData.needsData}
        maxw={true}
        textCenter={true}
        card1={true}
      />
      <NeedSeo {...hotelMarketingData.needSeoData} />
      <Needs {...hotelMarketingData.needs2Data} />
      <GotEnquiry {...hotelMarketingData.gotEnquiryData} />
      <OurClient />
      {/* <Presence {...hotelMarketingData.presenceData} /> */}
      <ConsultationForm />
    </section>
  );
}

export default page;
