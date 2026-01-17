"use client";
import Link from "next/link";
import Container from "../Container";
import Section from "../Section";
import { OutLineLocationIcon } from "../Header/landingHeader";
import { OutLineCall, OutLineEmail } from "@/utils/icons";
import Form2 from "../Form2";
import { usePathname } from "next/navigation";
import Call from "../Call";
import Whatsapp from "../WhatsApp";

const LandingPageFooter2 = () => {
  const pathName = usePathname();

  let data;

  if (pathName === "/dubai-restaurant/") {
    data = {
      title: "Contact Details",
      description:
        "Dubai’s leading marketing company manages everything from SEO to social media, bringing more customers to your restaurant.",
      items: [
        {
          href: "",
          label: "SIT Tower, Dubai Silicon Oasis, Dubai - United Arab Emirates",
          icon: <OutLineLocationIcon />,
        },
        {
          href: "tel:+91 95018 68775",
          label: "+91 95018 68775",
          icon: <OutLineCall />,
        },
        {
          href: "mailto:sachin@fielmente.com",
          label: "sachin@fielmente.com",
          icon: <OutLineEmail />,
        },
      ],
    };
  } else if (pathName === "/UK/") {
    data = {
      title: "Reach and Attract More Customers",
      subTitle: "Increase Local Awareness",
      description:
        "We make your restaurant the top local talk with just 15 minutes of your time each month. United Kingdom leading marketing company handles everything from SEO to social media, driving more customers your way.",
      items: [
        {
          href: "",
          label:
            "71-75 SHELTON STREET, COVENT GARDEN, UNITED KINGDOM, LONDON, WC2H 9JQ",
          icon: <OutLineLocationIcon />,
        },
        {
          href: "tel:+44 7438375533",
          label: "+44 7438375533",
          icon: <OutLineCall />,
        },
        {
          href: "mailto:sachin@fielmente.com",
          label: "sachin@fielmente.com",
          icon: <OutLineEmail />,
        },
      ],
    };
  } else {
    data = {
      title: "Reach and Attract More Customers",
      subTitle: "Increase Local Awareness",
      description:
        "We make your restaurant the top local talk with just 15 minutes of your time each month. India’s leading marketing company handles everything from SEO to social media, driving more customers your way.",
      items: [
        {
          href: "",
          label:
            "Fielmente hospitality, Second Floor, ALTF Coworking, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304",
          // "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122005",
          icon: <OutLineLocationIcon />,
        },
        {
          href: "tel:+91 95018 68775",
          label: "+91 95018 68775",
          icon: <OutLineCall />,
        },
        {
          href: "mailto:sachin@fielmente.com",
          label: "sachin@fielmente.com",
          icon: <OutLineEmail />,
        },
      ],
    };
  }
  return (
    <Section className="bg-banner2 bg-right-bottom">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-4">
          <div className="flex flex-col gap-4">
            {data.subTitle && (
              <p className="lg:text-2xl text-base text-blue-dark helv">
                {data.subTitle}
              </p>
            )}
            <h2 className="text-blue-dark lg:text-4xl text-2xl helv font-semibold">
              {data.title}
            </h2>
            <p className="text-gray-tertiary poppins">{data.description}</p>
            <ul className="flex flex-col gap-5">
              {data.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex  gap-2 text-[#3B3B3B] helv"
                  >
                    <span className="text-orange-primary">
                      <span className="sr-only">{item.label}</span>
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:justify-end justify-center">
            <Form2 title="Get in Touch Now!" bold="Elevate Your Restaurant" />
          </div>
        </div>
      </Container>
      <Call />
      <Whatsapp />
    </Section>
  );
};

export default LandingPageFooter2;
