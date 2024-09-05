import type { Metadata } from "next";
import { Container, Section } from "@/components";
import {
  ChooseUs,
  HotelPerformacne,
  MarketingAgency,
  MileStones,
  OurClients,
  OurOTAPartners,
  OurServices,
  PopupForm,
  WhyUs,
} from "./components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fielmente : Hotel Marketing Agency in India",
  description:
    "Best marketing agency in India for hotels, resorts and restaurant",
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
      <div className="bg-gray-secondary lg:py-20 py-10">
        <div className="lg:max-w-[1280px] max-w-full mx-auto px-[1.5rem]">
          {/* Here the component will come */}

          <WhyUs />

          {/* Here the component will come */}
        </div>
      </div>

      {/* Looking for Best Hotel***** */}
      <Section className="bg-white lg:py-10">
        <Container>
          <div className=" text-white bg-blue-dark px-20 lg:py-16 py-10 grid md:grid-cols-5 gap-8 items-center rounded-3xl lg:mx-28">
            <div className="md:col-span-4 lg:text-start text-center">
              <h2 className="md:text-4xl/[3rem] text-3xl">
                Looking for the India’s Best Hotel Marketing{" "}
                <span className="text-orange-primary">Agency?</span>
              </h2>
            </div>
            <div className="md:col-span-1 w-full">
              <Link
                href={"#contact"}
                className="bg-orange-primary w-full py-3 flex items-center justify-center font-bold rounded-md text-lg border border-orange-primary hover:bg-transparent duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <OurOTAPartners />

      <PopupForm />
    </main>
  );
}
