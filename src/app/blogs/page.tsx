import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Test from "../../../public/images/Bookingman.webp";
// import { blogCardData } from "../blogCard";
import { blogData } from "../../utils/blogdata";
import { Metadata } from "next";
import Banner from "./Components/Banner";
import ContactForm from "@/components/ConactForm";
import { Container, Section } from "@/components";
import BlogesSection from "./Components/BlogesSection";

export const metadata: Metadata = {
  title: "Blogs - Fielmente",
  description:
    "Another milestone in Fielmente’s journey 8 Marketing Strategies for Food &amp; Beverage Industry to Plan in 2022 How SEO helps to boost restaurant business Top 3 Food &amp; Beverage Business Pitches on Shark Tank India Restaurant Marketing in the MetaVerse – Web 3.0 Facebook Twitter LinkedIn Blogs Fielmente",
};

export default function Home() {
  return (
    // <section>
    //   <div className="py-8">
    //     <div className="flex justify-center gap-4 text-xl text-black">
    //       <Link href={"/"} className="text-blue-500">
    //         Home »
    //       </Link>
    //       <Link href={"/blogs"} className="text-blue-500">
    //         Blogs »
    //       </Link>
    //     </div>
    //     <h2 className="text-black text-4xl font-semibold text-center mt-4">
    //       Blog
    //     </h2>
    //   </div>

    //   <div className="lg:grid grid-cols-3 gap-10 max-width py-6">
    //     {blogData.map((item, index) => (
    //       <BlogCard
    //         key={index}
    //         src={item.url}
    //         alt={item.title}
    //         title={item.title}
    //         link={item.link}
    //       />
    //     ))}
    //   </div>
    // </section>
    <main className="bg-white">
      <Banner />
      <BlogesSection />
    </main>
  );
}
