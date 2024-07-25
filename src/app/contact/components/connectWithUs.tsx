"use client";
import Image from "next/image";
import React, { useState } from "react";
import Contact from "../../../../public/images/Contact.webp";
import axios from "axios";

function ConnectWithUs() {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    try {
      setLoader(true);
      const data = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "fielmente", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          // Subject: userMessage,
          Description: userMessage,
        }
      );
      if (data.status) {
        setLoader(false);
        setPopupMsg("You information has been Received");
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
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
        <div className="relative w-full aspect-[4/3.5] mt-10">
          <Image src={Contact} alt="Contact" className="object-cover rounded-3xl" />
        </div>
        <div className="p-10 shadow-xl rounded-xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-blue-dark sm:text-4xl text-3xl font-semibold">
              Connect with Us
            </h2>
            <div className="mt-10 flex flex-col md:gap-8 gap-4">
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
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="number" className="text-lg text-blue-dark">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="outline-none text-lg px-3 py-3 border border-gray-300 text-blue-dark rounded-2xl"
                />
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
                <button type="submit" className="text-white bg-blue-dark border border-blue-dark hover:bg-transparent hover:text-blue-dark duration-300 py-4 w-full text-xl rounded-2xl mt-5">
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
