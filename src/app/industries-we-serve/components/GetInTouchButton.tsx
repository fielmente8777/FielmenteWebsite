"use client";
import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";

const GetInTouchButton = () => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-orange-primary text-white py-3 px-6 border border-blue-dark rounded-lg text-lg font-semibold hover:bg-white hover:text-black duration-700 transition box_shadow"
    >
      Get In Touch Now
    </button>
  );
};

export default GetInTouchButton;
