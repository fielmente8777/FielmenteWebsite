"use client";
import { Container, Section } from "@/components";
import { blogData } from "@/utils/blogdata";
import { BlogCard } from "./BlogCard";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BlogesSection = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [post, setpost] = useState(false);
  const [searchPost, setSearchPost] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const handleShowSearchedPost = () => {
    if (searchPost) {
      const results:any = blogData.filter(
        (post) =>
          post.title.toLowerCase().includes(searchPost.toLowerCase()) ||
          post.description?.toLowerCase().includes(searchPost.toLowerCase())
      );
      setFilteredPosts(results);
      setShowPosts(true);
    }
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  //   const [userPhone, setUserPhone] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [formRes, setFormRes] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  //   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  //     if (value.length <= 10) {
  //       setUserPhone(value);
  //       setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
  //     }
  //   };

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
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        {
          email: userEmail,
          name: userName,
          //   phone: `${userPhone}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setLoader(false);
        // // setPopupMsg("You information has been Received");
        router.push(`/thank-you/`);
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        // setUserPhone("");
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
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:grid grid-cols-2 gap-6 col-span-2">
            {blogData.slice(0, 3).map((item, index) => (
              <div key={index} className={`${index === 0 ? "col-span-2" : ""}`}>
                <BlogCard
                  //   key={index}
                  src={item.url}
                  alt={item.title}
                  title={item.title}
                  link={item.link}
                  description={item.description}
                  index={index}
                />
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-col gap-8 sticky top-3">
              <div className="grid grid-cols-3 items-center justify-center">
                <input
                  type="text"
                  placeholder="Search all post..."
                  value={searchPost}
                  onChange={(e) => setSearchPost(e.target.value)}
                  className="w-full border border-gray-400 py-2 px-4 col-span-2 outline-none"
                />
                <button
                  className="w-full bg-[#F5F5F5] border border-orange-primary hover:bg-orange-primary hover:text-white text-orange-primary py-2 px-6"
                  onClick={handleShowSearchedPost}
                >
                  Search
                </button>
              </div>
              <div className="w-full border border-blue-dark flex flex-col">
                <div className="relative w-full aspect-[4/2.1]">
                  <Image
                    src="/formbg.png"
                    alt="from bg"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 text-white p-6">
                    <h2 className="lg:text-3xl text-xl font-semibold">
                      Get the Fielmente Blogs in your inbox!
                    </h2>
                    <p className="text-base font-normal">
                      Sign up to our newsletter and receive fresh insights to
                      help guide you to success.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <form
                    className="flex flex-col gap-4 text-[#3B3B3B]"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 outline-none"
                      type="text"
                      placeholder="Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 outline-none"
                      type="email"
                      placeholder="Email Id"
                      value={userEmail}
                      onChange={handleEmailChange}
                    />
                    {/* <input
                    className="w-full bg-[#F1F1F1] rounded-sm p-3 no-spinners outline-none"
                    type="number"
                    placeholder="Phone Number"
                    value={userPhone}
                    onChange={handlePhoneChange}
                  /> */}
                    <button
                      className="bg-orange-primary text-white rounded-sm hover:bg-white hover:text-orange-primary border border-solid border-orange-primary py-3 w-full flex items-center justify-center font-medium"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-[#787878]">
                    By submitting this form you are confirming that you have
                    read and agree to Fielmente
                    <span className="text-[#F2B203]"> Terms</span> &
                    <span className="text-[#F2B203]"> Privacy Policy</span>.
                  </p>
                </div>
              </div>
              <aside className="w-full">
                {/* <div className="py-3"></div> */}
                <h2 className="text-2xl  font-bold capitalize text-blue-dark mb-3">
                  Recent Posts
                </h2>

                {blogData.slice(0, 6).map((item, i) => (
                  <div className="py-2 flex flex-col gap-2" key={i}>
                    <div>
                      <Link
                        href={`/${item.link}`}
                        className="text-base font-semibold text-black"
                      >
                        {item.title}
                      </Link>
                    </div>
                    {/* <small className="m-0 text-black text-sm font-bold">
                    {item.month} {item.date}
                  </small>
                  <div>
                    <p className="text-black text-base font-normal">
                      {item.desc}
                    </p>
                  </div> */}
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </div>
        <div className="py-10 flex justify-center">
          {!show ? (
            <button
              className="bg-[#F5F5F5] border border-orange-primary hover:bg-orange-primary hover:text-white text-orange-primary py-2 px-6 w-fit"
              onClick={() => setShow(!show)}
            >
              Show More Blogs
            </button>
          ) : (
            <div className="lg:grid grid-cols-3 gap-6 col-span-2">
              {blogData.slice(3, blogData.length).map((item, index) => (
                <div
                  key={index}
                  //   className={`${index === 0 ? "col-span-2" : ""}`}
                >
                  <BlogCard
                    key={index}
                    src={item.url}
                    alt={item.title}
                    title={item.title}
                    link={item.link}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default BlogesSection;
