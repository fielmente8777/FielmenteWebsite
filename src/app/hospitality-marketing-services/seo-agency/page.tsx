import Image from "next/image";
import Link from "next/link";
import React from "react";
import Girl from "../../../../public/images/SEO-01-1.webp";
import Girl2 from "../../../../public/images/SEO-12.webp";

import Girlwithpen from "../../../../public/images/Girlwithpen.webp";

import CircularSocial from "../../../../public/images/social-circle.webp";

import TrustyBrand from "../../../../public/images/hsdgvc.webp";
import Manwithlaptop from "../../../../public/images/manwithlaptop.jpg";
import Wd from "../../../../public/images/WD-10.webp";

import Monthly from "../../../../public/images/monthly-remport-1-1024x588-1.webp";
import Searchengine from "../../../../public/images/SearchEngineOptimization-1024x588-1.webp";
import Adwords from "../../../../public/images/adwords-and-search-engine-marketing.webp";
import GoogleAdwords from "../../../../public/images/GoogleAdwordsTargeting-1024x588-1.webp";

import HotelAds from "../../../../public/images/HOTEL-MARKETING.webp";
import CloudKitchenAds from "../../../../public/images/CLOUD-KITCHEN-MARKETING.webp";
import RestaurantAds from "../../../../public/images/RESTAURANT-MARKETING.webp";

import GoogleAds11 from "../../../../public/images/SEO-11.webp";
import GoogleAds15 from "../../../../public/images/SEO-15.webp";
import GoogleAds10 from "../../../../public/images/SEO-10-1.webp";
import GoogleAds14 from "../../../../public/images/SEO-14.webp";
import GoogleAds06 from "../../../../public/images/SEO-06.webp";

import Form from "@/app/about/components/Form";

const CardData1 = [
  {
    title: "Hotel SEO",
    subtitle:
      "If you are looking for the best hotel advertisement company, look no further.",
    icon: HotelAds,
  },
  {
    title: "Cloud Kitchen SEO",
    subtitle:
      "If you are looking for the best cloud kitchen promotion, look no further.",
    icon: CloudKitchenAds,
  },
  {
    title: "Restaurant SEO",
    subtitle:
      "If you are looking for the best restaurant advertising, look no further.",
    icon: RestaurantAds,
  },
];

const CardData2 = [
  {
    title: "Website Analysis",
    subtitle:
      "Gain insights into your previous SEO efforts and their impact on your business.",
    image: GoogleAds11,
  },
  {
    title: "Keyword Research",
    subtitle:
      "Uncover competitive keywords that will drive quality traffic to your site.",
    image: GoogleAds15,
  },
  {
    title: "Competitive Research",
    subtitle: "Stay ahead by understanding your competitors' moves.",
    image: GoogleAds10,
  },
  {
    title: " Technical & Local SEO",
    subtitle:
      "Fine-tune the technical aspects for a seamless user experience. | Target and reach local customers searching for your restaurant or hotel.",
    image: GoogleAds14,
  },
  {
    title: "Content Strategy",
    subtitle:
      "Engaging content that captivates your audience and boosts your rankings.",
    image: GoogleAds06,
  },
];

const CardData3 = [
  {
    title: "Expertise",
    subtitle: "A team of seasoned professionals dedicated to your success.",
    image: Monthly,
  },
  {
    title: "Customization",
    subtitle: "Tailored strategies to fit your unique business needs.",
    image: Searchengine,
  },
  {
    title: "Innovation",
    subtitle: "Staying ahead with cutting-edge SEO techniques.",
    image: Adwords,
  },
  {
    title: " Patnership",
    subtitle: "Collaborating closely for mutual growth and prosperity",
    image: GoogleAdwords,
  },
];

