import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Test from "../../../public/images/Bookingman.webp";
// import { blogCardData } from "../blogCard";
import { blogData } from "../../utils/blogdata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Fielmente",
  description: "Another milestone in Fielmente’s journey 8 Marketing Strategies for Food &amp; Beverage Industry to Plan in 2022 How SEO helps to boost restaurant business Top 3 Food &amp; Beverage Business Pitches on Shark Tank India Restaurant Marketing in the MetaVerse – Web 3.0 Facebook Twitter LinkedIn Blogs Fielmente",
};

export default function Home() {
  return (
    <section>
      <div className="py-8">
        <div className="flex justify-center gap-4 text-xl text-black">
          <Link href={"/"} className="text-blue-500">
            Home »
          </Link>
          <Link href={"/blogs"} className="text-blue-500">
            Blogs »
          </Link>
        </div>
        <h2 className="text-black text-4xl font-semibold text-center mt-4">
          Blog
        </h2>
      </div>

      <div className="lg:grid grid-cols-3 gap-10 max-width py-6">
        {blogData.map((item, index) => (
          <BlogCard
            key={index}
            src={item.url}
            alt={item.title}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

const BlogCard = ({
  src,
  alt,
  title,
  link,
}: {
  src?: string | StaticImageData;
  alt: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="rounded-2xl shadow-xl group lg:mb-0 mb-5 hover:shadow-lg">
      {src && (
        <div className="relative w-full aspect-[4/2.5] overflow-hidden rounded-2xl">
          <Link href={link}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover rounded-2xl group-hover:scale-110 transition duration-300"
            />
          </Link>
        </div>
      )}
      <div className="px-10 py-4 flex justify-center flex-col items-center">
        <Link href={link} className="text-black text-lg font-bold text-center">
          {title}
        </Link>
        <div className="flex justify-center mt-5">
          <Link href={link} className="text-lg text-[#28209F] font-bold">
            READ MORE »
          </Link>
        </div>
      </div>
    </div>
  );
};
