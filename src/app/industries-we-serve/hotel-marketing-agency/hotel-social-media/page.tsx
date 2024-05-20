import React from "react";
import OnlinePresence from "../../components/online-presence";
import UnloackBenifts from "../../components/unloack-benifts";
import CaptivateAndConnect from "../../components/captivate-and-connect";
import Mobiles from "../../components/mobiles";
import WantToJoin from "../../components/want-to-join";
import Frequently from "../../components/frequently";

import Keyword from "../../../../../public/images/keywords.webp";
import Promote from "../../../../../public/images/3rf.webp";
import Hoursglass from "../../../../../public/images/hourglass.webp";
import Contentwriting from "../../../../../public/images/content-writing.webp";
import { Accordin } from "../../components/common-hero";

const faq = [
  {
    question: "How to promote your Hotel on Social Media?",
    body: {
      type: "null",
      list: [
        "To promote your hotel on social media, you can share high-quality photos, videos, and entertaining content.",
        "You can also conduct contests, offer unique deals, and interact with guests. Do not forget to use relevant hashtags and collaborate with influencers to grow your reach.",
      ],
    },
  },
  {
    question: "What Social Media do Hotels use?",
    body: {
      type: "null",
      list: [
        " Hotels commonly use Social Media platforms like Facebook, Instagram, and Twitter for visual storytelling and customer engagement.",
        "   Also, LinkedIn is used for B2B networking. While YouTube showcases videos of the property.",
      ],
    },
  },
  {
    question: "Why do hotels have social media?",
    body: {
      type: "null",
      header:
        "Hotels use social media to connect with guests. They also showcase their hotels and share experiences. It is a way to increase brand awareness. Also, drive bookings, and engage with customers on a personal level.",
    },
  },
  {
    question: "How social media benefits the hospitality industry?",
    body: {
      type: "list",
      header: "Social media is a benefit for the hospitality industry:",
      list: [
        "  Social Media helps in growing brand exposure, ",
        "It encourages direct guest interactions and",
        "It showcases a hotel’s unique offerings.",
      ],
      footer: `It helps in creating customer loyalty, sharing user-generated content, and staying updated on industry trends.`,
    },
  },
  {
    question: "What are the 3 main areas of SEO?",
    body: {
      type: "list",
      header: "The three main areas of SEO are:",
      list: [
        "On-page optimization (content, keywords, meta tags),",
        "Off-page optimization (backlinks, social signals), and ",
        "Technical optimization (site speed, mobile-friendliness, crawlability).",
      ],
    },
  },
  {
    question: "How do hotels use Social Media to attract customers?",
    body: {
      type: "list",
      header: "Hotels use social media to",
      list: [
        "Post enticing visuals,",
        "  Share guest testimonials, and ",
        "  Offer exclusive promotions. ",
      ],
    },
  },
];

const capitavteAndConnectData = {
  title: "Captivate and Connect",
  subtitle:
    "Harness the Power of Restaurant Social Media Management to Engage Guests, Cultivate Relationships, and Create Unforgettable Experiences.",
  leftContent: {
    title: "Accelerate Your Hotel’s Growth with Social Media.",
  },
  rightContent: {
    title: "Reach a Wider Audience",
    icon: Keyword,
    subtitle:
      "Through Strategic Hotel Social Media Posts and Campaigns, Reach a Wide and Diverse Audience, Amplifying Brand Awareness, and Attracting New Guests.",
  },

  items: [
    {
      title: "Showcase Your Hotel",
      subtitle:
        "With Expert Guidance Create Social Media Posts for your hotels. Highlight the Unique Features, Exquisite Experiences, and Unmatched Hospitality of Your Property.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Drive Bookings",
      subtitle:
        "Utilize our Effective Social Media Management Team to Ignite Interest, Capture Attention, and Convert Potential Guests into Confirmed Bookings.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Reputation Management",
      subtitle: `Our Hotel Social Media Management Ensures Effective Brand Monitoring, Prompt Responses, and Positive Guest Experiences for Optimal Online Reputation.`,
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "Visual Appeal",
      subtitle:
        "Capture Attention with Visual Appeal through your Hotel’s Social Media Posts and Campaigns. Our Hotel Social Media Management Expertly Crafts Eye-Catching Visuals, Showcasing the Allure and Beauty of Your Property to Engage and Attract Potential Guests.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Reach a Wider Audience ",
      subtitle:
        "Through Strategic Hotel Social Media Posts and Campaigns, Reach a Wide and Diverse Audience, Amplifying Brand Awareness, and Attracting New Guests.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Calendar Ideation",
      subtitle:
        "At Fielmente, we combine the power of unrestrained voice and strategic social engineering to create compelling digital content (static, audio, dynamic, video) for brand awareness. Our meticulous approach includes monthly content calendars with precise schedules, ensuring impactful and timely engagement with your audience.",
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "Scheduling & publishing Content:",
      subtitle:
        "Streamline Social Media Content Delivery with Fielmente. Utilize Publishing and Scheduling Solutions for Hotel Social Media Posts, Empowering Your Team to Enhance Strategy and Build Stronger Connections with Consumers.",
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "Linktree Account Setup",
      subtitle:
        "Elevate Your Social Media Management with Linktree. Share Multiple Links in One Tap, Maximizing Engagement and Effortlessly Connecting Users with Relevant Content.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Social Media Audit",
      subtitle:
        "Conduct a Comprehensive Social Media Platform Audit & Take Remedial Action. Track Data in Google Analytics to Identify Social Traffic, Monitor Campaigns, Referral Traffic, and Conversions from Hotel Social Media Posts.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },
  ],
};

function page() {
  return (
    <div>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <OnlinePresence title={"HOTEL SOCIAL MEDIA MARKETING"} />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="w-full h-[0.1rem] bg-gray-300"></div>
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient-second">
        <div className="max-width">
          <UnloackBenifts />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <CaptivateAndConnect {...capitavteAndConnectData} />
        </div>
      </div>

      <div>
        <div className="max-width">
          <Mobiles />
        </div>
      </div>

      <div className="md:py-20 py-10 bg-black">
        <div className="max-width">
          <WantToJoin />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <section>
            <h2 className="text-5xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              <Accordin Data={faq} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
