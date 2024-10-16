import { blogData } from "../../utils/blogdata";
import { PopupForm } from "../landing-page/components";
import DynamicBlog from "./components/DynamicBlog";



export async function generateStaticParams() {
  const posts = blogData;

  return posts.map((post) => ({
    slug: post.link,
  }));
}
// Generate static paths based on blog links
interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params) {
  const data = blogData.find((item) => item.link === params.slug);
  if (!data) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: data.title,
  };
}
// Fetch blog data based on slug

const Page = ({ params }: Params) => {
  const data = blogData.find((item) => item.link === params.slug);
  // console.log(data);
  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <main style={{background: "radial-gradient(circle, rgba(228,242,238,1) 0%, rgba(235,245,238,1) 100%)"}}>
      <DynamicBlog blog={data} />
    </main>
  );
};

export default Page;
