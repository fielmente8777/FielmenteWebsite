import Image from "next/image";
import React from "react";

import Hotel1 from "../../../../public/images/HOTEL-1.webp";
import Hotel2 from "../../../../public/images/HOTEL-2.webp";
import Hotel3 from "../../../../public/images/HOTEL-3.webp";
import Hotel4 from "../../../../public/images/HOTEL-4.webp";

function MakeUsUnique() {
  return (
    <div>
      <div className="max-w-[500px] mx-auto flex flex-col gap-5 px-6">
        <h2 className="md:text-4xl text-3xl font-bold text-black text-center">
          WHAT MAKES US UNIQUE?
        </h2>
        <p className="sm:text-xl text-lg text-black text-center">
          Fielmente, the premier hospitality digital marketing consultant, knows
          that F&B businesses have unique needs. Our personalized strategies
          build trust, authority, and drive extreme growth, tailored to your
          hotel and restaurant’s success!
        </p>
      </div>

      <div className="grid grid-cols-4 mt-20">
        <div className="relative w-full aspect-[4/4]">
          <Image src={Hotel1} alt="hotel" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/4]">
          <Image src={Hotel2} alt="hotel" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/4]">
          <Image src={Hotel3} alt="hotel" fill className="object-cover" />
        </div>
        <div className="relative w-full aspect-[4/4]">
          <Image src={Hotel4} alt="hotel" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default MakeUsUnique;
