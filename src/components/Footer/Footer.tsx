"use client";
import { usePathname } from "next/navigation";
import Footer2 from "./Footer2";
import LandingFooter from "./LandingFooter";
import path from "path";
import LandingPageFooter2 from "./LandingPageFooter2";

const Footer = () => {
  const pathName = usePathname();

  let FooterComponent = null;

  if (
    pathName === "/landing-page/" ||
    pathName === "/resort/" ||
    pathName === "/hospitality/"
  ) {
    FooterComponent = LandingFooter;
    // } else if (pathName === "/thank-you/") {
    //   FooterComponent = null;
  } else if (pathName === "/dubai-restaurant/" || pathName === "/restaurant/") {
    FooterComponent = LandingPageFooter2;
  } else {
    FooterComponent = Footer2;
  }
  return <>{FooterComponent && <FooterComponent />}</>;
};

export default Footer;
