import React from "react";
import YounWoman from "../../../../public/images/profesional-waiter-restaurant.png";
import Image from "next/image";

function HotelMarketing() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-7">
          <h1 className="text-[#737373] text-base md:text-lg  font-semibold border-l-4 border-orange-primary pl-4 ">
            LEADING HOTEL MARKETING AGENCY in India
          </h1>
          <h2 className="text-black md:text-5xl/[3.2rem] text-3xl font-normal">
            Looking for Best Hotel Marketing Company <br className="hidden lg:block"/> in <strong className="text-orange-primary">India?</strong>
          </h2>
          <p className="text-gray-500 text-lg">
            We are a well-rooted Hotel Advertisement Company, you will always
            find Fielmente standing near you with our targeted, site-specific
            programs to boost your marketing campaigns in India.
          </p>
          <p className="text-gray-500 text-lg">
            With our Hospitality expert’s guidance, we make sure your Hotel
            drives full occupancy and generates more revenue.
          </p>
        </div>

        <div className="relative w-full aspect-[4/2.9]">
          <Image
            src={YounWoman}
            alt="young-waiter"
            fill
            className="object-cover rounded-lg -z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelMarketing;
