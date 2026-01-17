"use client";

import { Container, Section } from "@/components";
import { blogData } from "@/utils/blogdata";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BlogCard } from "./BlogCard";

const BlogesSection = () => {
  const router = useRouter();

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogData);
  const [showMore, setShowMore] = useState(false);

  // Form States
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Search handler
  const handleSearch = () => {
    const results = blogData.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(results);
    setSearchQuery("");
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        { email: userEmail, name: userName },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setUserName("");
        setUserEmail("");
        // router.push("/thank-you/");
        window.open("/thank-you/", "_blank");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  console.log(blogData.map((item) => item.link));
  return (
    <Section className="mt-12 bg-[#F7F5F1]">
      <Container>
        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-10 gap-y-4">
          {blogData.map((item, index) => (
            <BlogCard
              key={index}
              src={item.url}
              alt={item.title}
              title={item.title}
              link={item.link}
              description={item.description}
              index={index}
            />
          ))}
        </div>
        {/* Blog Posts */}
        {/* <div className="lg:grid grid-cols-2 gap-6 col-span-2"> */}
        {/* {filteredPosts
              .slice(0, showMore ? filteredPosts.length : 3)
              .map((item, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <BlogCard
                    src={item.url}
                    alt={item.title}
                    title={item.title}
                    link={item.link}
                    description={item.description}
                    index={index}
                  />
                </div>
              ))} */}

        {/* Show More Button */}
        {/* <div className="py-10 flex lg:hidden justify-center">
              <button
                className="bg-[#F5F5F5] border border-orange-primary hover:bg-orange-primary hover:text-white text-orange-primary py-2 px-6"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More Blogs"}
              </button>
            </div> */}
        {/* </div>  */}

        {/* Sidebar */}
        {/* <div>
            <div className="flex flex-col gap-8 lg:sticky lg:top-3"> */}
        {/* Search Bar */}
        {/* <div className="grid grid-cols-3 items-center">
                <input
                  type="text"
                  placeholder="Search all posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-400 py-2 px-4 col-span-2 outline-none"
                />
                <button
                  className="w-full bg-[#F5F5F5] active:scale-95 border border-orange-primary hover:bg-orange-primary hover:text-white text-orange-primary py-2 px-6"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div> */}

        {/* Newsletter Subscription */}
        {/* <div className="w-full border border-blue-dark flex flex-col">
                <div className="relative w-full aspect-[4/3] lg:aspect-[4/2.1]">
                  <Image
                    src="/formbg.png"
                    alt="form background"
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
                      required
                    />
                    <input
                      className="w-full bg-[#F1F1F1] rounded-sm p-3 outline-none"
                      type="email"
                      placeholder="Email"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        setEmailError("");
                      }}
                      required
                    />
                    {emailError && (
                      <span className="text-red-500 text-sm">{emailError}</span>
                    )}
                    <button
                      className="bg-orange-primary active:scale-95 text-white rounded-sm hover:bg-white hover:text-orange-primary border border-solid border-orange-primary py-3 w-full flex items-center justify-center font-medium"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Subscribe"}
                    </button>
                  </form>
                  <p className="text-sm text-[#787878]">
                    By submitting this form you are confirming that you have
                    read and agree to Fielmente
                    <span className="text-[#F2B203]"> Terms</span> &
                    <span className="text-[#F2B203]"> Privacy Policy</span>.
                  </p>
                </div>
              </div> */}

        {/* Recent Posts */}
        {/* <aside className="w-full">
                <h2 className="text-2xl font-bold capitalize text-blue-dark mb-3">
                  Recent Posts
                </h2>
                {blogData.slice(0, 6).map((item, i) => (
                  <div className="py-2 flex flex-col gap-2" key={i}>
                    <Link
                      href={`/${item.link}`}
                      className="text-base font-semibold text-black"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </aside> */}
        {/* </div>
          </div>
        </div> */}

        {/* Show More Button */}
        {/* <div className="py-10 lg:flex hidden justify-center">
          <button
            className="bg-[#F5F5F5] border border-orange-primary hover:bg-orange-primary hover:text-white text-orange-primary py-2 px-6"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More Blogs"}
          </button>
        </div> */}
      </Container>
    </Section>
  );
};

export default BlogesSection;
