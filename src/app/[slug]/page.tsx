import Form1 from "@/components/Forms/Form1";
import { Container, Section, SectionWithContainer } from "@/components/sectionComponants";
import { CircleCallIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { blogData } from "../../utils/blogdata";

interface Params {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const posts = await blogData;
  return posts.map((post) => ({
    slug: post.link,
    fallback: false,
  }));
}
// Generate static paths based on blog links

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const data = await blogData.find((item) => item.link === params.slug);
  if (!data) {
    return notFound();
  }

  return {
    title: data.meta?.title || data.title,
    description: data.meta?.description || data.description,
    openGraph: {
      title: data.meta?.title || data.title,
      description: data.meta?.description || data.description,
      url: `https://fielmente.com/${params.slug}`,
    },
    alternates: {
      canonical: `https://fielmente.com/${params.slug}/`,
      languages: {
        "en-US": `https://fielmente.com/${params.slug}/`,
      },
    },
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
// Fetch blog data based on slug

const Page = async (props: Params) => {
  const params = await props.params;
  const data = blogData.find((item) => item.link === params.slug);
  if (!data) {
    redirect("/");
  }

  return (
    <main>
      {/* <DynamicBlog blog={data} /> */}
      <section className="pt-7 md:pt-12">
            <div className="max-width">
              {/* <div className="lg:grid grid-cols-4 gap-8"> */}
              <article className="col-span-3 mb-8">
                <div className="mb-3">
                  <div className="w-full relative aspect-[4/3] md:aspect-[4/1.7] overflow-hidden rounded-2xl">
                    {data.url && (
                      <Image
                        src={data.url}
                        alt={data.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#000000]/50">
                      <h1 className="font-semibold text-white md:text-5xl/tight text-xl text-center md:mx-12 mx-8">
                        
                        {data.title}
                      </h1>
                    </div>
                  </div>
                </div>
                {data.addimg && (
                  <div className="">
                    <div className="relative max-w-full h-max aspect-[4/1] overflow-hidden rounded-2xl text-start">
                      <Link href={data.link}>
                        <Image
                          src={data.addimg}
                          alt={data.title}
                          fill
                          className="object-contain rounded-2xl"
                        />
                      </Link>
                    </div>
                  </div>
                )}
                <div
                  className="blog-d-container text-black m-0"
                  dangerouslySetInnerHTML={{ __html: data.data }}
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
            <SectionWithContainer >
              <div className="md:max-w-5xl mx-auto">
                <Form1 />
              </div>
            </SectionWithContainer>
          </section>
    </main>
  );
};

export default Page;
