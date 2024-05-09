import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/footer-fielmente.webp";

function Footer2() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-width">
        <div className="flex flex-col gap-8">
          <h2 className="text-center text-gray-primary text-4xl">Find Us On</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <Link
              href={
                "https://www.instagram.com/fielmente_marketing_agency?igshid=MzMyNGUyNmU2YQ%3D%3D"
              }
              target="_blank"
              className="text-blue-dark text-4xl font-semibold md:text-center"
            >
              Instagram
            </Link>
            <Link
              href={
                "https://www.facebook.com/fielmentebusiness?mibextid=ViGcVu"
              }
              target="_blank"
              className="text-blue-dark text-4xl font-semibold md:text-center"
            >
              Facebook
            </Link>
            <Link
              href={
                "https://twitter.com/i/flow/login?redirect_after_login=%2Ffieladvisors"
              }
              target="_blank"
              className="text-blue-dark text-4xl font-semibold md:text-center"
            >
              Twitter
            </Link>
            <Link
              href={"https://www.linkedin.com/company/fielmente/"}
              target="_blank"
              className="text-blue-dark text-4xl font-semibold md:text-center"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-gray-primary text-xl text-center">
            Hotel Marketing Agency | Restaurant Marketing Agency | Hotel
            Marketing Company | Hotel Digital Marketing | Hotel Website
            Development | Hotel Social Media Management | Restaurant Marketing
            Agency in India | Restaurant Digital Marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:mt-32 mt-12">
          <div className="col-span-2 flex flex-col md:gap-20 gap-8">
            <div>
              <Image src={Logo} alt="fielmente-logo" />
            </div>
            <p className="text-gray-primary text-xl md:w-[60%]">
              Office Address – Level 2, Augusta Point, Golf Course Rd, Parsvnath
              Exotica, Sarswati Kunj II, DLF Phase 5, Sector 53, Gurugram,
              Haryana 122002
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-blue-dark text-3xl font-bold">
                Let’s Stay Connected
              </h2>
              <div className="w-full bg-white rounded-md flex items-center py-4 px-5">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full outline-none bg-transparent text-lg text-black"
                />
                <button className="text-orange-primary font-medium text-lg capitalize">
                  send
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-blue-dark text-3xl font-bold">
                To Know More
              </h2>
              <div className="w-full flex md:flex-row flex-col md:gap-16 md:items-center text-gray-primary sm:text-xl text-lg">
                <Link href={"tel:+919501868775"}>+91 9501868775</Link>
                <Link href={"mailto:sachin@fielmente.com"}>
                  sachin@fielmente.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-16 text-gray-primary text-xl mt-10">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms of Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
