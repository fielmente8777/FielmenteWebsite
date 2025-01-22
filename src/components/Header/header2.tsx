"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { Nav_Links } from "./Nav_Links";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";
import { TiArrowSortedDown } from "react-icons/ti";

import { FaPhone } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { OutlineDrpopdown } from "@/utils/icons";
import { PopupForm } from "@/app/landing-page/components";

const Header2 = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

 // const [hasShownPopup, setHasShownPopup] = useState(false); // Prevent multiple triggers

  // useEffect(() => {
  //   if (pathName === "/thank-you/") return;
  //   // Detect mouse movement near the top for desktop
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (e.clientY < 50 && !hasShownPopup) {
  //       setShowModal(true);
  //       setHasShownPopup(true);
  //     }
  //   };

  //   // Detect touch and scroll behavior for mobile/tablet
  //   const handleTouchOrScroll = () => {
  //     if (!hasShownPopup) {
  //       setShowModal(true);
  //       setHasShownPopup(true);
  //     }
  //   };

  //   // Detect visibility change
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "hidden" && !hasShownPopup) {
  //       setShowModal(true);
  //       setHasShownPopup(true);
  //     }
  //   };

  //   // Handle back button press
  //   const handleBackButton = () => {
  //     if (!hasShownPopup) {
  //       setShowModal(true);
  //       setHasShownPopup(true);
  //     }
  //   };

  //   // Add a fake history state to detect back button
  //   const addFakeHistoryState = () => {
  //     history.pushState({}, "", window.location.href);
  //   };

  //   // Add event listeners
  //   window.addEventListener("mousemove", handleMouseMove); // For desktop
  //   window.addEventListener("scroll", handleTouchOrScroll, { passive: true }); // For mobile/tablet scroll
  //   window.addEventListener("touchmove", handleTouchOrScroll, {
  //     passive: true,
  //   }); // For mobile/tablet touch
  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   window.addEventListener("popstate", handleBackButton);

  //   // Add fake history state
  //   addFakeHistoryState();

  //   // Cleanup listeners
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("scroll", handleTouchOrScroll);
  //     window.removeEventListener("touchmove", handleTouchOrScroll);
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //     window.removeEventListener("popstate", handleBackButton);
  //   };
  // }, [hasShownPopup, pathName]);


  

  return (
    <>
      {pathname === "/thank-you/" ? (
        ""
      ) : (
        <header>
          <nav className="max-width nav-bar-container">
            {/* Logo Container***** */}
            <Link
              href={"/"}
              className="relative w-[160px] aspect-[2/.8] flex items-center justify-center"
              aria-label="fielmente-logo"
              onClick={() => {
                setIsNavOpen(false);
                setShowModal(true);
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

            {/* Links Container******** */}
            <div className="links-container">
              {Nav_Links.map((Links, Index) => {
                return (
                  <div key={Index} className="flex items-center gap-6">
                    <div className="links">
                      <Link
                        href={Links.src}
                        className="flex items-center gap-2"
                      >
                        {Links.linkName}{" "}
                        {Links.subLinks && (
                          <button className="dropdown-1">
                            <OutlineDrpopdown />
                          </button>
                        )}
                      </Link>
                      {Links.subLinks && (
                        <ul className="sub-links-container">
                          {Links.subLinks.map((SubLinks, Index) => {
                            return (
                              <li key={Index} className="sub-links">
                                <Link
                                  href={SubLinks.src}
                                  className="flex items-center gap-2"
                                >
                                  {SubLinks.linkName}{" "}
                                  {SubLinks.subLinks && (
                                    <button className="dropdown-2">
                                      <OutlineDrpopdown />
                                    </button>
                                  )}
                                </Link>
                                {SubLinks.subLinks && (
                                  <ul className="child-sub-links-container z-20">
                                    {SubLinks.subLinks.map(
                                      (SubLinks, Index) => {
                                        return (
                                          <li key={Index} className="sub-links">
                                            <Link
                                              href={SubLinks.src}
                                              className="z-20"
                                            >
                                              {SubLinks.linkName}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    {/* For Right Border***** */}
                    {/* {Index >= 0 && Index < Nav_Links.length - 1 && (
                      <div className="w-[0.14rem] h-6 bg-black"></div>
                    )} */}
                  </div>
                );
              })}
              {/* <div>
                <Link
                  href={"tel:+919501868775"}
                  className="flex contact-container items-center gap-1 border border-blue-dark rounded-md bg-blue-dark px-4 py-2 text-white"
                >
                  <OutLineCall /> +919501868775
                </Link>
              </div> */}
              <div>
                <button
                  // href={"tel:+919501868775"}
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1 bg-[#F26633] hover:bg-white hover:text-[#F26633] hover:scale-95 hover:shadow-lg transition ease-in-out duration-300 active:scale-100 border border-[#F26633]  px-4 py-3 text-white"
                >
                  {/* <OutLineCall /> */}
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Contact Container***** */}

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
      )}
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </>
  );
};

export default Header2;


