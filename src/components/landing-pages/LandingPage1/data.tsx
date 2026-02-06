import { ClientImages } from "@/utils/client";
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
  AiChatbotIcon,
  AIConciergeDeskIcon,
  AiFrontDeskIcon,
  AiReservationDeskIcon,
  AiVoiceAgent,
  BestServ,
  BookingEngine,
  CMS,
  CRM,
  EmailMarketingIcon,
  LocalSeoIcon,
  PaymentGatewayIcon,
  PerformanceMarketing,
  Professional,
  SearchEngineOptimization,
  SocialMediaManagement,
  Support,
  WebsiteBuilderIcon,
  WebsiteDevelopment,
  WhatsAppMarketingIcon,
} from "@/utils/icons";
import { contacts } from "../../../../contact";

export const pageData = {
  heroBanner: {
    title: `India's Leading Hotel Marketing Agency`,
    // title: `Elevate Your Hospitality Business!`,
    subTitle: `We help hotels, resorts and homestays to increase occupancy and maximise their revenue by implementing our Digital Marketing & OTA smart strategies.`,
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
    title: `Tailored Marketing for Every Hospitality Business`,
    subTitle: `Whether you run a boutique homestay, a luxury resort, or an urban hotel, we’ve delivered proven results across every corner of hospitality.`,
    description: `Let’s Create a Strategy for Your Property `,
    button: {
      label: "Book Free Consultation",
      href: "/contact-us",
    },
    items: [
      {
        title: `HOTEL`,
        image: {
          src: `/weserve/hotel.png`,
          alt: `hotel-image`,
          desc: "Increase occupancy & maximize RevPAR",
        },
      },
      {
        title: `RESORT`,
        image: {
          src: `/weserve/Resort.png`,
          alt: `resort-image`,
          desc: "Fill weekends & off-season with targeted campaigns",
        },
      },
      {
        title: `HOME STAY`,
        image: {
          src: `/weserve/homestay.png`,
          alt: `hotel-image`,
          desc: "Rank locally on Google & drive direct bookings",
        },
      },
      {
        title: `AIRBNB`,
        image: {
          src: `/weserve/airbnb.png`,
          alt: `hotel-image`,
          desc: "Attract more guests & reduce commission costs",
        },
      },
      {
        title: `VILLA`,
        image: {
          src: `/weserve/villas.png`,
          alt: `hotel-image`,
          desc: "Promote luxury stays & attract high-value travelers",
        },
      },
      {
        title: `GLAMPING`,
        image: {
          src: `/weserve/glamping.png`,
          alt: `hotel-image`,
          desc: "Boost visibility & appeal to experience-seeking guests",
        },
      },
      // {
      //   title: `CAFE`,
      //   image: {
      //     src: `/weserve/cafe.png`,
      //     alt: `hotel-image`,
      //   },
      // },
      // {
      //   title: `RESTAURANT`,
      //   image: {
      //     src: `/weserve/resturant.png`,
      //     alt: `hotel-image`,
      //   },
      // },
    ],
  },

  ourService: {
    title: `OUR SERVICES`,
    subTitle: `Transforming Hospitality Brands with Expert <a href="/" className="inter-link" >Hospitality Marketing Services</a>`,
    description: `Our expertise spans every corner of the hospitality industry, delivering tailored strategies that drive measurable results for your specific business type.`,
    button: {
      label: "Schedule a Call",
      href: "/contact-us",
    },
    items: [
      {
        title: `Hotel Website That Convert Guests`,
        subTitle: `Custom-built hotel websites with integrated booking engines — proven to boost direct reservations by 30%+ and reduce OTA dependency`,
        icon: <WebsiteDevelopment />,
         link:{
          label: "See Case Study",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Search Engine Optimization`,
        subTitle: `Rank #1 on Google for local searches. Our SEO drives real guests, walk-ins, and bookings, not just traffic`,
        icon: <SEO />,
         link:{
          label: "Book Free Audit",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Double Your ROI with Targeted Ads`,
        subTitle: `Maximize ROI with data-driven Google & Meta ads. Our hotel clients see an average 4× return within the first 90 days.`,
        icon: <PM />,
         link:{
          label: "See How",
          href: contacts.WhatsAppCta,
         }
      },
      {
        title: `Social Media Management`,
        subTitle: `Turn Instagram & Facebook into booking engines. From reels to retargeting, we create campaigns that convert followers into guests`,
        icon: <SSM />,
         link:{
          label: "Grow My Socials",
          href: contacts.WhatsAppCta,
         }
      },

      // {
      //   title: `Booking Engine`,
      //   subTitle: `Simplify reservations and maximize conversions effortlessly and securely.`,
      //   icon: <BE />,
      // },
      {
        title: `AI Driven Hotel Marketing`,
        subTitle: `Leverage AI tools to predict guest behavior, optimize campaigns, and increase direct bookings by 40%+ — without extra ad spend`,
        icon: <AI />,
         link:{
          label: "Get AI Strategy",
          href: contacts.WhatsAppCta,
         }
      },

      {
        title: `Influencer marketing`,
        subTitle: `Collaborate with trusted travel influencers. Our campaigns deliver up to 3× ROI, turning social followers into paying guests`,
        icon: <IM />,
         link:{
          label: "Explore Campaigns",
          href: contacts.WhatsAppCta,
         }
      },

      {
        title: `Marketing Automation`,
        subTitle: `Automate guest emails, WhatsApp reminders, and post-stay follow-ups — reduce cancellations, boost repeat stays, and save time`,
        icon: <MA />,
         link:{
          label: "Automate My Hotel",
          href: contacts.WhatsAppCta,
         }
      },

      {
        title: `Hotel Google & Meta ads`,
        subTitle: `Run hyper-targeted campaigns that put your hotel in front of high-intent travelers — generating direct bookings at 4× ROI`,
        icon: <HMA />,
         link:{
          label: "Get My Ad Plan",
          href: contacts.WhatsAppCta,
         }
      },
      {
        title: `Local SEO & GMB Optimization`,
        subTitle: `Dominate Google Maps & local searches. Hotels we optimize see 2× more calls & direct inquiries within weeks`,
        icon: <GMB />,
         link:{
          label: "Optimize My Hotel",
          href: contacts.WhatsAppCta,
         }
      },
      {
        title: `OTA Listing & Management`,
        subTitle: `Boost visibility & revenue through smarter OTA management.`,
        icon: <OLM />,
         link:{
          label: "List my hotel",
          href: contacts.WhatsAppCta,
         }
      },
      // {
      //   title: `Chatbot`,
      //   subTitle: `Streamline campaigns, nurture leads, and boost conversions.`,
      //   icon: <Chatbot />,
      // },
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
  nextGenProducts: {
    title: `OUR PRODUCTS`,
    // subTitle: `Next-Gen AI Products Tailored for Hospitality`,
    subTitle: `AI Tools That Grow Bookings & Enhance Guest Experience`,
    description: `Our AI-powered hotel tools are built to increase direct bookings, cut OTA costs, and enhance guest experiences — helping you grow revenue while streamlining operations.`,
    items: [
      {
        title: `CMS`,
        subTitle: `Easily manage hotel content, offers, and promotions. Update menus, rooms, and packages in seconds — no IT team needed.`,
        icon: <CMS />,
        link:{
          label: "See Demo",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Booking Engine`,
        subTitle: `Seamless booking engine designed for hotels. Boost direct reservations by 30%+ and reduce OTA commissions instantly`,
        icon: <BookingEngine />,
         link:{
          label: "Get My Booking Engine",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `AI Reservation Desk`,
        subTitle: `AI-powered assistant that answers guest queries 24/7, reduces missed inquiries, and converts chats into confirmed bookings`,
        icon: <AiReservationDeskIcon />,
        link:{
          label: "Try It Free",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Payment Gateway`,
        subTitle: `Secure, integrated payments for smooth guest checkout — supporting multi-currency & one-click payments`,
        icon: <PaymentGatewayIcon />,
        link:{
          label: "Integrate Now",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Email Marketing`,
        subTitle: `Automated and personalized campaigns that deliver 4× higher open rates than traditional hotel emails`,
        icon: <EmailMarketingIcon />,
        link:{
          label: "Launch My Campaign ",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `AI Front Desk`,
        subTitle: `Your virtual receptionist available 24/7 — answering queries, upselling rooms, and handling guest requests instantly`,
        icon: <AiFrontDeskIcon />,
        link:{
          label: "See How It Works",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `WhatsApp Marketing`,
        subTitle: `Engage guests directly where they spend most time. From booking confirmations to offers — drive faster responses & repeat stays`,
        icon: <WhatsAppMarketingIcon />,
        link:{
          label: "Start Messaging Guests",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Website Builder`,
        subTitle: `All-in-one hotel website builder with integrated booking and SEO optimization — live in just 7 days`,
        icon: <WebsiteBuilderIcon />,
        link:{
          label: "Build My Hotel Site",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `AI Concierge Desk`,
        subTitle: `Smart concierge that recommends dining, spa, and activities — increasing ancillary revenue per guest by up to 25%.`,
        icon: <AIConciergeDeskIcon />,
        link:{
          label: "Boost Guest Experience",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `AI Chatbot`,
        subTitle: `Automate inquiries, FAQs, and booking queries — saving staff time and increasing conversions by 35%+`,
        icon: <AiChatbotIcon />,
        link:{
          label: "Activate Chatbot",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `AI Voice Agent`,
        subTitle: `Answer guest calls automatically with a friendly AI agent trained for hospitality. Reduce call handling time by 50%.`,
        icon: <AiVoiceAgent />,
        link:{
          label: "Try Voice AI",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `Local SEO`,
        subTitle: `Rank higher on Google Maps & ‘near me’ searches. Hotels we optimize see 2× more calls & direct inquiries within weeks`,
        icon: <LocalSeoIcon />,
        link:{
          label: "Optimize My Hotel",
          href: contacts.WhatsAppCta,
        }
      },
      {
        title: `CRM`,
        subTitle: `Centralize guest data, manage loyalty, and run targeted campaigns that increase repeat stays by 40%`,
        icon: <CRM />,
        link:{
          label: "Get My Hotel CRM",
          href: contacts.WhatsAppCta,
        }
      },
    ],
  },
  countiesWeWorked: {
    title: `COUNTRIES WE WORKED`,
    subTitle: `Trusted by 500+ Hotels & Resorts Across 7 Countries`,
    items: [
      {
        title: `DUBAI`,
        desc:"Luxury Hotels & Skyline Views",
        image: {
          src: `/flags/dubai.png`,
          alt: `dubai-flag`,
        },
      },
      {
        title: `UK`,
        desc:"Historic Castles & Boutique Stays",
        image: {
          src: `/flags/uk.png`,
          alt: `uk-flag`,
        },
      },
      {
        title: `USA`,
        desc:"City Hotels & Coastal Resorts",
        image: {
          src: `/flags/usa.png`,
          alt: `usa-flag`,
        },
      },
      {
        title: `CANADA`,
        desc:"Luxury Resorts & City Hotels",
        image: {
          src: `/flags/canada.png`,
          alt: `canada-flag`,
        },
      },
      {
        title: `AUSTRALIA`,
        desc:"Boutique Retreats",
        image: {
          src: `/flags/australia.png`,
          alt: `australia-flag`,
        },
      },
      {
        title: `OMAN`,
        desc:"5-Star Desert Hotels",
        image: {
          src: `/flags/oman.png`,
          alt: `oman-flag`,
        },
      },
      {
        title: `SRI LANKA`,
        desc:"Beach Resorts & Villas",
        image: {
          src: `/flags/srilanka.png`,
          alt: `srilanka-flag`,
        },
      },
      {
        title: `NEPAL`,
        desc:"Mountain Lodges & Scenic Retreats",
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
    items: ClientImages,
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
