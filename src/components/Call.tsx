"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCall } from "react-icons/io5";
import { contacts } from "../../contact";

function Call() {
  const pathname = usePathname();

  const ukNo = "+44 7438375533";
  // const indNo = contacts.phone[1];
  const indNo =
    contacts.phone.length > 1 ? contacts.phone[1] : contacts.phone[0];
  // Hide on thank you page
  if (pathname === "/thank-you/") {
    return null;
  }

  // Detect UK pages (works for /UK/anything)
  const isUK = pathname.startsWith("/UK/");

  const selectedNumber = isUK ? ukNo : indNo;

  // Remove spaces for tel link
  const formattedNumber = selectedNumber.replace(/\s+/g, "");

  return (
    <div className="fixed bottom-10 lg:left-10 left-4 z-20 cursor-pointer">
      <Link
        href={`tel:${formattedNumber}`}
        aria-label="Call Us"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 hover:shadow-2xl transition-all"
      >
        <IoCall size={29} color="white" />

        {/* Hidden text for GTM + Accessibility */}
        <span className="sr-only">Call Us</span>
      </Link>
    </div>
  );
}

export default Call;
