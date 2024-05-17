import React from "react";
import YounWoman from "../../../../public/images/young-women-planning-summer-vacation-trip-searching-information-booking-hotel-laptop-travel-concept-1536x1024.webp";
import Image from "next/image";

function HotelMarketing() {
  return (
    <div>
      <h2 className="text-center text-[#2CBCA5] text-xl font-semibold">
        LEADING HOTEL MARKETING AGENCY in India
      </h2>

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-6 items-center mt-12">
        <div className="flex flex-col sm:gap-10 gap-5">
          <h2 className="text-black md:text-4xl text-3xl font-bold">
            Looking for Best Hotel Marketing Company in India?
          </h2>
          <p className="text-gray-500 sm:text-xl text-lg">
            We are a well-rooted Hotel Advertisement Company, you will always
            find Fielmente standing near you with our targeted, site-specific
            programs to boost your marketing campaigns in India.
          </p>
          <p className="text-gray-500 sm:text-xl text-lg">
            With our Hospitality expert’s guidance, we make sure your Hotel
            drives full occupancy and generates more revenue.
          </p>
        </div>

        <div className="relative w-full aspect-[4/2.5] -z-10">
          <Image
            src={YounWoman}
            alt="young-woman"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelMarketing;
