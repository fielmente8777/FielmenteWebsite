"use client";

import { countries } from "@/utils/countryCode";
import { OutlineMessage, OutlineUser } from "@/utils/icons";
import { OutlineCallIcon, OutlineMail } from "@/utils/newIcons";
import axios from "axios";
import React, { useState } from "react";

const Form1 = ({ bgWhite = false }: { bgWhite?: boolean }) => {
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
    // const formTestApi =
    //   "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/jncSLqGC#generic-webhook";
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
        <ChatIcon/>
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

export default Form1;

export const ChatIcon = () => (
  <svg
    width={76}
    height={54}
    viewBox="0 0 76 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3067_4691)">
      <path
        d="M66.6546 46.6798C69.1011 45.0589 71.1483 43.353 72.5789 40.7539C73.9601 38.2242 74.8377 35.4541 75.1636 32.5949C75.8109 27.0676 74.5866 21.2267 70.9354 16.8977C67.8438 13.231 63.4116 11.011 58.8038 9.8977C56.3353 9.30511 53.812 9.08724 51.2821 8.95435C52.7237 10.3269 53.8559 11.9761 54.9881 13.9652C57.9656 19.2158 57.6387 26.5121 55.1329 32.1134C52.998 36.8933 49.9305 40.231 45.7242 42.0981C41.518 43.9652 35.0693 44.974 30.1631 44.8716C29.755 44.8628 29.349 44.8498 28.9453 44.8323C30.2252 46.0275 31.6879 47.0136 33.2788 47.7539C37.4697 49.6994 42.3803 50.438 46.9683 50.5971C52.3733 50.7728 57.7707 50.0685 62.9464 48.5121H62.9596C62.9958 48.5006 63.034 48.4969 63.0718 48.501C63.1096 48.5051 63.1461 48.517 63.179 48.536H63.1965L63.2273 48.56L63.2426 48.5753C63.2487 48.5784 63.254 48.5829 63.258 48.5883C64.2717 49.6777 65.5246 50.5252 66.7687 51.3269C67.6571 51.9251 68.5835 52.4659 69.5421 52.9456C68.4033 51.0744 67.4009 49.1246 66.5427 47.1112C66.5221 47.0661 66.5123 47.0169 66.5142 46.9674C66.5095 46.9114 66.52 46.8551 66.5447 46.8045C66.5694 46.7539 66.6074 46.7109 66.6546 46.6798Z"
        fill="white"
      />
      <path
        d="M45.7124 42.1047C49.9187 40.2376 52.9861 36.8999 55.1211 32.1199C57.6268 26.5186 57.9538 19.2223 54.9763 13.9718C53.8441 11.9761 52.7119 10.3269 51.2703 8.96087C51.1079 8.96087 50.9455 8.94126 50.781 8.93472C50.476 8.91947 50.1688 8.9064 49.8616 8.89551C51.4168 10.8431 52.5803 13.0694 53.2889 15.4532C55.8583 24.2746 52.2708 35.2441 43.8847 39.719C39.6411 41.9848 34.4782 42.7931 29.719 43.0371C28.9071 43.0785 28.0953 43.0959 27.2812 43.0959C27.792 43.7131 28.344 44.2954 28.9335 44.8389C29.3372 44.8563 29.7431 44.8694 30.1512 44.8781C35.0574 44.9805 41.5062 43.9739 45.7124 42.1047Z"
        fill="#E6E6E6"
      />
      <path
        d="M73.9964 20.4313C71.9185 16.074 68.195 12.8343 63.8001 10.8953C59.2427 8.88659 54.251 8.29618 49.3031 8.20903C48.151 6.87044 46.8285 5.68622 45.3689 4.68616C41.4501 2.01295 36.5285 0.633869 31.8396 0.169817C29.1824 -0.0938 26.5011 -0.01319 23.8396 0.154566C21.178 0.322322 18.5011 0.629512 15.9054 1.36154C11.2186 2.6818 6.86973 5.16764 3.91416 9.07831C0.502201 13.5947 -0.533454 19.5206 0.245482 25.0391C0.645304 27.9676 1.61405 30.7911 3.09792 33.3528C4.50659 35.7493 6.48136 37.3594 8.75234 38.8844C7.78768 41.1142 6.6468 43.2647 5.34038 45.3158C5.19556 45.5336 5.43912 45.8975 5.7112 45.7951C7.07379 45.2853 8.34422 44.5053 9.5576 43.7188C10.771 42.9323 12.037 42.0674 13.0683 41.0151C17.4151 42.3033 21.9174 43.0018 26.4528 43.0914C27.3389 44.2341 28.3533 45.2728 29.4764 46.1872C33.5488 49.4552 39.0584 50.5663 44.1446 51.0761C50.4677 51.6669 56.8462 51.0343 62.9268 49.2134C63.9515 50.2657 65.2021 51.1241 66.4375 51.9171C67.6728 52.7101 68.9191 53.4835 70.2817 53.9933C70.5516 54.0957 70.7995 53.7428 70.6525 53.514C69.3426 51.4624 68.1981 49.3112 67.2296 47.0805C69.1802 45.7733 70.9904 44.4051 72.3201 42.4421C73.7374 40.2986 74.757 37.9205 75.3305 35.4204C76.5022 30.5119 76.184 25.0238 73.9964 20.4313ZM66.5362 47.1262C67.3944 49.1397 68.3968 51.0895 69.5357 52.9607C68.5771 52.4809 67.6507 51.9402 66.7622 51.3419C65.5225 50.5402 64.2696 49.684 63.2515 48.6034C63.2475 48.5979 63.2422 48.5934 63.2362 48.5903L63.2208 48.575L63.1901 48.5511H63.1725C63.1397 48.5321 63.1032 48.5201 63.0654 48.516C63.0276 48.5119 62.9893 48.5157 62.9531 48.5271H62.9399C57.7617 50.0813 52.362 50.7827 46.9553 50.6034C42.3673 50.4443 37.4567 49.7058 33.2658 47.7602C31.6749 47.0199 30.2122 46.0338 28.9323 44.8387C28.3427 44.2952 27.7908 43.7129 27.28 43.0957C28.0941 43.0957 28.9059 43.0783 29.7178 43.0369C34.477 42.7929 39.6399 41.9846 43.8834 39.7188C52.2696 35.2439 55.8571 24.2744 53.2877 15.453C52.5791 13.0692 51.4156 10.8429 49.8604 8.89531C50.1676 8.9062 50.4748 8.91927 50.7798 8.93452C50.9443 8.93452 51.1067 8.95195 51.2691 8.96067C53.799 9.09356 56.3157 9.31143 58.7907 9.90402C63.4183 11.0173 67.8418 13.2374 70.9334 16.904C74.5845 21.233 75.8088 27.074 75.1616 32.6012C74.8356 35.4604 73.958 38.2306 72.5768 40.7602C71.1462 43.3594 69.099 45.0652 66.6525 46.6862C66.6016 46.7176 66.5607 46.7627 66.5347 46.8164C66.5087 46.87 66.4985 46.9299 66.5055 46.989C66.5054 47.0364 66.5159 47.0833 66.5362 47.1262ZM13.0376 40.3201C12.9996 40.3072 12.9593 40.3029 12.9194 40.3074C12.8796 40.3119 12.8412 40.3252 12.8072 40.3463C12.8072 40.3463 12.8072 40.3463 12.794 40.3463C12.7815 40.3538 12.7697 40.3626 12.7589 40.3724L12.7458 40.3833C12.7458 40.3833 12.7348 40.3833 12.7304 40.3986C11.7189 41.4879 10.4638 42.3354 9.2197 43.1371C8.3317 43.7349 7.40605 44.2756 6.44844 44.7559C7.58571 42.8842 8.58733 40.9344 9.4457 38.9214C9.46612 38.8762 9.47659 38.8272 9.47642 38.7777C9.48209 38.7187 9.47139 38.6593 9.44547 38.6059C9.41956 38.5525 9.37942 38.5072 9.32941 38.4748C7.16594 37.0413 5.22409 35.5511 3.84395 33.318C2.53504 31.1597 1.61438 28.7918 1.12316 26.3201C0.137967 21.4661 0.616299 16.0543 3.02551 11.6557C8.06117 2.45958 19.2252 0.498793 28.8686 0.653477C37.9833 0.803804 47.5784 4.40947 51.6882 13.0304C55.6223 21.3092 52.9301 32.6382 45.3887 38.0151C41.2197 40.989 35.6179 41.9563 30.6042 42.318C24.6793 42.7167 18.7308 42.0389 13.0507 40.318L13.0376 40.3201Z"
        fill="#333333"
      />
      <path
        d="M30.5959 42.3226C35.6096 41.9609 41.2113 40.9936 45.3803 38.0198C52.9217 32.6341 55.614 21.3052 51.6798 13.035C47.5789 4.4141 37.9837 0.80844 28.8691 0.653756C19.2256 0.499072 8.06159 2.45986 3.02594 11.6559C0.612334 16.0546 0.13839 21.4599 1.13236 26.3291C1.62285 28.8031 2.54354 31.1733 3.85315 33.3335C5.2289 35.5666 7.17075 37.0568 9.33861 38.4904C9.38862 38.5227 9.42875 38.568 9.45467 38.6214C9.48059 38.6748 9.49129 38.7342 9.48562 38.7932C9.48579 38.8427 9.47532 38.8918 9.4549 38.937C8.59653 40.9499 7.59491 42.8997 6.45764 44.7714C7.41116 44.2857 8.33241 43.7399 9.21573 43.1374C10.4554 42.3357 11.7105 41.4795 12.7264 40.3988C12.7264 40.3988 12.7264 40.3989 12.7418 40.3836L12.755 40.3727C12.7657 40.3629 12.7775 40.3541 12.7901 40.3466C12.7901 40.3466 12.7901 40.3466 12.8032 40.3466C12.8373 40.3255 12.8756 40.3122 12.9155 40.3077C12.9553 40.3031 12.9957 40.3075 13.0336 40.3204H13.0468C18.7253 42.0416 24.6722 42.72 30.5959 42.3226Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3067_4691">
        <rect width={76} height={54} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
