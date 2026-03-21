import React from "react";
import Section from "../Section";
import Container from "../Container";
// import { it } from "node:test";
import Link from "next/link";
import Image from "next/image";
import { contacts } from "../../../contact";
import Call from "../Call";
import Whatsapp from "../WhatsApp";
// import { PopupForm } from "@/app/hospitality/components";

const PhoneIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
        fill="#E8EAED"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
        fill="#E8EAED"
      />
    </svg>
  );
};

const AddressIcon = () => {
  return (
    <svg
      width="17"
      height="22"
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 0.5C6.31273 0.502481 4.21575 1.37247 2.66911 2.91911C1.12247 4.46575 0.252481 6.56273 0.25 8.75C0.25 15.8094 7.75 21.1409 8.06969 21.3641C8.19579 21.4524 8.34603 21.4998 8.5 21.4998C8.65397 21.4998 8.80421 21.4524 8.93031 21.3641C9.25 21.1409 16.75 15.8094 16.75 8.75C16.7475 6.56273 15.8775 4.46575 14.3309 2.91911C12.7843 1.37247 10.6873 0.502481 8.5 0.5ZM8.5 5.75C9.09334 5.75 9.67336 5.92595 10.1667 6.25559C10.6601 6.58524 11.0446 7.05377 11.2716 7.60195C11.4987 8.15013 11.5581 8.75333 11.4424 9.33527C11.3266 9.91721 11.0409 10.4518 10.6213 10.8713C10.2018 11.2909 9.66721 11.5766 9.08527 11.6924C8.50333 11.8081 7.90013 11.7487 7.35195 11.5216C6.80377 11.2946 6.33524 10.9101 6.00559 10.4167C5.67595 9.92336 5.5 9.34334 5.5 8.75C5.5 7.95435 5.81607 7.19129 6.37868 6.62868C6.94129 6.06607 7.70435 5.75 8.5 5.75Z"
        fill="white"
      />
    </svg>
  );
};

const FaceBook = () => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.227539" width="32" height="32" rx="2" fill="#F26633" />
      <path
        d="M17.4 17.4275H19.4L20.2 14.2275H17.4V12.6275C17.4 11.8035 17.4 11.0275 19 11.0275H20.2V8.33954C19.9392 8.30514 18.9544 8.22754 17.9144 8.22754C15.7424 8.22754 14.2 9.55314 14.2 11.9875V14.2275H11.8V17.4275H14.2V24.2275H17.4V17.4275Z"
        fill="white"
      />
    </svg>
  );
};

const Twitter = () => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.227539" width="32" height="32" rx="2" fill="#F26633" />
      <mask
        id="mask0_1579_693"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="22"
        height="22"
      >
        <path
          d="M5.33337 5.56104H26.6667V26.8944H5.33337V5.56104Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1579_693)">
        <path
          d="M22.1334 6.56055H25.405L18.2583 14.7495L26.6667 25.8946H20.0839L14.9242 19.1365L9.02709 25.8946H5.75242L13.3959 17.1327L5.33337 6.56207H12.0838L16.7406 12.7381L22.1334 6.56055ZM20.9829 23.932H22.7962L11.0934 8.42112H9.14899L20.9829 23.932Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

const LinkedIn = () => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.227539" width="32" height="32" rx="2" fill="#F26633" />
      <path
        d="M26.9344 27.1606V19.2496C26.9344 15.3616 26.0974 12.3916 21.5615 12.3916C19.3745 12.3916 17.9165 13.5796 17.3225 14.7136H17.2685V12.7426H12.9755V27.1606H17.4575V20.0056C17.4575 18.1156 17.8085 16.3066 20.1305 16.3066C22.4255 16.3066 22.4525 18.4396 22.4525 20.1136V27.1336H26.9344V27.1606Z"
        fill="white"
      />
      <path
        d="M5.68274 12.7427H10.1647V27.1607H5.68274V12.7427Z"
        fill="white"
      />
      <path
        d="M7.92537 5.56104C6.49437 5.56104 5.33337 6.72203 5.33337 8.15303C5.33337 9.58403 6.49437 10.772 7.92537 10.772C9.35637 10.772 10.5174 9.58403 10.5174 8.15303C10.5174 6.72203 9.35637 5.56104 7.92537 5.56104Z"
        fill="white"
      />
    </svg>
  );
};

