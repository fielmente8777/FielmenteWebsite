"use client";
import { usePathname } from "next/navigation";
import Form1Old from "./Form1Old";
import Form1New from "./Form1New";

const Form1 = () => {
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
  return !shouldRender ? <Form1New /> : <Form1Old />;
  // return <Form1New />;
};

export default Form1;
