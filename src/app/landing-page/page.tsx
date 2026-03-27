import { Metadata } from "next";
import { landingPageData } from "./components/pageData";
import Banner from "./components/Banner";
import BusinessPartners from "./components/BusinessPartners";
import AboutSection from "./components/AboutSection";
import IndustryWeServe from "./components/IndustryWeServe";
import ReadyToGrow from "./components/ReadyToGrow";
import ServicesSection from "./components/ServicesSection";
import OurProducts from "./components/OurProducts";
import ResultsSection from "./components/ResultsSection";
import GrowthSection from "./components/GrowthSection";
import CountriesWeWorked from "./components/CountriesWeWorked";
import SlidingTitle from "@/components/slider/SlidingTitle";
import OurClients from "./components/OurClients";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Fielmente : Hospitality Marketing Agency in India",
  description:
    "Best marketing agency in India for Hospitality, resorts and Hospitality",
  keywords:
    "Hospitality Marketing Agency, Hospitality marketing service, Hospitality marketing consultant ,Hospitality solutions,Hospitality business services,Hospitality support, hospitality growth,Hospitality marketing strategy,Hospitality marketing planning,Hospitality marketing plan,Hospitality marketing services,Hospitality marketing consultant,Hospitality marketing agency",
  alternates: {
    canonical: "https://fielmente.com/landing-page/",
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
  authors: [{ name: "Fielmente", url: "https://fielmente.com/hospitality/" }],
  openGraph: {
    title: "Fielmente : Hotel Marketing Agency in India",
    description:
      "Best marketing agency in India for hotels, resorts and restaurant",
    url: "https://fielmente.com/hospitality/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://fielmente.com/hospitality/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  const page = landingPageData[0];
  return (
    <main className="overflow-x-clip mt-20">
      <Banner {...page.heroSection} />
      <BusinessPartners {...page.businessPartnersData} />
      {/* <AboutSection {...page.aboutSection} /> */}
      <IndustryWeServe {...page.industriesSection} />
      <ReadyToGrow {...page.readyToGrowSection} />
      <ServicesSection {...page.servicesSection} />
      <OurProducts {...page.productsData} />
      <ResultsSection {...page.resultsSection} />
      {/* <GrowthSection {...page.growthSection} /> */}
      <CountriesWeWorked {...page.countriesSection} />
      <SlidingTitle titles={page.servicesTitles} />
      <OurClients {...page.ourClient} />
      <ContactSection {...page.contactSection} />
    </main>
  );
};

export default page;
