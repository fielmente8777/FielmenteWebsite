import Link from "next/link";
import React from "react";

function IndustryWeServe() {
  return (
    <div>
      <div className="flex flex-col md:gap-8 gap-4 items-center">
        <h2 className="text-black md:text-6xl text-3xl font-semibold">
          Industries We Serve
        </h2>
        <p className="text-black text-center md:text-xl text-lg font-semibold ">
          Hospitality Marketing Agency with over 10+ Years of Experience in the
          industries we serve
        </p>
        <Link
          href={"/contact"}
          className="bg-black border border-black text-white sm:text-xl text-lg font-semibold py-6 px-10 rounded-2xl hover:bg-transparent hover:text-black transition-all duration-300 mt-10"
        >
          Get Free Consultation
        </Link>
      </div>

      <div className="lg:grid grid-cols-3 gap-8 md:mt-20 mt-10">
        <div className="h-5 bg-white border rounded-xl border-gray-300"></div>
        <div className="h-5 bg-white border rounded-xl border-gray-300 lg:mt-10 mt-8"></div>
        <div className="h-5 bg-white border rounded-xl border-gray-300 lg:mt-20 mt-8"></div>
      </div>
    </div>
  );
}

export default IndustryWeServe;
