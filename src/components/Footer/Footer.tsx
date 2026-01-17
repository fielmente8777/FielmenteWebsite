"use client";
import { usePathname } from "next/navigation";
import Footer2 from "./Footer2";
import HospitalityFooter from "./HospitalityFooter";
import LandingFooter from "./LandingFooter";
import LandingPageFooter2 from "./LandingPageFooter2";

const Footer = () => {
  const pathName = usePathname();

  let FooterComponent = null;

  if (pathName === "/hospitality/" || pathName === "/resort/") {
    FooterComponent = LandingFooter;
    // } else if (pathName === "/thank-you/") {
    //   FooterComponent = null;
  } else if (
    pathName === "/dubai-restaurant/" ||
    pathName === "/restaurant/" ||
    pathName === "/UK/"
  ) {
    FooterComponent = LandingPageFooter2;
  } else if (pathName === "/landing-page/") {
    FooterComponent = HospitalityFooter;
  } else {
    FooterComponent = Footer2;
  }

   if (pathName === "/thank-you/" || pathName === "/contact/" || pathName === "/contact-us/") {
    return null;
  }
  return <>{FooterComponent && <FooterComponent />}</>;
};

export default Footer;
