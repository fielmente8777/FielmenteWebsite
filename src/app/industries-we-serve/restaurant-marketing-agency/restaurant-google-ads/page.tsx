import Image from "next/image";

import WantToJoin from "../../components/want-to-join";

import CaptivateAndConnect from "../../components/captivate-and-connect";
import { Accordin } from "../../components/common-hero";

import type { Metadata } from "next";
import WeAreDef from "../../hotel-marketing-agency/hotel-seo/components/WeAreDef";
import Contactus from "./Contactus";

export const metadata: Metadata = {
  title: "India's Leading Restaurant Google Ads Agency - Fielmente",
  description:
    "Drive restaurant success with our leading restaurant Google Ads agency in India. Maximize ROI with expertly managed campaigns. Partner with us now!",
  openGraph: {
    title: "India's Leading Restaurant Google Ads Agency - Fielmente",
    description:
      "Drive restaurant success with our leading restaurant Google Ads agency in India. Maximize ROI with expertly managed campaigns. Partner with us now!",
  },
  alternates: {
    canonical:
      "https://fielmente.com/industries-we-serve/restaurant-marketing-agency/restaurant-google-ads/",
    languages: {
      "en-US":
        "https://fielmente.com/industries-we-serve/restaurant-marketing-agency/restaurant-google-ads/",
    },
  },
};

const faq = [
  {
    question: "What is Restaurant Google Ads?",
    body: {
      type: "null",
      header:
        "Restaurant Google Ads are the digital advertisements. These Ads are specially designed to promote your restaurants and their offerings on Google’s advertising platform.",
    },
  },
  {
    question: "How to Advertise a Restaurant online?",
    header: "To advertise a restaurant online, follow these steps:",
    body: {
      type: "number",
      list: [
        "Create a user-friendly, responsive website. It should showcase your Restaurant, menu, and services.",
        "Use search engine optimization (SEO) techniques. Ensure your website appears in relevant search results when users look for restaurants in your area.",
        "You should use Social Media platforms like Facebook, Instagram, and Twitter. Share high-quality images, videos, and information about your restaurant on those platforms.",
        " Partner with popular Online Food Delivery Platforms (OTAs). Like Swiggy, Zomato, Uber Eats, and DoorDash to list your property and attract potential customers.",
        "Creatively use Google’s restaurant advertising platform. For displaying your restaurant’s pricing and availability directly in search results.",
        " Create valuable and informative content related to food, local attractions, and tips for food enthusiasts. This can attract potential customers and establish your restaurant as an authority in the field.",
        "Collect email addresses from interested parties and send out promotional offers, newsletters, and updates.",
      ],
    },
  },
  {
    question: "How do I write a restaurant Ads?",
    body: {
      type: "null",
      header:
        "Writing tempting restaurant Ads involves showcasing your restaurant’s special features. Like the menu, ambiance, benefits, etc. Use clarifying language, focus on what sets your restaurant apart, and consider using attention-seeking headlines. Mention key selling points like location, cuisine types, special offers, and customer experiences.",
    },
  },
  {
    question: "How does Google Restaurant Ads work?",
    body: {
      type: "list",
      header:
        "Google Restaurant Ads allows your restaurants to show the rates and availability directly within Google Search and Google Maps. When users search for dining options, they see a list of restaurants with their rates and reservation options. When they click on any of the restaurants, it leads them to a page with more details. The page in which there is an option to book directly through the restaurant’s website or other reservation platforms.",
    },
  },
  {
    question: "What are Google Local Ads?",
    body: {
      type: "null",
      list: [
        " Google Local Ads is a type of online advertising. Local Ads help local businesses and restaurants to rank on SERPs. When the users search for services in their local area, the restaurants appear at the top of Google Search results. These ads include the business or restaurant’s name, contact information, reviews, and a short description.",
        "Google Local Ads is also known as Local Services Ads.",
      ],
    },
  },
  {
    question: "What are the benefits of Google Restaurant Ads?",
    body: {
      type: "number",
      header: "The Benefits of using Google Restaurant Ads are:",
      list: [
        "It helps to increase the visibility of your restaurant. Your restaurant is displayed on Google Search and Maps results.",
        "It can target specific audiences. They can be based on factors like location, dining preferences, and more.",
        "It displays the menu items and special offers of your restaurant alongside your competition. It allows customers to compare and choose.",
        "Google provides analytics and insights to help you understand how your ads are performing. It helps to make necessary adjustments",
        "Many travelers use mobile devices to search and book restaurants. Google Ads help restaurants appear seamlessly on every device.",
      ],
    },
  },
];

