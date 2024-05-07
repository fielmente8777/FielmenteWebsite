import Link from "next/link";
import React from "react";

function IndustryWeServe() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-black text-6xl font-semibold">
          Industries We Serve
        </h2>
        <p className="text-black text-xl font-semibold ">
          Hospitality Marketing Agency with over 10+ Years of Experience in the
          industries we serve
        </p>
        <Link
          href={"/contact"}
          className="bg-black border border-black text-white text-xl font-semibold py-6 px-10 rounded-2xl hover:bg-transparent hover:text-black transition-all duration-300 mt-10"
        >
          Get Free Consultation
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-20">
        <div className="h-5 bg-white border rounded-xl border-gray-300"></div>
        <div className="h-5 bg-white border rounded-xl border-gray-300 mt-10"></div>
        <div className="h-5 bg-white border rounded-xl border-gray-300 mt-20"></div>
      </div>
    </div>
  );
}

export default IndustryWeServe;
