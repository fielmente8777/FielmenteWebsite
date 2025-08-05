"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import React from "react";
import { OutlineClose } from "@/utils/icons";
import PopUpForm from "@/components/Forms/PopUpForm";
import DataContext from "@/contextApi/DataContext";

const PopupFormNew = () => {
  const { isOpenPopupForm, setIsOpenPopupForm } = useContext(DataContext);

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
      <section
        className={`fixed inset-0 z-[999] bg-black bg-opacity-50 duration-700 ease-in-out transition-all ${isOpenPopupForm ? "block" : "hidden"}`}
        onClick={() => setIsOpenPopupForm(false)}
      >
        <article
          className={`${isOpenPopupForm ? "flex justify-center items-center h-full scale-100 opacity-100 max-md:px-4" : "h-0 scale-0 opacity-0"} transition-all duration-700 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex max-w-3xl w-full shadow-2xl relative rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => setIsOpenPopupForm(false)}
              className="absolute top-1 right-1 w-8 h-8 flex justify-center items-center text-lg rounded-full text-orange-primary bg-white z-10 transition-all duration-300"
              aria-label="Close popup"
            >
              <OutlineClose />
            </button>
            <div className="relative w-full md:aspect-[4/4] max-md:hidden">
              <Image
                src={"/popup2.jpg"}
                alt="Hospitality Marketing"
                fill
                className="object-cover"
                priority
              />
            </div>
            <PopUpForm />
          </div>
        </article>
      </section>
    </>
  );
};

export default PopupFormNew;
