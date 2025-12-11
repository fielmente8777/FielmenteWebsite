import React from "react";
import Mobile from "../../../../public/images/online-mobile.webp";
import Image from "next/image";

function OnlinePresence({ title }: { title: string }) {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5 md:mt-10">
        <div>
          <h1 className="text-[#2CBCA5] font-bold uppercase text-xl lg:text-start text-center tracking-wider">
            {title}
          </h1>
          <h2 className="md:text-5xl text-2xl text-black font-semibold md:mt-10 mt-5 lg:text-start text-center tracking-wider">
            Make online presence With more impactful creatives.
          </h2>
          <p className="text-gray-primary text-xl md:mt-10 mt-5 lg:text-start text-center">
            Enhance Your Online Presence with Compelling Restaurant Social Media
            Posts or Campaigns. Our Expert Social Media Management Team Delivers
            Engaging Creatives for Effective Audience Engagement.
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-full mx-auto aspect-[4/2]">
            <Image src={Mobile} alt="mobile" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;
