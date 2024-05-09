import React from "react";
import BestRestauratMarket from "../components/best-restaurnat-market";
import LookingForRestaurant from "../components/looking-for-restaurant";
import TakeYourFbVenture from "../components/take-your-fb-venture";
import RestaurantSeo from "../components/restaurant-seo";
import Form from "@/app/about/components/Form";
import InfluencerMarketing from "../components/influencer-marketing";

function page() {
  return (
    <section className="bg-gradient-second">
      <div className="md:py-20 py-10">
        <div className="max-width">
          <BestRestauratMarket />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <LookingForRestaurant />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <TakeYourFbVenture />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <RestaurantSeo />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width  mx-auto">
          <InfluencerMarketing />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-blue-dark">
        <div className="max-width  mx-auto">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>
    </section>
  );
}

export default page;
