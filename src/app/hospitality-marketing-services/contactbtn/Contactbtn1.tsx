"use client";

import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";

const Contactbtn1 = () => {
    const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-black px-10 py-3 border text-white border-black text-xl rounded-xl hover:bg-transparent hover:text-black"
    >
      Contact us
    </button>
  );
};

export default Contactbtn1;
