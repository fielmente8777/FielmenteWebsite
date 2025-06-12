"use client";
import Link from "next/link";
import LatestPosts from "./LatestPosts";
import RecentBlogs from "./RecentBlogs";
import { blogtype } from "../../../utils/blogdata";
import Image from "next/image";
import { Container, Section } from "@/components";
import { CircleCallIcon } from "@/utils/icons";

interface DynamicBlogProps {
  blog: blogtype;
}

const DynamicBlog: React.FC<DynamicBlogProps> = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section className="pt-7 md:pt-12">
      <div className="max-width">
        {/* <div className="lg:grid grid-cols-4 gap-8"> */}
        <article className="col-span-3 mb-8">
          <div className="mb-3">
            <div className="w-full relative aspect-[4/3] md:aspect-[4/1.7] overflow-hidden rounded-2xl">
              <Image
                src={blog.url ? blog.url : ""}
                alt={blog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#000000]/50">
                <h1 className="font-semibold text-white md:text-5xl/tight text-xl text-center md:mx-12 mx-8">
                  {/* <Link href="/" className="text-blue-500">
                  Home »
                </Link>{" "}
                <Link href="/blogs" className="text-blue-500">
                  Blogs »
                </Link>{" "} */}
                  {blog.title}
                </h1>
              </div>
            </div>
          </div>
          {blog.addimg && (
            <div className="">
              <div className="relative max-w-full h-max aspect-[4/1] overflow-hidden rounded-2xl text-start">
                <Link href={blog.link}>
                  <Image
                    src={blog.addimg}
                    alt={blog.title}
                    fill
                    className="object-contain rounded-2xl"
                  />
                </Link>
              </div>
            </div>
          )}
          <div
            className="blog-d-container text-black m-0"
            dangerouslySetInnerHTML={{ __html: blog.data }}
          ></div>
        </article>
        {/* <aside className="col-span-1 ">
            <RecentBlogs />
          </aside> */}
      </div>
      {/* </div> */}
      {/* <article>
        <LatestPosts />
      </article> */}
      <Section className="bg-blue-dark md:!py-16 py-8">
        <Container>
          <div className="grid md:grid-cols-7 place-items-center max-md:gap-8">
            <div className="md:col-span-6 grid  md:grid-cols-2 max-md:gap-4 md:divide-x md:divide-x-white">
              <Link href="tel:+91 95018 68775" className="flex gap-4">
                <span className="">
                  <CircleCallIcon />
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl md:text-[2rem]/[2.4rem] text-white font-semibold">
                    Get a free consultation
                  </h2>
                  <p className="text-white md:text-lg">+91 95018 68775</p>
                </div>
              </Link>
              <div className="md:px-20">
                <p className="text-white md:text-lg max-md:text-center">
                  Explore digital success in a free consultation with Fielmente,
                  crafting tailored strategies for your online goals.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              <Link
                href="/contact"
                className="bg-white text-[#363636] rounded-lg px-10 py-3 capitalize text-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
};

export default DynamicBlog;
