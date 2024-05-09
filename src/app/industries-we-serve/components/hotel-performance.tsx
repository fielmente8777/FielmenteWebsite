import React from "react";
import Backgrond from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import Image from "next/image";
import Booking from "../../../../public/images/directbooking.webp";
import Link from "next/link";

function HotelPerformance() {
  return (
    <div
      className="py-20 "
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
          <PerformaceCard />
          <PerformaceCard />
          <PerformaceCard />
          <PerformaceCard />
          <PerformaceCard />
          <PerformaceCard />
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

const PerformaceCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
      <div>
        <Image src={Booking} alt="booking" width={60} />
      </div>
      <h2 className="text-blue-dark text-3xl font-bold">
        Drive Direct Booking
      </h2>
      <p className="text-gray-primary text-lg">
        Direct potential guests to your website or booking page, increasing
        direct bookings and reducing reliance on third-party platforms
      </p>
    </div>
  );
};

export default HotelPerformance;