function page() {
  return (
    <section>
      <div className="bg-[#1E1928] py-20">
        <div className="max-width">
          {/* Revolutionize Your Business with Fielmente   */}
          <div className="grid md:grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl">
                Revolutionize Your Business with Fielmente, the Hospitality SEO
                Agency that Unleashes True Potential!
              </h2>
              <p className="text-gray-primary text-xl">
                Fielmente, India’s premier Hospitality SEO Agency, where success
                awaits! Boost your online presence and skyrocket revenue with
                our cutting-edge strategies.
              </p>
              <p className="text-gray-primary text-xl">
                Embrace the full potential of your business with personalized
                solutions tailored for the hospitality industry. Welcome to a
                new era of growth and prosperity!
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
                  // fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Milestones*** */}
          <div className="grid sm:grid-cols-4 gap-8 py-16 max-w-[1080px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">
                100+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                REVIEWS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">88%</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                INCREASE IN ROAS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">70+</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                HOTELIERS TRUST US
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white text-center">90+</h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 px-20 border-t pt-6 border-b-gray-700 ">
            {CardData1.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>

          {/* Why is SEO Important for Your Hospitality Business?  */}
          <div className="grid lg:grid-cols-2 items-center mt-10">
            <div className="w-full">
              <div className="relative max-w-2xl mx-auto aspect-[4/5]">
                <Image
                  src={Manwithlaptop}
                  alt="circular-social"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative max-w-2xl mx-auto aspect-[4/4]">
                <Image
                  src={Wd}
                  alt="circular-social"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Why is SEO Important for Your Hospitality Business?
              </h2>

              <p className="text-xl mt-8">
                Discover the recipe for success as a restaurant, hotel or Cloud
                Kitchen in the digital age with Fielmente, the top hospitality
                SEO agency in India.
              </p>
              <p className="text-xl mt-8">
                Rule the search engine results, attract a steady stream of
                customers, and ignite real revenue growth. Rocket your business
                with our professional SEO services, going beyond mere rankings!
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
                Driving Success Through Revenue-Focused SEO Strategies
              </h2>
              <p className="text-white text-xl">
                Fielmente understands it’s about RESULTS, not just rankings. Our
                hospitality SEO Agency in India drives increased organic
                traffic, ensuring substantial revenue growth. Partner with us
                for unparalleled success!
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
                  src={Girlwithpen}
                  alt="girl"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-center text-4xl font-bold">
              {`The Clear Choice for Elevating Your Brand's Digital Presence`}
            </h2>
            <p className="text-center text-xl mt-6">
              Why brands prefer Us? Fielmente. the leading hospitality SEO
              agency in India, as we deliver tangible and measurable results.
              Standout performance and unwavering excellence set us apart.
              Experience with us:
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10 sm:px-16">
              {CardData3.map((item, index) => (
                <CardThree {...item} key={index} />
              ))}
            </div>
          </div>

          <div className="mt-20 py-12">
            <h2 className="text-center text-4xl font-bold">
              Join Our Circle of Thriving Brands
            </h2>
            <p className="text-center text-xl mt-6">
              Don’t just take our word for it. Discover the stories of
              businesses like yours that have achieved remarkable success with
              Fielmente’s SEO services. Read our testimonials and see how we’ve
              transformed brands into online powerhouses in our Hospitality SEO
              Agency
            </p>
            <div className="flex justify-center mt-16">
              <Link
                href={"/"}
                className="bg-white px-16 py-5 rounded-full text-xl font-semibold duration-300 text-black"
              >
                Get Started
              </Link>
            </div>
            <p className="mt-32 text-center text-4xl font-semibold">
              Amplify Your Impact with Our Comprehensive Digital Marketing
              Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-10 items-center py-12 bg-[#15151D]">
        <div className="md:col-span-2 w-full flex md:justify-end">
          <div className="relative max-w-[400px] w-full aspect-[4/4]">
            <Image
              src={Girl2}
              alt="girl-with-chart"
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
              employs custom content planning, precise scheduling, and strategic
              campaigns aligned with your business goals. We ensure your brand
              shines brightly in the spotlight and keep you informed when
              conversations about your business ignite.
            </p>

            <div className="mt-10 flex gap-5 items-center">
              <Image
                src={TrustyBrand}
                alt="trust by many brands"
                width={250}
                height={55}
              />
              <p className="text-lg">Trusted by many brands around the globe</p>
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
              Partner with Fielmente’s expert hospitality social media marketing
              team to elevate your brand and dominate the digital landscape.
              Embrace your potential today.
            </p>
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

const Card = ({ title, subtitle, icon }: any) => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl flex flex-col gap-3">
      <div className="flex justify-center">
        <Image src={icon} alt="icon" width={85} />
      </div>
      <h2 className="text-4xl text-center font-bold text-black">{title}</h2>
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

const CardThree = ({ title, subtitle, image }: any) => {
  return (
    <div className="bg-[#E9D175] px-8 py-10 rounded-[3rem] gap-6">
      <div className="flex flex-col gap-16">
        <h2 className="text-4xl font-bold text-black">{title}</h2>
        <p className="text-black text-xl mt-2">{subtitle}</p>
        <div>
          <Link
            href={"/"}
            className="hover:text-white text-xl font-semibold duration-300 text-black"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative max-w-56 w-full aspect-[4/4] mx-auto mt-10">
        <Image
          src={image}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default page;
