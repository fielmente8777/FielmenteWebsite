"use client";

import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";

const Contactbtn2 = () => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="bg-[#2CBCA5] px-10 py-3 border  text-xl rounded-xl hover:bg-transparent hover:text-black"
    >
      Contact us
    </button>
  );
};

export default Contactbtn2;