const capitavteAndConnectData = {
  title:
    "Enhance Your Restaurant’s Digital Presence, with Targeted Ads Tailored for Restaurants.",
  subtitle:
    "Staying on Top for Maximizing Online Success: From increasing reservations to dominating search rankings, our tailored SEO strategies for restaurants drive targeted traffic, boost visibility, and skyrocket revenue. Experience the power of restaurant SEO today!",
  leftContent: {
    title: "Save more and get visibility for your business with google Ads.",
  },
  rightContent: {
    title: "Accelerate Your Restaurant’s Growth with Paid Ads.",
    icon: "/images/keywords.webp",
    subtitleText: `Paid Ads Drive Immediate Visibility, Targeted Reach, and High-Converting Reservations, Amplifying Your Online Presence and Revenue Potential.`,
  },

  items: [
    {
      title: "Increased Visibility",
      subtitle:
        "Boost your restaurant’s online presence with targeted advertising strategies, expanding your reach and capturing the attention of your ideal audience.",
      image: {
        src: "/images/content-writing.webp",
        alt: "Reservation",
      },
    },

    {
      title: "Targeted Advertising",
      subtitle:
        "With Fielmente’s expertise, your restaurant’s paid ads reach the right audience, maximizing engagement and driving high-quality leads.",
      image: {
        src: "/images/3rf.webp",
        alt: "Reservation",
      },
    },

    {
      title: "Cost-Effective Results",
      subtitle: `Maximize your advertising budget with our cost-effective solutions, driving tangible results and high returns on investment for your restaurant.`,
      image: {
        src: "/images/hourglass.webp",
        alt: "Reservation",
      },
    },

    {
      title: "Drive Direct Reservations",
      subtitle:
        "Fielmente’s tailored paid ads effectively drive direct reservations, empowering your restaurant to attract and convert potential guests.",
      image: {
        src: "/images/content-writing.webp",
        alt: "Reservation",
      },
    },

    {
      title: "Compete Effectively ",
      subtitle: `Stay ahead of the competition in the hospitality industry by leveraging our powerful paid advertising strategies, positioning your restaurant as the top choice for guests

        `,
      image: {
        src: "/images/3rf.webp",
        alt: "Reservation",
      },
    },

    {
      title: "Real-Time Optimization",
      subtitle:
        "Benefit from real-time optimization of your paid ads, ensuring continuous improvement and maximum performance for your restaurant marketing efforts.",
      image: {
        src: "/images/hourglass.webp",
        alt: "Reservation",
      },
    },
  ],
};

function page() {
  return (
    <section>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-20">
            <div>
              <h1 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                Restaurant GOOGLE ADS
              </h1>
              <h2 className="md:text-5xl tracking-wider md:leading-[4rem] text-3xl text-black font-medium md:mt-10 mt-5">
                Excel at Google Ads with India’s Leading Restaurant Marketing Agency.
              </h2>
              <p className="text-gray-primary text-xl md:mt-10 mt-5">
                Drive Revenue with Restaurant Google Ads. With the Expertise of
                Fielmente- One of the best Restaurant Marketing Companies in India to
                Maximize Your Online Visibility and Generate High-Conversion
                Reservations.
              </p>
            </div>
            <div className="">
              <div className="relative max-w-[500px] mx-auto aspect-[4/3]">
                <Image
                  src={"/google-ads.png"}
                  alt="Line-design"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width  mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:col-span-2 md:max-w-[400px] relative aspect-[4/4.5]">
              <Image
                src={"/images/Keyboard.webp"}
                alt="Keyboard"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="lg:text-5xl text-3xl lg:w-[80%] max-md:text-center text-black font-bold">
                  What We Offer: Paid Ads for Restaurant
                </h2>
                <div>
                  <p className="lg:text-xl text-lg w-full text-gray-primary">
                    Paid Ads Drive Immediate Visibility, Targeted Reach, and
                    High-Converting Reservations, Amplifying Your Online Presence
                    and Revenue Potential.
                  </p>
                </div>
              </div>

              <div className="flex">
                {/* <Link
                  href={"/contact"}
                  className="border-b-2 border-b-[#6664E4] text-black text-xl font-medium pb-1 hover:text-[#6664E4] duration-300 flex items-center gap-2"
                >
                  Contact us <AiOutlineArrowRight />
                </Link> */}
                <Contactus />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-32 border-b border-b-gray-300 pb-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-normal text-black text-center">
                3K+
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                COMPLETED PROJECTS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-normal text-black text-center">
                89%
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                SATISFACTION RATE
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-normal text-black text-center">
                15
              </h2>
              <p className="text-lg font-medium text-gray-primary text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <CaptivateAndConnect {...capitavteAndConnectData} />
        </div>
      </div>

      <WeAreDef />

      <div className="md:py-12 py-10 bg-black text-white">
        <div className="max-width">
          <WantToJoin />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="lg:text-5xl text-3xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              <Accordin Data={faq} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
