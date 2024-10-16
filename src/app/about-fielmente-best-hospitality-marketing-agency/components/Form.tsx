"use client";
import Image from "next/image";
import React, { useState } from "react";
import Map from "../../../../public/images/wordmap.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { countries } from "@/utils/countryCode";

import { Form as ContactForm } from "../../../components";
function Form({ title, color }: { title: string; color?: string }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code

  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const router = useRouter();

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

    try {
      setLoader(true);
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
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
        setLoader(false);
        // setPopupMsg("You information has been Received");
        router.push(`/thank-you?name=${encodeURIComponent(userName)}`);
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setCountryCode("+91");
        setUserPhone("");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };

  const onClose = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="grid lg:grid-cols-2 items-center  gap-8">
      <div className="relative max-w-full aspect-[4/3]">
        <Image src={Map} alt="world-map" fill className="object-contain" />
      </div>
      {/* <form
        className="w-full bg-[#F5F5F5] px-6 py-8 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-black text-xl">{title}</h2>
        <div className="flex flex-col gap-5 mt-6">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full outline-none px-5 py-3 text-black text-base rounded-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              value={userEmail}
              onChange={handleEmailChange}
              className="w-full outline-none px-5 py-3 text-black text-base rounded-xl"
            />
            {emailErrorMessage && (
              <p className="text-sm text-red-500 mt-2 lg:ps-5">
                {emailErrorMessage}
              </p>
            )}
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="w-full">
              <div className="flex gap-2 text-base">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="py-3 w-auto flex items-center rounded-xl text-[#333333] focus:outline-none"
                  style={{ inlineSize: `${countryCode.length + 2}ch` }}
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.code}
                      className="text-black p-0 bg-gray-100"
                    >
                      {`${country.code}`}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  max={"9999999999"}
                  placeholder="Your Phone*"
                  value={userPhone}
                  onChange={handlePhoneChange}
                  className="w-full rounded-xl px-2 py-3  placeholder:text-black-primary text-black no-spinner focus:outline-none"
                />
              </div>
              {errorMessage && (
                <p className="text-sm text-red-500 mt-2 lg:ps-5">
                  {errorMessage}
                </p>
              )}
            </div>
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full outline-none px-5 py-3 text-black text-base rounded-xl"
            />
          </div>
          <div>
            <textarea
              rows={3}
              placeholder="Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full outline-none px-5 py-3 text-black text-base rounded-xl resize-none"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className={`w-full py-3 rounded-full text-base text-white font-bold border ${color
                  ? "bg-black hover:bg-[#F26633] hover:text-white border-black"
                  : "bg-[#F26633] hover:bg-white hover:text-[#F26633] border-[#F26633]"
                }`}
            >
              Submit
            </button>
          </div>
        </div>
      </form> */}
      <div className="flex justify-end max-md:justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Form;
