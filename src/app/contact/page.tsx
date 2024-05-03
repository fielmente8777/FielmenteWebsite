import React from "react";
import ConnectWithUs from "./components/connectWithUs";
import AccordinSection from "./components/Accordin";
import Image from "next/image";
import Contact2 from "../../../public/images/Contact2.webp";
import Contact3 from "../../../public/images/Contact3.webp";
import Contact4 from "../../../public/images/Contact4.webp";

function page() {
  return (
    <section className="bg-gradient">
      <div className="py-20">
        <div className="max-width">
          <ConnectWithUs />
        </div>
      </div>

      <div className="py-20">
        <div className="max-width">
          <AccordinSection />
        </div>
      </div>

      <div className="py-20">
        <div className="max-width flex gap-6">
          <div className="relative max-w-[400px] aspect-[4/4]">
            <Image src={Contact2} alt="Contact_2" className="object-cover" />
          </div>
          <div className="relative max-w-[400px] aspect-[4/4]">
            <Image
              src={Contact3}
              alt="Contact_2"
              className="object-cover mt-32"
            />
          </div>
          <div className="relative max-w-[400px] aspect-[4/4]">
            <Image src={Contact4} alt="Contact_2" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
