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
            <p> Restaurant Marketing in the MetaVerse – Web 3.0</p>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <p className="text-black text-lg font-semibold">
              Unless you have been living under a rock, the name MetaVerse might
              sound a bit familiar to you. Everyone everywhere is talking about
              it. There have been discussions and debates around this topic. But
              what really is MetaVerse?
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black mt-14">
              What is MetaVerse?
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                Well simply put into words, MetaVerse is basically a
                three-dimensional network of virtual reality worlds that only
                exists within the walls of reality headsets. It’s incredibly
                futuristic and something you see in science fiction novels and
                movies. But now as the human species is rapidly evolving and
                advancing its technology at a much faster rate, a “virtual life”
                is very much becoming the new hot topic considering how possible
                all of it looks now. Meta, formerly known as Facebook, has
                recently launched its Oculus VR Series which is one of the most
                advanced virtual reality headsets ever created.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              What can You do in MetaVerse?
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              <p className="text-black text-lg font-semibold">
                You can do anything that doesn’t necessarily require your
                physical presence. You can play games with friends and hang out
                in a comedy club afterward in the form of avatars. You can go to
                places that exist in a particular augmented reality (AR) which
                is just a computerized representation of the real world and just
                roam around and enjoy passing your time. You can also go to know
                places that do not exist and have a good time like in the case
                of several Virtual Reality where you can grab the rest of your
                gear and smash fruits with your virtual sword.
              </p>
              <p className="text-black text-lg font-semibold">
                But the real reason why we are here right now is to discuss the
                effect the MetaVerse will have on the food and beverage
                industry. How will restaurants and cafes work in such an
                environment? Well, we are here to help you break it down and
                make you understand the A to Z on this concern.
              </p>
              <p className="text-black text-lg font-semibold">
                But before that, we would like to talk about NFTs which is
                another one of the trending topics right now. To briefly
                understand non-fungible tokens, you will need to understand a
                form of currency exchange that is not really equal in value. 15
                coins can be traded for 15 coins because they possess the same
                value. However, every NFT is unique and can’t be equaled by a
                value.
              </p>
              <p className="text-black text-lg font-semibold">
                Now, moving on to ……
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-bold text-5xl text-black">
              The Effect of MetaVerse on the Food and Beverage Industry
            </h2>
            <p className="text-black text-lg mt-5">
              People are investing millions of dollars into the metaverse to
              acquire digital property. A lot of digital real estate is for sale
              now in the metaverse and investors are constantly trying to clasp
              the best deals. In the same way, the big names in the food and
              beverage industry are trying to come up with creative ways to
              invest in the food market of the metaverse. There have been talks
              of even exchanging real food for NFTs.
            </p>
            <p className="text-black text-lg mt-5">
              Imagine you are in the metaverse, and you acquire the NFTs to an
              XYZ restaurant through a game or by any other means, you could
              even end up exchanging that token for a real meal from the XYZ
              restaurant in the real world. All of this sounds exciting and
              confusing at the same time, doesn’t it?
            </p>
            <p className="text-black text-lg mt-5">
              We completely understand! MetaVerse is still in this very fetal
              stage and it will take a while before we start going into virtual
              restaurants with our friends and families as Avatars but a
              business needs to be prepared for the opportunity when it drops
              by.
            </p>
            <p className="text-black text-lg mt-5">
              But you shouldn’t be waiting for the expansion of MetaVerse in
              order to market your food and beverage business and should start
              now. If the marketing side of the business has a habit of
              overwhelming you, don’t worry about it, and go to
              www.fielmente.com to book your free hospitality marketing
              consulting now!
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
