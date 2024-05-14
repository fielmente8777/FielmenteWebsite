import Image from "next/image";
import React from "react";
import Manwithdocuments from "../../../public/images/briefing-staff-hotel-restaurant-1.png";

function page() {
  return (
    <section>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-5 mt-20">
            <div>
              <h2 className="text-[#2CBCA5] font-bold uppercase text-2xl">
                OUR HOSPITALITY MARKETING SERVICES
              </h2>
              <h2 className="md:text-3xl text-3xl text-black font-bold md:mt-20 mt-5">
                Boost Your Business with Fielmente, India's top Hospitality
                Marketing Services!
              </h2>
              <p className="text-gray-primary text-xl mt-5">
                Attention, savvy business owners! Release the true potential of
                your online presence with Fielmente, your go-to hospitality
                marketing services in India.
              </p>

              <p className="text-gray-primary text-xl mt-5">
                Let our experts empower your business with tailored strategies,
                setting new standards for success in the hospitality industry!
              </p>
            </div>
            <div className="">
              <div className="relative max-w-[500px] mx-auto aspect-[4/4]">
                <Image
                  src={Manwithdocuments}
                  alt="mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-width">
          <h2 className="text-black text-center text-4xl font-bold">
            What We Offer
          </h2>
          <p className="text-black text-center text-xl mt-10">
            Want to embrace the Digital Frontier? Boost your hospitality
            business with our cutting-edge Hospitality Marketing Services and
            Hospitality Digital Marketing Services. Conquer the online realm,
            attract a broader audience, and experience a surge in bookings. It’s
            time to embrace the power of the digital world and release your
            business’s true potential!
          </p>
        </div>
      </div>

      {/* Industries We Serve:  */}
      <div>
        <div className="max-width grid grid-cols-2 gap-10">
          <div className="relative w-full aspect-[4/2.4]">
            <Image
              src={Manwithdocuments}
              alt="man-with-documents"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="">
            <h2 className="text-5xl text-black font-bold">
              Industries We Serve:
            </h2>
            <div className="text-black text-3xl font-bold text-center mt-5 flex gap-6 justify-center">
              <p> Hotels</p>
              <p>Restaurants Cloud</p>
              <p>Kitchens</p>
            </div>
            <p className="text-xl text-black mt-10">
              Fielmente is a place, where we excel in revolutionizing your
              business! As the finest hospitality marketing agency in India, we
              exclusively cater to hotels, cloud kitchens, and restaurants.
              Elevate your brand’s presence, thrive in competition, and allure
              countless guests with our exceptional hospitality marketing
              services. Let us be your key to success in the dynamic world of
              hospitality!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
