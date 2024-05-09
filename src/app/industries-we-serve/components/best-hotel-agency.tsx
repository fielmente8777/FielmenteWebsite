import Link from "next/link";
import React from "react";
import BookNowPhone from "../../../../public/images/BookNowPhone.webp";
import Image from "next/image";

function BestHotelAgency() {
  return (
    <section>
      <div className="grid md:grid-cols-6 gap-6">
        <div className="relative md:col-span-2 col-span-1 w-full aspect-[4/3.8]">
          <Image
            src={BookNowPhone}
            alt="book-now-moible-pic"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-8 md:col-span-4">
          <h2 className="md:text-6xl text-4xl font-bold text-black">
            India’s Best Hotel Social Media Agency
          </h2>
          <p className="text-xl text-gray-primary">
            Boost guest engagement and attract potential guests with an
            impactful social media presence, customized by Fielmente, a renowned
            hotel marketing agency in India. Social media management for the
            Hotel & Resort is crucial for building a strong online presence,
            engaging with customers, and attracting new guests. We involve
            various activities to create, curate, and optimize content, engage
            with the audience, and achieve specific business goals through
            social media channels.
          </p>

          <div className="flex justify-center">
            <Link
              href={"/contact"}
              className="bg-blue-dark py-5 px-16 text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestHotelAgency;
