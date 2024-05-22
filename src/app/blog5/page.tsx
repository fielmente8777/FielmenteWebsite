import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/logo.webp";
import { Accordin } from "../industries-we-serve/components/common-hero";

function page() {
  return (
    <section>
      <div className="max-width md:py-20 py-10 flex gap-14">
        <div className="w-[80%]">
          <div className="flex justify-center gap-4 text-2xl text-black">
            <Link href={"/"}>Home »</Link>
            <Link href={"/"}>Blogs</Link>
            <p>
              HTML or WordPress: Which one is Best for Your hotel/restaurant?
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <p className="text-black text-lg font-semibold">
              A website is a must if you own a restaurant and want to create a
              digital identity for your business. A website is important to
              interact with customers and attract potential customers through
              the website. Therefore, the website for any restaurant needs to be
              interactive. However, there are so many different website
              platforms that it becomes difficult to choose a feature-rich
              platform that provides you with all the features. One of the two
              most popular platforms for a restaurant website is HTML and
              WordPress, and people are usually confused between the two. Both
              types of websites have their advantage, but which is best for a
              restaurant? Let’s find out.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Restaurant website based on HTML
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                HTML is one of the most basic ways to create a website, but it
                can be customized to your favorite design through CSS. A
                restaurant website based on HTML will come with the most
                simple-to-use user interface, where you can easily provide
                textual, video, and image forms of information to the viewers.
                If you want your customers to open the website and other pages
                on it with speed, then HTML is the best option. You can provide
                the details of your restaurant, images of the recipes, pages to
                introduce your team, and more.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl text-black font-bold">Pros</h2>
              <ul className="list-outside ml-2">
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl text-black font-bold">Cons</h2>
              <ul className="list-outside ml-2">
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Restaurant website based on WordPress
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                HTML is one of the most basic ways to create a website, but it
                can be customized to your favorite design through CSS. A
                restaurant website based on HTML will come with the most
                simple-to-use user interface, where you can easily provide
                textual, video, and image forms of information to the viewers.
                If you want your customers to open the website and other pages
                on it with speed, then HTML is the best option. You can provide
                the details of your restaurant, images of the recipes, pages to
                introduce your team, and more.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl text-black font-bold">Pros</h2>
              <ul className="list-outside ml-2">
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl text-black font-bold">Cons</h2>
              <ul className="list-outside ml-2">
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
                <li className="text-lg text-black">
                  Easy to use and navigate for users
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">Verdict</h2>
            <p className="text-black text-lg mt-5">
              If you own a restaurant, a WordPress website makes a lot more
              sense as it allows you to interact with customers in multiple ways
              and guide them to your restaurant. Additionally, new plugins and
              features are regularly added to the platform, which helps to make
              the restaurant website even more attractive.
            </p>
            <p className="text-black text-lg mt-8">
              If you want the best restaurant website, contact Fielmente right
              now. We will design a great and interactive website for your
              customers, with almost every feature that is required for a
              branding restaurant to become a brand online.
            </p>
            <p className="text-black text-lg mt-8">
              Fielmente is the most popular choice for designing a restaurant
              website, so why wait? Create your website now and stand unique
              among the competition.
            </p>
          </div>
        </div>

        <div className="w-[20%]">
          <h2 className="text-center text-black text-3xl font-bold underline">
            Recent Blogs
          </h2>

          <div className="mt-10 flex flex-col gap-20">
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-lg font-bold">
                How to Reply to Google Business Profile and Facebook Feedback
              </Link>
              <span className="text-black">October 12, 2023</span>
              <p className="text-lg text-black mt-4">
                In recent times, opinions and reviews have become crucial for
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="relative w-full aspect-[4/1.5]">
              <Image
                src={Logo}
                alt="fielmente-log"
                fill
                className="object-contain"
              />
            </div>
            <form action="" className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 text-lg text-black w-full rounded-md outline-none border"
                />
              </div>

              <div>
                <button className="w-full bg-[#6664E4] text-lg py-4 rounded-md font-bold">
                  Get A Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
