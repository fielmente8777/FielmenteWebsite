"use client";

import DataContext from "@/contextApi/DataContext";
import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contactus = () => {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <button
      onClick={() => setIsOpenPopupForm(true)}
      className="border-b-2 border-b-[#6664E4] text-black text-xl font-medium mt-10 pb-1 hover:text-[#6664E4] duration-300 flex items-center gap-2"
    >
      Contact us <AiOutlineArrowRight />
    </button>
  );
};

export default Contactus;
