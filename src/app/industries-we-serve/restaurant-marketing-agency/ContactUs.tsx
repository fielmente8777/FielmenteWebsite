"use client";
import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";

const ContactUs = () => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-blue-dark text-white py-3 px-6 border border-blue-dark rounded-lg text-lg font-semibold hover:bg-white hover:text-black duration-700 transition box_shadow"
    >
      Contact Us
    </button>
  );
};

export default ContactUs;
