"use client";
import Image from "next/image";
import React, { useState } from "react";
import Contact from "../../../../public/images/Contact.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { countries } from "@/utils/countryCode";

function ConnectWithUs() {
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
      const data = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          // Domain: "fielmente",
          Domain: "abhijeet", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: `${countryCode}${userPhone}`,
          // Subject: userMessage,
          Description: userMessage,
        }
      );
      if (data.status) {
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
    <div>
      <div className="max-w-[600px] mx-auto flex flex-col md:gap-10 gap-4">
        <h2 className="text-lg text-[#2CBCA5] text-center font-bold uppercase">
          Contact Us
        </h2>
        <h3 className="md:text-5xl text-3xl text-blue-dark font-bold text-center">
          We’re here just for you.
        </h3>
        <p className="text-xl text-gray-primary text-center">
          We are always ready to lend an ear, offer advice and get your project
          over the line.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 items-center justify-center gap-6 mt-16">
        <div className="relative w-full aspect-[4/3] mt-10">
          <Image
            src={Contact}
            alt="Contact"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="px-10 py-7 shadow-xl rounded-xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-blue-dark sm:text-4xl text-3xl font-semibold">
              Connect with Us
            </h2>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-lg text-blue-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-lg text-blue-dark">
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={userEmail}
                  onChange={handleEmailChange}
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
                {emailErrorMessage && (
                  <p className="text-sm text-red-500 mt-2 lg:ps-5">
                    {emailErrorMessage}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="number" className="text-lg text-blue-dark">
                  Contact Number
                </label>
                {/* <input
                  type="text"
                  id="number"
                  value={userPhone}
                  onChange={handlePhoneChange}
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                /> */}
                <div className="w-full">
                  <div className="flex gap-2 text-base">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-auto px-1 py-3  rounded-xl text-[#333333] focus:outline-none"
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
                {errorMessage && (
                  <p className="text-sm text-red-500 mt-2 lg:ps-5">
                    {errorMessage}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="company-name"
                  className="text-lg text-blue-dark"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-dark border border-blue-dark hover:bg-transparent hover:text-blue-dark duration-300 py-4 w-full text-xl rounded-2xl mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;
