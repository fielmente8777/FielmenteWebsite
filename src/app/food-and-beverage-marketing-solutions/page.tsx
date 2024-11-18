import React from "react";
import {
  NumberComponent,
  GotEnquiry,
  Presence,
  Section,
  Container,
  OurClient,
  ConsultationForm,
} from "@/components";
import {
  EnhancedCustomerService,
  DirectBookings,
  ShowcaseMenu,
  HighlightOffers,
  Showcase,
} from "@/utils/icons";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Needs, NeedSeo } from "../industries-we-serve/components";
import { PopupForm } from "../landing-page/components";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency India | Restuarant Marketing Company",
  description:
    "Looking for your restaurant marketing success? Fielmente is the leading restaurant marketing agency in India and boosting your restaurant's digital presence. Contact us!",
};

const data = [
  {
    title: "70+",
    subtitle: "Hoteliers Trust Us",
  },
  {
    title: "90+",
    subtitle: "Projects Completed",
  },
  {
    title: "80%",
    subtitle: "Satisfaction Rate",
  },
  {
    title: "15+",
    subtitle: "Years of Experience",
  },
];

const Needsdata = {
  title: "Why do Your Restaurants need ",
  span: "Website?",
  subtitle:
    "In today’s digital age, having a strong online presence is crucial for restaurants to thrive. Fielmente, the leading restaurant marketing agency in India, understands the importance of restaurant marketing and the role it plays in attracting and engaging potential customers.",
  label: "Book a consultation",
  href: "#consultation",
  card: [
    {
      image: {
        src: "/icon/Search-Engine-Visibility.png",
      },
      title: "Boost Visibility",
    },
    {
      icon: <ShowcaseMenu />,
      title: "Showcase Menu",
    },
    {
      icon: <DirectBookings />,
      title: "Contact Information",
    },
    {
      image: {
        src: "/icon/Online-Reservation.png",
      },
      title: "Online Reservation",
    },
    {
      icon: <EnhancedCustomerService />,
      title: "Customer Reviews",
    },
    {
      icon: <HighlightOffers />,
      title: "Highlight Offers",
    },
  ],
};

const needs2Data = {
  title: "Why do Your Restaurant Needs",
  span: "Influencer Marketing?",
  subtitle:
    "The power of influencer marketing in driving customer interest and boosting your restaurant’s success is increasing. Let Fielmente, help you harness the influence of trusted social media personalities to expand your reach.",
  card: [
    {
      title: "Trusted Recommendation",
      subtitle:
        "Harness the power of influencers trusted recommendations to showcase your restaurant’s unique offerings and drive customer interest.",
    },
    {
      title: "Expand Reach",
      subtitle:
        "Reach a wider audience by leveraging the influencer’s dedicated following, increasing brand exposure, and attracting new customers.",
    },
    {
      title: "Engaging Content",
      subtitle:
        "Collaborate with influencers to create engaging and authentic content that showcases your restaurant’s ambiance, cuisine, and dining experience.",
    },
    {
      title: "Unique Experiences",
      subtitle:
        "Offer exclusive experiences or tastings to influencers, allowing them to share their firsthand experience with their audience and create a buzz around your restaurant.",
    },
    {
      title: "Targeted Campaigns",
      subtitle:
        "Partner with influencers who match your restaurant's target audience to ensure your message reaches people most likely to be interested in dining at your establishment.",
    },
    {
      title: "Increased Reservations",
      subtitle:
        "Influencer marketing can drive bookings and reservations, as followers are inspired to visit your restaurant based on the influencers’ recommendations.",
    },
  ],
};

