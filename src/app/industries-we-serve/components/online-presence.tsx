import React from "react";
import Mobile from "../../../../public/images/online-mobile.webp";
import Image from "next/image";

function OnlinePresence({ title }: { title: string }) {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5 md:mt-20">
        <div>
          <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
            {title}
          </h2>
          <h2 className="md:text-6xl text-3xl text-black font-semibold md:mt-20 mt-5">
            Make online presence With more impactful creatives.
          </h2>
          <p className="text-gray-primary text-xl md:mt-20 mt-5">
            Enhance Your Online Presence with Compelling Restaurant Social Media
            Posts or Campaigns. Our Expert Social Media Management Team Delivers
            Engaging Creatives for Effective Audience Engagement.
          </p>
        </div>
        <div className="">
          <div className="relative max-w-[500px] mx-auto aspect-[4/4]">
            <Image src={Mobile} alt="mobile" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;
