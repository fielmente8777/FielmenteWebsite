"use client";
import Header from "./Header";
import Header2 from "./Header2";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const HeaderComponent =
    pathName === "/" ? Header : pathName === "/landingpage" ? Header2 : null;
    
  return <>{HeaderComponent && <HeaderComponent />}</>;
};

export default Navbar;
