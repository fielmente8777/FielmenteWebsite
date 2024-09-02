"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
const LatestPosts = () => {
  return (
    <section className="py-12">
      <div className="max-width">
        <h2 className="text-center font-bold text-4xl text-black mb-6">
          Latest Posts
        </h2>

        <div className="px-2">
          <Swiper
            autoplay={{
              delay: 2400,
            }}
            speed={900}
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
          >
            {blogsData.map((item, i) => (
              <SwiperSlide key={i} className="p-4">
                <div className=" text-start overflow-hidden shadow-xl rounded-lg bg-white">
                  <Link
                    href={`/${item.link}`}
                    className="text-black text-md h-[16rem] w-full bg-no-repeat bg-cover bg-center inline-block"
                    style={{
                      backgroundImage: `url(${item.url})`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-start justify-end p-3"
                      style={{
                        backgroundColor:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.74) 44.44%, #000 100%)",
                      }}
                    >
                      <span
                        className="uppercase px-2 py-1 rounded-2xl text-white"
                        style={{
                          backgroundColor: "#F26633",
                          fontSize: ".7rem",
                        }}
                      >
                        {item.imgtitle}
                      </span>
                    </div>
                  </Link>
                  <div className="p-9 flex flex-col gap-4">
                    <Link
                      href={`/${item.link}`}
                      className="font-bold text-base text-black"
                      style={{ height: "04rem" }}
                    >
                      {item.title}
                    </Link>
                    <Link
                      href={`/${item.link}`}
                      className="text-base text-black uppercase font-bold"
                    >
                      read more <small>&gt;&gt;</small>
                    </Link>
                  </div>
                  <div className="flex border-t">
                    <p className="font-light  ps-12 py-2 mb-0 text-sm text-black/70">
                      {/* {item.month} {item.date} */}
                      October 12, 2023 • No Comments
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

interface blog_type {
  url: string;
  imgtitle: string;
  title: string;
  month: string;
  date: string;
  desc: string;
  link: string;
}
const blogsData: blog_type[] = [
  {
    url: "/images/blog/asset-2.png",
    imgtitle: "hotel",
    title: "How to Reply to Google business Profile and Facebook Feedback",
    month: "October ",
    date: "12, 2023",
    desc: `In recent times, opinions and reviews have become crucial for`,
    link: "respond-to-facebook-google-reviews",
  },
  {
    url: "/images/blog/asset-3.png",
    imgtitle: "hotel",
    title: "Why do you need Fielmente Hospitality Marketing Agency?",
    month: "October ",
    date: "11, 2023",
    desc: `A hospitality digital marketing agency brings its clients revenue with`,
    link: "hospitality-consultants-in-india",
  },
  {
    url: "/images/blog/asset-4.jpeg",
    imgtitle: "Branding",
    title:
      "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
    month: "August ",
    date: "26, 2023",
    desc: `Why is opening a cloud kitchen a good idea? Here’s`,
    link: "how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen",
  },
  {
    url: "/images/blog/asset-2.png",
    imgtitle: "hotel",
    title: "How to Reply to Google business Profile and Facebook Feedback",
    month: "October ",
    date: "12, 2023",
    desc: `In recent times, opinions and reviews have become crucial for`,
    link: "respond-to-facebook-google-reviews",
  },
  {
    url: "/images/blog/asset-3.png",
    imgtitle: "hotel",
    title: "Why do you need Fielmente Hospitality Marketing Agency?",
    month: "October ",
    date: "11, 2023",
    desc: `A hospitality digital marketing agency brings its clients revenue with`,
    link: "hospitality-consultants-in-india",
  },
  {
    url: "/images/blog/asset-4.jpeg",
    imgtitle: "Branding",
    title:
      "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
    month: "August ",
    date: "26, 2023",
    desc: `Why is opening a cloud kitchen a good idea? Here’s`,
    link: "how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen",
  },
];
