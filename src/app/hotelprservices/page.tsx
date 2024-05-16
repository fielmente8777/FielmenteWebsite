import Image from "next/image";
import Link from "next/link";
import React from "react";
import Book from "../../../public/images/aerial-view-barista-book-1024x1024.webp";
import Businessman from "../../../public/images/business-people-discussing-document-1.webp";

function page() {
  return (
    <section>
      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-black text-center sm:text-6xl text-3xl">
              Public-Relations & Communication
            </h2>
            <div className="flex justify-center mt-10">
              <Link
                href={"/contact"}
                className="bg-[#467FF7] border border-[#467FF7] px-16 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black hover:shadow-2xl duration-200"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-[4/4] mt-20">
            <Image
              src={Book}
              alt="book"
              fill
              className="object-cover
             "
            />
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="lg:w-[60%] relative aspect-[4/2.5] mt-20">
              <Image src={Book} alt="book" fill className="object-cover" />
            </div>

            <div className="lg:w-[40%]">
              <h2 className="text-blue-dark sm:text-6xl text-3xl font-bold">
                About Us
              </h2>
              <div className="flex flex-col gap-10 justify-center mt-10">
                <p className="sm:text-xl text-lg text-gray-primary">
                  Public relations (PR) helps build and maintain a positive
                  image, increase brand awareness, and ultimately attract more
                  customers. By working with media outlets and influencers, PR
                  professionals can generate publicity and coverage, which can
                  lead to increased visibility and credibility.
                </p>
                <p className="sm:text-xl text-lg text-gray-primary">
                  Overall, a strong PR strategy can be a valuable asset for any
                  hotel or restaurant looking to stand out in a competitive
                  market and attract more business.
                </p>
              </div>
              <div className="flex mt-10">
                <Link
                  href={"/"}
                  className="bg-[#467FF7] border border-[#467FF7] px-16 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black hover:shadow-2xl duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-black mt-10 grid lg:grid-cols-2 gap-10 py-32">
            <div
              className="flex items-center w-full aspect-[4/6]"
              style={{
                backgroundImage: `url(${Book.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h2 className="sm:text-6xl font-bold text-3xl px-10 w-[60%]">
                Organic Public Relations
              </h2>
            </div>
            <div className="flex flex-col gap-20 md:px-4 px-10">
              <p className="text-lg w-[80%] font-semibold">
                The PR campaign aims to position the brand as a visionary in
                Hospitality, Lifestyle, Travel, F&B, etc. Through Online PR,
                Offline PR, Cross affiliations, Press releases, etc., we’ll
                create a campaign highlighting the brand’s multifaceted
                personality.
              </p>
              <p className="text-lg w-[80%] font-semibold">
                In today’s digital age, Digital media is crucial, offering more
                space than traditional print media. We’ll target prominent
                sites, portals, mainlines, business media, regional, vernacular,
                etc.
              </p>
              <p className="text-lg w-[80%] font-semibold">
                Recommendations for highlighting Brand Name, GM Name, Yoga,
                Nature, and FNB on a retainer basis include:
              </p>

              <ul className="list-disc list-inside flex flex-col gap-8">
                <li className="text-lg font-semibold w-[80%]">
                  Authored Articles by GM across different subjects and genres.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Profiling opportunities in publications focusing on
                  credentials and achievements.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Industry stories featuring quotes by the GM in relevant
                  sectors.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Industry stories featuring quotes by the GM in relevant
                  sectors.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Press release dissemination mainly in digital media and
                  Regional media.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Collaboration with Bloggers/Influencers for social media
                  marketing.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Media FAM trips to familiarize media with the brand.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Positioning the GM as an expert in panel discussions and
                  speaker opportunities.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Participation in regional and national awards in the travel
                  and hospitality sector.
                </li>
                <li className="text-lg font-semibold w-[80%]">
                  Utilizing advertorial opportunities with CAT A media houses to
                  pitch promotional content.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-width">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
            <div className="lg:order-1 order-2">
              <div className="flex flex-col gap-6 lg:max-w-[400px] mx-auto">
                <h1 className="sm:text-6xl text-3xl text-black font-bold">
                  Option 1
                </h1>
                <ul className="list-disc list-inside flex flex-col gap-4">
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <div className="relative max-w-[500px] mx-auto aspect-[4/5]">
                <Image
                  src={Businessman}
                  alt="business-people-discussing"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:items-center mt-32">
            <div className="lg:order-1 order-2">
              <div className="relative w-full aspect-[4/2.6]">
                <Image
                  src={Businessman}
                  alt="business-people-discussing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <div className="flex flex-col gap-6 max-w-[400px]">
                <h1 className="sm:text-6xl text-3xl text-black font-bold">
                  Option 2
                </h1>
                <ul className="list-disc list-inside flex flex-col gap-4">
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                  <li className="text-black text-lg">
                    We can plan an authored article where the brand’s
                    spokesperson can share the brand’s details and other things
                    that need to be highlighted.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:items-center mt-32">
            <div className="lg:order-1 order-2">
              <div className="flex flex-col gap-6 max-w-[400px] mx-auto">
                <h1 className="sm:text-6xl text-3xl text-black font-bold">
                  Option 3
                </h1>
                <ul className="list-disc list-inside flex flex-col gap-4">
                  <li className="text-black text-lg italic">
                    05 Media coverages both in print and online platforms mixed
                    with CAT A and B publications. (This coverage can be in the
                    form of Profiling, Industry Story Participation, Regional
                    Media, Authored articles, Interview Interaction, and Press
                    Releases). Here, press release dissemination would be
                    counted as one coverage.
                  </li>
                  <li className="text-black text-lg italic">
                    Instagram Posts/Stories by Food and Travel Influencers who
                    have above 20K followers. (Barter or Paid). Here we can
                    mutually discuss the Bloggers/Influencers requirements every
                    month.
                  </li>
                  <li className="text-black text-lg italic">
                    Creating all the press information material for the client.
                    This will be based on the information that will be provided
                    by the client.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <div className="relative w-full aspect-[4/2.6]">
                <Image
                  src={Businessman}
                  alt="business-people-discussing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
