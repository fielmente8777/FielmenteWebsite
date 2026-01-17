import LandingPage1 from "@/components/landing-pages/LandingPage1/LandingPage1";
import { Metadata } from "next";

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
  return (
    <>
      {/* <PageComponents /> */}
      <LandingPage1 />
    </>
  );
};

export default page;
