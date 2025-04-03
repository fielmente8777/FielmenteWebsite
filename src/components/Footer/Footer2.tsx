"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/landingPage/logo2.png";
// import {
//   OutlineMailIcon,
//   OutlinePhoneIcon,
//   OutLineLocationIcon,
// } from "../Header/LandingHeader";
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
// import Section from "../Section";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const Footer2 = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [formRes, setFormRes] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    try {
      setLoader(true);
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        {
          email: userEmail,
          name: userName,
          phone: `${userPhone}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setLoader(false);
        // // setPopupMsg("You information has been Received");
        router.push(`/thank-you/`);
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserPhone("");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };
  // const handleNewsletter = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const data = {
  //     // Domain: "abhijeet",
  //     Domain: "fielmente",
  //     email: email,
  //   };
  //   try {
  //     const response = await fetch(host, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setName("");
  //   setEmail("");
  // };
  const aboutLinks = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about us",
      link: "/about-fielmente-best-hospitality-marketing-agency",
    },
    {
      title: "reviews",
      link: "/#testimonials",
    },
    {
      title: "blogs",
      link: "/blogs",
    },
    {
      title: "case studies",
      link: "#",
    },
  ];
  const services = [
    {
      title: "Hotel Marketing",
      link: "/industries-we-serve/hotel-marketing-agency",
    },
    {
      title: "Hotel Social Media",
      link: "/industries-we-serve/hotel-marketing-agency/hotel-social-media",
    },
    {
      title: "Hotel Ads",
      link: "/industries-we-serve/hotel-marketing-agency/hotel-seo",
    },
    {
      title: "Restaurant Marketing",
      link: "/industries-we-serve/restaurant-marketing-agency",
    },
    {
      title: "Restaurant Social Media",
      link: "/industries-we-serve/restaurant-marketing-agency/restaurant-social-media",
    },
    {
      title: "Cloud Kitchen Marketing",
      link: "/industries-we-serve/cloud-kitchen-marketing-agency",
    },
    {
      title: "Cloud Kitchen Social Media",
      link: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-social-media",
    },

    {
      title: "Social Media Marketing",
      link: "/hospitality-marketing-services/social-media-marketing-agency",
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/hospitality-marketing-services/seo-agency",
    },
    {
      title: "Paid Ad Campaigns",
      link: "/hospitality-marketing-services/google-ads-agency",
    },
  ];
  const contactLinks = [
    {
      title:
        "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122005",
      link: "https://maps.app.goo.gl/6skWVHbH8e92D1Gi7",
    },
    {
      title: "Call: +91 95018 68775",
      link: "tel:+919501868775",
    },
    {
      title: "Email: sachin@fielmente.com",
      link: "mailto:sachin@fielmente.com",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Free consultation",
      link: "#contactForm",
    },
    {
      title: "Schedule a demo",
      link: "#contactForm",
    },
  ];

  const socialLinks = [
    {
      icon: <FillFacebook />,
      link: "https://www.facebook.com/Fielmentemarketing/",
    },
    {
      icon: <FillTwitter />,
      link: "https://x.com/fieladvisors?lang=en",
    },
    {
      icon: <FillLinkedin />,
      link: "https://www.linkedin.com/company/fielmente/",
    },
    {
      icon: <FillInstagram />,
      link: "https://www.instagram.com/fielmente_hospitality/",
    },
  ];

  return (
    <footer className="pb-6 bg-blue-dark max-w-[1540px] mx-auto ">
      <section
        className="lg:py-11 max-md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/images/footer-bg.webp')]"
        style={{ backgroundSize: "100% 95%" }}
      >
        <Container>
          <div className="flex flex-col items-start gap-8">
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
                      <Link href={item.link}>{item.title}</Link>
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
                      <Link href={item.link ? item.link : "/"}>
                        {item.title}
                      </Link>
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
                    <li className="text-base text-[#787878]" key={index}>
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
                  <form
                    className="flex flex-col gap-4 text-[#3B3B3B]"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 outline-none"
                      type="text"
                      placeholder="Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 outline-none"
                      type="email"
                      placeholder="Email Id"
                      value={userEmail}
                      onChange={handleEmailChange}
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 no-spinners outline-none"
                      type="number"
                      placeholder="Phone Number"
                      value={userPhone}
                      onChange={handlePhoneChange}
                    />
                    <button
                      className="bg-orange-primary text-white rounded-sm hover:bg-white hover:text-orange-primary border border-solid border-orange-primary py-3 w-full flex items-center justify-center font-medium"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-[#787878]">
                    By submitting this form you are confirming that you have
                    read and agree to Fielmente
                    <span className="text-[#F2B203]"> Terms</span> &
                    <span className="text-[#F2B203]"> Privacy Policy</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex max-md:flex-col gap-6 lg:items-center justify-between w-full lg:mt-4">
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
                    <li key={index} className="max-md:p-2 lg:pe-2 lg:py-2">
                      <Link href={item.link} target="_blank" rel="noreferrer">
                        {item.icon} <span className="sr-only">icon</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="h-[1px] w-full bg-[#3B3B3B] mb-10"></div>
        <div className="flex max-md:flex-col items-center gap-3 justify-between w-full">
          <p className="text-sm text-[#787878] max-md:text-center flex max-md:flex-col items-center justify-center gap-1">
            © {currentYear} Fielmente Hospitality Marketing Agency. All Rights
            Reserved |{" "}
            <span className="">
              <Link target="_blank" href="https://usa.fielmente.com/">
                USA
              </Link>{" "}
              |{" "}
              <Link target="_blank" href="https://dubai.fielmente.com/">
                Dubai
              </Link>{" "}
              |{" "}
              UK
            </span>
          </p>
          <div className="flex items-center gap-4">
            <Link href={"/privacy-policy"} className="text-sm text-[#787878] ">
              Privacy Policy
            </Link>
            <Link
              href={"/terms-and-conditions"}
              className="text-sm text-[#787878] "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>

      {pathname !== "/thank-you/" && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </footer>
  );
};

export default Footer2;
