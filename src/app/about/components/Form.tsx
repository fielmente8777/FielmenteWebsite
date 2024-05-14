import Image from "next/image";
import React from "react";
import Map from "../../../../public/images/wordmap.webp";

function Form({ title, color }: { title: string; color?: string }) {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-8">
      <div className="relative max-w-full aspect-[4/3]">
        <Image src={Map} alt="word-map" fill className="object-contain" />
      </div>
      <form className="w-full bg-[#F5F5F5] p-10 rounded-3xl">
        <h2 className="text-center text-black text-xl">{title}</h2>
        <div className="flex flex-col gap-5 mt-6">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full outline-none px-5 py-3 text-black md:text-lg rounded-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full outline-none px-5 py-3 text-black md:text-lg rounded-xl"
            />
          </div>
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full outline-none px-5 py-3 text-black md:text-lg rounded-xl"
            />
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full outline-none px-5 py-3 text-black md:text-lg rounded-xl"
            />
          </div>
          <div>
            <textarea
              rows={2}
              placeholder="Message"
              className="w-full outline-none px-5 py-3 text-black md:text-lg rounded-xl"
            />
          </div>

          <div className="">
            <button
              className={`w-full py-5 rounded-full text-lg`}
              style={{
                background: color ? "black" : "#F26633",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
