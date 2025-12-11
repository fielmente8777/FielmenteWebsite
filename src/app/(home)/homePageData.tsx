import { ClientImages } from "@/utils/client";
import {
  BestServicesIcon,
  CompeteEffectivelyIcon,
  ConsultIcon,
  DriveDirectBookingIcon,
  ExecuteIcon,
  ProfessionalIcon,
  RealTimeOptimizationIcon,
  StrategiseIcon,
  SupportIcon,
} from "@/utils/newIcons";
import { data } from "@/utils/testimonialsData";

export const homePageData = {
  bannerData: {
    imgSrc: "/banner_11zon.jpg",
    title: "Fielmente - India’s Leading",
    subTitle: `<span>Hospitality Marketing </span><i>Agency</i>`,
    description:
      "Boost Your Online Presence, Drive More Bookings, and Grow Your Hospitality Business with AI-Driven Digital Strategies.",
  },
  marketingPartnersData: {
    cards: [
      {
        imgSrc: "/google-partner.png",
        title: "google-partner",
      },
      // {
      //   imgSrc: "/trello.png",
      //   title: "trello",
      // },
      {
        imgSrc: "/meta-business-partner.png",
        title: "meta-business-partner",
      },
      {
        imgSrc: "/zoho-corporation.png",
        title: "zoho-corporation",
      },
      {
        imgSrc: "/aws.png",
        title: "aws",
      },
      {
        imgSrc: "/Booking.Com.png",
        title: "Booking.Com",
      },
      {
        imgSrc: "/razorpay.png",
        title: "razorpay",
      },
      // {
      //   imgSrc: "/slack.webp",
      //   title: "slack",
      // },
      {
        imgSrc: "/images/agoda-logo.png",
        title: "agoda-logo",
      },
      {
        imgSrc: "/images/airbnb-logo.png",
        title: "airbnb-logo",
      },
      {
        imgSrc: "/images/goibibo-logo.png",
        title: "goibibo-logo",
      },
      {
        imgSrc: "/images/makemytrip-logo.png",
        title: "makemytrip-logo",
      },
      {
        imgSrc: "/images/cleartrip-logo.png",
        title: "cleartrip-logo",
      },
    ],
  },
  aboutCompanyData: {
    title: "About Company",
    subTitle: `Grow Your Hotel’s Direct and OTA Bookings by 30 - 50%`,
    description: [
      "We help hotels, resorts, and vacation rentals reduce OTA commissions and boost occupancy with AI-driven hospitality marketing strategies.",
      "Let’s Unlock Your Hotel’s Growth",
    ],
    listData: [
      // "Leading marketing agency for hotels and resorts",
      // "120+ hospitality projects delivered since 2020 with results",
      // "95% client satisfaction across all campaigns.",
      "120+ hotels & resorts served across India, UAE, UK & beyond",
      "Average 40% increase in direct bookings within 3 months",
      "95% client retention rate from satisfied partners",
    ],
    imgSrc: ["/im1.png", ""],
    linksData: [
      {
        label: "Book My Free Consultation Call",
        href: "",
      },
    ],
  },
  servingHospitalityData: {
    title: "Diverse Solutions for a Wide Range of <b>Hospitality Industry</b>",
    description: [
      "Choose Fielmente as your digital marketing partner to transform your hospitality business with assured success and innovation.",
    ],
    cards: [
      {
        imgSrc: "/home/im8.webp",
        title: "Hotel",
        desc: "Increase occupancy & maximize RevPAR",
      },
      {
        imgSrc: "/home/im7.webp",
        title: "Resort",
        desc: "Fill weekends & off-season with targeted campaigns",
      },
      {
        imgSrc: "/home/im6.webp",
        title: "Home Stay",
        desc: "Rank locally on Google & drive direct bookings",
      },
      {
        imgSrc: "/home/im5.webp",
        title: "Airbnb",
        desc: "Attract more guests & reduce commission costs",
      },
      {
        imgSrc: "/home/im4.webp",
        title: "Villas",
        desc: "Promote luxury stays & attract high-value travelers",
      },
      {
        imgSrc: "/home/im3.webp",
        title: "Glamping",
        desc: "Boost visibility & appeal to experience-seeking guests",
      },
      {
        imgSrc: "/home/im2.webp",
        title: "Cafe",
        desc: "Enhance presence & attract coffee lovers searching nearby",
      },
      {
        imgSrc: "/home/im1.webp",
        title: "Restaurant",
        desc: "Drive attention & reach foodies looking for dining spots",
      },
    ],
  },
  servicesData: {
    title: "AI-Powered Services for your <b>Modern Hospitality Brand</b>",
    links: [
      {
        label: "Explore all Services",
        href: "/hospitality-marketing-services/",
      },
    ],
    cards: [
      {
        imgClassName: "w-[20rem] aspect-square",
        imgWrapperClassName: "-top-[9rem] -right-10 z-20",
        imgSrc: "/home/sv1.webp",
        title: "Website Development",
        description:
          "We design fast, SEO-friendly websites tailed to your hospitality brand. We ensure a smooth and engaging experience from design to launch.",
      },
      {
        imgClassName: "w-[13.5rem] aspect-[4/3.5]",
        imgWrapperClassName: "-top-[4rem] right-0 z-20",
        imgSrc: "/home/sv2.webp",
        title: "Search Engine Optimization",
        description:
          "Boost online visibility and drive quality traffic with expert SEO using targeted keywords, and smart technical optimization for higher search rankings.",
      },
      {
        imgClassName: "w-[14rem] aspect-square",
        imgWrapperClassName: "-top-[5rem] right-1 z-20",
        imgSrc: "/home/sv3.webp",
        title: "Performance Marketing",
        description:
          "Maximize ROI with performance marketing that delivers results. From ads to conversion tracking, we optimize every campaign to drive growth.",
      },
    ],
  },
  howItWorksData: {
    title: "How It Works",
    subTitle: "Behind The Scene at Fielmente",
    description: [
      "These are the foundation of our hospitality marketing agency's approach, aimed of successfully growing your hospitality business, leading to success.",
    ],
    cards: [
      {
        icon: <ConsultIcon />,
        title: "Consult",
        description:
          "We guide you through every step of your hospitality marketing journey, offering expert advice to increase your hotel occupancy and revenue. Our experts are dedicated to enhance your hotel and restaurant digital presence.",
      },
      {
        icon: <StrategiseIcon />,
        title: "Strategise",
        description:
          "We design data-driven, personalised digital marketing strategies for your hospitality business. Leveraging hospitality industry insights, consumer trends, and innovative approaches to create a roadmap.",
      },
      {
        icon: <ExecuteIcon />,
        title: "Execute",
        description:
          "Most vital stage is putting plans into action. We execute the designed strategies, manage campaigns, and monitor performance to ensure your hotel and restaurant brand stands out.",
      },
    ],
  },
  milestone: [
    {
      number: "95%",
      title:"Client Retention",
      description: "Hotels & Resorts choose to stay with us",
    },
    {
      number: "500+",
      title:"Properties Served",
      description: "From boutique homestays to luxury resorts",
    },
    {
      number: "1,000+",
      title:"Campaigns Delivered",
      description: "Driving direct bookings & revenue growth",
    },
  ],
  chooseUsData: {
    title: "Why Choose Us",
    subTitle: `AI-Driven Innovations for the <b>Hotel, Resort and Restaurants</b>`,
    cards: [
      {
        icon: <BestServicesIcon />,
        title: "SAVE YOUR TIME",
        subTitle: "Best Services",
        color: "#F26633",
        description:
          "We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!",
      },
      {
        icon: <ProfessionalIcon />,
        title: "ALL YOU NEED",
        subTitle: "Professional",
        color: "#F2B203",
        description:
          "We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do. ",
      },
      {
        icon: <SupportIcon />,
        title: "DEDICATED SUPPORTS",
        subTitle: "Support",
        color: "#110D3C",
        description:
          "We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We value your business and are here to support you.",
      },
    ],
  },
  ourWork: {
    title: "Our Work",
    subTitle:
      "Glimpse into Our Client Works that <b>Made an</b> <i>Impact!</i>",
    description:
      "Highlighting exceptional client projects and celebrating collaborations that drive innovation and results.",
    imagesSrc: [
      "/ourWork/client1.webp",
      "/ourWork/client2.webp",
      "/ourWork/client3.webp",
    ],
    linksData: [
      {
        label: "Contact Us",
        href: "",
      },
    ],
  },
  servicesTitles: [
    "WEBSITE DESIGN & DEVELOPMENT",
    "SEARCH ENGINE OPTIMIZATION",
    "SOCIAL MEDIA MANAGEMENT",
    "PERFORMANCE MARKETING",
  ],
  countriesWeWorkedIn: {
    title: "COUNTRIES WE WORKED",
    subTitle:
      "Delivering AI-Driven Hotel Marketing <b>Solutions Globally Since 2020</b>",
    imagesSrc: ["/home/country.png"],
  },
  maximizeGrowthData: {
    // title: "MAXIMIZE YOUR HOTEL GROWTH",
    title: "Boost Occupancy & Reduce OTA Costs with Fielmente",
    subTitle:
      "Let us handle your Hotel Marketing Services &</br> <b>grow your occupancy rate by 5X</b>",
    cards: [
      {
        icon: <DriveDirectBookingIcon />,
        title: "Drive Direct Bookings",
        description:
          "Increase direct reservations by 40%+ through SEO, ads & optimized booking engines",
      },
      {
        icon: <CompeteEffectivelyIcon />,
        title: "Beat Competitors",
        description:
          "Rank above other hotels in your market and capture guests first.",
      },
      {
        icon: <RealTimeOptimizationIcon />,
        title: "Ongoing Optimization",
        description:
          "Daily performance tracking to maximize ROI and booking flow",
      },
    ],
    links: [
      {
        label: "Schedule a Call",
        href: "",
      },
    ],
  },
  ourValuedClientsData: {
    title: "Our Valued Hospitality Clients",
    cards: ClientImages,
  },
  testimonialsData: {
    title: "TESTIMONIALS",
    subTitle: "See What our <strong>Hospitality</strong> Clients have to Say!",
    cards: data,
    links: [
      {
        label: "Contact Us",
        href: "",
      },
    ],
  },
  addscardsData: {
    title: "Elevate your <b>Hospitality Brand Today!</b>",
    description:
      "Ready to transform your digital presence? Let's create magic together. Book our <b>Hospitality Marketing Services</b> now!",
    links: [
      {
        label: "Schedule Call",
        href: "",
      },
    ],
  },
  faqsData: {
    title: "Frequently Asked Questions!",
    cards: [
      {
        question:
          "What makes Fielmente the best hospitality marketing agency in India?",
        answer:
          "At Fielmente, we specialize in delivering tailored marketing solutions for hotels, resorts, and restaurants. Our expertise as a hospitality marketing agency in India comes from years of working with top properties and helping them grow through digital marketing, social media, SEO, and performance campaigns.",
      },
      {
        question:
          "Why should I hire a hospitality marketing firm instead of managing in-house?",
        answer:
          "A hospitality marketing firm like Fielmente brings in-depth industry experience, proven strategies, and cutting-edge tools. Unlike in-house teams, we focus exclusively on hospitality sales and marketing, ensuring your hotel or resort gets maximum bookings, brand visibility, and ROI.",
      },
      {
        question:
          "How does a hospitality digital marketing agency help hotels and resorts?",
        answer:
          "A hospitality digital marketing agency provides end-to-end online marketing services for hotels and resorts — including website optimization, hotel SEO services, paid advertising, and social media marketing for hotels. We ensure your brand stands out in search results and attracts the right audience.",
      },
      {
        question: "Do you offer hotel social media marketing services?",
        answer:
          "Yes! Fielmente is also a hotel social media agency helping brands build strong engagement across Instagram, Facebook, and LinkedIn. From creative content calendars to ad campaigns, our hotel social media marketing strategies are designed to boost visibility and increase direct bookings.",
      },
      {
        question:
          "What kind of hotel digital marketing services do you provide?",
        answer:
          "We provide a wide range of hotel digital marketing services, including: SEO services for hotels, paid advertising campaigns, content marketing, email automation, hotel digital marketing agency support for Google Ads & Meta Ads, and reputation management for hotels & resorts. Our goal as the best hotel marketing company in India is to increase direct bookings and reduce dependency on OTAs.",
      },
      {
        question: "Do you also work with resorts?",
        answer:
          "Absolutely! Fielmente is a resort marketing company with proven expertise in luxury and boutique resorts. Our team designs custom strategies as a resort digital marketing agency, ensuring you attract the right travelers through SEO, social media, and targeted ad campaigns.",
      },
      {
        question: "How do your hotel SEO services work?",
        answer:
          "Our SEO services for hotels include keyword optimization, local SEO (Google Maps, GMB), content creation, and link building. By working with a hotel digital marketing company in India like Fielmente, you ensure higher visibility on Google, more direct bookings, and reduced OTA costs.",
      },
      {
        question: "Do you provide customized hotel marketing consultancy?",
        answer:
          "Yes, apart from being a hospitality marketing company, we also act as a hospitality marketing consultant. We audit your current marketing strategy and design customized solutions to improve your hotel’s online presence, sales funnel, and guest acquisition.",
      },
      {
        question:
          "What makes Fielmente different from other hotel marketing agencies?",
        answer:
          "Unlike generic marketing agencies for hotels, Fielmente works only in the hospitality sector. This niche focus makes us one of the top hotel marketing agencies in India, offering tailored strategies for hotels, resorts, and hospitality brands to maximize revenue.",
      },
      {
        question: "How can I get started with Fielmente?",
        answer:
          "Getting started is simple! Reach out to us for a free consultation. Whether you need a hotel digital marketing service, resort marketing agency support, or a long-term partnership with a hospitality marketing agency in India, our team is here to help.",
      },
    ],
  },
};
