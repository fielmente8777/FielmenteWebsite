"use client";
import { usePathname } from "next/navigation";
import landingHeader from "./landingHeader";
import Header2 from "./header2";

const NavBar = () => {
  const pathname = usePathname();

  let HeaderComponent = null;

  if (pathname === "/landing-page/" || pathname === "/fielmente-lp/") {
    HeaderComponent = landingHeader;
  } else if (pathname === "/thank-you/") {
    HeaderComponent = null;
  } else {
    HeaderComponent = Header2;
  }

  return <>{HeaderComponent && <HeaderComponent />}</>;
};

export default NavBar;
