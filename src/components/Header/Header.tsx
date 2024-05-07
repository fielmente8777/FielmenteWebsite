"use client";
import React from "react";
import "./Header.scss";
import Link from "next/link";
import { Nav_Links } from "./Nav_Links";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";

import { FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav className="max-width nav-bar-container">
        {/* Logo Container***** */}
        <Link
          href={"/"}
          className="relative max-w-[164px] w-full aspect-[4/1.3]"
        >
          <Image
            src={Logo}
            alt="fielmente-logo"
            priority={true}
            fill
            className="object-contain"
            // sizes="160px"
          />
        </Link>

        {/* Links Container******** */}
        {/* <div className="links-container">
          {Nav_Links.map((Links, Index) => {
            return (
              <div key={Index} className="flex items-center gap-6">
                <div className="links">
                  <Link href={Links.src}>{Links.linkName}</Link>
                  {Links.subLinks && (
                    <ul className="sub-links-container">
                      {Links.subLinks.map((SubLinks, Index) => {
                        return (
                          <li key={Index} className="sub-links">
                            <Link href={SubLinks.src}>{SubLinks.linkName}</Link>
                            {SubLinks.subLinks && (
                              <ul className="child-sub-links-container">
                                {SubLinks.subLinks.map((SubLinks, Index) => {
                                  return (
                                    <li key={Index} className="sub-links">
                                      <Link href={SubLinks.src}>
                                        {SubLinks.linkName}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                {Index >= 0 && Index < Nav_Links.length - 1 && (
                  <div className="w-[0.16rem] h-6 bg-black"></div>
                )}
              </div>
            );
          })}
        </div> */}

        {/* Contact Container***** */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link
            href={`mailto:sachin@fielmente.com`}
            className="text-lg flex items-center gap-2 text-blue-dark"
          >
            <OutlineMailIcon />
            sachin@fielmente.com
          </Link>
          <Link
            href={"tel:+919501868775 "}
            className="flex items-center text-orange-500 text-lg border border-[var(--primary-orange)] rounded-lg md:px-5 px-3 md:py-4 py-2"
          >
            <OutlinePhoneIcon /> +919501868775
          </Link>
        </div>
      </nav>

      {/* Mobile nav-bar***** */}
    </header>
  );
};

export const OutlineMailIcon = () => {
  return (
    <svg
      width="20"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00067 20.5834C4.50161 20.5834 4.08525 20.4165 3.75158 20.0829C3.41792 19.7492 3.25072 19.3325 3.25 18.8327V7.16735C3.25 6.6683 3.41719 6.25194 3.75158 5.91827C4.08597 5.5846 4.50197 5.41741 4.99958 5.41669H21.0004C21.4988 5.41669 21.9148 5.58388 22.2484 5.91827C22.5821 6.25266 22.7493 6.66902 22.75 7.16735V18.8338C22.75 19.3321 22.5828 19.7485 22.2484 20.0829C21.914 20.4172 21.498 20.5841 21.0004 20.5834H5.00067ZM13 13.1257L4.33333 7.45877V18.8338C4.33333 19.028 4.39581 19.1877 4.52075 19.3126C4.64569 19.4375 4.80567 19.5 5.00067 19.5H21.0004C21.1947 19.5 21.3543 19.4375 21.4792 19.3126C21.6042 19.1877 21.6667 19.0277 21.6667 18.8327V7.45769L13 13.1257ZM13 11.9167L21.333 6.50002H4.667L13 11.9167ZM4.33333 7.45877V6.50002V18.8338C4.33333 19.028 4.39581 19.1877 4.52075 19.3126C4.64569 19.4375 4.80567 19.5 5.00067 19.5H4.33333V7.45877Z"
        fill="#F26633"
      />
    </svg>
  );
};

export const OutlinePhoneIcon = () => {
  return (
    <svg
      width="20"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.083 2.68583L8.1509 2.96663C7.32095 3.21691 6.57978 3.69908 6.0146 4.35638C5.44943 5.01367 5.08378 5.81874 4.9607 6.67683C4.5746 9.36523 5.4378 12.5086 7.5191 16.1135C9.5952 19.7093 11.8806 22.0259 14.3961 23.0399C15.2043 23.3657 16.0891 23.4525 16.9453 23.29C17.8014 23.1275 18.5929 22.7226 19.2256 22.1234L19.9302 21.4552C20.3877 21.0222 20.6725 20.4378 20.7316 19.8106C20.7906 19.1834 20.62 18.5561 20.2513 18.0453L18.4885 15.6013C18.2502 15.2714 17.9146 15.0243 17.5287 14.8947C17.1429 14.765 16.7262 14.7594 16.337 14.8785L13.6707 15.6936L13.6018 15.7066C13.308 15.7495 12.6294 15.1138 11.7844 13.65C10.9004 12.1186 10.7184 11.2229 10.9615 10.9915L12.3174 9.72663C12.8127 9.2641 13.1511 8.65829 13.2851 7.99396C13.4192 7.32964 13.3422 6.64003 13.0649 6.02163L12.2043 4.10933C11.9455 3.53387 11.4863 3.07216 10.9123 2.81025C10.3382 2.54835 9.68724 2.50412 9.083 2.68583ZM11.0213 4.64233L11.8793 6.55463C12.0458 6.92554 12.0922 7.33922 12.012 7.73781C11.9319 8.1364 11.7291 8.49996 11.4321 8.77763L10.0723 10.0438C9.2013 10.868 9.4899 12.2746 10.6599 14.3C11.7597 16.2058 12.7633 17.147 13.8423 16.9832L14.0035 16.9494L16.7179 16.1213C16.8477 16.0815 16.9866 16.0832 17.1153 16.1264C17.244 16.1695 17.356 16.2518 17.4355 16.3618L19.1983 18.8058C19.3829 19.0612 19.4684 19.375 19.439 19.6887C19.4096 20.0024 19.2672 20.2948 19.0384 20.5114L18.3325 21.1796C17.8806 21.6074 17.3153 21.8964 16.7039 22.0123C16.0926 22.1282 15.4608 22.0661 14.8836 21.8335C12.6762 20.9443 10.5897 18.8292 8.6462 15.4635C6.6975 12.09 5.9084 9.22093 6.2477 6.86143C6.33553 6.24839 6.59669 5.6732 7.00043 5.2036C7.40417 4.73399 7.93367 4.38951 8.5266 4.21073L9.4587 3.92993C9.7609 3.83912 10.0858 3.86133 10.3728 3.9924C10.6599 4.12348 10.8894 4.35448 11.0187 4.64233"
        fill="#F26633"
      />
    </svg>
  );
};

export default Header;
