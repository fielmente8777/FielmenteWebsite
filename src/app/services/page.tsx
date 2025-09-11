import Image from "next/image";
import Manwithdocuments from "../../../public/images/briefing-staff-hotel-restaurant-1.png";
import Link from "next/link";
import Form from "@/app/about-fielmente-best-hospitality-marketing-agency/components/Form";
import GoogleAds1 from "../../../public/images/smileman.webp";
import GoogleAds2 from "../../../public/images/pizaparty.webp";
import GoogleAds3 from "../../../public/images/manwithipad.webp";
import GoogleAds4 from "../../../public/images/oldldy.webp";

import Manger from "../../../public/images/confident-manager-restaurant-1.webp";

import ChooseUs1 from "../../../public/images/i3ruf.webp";
import ChooseUs2 from "../../../public/images/i3urhf.webp";
import ChooseUs3 from "../../../public/images/o3irjf.webp";
import ChooseUs4 from "../../../public/images/2iut4hg.webp";
import BrandWeWork from "./components/BrandWeWork";
import PeopleSay from "./components/PeopleSay";

import AccordinContent from "./components/AccordinContent";

import Hotels from "../../../public/images/hotel.png";
import Resorts from "../../../public/images/stays.png";
import Restaurants from "../../../public/images/restaurants.png";
import kitchens from "../../../public/images/kitchen.png";

import type { Metadata } from "next";
import { PopupForm } from "../hospitality/components";

export const metadata: Metadata = {
  title: "India's Leading Hospitality Marketing Services - Fielmente",
  description:
    "Fielmente: Thriving hospitality marketing services, elevating your brand with expert digital strategies. Get your success today!",
};

export interface AccordingDataPropsTypes {
  question: string;
  answer: string;
}

const faq = [
  {
    question: "Expanding Reach",
    answer:
      "Reach global travelers and widen your audience through our hospitality digital marketing services.",
  },
  {
    question: "Boosting Bookings",
    answer:
      "Online presence drives more bookings, converting visitors into loyal guests.",
  },
  {
    question: "Competing Effectively",
    answer:
      "Stay ahead in the hospitality industry with cutting-edge digital marketing strategies.",
  },
  {
    question: "Targeted Advertising",
    answer:
      "Reach your ideal guests with precise targeting and personalized ads.",
  },
  {
    question: "Enhanced Guest Experience",
    answer:
      "Create seamless interactions and offer convenience through online channels.",
  },
  {
    question: "Data-Driven Insights",
    answer:
      "Leverage data to optimize marketing efforts and make informed business decisions..",
  },
];

const chooseUsData = [
  {
    title: "Expertise",
    subtitle:
      "Benefit from our extensive experience and expertise in digital marketing for hotels, ensuring effective strategies tailored to your specific needs.",
    image: ChooseUs1,
  },
  {
    title: "Results-Driven Approach",
    subtitle:
      "We are dedicated to delivering tangible results, maximizing your online presence, and driving increased bookings and revenue for your hotel.",
    image: ChooseUs2,
  },
  {
    title: "Industry Focus",
    subtitle:
      "Specializing on the hotel sector, we understand the unique challenges and opportunities, enabling us to provide solutions for a competitive edge.",
    image: ChooseUs3,
  },
  {
    title: "Customized Solutions",
    subtitle:
      "We take the time to understand your hotel's goals and objectives, crafting customized strategies and solutions that align with your brand and resonate with your target audience.",
    image: ChooseUs2,
  },
  {
    title: "Integrated Services",
    subtitle:
      "From SEO and web design to social media and paid advertising, our comprehensive suite of services ensures a cohesive and holistic approach to your digital marketing efforts.",
    image: ChooseUs3,
  },
  {
    title: "Exceptional Client Service",
    subtitle:
      "Enjoy a seamless and personalized experience with our attentive and dedicated client service team, ensuring your satisfaction and success throughout our partnership.",
    image: ChooseUs4,
  },
];

