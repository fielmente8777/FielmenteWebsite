"use client";
import Image from "next/image";
import Map from "../../../../public/images/wordmap.webp";

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

  return (
    <div className="grid lg:grid-cols-2 items-center  gap-8">
      <div className="relative max-w-full aspect-[4/3]">
        <Image src={Map} alt="world-map" fill className="object-contain" />
      </div>

      <div className="flex justify-end max-md:justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Form;
