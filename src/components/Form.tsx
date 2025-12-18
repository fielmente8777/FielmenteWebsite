"use client";

import { usePathname } from "next/navigation";
import FormNew from "./FormNew";
import FormOld from "./FormOld";

const Form = () => {
  const pathName = usePathname();
   const paths = [
    "/landing-page/",
    "/resort/",
    "/hospitality/",
    "/dubai-restaurant/",
    "/restaurant/",
    "/UK/",
    "/USA/",
  ];
  const shouldRender = paths.includes(pathName);
  return !shouldRender ? <FormNew /> : <FormOld />;
}

export default Form;