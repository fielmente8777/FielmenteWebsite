"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";
import {
  OutLineLocationIcon,
  OutlineMailIcon,
  OutlinePhoneIcon,
} from "../Header/landingHeader";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PopupForm } from "@/app/hospitality/components";
import { contacts } from "../../../contact";
import Call from "../Call";
import Whatsapp from "../WhatsApp";

const LandingFooter = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="lg:pt-12 pt-9 bg-gray-secondary">
      <div className="max-width">
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt="fielmente-logo"
            className="object-contain"
            width={120}
          />
        </div>
        <div className="flex flex-col gap-4 items-center mt-6 max-w-[700px] mx-auto">
          <p className="text-blue-dark text-base text-center flex justify-center">
            <span
            // className="-ml-2 lg:-ml-0"
            >
              <OutLineLocationIcon />
            </span>
            {/* Level 2, Augusta Point, Golf Course Rd, Parsvnath Exotica, Sarswati
                        Kunj II, DLF Phase 5,<br className="hidden lg:block" /> Sector 53, Gurugram, Haryana 122002 */}
            {/* Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram,
            Haryana 122005 */}
            Fielmente hospitality, Second Floor, ALTF Coworking, Plot No. 21 &
            21A, Sector 142, Noida, Uttar Pradesh 201304
          </p>
          {/* <p className="text-blue-dark text-base text-center flex justify-center lg:w-max">
            <span
            className="-ml-2 lg:-ml-0"
            >
              <OutLineLocationIcon />
            </span>
            Raheja Platinum, Road, off Andheri - Kurla Road, Sag Baug, Marol,
            Andheri East, Mumbai, Maharashtra 400059
          </p> */}
          <Link
            href={`mailto:sachin@fielmente.com`}
            className="text-lg text-blue-dark flex items-center gap-2"
          >
            <OutlineMailIcon />
            sachin@fielmente.com
          </Link>
          {pathName !== "/UK/" ? (
            <Link
              href={"tel:" + contacts.phone_1}
              className="flex items-center text-blue-dark text-lg "
            >
              <OutlinePhoneIcon width={30} height={40} />
              {contacts.phone_1}
            </Link>
          ) : (
            <Link
              href={"tel:+44 7438375533"}
              className="flex items-center text-blue-dark text-lg "
            >
              <OutlinePhoneIcon width={30} height={40} />
              +44 7438375533
            </Link>
          )}
        </div>
        <div className="w-full h-[1px] bg-orange-primary mt-4" />
        <div className="flex max-md:flex-col justify-center items-center gap-2 mt-2 py-4">
          <p className="text-blue-dark text-lg">
            &copy; {currentYear} Fielmente
          </p>
          <span className="text-orange-primary max-md:hidden text-lg font-bold">
            |
          </span>
          <p className="text-blue-dark text-lg"> All Rights Reserved</p>
          {/* <span className="text-orange-primary text-lg font-bold">|</span> */}
          {/* <Link href={"/landingpage"} className="text-blue-dark text-lg">Landing</Link> */}
        </div>
      </div>
      <PopupForm setShowModal={setShowModal} showModal={showModal} />
      <Call />
      <Whatsapp />
    </footer>
  );
};

export default LandingFooter;
