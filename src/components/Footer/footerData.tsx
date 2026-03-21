import {
  FillFaceBookIcon,
  FillLinkedinIcon,
  FillLocationIcon,
  FillMailIcon,
  FillPhoneIcon,
  OutLineInstagramIcon,
  OutLineXIcon,
} from "@/utils/newIcons";
import { contacts } from "../../../contact";

interface Link {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterLinksPropstype {
  logo: string;
  description: string;
  linksData: {
    title: string;
    listOfLinks: Link[];
  }[];
}

export const SocialLinks: Link[] = [
  {
    label: Object.keys(contacts.socialContacts)[0],
    href: contacts.socialContacts.facebook,
    icon: <FillFaceBookIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[1],
    href: contacts.socialContacts.instagram,
    icon: <OutLineInstagramIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[2],
    href: contacts.socialContacts.linkedin,
    icon: <FillLinkedinIcon />,
  },
  {
    label: Object.keys(contacts.socialContacts)[3],
    href: contacts.socialContacts.twitter,
    icon: <OutLineXIcon />,
  },
];

export const footerData: FooterLinksPropstype = {
  logo: "/logo2.png",
  description:
    "Fielmente is an advisory, consultation and marketing firm dedicated to F&B and the hospitality industry.",
  linksData: [
    {
      title: "Follow Us",
      listOfLinks: SocialLinks,
    },
    {
      title: "Company",
      listOfLinks: [
        {
          label: "About",
          href: "/about-fielmente-best-hospitality-marketing-agency/",
        },
        {
          label: "Industries We Serve",
          href: "/industries-we-serve/",
        },
        {
          label: "Services",
          href: "/hospitality-marketing-services/",
        },
        {
          label: "Our Work",
          href: "https://www.eazotel.com/our-work",
        },
        {
          label: "Career",
          href: "https://app.eazotel.com/careers",
        },
        {
          label: "Blogs",
          href: "/blogs/",
        },
        {
          label: "Success Stories",
          href: "/case-study/",
        },
        {
          label: "Contact Us",
          href: "/contact-us",
        },
        // {
        //   label: "Our Team",
        //   href: "",
        // },
      ],
    },
    {
      title: "Top Services",
      listOfLinks: [
        {
          label: "Products",
          href: "https://www.eazotel.com",
        },
        {
          label: "Hotel Marketing ",
          href: "/industries-we-serve/hotel-marketing-agency/",
        },
        {
          label: "Hotel Social Media",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-social-media/",
        },
        {
          label: "Hotel SEO",
          href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/",
        },
        {
          label: "Resort Marketing",
          href: "",
        },
        {
          label: "Resort Social Media",
          href: "",
        },
        {
          label: "Resort SEO",
          href: "",
        },
        {
          label: "Restaurant Social Media",
          href: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/",
        },
        {
          label: "Restaurant Marketing",
          href: "/industries-we-serve/restaurant-marketing-agency/",
        },
        {
          label: "Restaurant SEO",
          href: "",
        },
      ],
    },
    {
      title: "Offices",
      listOfLinks: [
        // {
        //   label: contacts.address_4,
        //   href: contacts.address_4_mapUrl,
        //   icon: <FillLocationIcon />,
        // },
        {
          label: contacts.address_1,
          href: contacts.address_1_mapUrl,
          icon: <FillLocationIcon />,
        },
        // {
        //   label: contacts.address_2,
        //   href: contacts.address_2_mapUrl,
        //   icon: <FillLocationIcon />,
        // },
        // {
        //   label: contacts.address_3,
        //   href: contacts.address_3_mapUrl,
        //   icon: <FillLocationIcon />,
        // },
      ],
    },
    {
      title: "Contact",
      listOfLinks: [
        ...contacts.phone.map((phone) => ({
          label: phone,
          href: `tel:${phone}`,
          icon: <FillPhoneIcon />,
        })),
        ...contacts.email.map((email) => ({
          label: email,
          href: `mailto:${email}`,
          icon: <FillMailIcon />,
        })),
      ],
    },
  ],
};

export const policyLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },
  {
    label: "Terms of Use",
    href: "/terms-and-conditions/",
  },
];
