"use client";
import { usePathname } from "next/navigation";
import Header2 from "./header2";
import React from "react";
import LandingHeader from "./landingHeader";
import LandingNav from "./LandingNav";

const NavBar = () => {
  const pathname = usePathname();

  let HeaderComponent = null;

  const paths = [
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];

  if (paths.includes(pathname)) {
    HeaderComponent = LandingHeader;
  } else if (pathname === "/landing-page/") {
    HeaderComponent = LandingNav;
  } else {
    HeaderComponent = Header2;
  }

  if (pathname === "/thank-you/") {
    return null;
  }

  return <>{HeaderComponent && <HeaderComponent />}</>;
};

export default NavBar;
