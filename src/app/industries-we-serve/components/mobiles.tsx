import Image from "next/image";
import React from "react";
import Donner from "../../../../public/images/doner.webp";

function Mobiles() {
  return (
    <section>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        <div className="relative aspect-[4/5]">
          <Image src={Donner} alt="donner" fill className="object-contain" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src={Donner} alt="donner" fill className="object-contain" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src={Donner} alt="donner" fill className="object-contain" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src={Donner} alt="donner" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Mobiles;
