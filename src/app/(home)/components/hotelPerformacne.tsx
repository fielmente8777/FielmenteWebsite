import SectionHeading from "@/components/SectionHeadings/SectionHeading";
import Link from "next/link";
import React from "react";

export interface HotelPerformacePropsData {
  title: string;
  subtitle: string;
  index?: number;
}

const SectionHeadingDetails = {
  title: "Let us handle your Hotel Performance Marketing and see your",
  span: " property grow 5X",
  Color: true,
};

const HotelPerormaceData = [
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
];

function HotelPerformacne() {
  return (
    <div>
      <SectionHeading {...SectionHeadingDetails} />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-16">
        {HotelPerormaceData.map((item, index) => (
          <HotelPerfomaceCard {...item} index={index} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link
          href={"/contact"}
          className="bg-orange-primary px-8 py-3 rounded-md text-lg border border-orange-primary hover:bg-transparent hover:text-blue-dark duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export const HotelPerfomaceCard = ({
  title,
  subtitle,
  index,
}: HotelPerformacePropsData) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center gap-4 mt-2">
        <span className="text-orange-primary text-xl">
          {index! < 9 ? `0${index! + 1}` : index}
        </span>
        <div className="w-8 h-1 bg-orange-primary"></div>
      </div>

      <div>
        <h2 className="text-blue-dark text-3xl">{title}</h2>
        <p className="text-gray-primary text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default HotelPerformacne;
