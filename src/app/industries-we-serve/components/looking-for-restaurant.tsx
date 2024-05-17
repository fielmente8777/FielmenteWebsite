import React from "react";
import Food from "../../../../public/images/traditional-italian-food-world-tourism-day-1536x1024.webp";
import Image from "next/image";

function LookingForRestaurant() {
  return (
    <div className="grid lg:grid-cols-5 items-center gap-8">
      <div className="lg:col-span-2 md:max-w-[400px] relative aspect-[4/2.5]">
        <Image src={Food} alt="food" fill className="object-cover rounded-xl" />
      </div>
      <div className="lg:col-span-3 flex flex-col sm:gap-10 gap-5">
        <div>
          <h2 className="text-3xl underline text-black font-semibold">
            Looking for Restuarant Marketing Company?
          </h2>
          <p className="sm:text-xl text-lg text-gray-primary mt-2">
            Are you doing everything you can to make sure:
          </p>
        </div>
        <ul className="list-disc list-inside text-gray-primary sm:text-xl text-lg">
          <li>Your restaurant is easily found on the internet?</li>
          <li>
            Potential hungry customers like what they see when they do find you
            online?
          </li>
        </ul>
        <p className="sm:text-xl text-lg text-gray-primary">
          Combining content marketing, social media, SEO, paid advertising, and
          online reputation management, we’ll make sure your restaurant not only
          becomes the hottest spot in your community and the city but that it
          stays that way.
        </p>
      </div>
    </div>
  );
}

export default LookingForRestaurant;
