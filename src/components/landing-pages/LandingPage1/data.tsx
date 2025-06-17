import {
  AI,
  BE,
  Chatbot,
  EWM,
  GMB,
  HMA,
  IM,
  MA,
  OLM,
  PM,
  SEO,
  SSM,
} from "@/utils/HospitalityLandingPageIcons/Icons";
import {
  BestServ,
  PerformanceMarketing,
  Professional,
  SearchEngineOptimization,
  SocialMediaManagement,
  Support,
  WebsiteDevelopment,
} from "@/utils/icons";

export const pageData = {
  heroBanner: {
    title: `Elevate Your Hospitality Business!`,
    subTitle: `Drive more bookings and increase revenue with our specialized marketing strategies for Hotels, Resorts, Airbnb’s and more.`,
    items: [
      {
        title: `500+`,
        subTitle: `Properties Served`,
      },
      {
        title: `500K+`,
        subTitle: `Leads Generated`,
      },
      {
        title: `10%`,
        subTitle: `Average Conversion`,
      },
    ],
  },

  ourPartners: {
    images: [
      {
        src: "/partnersimages/goibibo.png",
        alt: "goibibo-logo",
      },
      {
        src: "/partnersimages/inc.png",
        alt: "google-partner-logo",
      },
      {
        src: "/partnersimages/makemytrip.png",
        alt: "makemytrip-logo",
      },
      {
        src: "/partnersimages/razorpay.png",
        alt: "razorpay-logo",
      },
      {
        src: "/partnersimages/airbnb.png",
        alt: "airbnb-logo",
      },
      {
        src: "/partnersimages/meta.png",
        alt: "meta-logo",
      },
    ],
  },

  industryWeServe: {
    title: `INDUSTRIES WE SERVE`,
    subTitle: `We Serve Every Corner of Hospitality`,
    description: `Our expertise spans every corner of the hospitality industry, delivering tailored strategies that drive measurable results for your specific business type.`,
    button: {
      label: "Schedule a Call",
      href: "/contact-us",
    },
    items: [
      {
        title: `HOTELS`,
        image: {
          src: `/weserve/hotel.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `RESORTS`,
        image: {
          src: `/weserve/Resort.png`,
          alt: `resort-image`,
        },
      },
      {
        title: `HOME STAYS`,
        image: {
          src: `/weserve/homestay.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `AIRBNB`,
        image: {
          src: `/weserve/airbnb.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `VILLAS`,
        image: {
          src: `/weserve/villas.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `GLAMPING`,
        image: {
          src: `/weserve/glamping.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `CAFE`,
        image: {
          src: `/weserve/cafe.png`,
          alt: `hotel-image`,
        },
      },
      {
        title: `RESTAURANT`,
        image: {
          src: `/weserve/resturant.png`,
          alt: `hotel-image`,
        },
      },
    ],
  },

  ourService: {
    title: `OUR SERVICES`,
    subTitle: `Transforming Hospitality Brands with Expert Marketing Services`,
    description: `Our expertise spans every corner of the hospitality industry, delivering tailored strategies that drive measurable results for your specific business type.`,
    button: {
      label: "Schedule a Call",
      href: "/contact-us",
    },
    items: [
      {
        title: `Website Development`,
        subTitle: `Custom built websites to elevate your brand’s online presence.`,
        icon: <WebsiteDevelopment />,
      },
      {
        title: `Search Engine Optimization`,
        subTitle: `Boost your website's visibility and drive traffic with expert SEO services.`,
        icon: <SEO />,
      },
      {
        title: `Performance Marketing`,
        subTitle: `Maximize ROI with Performance Marketing with measurable results.`,
        icon: <PM />,
      },
      {
        title: `Social Media Management`,
        subTitle: `Enhance your social media presence with expert social media management.`,
        icon: <SSM />,
      },
      {
        title: `Email & Whatsapp Marketing`,
        subTitle: `Reach your audience instantly and personally, with impact.`,
        icon: <EWM />,
      },

      {
        title: `Booking Engine`,
        subTitle: `Simplify reservations and maximize conversions effortlessly and securely.`,
        icon: <BE />,
      },
      {
        title: `Ai Driven Hotel Marketing`,
        subTitle: `Next-gen marketing solutions for modern hoteliers worldwide..`,
        icon: <AI />,
      },

      {
        title: `Influencer marketing`,
        subTitle: `Boost Brand Awareness with Powerful Influencer Campaigns.`,
        icon: <IM />,
      },

      {
        title: `Marketing Automation`,
        subTitle: `Powerful automation for smarter marketing results and growth.`,
        icon: <MA />,
      },

      {
        title: `Hotel Google & Meta ads`,
        subTitle: `Drive direct bookings with high-impact ad campaigns effortlessly and efficiently.`,
        icon: <HMA />,
      },
      {
        title: `Google My Business`,
        subTitle: `Enhance your online presence and get discovered fast by customers.`,
        icon: <GMB />,
      },
      {
        title: `OTA Lisiting & Management`,
        subTitle: `Boost visibility & revenue through smarter OTA management.`,
        icon: <OLM />,
      },
      {
        title: `Chatbot`,
        subTitle: `Streamline campaigns, nurture leads, and boost conversions.`,
        icon: <Chatbot />,
      },
    ],
  },

  ChooseUs: {
    title: `Why Choose us`,
    subTitle: `AI-Driven Innovations for the Hospitality Industry`,
    description: `Our expertise spans every corner of the hospitality industry, delivering tailored strategies that drive measurable results for your specific business type.`,
    items: [
      {
        title: `Best Services`,
        subTitle: `We are committed to provide quality services. We make sure that each and every detail is paid attention to and only the best is presented to you. We plan and work as a team so that no area is left untouched. We bring ideas to life and serve you the incomparable!`,
        icon: <BestServ />,
        subIconTitle: "Save your time",
      },
      {
        title: `Professional`,
        subTitle: `We're a team of qualified & experienced individuals who work together through thick & thin. We have worked with various clients and our greatest ethical responsibility has always been to constantly strive for excellence in everything we do. `,
        icon: <Professional />,
        subIconTitle: "All you need",
      },
      {
        title: `Support`,
        subTitle: `We are here to help you get through all your concerns. We are always available in sorting out your issues throughout your journey. We would love to hear from you no matter what, in order to deliver the best. We value your business and are here to support you.`,
        icon: <Support />,
        subIconTitle: "Dedicated Supports",
      },
    ],
  },

  countiesWeWorked: {
    title: `COUNTRIES WE WORKED`,
    subTitle: `Delivering AI-Driven Hotel Marketing Solutions Since 2020`,
    items: [
      {
        title: `DUBAI`,
        image: {
          src: `/flags/dubai.png`,
          alt: `dubai-flag`,
        },
      },
      {
        title: `UK`,
        image: {
          src: `/flags/uk.png`,
          alt: `uk-flag`,
        },
      },
      {
        title: `USA`,
        image: {
          src: `/flags/usa.png`,
          alt: `usa-flag`,
        },
      },
      {
        title: `CANADA`,
        image: {
          src: `/flags/canada.png`,
          alt: `canada-flag`,
        },
      },
      {
        title: `AUSTRALIA`,
        image: {
          src: `/flags/australia.png`,
          alt: `australia-flag`,
        },
      },
      {
        title: `OMAN`,
        image: {
          src: `/flags/oman.png`,
          alt: `oman-flag`,
        },
      },
      {
        title: `SRI LANKA`,
        image: {
          src: `/flags/srilanka.png`,
          alt: `srilanka-flag`,
        },
      },
      {
        title: `HOTELS`,
        image: {
          src: `/flags/nepal.png`,
          alt: `nepal-flag`,
        },
      },
    ],
  },

  OurClient: {
    title: "OUR CLIENTS",
    subTitle: "Brands That Trust Us",
    items: [
      {
        src: "/ourclient/3.png",
        alt: "image",
      },
      {
        src: "/ourclient/4.png",
        alt: "image",
      },
      {
        src: "/ourclient/5.png",
        alt: "image",
      },
      {
        src: "/ourclient/1.png",
        alt: "image",
      },
      {
        src: "/ourclient/6.png",
        alt: "image",
      },
      {
        src: "/ourclient/7.png",
        alt: "image",
      },
    ],
  },

  // brand: {
  //   title: `OUR CLIENTS`,
  //   subTitle: `Brands That Trust Us`,
  //   description: ``,

  //   images: [
  //     {
  //       src: "/partnersimages/goibibo.png",
  //       alt: "goibibo-logo",
  //     },
  //     {
  //       src: "/partnersimages/inc.png",
  //       alt: "google-partner-logo",
  //     },
  //     {
  //       src: "/partnersimages/makemytrip.png",
  //       alt: "makemytrip-logo",
  //     },
  //     {
  //       src: "/partnersimages/razorpay.png",
  //       alt: "razorpay-logo",
  //     },
  //     {
  //       src: "/partnersimages/airbnb.png",
  //       alt: "airbnb-logo",
  //     },
  //   ],
  // },
};
