"use client";
import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";

const ContactBtn = () => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-[#262C2E] text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-black duration-200"
    >
      Contact us
    </button>
  );
};

export default ContactBtn;
