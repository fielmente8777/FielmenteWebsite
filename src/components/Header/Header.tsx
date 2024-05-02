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
          className="relative max-w-[160px] w-full aspect-[4/1.5]"
        >
          <Image
            src={Logo}
            alt="fielmente-logo"
            priority={true}
            fill
            className="object-contain"
            sizes="100px"
          />
        </Link>

        {/* Links Container******** */}
        <div className="links-container">
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

                {/* For Right Border***** */}
                {Index >= 0 && Index < Nav_Links.length - 1 && (
                  <div className="w-[0.16rem] h-6 bg-black"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Container***** */}
        <div className="contact-container">
          <Link href={"tel:+919501868775"}>
            <FaPhone size={16} /> +919501868775
          </Link>
        </div>
      </nav>

      {/* Bottom underline******* */}
      <hr className="bg-gray-200 h-[0.18rem] w-[95%] mx-auto" />

      {/* Mobile nav-bar***** */}
    </header>
  );
};

export default Header;
