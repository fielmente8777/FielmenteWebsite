"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import popupimg from "../../../../public/images/popup_img.webp";
import axios from "axios";
import { useRouter } from "next/navigation";

const PopupForm = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [formRes, setFormRes] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // useRef to store intervalId
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 5000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, []);

  const validateInputs = () => {
    let isValid = true;
    setErrorMessage("");
    setEmailErrorMessage("");

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      isValid = false;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    }

    return isValid;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    setLoader(true);

    try {
      const data = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "fielmente", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Description: userMessage,
        }
      );

      if (data.status) {
        setLoader(false);
        // Clear the form fields
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setUserMessage("");
        // Redirect to thank-you page with the user's name
        router.push(`/thank-you?name=${encodeURIComponent(userName)}`);
      } else {
        setPopupMsg("Something went wrong!");
        setOpenPopup(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMsg("Something went wrong!");
      setOpenPopup(true);
    } finally {
      setLoader(false);
    }
  };

  const formFields = [
    {
      type: "text",
      placeholder: "Full Name",
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUserName(e.target.value),
    },
    {
      type: "email",
      placeholder: "Email",
      value: userEmail,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUserEmail(e.target.value),
    },
    {
      type: "number",
      placeholder: "Phone",
      value: userPhone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUserPhone(e.target.value),
    },
  ];

  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full h-screen bg-black bg-opacity-70 top-0 left-0">
          <article className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-3 max-w-[310px] w-full border shadow-2xl p-4 relative rounded-md bg-white">
              <button
                onClick={closeModal}
                className="absolute top-[-15px] right-[-15px] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-red-500 hover:bg-red-600 text-white"
              >
                X
              </button>
              <div className="relative w-full h-[270px] aspect-[4/4]">
                <Image
                  src={popupimg}
                  alt="Hospitality Marketing"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <form
                className="flex flex-col gap-3 w-full px-1"
                onSubmit={submit}
              >
                {formFields.map((field, index) => (
                  <>
                    <div
                      className="p-2 border border-sky-400 rounded-md"
                      key={index}
                    >
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        // required
                        className="w-full no-spinner rounded-lg outline-none focus:outline-none text-sm text-slate-800 placeholder:text-slate-500"
                      />
                    </div>
                    {field.type === "number" && errorMessage && (
                      <p className="text-sm text-red-500 mt-2">
                        {errorMessage}
                      </p>
                    )}
                    {field.type === "email" && emailErrorMessage && (
                      <p className="text-sm text-red-500 mt-2">
                        {emailErrorMessage}
                      </p>
                    )}
                  </>
                ))}
                <div className="p-2 border border-sky-400 rounded-md">
                  <textarea
                    placeholder="Message"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="w-full outline-none rounded-lg focus:outline-none text-sm resize-none text-slate-800 placeholder:text-slate-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-dark text-white hover:bg-sky-900 transition w-full py-3 flex-auto flex justify-center items-center text-sm rounded-lg"
                  >
                    {loader ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </article>
        </section>
      )}
      {openPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>{popupMsg}</p>
            <button
              onClick={() => setOpenPopup(false)}
              className="mt-2 bg-blue-dark text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
