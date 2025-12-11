"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext, useState } from "react";
import Logo from "../../../public/images/logo.webp";
import "./Header.scss";

import DataContext from "@/contextApi/DataContext";
import { OutlineDrpopdown } from "@/utils/icons";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { Nav_Links } from "./Nav_Links";

const Header2 = () => {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { setIsOpenPopupForm } = useContext(DataContext);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999]">
        <nav className="max-width nav-bar-container">
          {/* Logo Container***** */}
          <Link
            href={"/"}
            className="relative w-[160px] aspect-[2/.8] flex items-center justify-center"
            aria-label="fielmente-logo"
            onClick={() => {
              setIsNavOpen(false);
              setIsOpenPopupForm(true);
            }}
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
          <ul className="lg:flex hidden item-center gap-10">
            {Nav_Links.map((link, index) => {
              // const id = index + 1;
              return (
                <li key={index} className="relative nav">
                  <Link
                    href={link.src ? link.src : "#"}
                    className="relative text-nowrap py-2 capitalize flex items-center gap-1 text-dark"
                  >
                    {link.linkName}
                    <span className="span-border"></span>
                    {link.subLinks && (
                      <span className="icon duration-300 transition-all ease-in-out">
                        <OutlineDrpopdown />
                      </span>
                    )}
                  </Link>
                  {link.subLinks && (
                    <span className="nav-1">
                      {link.subLinks.map((subLink, index) => {
                        return (
                          <Fragment key={index + 1}>
                            <span className="relative group nav-2">
                              <Link
                                href={subLink.src ? subLink.src : "#"}
                                className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-dark ${pathname === subLink.src ? "bg-primary !text-white" : ""}`}
                              >
                                {subLink.linkName}
                                {subLink.subLinks && (
                                  <span className="group-hover:rotate-90 -rotate-90 duration-300 transition-all ease-in-out">
                                    <OutlineDrpopdown />
                                  </span>
                                )}
                              </Link>
                              {subLink.subLinks && (
                                <span className="nav-link">
                                  {subLink.subLinks?.map(
                                    (nestedSubLink, nestedIndex) => {
                                      return (
                                        <span
                                          className=""
                                          key={nestedIndex + 2}
                                        >
                                          <Link
                                            href={
                                              nestedSubLink.src
                                                ? nestedSubLink.src
                                                : "#"
                                            }
                                            className={`w-full text-nowrap py-2 px-4 flex items-center text-light gap-1 group capitalize hover:bg-gray-200 ${pathname === nestedSubLink.src ? "bg-primary !text-white" : ""}`}
                                          >
                                            {nestedSubLink.linkName}
                                          </Link>
                                        </span>
                                      );
                                    }
                                  )}
                                </span>
                              )}
                            </span>
                          </Fragment>
                        );
                      })}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setIsOpenPopupForm(true)}
            className="inline-flex max-lg:hidden items-center justify-center px-8 py-4 tracking-wide text-secondary border border-secondary rounded-lg hover:text-white hover:bg-secondary duration-300 ease-in-out active:scale-95"
          >
            Schedule Call
          </button>
          {/* Hamburger Menu **** */}
          <div className="xl:hidden z-50">
            {isNavOpen ? (
              <div className="text-white transition-transform duration-500 ease-in-out transform delay rotate-180 scale-150">
                <IoClose
                  color="black"
                  size={30}
                  onClick={() => setIsNavOpen(false)}
                />
              </div>
            ) : (
              <div className="transition-transform duration-500 ease-in-out transform rotate-0 scale-100">
                <HiMenuAlt3
                  color="black"
                  size={30}
                  onClick={() => setIsNavOpen(true)}
                />
              </div>
            )}
            {/* <AiOutlineMenu size={30} /> */}
          </div>
        </nav>

        {/* Bottom underline******* */}
        {/* <hr className="bg-white h-[0.18rem] w-[95%] mx-auto" /> */}

        {/* Mobile nav-bar***** */}
        <MobileNav setIsOpen={setIsNavOpen} isOpen={isNavOpen} />
      </header>

      <div className="md:mt-16 mt-24"></div>
    </>
  );
};

export default Header2;
