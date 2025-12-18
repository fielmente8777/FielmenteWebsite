"use client";

import { countries } from "@/utils/countryCode";
import { OutlineMessage, OutlineUser } from "@/utils/icons";
import { OutlineCallIcon, OutlineMail } from "@/utils/newIcons";
import axios from "axios";
import React, { useState } from "react";
import CustomCaptchaForm from "./CaptchaForm";
import { ChatIcon } from "./Form1New";

const Form1Old = ({ bgWhite = false }: { bgWhite?: boolean }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);
    

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    // const formApi =
    //   "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/jncSLqGC#generic-webhook"; //testapi/
    const formApi =
      "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook";
    try {
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        formApi,
        {
          // Domain: "fielmente",
          // Domain: "abhijeet",
          // email: userEmail,
          // Name: userName,
          // Contact: `${countryCode}${userPhone}`,
          // Description: userMessage,
          email: userEmail,
          name: userName,
          phone: `${countryCode}${userPhone}`,
          message: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setCountryCode("+91"); // Reset country code
        setFormRes(false);
        // router.push(`/thank-you/`);
        window.open("/thank-you/", "_blank");
        // router.push(`/thank-you/?name=${encodeURIComponent(userName)}`);
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "name",
      icon: <OutlineUser />,
      placeholder: "Your Name*",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      name: "phone",
      icon: <OutlineCallIcon />,
      placeholder: "Your Phone*",
      required: true,
      content: (
        <div className="flex gap-2 text-base">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-auto bg-transparent rounded-lg text-[#333333] focus:outline-none"
            style={{ inlineSize: `${countryCode.length + 2}ch` }}
            aria-label="Country Code"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            max={"9999999999"}
            placeholder="Your Phone Number*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent rounded-md placeholder:text-black-primary text-black no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      icon: <OutlineMail />,
      placeholder: "Your Email Id*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "textarea",
      type: "text",
      name: "",
      icon: <OutlineMessage />,
      placeholder: "Your Message*",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 max-md:px-4 p-6 max-md:mt-6 text-base rounded-[20px] w-full relative ${bgWhite && bgWhite ? "bg-white" : "bg-primary"}`}
    >
      <h2
        className={`text-xl  md:text-3xl text-center font-semibold ${!bgWhite && !bgWhite ? "text-white" : "text-primary"} `}
      >
        Get A FREE Consultation!
      </h2>
      <p
        className={`md:text-xl text-center ${!bgWhite && !bgWhite ? "text-white" : "text-primary"}`}
      >
        Let’s work on boosting your hotel’s profitability!
      </p>
      <span className="absolute top-5 right-7">
        <ChatIcon />
      </span>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex  gap-2 text-gray-primary p-4 border bg-white border-blue-primary rounded-[10px]">
            <label
              htmlFor={data.name}
              className={`${data.tag === "textarea" && "mt-1"}`}
            >
              {data.icon}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: data.name,
                  type: data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  placeholder: data.placeholder,
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: data.tag === "textarea" ? 3 : undefined,
                  className:
                    "w-full bg-transparent no-spinner resize-none focus:outline-none rounded-[12px] valid:outline-blue-primary invalid:outline-Saffron-primary",
                })}
          </div>
          {data.name === "phone" && errorMessage && (
            <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
          )}
          {data.name === "email" && emailErrorMessage && (
            <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
          )}
        </div>
      ))}
     
      <button className="w-full text-center bg-secondary text-white justify-center border-orange-primary text-md px-8 py-3  font-semibold rounded-full hover:bg-white hover:text-secondary duration-300 active:scale-75 hover:scale-[1.02] border">
        {formRes ? "Loading...." : <span>Submit</span>}
      </button>
    </form>
  );
};

export default Form1Old;