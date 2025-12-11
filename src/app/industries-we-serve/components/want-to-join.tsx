"use client";
import DataContext from "@/contextApi/DataContext";
import React, { useContext } from "react";

function WantToJoin() {
  const { setIsOpenPopupForm } = useContext(DataContext);
  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="lg:p-20">
        <h2 className="sm:text-4xl text-xl lg:text-start text-center font-bold">Want to join?</h2>
        <p className="sm:text-lg text-base lg:text-start text-center text-gray-primary mt-6">
          Find a team of digital marketers you can rely on. Every day, we build
          trust through communication, transparency, and results.
        </p>
      </div>
      <div className="lg:p-20">
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsOpenPopupForm(true)}
            className="bg-[#2CBCA5] px-10 py-3 rounded-xl sm:text-xl text-lg hover:bg-white hover:text-black duration-300"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

export default WantToJoin;
