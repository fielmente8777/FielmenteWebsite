"use client";
import Link from "next/link";
import LatestPosts from "./LatestPosts";
import RecentBlogs from "./RecentBlogs";
import { blogtype } from "../../../utils/blogdata";
import Image from "next/image";

interface DynamicBlogProps {
  blog: blogtype;
}

const DynamicBlog: React.FC<DynamicBlogProps> = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section className="pt-9">
      <div className="max-width">
        <div className="lg:grid grid-cols-4 gap-8">
          <article className="col-span-3">
            <div className="mb-10">
              <h1 className="text-lg font-bold text-black lg:text-center">
                <Link href="/" className="text-blue-500">
                  Home »
                </Link>{" "}
                <Link href="/blogs" className="text-blue-500">
                  Blogs »
                </Link>{" "}
                {blog.title}
              </h1>
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
          <aside className="col-span-1 ">
            <RecentBlogs />
          </aside>
        </div>
      </div>
      <article>
        <LatestPosts />
      </article>
    </section>
  );
};

export default DynamicBlog;
