import React from "react";
import ConnectWithUs from "./components/connectWithUs";
import AccordinSection from "./components/Accordin";
import Image from "next/image";
import Contact2 from "../../../public/images/Contact2.webp";
import Contact3 from "../../../public/images/Contact3.webp";
import Contact4 from "../../../public/images/Contact4.webp";

import Logo from "../../../public/images/logo.webp";

function page() {
  return (
    <section className="bg-gradient">
      <div className="md:py-20 py-10">
        <div className="max-width">
          <ConnectWithUs />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <AccordinSection />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width grid lg:grid-cols-3 gap-6">
          <div className="relative lg:max-w-[400px] max-w-[280px] lg:mx-0 mx-auto aspect-[4/4]">
            <Image src={Contact2} alt="Contact_2" className="object-cover" />
          </div>
          <div className="relative lg:max-w-[400px] max-w-[280px] lg:mx-0 mx-auto aspect-[4/4]">
            <Image
              src={Contact3}
              alt="Contact_2"
              className="object-cover md:mt-32"
            />
          </div>
          <div className="relative lg:max-w-[400px] max-w-[280px] lg:mx-0 mx-auto aspect-[4/4]">
            <Image src={Contact4} alt="Contact_2" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="pb-20 md:flex justify-center items-center gap-4 max-w-[700px] w-full mx-auto hidden">
        <div>
          <Image src={Logo} alt="fielmente-logo" width={180} height={40} />
        </div>
        <form action="" className="w-full">
          <div className="bg-white rounded-full w-full flex gap-20 items-center">
            <input
              type="text"
              placeholder="Enter you email for updates"
              className="w-full px-5 py-5 text-lg outline-none text-black rounded-full"
            />
            <button className="bg-blue-dark px-6 py-5 rounded-full text-lg">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default page;
