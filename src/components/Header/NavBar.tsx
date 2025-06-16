"use client";
import { usePathname } from "next/navigation";
import Header2 from "./header2";
import React from "react";
import LandingHeader from "./landingHeader";

const NavBar = () => {
  const pathname = usePathname();

  let HeaderComponent = null;

  if (
    pathname === "/landing-page/" ||
    // pathname === "/fielmente-lp/" ||
    pathname === "/resort/" ||
    pathname === "/hospitality/" ||
    pathname === "/thank-you/" ||
    pathname === "/dubai-restaurant/" ||
    pathname === "/restaurant/" ||
    pathname === "/UK/"
  ) {
    HeaderComponent = LandingHeader;
    // } else if (pathname === "/thank-you/") {
    //   HeaderComponent = null;
  } else {
    HeaderComponent = Header2;
  }

  return <>{HeaderComponent && <HeaderComponent />}</>;
};

export default NavBar;
