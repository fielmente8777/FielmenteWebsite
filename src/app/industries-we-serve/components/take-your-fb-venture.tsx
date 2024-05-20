import Image from "next/image";
import React from "react";
import Food from "../../../../public/images/people-taking-photos-food-1536x1024.webp";
import BoostVisibility from "../../../../public/images/boostvisiblity.webp";
import Showcasemenu from "../../../../public/images/showcasemenu.webp";
import Locationandcontact from "../../../../public/images/locationandcontactinformation.webp";
import onlinereservation from "../../../../public/images/onlinereservation.webp";
import customerreviews from "../../../../public/images/customerreviews.webp";
import specialoffer from "../../../../public/images/heighlighspecialoffers.webp";

import Link from "next/link";

const CardDetails = [
  {
    title: "Boost Visibility",
    subtitle:
      "Improve your search engine visibility through our effective restaurant marketing strategies. ",
    image: {
      src: BoostVisibility,
      alt: "",
    },
  },

  {
    title: "Showcase Your Menu",
    subtitle:
      "Display your mouth-watering dishes, enticing customers to visit your restaurant.",
    image: {
      src: Showcasemenu,
      alt: "",
    },
  },
  {
    title: "Location and Contact Information",
    subtitle: `Provide accurate information, making it easy for customers to find and reach your restaurant`,
    image: {
      src: Locationandcontact,
      alt: "",
    },
  },
  {
    title: "Online Reservation",
    subtitle:
      "Allow customers to conveniently book tables online, enhancing the customer experience and driving more bookings.",
    image: {
      src: onlinereservation,
      alt: "",
    },
  },
  {
    title: "Customer Reviews",
    subtitle:
      "Showcase positive reviews and testimonials, building trust and credibility among potential customers.",
    image: {
      src: customerreviews,
      alt: "Booking",
    },
  },
  {
    title: "Highlight Special Offers",
    subtitle:
      "Promote special deals, discounts, and events to entice customers and create a sense of urgency.",
    image: {
      src: specialoffer,
      alt: "Booking",
    },
  },
];

function TakeYourFbVenture() {
  return (
    <section>
      <div className="grid lg:grid-cols-5 items-center gap-8">
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h2 className="sm:text-5xl text-3xl text-black font-semibold">
            {`Let’s take your F&B venture to next level`}
          </h2>
          <p className="sm:text-xl text-lg text-gray-primary">
            {` In today’s digital age, your restaurant’s reputation is everything.
            But fear not! At our Restaurant Marketing Agency, we’ve mastered the
            art of managing and elevating your online presence. From Google
            Reviews to Facebook, Instagram, and LinkedIn, we’ll monitor and
            curate the comments that can make or break your business.`}
          </p>
        </div>
        <div className="lg:col-span-2 w-full flex lg:justify-end justify-center">
          <div className=" md:max-w-[400px] w-full relative aspect-[4/2.5]">
            <Image
              src={Food}
              alt="food"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {CardDetails.map((item, index) => (
          <VentureCard {...item} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link
          href={"/contact"}
          className="px-16 py-5 bg-blue-dark text-lg font-bold text-white rounded-full hover:text-black hover:bg-white duration-200"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}

const VentureCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-[#E8FFF9] rounded-2xl p-6 shadow-md">
      <div className="flex justify-center">
        <Image src={image.src} alt="boost-visiblity" />
      </div>

      <h2 className="text-3xl font-semibold text-black text-center">{title}</h2>
      <p className="text-gray-primary text-lg text-center mt-4">{subtitle}</p>
    </div>
  );
};

export default TakeYourFbVenture;
