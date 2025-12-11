import {
    FillLocationIcon,
    FillMailIcon,
    FillPhoneIcon,
} from "@/utils/newIcons";
import { contacts } from "../../../contact";

export const contactPageData = {
  bannerData: {
    title: "CONTACT US",
    subTitle: "We’re Here Just for You",
    description:
      "We are always ready to lend an ear, offer advice and get your project over the line.",
  },
  formData: {
    title: `Let’s Work <span>Together</span>`,
    listOfLinks: [
      {
        title: "Contact Details",
        links: [
          {
            label: contacts.phone_1,
            href: `tel:${contacts.phone_1}`,
            icon: <FillPhoneIcon />,
          },
          {
            label: contacts.email_1,
            href: `mailto:${contacts.email_1}`,
            icon: <FillMailIcon />,
          },
        ],
      },
      {
        title: "Our Offices",
        links: [
          {
            label: contacts.address_4,
            href: contacts.address_4_mapUrl,
            icon: <FillLocationIcon />,
          },
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
          {
            label: contacts.address_3,
            href: contacts.address_3_mapUrl,
            icon: <FillLocationIcon />,
          },
        ],
      },
    ],
  },
};
