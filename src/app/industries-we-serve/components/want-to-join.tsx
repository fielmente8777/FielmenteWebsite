import Link from "next/link";
import React from "react";

function WantToJoin() {
  return (
    <section className="grid grid-cols-2 items-center">
      <div className="p-20">
        <h2 className="text-5xl font-bold">Want to join?</h2>
        <p className="text-xl text-gray-primary mt-6">
          Find a team of digital marketers you can rely on. Every day, we build
          trust through communication, transparency, and results.
        </p>
      </div>
      <div className="p-20">
        <div className="flex justify-center">
          <Link
            href={"/contact"}
            className="bg-[#2CBCA5] px-12 py-4 rounded-xl text-xl hover:bg-white hover:text-black duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WantToJoin;
