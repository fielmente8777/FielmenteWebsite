import Image from "next/image";
import Link from "next/link";
import React from "react";
import Girl from "../../../../public/images/Girl.jpg";
import CircularSocial from "../../../../public/images/social-circle.webp";

import TrustyBrand from "../../../../public/images/hsdgvc.webp";
import Manwithlaptop from "../../../../public/images/manwithlaptop.jpg";
import Monthly from "../../../../public/images/monthly-remport-1-1024x588-1.webp";

import Form from "@/app/about/components/Form";

function page() {
  return (
    <section>
      <div className="bg-[#1E1928] py-20">
        <div className="max-width">
          {/* Hospitality Social Media Marketing:***** */}
          <div className="grid md:grid-cols-2 gap-4">
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
          <div className="grid sm:grid-cols-4 gap-8 py-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                3K+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                89%
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                15
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-normal text-white text-center">
                15
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>

          {/* cards**** */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 px-20 border-t pt-6 border-b-gray-700 ">
            <Card />
            <Card />
            <Card />
          </div>

          {/* Why is Social Media Marketing Important for Your Business?*** */}
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
                  src={Manwithlaptop}
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
                <CardTwo />
                <CardTwo />
                <CardTwo />
                <CardTwo />
                <CardTwo />
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
                  src={Girl}
                  alt="girl"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-center text-4xl font-bold">
              The Clear Choice for Elevating Your Brand's Digital Presence
            </h2>
            <p className="text-center text-xl mt-6">
              Why brands prefer Us? Fielmente. the leading hospitality SEO
              agency in India, as we deliver tangible and measurable results.
              Standout performance and unwavering excellence set us apart.
              Experience with us:
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10 sm:px-16">
              <CardThree />
              <CardThree />
              <CardThree />
              <CardThree />
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
              src={Girl}
              alt="girl"
              fill
              className="object-cover rounded-[4rem]"
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-8">
          <div className="max-w-[700px]">
            <h2 className="text-4xl font-bold">
              Let's Ignite Your Social Media Growth Together
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

export const Card = () => {
  return (
    <div className="bg-white px-4 py-12 rounded-xl">
      <h2 className="text-5xl text-center font-bold text-black">
        Hotel Social Media
      </h2>
      <p className="text-black text-xl text-center">
        If you are looking for the best hotel seo, look no further.
      </p>
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

export const CardTwo = () => {
  return (
    <div className="bg-[#333742] px-4 py-10 rounded-[3rem] flex gap-6">
      <div className="relative max-w-32 w-full aspect-[4/3]">
        <Image
          src={CircularSocial}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Social Media Calendar</h2>
        <p className="text-white text-lg mt-2">
          A well-planned content calendar to make sure that your posts are
          always interesting and consistent.
        </p>
      </div>
    </div>
  );
};

export const CardThree = () => {
  return (
    <div className="bg-[#E9D175] px-8 py-10 rounded-[3rem] gap-6">
      <div className="flex flex-col gap-16">
        <h2 className="text-4xl font-bold text-black">Expertise</h2>
        <p className="text-black text-xl mt-2">
          A team of seasoned professionals dedicated to your success.
        </p>
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
          src={Monthly}
          alt="circular-socail"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default page;
