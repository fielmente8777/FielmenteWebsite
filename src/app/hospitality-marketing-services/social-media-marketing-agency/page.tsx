import Image from "next/image";
import Link from "next/link";
import React from "react";
import Girl from "../../../../public/images/Girl.jpg";
import CircularSocial from "../../../../public/images/social-circle.webp";
import Girlwithsocial from "../../../../public/images/Grilwithsocial.webp";
import Twowomenmeet from "../../../../public/images/Twowomenmeet.webp";

import TrustyBrand from "../../../../public/images/hsdgvc.webp";
import Form from "@/app/about/components/Form";

import Smm10 from "../../../../public/images/SMM-10.webp";
import Smm13 from "../../../../public/images/SMM-13.webp";
import Smm14 from "../../../../public/images/SMM-14-1.webp";
import Smm08 from "../../../../public/images/SMM-08.webp";

const CardData1 = [
  {
    title: "Hotel Social Media",
    subtitle: "If you are looking for the best hotel seo, look no further.",
  },
  {
    title: "Cloud Kitchen Social Media",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
  },
  {
    title: "Restaurant Social Media",
    subtitle:
      "If you are looking for the best restaurant seo, look no further.",
  },
];

const CardData2 = [
  {
    title: "Social Media Calendar",
    subtitle:
      "A well-planned content calendar to make sure that your posts are always interesting and consistent.",
    image: Smm10,
  },
  {
    title: "Content Creation",
    subtitle:
      "Content creation means making content that is compelling and interesting and sticks with your audience.",
    image: Smm13,
  },
  {
    title: "Social Media Campaigns",
    subtitle:
      "Campaigns that are planned strategically to get the most engagement and sales.",
    image: Smm14,
  },
  {
    title: "Facebook, Twitter & Linkedin Ads",
    subtitle:
      "Targeted ads can help you reach more people and raise brand awareness, visibility of your brand, reach professionals and people who make decisions.",
    image: Smm08,
  },
];

function page() {
  return (
    <section>
      <div className="bg-[#1E1928] py-20">
        <div className="max-width">
          {/* Hospitality Social Media Marketing:***** */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl">
                Hospitality Social Media Marketing: Forge lasting bonds with
                customers, fueling exponential business growth!
              </h2>
              <p className="text-gray-primary text-xl">
                At Fielmente, our expertise lies in crafting hospitality social
                media marketing campaigns and content with a remarkable ROI,
                elevating brand visibility, nurturing customer relationships,
                and driving sales like never before.
              </p>

              <div className="flex">
                <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="max-w-[260px] mx-auto aspect-[4/5]">
                <Image
                  src={Girl}
                  alt="girl"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 px-20 border-b border-b-gray-700 pb-5">
            {CardData1.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
          {/* Why is Social Media Marketing Important for Your Business?*** */}
          <div className="grid lg:grid-cols-2 items-center mt-10">
            <div className="w-full">
              <div className="relative max-w-2xl mx-auto aspect-[4/4]">
                <Image
                  src={CircularSocial}
                  alt="circular-social"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                Why is Social Media Marketing Important for Your Business?
              </h2>

              <p className="text-xl mt-8">
                Embrace the power of social media in the digital era with
                Fielmente, the leading hospitality social media marketing
                agency. Connect with your target audience, showcase your brand’s
                personality, and soar to new heights in the restaurant or hotel
                industry. With billions of active users on platforms like
                Facebook, Twitter, and Instagram, social media can be a
                game-changer for your business.
              </p>

              <div className="mt-10 flex flex-col gap-1">
                {CardData2.map((item, index) => (
                  <CardTwo key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          {/* Fielmente's Social Media Marketing Approach**** */}
          <div className="grid md:grid-cols-2 gap-6 items-center mt-5">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl">
                {`Fielmente's Social Media Marketing Approach`}
              </h2>
              <p className="text-gray-primary text-xl">
                Fielmente, the premier hospitality social marketing agency,
                employs custom content planning, precise scheduling, and
                strategic campaigns aligned with your business goals. We ensure
                your brand shines brightly in the spotlight and keep you
                informed when conversations about your business ignite.
              </p>

              <div className="flex">
                <Link
                  href={"/"}
                  className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/5]">
                <Image
                  src={Girlwithsocial}
                  alt="girl-with-social-image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center mt-5">
            <div className="md:col-span-2 w-full flex md:justify-end">
              <div className="relative max-w-[400px] w-full aspect-[4/4]">
                <Image
                  src={Twowomenmeet}
                  alt="girl"
                  fill
                  className="object-cover rounded-[4rem]"
                />
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col gap-8">
              <div className="max-w-[700px]">
                <h2 className="text-4xl font-bold">
                  {`Let's Ignite Your Social Media Growth Together`}
                </h2>

                <p className="text-gray-primary text-xl mt-5">
                  Fielmente, the premier hospitality social marketing agency,
                  employs custom content planning, precise scheduling, and
                  strategic campaigns aligned with your business goals. We
                  ensure your brand shines brightly in the spotlight and keep
                  you informed when conversations about your business ignite.
                </p>

                <div className="mt-10 flex gap-5 items-center">
                  <Image
                    src={TrustyBrand}
                    alt="trust by many brands"
                    width={250}
                    height={55}
                  />
                  <p className="text-lg">
                    Trusted by many brands around the globe
                  </p>
                </div>

                <div className="flex mt-5">
                  <Link
                    href={"/"}
                    className="bg-white px-12 font-medium py-5 rounded-full text-black text-xl"
                  >
                    Get Started
                  </Link>
                </div>

                <p className="text-lg text-center mt-10">
                  Partner with Fielmente’s expert hospitality social media
                  marketing team to elevate your brand and dominate the digital
                  landscape. Embrace your potential today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-black">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} color={"black"} />
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, subtitle }: any) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl">
      <h2 className="text-5xl text-center font-bold text-black">{title}</h2>
      <p className="text-black text-xl text-center">{subtitle}</p>
      <div>
        <div className="flex justify-center mt-5">
          <Link
            href={"/"}
            className="bg-black px-12 font-medium py-4 rounded-2xl text-white text-xl"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardTwo = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-[#333742] px-4 py-10 rounded-[3rem] flex gap-6 items-start">
      <div className="relative max-w-28 w-full aspect-[4/3]">
        <Image
          src={image}
          alt="images"
          fill
          className="object-contain rounded-3xl"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-white text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default page;
