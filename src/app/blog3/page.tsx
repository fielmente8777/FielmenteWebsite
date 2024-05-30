import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/logo.webp";

function page() {
  return (
    <section>
      <div className="max-width md:py-20 py-10 flex gap-14">
        <div className="w-[80%]">
          <div className="flex justify-center gap-4 text-2xl text-black">
            <Link href={"/"}>Home »</Link>
            <Link href={"/"}>Blogs</Link>
            <p>
              How to start Cloud Kitchen in India – Ultimate Guide to open the
              Cloud Kitchen
            </p>
          </div>
          <div className="mt-8 flex flex-col">
            <p className="text-black text-lg font-semibold">
              Why is opening a cloud kitchen a good idea?
            </p>
            <p className="text-black text-lg font-semibold">
              Here’s what happens exactly in a cloud kitchen model: Orders come
              in, meals are cooked, packed, and then whisked immediately to
              their delivery locations by the assigned fleet.
            </p>
            <p className="text-black text-lg font-semibold">
              Why does this work? Because you’re cutting costs on front-of-house
              activities and concentrating on your food. With the availability
              of third-party services and the growing comfort of mobile
              ordering, this model seems just right to experiment with. There
              are more benefits involved like:{" "}
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Lower real estate costs
            </h2>
            <div className="mt-8 flex flex-col gap-2">
              <p className="text-black text-lg font-semibold">
                Since you’re removing table servicing out of the equation and
                offering a delivery-only service, you’ll save a huge amount on
                real estate costs.
              </p>
              <p className="text-black text-lg font-semibold">
                Cloud kitchens release you from the obligation of having space
                in a high-visibility area. Rather than paying for accessibility,
                better-developed complexes, or even a large parking space, you
                can concentrate on having enough kitchen space in a decent area
                near your target market.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Better expansion opportunities
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                The best thing about cloud kitchens is that you don’t need heavy
                investments to begin. You can start small but expand fast. Once
                you build a brand and get loyal customers, expanding to new
                localities and even new menu varieties gets easier. Let’s take
                the example of Faasos, today it runs 160+ kitchens and 4 brands
                including Faasos, Behrouz Biryani, Oven Story, and Firangi Bake.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Saving on overhead cos
            </h2>
            <p className="text-black text-lg mt-5">
              With a cloud kitchen, you save so much on overhead costs. You
              don’t need client-facing staff, decoration or space entrance,
              parking area, etc. Even if you have lower-priced menu items, your
              profit margins are likely to be better.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              How does a cloud kitchen work?
            </h2>
            <p className="text-black text-lg mt-5">
              Cloud kitchens are centralized licensed commercial food production
              facilities where anywhere from one or two to dozens of restaurants
              rent space to prepare delivery-optimized menu items.
            </p>
            <p className="text-black text-lg mt-5">
              One restaurant may run multiple brands or virtual restaurants, all
              operating under one roof, or the kitchen may be run like an
              incubator, shared by different purveyors. Picture a large
              warehouse with numerous stations (mini-restaurants) of stainless
              steel prep tables, hood vents, stoves, ovens, and sinks, each with
              its own orders coming in directly from customers.
            </p>{" "}
            <p className="text-black text-lg mt-5">
              Cloud kitchen menu items are optimized for ease of production and
              reliability of food quality upon delivery. Often physically
              located in out-of-town industrial complexes, cloud kitchens may
              offer driver parking, driver waiting areas (often with screens to
              monitor order times), and check-in stations for seamless driver
              pick-up. All are designed to get food out the door and into the
              customer’s hands as fast as possible.
            </p>{" "}
            <p className="text-black text-lg mt-5">
              Cloud kitchens are uniquely tech-enabled. They take advantage of
              the now ubiquitous food delivery apps on your smartphone, such as
              Uber Eats, Grubhub, and Doordash.
            </p>{" "}
            <p className="text-black text-lg mt-5">
              In doing so, they use large amounts of data to determine what
              types of foods to produce for specific neighborhoods and when the
              demand is likely to be greatest. For example, hot wings tend to be
              really popular between 11 pm-2 am near college campuses. This data
              is fueling rapid adaptation and optimization, almost in real time.
            </p>{" "}
            <p className="text-black text-lg mt-5">
              As the technology has matured, additional services have emerged to
              aggregate the various delivery apps into one portal, for easier
              production of multiple orders and delivery coordination as well as
              smart food purchasing and production software for decreased food
              waste and increased per-meal unit economics. We have only seen the
              tip of the iceberg of innovation in this space.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Competing in a crowded digital marketplace
            </h2>
            <p className="text-black text-lg mt-5">
              With no physical location, cloud kitchens don’t benefit from
              walk-in traffic. You are competing exclusively in a crowded online
              marketplace. The good news is, if your product is good enough, it
              should rise to the top thanks to social proof like good reviews
              and word-of-mouth referrals.
            </p>
            <p className="text-black text-lg mt-5">
              But you may find yourself having to pay for visibility on these
              platforms. That is, after all, how they make their money. You
              should be aware of this potential added cost, especially at the
              beginning, before you’re able to develop your own loyal following.
            </p>
          </div>{" "}
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Food quality and food safety
            </h2>
            <p className="text-black text-lg mt-5">
              With a delivery-only brand, your reputation relies on the food
              getting to the customer in perfect condition. Getting this right
              is the only way to get repeat orders. There are significant
              challenges in keeping the product at proper temperatures so it
              arrives as intended to the customer. Not just at the right
              temperature for them to best enjoy it but also to ensure it is
              safe to eat.
            </p>
            <p className="text-black text-lg mt-5">
              This means testing out different types of packaging and
              potentially investing in containers that are more expensive and
              harder to source. This is a cost that can quickly add up when you
              are pumping out a high volume of orders, but it is a vital
              consideration. Soggy, lukewarm food will guarantee failure. And
              one food-borne illness or outbreak and your brand is toast.
            </p>
          </div>{" "}
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Local regulation and licensure
            </h2>
            <p className="text-black text-lg mt-5">
              Food production is largely regulated at the local level by your
              health department. Since cloud kitchens are so new, regulators may
              be unfamiliar with the concept. They may start hitting you with
              unexpected requirements, or start treating you like a full-service
              restaurant.
            </p>
            <p className="text-black text-lg mt-5">
              Food production is largely regulated at the local level by your
              health department. Since cloud kitchens are so new, regulators may
              be unfamiliar with the concept. They may start hitting you with
              unexpected requirements, or start treating you like a full-service
              restaurant.
            </p>
          </div>{" "}
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Saving on overhead cos
            </h2>
            <p className="text-black text-lg mt-5">
              With a cloud kitchen, you save so much on overhead costs. You
              don’t need client-facing staff, decoration or space entrance,
              parking area, etc. Even if you have lower-priced menu items, your
              profit margins are likely to be better.
            </p>
          </div>{" "}
          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              Saving on overhead cos
            </h2>
            <p className="text-black text-lg mt-5">
              With a cloud kitchen, you save so much on overhead costs. You
              don’t need client-facing staff, decoration or space entrance,
              parking area, etc. Even if you have lower-priced menu items, your
              profit margins are likely to be better.
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
