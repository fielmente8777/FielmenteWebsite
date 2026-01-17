"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import React from "react";
import { OutlineClose } from "@/utils/icons";
import PopUpForm from "@/components/Forms/PopUpForm";
import DataContext from "@/contextApi/DataContext";
import { usePathname } from "next/navigation";
import PopUpFormOld from "./Forms/PopUpFormOld";

const PopupFormNew = () => {
  const { isOpenPopupForm, setIsOpenPopupForm } = useContext(DataContext);
  const pathName = usePathname();

  const paths = [
    "/landing-page/",
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];
  const shouldRender = paths.includes(pathName);

  useEffect(() => {
    if (isOpenPopupForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenPopupForm]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center 
          bg-black/50 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
          ${isOpenPopupForm ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        onClick={() => setIsOpenPopupForm(false)}
      >
        <div
          className="w-full max-w-[45rem] mx-auto shadow-2xl rounded-lg overflow-hidden bg-white transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Content */}
          <div className="flex max-md:flex-col w-full">
            <div className="relative w-full md:aspect-[4/4] max-md:hidden md:block">
              <Image
                src={"/popup2.jpg"}
                alt="Hospitality Marketing"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setIsOpenPopupForm(false)}
                className="absolute top-1 right-1 z-50 w-8 h-8 flex justify-center items-center text-lg rounded-full text-orange-primary  transition-all duration-300"
                aria-label="Close popup"
              >
                <OutlineClose />
              </button>
              {!shouldRender ? <PopUpForm /> : <PopUpFormOld />}
              {/* <PopUpForm /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupFormNew;
