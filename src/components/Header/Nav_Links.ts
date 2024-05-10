export const Nav_Links = [
  {
    linkName: "About",
    src: "/about",
  },
  {
    linkName: "Industry we serve",
    src: "/industries-we-serve",
    subLinks: [
      {
        linkName: "Hotel Marketing",
        src: "/industries-we-serve/hotel-marketing-agency",
      },
      {
        linkName: "Restaurant Marketing",
        src: "/industries-we-serve/restaurant-marketing-agency/",
        subLinks: [
          {
            linkName: "Restaurant Social Media",
            src: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
          },
        ],
      },
      {
        linkName: "Cloud Kitchen Marketing",
        src: "/",
        subLinks: [
          {
            linkName: "Restaurant Social Media",
            src: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media/",
          },
        ],
      },
    ],
  },
  {
    linkName: "Hotel | Marketing",
    src: "/industries-we-serve/hotel-marketing-agency",
    subLinks: [
      {
        linkName: "Industry we serve",
        src: "/",
      },
      {
        linkName: "Resturant Marketing",
        src: "/",
        subLinks: [
          {
            linkName: "Restaurnat Social Media",
            src: "/",
          },
        ],
      },
      {
        linkName: "Cloud Kitchen Marketing",
        src: "/",
      },
    ],
  },
  {
    linkName: "services",
    src: "/",
  },
];
