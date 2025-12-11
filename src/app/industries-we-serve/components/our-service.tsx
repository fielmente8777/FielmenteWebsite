import Image from "next/image";
import React from "react";
import Man from "../../../../public/images/coats-hanging-rack-with-fur-collar-them-1.webp";

function OurService() {
  return (
    <section>
      <h2 className="md:text-4xl text-2xl text-center font-bold">
        Our Services
      </h2>
      <p className="text-center sm:text-lg text-base mt-6">
        Wanna taste the ultimate hospitality success? Rocket your hotel’s
        visibility with our expert SEO, captivating website development, social
        media magic, targeted Google Ads, and influencer prowess. Industries we
        serve trust our hospitality digital marketing!
      </p>

      <div className="grid lg:grid-cols-2 items-center gap-20 mt-20">
        <div className="flex flex-col gap-8">
          <h2 className="md:text-4xl/[3rem] text-2xl font-bold lg:text-start text-center">
            Our Expertise : Your Tremendous Business Growth Awaits
          </h2>
          <p className="sm:text-lg text-gray-primary text-base lg:text-start text-center">
            Click the true potential of your business as thriving destinations
            with our unmatched hospitality digital marketing solutions.
          </p>
          <p className="sm:text-lg text-gray-primary text-base lg:text-start text-center">
            Tantalize taste buds and elevate your business’s success with
            Fielmente – The premier Hospitality marketing agency in the
            industries we serve!
          </p>
          <div className="flex justify-around gap-2 items-center lg:mt-12">
            <div>
              <h3 className="md:text-4xl text-xl font-bold text-center text-cream-primary">
                150 +
              </h3>
              <p className="text-base max-md:text-sm  text-center font-bold">BUSINESS PARTNERS</p>
            </div>
            <div>
              <h3 className="md:text-4xl text-xl font-bold text-center text-cream-primary">
                72%
              </h3>
              <p className="text-base max-md:text-sm text-center font-bold">BUSINESS GROWTH</p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto relative aspect-[4/2.5]">
          <Image
            src={Man}
            alt="man"
            className="object-contain rounded-2xl"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default OurService;