const Instagram = () => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.227539" width="32" height="32" rx="2" fill="#F26633" />
      <path
        d="M12.64 8.22754H19.36C21.92 8.22754 24 10.3075 24 12.8675V19.5875C24 20.8181 23.5111 21.9983 22.641 22.8685C21.7708 23.7387 20.5906 24.2275 19.36 24.2275H12.64C10.08 24.2275 8 22.1475 8 19.5875V12.8675C8 11.6369 8.48886 10.4567 9.35902 9.58656C10.2292 8.71639 11.4094 8.22754 12.64 8.22754ZM12.48 9.82754C11.7162 9.82754 10.9836 10.131 10.4435 10.6711C9.90343 11.2112 9.6 11.9437 9.6 12.7075V19.7475C9.6 21.3395 10.888 22.6275 12.48 22.6275H19.52C20.2838 22.6275 21.0164 22.3241 21.5565 21.784C22.0966 21.2439 22.4 20.5114 22.4 19.7475V12.7075C22.4 11.1155 21.112 9.82754 19.52 9.82754H12.48ZM20.2 11.0275C20.4652 11.0275 20.7196 11.1329 20.9071 11.3204C21.0946 11.508 21.2 11.7623 21.2 12.0275C21.2 12.2928 21.0946 12.5471 20.9071 12.7346C20.7196 12.9222 20.4652 13.0275 20.2 13.0275C19.9348 13.0275 19.6804 12.9222 19.4929 12.7346C19.3054 12.5471 19.2 12.2928 19.2 12.0275C19.2 11.7623 19.3054 11.508 19.4929 11.3204C19.6804 11.1329 19.9348 11.0275 20.2 11.0275ZM16 12.2275C17.0609 12.2275 18.0783 12.649 18.8284 13.3991C19.5786 14.1493 20 15.1667 20 16.2275C20 17.2884 19.5786 18.3058 18.8284 19.056C18.0783 19.8061 17.0609 20.2275 16 20.2275C14.9391 20.2275 13.9217 19.8061 13.1716 19.056C12.4214 18.3058 12 17.2884 12 16.2275C12 15.1667 12.4214 14.1493 13.1716 13.3991C13.9217 12.649 14.9391 12.2275 16 12.2275ZM16 13.8275C15.3635 13.8275 14.753 14.0804 14.3029 14.5305C13.8529 14.9806 13.6 15.591 13.6 16.2275C13.6 16.8641 13.8529 17.4745 14.3029 17.9246C14.753 18.3747 15.3635 18.6275 16 18.6275C16.6365 18.6275 17.247 18.3747 17.6971 17.9246C18.1471 17.4745 18.4 16.8641 18.4 16.2275C18.4 15.591 18.1471 14.9806 17.6971 14.5305C17.247 14.0804 16.6365 13.8275 16 13.8275Z"
        fill="white"
      />
    </svg>
  );
};

const footerData = {
  followUs: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/Fielmentemarketing/",
      icon: <FaceBook />,
    },
    {
      name: "Twitter",
      url: "https://x.com/fieladvisors?lang=en",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/fielmente/",
      icon: <LinkedIn />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fielmente_hospitality/",
      icon: <Instagram />,
    },
  ],

  offices: [
    // {
    //   label: contacts.address_4,
    //   href: contacts.address_4_mapUrl,
    //   icon: <AddressIcon />,
    // },
    {
      label:
        "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122005",
      href: "https://maps.app.goo.gl/eTNaDpDjnw2AwGFV9",
      icon: <AddressIcon />,
    },
    // {
    //   label:
    //     "Ground Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304",
    //   href: "https://maps.app.goo.gl/eMCniBLG98NSEtzn9",
    //   icon: <AddressIcon />,
    // },
  ],

  contactUs: [
    ...contacts.phone.map((phone) => ({
      label: phone,
      href: `tel:${phone}`,
      icon: <PhoneIcon />,
    })),
    ...contacts.email.map((email) => ({
      label: email,
      href: `mailto:${email}`,
      icon: <MailIcon />,
    })),
  ],
};
const HospitalityFooter = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <footer>
      <Section className="bg-blue-dark !p-0 !pt-14">
        <Container>
          <div className="grid lg:grid-cols-3 lg:gap-0 gap-6">
            <div className="space-y-8">
              {/* logo  */}
              <div className="flex md:justify-start justify-center items-center gap-2">
                <div className="relative w-[250px] aspect-[4/1.5]">
                  <Image
                    src={"/logo2.png"}
                    alt="logo"
                    fill
                    className="object-contain "
                  />
                </div>
              </div>

              {/* follow us  */}
              {/* <div>
                <h2 className="text-white text-2xl md:text-start text-center font-semibold">
                  Follow Us
                </h2>
                <div className="flex md:justify-start justify-center items-center gap-4 mt-4">
                  {footerData?.followUs?.map((item, index) => (
                    <Link target="_blank" href={item?.url} key={index}>
                      {item?.icon}
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>

            <div>
              <h2 className="text-white text-2xl md:text-4xl font-semibold">Our Offices</h2>

              <div className="space-y-5 mt-6 text-white">
                {footerData?.offices?.map((item, index) => (
                  <Link
                    target="_blank"
                    href={item?.href}
                    key={index}
                    className="flex gap-2.5 text-xl"
                  >
                    <span>{item?.icon}</span>
                    <p>{item?.label}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex lg:justify-center">
              <div>
                <h2 className="text-white text-2xl md:text-4xl font-semibold">
                  Contact Us
                </h2>

                <div className="space-y-5 mt-6 text-white">
                  {footerData?.contactUs?.map((item, index) => (
                    <Link
                      href={item?.href}
                      key={index}
                      className="flex items-center gap-3 text-xl"
                    >
                      <span>{item?.icon}</span>
                      <p>{item?.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-10 space-y-4 pb-4">
          <div className="bg-[linear-gradient(to_right,_#110D3C,_#FFFFFF,_#110D3C)] h-[1px] w-full" />

          <div className="flex justify-center items-center gap-4 text-lg text-white">
            <p className="text-center">© 2025 Fielmente</p>
            <span>•</span>
            <p className="text-center">All Rights Reserved</p>
            {/* <span>•</span>
            <p className="text-center">
              Design And Development By{" "}
              <Link
                target="_blank"
                href="https://www.eazotel.com/"
                className="font-semibold"
              >
                Eazotel
              </Link>
            </p> */}
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default HospitalityFooter;
