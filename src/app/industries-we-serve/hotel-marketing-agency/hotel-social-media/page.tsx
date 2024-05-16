import React from "react";
import OnlinePresence from "../../components/online-presence";
import UnloackBenifts from "../../components/unloack-benifts";
import CaptivateAndConnect from "../../components/captivate-and-connect";
import Mobiles from "../../components/mobiles";
import WantToJoin from "../../components/want-to-join";
import Frequently from "../../components/frequently";
import Keyword from "../../../../../public/images/keywords.webp";

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
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Drive Bookings",
      subtitle:
        "Utilize our Effective Social Media Management Team to Ignite Interest, Capture Attention, and Convert Potential Guests into Confirmed Bookings.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Reputation Management",
      subtitle: `Our Hotel Social Media Management Ensures Effective Brand Monitoring, Prompt Responses, and Positive Guest Experiences for Optimal Online Reputation.`,
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Visual Appeal",
      subtitle:
        "Capture Attention with Visual Appeal through your Hotel’s Social Media Posts and Campaigns. Our Hotel Social Media Management Expertly Crafts Eye-Catching Visuals, Showcasing the Allure and Beauty of Your Property to Engage and Attract Potential Guests.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Reach a Wider Audience ",
      subtitle:
        "Through Strategic Hotel Social Media Posts and Campaigns, Reach a Wide and Diverse Audience, Amplifying Brand Awareness, and Attracting New Guests.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Calendar Ideation",
      subtitle:
        "At Fielmente, we combine the power of unrestrained voice and strategic social engineering to create compelling digital content (static, audio, dynamic, video) for brand awareness. Our meticulous approach includes monthly content calendars with precise schedules, ensuring impactful and timely engagement with your audience.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Scheduling & publishing Content:",
      subtitle:
        "Streamline Social Media Content Delivery with Fielmente. Utilize Publishing and Scheduling Solutions for Hotel Social Media Posts, Empowering Your Team to Enhance Strategy and Build Stronger Connections with Consumers.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Linktree Account Setup",
      subtitle:
        "Elevate Your Social Media Management with Linktree. Share Multiple Links in One Tap, Maximizing Engagement and Effortlessly Connecting Users with Relevant Content.",
      image: {
        src: Keyword,
        alt: "Booking",
      },
    },

    {
      title: "Social Media Audit",
      subtitle:
        "Conduct a Comprehensive Social Media Platform Audit & Take Remedial Action. Track Data in Google Analytics to Identify Social Traffic, Monitor Campaigns, Referral Traffic, and Conversions from Hotel Social Media Posts.",
      image: {
        src: Keyword,
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
          <Frequently />
        </div>
      </div>
    </div>
  );
}

export default page;