function page() {
  return (
    <section>
      {/* Boost Your Business with Fielmente, India's top Hospitality Marketing Services! */}
      <div className="lg:py-20 py-9 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-12">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                OUR HOSPITALITY MARKETING SERVICES
              </h2>
              <h2 className="md:text-3xl text-3xl text-black font-bold md:mt-20 mt-5">
                {
                  " Boost Your Business with Fielmente, India's top Hospitality Marketing Services!"
                }
              </h2>
              <p className="text-gray-primary text-xl mt-5 text-center lg:text-start">
                Attention, savvy business owners! Release the true potential of
                your online presence with Fielmente, your go-to hospitality
                marketing services in India.
              </p>

              <p className="text-gray-primary text-xl mt-5 text-center lg:text-start">
                Let our experts empower your business with tailored strategies,
                setting new standards for success in the hospitality industry!
              </p>
            </div>
            <div className="">
              <div className="relative w-full mx-auto aspect-[4/2.5]">
                <Image
                  src={Manwithdocuments}
                  alt="mobile"
                  fill
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="lg:py-20 py-9">
        <div className="max-width">
          <h2 className="text-black text-center lg:text-4xl text-3xl font-bold">
            What We Offer
          </h2>
          <p className="text-black text-center lg:text-lg text-base mt-10">
            Want to embrace the Digital Frontier? Boost your hospitality
            business with our cutting-edge Hospitality Marketing Services and
            Hospitality Digital Marketing Services. Conquer the online realm,
            attract a broader audience, and experience a surge in bookings. It’s
            time to embrace the power of the digital world and release your
            business’s true potential!
          </p>
        </div>
      </div>

      {/* Industries We Serve:  */}
      <div className="lg:py-12 py-9">
        <div className="max-width grid lg:grid-cols-2 gap-10">
          <div className="relative w-full aspect-[4/3.1]">
            <Image
              src={Manger}
              alt="man-with-documents"
              fill
              className="object-contain rounded-3xl"
            />
          </div>
          <div className="">
            <h2 className="lg:text-4xl text-2xl lg:text-start text-center text-black font-bold">
              Industries We Serve:
            </h2>
            {/* <div className="text-black sm:text-3xl text-xl font-bold text-center mt-5 flex gap-6 justify-center">
              <p> Hotels</p>
              <p>Restaurants Cloud</p>
              <p>Kitchens</p>
            </div> */}
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mt-10">
              {cardDt.map((item, index) => (
                <div
                  className="flex flex-col lg:gap-4 gap-2 rounded-3xl items-center justify-center lg:p-6 p-5 shadow-lg bg-[#E8FFF9]"
                  key={index}
                >
                  <div className="relative w-24 h-24 aspect-[4/4]">
                    <Image
                      src={item.icon}
                      alt="man-with-documents"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-black font-bold w-max text-[1rem]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <p className="lg:text-lg text-base text-center lg:text-start text-black mt-10">
              Fielmente is a place, where we excel in revolutionizing your
              business! As the finest hospitality marketing agency in India, we
              exclusively cater to hotels, cloud kitchens, and restaurants.
              Elevate your brand’s presence, thrive in competition, and allure
              countless guests with our exceptional hospitality marketing
              services. Let us be your key to success in the dynamic world of
              hospitality!
            </p>
          </div>
        </div>
      </div>

      {/* Why do You need to Go Online?*/}
      <div className="lg:py-12 py-9">
        <div className="max-width">
          <h2 className="text-black text-center lg:text-4xl text-2xl font-bold">
            Why do You need to Go Online?
          </h2>
          <p className="text-black text-center text-base lg:text-lg mt-10">
            Unwrap your business’s true potential and reach new heights with the
            irresistible allure of online presence with Fielmente’s cutting-edge
            hospitality marketing services!
          </p>

          <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-6 mt-20 border-b pb-12">
            <div>
              <Accordin Data={faq} />
            </div>
            <div className="w-full">
              <div className="relative max-w-[340px] mx-auto aspect-[4/5]">
                <Image
                  src={GoogleAds2}
                  alt=""
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Are you ready to unlock the full potential  */}
      <div className="lg:py-20 py-9">
        <div className="max-width">
          <h2 className="text-black text-center lg:text-4xl text-2xl font-bold">
            Are you ready to unlock the full potential of your business’s online
            presence with our Hospitality Marketing Services?
          </h2>
          <p className="text-black text-center text-base lg:text-lg mt-10">
            Hospitality Marketing Services? Go online and take your hospitality
            business to new heights! With the leading hospitality consultants in
            India and the best hospitality marketing agency, today.
          </p>
          <div className="flex justify-center mt-12">
            <Link
              href={"/contact"}
              className="bg-black px-10 py-3 border text-white border-black text-xl rounded-xl hover:bg-transparent hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us?  */}
      <div className="lg:py-20 py-10">
        <div className="max-width">
          <h2 className="text-black text-center lg:text-4xl text-3xl font-bold">
            Why Choose Us?
          </h2>
          <p className="text-black text-center lg:text-lg text-base mt-10">
            Your business’s success is with Fielmente, your ultimate hospitality
            consultant, offering tailored and result-driven hospitality
            marketing services in India, crafted precisely for your needs!
          </p>

          <div className="grid lg:grid-cols-3 gap-y-32 mt-20">
            {chooseUsData.map((item, index) => (
              <ChooseUSCard {...item} key={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 py-6 mt-20">
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-5xl text-2xl font-bold text-black text-center">
                3K+
              </h2>
              <p className="lg:text-lg text-base font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-5xl text-2xl font-bold text-black text-center">
                89%
              </h2>
              <p className="lg:text-lg text-base font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-5xl text-2xl font-bold text-black text-center">
                15
              </h2>
              <p className="lg:text-lg text-base font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="lg:text-5xl text-2xl font-bold text-black text-center">
                15
              </h2>
              <p className="lg:text-lg text-base font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="grid lg:grid-cols-4 grid-cols-2">
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds1}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds2}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds3}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/4.5]">
            <Image
              src={GoogleAds4}
              alt="google-ads"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hire us as your hospitality marketing agency  */}
      <div className="lg:py-20 py-10">
        <div className="max-width">
          <h2 className="text-black text-center lg:text-5xl text-3xl font-bold">
            Hire us as your hospitality marketing agency and unlock the full
            potential of your business.
          </h2>
          <p className="text-black text-center lg:text-xl text-lg mt-10">
            Experience our expertise, results-driven approach, and personalized
            hospitality marketing service that set us apart in the industry.
          </p>
          <div className="flex justify-center mt-12">
            <Link
              href={"/contact"}
              className="bg-[#2CBCA5] px-10 py-3 border  text-xl rounded-xl hover:bg-transparent hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Brand We Work With  */}
      <BrandWeWork />

      {/* What People Say About Us  */}
      <PeopleSay />

      {/* Form*** */}
      <div className="py-20 bg-blue-dark">
        <div className="max-width ">
          <Form title={"Looking to discuss with us?"} />
        </div>
      </div>
      
    </section>
  );
}

const Accordin = ({ Data }: { Data: AccordingDataPropsTypes[] }) => {
  return (
    <div className=" flex flex-col gap-5">
      {Data.map((item, index) => (
        <AccordinContent {...item} key={index} />
      ))}
    </div>
  );
};

const ChooseUSCard = ({ title, subtitle, image }: any) => {
  return (
    <div className="max-w-[300px] mx-auto">
      <div className="relative w-full aspect-[4/4]">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-center text-2xl font-medium text-black">{title}</h2>
        <p className="text-center text-base text-black">{subtitle}</p>
      </div>
    </div>
  );
};

export default page;

const cardDt = [
  {
    icon: Hotels,
    title: "Hotels",
  },
  {
    icon: Resorts,
    title: "Resorts",
  },
  {
    icon: Restaurants,
    title: "Restaurants",
  },
  {
    icon: kitchens,
    title: "Cloud kitchens",
  },
];
