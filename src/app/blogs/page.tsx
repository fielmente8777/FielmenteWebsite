import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Test from "../../../public/images/Bookingman.webp";
// import { blogCardData } from "../blogCard";
import { blogData } from "../../utils/blogdata";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { params: {} },
  ];
}

export const metadata: Metadata = {
  title: "Blogs fielmente",
  description: "",
};

export default function Home() {
  return (
    <section>
      <div className="py-20">
        <div className="flex justify-center gap-4 text-2xl text-black">
          <Link href={"/"} className="text-blue-500">
            Home »
          </Link>
          <Link href={"/blogs"} className="text-blue-500">
            Blogs »
          </Link>
        </div>
        <h2 className="text-black text-6xl font-semibold text-center mt-4">
          Blog
        </h2>
      </div>

      <div className="lg:grid grid-cols-3 gap-14 max-width py-20">
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
    <div className="rounded-2xl shadow-md group lg:mb-0 mb-5 hover:shadow-2xl">
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
      <div className="p-10 flex justify-center flex-col items-center">
        <Link href={link} className="text-black text-2xl font-bold text-center">
          {title}
        </Link>
        <div className="flex justify-center mt-5">
          <Link href={link} className="text-xl text-[#28209F] font-bold">
            READ MORE »
          </Link>
        </div>
      </div>
    </div>
  );
};
