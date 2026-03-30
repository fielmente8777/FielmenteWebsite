interface SubLinks {
  linkName: string;
  src: string;
  subLinks?: SubLinks[];
}
export const Nav_Links: SubLinks[] = [
  {
    linkName: "About Us",
    src: "/about-fielmente-best-hospitality-marketing-agency",
  },
  {
    linkName: "Industry we serve",
    src: "/industries-we-serve",
    subLinks: [
      {
        linkName: "Hotel Marketing",
        src: "/industries-we-serve/hotel-marketing-agency",
        subLinks: [
          {
            linkName: "Hotel Social Media",
            src: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
          },
          {
            linkName: "Hotel Ads",
            src: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
          },
          {
            linkName: "Hotel SEO",
            src: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
          },
          {
            linkName: "hotel OTA",
            src: "/hotel-ota-management/",
          },
        ],
      },
      {
        linkName: "Restaurant Marketing",
        src: "/industries-we-serve/restaurant-marketing-agency/",
        subLinks: [
          {
            linkName: "Restaurant Social Media",
            src: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
          },
          {
            linkName: "Restaurant Ads",
            src: "/industries-we-serve/restaurant-marketing-agency/restaurant-google-ads/",
          },
        ],
      },
      {
        linkName: "Cloud Kitchen Marketing",
        src: "/industries-we-serve/cloud-kitchen-marketing-agency/",
        subLinks: [
          {
            linkName: "Cloud Kitchen Social Media",
            src: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media/",
          },
          {
            linkName: "Cloud Kitchen Ads",
            src: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-google-ads/",
          },
        ],
      },
    ],
  },
  // {
  //   linkName: "Hotel Marketing",
  //   src: "/industries-we-serve/hotel-marketing-agency",
  //   subLinks: [
  //     {
  //       linkName: "Hotel Social Media",
  //       src: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
  //     },
  //     {
  //       linkName: "Hotel Ads",
  //       src: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/",
  //     },
  //     {
  //       linkName: "Hotel SEO",
  //       src: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
  //     },
  //     // {
  //     //   linkName: "Hotel PR Services",
  //     //   src: "/hotelprservices",
  //     // },
  //   ],
  // },
  {
    linkName: "services",
    src: "/hospitality-marketing-services/",
    subLinks: [
      {
        linkName: " Social Media Management",
        src: "/hospitality-marketing-services/social-media-marketing-agency/",
      },
      {
        linkName: "Search Engine Optimization (SEO)",
        src: "/hospitality-marketing-services/seo-agency/",
      },
      {
        linkName: "Performance Marketing",
        src: "/hospitality-marketing-services/google-ads-agency/",
      },
    ],
  },
  {
    linkName: "Resources",
    src: "",
    subLinks: [
      {
        linkName: "Blog",
        src: "/blogs/",
      },
      {
        linkName: "Success Stories",
        src: "/case-study/",
      },
      {
        linkName: "Our Clients",
        src: "/our-clients/",
      },
      {
        linkName: "Our Work",
        src: "https://www.eazotel.com/our-work",
      },
    ],
  },
  {
    linkName: "contact us",
    src: "/contact-us",
  },
  // {
  //   linkName: "blogs",
  //   src: "/blogs",
  // },
];
