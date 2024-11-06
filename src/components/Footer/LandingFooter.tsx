"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/landingPage/logo2.png";
import {
  OutlineMailIcon,
  OutlinePhoneIcon,
  OutLineLocationIcon,
} from "../Header/LandingHeader";
import { useState } from "react";
import { PopupForm } from "@/app/landing-page/components";
import Container from "../Container";
import { TrustPiolet } from "../../app/landing-page/components/marketingAgency";
import {
  FillFacebook,
  FillInstagram,
  FillLinkedin,
  FillTwitter,
  Google,
} from "@/utils/icons";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const aboutLinks = [
    "Home",
    "About Fielmente",
    "reviews",
    "Blogs",
    "case studies",
  ];
  const services = [
    "Website Development",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Paid ad campaigns",
  ];
  const contactLinks = [
    {
      title: "call: +91 95018 68777",
      link: "tel:+919501868775",
    },
    {
      title: "Mail: Sachin@fielmente.com",
      link: "mailto:sachin@fielmente.com",
    },
    {
      title: "contact",
    },
    {
      title: "free consultation",
    },
    {
      title: "schedule a demo",
    },
  ];

  const socialLinks = [
    {
      icon: <FillFacebook />,
      link: "https://www.facebook.com/fielmentebusiness?mibextid=ViGcVu",
    },
    {
      icon: <FillTwitter />,
      link: "https://x.com/fieladvisors?lang=en",
    },
    {
      icon: <FillLinkedin />,
      link: "https://www.linkedin.com/company/fielmente",
    },
    {
      icon: <FillInstagram />,
      link: "https://www.instagram.com/fielmente_hospitality/?hl=en",
    },
  ];
  return (
    <footer className="lg:pt-20 pt-10 lg:pb-16 pb-12 bg-blue-dark bg-no-repeat bg-cover bg-center bg-[url('/images/footer-bg.webp')]">
      <Container>
        <div className="flex flex-col items-start gap-10">
          <div className="h-[5.625rem] relative aspect-[4/1.95]">
            <Image src={Logo} alt="logo" fill className="object-contain" />
          </div>
          <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {/* About */}
            <div>
              <h2 className="text-3xl text-orange-primary font-bold mb-4">
                About
              </h2>
              <ul className="flex flex-col gap-4">
                {aboutLinks.map((item, index) => (
                  <li
                    className="text-base text-[#787878] capitalize"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl text-orange-primary font-bold mb-4">
                Services
              </h2>
              <ul className="flex flex-col gap-4">
                {services.map((item, index) => (
                  <li
                    className="text-base text-[#787878] capitalize"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl text-orange-primary font-bold mb-4">
                Get in Touch
              </h2>
              <ul className="flex flex-col gap-4">
                {contactLinks.map((item, index) => (
                  <li
                    className="text-base text-[#787878] capitalize"
                    key={index}
                  >
                    {item.link ? (
                      <Link href={item.link}>{item.title}</Link>
                    ) : (
                      <p>{item.title}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-3xl text-orange-primary font-bold mb-4">
                Newsletter
              </h2>
              <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-4 text-[#3B3B3B]">
                  <input
                    className="w-full bg-[#F1F1F1] rounded-sm p-3"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="w-full bg-[#F1F1F1] rounded-sm p-3"
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    className="bg-orange-primary text-white rounded-sm py-3 w-full flex items-center justify-center font-medium"
                    onClick={() => setShowModal(true)}
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-[#787878]">
                  By submitting this form you are confirming that you have read
                  and agree to Fielmente 
                  <span className="text-[#F2B203]">Terms</span> & 
                  <span className="text-[#F2B203]">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-6 lg:items-center justify-between w-full lg:mt-10">
            <div className="flex items-center gap-5">
              <div className="">
                <TrustPiolet />
              </div>
              <div className="">
                <Google />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-orange-primary">
                Follow Us:
              </h3>
              <ul className="flex  items-center gap-4">
                {socialLinks.map((item, index) => (
                  <li key={index} className="p-2">
                    {/* <span href={item.link} target="_blank" rel="noreferrer"> */}
                    {item.icon} <span className="sr-only">icon</span>
                    {/* </span> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#3B3B3B]"></div>
          <div className="flex max-md:flex-col items-center gap-3 justify-between w-full">
            <p className="text-sm text-[#787878] max-md:text-center">
              © {currentYear} Fielmente Hospitality Marketing Agency. All Rights
              Reserved
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={"/"}
                className="text-sm text-[#787878] hover:text-white"
              >
                Terms
              </Link>
              <Link
                href={"/"}
                className="text-sm text-[#787878] hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <PopupForm setShowModal={setShowModal} showModal={showModal} />
    </footer>
  );
};

export default LandingFooter;
