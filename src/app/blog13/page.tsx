import React from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo.webp";

function page() {
  return (
    <section>
      <div className="max-width md:py-20 py-10 flex gap-14">
        <div className="w-[80%]">
          <div className="flex justify-center gap-4 text-2xl text-black">
            <Link href={"/"}>Home »</Link>
            <Link href={"/"}>Blogs »</Link>
            <p>
              {" "}
              7 Restaurant Marketing Strategies in India to Follow for Your
              Business
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            <p className="text-black text-lg font-semibold">
              Marketing in the restaurant industry is challenging. There are so
              many different jobs to do, so many aspects of customer service,
              and so many ways to do things wrong.
            </p>

            <p className="text-black text-lg font-semibold">
              But when done the right way, marketing in restaurants can result
              in much happier customers and much higher profits for everyone
              involved! This is why we’ve created this handy list of 7
              restaurant marketing strategies in India that will help you keep
              your customers happy while you grow your business.
            </p>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl font-bold text-black">
              Best 7 Restaurant Marketing Strategies in India
            </h1>
            <h2 className="font-bold text-5xl text-black mt-14">
              1) Listen To Your Customers:
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                The only way to know what works best for your restaurant is to
                listen to your customers. Your menu, the way you serve dishes,
                and even the design of your restaurant can all be improved by
                listening.
              </p>
              <p className="text-black text-lg font-semibold">
                Consider how many restaurants have outside seating during the
                summer. Not too many. But they do have a great deal of business
                in that section of their restaurant! Now consider how many
                restaurants have inside seating on a hot summer day and barely
                any business. Not too many. That is the power of hearing what
                customers want. Don’t try to be everything for everyone.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              2) Provide Something Different:
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                Regardless of what you eat, people need something to make them
                stop and do something different. Sometimes people just like to
                sit around and talk, and if you have seating for that, people
                will be much more likely to stop in for a bite to eat.
              </p>
              <p className="text-black text-lg font-semibold">
                This applies elsewhere in the restaurant as well. If you have an
                area where people can get outside and play games, or just sit
                and relax, then even more people will be inclined to come in for
                a bite to eat.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              3) Offer Complimentary Items:
            </h2>
            <p className="text-black text-lg mt-5">
              The best way to make a customer happy is to give them something
              for free in appreciation for their business. There is nothing
              wrong with surprising your customers with a complimentary
              appetizer, dessert, or even drink.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              4) Have A Unique Menu:
            </h2>
            <p className="text-black text-lg mt-5">
              Your menu should be different and unique. If you are not offering
              something that people cannot get anywhere else, then you may as
              well not have much of a restaurant at all.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              5) Send Out Loyalty Cards or Discounts:
            </h2>
            <p className="text-black text-lg mt-5">
              Loyalty programs are incredibly common, which is why they work so
              well. But the best loyalty program you can have is one where you
              send out cards or discounts to your customers that let them know
              how much you appreciate their business.
            </p>
          </div>{" "}
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              6) Maintain Quality Systems (i.e. HACCP):
            </h2>
            <p className="text-black text-lg mt-5">
              Having a clean restaurant is important, but having a clean
              restaurant that is free of contaminants is even more important.
              Food safety is one of the most vital parts of doing business in
              the hospitality industry and it has been proven time and time
              again that it can be an incredibly successful strategy for
              restaurants.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              7) Check-In on Facebook, Instagram, and Twitter:
            </h2>
            <p className="text-black text-lg mt-5"></p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">Final words</h2>
            <p className="text-black text-lg mt-5">
              This is not an exhaustive list of marketing strategies. This list
              was created to be complementary to the knowledge you already have
              and are familiar with. If you have a different marketing strategy
              that has helped you, or know that other strategies work, please
              feel free to share them in the comments below!
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
