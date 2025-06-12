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
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
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

const Page = async (props: Params) => {
  const params = await props.params;
  const data = blogData.find((item) => item.link === params.slug);
  // console.log(data);
  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <main >
      <DynamicBlog blog={data} />
    </main>
  );
};

export default Page;
