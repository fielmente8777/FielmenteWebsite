"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { contacts } from "../../contact";

function Whatsapp() {
  const pathname = usePathname();
  const ukno = "+447438375533";
  const indNo = contacts.phone_1;
  // const indNo = "+919501868775";

  const pathNameInclude1 = ["/landing-page/"];
  const pathNameInclude2 = ["/UK/", "/USA/", "/dubai-restaurant/","/landing-page/"];

  if (pathname === "/thank-you/") {
    return null;
  }
  return (
    <>
      <div
        // className={`fixed z-20 cursor-pointer lg:left-10 left-4 bottom-28`}
        className={`fixed z-20 cursor-pointer ${!pathNameInclude2.includes(pathname) ? "lg:left-10 left-4 bottom-28" : "lg:right-10 right-4 bottom-10"}`}
      >
        <Link
          href={`https://wa.me/${pathname === "/UK/" ? ukno.replace(/ /g, "") : indNo.replace(/ /g, "")}?text=Hello+I+would+like+to+know+more+about+Fielmente+Hospitality+Marketing+Agency`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full flex shadow-2xl items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={29} color="white" />
        </Link>
      </div>
    </>
  );
}

export default Whatsapp;

// https://api.whatsapp.com/send/?phone=919501868775&text=Hello+I+would+like+to+know+more+about+Fielmente+Hospitality+Marketing+Agency%21&type=phone_number&app_absent=0
