import {
  ChooseUs,
  ContactUsCard,
  HotelPerformacne,
  MarketingAgency,
  MileStones,
  OurClients,
  OurOTAPartners,
  OurServices,
  PopupForm,
  WhyUs,
} from "@/app/landing-page/components";
import type { Metadata } from "next";
import { ConsultationForm, Container, Section } from "@/components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fielmente : Hotel Marketing Agency in India",
  description:
    "Best marketing agency in India for hotels, resorts and restaurant",
  keywords:
    "Fielmente, Hotel Marketing Agency, Cloud Kitchen Marketing Agency, Resort Marketing Agency",
  alternates: {
    canonical: "https://fielmente.com/fielmente-lp/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://fielmente.com/fielmente-lp/" }],
  openGraph: {
    title: "Fielmente : Hotel Marketing Agency in India",
    description:
      "Best marketing agency in India for hotels, resorts and restaurant",
    url: "https://fielmente.com/fielmente-lp/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://fielmente.com/fielmente-lp/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      {/* Market Agency***** */}
      <div className="bg-blue-dark py-10">
        <div className="max-width">
          <MarketingAgency />
        </div>
      </div>

      {/* MileStones ****** */}
      <div className="max-w-[900px] mx-auto lg:py-20 py-10">
        <MileStones />
      </div>

      {/* Services***** */}
      <div className="bg-blue-dark text-white lg:py-20 py-10">
        <div className="max-width">
          <OurServices />
        </div>
      </div>

      {/* Choose Us****** */}
      <Section className="bg-white lg:py-10">
        <div className="max-width">
          <ChooseUs />
        </div>
      </Section>

      {/* Hotel Performance***** */}
      <Section>
        <div className="max-width">
          <HotelPerformacne />
        </div>
      </Section>

      {/* Our Clients**** */}
      <div className="bg-blue-dark text-white lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          <OurClients SHeading={true} />
        </div>
      </div>
      <OurOTAPartners />

      <div className="bg-gray-secondary lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          {/* Here the component will come */}

          <WhyUs />
          {/* Here the component will come */}
        </div>
      </div>

      {/* Looking for Best Hotel***** */}
      <ContactUsCard />
      <ConsultationForm />
    </main>
  );
}
