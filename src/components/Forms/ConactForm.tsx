"use client";
import { useRouter } from "next/navigation";

import { FillMail, FillMessage, FillPhone, FillUser } from "@/utils/icons";
import axios from "axios";
import React, { useState } from "react";
import { countries } from "@/utils/countryCode";
import Link from "next/link";

const ContactForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false); // New state for checkbox
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

    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      setFormRes(false);
      return;
    }

    try {
      console.log(
        brandName,
        userName,
        userPhone,
        userEmail,
        userMessage,
        agreeToTerms
      );
      const { data } = await axios.post(
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/jncSLqGC#generic-webhook`, // test
        {
          name: `${firstName} ${lastName}`,
          email: userEmail,
          phone: `${countryCode}${userPhone}`,
          brandName: brandName,
          message: userMessage,
          agreeToTerms: agreeToTerms, // Include checkbox value in the request
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
        setBrandName("");
        setUserMessage("");
        setUserPhone("");
        setCountryCode("+91");
        setAgreeToTerms(false); // Reset checkbox
        setFormRes(false);
        window.open("/thank-you/", "_blank");
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
      icon: <FillUser />,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      required: true,
      value: firstName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
      },
    },
    {
      tag: "input",
      icon: <FillUser />,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      required: true,
      value: lastName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      icon: <FillPhone />,
      name: "phone",
      placeholder: "Your Phone",
      required: true,
      content: (
        <div className="flex gap-2 text-base border border-gray-300 rounded-[12px] p-4">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-auto bg-transparent text-[#333333] focus:outline-none"
            style={{ inlineSize: `${countryCode.length + 3}ch` }}
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
            placeholder="Type here..."
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent rounded-md placeholder:text-black-primary text-black no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      icon: <FillMail />,
      type: "text",
      name: "brandName",
      placeholder: "Business Name",
      required: false,
      value: brandName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrandName(e.target.value);
      },
    },
    {
      tag: "input",
      icon: <FillMail />,
      type: "email",
      name: "email",
      placeholder: "Business Email",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
  ];

  return (
    <div className="bg-white/10 relative after:absolute after:inset-0 after:blur-xl after:z-[-1] rounded-[40px] md:p-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-md:px-4 rounded-[2rem] p-6 border border-[#110D3C] max-md:mt-6 text-base  w-full bg-[#F5F5F5]"
      >
        <h2 className="text-2xl lg:text-[2.75rem]/[3.5rem] max-w-md font-normal text-blue-dark">
          Book Your FREE Consultation Today!
        </h2>

        {formData.map((data, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex flex-col gap-2 text-gray-primary">
              <label
                htmlFor={data.name}
                className={`md:text-xl text-lg text-[#363636]`}
              >
                {data.placeholder} <span className="text-red-500">*</span>
              </label>
              {data.tag === "div"
                ? data.content
                : React.createElement(data.tag, {
                    id: data.name,
                    type: data.type,
                    name: data.name,
                    value: data.value,
                    onChange: data.onChange,
                    placeholder: "Type here...",
                    required: data.required,
                    autoComplete: "off",
                    spellCheck: "false",
                    rows: data.tag === "textarea" ? 3 : undefined,
                    className:
                      "w-full bg-transparent border border-gray-300 p-4 md:text-xl no-spinner resize-none focus:outline-none rounded-[12px] valid:outline-blue-primary invalid:outline-Saffron-primary",
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
        {/* checkbox */}
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className=""
            required
          />
          <label htmlFor="checkbox" className="md:text-md text-gray-primary">
            I agree to receive calls, emails, and WhatsApp messages from
            Fielmente, including updates, promotional offers, and communication
            from our sales team. I understand that I can opt out or manage my
            preferences at any time. <br />
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-orange-primary"
            >
              Privacy Policy.
            </Link>
          </label>
        </div>

        <button className="w-full text-center bg-orange-primary text-white justify-center border-orange-primary text-md px-8 py-4 rounded-full font-semibold  hover:bg-white hover:text-orange-primary duration-300 active:scale-75 hover:scale-105 border border-blue-primary">
          {formRes ? (
            "Loading...."
          ) : (
            <span className="flex gap-2 items-center justify-center">
              <CallIcon /> Book A Call
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

export const CallIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
      fill="currentColor"
    />
  </svg>
);
