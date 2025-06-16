"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import popupimg from "../../../../public/images/popup_img.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { countries } from "@/utils/countryCode";
import React from "react";
import { Form } from "@/components";
import { OutlineClose } from "@/utils/icons";
import PopUpForm from "@/components/Forms/PopUpForm";
const PopupForm = ({
  setShowModal,
  showModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  // useRef to store intervalId
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 45000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);



  

  return (
    <>
      <section className={`fixed inset-0 z-[999] bg-black bg-opacity-50 duration-700 ease-in-out transition-all ${showModal ? "block" : "hidden"}`}>
        <article className={`${showModal ? "flex justify-center items-center h-full scale-100 opacity-100 max-md:px-4" : "h-0 scale-0 opacity-0"} transition-all duration-700 ease-in-out`}>
          <div className="flex max-w-3xl w-full shadow-2xl relative rounded-lg overflow-hidden bg-white">
          {/* <div className="flex flex-col gap-3 max-w-[400px] w-full shadow-2xl p-4 relative rounded-md"> */}
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 w-8 h-8 flex justify-center items-center text-lg rounded-full text-orange-primary bg-white z-10 transition-all duration-300"
            >
              <OutlineClose />
            </button>
            <div className="relative w-full md:aspect-[4/4] max-md:hidden">
              <Image
                src={"/popup1.jpg"}
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

      {openPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-dark bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>{popupMsg}</p>
            <button
              onClick={() => setOpenPopup(false)}
              className="mt-2 bg-blue-dark text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
