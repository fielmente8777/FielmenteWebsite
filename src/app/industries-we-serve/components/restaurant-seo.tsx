import Image from "next/image";
import React from "react";

import Mobilescreen from "../../../../public/images/mobile-screen-frame-collage-768x1097.webp";
import Link from "next/link";

function RestaurantSeo() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-center text-black md:text-5xl text-3xl font-bold">
          Looking for Restaurant SEO Agency?
        </h2>
        <p className="text-xl text-center text-gray-primary">
          As digitalization is approaching at a faster pace, restaurant
          marketing is essential for attracting customers and standing out from
          the competition. Let our restaurant marketing agency help you optimize
          your online presence for the following reasons:
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 mt-32">
        <div className="lg:col-span-2 w-full flex justify-center">
          <div className=" md:max-w-[400px] w-full relative aspect-[4/5.5]">
            <Image
              src={Mobilescreen}
              alt="Mobile-screen"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-12">
          <h2 className="lg:text-6xl text-3xl text-black font-bold">
            Why do Your Restaurant needs Social media presence?
          </h2>
          <p className="text-xl text-gray-primary">
            Nowadays there is a strong need for social media presence in
            attracting customers and elevating your restaurant’s success. Let
            Fielmente, the trusted restaurant marketing agency, help you with
            the power of social media to connect with a wider audience and much
            more,
          </p>
          <div className="flex justify-center">
            <Link
              href={"/contact"}
              className="text-lg px-16 py-5 font-bold bg-blue-dark rounded-full hover:bg-white hover:text-black duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantSeo;
