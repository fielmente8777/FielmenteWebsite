"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Map from "../../../../public/images/wordmap.webp";

import { RatingStar } from "@/utils/icons";
import { Form as ContactForm } from "../../../components";
function Form({
  title,
  color,
  boldText,
}: {
  title: string;
  color?: string;
  boldText?: string;
}) {
  const pathname = usePathname();
  



  
  return (
    <div className="grid lg:grid-cols-2 items-center  gap-8">
      <div
        className={
          pathname === "/"
            ? "w-full h-full"
            : "relative max-w-full aspect-[4/3]"
        }
      >
        {pathname !== "/" ? (
          <Image src={Map} alt="world-map" fill className="object-contain" />
        ) : (
          <div className="w-full h-full flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </div>
            <h2 className="text-center text-white text-4xl max-md:text-xl">
              India&apos;s Most Trusted <br />{" "}
              <strong className="text-orange-primary">
                Hospitality Marketing Company
              </strong>
            </h2>
            <div className="flex items-center justify-center lg:mt-8">
              <Image
                src="/images/Groupads.png"
                alt="ads"
                width={528}
                height={254}
              />
            </div>
            <p className="text-center text-white lg:mt-8">
              For effective Hospitality Marketing that stands out, fill out the
              form to get in touch with us today! Let’s elevate your Brand
              together!
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end max-md:justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Form;
