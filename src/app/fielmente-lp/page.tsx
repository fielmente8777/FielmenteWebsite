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
import PageComponents from "../landing-page/components/PageComponents";

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
    <>
      <PageComponents />
    </>
  );
}
