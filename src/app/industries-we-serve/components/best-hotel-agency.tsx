"use client";
import React, { useContext } from "react";
import BookNowPhone from "../../../../public/images/hotel-receptionist-check.png";
import Image from "next/image";
import DataContext from "@/contextApi/DataContext";

function BestHotelAgency() {
  const {setIsOpenPopupForm} = useContext(DataContext);
  return (
    <section>
      <div className="lg:grid grid-cols-2 gap-6 flex flex-col-reverse flex-1">
        <div className="relative w-full aspect-[4/2.72]">
          <Image
            src={BookNowPhone}
            alt="book-now-moible-pic"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[#737373] text-base md:text-lg  font-semibold border-l-4 border-orange-primary pl-4 ">
            Our Approach
          </h2>
          <h3 className="text-black md:text-5xl/[3.2rem] text-3xl font-normal">
            We are here to Serve You{" "}
            <b className="text-orange-primary">Serve You</b>
          </h3>
          <p className="text-gray-500 text-lg">
            We are a well-rooted Hotel Advertisement Company, you will always
            find Fielmente standing near you with our targeted, site-specific
            programs to boost your marketing campaigns in India.
          </p>
          <p className="text-gray-500 text-lg">
            With our Hospitality expert’s guidance, we make sure your Hotel
            drives full occupancy and generates more revenue.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button
              onClick={() => setIsOpenPopupForm(true)}
              className="bg-blue-dark text-white py-3 px-6 border border-blue-dark rounded-lg text-lg font-semibold hover:bg-white hover:text-black duration-700 transition box_shadow"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestHotelAgency;
