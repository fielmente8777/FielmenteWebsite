import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const RecentBlogs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const router = useRouter();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
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
      setFormRes(false);
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      setFormRes(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          Domain: "fielmente",
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setFormRes(false);
        router.push(`/thank-you?name=${encodeURIComponent(userName)}`);
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setFormRes(false);
    }
  };

  return (
    <div className="">
      <aside className="w-full lg:py-[4.5rem] py-4 lg:px-8">
        {/* <div className="py-3"></div> */}
        <h2 className="text-2xl  font-bold capitalize text-black underline text-center lg:mb-8">
          Recent Blogs
        </h2>

        {blogsData.map((item, i) => (
          <div className="py-3 flex flex-col gap-2" key={i}>
            <div>
              <Link
                href={`/${item.link}`}
                className="text-xl font-semibold text-black"
              >
                {item.title}
              </Link>
            </div>
            <small className="m-0 text-black text-sm font-bold">
              {item.month} {item.date}
            </small>
            <div>
              <p className="text-black text-base font-normal">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}

        <div className="p-2">
          <Image src={Logo} loading="lazy" width={280} height={120} alt="log" />
        </div>

        <form
          className="p-1 flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="text"
              className="w-full text-black text-base outline-none focus:outline-none"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="email"
              className="w-full text-black text-base outline-none focus:outline-none"
              placeholder="Email"
              value={userEmail}
              onChange={handleEmailChange}
            />
          </div>
          {emailErrorMessage && (
            <p className="text-red-500 text-sm">{emailErrorMessage}</p>
          )}
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="number"
              className="w-full text-black text-base outline-none focus:outline-none no-spinner"
              placeholder="Phone No"
              value={userPhone}
              onChange={handlePhoneChange}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm"> {errorMessage}</p>
          )}
          <div className="w-full p-2 border border-black rounded-md bg-white">
            <input
              type="text"
              className="w-full text-black text-base outline-none focus:outline-none"
              placeholder="Business"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
          <div className="w-full">
            <button
              type="button"
              className="w-full py-2 bg-[#6664E4] text-white rounded-2xl text-base font-bold capitalize"
            >
              {formRes ? "Loading...." : "get a consultation"}
            </button>
          </div>
        </form>

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}
      </aside>
    </div>
  );
};

export default RecentBlogs;

const blogsData = [
  {
    title: "How to Reply to Google business Profile and Facebook Feedback",
    month: "October ",
    date: "12, 2023",
    desc: `In recent times, opinions and reviews have become crucial for`,
    link: "respond-to-facebook-google-reviews",
  },
  {
    title: "Why do you need Fielmente Hospitality Marketing Agency?",
    month: "October ",
    date: "11, 2023",
    desc: `A hospitality digital marketing agency brings its clients revenue with`,
    link: "hospitality-consultants-in-india",
  },
  {
    title:
      "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
    month: "August ",
    date: "26, 2023",
    desc: `Why is opening a cloud kitchen a good idea? Here’s`,
    link: "how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen",
  },
];
