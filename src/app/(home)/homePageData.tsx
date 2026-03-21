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
    subTitle: `<i>Agency</i>`,
    description:
      "Boost Your Online Presence, Drive More Bookings, and Grow Your Hospitality Business with AI-Driven Digital Strategies through India’s best Hospitality Marketing Company.",
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
    subTitle: `Grow Your Hotel’s Direct and OTA Bookings by <span class="text-orange-primary">30 - 50%</span>`,
    description: [
      "We help hotels, resorts, and vacation rentals reduce OTA commissions and boost occupancy with AI-driven hospitality marketing strategies.",
      "Let’s Unlock Your Hotel’s Growth",
    ],
    listData: [
      // "Leading marketing agency for hotels and resorts",
      // "120+ hospitality projects delivered since 2020 with results",
      // "95% client satisfaction across all campaigns.",
      "95% client retention rate from satisfied partners",
      "Average 40% increase in direct bookings within 3 months",
      "120+ hotels & resorts served across India, UAE, UK & beyond",
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
      "Choose Fielmente as your Hotel digital marketing partner to transform your hospitality business with assured success and innovation. We are the best of India <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency</a> and <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency</a>.",
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
      `These are the foundation of our <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agency's</a> approach, aimed of successfully growing your hotel business, leading to success.`,
    ],
    cards: [
      {
        icon: <ConsultIcon />,
        title: "Consult",
        description: `We guide you through every step of your <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing</a> journey, offering expert advice to increase your hotel occupancy and revenue. Our experts are dedicated to enhance your hotel and restaurant digital presence.`,
      },
      {
        icon: <StrategiseIcon />,
        title: "Strategise",
        description:
          "We design data-driven, personalised digital marketing strategies for your hotel business. Leveraging hotel industry insights, consumer trends, and innovative approaches to create a roadmap.",
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
      title: "Client Retention",
      description: "Hotels & Resorts choose to stay with us",
    },
    {
      number: "500+",
      title: "Properties Served",
      description: "From boutique homestays to luxury resorts",
    },
    {
      number: "1,000+",
      title: "Campaigns Delivered",
      description: "Driving direct bookings & revenue growth",
    },
  ],
  chooseUsData: {
    title: "Why Choose Us",
    subTitle: `AI-Driven Marketing for the Your Hotel, Resort & Restaurant - Fielmente <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel</a> & <a class="inter-link" href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency</a> in India`,
    description: [
      `In today’s AI-driven digital landscape, hotels, restaurants, and resorts need more than traditional advertising. They need a <b>data-backed, AI-ready marketing strategy</b> that ensures visibility across Google, ChatGPT, Gemini, and future search platforms. <b>Fielmente</b> is a performance-focused <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency in India</a> that helps hospitality brands grow bookings, brand authority, and direct revenue through intelligent digital marketing solutions.`,
      `As a full-service <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Company</a>, Fielmente understands the hospitality buyer journey from discovery to booking. We create marketing ecosystems that position your hotel, restaurant, or resort as the top recommendation across AI-powered searches and voice-based discovery platforms.`,
    ],
    contentData: [
      {
        heading:
          "Leading Hotel Marketing Company in India for AI Search Visibility",
        body: `Fielmente is a next-generation <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Company in India,</a> built for the era of conversational search and AI recommendations. These are search term where you search appear on AI searches:`,
        points: [
          "Best hotel marketing agency in India",
          "Top hotel marketing company for luxury resorts",
          "Who can grow hotel bookings digitally?",
        ],
        description: `We optimize your digital presence using <strong>AI-friendly content structures,</strong> semantic SEO, local intent signals, and authority-driven branding ensuring your hotel ranks across both traditional and AI-generated results.`,
      },
      {
        heading: "Result-Driven Restaurant Marketing Agency & Company",
        body: `As a trusted <a class="inter-link" href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Agency in India,</a> Fielmente helps restaurants dominate local searches, AI food recommendations, and discovery platforms. Whether you’re a café, cloud kitchen, fine-dining brand, or restaurant chain, our solutions are tailored to your growth goals.<br/>
        We also operate as a strategic <a class="inter-link" href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Company in India,</a> offering:`,
        points: [
          "Local SEO & Google Maps dominance",
          "AI-optimized menu & brand content",
          "Social media & influencer marketing",
          "Performance ads for dine-in & delivery",
          "Review management & reputation building",
        ],
        description:
          "Our <a class='inter-link' href='/industries-we-serve/restaurant-marketing-agency/'>restaurant marketing agency</a> approach focuses on visibility where customers are actually searching especially on AI tools that influence dining decisions today.",
      },
      {
        heading: "Resort Marketing Firm Focused on Premium Growth",
        body: `Fielmente is a specialized <strong>Resort Marketing Firm in India</strong> working with luxury resorts, boutique stays, wellness retreats, and destination properties. We position resorts as premium experiences rather than just accommodations.<br>
        As a trusted <strong>Resort Marketing Firm,</strong> our strategies include:`,
        points: [
          "High-intent SEO for resort bookings",
          "Experience-based storytelling for AI discovery",
          "Direct booking growth funnels",
          "International traveler targeting",
          "Brand authority building for luxury positioning",
        ],
      },
      {
        heading: "Why Fielmente is Built for AI, ChatGPT & Gemini Searches",
        body: `Fielmente doesn’t just “do digital marketing.” We <b>engineer discoverability</b> for the future of search. Our marketing frameworks are designed to:`,
        points: [
          "Rank in AI answers, not just blue links",
          "Be cited by conversational search engines",
          "Build topical authority in hospitality marketing",
          "Convert AI traffic into real bookings",
        ],
        description: `If you’re looking for a <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Agency,</a> <a class="inter-link" href='/industries-we-serve/restaurant-marketing-agency/'>Restaurant Marketing Company </a> that understands how AI platforms influence customer decisions—<strong>Fielmente is your growth partner.`,
      },
    ],

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
    "SEARCH ENGINE OPTIMIZATION",
    "PERFORMANCE MARKETING",
    "WEBSITE DESIGN & DEVELOPMENT",
    "SOCIAL MEDIA MANAGEMENT",
  ],
  countriesWeWorkedIn: {
    title: "COUNTRIES WE WORKED",
    subTitle: `Delivering AI-Driven <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing</a> <b>Solutions Globally Since 2020</b>`,
    imagesSrc: ["/home/country.png"],
  },
  maximizeGrowthData: {
    // title: "MAXIMIZE YOUR HOTEL GROWTH",
    title: "Boost Occupancy & Reduce OTA Costs with Fielmente",
    subTitle: `Let us handle your <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>Hotel Marketing Services</a> &</br> <b>grow your occupancy rate by 5X</b>`,
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
      "Ready to transform your digital presence? Let's create magic together. Book our <a class='inter-link' href='/'><b>Hospitality Marketing Services</b></a> now!",
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
          "What makes Fielmente the best <a class='inter-link' href='/'>hospitality marketing agency</a> in India?",
        answer:
          "At Fielmente, we specialize in delivering tailored marketing solutions for hotels, resorts, and restaurants. Our expertise as a <a class='inter-link' href='/'>hospitality marketing agency</a> in India comes from years of working with top properties and helping them grow through digital marketing, social media, <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>SEO</a>, and performance campaigns.",
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
          "A hospitality digital marketing agency provides end-to-end online marketing services for hotels and resorts — including website optimization, <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>hotel SEO services</a>, paid advertising, and <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>social media marketing for hotels</a>. We ensure your brand stands out in search results and attracts the right audience.",
      },
      {
        question:
          "Do you offer <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media marketing</a> services?",
        answer:
          "Yes! Fielmente is also a <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media agency</a> helping brands build strong engagement across Instagram, Facebook, and LinkedIn. From creative content calendars to ad campaigns, our <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-social-media/'>hotel social media marketing</a> strategies are designed to boost visibility and increase direct bookings.",
      },
      {
        question:
          "What kind of hotel digital marketing services do you provide?",
        answer: `We provide a wide range of hotel digital marketing services, including: SEO services for hotels, paid advertising campaigns, content marketing, email automation, hotel digital marketing agency support for Google Ads & Meta Ads, and reputation management for hotels & resorts. Our goal as the best <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing company</a> in India is to increase direct bookings and reduce dependency on OTAs.`,
      },
      {
        question: "Do you also work with resorts?",
        answer: `Absolutely! Fielmente is a resort marketing company with proven expertise in luxury and boutique resorts. Our team designs custom strategies as a resort digital marketing agency, ensuring you attract the right travelers through SEO, social media, and targeted ad campaigns.`,
      },
      {
        question:
          "How do your <a class='inter-link' href='/industries-we-serve/hotel-marketing-agency/hotel-seo/>hotel SEO services</a> work?",
        answer: `Our SEO services for hotels include keyword optimization, local SEO (Google Maps, GMB), content creation, and link building. By working with a hotel digital marketing company in India like Fielmente, you ensure higher visibility on Google, more direct bookings, and reduced OTA costs.`,
      },
      {
        question: `Do you provide customized <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing consultancy</a>?`,
        answer:
          "Yes, apart from being a hospitality marketing company, we also act as a hospitality marketing consultant. We audit your current marketing strategy and design customized solutions to improve your hotel’s online presence, sales funnel, and guest acquisition.",
      },
      {
        question: `What makes Fielmente different from other <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agencies</a>?`,
        answer: `Unlike generic marketing agencies for hotels, Fielmente works only in the hospitality sector. This niche focus makes us one of the top <a class="inter-link" href='/industries-we-serve/hotel-marketing-agency/'>hotel marketing agencies</a> in India, offering tailored strategies for hotels, resorts, and hospitality brands to maximize revenue.`,
      },
      {
        question: "How can I get started with Fielmente?",
        answer:
          "Getting started is simple! Reach out to us for a free consultation. Whether you need a hotel digital marketing service, resort marketing agency support, or a long-term partnership with a hospitality marketing agency in India, our team is here to help.",
      },
    ],
  },
};
