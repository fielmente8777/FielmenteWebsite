import React from "react";
import HotelMarketing from "../components/hotel-marketing";
import BestHotelAgency from "../components/best-hotel-agency";
import HotelPerformance from "../components/hotel-performance";

function page() {
  return (
    <section>
      <div className="md:py-20 py-10">
        <div className="max-width">
          <HotelMarketing />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-[#E6F5F0]">
        <div className="max-width">
          <BestHotelAgency />
        </div>
      </div>

      <div>
        <HotelPerformance />
      </div>
    </section>
  );
}

export default page;
