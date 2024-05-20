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

const capitavteAndConnectData = {
  title: "Captivate and Connect",
  subtitle:
    "Harness the Power of Restaurant Social Media Management to Engage Guests, Cultivate Relationships, and Create Unforgettable Experiences.",
  leftContent: {
    title: "Accelerate Your Restaurant’s Growth with Social Media.",
  },
  rightContent: {
    title: "Reach a Wider Audience",
    icon: Keyword,
    subtitle:
      "Expand your reach with Fielmente’s social media management for restaurants. Engage a wider audience through captivating restaurant social media posts and effective social media marketing strategies.",
  },

  items: [
    {
      title: "Engage with Customers",
      subtitle:
        "Cultivate strong customer relationships with Fielmente’s social media management for restaurants. Engage directly with customers, promptly responding to comments, inquiries, and reviews, fostering a vibrant community that builds loyalty and strengthens your restaurant’s reputation.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Promote Special Offers",
      subtitle:
        "Drive customer engagement with Fielmente’s social media management for restaurants. Promote exclusive discounts, limited-time offers, and enticing promotions, creating a sense of urgency that attracts customers and fills your restaurant with eager diners.",
      image: {
        src: Promote,
        alt: "Booking",
      },
    },

    {
      title: "Build Brand Personality",
      subtitle: `Unleash your restaurant’s unique brand personality with Fielmente’s social media management. Develop a distinctive identity and voice that resonates with customers, creating a memorable and relatable image that sets your establishment apart.`,
      image: {
        src: Hoursglass,
        alt: "Booking",
      },
    },

    {
      title: "User-Generated Content",
      subtitle:
        "Harness the power of user-generated content with Fielmente’s social media management for restaurants. Encourage customers to share their experiences and food photos, amplifying your restaurant’s online presence and creating a vibrant community of loyal diners.",
      image: {
        src: Contentwriting,
        alt: "Booking",
      },
    },

    {
      title: "Stay Top of Mind",
      subtitle:
        "Keep your restaurant in the mind of customers with Fielmente’s social media management for restaurants. Engage customers with captivating content, ensuring your restaurant remains unforgettable and encouraging repeat visits.",
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
        "Fielmente. Utilize Publishing and Scheduling Solutions for Restaurant Social Media Posts, Empowering Your Team to Enhance Strategy and Build Stronger Connections with Consumers.",
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
      title: "Social Media Platform Audit & Remedial Action:",
      subtitle:
        "Optimize Social Media Performance: Conduct a Comprehensive Social Media Platform Audit & Take Remedial Action. Track Data in Google Analytics to Identify Social Traffic, Monitor Campaigns, Referral Traffic, and Conversions from restaurant Social Media Posts.",
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
      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <OnlinePresence title={"RESTAURANT SOCIAL MEDIA MARKETING"} />
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
          <Frequently />
        </div>
      </div>
    </div>
  );
}

export default page;
