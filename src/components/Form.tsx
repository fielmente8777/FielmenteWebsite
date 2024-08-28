"use client";
import { useRouter } from "next/navigation";

import { FillMail, FillMessage, FillPhone, FillUser } from "@/utils/icons";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);
    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          // Domain: "abhijeet", // Replace with your actual domain value
          Domain: "fielmente", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          // Subject: userMessage,
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setFormRes(false);
        // alert("message sended");
        router.push("/thank-you");
      } else {
        setFormRes(false);
        alert("somethin wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      icon: <FillUser />,
      type: "text",
      name: "name",
      placeholder: "Your Name*",
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "input",
      icon: <FillPhone />,
      type: "number",
      name: "phone",
      placeholder: "Your Phone*",
      value: userPhone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPhone(e.target.value);
      },
    },
    {
      tag: "input",
      icon: <FillMail />,
      type: "email",
      name: "email",
      placeholder: "Your Email*",
      value: userEmail,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
      },
    },
    {
      tag: "textarea",
      icon: <FillMessage />,
      type: "text",
      name: "",
      placeholder: "Your Message*",
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-md:px-4 p-6 max-md:mt-6 text-base rounded-lg lg:max-w-[24.875rem] w-full bg-[#F5F5F5]"
    >
      <h2 className="text-xl lg:text-[1.8rem]/[2.5rem] font-normal text-blue-primary">
        Get A <b className="capitalize">FREE</b> Consultation!
      </h2>
      {/* <p className="text-gray-primary max-md:text-sm">
        Fill in your details and a Venue Specialist will get back to you
        shortly.
      </p> */}

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex  gap-2 text-gray-primary p-3 border bg-white border-blue-primary rounded-md">
            <label
              htmlFor={data.name}
              className={`${data.tag === "textarea" && "mt-1"}`}
            >
              {data.icon}
            </label>
            {React.createElement(data.tag, {
              id: data.name,
              type: data.type,
              name: data.name,
              value: data.value,
              onChange: data.onChange,
              placeholder: data.placeholder,
              className:
                "w-full bg-transparent no-spinner resize-none focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary",
            })}
          </div>
        </div>
      ))}

      <button className="w-full text-center bg-orange-primary text-white justify-center border-orange-primary text-md px-8 py-2  font-semibold rounded-md hover:bg-white hover:text-orange-primary duration-300 active:scale-75 hover:scale-105 border border-blue-primary">
        {formRes ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
