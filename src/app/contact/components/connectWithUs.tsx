import Image from "next/image";
import React from "react";
import Contact from "../../../../public/images/Contact.webp";

function ConnectWithUs() {
  return (
    <div>
      <div className="max-w-[600px] mx-auto flex flex-col md:gap-10 gap-4">
        <h2 className="text-lg text-[#2CBCA5] text-center font-bold uppercase">
          Contact Us
        </h2>
        <h3 className="md:text-5xl text-3xl text-blue-dark font-bold text-center">
          We’re here just for you.
        </h3>
        <p className="text-xl text-gray-primary text-center">
          We are always ready to lend an ear, offer advice and get your project
          over the line.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 items-center gap-6 mt-16">
        <div className="relative w-full aspect-[4/3.5]">
          <Image src={Contact} alt="Contact" className="object-cover" />
        </div>
        <div className="p-8 shadow-xl rounded-xl">
          <form>
            <h2 className="text-blue-dark sm:text-4xl text-3xl font-semibold">
              Connect with Us
            </h2>
            <div className="mt-10 flex flex-col md:gap-8 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-lg text-blue-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-lg text-blue-dark">
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="number" className="text-lg text-blue-dark">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="company-name"
                  className="text-lg text-blue-dark"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div>
                <button className="text-white bg-blue-dark border border-blue-dark hover:bg-transparent hover:text-blue-dark duration-300 py-4 w-full text-xl rounded-2xl mt-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;
