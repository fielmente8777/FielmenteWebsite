import Link from "next/link";
import Container from "../Container";
import Section from "../Section";
import { OutLineLocationIcon } from "../Header/LandingHeader";
import { OutLineCall, OutLineEmail } from "@/utils/icons";
import Form2 from "../Form2";

const LandingPageFooter2 = () => {
  const data = {
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
  return (
    <Section className="bg-banner2 bg-right-bottom">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-blue-dark lg:text-4xl text-2xl">
              {data.title}
            </h2>
            <p className="text-gray-tertiary">{data.description}</p>
            <ul className="flex flex-col gap-5">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-[#3B3B3B]"
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
    </Section>
  );
};

export default LandingPageFooter2;