const needSeoData = {
  title: "Why Does Your Restaurant Need ",
  span: "SEO?",
  subtitle:
    "As digitalization is approaching at a faster pace, restaurant marketing is essential for attracting customers and standing out from the competition. Let our restaurant marketing agency help you optimize your online presence.",
  img: {
    src: "/images/mobile.png",
  },
  label: "Contact Us",
  href: "/contact",
  card: [
    {
      image: {
        src: "/icon/Boost_Visibility.png",
      },
      title: "Boost Visibility",
      subtitle:
        "Boost your restaurant’s online visibility for easier discovery.",
    },
    {
      image: {
        src: "/icon/Targeted_Traffic.png",
      },
      title: "Targeted Traffic",
      subtitle: "Attract quality, relevant traffic to your website.",
    },
    {
      image: {
        src: "/icon/Local_SEO.png",
      },
      title: "Local SEO",
      subtitle: "Optimize for local searches to attract nearby customers.",
    },
    {
      icon: <Showcase />,
      title: "Highlight Your Menu",
      subtitle: "Showcase unique dishes online to entice customers to visit.",
    },
    {
      image: {
        src: "/icon/Drive-Reservations.png",
      },
      title: "Drive Reservations and Foot Traffic",
      subtitle: "Optimize your website to boost reservations and revenue.",
    },
    {
      image: {
        src: "/icon/Online_Reviews.png",
      },
      title: "Online Reviews & Reputation Management",
      subtitle:
        "Monitor and respond to reviews to build trust and positive perception.",
    },
  ],
};

const presenceData = {
  title: "Harness the Power of Social Media Marketing to Elevate Your ",
  span: "Restaurants Presence.",
  img: [
    "/images/hotel-receptionist-work.png",
    "/images/briefing-staff-hotel.png",
    "/images/employee-checking-guest-passport-validate.png",
  ],
};
const gotEnquiryData = {
  title: "Got an Enquiry",
  description: "Propel Your brand with Fielmente Hospitality Marketing",
  span: "Agency",
};

function page() {
  return (
    <section className="">
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col gap-7">
              <h1 className="text-[#737373] text-base md:text-lg  font-semibold border-l-4 border-orange-primary pl-4 ">
                Leading Restaurant Marketing Company
              </h1>
              <h2 className="text-black md:text-5xl/[3.2rem] text-3xl font-normal">
                Best Restaurant Marketing Agency in{" "}
                <strong className="text-orange-primary">India.</strong>
              </h2>
              <p className="text-gray-500 text-lg">
                We at Fielmente create ROI-driven social media campaigns and
                content for your for your restaurant business. 
              </p>
              <p className="text-gray-500 text-lg">
                The restaurant business is constantly changing and evolving but
                one thing that has remained the same over the last few years are
                diners turn to the internet to help them choose where to eat.
              </p>
            </div>

            <div className="relative w-full aspect-[4/2.9]">
              <Image
                src="/images/aa.png"
                alt="young-waiter"
                fill
                className="object-cover rounded-lg -z-10"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="lg:grid grid-cols-2 gap-6 flex flex-col-reverse flex-1">
            <div className="relative w-full aspect-[4/2.89]">
              <Image
                src="/images/picture-guests.png"
                alt="picture-guests"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-black md:text-[2.775rem]/[3.2rem] text-3xl font-normal">
                Generating a Buzz Hotspot that {""}
                <b className="text-orange-primary">Fills Seats</b>
              </h3>
              <p className="text-gray-500 text-lg">
                In today’s digital age, your restaurant’s reputation is
                everything. But fear not! At our Restaurant Marketing Agency,
                we’ve mastered the art of managing and elevating your online
                presence. From Google Reviews to Facebook, Instagram, and
                LinkedIn, we’ll monitor and curate the comments that can make or
                break your business.
              </p>
              <p className="text-gray-500 text-lg">
                Trust the experts at Fielmente to make your brand shine and draw
                eager diners to your tables. Get ready for a reputation
                transformation like never before!
              </p>
              <div className="flex lg:justify-start justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-dark text-white py-3 px-6 border border-blue-dark rounded-lg text-lg font-semibold hover:bg-white hover:text-black duration-700 transition box_shadow"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <NumberComponent data={data} />
      <Needs {...Needsdata} maxw={true} textCenter={true} card1={true} />
      <NeedSeo {...needSeoData} />
      <Needs {...needs2Data} />
      <GotEnquiry {...gotEnquiryData} />
      <OurClient />
      {/* <Presence {...presenceData} /> */}
      <ConsultationForm />
    </section>
  );
}

export default page;
