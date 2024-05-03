import Link from "next/link";
import React from "react";
import { OutlineMailIcon, OutlinePhoneIcon } from "../Header/Header";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";

function Footer() {
  return (
    <footer className="pt-12 bg-gray-secondary">
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
          <p className="text-blue-dark text-lg text-center">
            Level 2, Augusta Point, Golf Course Rd, Parsvnath Exotica, Sarswati
            Kunj II, DLF Phase 5, Sector 53, Gurugram, Haryana 122002
          </p>
          <Link
            href={`mailto:sachin@fielmente.com`}
            className="text-lg text-blue-dark flex items-center gap-2"
          >
            <OutlineMailIcon />
            sachin@fielmente.com
          </Link>
          <Link
            href={"tel:+919501868775"}
            className="flex items-center text-blue-dark text-lg "
          >
            <OutlinePhoneIcon />
            +919501868775
          </Link>
        </div>
        <div className="w-full h-[1px] bg-orange-primary mt-4" />
        <div className="flex justify-center items-center gap-2 mt-2 py-4">
          <p className="text-blue-dark text-lg">&copy;2024 Fielmente</p>
          <span className="text-orange-primary text-lg font-bold">|</span>
          <p className="text-blue-dark text-lg"> All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
