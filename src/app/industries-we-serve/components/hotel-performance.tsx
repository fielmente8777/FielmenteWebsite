import React from "react";
import Backgrond from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import Image from "next/image";
import Booking from "../../../../public/images/directbooking.webp";
import Link from "next/link";

import Enhanced from "../../../../public/images/inhancevisiblity.webp";
import Target from "../../../../public/images/targetingadvertised.webp";
import Costeffective from "../../../../public/images/costeffective.webp";
import Complete from "../../../../public/images/completeffectively.webp";
import Realtime from "../../../../public/images/realtimeoptimization.webp";

const CardDetails = [
  {
    title: " Drive Direct Booking",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms",
    image: {
      src: Booking,
      alt: "Booking",
    },
  },

  {
    title: "Compete Effectively",
    subtitle:
      "Stand out from competitors in search results, capturing the attention of potential guests and gaining a competitive edge.",
    image: {
      src: Complete,
      alt: "Booking",
    },
  },
  {
    title: "Real-Time Optimization",
    subtitle: `Continuously monitor and optimize your campaigns to improve performance, maximize ROI, and drive
      more bookings.`,
    image: {
      src: Realtime,
      alt: "Booking",
    },
  },
  {
    title: "Increased Visibility",
    subtitle:
      "Advertise your hotel prominently on Google search results, reaching a larger audience actively searching for accommodations.",
    image: {
      src: Enhanced,
      alt: "Booking",
    },
  },
  {
    title: "Targeted Advertising",
    subtitle:
      "Advertise your hotel prominently on Google search results, reaching a larger audience actively searching for accommodations.",
    image: {
      src: Target,
      alt: "Booking",
    },
  },
  {
    title: "Cost-Effective Results",
    subtitle:
      "Pay only for clicks or conversions, making Google Ads a cost-effective advertising method with measurable results.",
    image: {
      src: Costeffective,
      alt: "Booking",
    },
  },
];

function HotelPerformance() {
  return (
    <div
      className="md:py-20 py-10"
      style={{
        backgroundImage: `url(${Backgrond.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <h2 className="text-center md:text-5xl text-3xl font-bold">
          Let us handle your Hotel Performance Marketing and you see your
          property grow 5X
        </h2>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-6 mt-20">
          {CardDetails.map((item, index) => {
            return <PerformaceCard {...item} key={index} />;
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href={"/contact"}
            className="bg-blue-dark px-16 py-4 text-xl font-bold rounded-full hover:bg-white hover:text-black duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

const PerformaceCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
      <div>
        <Image src={image.src} alt={image.alt} width={50} />
      </div>
      <h2 className="text-black text-3xl font-bold">{title}</h2>
      <p className="text-blue-dark text-lg">{subtitle}</p>
    </div>
  );
};

export default HotelPerformance;
